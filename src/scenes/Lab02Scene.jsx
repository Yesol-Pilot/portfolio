import { useState, useEffect, useMemo } from 'react';
import { Physics, usePlane, useBox, useSphere } from '@react-three/cannon';
import { useStore } from '../hooks/useStore';
import { Text, Html, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

const Floor = () => {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], position: [0, -5, 0] }));
    return (
        <mesh ref={ref} receiveShadow>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial color="#050505" transparent opacity={0.5} roughness={0.1} mirrorness={1} />
        </mesh>
    );
};

// Variety of shapes for physics objects
const PhysBox = ({ position, color }) => {
    const [ref, api] = useBox(() => ({ mass: 1, position, args: [1, 1, 1] }));
    return (
        <InteractiveShape api={api} manualRef={ref} color={color}>
            <boxGeometry args={[1, 1, 1]} />
        </InteractiveShape>
    );
};

const PhysSphere = ({ position, color }) => {
    const [ref, api] = useSphere(() => ({ mass: 1, position, args: [0.7] }));
    return (
        <InteractiveShape api={api} manualRef={ref} color={color}>
            <sphereGeometry args={[0.7, 32, 32]} />
        </InteractiveShape>
    );
};

const InteractiveShape = ({ api, manualRef, children, color }) => {
    const [hovered, setHover] = useState(false);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (clicked) {
            const timeout = setTimeout(() => setClicked(false), 200);
            return () => clearTimeout(timeout);
        }
    }, [clicked]);

    const blast = () => {
        setClicked(true);
        api.applyImpulse(
            [(Math.random() - 0.5) * 20, 20 + Math.random() * 10, (Math.random() - 0.5) * 20],
            [0, 0, 0]
        );
        api.applyTorque([Math.random() * 20, Math.random() * 20, Math.random() * 20]);
    };

    return (
        <mesh
            ref={manualRef}
            onClick={(e) => { e.stopPropagation(); blast(); }}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            castShadow
            receiveShadow
        >
            {children}
            <meshPhysicalMaterial
                color={clicked ? "#ffffff" : (hovered ? "#00ff41" : color)}
                emissive={clicked ? "#ffffff" : (hovered ? "#00ff41" : color)}
                emissiveIntensity={clicked ? 2 : (hovered ? 0.5 : 0.2)}
                metalness={0.8}
                roughness={0.2}
                clearcoat={1}
            />
        </mesh>
    );
};

const Lab02Scene = () => {
    const [gravity, setGravity] = useState([0, -9.8, 0]);
    const [zeroG, setZeroG] = useState(false);

    const toggleGravity = () => {
        if (zeroG) {
            setGravity([0, -9.8, 0]);
            setZeroG(false);
        } else {
            setGravity([0, 0.5, 0]); // Slight upward float
            setZeroG(true);
        }
    };

    // Generate random objects
    const objects = useMemo(() => {
        const objs = [];
        const colors = ['#7c3aed', '#06b6d4', '#facc15', '#ec4899'];
        for (let i = 0; i < 15; i++) {
            const x = (Math.random() - 0.5) * 6;
            const y = 5 + Math.random() * 10;
            const z = (Math.random() - 0.5) * 6;
            const type = Math.random() > 0.5 ? 'box' : 'sphere';
            const color = colors[Math.floor(Math.random() * colors.length)];
            objs.push({ type, position: [x, y, z], color, id: i });
        }
        return objs;
    }, []);

    const Controls = () => (
        <Html
            position={[3.5, 0, 0]}
            transform
            distanceFactor={5}
            zIndexRange={[100, 0]}
            style={{ pointerEvents: 'auto', userSelect: 'none' }}
        >
            <div
                className="w-72 bg-black/90 border border-[#7c3aed]/50 p-6 rounded-lg backdrop-blur-xl text-[#7c3aed] font-mono text-xs shadow-[0_0_30px_rgba(124,58,237,0.2)]"
            >
                <div className="mb-6 border-b border-[#7c3aed]/30 pb-2 font-bold flex justify-between tracking-widest">
                    <span>PHYSICS_ENGINE</span>
                    <span className="animate-pulse">● ACTIVE</span>
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between items-center bg-[#7c3aed]/10 p-3 rounded">
                        <span>GRAVITY_STATUS</span>
                        <span className={zeroG ? "text-cyan-400 font-bold" : "text-white opacity-50"}>
                            {zeroG ? "[ZERO-G]" : "[NORMAL]"}
                        </span>
                    </div>

                    <button
                        onClick={toggleGravity}
                        className={`w-full py-3 border transition-all font-bold tracking-widest hover:scale-105 active:scale-95 ${zeroG
                                ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)]'
                                : 'bg-transparent text-[#7c3aed] border-[#7c3aed] hover:bg-[#7c3aed] hover:text-black'
                            }`}
                    >
                        {zeroG ? 'RESTORE GRAVITY' : 'INITIATE ZERO-G'}
                    </button>

                    <div className="text-[10px] opacity-70 mt-2 text-center">
                        &gt; CLICK OBJECTS TO APPLY IMPULSE
                    </div>
                </div>
            </div>
        </Html>
    );

    return (
        <group>
            <color attach="background" args={['#05020b']} />
            <Environment preset="warehouse" />

            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Text
                    position={[0, 4, -5]}
                    fontSize={0.5}
                    color="#7c3aed"
                    font="https://fonts.gstatic.com/s/sharetechmono/v15/J7aHnp1uDWRCCytEs2UM2w.woff"
                    anchorX="center"
                    anchorY="middle"
                >
                    LAB 02 : PHYSICS SIMULATION
                </Text>
            </Float>

            <Physics gravity={gravity} iterations={10}>
                <Floor />
                {objects.map((obj) => (
                    obj.type === 'box' ?
                        <PhysBox key={obj.id} position={obj.position} color={obj.color} /> :
                        <PhysSphere key={obj.id} position={obj.position} color={obj.color} />
                ))}
            </Physics>

            <Controls />
        </group>
    );
};

export default Lab02Scene;
