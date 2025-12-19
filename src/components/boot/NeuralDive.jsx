import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NeuralDive = ({ isFinished }) => {
    const groupRef = useRef();

    // Generate Brain/Sphere Particles
    const particles = useMemo(() => {
        const count = 2000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        const colorBase = new THREE.Color('#00ffff'); // Cyan
        const colorActive = new THREE.Color('#ff00ff'); // Magenta

        for (let i = 0; i < count; i++) {
            // Sphere distribution
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const r = 10 + Math.random() * 0.5; // Surface of sphere radius 10

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);

            // Random colors suggesting activity
            const active = Math.random() > 0.8;
            const col = active ? colorActive : colorBase;
            colors[i * 3] = col.r;
            colors[i * 3 + 1] = col.g;
            colors[i * 3 + 2] = col.b;
        }

        return { positions, colors };
    }, []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        if (groupRef.current) {
            // Rotate the brain
            groupRef.current.rotation.y = t * 0.2;

            // Pulse scale
            const pulse = 1 + Math.sin(t * 2) * 0.02;
            groupRef.current.scale.set(pulse, pulse, pulse);
        }

        // Camera fixed overview
        state.camera.position.z = 30;
        state.camera.lookAt(0, 0, 0);
    });

    return (
        <group ref={groupRef}>
            <fog attach="fog" args={['#000000', 20, 60]} />

            {/* Neural Nodes */}
            <points>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particles.positions.length / 3}
                        array={particles.positions}
                        itemSize={3}
                    />
                    <bufferAttribute
                        attach="attributes-color"
                        count={particles.colors.length / 3}
                        array={particles.colors}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.3}
                    sizeAttenuation={true}
                    depthWrite={false}
                    vertexColors={true}
                    blending={THREE.AdditiveBlending}
                    transparent={true}
                    opacity={0.8}
                />
            </points>

            {/* Inner Core connecting them */}
            <mesh>
                <icosahedronGeometry args={[9.5, 2]} />
                <meshBasicMaterial color="#0044ff" wireframe transparent opacity={0.1} />
            </mesh>

            {/* Central Intelligence Light */}
            <pointLight position={[0, 0, 0]} intensity={2} color="#00ffff" distance={40} />
        </group>
    );
};

export default NeuralDive;
