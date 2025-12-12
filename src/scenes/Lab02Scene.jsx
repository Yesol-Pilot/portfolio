import { useState, useMemo } from 'react';
import { Physics, usePlane, useBox } from '@react-three/cannon';
import { useStore } from '../hooks/useStore';
import { Text, Html, Environment, Billboard } from '@react-three/drei';
import * as THREE from 'three';

const Floor = () => {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], position: [0, -2, 0] }));
    return (
        <mesh ref={ref} receiveShadow>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial color="#111" transparent opacity={0.8} />
        </mesh>
    );
};

const InteractiveBox = ({ position }) => {
    const [ref, api] = useBox(() => ({ mass: 1, position, args: [1, 1, 1] }));
    const [hovered, setHover] = useState(false);

    const blast = () => {
        // Apply random impulse upwards and outwards
        api.applyImpulse(
            [(Math.random() - 0.5) * 10, 10 + Math.random() * 10, (Math.random() - 0.5) * 10],
            [0, 0, 0]
        );
        // Random rotation
        api.applyTorque([Math.random() * 10, Math.random() * 10, Math.random() * 10]);
    };

    return (
        <mesh
            ref={ref}
            onClick={(e) => { e.stopPropagation(); blast(); }}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            castShadow
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
                color={hovered ? "#00ff41" : "#7c3aed"}
                metalness={0.5}
                roughness={0.2}
                wireframe={hovered}
            />
        </mesh>
    );
};

const Wall = () => {
    const cubes = useMemo(() => {
        const c = [];
        for (let x = -4; x <= 4; x += 1.2) {
            for (let y = 0; y <= 5; y += 1.2) {
                c.push([x, y, 0]);
            }
        }
        return c;
    }, []);

    return (
        <group position={[0, 5, -5]}>
            {cubes.map((pos, i) => <InteractiveBox key={i} position={pos} />)}
        </group>
    );
};

const Lab02Scene = () => {
    const setScene = useStore(state => state.setScene);
    const [gravity, setGravity] = useState([0, -9.8, 0]);
    const [zeroG, setZeroG] = useState(false);

    const toggleGravity = () => {
        if (zeroG) {
            setGravity([0, -9.8, 0]);
            setZeroG(false);
        } else {
            setGravity([0, 0.5, 0]); // Slight float
            setZeroG(true);
        }
    };

    return (
        <group>
            {/* Thematic Background */}
            <color attach="background" args={['#05020b']} />
            <Environment preset="park" />

            <Billboard>
                <Text position={[0, 8, -8]} fontSize={0.6} color="white" anchorX="center">
                    GRAVITY LAB
                </Text>
            </Billboard>

            {/* Controls */}
            <Html position={[0, 6, -8]} transform>
                <div className="flex gap-4">
                    {/* Back button handled globally */}
                    <div className="px-4 py-2 border border-white/20 text-gray-400 font-mono text-xs backdrop-blur-md">
                        CLICK CUBES TO BLAST
                    </div>
                    <button
                        onClick={toggleGravity}
                        className={`px-4 py-2 border transition-all font-mono text-xs backdrop-blur-md ${zeroG ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' : 'bg-black/50 border-white/20 text-white hover:bg-white/10'}`}
                    >
                        {zeroG ? 'ZERO GRAVITY: ON' : 'ACTIVATE ZERO-G'}
                    </button>
                </div>
            </Html>

            <Physics gravity={gravity}>
                <Floor />
                <Wall />
                <InteractiveBox position={[0, 10, 2]} />
                <InteractiveBox position={[-2, 12, 2]} />
                <InteractiveBox position={[2, 14, 2]} />
            </Physics>
        </group>
    );
};

export default Lab02Scene;
