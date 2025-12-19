import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Sparkles, MeshTransmissionMaterial, MeshDistortMaterial, Float, Trail, Ring } from '@react-three/drei';
import * as THREE from 'three';

// 💎 Lab 01: The Prism - Crystalline Planet (유리/프리즘)
// 특징: 다이아몬드 형태, 빛의 굴절, 홀로그램 효과
const CrystalPlanet = ({ color }) => {
    const groupRef = useRef();
    const innerRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.y = t * 0.2;
            groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
        }
        if (innerRef.current) {
            innerRef.current.rotation.y = -t * 0.5;
            innerRef.current.rotation.z = t * 0.3;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <group ref={groupRef}>
                {/* Outer Diamond Shell */}
                <mesh>
                    <octahedronGeometry args={[1.3, 0]} />
                    <MeshTransmissionMaterial
                        backside
                        backsideThickness={2}
                        thickness={3}
                        roughness={0}
                        transmission={1}
                        ior={2.4}
                        chromaticAberration={2}
                        anisotropy={1.5}
                        distortion={0.5}
                        distortionScale={0.3}
                        temporalDistortion={0.1}
                        color={color}
                        background={new THREE.Color('#000000')}
                    />
                </mesh>

                {/* Inner Rotating Core */}
                <group ref={innerRef}>
                    <mesh scale={0.4}>
                        <icosahedronGeometry args={[1, 1]} />
                        <meshBasicMaterial color="#00ffff" wireframe />
                    </mesh>
                </group>

                {/* Holographic Rings */}
                <Ring args={[1.5, 1.55, 64]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshBasicMaterial color="#00ffff" transparent opacity={0.3} side={THREE.DoubleSide} />
                </Ring>
                <Ring args={[1.8, 1.83, 64]} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
                    <meshBasicMaterial color="#ff00ff" transparent opacity={0.2} side={THREE.DoubleSide} />
                </Ring>

                <Sparkles count={60} scale={3.5} size={4} speed={0.3} opacity={0.9} color="cyan" />
            </group>
        </Float>
    );
};

// 🌿 Lab 02: The Terrarium - Living Planet (유기체/숨쉬는 생명체)
// 특징: 맥동하는 표면, 포자 입자, 생물발광
const OrganicPlanet = ({ color }) => {
    const groupRef = useRef();
    const pulseRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (pulseRef.current) {
            // 숨쉬는 효과
            const breathe = 1 + Math.sin(t * 0.8) * 0.05;
            pulseRef.current.scale.setScalar(breathe);
        }
        if (groupRef.current) {
            groupRef.current.rotation.y = t * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Core Body - Breathing */}
            <group ref={pulseRef}>
                <mesh>
                    <sphereGeometry args={[1.1, 128, 128]} />
                    <MeshDistortMaterial
                        color={color}
                        envMapIntensity={0.5}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                        metalness={0.1}
                        roughness={0.3}
                        distort={0.5}
                        speed={2}
                    />
                </mesh>
            </group>

            {/* Bioluminescent Veins Layer */}
            <mesh scale={1.02}>
                <sphereGeometry args={[1.1, 32, 32]} />
                <meshBasicMaterial
                    color="#00ff88"
                    wireframe
                    transparent
                    opacity={0.15}
                />
            </mesh>

            {/* Floating Spore Clusters */}
            <Sparkles count={100} scale={4} size={3} speed={0.5} opacity={0.7} color="#a3e635" />
            <Sparkles count={30} scale={2.5} size={6} speed={0.2} opacity={0.5} color="#4ade80" />
        </group>
    );
};

// 🔊 Lab 03: The Resonance - Gas Giant (가스 거인/음파)
// 특징: 거대한 링, 대기층, 폭풍 소용돌이
const GasGiant = ({ color }) => {
    const groupRef = useRef();
    const ringRef = useRef();
    const stormRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.y = t * 0.1;
        }
        if (ringRef.current) {
            ringRef.current.rotation.z = t * 0.05;
        }
        if (stormRef.current) {
            // 폭풍 소용돌이 회전
            stormRef.current.rotation.y = t * 0.5;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Core Surface */}
            <mesh>
                <sphereGeometry args={[1.2, 64, 64]} />
                <meshStandardMaterial
                    color={color}
                    roughness={0.7}
                    metalness={0.1}
                />
            </mesh>

            {/* Atmospheric Bands */}
            <mesh scale={1.03}>
                <sphereGeometry args={[1.2, 64, 32]} />
                <meshStandardMaterial
                    color="#fcd34d"
                    transparent
                    opacity={0.4}
                    roughness={1}
                />
            </mesh>

            {/* Turbulent Storm Layer */}
            <group ref={stormRef}>
                <mesh scale={1.06}>
                    <sphereGeometry args={[1.2, 64, 64]} />
                    <MeshDistortMaterial
                        color="#f59e0b"
                        transparent
                        opacity={0.25}
                        distort={0.3}
                        speed={5}
                        roughness={1}
                    />
                </mesh>
            </group>

            {/* Grand Rings System */}
            <group ref={ringRef} rotation={[Math.PI / 2.5, 0.2, 0]}>
                {/* Main Ring */}
                <mesh rotation={[-Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[1.8, 3.2, 128]} />
                    <meshStandardMaterial
                        color="#fbbf24"
                        emissive="#fbbf24"
                        emissiveIntensity={0.15}
                        transparent
                        opacity={0.5}
                        side={THREE.DoubleSide}
                        metalness={0.9}
                        roughness={0.3}
                    />
                </mesh>
                {/* Gap Ring */}
                <mesh rotation={[-Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[2.4, 2.5, 128]} />
                    <meshBasicMaterial color="#1a1a1a" transparent opacity={0.5} side={THREE.DoubleSide} />
                </mesh>
                {/* Outer Dust Ring */}
                <mesh rotation={[-Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[3.4, 4, 128]} />
                    <meshBasicMaterial color="#fef3c7" transparent opacity={0.2} side={THREE.DoubleSide} />
                </mesh>
            </group>

            <Sparkles count={50} scale={5} size={2} speed={0.3} opacity={0.4} color="#fde68a" />
        </group>
    );
};

// 🚧 Lab 04: The Glitch - Fractured Moon (불안정/깨진 달)
// 특징: 파편화, 글리치 효과, 불안정한 움직임
const GlitchMoon = ({ color }) => {
    const groupRef = useRef();
    const fragmentsRef = useRef([]);
    const glitchOffset = useRef({ x: 0, y: 0, z: 0 });

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        // Random glitch jitter
        if (Math.random() > 0.92) {
            glitchOffset.current = {
                x: (Math.random() - 0.5) * 0.15,
                y: (Math.random() - 0.5) * 0.15,
                z: (Math.random() - 0.5) * 0.15
            };
        } else {
            glitchOffset.current = { x: 0, y: 0, z: 0 };
        }

        if (groupRef.current) {
            groupRef.current.position.x = glitchOffset.current.x;
            groupRef.current.position.y = glitchOffset.current.y;
            groupRef.current.rotation.y = t * 0.1;
        }
    });

    // Floating fragments
    const fragments = useMemo(() =>
        Array.from({ length: 8 }, (_, i) => ({
            position: [
                Math.sin(i * Math.PI / 4) * 1.8,
                (Math.random() - 0.5) * 0.8,
                Math.cos(i * Math.PI / 4) * 1.8
            ],
            scale: 0.15 + Math.random() * 0.15,
            rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0]
        }))
        , []);

    return (
        <group ref={groupRef}>
            {/* Corrupted Core */}
            <mesh>
                <icosahedronGeometry args={[0.95, 1]} />
                <meshStandardMaterial
                    color="#ef4444"
                    wireframe
                    emissive="#ff0000"
                    emissiveIntensity={2.5}
                />
            </mesh>

            {/* Dark Inner Void */}
            <mesh scale={0.75}>
                <icosahedronGeometry args={[1, 0]} />
                <meshBasicMaterial color="#0a0a0a" />
            </mesh>

            {/* Error Scanlines */}
            <mesh scale={1.1}>
                <sphereGeometry args={[0.95, 8, 32]} />
                <meshBasicMaterial
                    color="#ff0000"
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </mesh>

            {/* Floating Debris */}
            {fragments.map((frag, i) => (
                <mesh key={i} position={frag.position} scale={frag.scale} rotation={frag.rotation}>
                    <octahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial
                        color="#dc2626"
                        emissive="#ff0000"
                        emissiveIntensity={1}
                        wireframe
                    />
                </mesh>
            ))}

            {/* Error Particles */}
            <Sparkles count={40} scale={3} size={8} speed={15} opacity={0.8} color="#ff3333" noise={2} />
            <Sparkles count={20} scale={2} size={3} speed={5} opacity={0.5} color="#ffff00" noise={1} />
        </group>
    );
};

const PlanetFactory = ({ type, color }) => {
    switch (type) {
        case 'Crystalline Planet': return <CrystalPlanet color={color} />;
        case 'Living Planet': return <OrganicPlanet color={color} />;
        case 'Gas Giant': return <GasGiant color={color} />;
        case 'Fractured Moon': return <GlitchMoon color={color} />;
        default: return <Sphere args={[1]}><meshStandardMaterial color={color} /></Sphere>;
    }
};

export default PlanetFactory;
