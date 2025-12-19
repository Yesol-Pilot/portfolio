import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// GLSL Shader for Accretion Disk (Black Hole effect)
const BlackHoleShader = {
    uniforms: {
        uTime: { value: 0 },
        uColorInner: { value: new THREE.Color('#ffaa00') }, // Orange/Gold
        uColorOuter: { value: new THREE.Color('#00ffff') }, // Cyan
    },
    vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        void main() {
            vUv = uv;
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform float uTime;
        uniform vec3 uColorInner;
        uniform vec3 uColorOuter;
        varying vec2 vUv;
        varying vec3 vPosition;

        // Simple Noise
        float noise(vec2 p) {
            return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
        }

        void main() {
            // Center is (0.5, 0.5)
            vec2 center = vec2(0.5);
            vec2 pos = vUv - center;
            float r = length(pos) * 2.0; // Radius 0 to 1
            float angle = atan(pos.y, pos.x);

            // Black Hole Event Horizon (Center)
            float eventHorizon = smoothstep(0.15, 0.2, r); // Smaller black hole hole
            
            // Accretion Disk Pattern
            // Spiral rotation
            float spiral = angle + 10.0 / (r + 0.1) - uTime * 2.0;
            float diskNoise = noise(vec2(r * 10.0, spiral * 5.0));
            
            // Soft glow
            float glow = 1.0 / (r + 0.1) * 0.1;
            
            // Disk Ring
            float disk = smoothstep(0.2, 0.5, r) * smoothstep(1.0, 0.4, r); // Wider fade out
            
            // Color mixing
            vec3 color = mix(uColorOuter, uColorInner, diskNoise);
            color += glow * uColorOuter;
            
            // Apply patterns
            float intensity = disk * (0.8 + 0.2 * diskNoise) + glow;
            
            // Final masking
            vec3 finalColor = color * intensity * eventHorizon;
            
            // Alpha fade at edges (Ensure scale is large enough so this fade happens off-screen or smooth)
            float alpha = smoothstep(0.0, 0.1, intensity);

            gl_FragColor = vec4(finalColor, alpha);
        }
    `
};

const QuantumWarp = ({ isFinished }) => {
    const shaderRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (shaderRef.current) {
            // High speed
            shaderRef.current.uniforms.uTime.value = t * 2.0;
        }

        // Disable camera movement to fix clipping suspicion (or keep it very subtle)
        // state.camera.position.x = 0;
        // state.camera.position.y = 0;
        state.camera.lookAt(0, 0, 0);

        // Core Pulsing
        const pulse = 1 + Math.sin(t * 3) * 0.05;
        if (shaderRef.current && shaderRef.current.parent) {
            shaderRef.current.parent.scale.set(pulse, pulse, 1);
        }
    });

    const shaderMaterial = useMemo(() => new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uColorInner: { value: new THREE.Color('#ffaa00') },
            uColorOuter: { value: new THREE.Color('#00ccff') },
        },
        vertexShader: BlackHoleShader.vertexShader,
        fragmentShader: BlackHoleShader.fragmentShader,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    }), []);

    return (
        <group>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={3} />

            {/* The Event Horizon (Disk) - HUGE SCALE to prevent clipping */}
            <mesh rotation={[-Math.PI / 3, 0, 0]} scale={[2, 2, 2]}>
                <planeGeometry args={[50, 50]} /> {/* Increased from 18 to 50 */}
                <primitive object={shaderMaterial} attach="material" ref={shaderRef} />
            </mesh>

            {/* Infalling Particles */}
            <group rotation={[-Math.PI / 3, 0, 0]}>
                <Sparkles count={500} scale={[20, 20, 5]} size={4} speed={2} opacity={0.6} color="#ffaa00" />
            </group>

            {/* The Singularity */}
            <mesh position={[0, 0, 0.1]}>
                <sphereGeometry args={[2, 64, 64]} />
                <meshBasicMaterial color="#000000" />
            </mesh>
        </group>
    );
};

export default QuantumWarp;
