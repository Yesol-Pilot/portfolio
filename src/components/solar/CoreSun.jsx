import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Sparkles, MeshDistortMaterial, Billboard, Html } from '@react-three/drei';
import * as THREE from 'three';
import { LORE } from '../../data/lore';
import useSoundFX from '../../hooks/useSoundFX';
import { useStore } from '../../hooks/useStore';

const CoreSun = () => {
    const meshRef = useRef();
    const glowRef = useRef();
    const [hovered, setHovered] = useState(false);
    const { playHover, playClick } = useSoundFX();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            // 태양 자전 및 일렁임 보조
            meshRef.current.rotation.y = t * 0.1;
        }
        if (glowRef.current) {
            // 글로우 펄스 효과
            const baseScale = hovered ? 1.4 : 1.2;
            glowRef.current.scale.setScalar(baseScale + Math.sin(t * 3) * 0.05);
            glowRef.current.rotation.z -= 0.01;
        }
    });

    const coreColor = new THREE.Color(LORE.SECTORS.PROFILE.visual.color);
    const glowColor = new THREE.Color(LORE.SECTORS.PROFILE.visual.color).multiplyScalar(1.2); // Toned down glow

    return (
        <group
            onPointerEnter={(e) => {
                e.stopPropagation();
                setHovered(true);
                playHover();
                document.body.style.cursor = 'pointer';
            }}
            onPointerLeave={() => {
                setHovered(false);
                document.body.style.cursor = 'auto';
            }}
        >
            {/* 1. Main Plasma Core - Relaxed (Clickable Target) */}
            <Sphere
                ref={meshRef}
                args={[2.2, 64, 64]}
                onClick={(e) => {
                    e.stopPropagation();
                    playClick();
                    // Call parent handler via bubbling or direct store access if needed
                    // Since SolarSystem wraps this in a Group with onClick, we must ensure propagation or handle it here.
                    // The user reported "Identity is not clickable".
                    // The safest bet is to handle navigation directly here.
                    const setScene = useStore.getState().setScene;
                    setScene('profile');
                }}
            >
                <MeshDistortMaterial
                    color={coreColor}
                    emissive={coreColor}
                    emissiveIntensity={hovered ? 2.0 : 1.5}
                    roughness={0.2}
                    metalness={0.1}
                    distort={0.4}
                    speed={5}
                    toneMapped={false}
                />
            </Sphere>

            {/* 2. Inner Light Source - Softened */}
            <pointLight distance={40} intensity={8} color={coreColor} decay={2} />

            {/* 3. Primary Volumetric Glow (Inner Halo) - Reduced Opacity */}
            <mesh ref={glowRef} scale={[1.2, 1.2, 1.2]}>
                <sphereGeometry args={[2.2, 32, 32]} />
                <meshBasicMaterial
                    color={glowColor}
                    transparent
                    opacity={hovered ? 0.25 : 0.15}
                    side={THREE.BackSide}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </mesh>

            {/* 4. Secondary Soft Glow (Outer Aura) */}
            <mesh scale={[1.6, 1.6, 1.6]}>
                <sphereGeometry args={[2.3, 32, 32]} />
                <meshBasicMaterial
                    color={coreColor}
                    transparent
                    opacity={0.15}
                    side={THREE.BackSide}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </mesh>

            {/* 5. Rays / Coronal Loops (Sparkles) - Densified */}
            <Sparkles count={150} scale={10} size={15} speed={0.6} opacity={0.6} color="#fbbf24" noise={2} />

            {/* 6. Identity Label */}
            <Billboard position={[0, -3.5, 0]}>
                <Html transform center distanceFactor={15} style={{ pointerEvents: 'none' }}>
                    <div className={`flex flex-col items-center transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-70'}`}>
                        <div className="px-3 py-1 text-sm font-bold font-mono tracking-[0.2em] border border-white/20 bg-black/60 backdrop-blur-md rounded-full whitespace-nowrap text-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                            IDENTITY
                        </div>
                        <div className={`mt-2 text-[10px] text-white/50 font-mono tracking-widest transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                            CLICK TO VIEW
                        </div>
                    </div>
                </Html>
            </Billboard>
        </group >
    );
};

export default CoreSun;
