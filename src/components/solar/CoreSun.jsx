import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { LORE } from '../../data/lore';

const CoreSun = () => {
    const meshRef = useRef();
    const glowRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            // 태양 자전 및 일렁임 보조
            meshRef.current.rotation.y = t * 0.05;
        }
        if (glowRef.current) {
            // 글로우 펄스 효과
            glowRef.current.scale.setScalar(1.2 + Math.sin(t * 1.5) * 0.05);
        }
    });

    const coreColor = new THREE.Color(LORE.SECTORS.PROFILE.visual.color);
    const glowColor = new THREE.Color(LORE.SECTORS.PROFILE.visual.color).multiplyScalar(2);

    return (
        <group>
            {/* 1. Main Core (Bright Sphere) */}
            <Sphere ref={meshRef} args={[1.5, 64, 64]}>
                <meshStandardMaterial
                    color={coreColor}
                    emissive={coreColor}
                    emissiveIntensity={1}
                    roughness={0.1}
                    metalness={0.8}
                    toneMapped={false}
                />
            </Sphere>

            {/* 2. Inner Light Source */}
            <pointLight distance={20} intensity={5} color={coreColor} />

            {/* 3. Outer Glow (Atmosphere) */}
            <mesh ref={glowRef} scale={[1.2, 1.2, 1.2]}>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshBasicMaterial
                    color={glowColor}
                    transparent
                    opacity={0.15}
                    side={THREE.BackSide}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* 4. Particle Halo */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[2.5, 2.6, 64]} />
                <meshBasicMaterial
                    color={glowColor}
                    transparent
                    opacity={0.1}
                    side={THREE.DoubleSide}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>
        </group>
    );
};

export default CoreSun;
