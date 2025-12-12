import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const TestScene = () => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.5;
            meshRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <group>
            {/* Simple rotating cube */}
            <mesh ref={meshRef} position={[0, 0, 0]}>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color="#00ff41" wireframe />
            </mesh>

            {/* Additional cubes */}
            <mesh position={[-3, 0, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#06b6d4" />
            </mesh>

            <mesh position={[3, 0, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#ec4899" />
            </mesh>

            {/* Grid helper */}
            <gridHelper args={[20, 20, 0x444444, 0x222222]} position={[0, -2, 0]} />
        </group>
    );
};

export default TestScene;
