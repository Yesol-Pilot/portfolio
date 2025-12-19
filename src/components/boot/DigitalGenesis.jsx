import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Instances, Instance, Environment, Grid } from '@react-three/drei';
import * as THREE from 'three';

const DigitalGenesis = ({ isFinished }) => {
    // Generate City Layout
    const buildings = useMemo(() => {
        const items = [];
        const size = 30;
        for (let i = 0; i < 200; i++) {
            const x = (Math.random() - 0.5) * size;
            const z = (Math.random() - 0.5) * size;
            if (Math.abs(x) < 2 && Math.abs(z) < 2) continue; // Clear center

            items.push({
                position: [x, 0, z],
                scale: [0.5 + Math.random(), 2 + Math.random() * 8, 0.5 + Math.random()],
                delay: Math.random() * 2 // Random start time
            });
        }
        return items;
    }, []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        // Camera Orbit
        state.camera.position.x = Math.sin(t * 0.2) * 25;
        state.camera.position.z = Math.cos(t * 0.2) * 25;
        state.camera.position.y = 15;
        state.camera.lookAt(0, 0, 0);
    });

    return (
        <group>
            {/* Tech Environment */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 20, 10]} intensity={1} color="#ffffff" />
            <Grid args={[50, 50]} cellSize={1} cellThickness={0.5} cellColor="#0044ff" sectionSize={5} sectionThickness={1} sectionColor="#0088ff" fadeDistance={30} />

            {/* Rising Buildings */}
            <Instances range={200}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#00ffff" emissive="#0044ff" emissiveIntensity={0.5} roughness={0.2} metalness={0.8} transparent opacity={0.8} />

                {buildings.map((data, i) => (
                    <Building key={i} data={data} />
                ))}
            </Instances>

            {/* Central Core Construct */}
            <mesh position={[0, 5, 0]}>
                <octahedronGeometry args={[2, 0]} />
                <meshBasicMaterial color="#ffffff" wireframe />
            </mesh>
            <pointLight position={[0, 5, 0]} intensity={5} color="#00ffff" distance={20} />
        </group>
    );
};

const Building = ({ data }) => {
    const ref = useRef();

    useFrame((state) => {
        if (!ref.current) return;
        const t = state.clock.getElapsedTime();

        // Appear logic: Scale Y from 0 to full
        // Max(0, t - delay)
        const progress = Math.min(1, Math.max(0, (t - data.delay) * 1.5));
        // Elastic ease out
        const ease = 1 - Math.pow(1 - progress, 3);

        const currentScaleY = data.scale[1] * ease;

        ref.current.position.set(data.position[0], currentScaleY / 2, data.position[2]);
        ref.current.scale.set(data.scale[0], currentScaleY, data.scale[2]);
    });

    return <Instance ref={ref} />;
};

export default DigitalGenesis;
