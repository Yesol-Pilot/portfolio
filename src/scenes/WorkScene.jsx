import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Image, useScroll } from '@react-three/drei';
import * as THREE from 'three';

const ProjectNode = ({ position, title, url, rotationSpeed = 0.5 }) => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        meshRef.current.rotation.y += delta * rotationSpeed;
    });

    return (
        <group position={position}>
            <mesh ref={meshRef}>
                <planeGeometry args={[3, 2]} />
                <meshBasicMaterial color="black" transparent opacity={0.8} side={THREE.DoubleSide} />
                <lineSegments>
                    <edgesGeometry args={[new THREE.PlaneGeometry(3, 2)]} />
                    <lineBasicMaterial color="#0891b2" />
                </lineSegments>
            </mesh>
            <Text position={[0, -1.2, 0]} fontSize={0.2} color="#ffffff" anchorX="center" anchorY="top">
                {title}
            </Text>
        </group>
    );
};

const WorkScene = () => {
    const groupRef = useRef();
    const scroll = useScroll();

    useFrame(() => {
        // Rotation controlled by scroll
        // Page 1 is where WorkScene starts (roughly)
        // We want to rotate the whole system as user scrolls
        const r = scroll.range(1 / 5, 1 / 5); // Example range
        if (groupRef.current) {
            groupRef.current.rotation.y = r * Math.PI * 2;
        }
    });

    return (
        <group position={[0, -10, 0]} ref={groupRef}> {/* Positioned lower for scroll flow */}
            {/* Orbital System */}
            <ProjectNode position={[0, 0, 4]} title="We Canvas" />
            <ProjectNode position={[4, 0, 0]} title="Safety VR" />
            <ProjectNode position={[0, 0, -4]} title="Metaverse ZEP" />
            <ProjectNode position={[-4, 0, 0]} title="Digital Twin" />

            {/* Orbit Rings */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[3.8, 4.2, 64]} />
                <meshBasicMaterial color="#ffffff" transparent opacity={0.05} side={THREE.DoubleSide} />
            </mesh>
        </group>
    );
};

export default WorkScene;
