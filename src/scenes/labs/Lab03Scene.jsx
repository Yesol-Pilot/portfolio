import { useRef, useEffect, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, Environment, Billboard, Html } from '@react-three/drei';
import * as THREE from 'three';
import { useStore } from '../../hooks/useStore';

// --- Audio Manager Hook ---
const useAudioAnalyzer = (mode) => { // mode: 'mic' or 'demo'
    const [analyser, setAnalyser] = useState(null);
    const audioContextRef = useRef(null);
    const streamRef = useRef(null);
    const sourceRef = useRef(null);

    useEffect(() => {
        // Cleanup function
        const cleanup = () => {
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
            }
            if (audioContextRef.current) {
                audioContextRef.current.close();
            }
        };

        if (mode === 'mic') {
            cleanup();
            const initMic = async () => {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                    streamRef.current = stream;
                    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                    audioContextRef.current = audioCtx;
                    const source = audioCtx.createMediaStreamSource(stream);
                    const newAnalyser = audioCtx.createAnalyser();
                    newAnalyser.fftSize = 64; // Low resolution for retro feel
                    source.connect(newAnalyser);
                    setAnalyser(newAnalyser);
                } catch (err) {
                    console.error("Mic Error:", err);
                    // Fallback to demo if mic fails
                }
            };
            initMic();
        } else {
            // Demo Mode: No real audio setup needed here, we'll simulate data
            cleanup();
            setAnalyser(null);
        }

        return cleanup;
    }, [mode]);

    return analyser;
};

const Bars = ({ analyser, mode }) => {
    const groupRef = useRef();
    const count = 16;
    const spacing = 0.6;
    const dataArray = useMemo(() => new Uint8Array(32), []);

    useFrame((state) => {
        if (!groupRef.current) return;

        let data = [];
        if (mode === 'mic' && analyser) {
            analyser.getByteFrequencyData(dataArray);
            data = Array.from(dataArray).slice(0, count);
        } else {
            // Demo Mode Simulation
            const time = state.clock.elapsedTime;
            for (let i = 0; i < count; i++) {
                // Combine sine waves for organic movement
                const val = (Math.sin(time * 3 + i * 0.5) + Math.cos(time * 2 + i * 0.2)) * 0.5 + 0.5;
                data.push(val * 255);
            }
        }

        groupRef.current.children.forEach((child, i) => {
            if (data[i] !== undefined) {
                const value = data[i] / 255; // Normalized 0-1
                const targetScale = 0.5 + value * 5; // Min height 0.5, Max 5.5

                // Smooth interpolation
                child.scale.y = THREE.MathUtils.lerp(child.scale.y, targetScale, 0.2);

                // Color shift based on intensity
                const hue = 0.5 + value * 0.3; // Cyan to Purple
                child.material.color.setHSL(hue, 1, 0.5);
                child.material.emissive.setHSL(hue, 1, 0.2);
                child.material.emissiveIntensity = value * 2;
            }
        });
    });

    return (
        <group ref={groupRef} position={[-(count * spacing) / 2, -2, 0]}>
            {Array.from({ length: count }).map((_, i) => (
                <mesh key={i} position={[i * spacing, 2, 0]}>
                    <boxGeometry args={[0.4, 1, 0.4]} />
                    <meshStandardMaterial color="#06b6d4" roughnes={0.2} metalness={0.8} />
                </mesh>
            ))}
        </group>
    );
};

const Wave = ({ analyser, mode }) => {
    const mesh = useRef();
    const dataArray = useMemo(() => new Uint8Array(32), []);

    useFrame((state) => {
        if (!mesh.current) return;

        let intensity = 0;
        if (mode === 'mic' && analyser) {
            analyser.getByteFrequencyData(dataArray);
            // Calculate average intensity
            intensity = dataArray.reduce((a, b) => a + b, 0) / dataArray.length / 255;
        } else {
            intensity = (Math.sin(state.clock.elapsedTime) * 0.5 + 0.5);
        }

        const positions = mesh.current.geometry.attributes.position;
        const time = state.clock.elapsedTime;

        for (let i = 0; i < positions.count; i++) {
            const x = positions.getX(i);
            const y = positions.getY(i);

            // Ripple effect
            const dist = Math.sqrt(x * x + y * y);
            let z = Math.sin(dist * 2 - time * 3) * (0.5 + intensity * 2);

            // Add noise driven by audio intensity
            if (intensity > 0.1) {
                z += (Math.random() - 0.5) * intensity * 0.5;
            }

            positions.setZ(i, z);
        }
        positions.needsUpdate = true;
        mesh.current.material.opacity = 0.3 + intensity * 0.5;
    });

    return (
        <points ref={mesh} position={[0, -3, -2]} rotation={[-Math.PI / 2.5, 0, 0]}>
            <planeGeometry args={[20, 10, 64, 32]} />
            <pointsMaterial size={0.08} color="#ec4899" sizeAttenuation transparent opacity={0.5} />
        </points>
    );
}

const Lab03Scene = () => {
    const setScene = useStore(state => state.setScene);
    const [mode, setMode] = useState('demo'); // 'mic' or 'demo'
    const analyser = useAudioAnalyzer(mode);

    return (
        <group>
            {/* Thematic Background */}
            <color attach="background" args={['#02040b']} />
            <Environment preset="night" />

            <Billboard>
                <Text position={[0, 6, -5]} fontSize={0.6} color="white" anchorX="center">
                    AUDIO LAB [SYNTHETIC]
                </Text>
            </Billboard>

            {/* UI Controls */}
            <Html position={[0, 3.5, 0]} center transform distanceFactor={5}>
                <div className="flex gap-4 p-2 bg-black/80 rounded border border-cyan-500/30 backdrop-blur-md">
                    <button
                        onClick={() => setMode('demo')}
                        className={`px-4 py-1 rounded font-mono text-xs transition-all ${mode === 'demo' ? 'bg-cyan-600 text-white shadow-[0_0_10px_cyan]' : 'text-cyan-500 hover:bg-cyan-900/50'}`}
                    >
                        DEMO_MODE
                    </button>
                    <button
                        onClick={() => setMode('mic')}
                        className={`px-4 py-1 rounded font-mono text-xs transition-all ${mode === 'mic' ? 'bg-pink-600 text-white shadow-[0_0_10px_pink]' : 'text-pink-500 hover:bg-pink-900/50'}`}
                    >
                        LIVE_INPUT
                    </button>

                    <button
                        onClick={() => setScene('hub')}
                        className="px-4 py-1 rounded font-mono text-xs border border-white/30 text-white/70 hover:bg-white/10 hover:border-white/50 hover:text-white transition-all shadow-lg"
                    >
                        [ EXIT LAB ]
                    </button>
                </div>
            </Html>

            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <Bars analyser={analyser} mode={mode} />
            </Float>

            <Wave analyser={analyser} mode={mode} />

            {/* Floor Reflection Grid */}
            <gridHelper args={[50, 50, 0x333333, 0x050505]} position={[0, -4, 0]} />
        </group>
    );
};

export default Lab03Scene;
