import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Image, useScroll, Html } from '@react-three/drei';
import * as THREE from 'three';
import { projects } from '../../data/ProjectData';

const ProjectNode = ({ position, project, rotationSpeed = 0.5 }) => {
    const meshRef = useRef();
    const groupRef = useRef();

    useFrame((state, delta) => {
        meshRef.current.rotation.y += delta * rotationSpeed;
        // Keep text facing camera
        // groupRef.current.lookAt(state.camera.position); 
    });

    return (
        <group position={position} ref={groupRef}>
            <mesh ref={meshRef}>
                <planeGeometry args={[3, 2]} />
                <meshBasicMaterial color="black" transparent opacity={0.8} side={THREE.DoubleSide} />
                <lineSegments>
                    <edgesGeometry args={[new THREE.PlaneGeometry(3, 2)]} />
                    <lineBasicMaterial color="#0891b2" />
                </lineSegments>
            </mesh>
            <group position={[0, -1.2, 0]}>
                <Text fontSize={0.2} color="#ffffff" anchorX="center" anchorY="top">
                    {project.title}
                </Text>
                <Text position={[0, -0.3, 0]} fontSize={0.1} color="#aaaaaa" anchorX="center" anchorY="top">
                    {project.description}
                </Text>
            </group>
        </group>
    );
};

const WorkScene = () => {
    const groupRef = useRef();
    const scroll = useScroll();

    useFrame(() => {
        const r = scroll.range(1 / 5, 1 / 5);
        if (groupRef.current) {
            groupRef.current.rotation.y = r * Math.PI * 2;
        }
    });

    const radius = 4;

    return (
        <group position={[0, -10, 0]} ref={groupRef}>
            {/* Orbital System */}
            {projects.map((project, index) => {
                const angle = (index / projects.length) * Math.PI * 2;
                const x = Math.cos(angle) * radius;
                const z = Math.sin(angle) * radius;
                return (
                    <ProjectNode
                        key={project.id}
                        position={[x, 0, z]}
                        project={project}
                        rotationSpeed={0.2}
                    />
                );
            })}

            {/* Orbit Rings */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[radius - 0.2, radius + 0.2, 64]} />
                <meshBasicMaterial color="#ffffff" transparent opacity={0.05} side={THREE.DoubleSide} />
            </mesh>
        </group>
    );
};

export default WorkScene;
