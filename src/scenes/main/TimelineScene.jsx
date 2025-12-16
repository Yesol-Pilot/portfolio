import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Text } from '@react-three/drei';
import * as THREE from 'three';

const Milestone = ({ position, year, title, desc }) => {
    return (
        <group position={position}>
            <Text position={[-2, 0, 0]} fontSize={0.8} color="#7c3aed" anchorX="right">
                {year}
            </Text>
            <Text position={[0.5, 0.2, 0]} fontSize={0.3} color="#ffffff" anchorX="left">
                {title}
            </Text>
            <Text position={[0.5, -0.3, 0]} fontSize={0.15} color="#a3a3a3" anchorX="left" maxWidth={4}>
                {desc}
            </Text>
        </group>
    );
};

const TimelineScene = () => {
    const groupRef = useRef();
    const scroll = useScroll();

    useFrame(() => {
        // Move tunnel forward based on scroll
        const range = scroll.range(2 / 5, 1 / 5);
        if (groupRef.current) {
            groupRef.current.position.z = range * 20; // Move forward
        }
    });

    return (
        <group position={[0, -25, -10]} ref={groupRef}>
            {/* Tunnel Visuals (Wireframe Tube) */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[5, 5, 50, 16, 10, true]} />
                <meshBasicMaterial color="#333" wireframe opacity={0.2} transparent side={THREE.DoubleSide} />
            </mesh>

            {/* Milestones placed along the tunnel */}
            <Milestone position={[-1, 0, 5]} year="2025" title="ITRIVE" desc="Metaverse / XR PM" />
            <Milestone position={[1, 0, 0]} year="2023" title="JBEMS" desc="Blockchain Platform PM" />
            <Milestone position={[-1, 0, -5]} year="2021" title="ITS ZAVIS" desc="Service Dev Team Lead" />
        </group>
    );
};

export default TimelineScene;
