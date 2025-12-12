import { useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html, Float, Grid, Environment, Billboard } from '@react-three/drei';
import { useStore } from '../hooks/useStore';

const Logs = () => {
    const [logs, setLogs] = useState([
        "> SYSTEM_INIT_SEQUENCE_START",
        "> CONNECTING_TO_MAIN_NET...",
        "> 3D_RENDERING_ENGINE: ONLINE",
        "> PHYSICS_MODULE: ACTIVE"
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setLogs(prev => {
                const newLog = `> PROCESS_${Math.floor(Math.random() * 9999)}_OK [${Math.random().toFixed(2)}ms]`;
                return [...prev.slice(-8), newLog];
            });
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <Html transform position={[3, 2, 0]} rotation={[0, -0.5, 0]} scale={0.5}>
            <div className="bg-black/80 border border-green-500 p-4 font-mono text-green-500 text-xs w-64 h-64 overflow-hidden shadow-[0_0_20px_rgba(0,255,0,0.2)]">
                <div className="border-b border-green-500/50 mb-2 pb-1">KERNEL_PANIC_VIEWER_V1.0</div>
                {logs.map((log, i) => (
                    <div key={i}>{log}</div>
                ))}
            </div>
        </Html>
    );
};

const RotatingWireframe = () => {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh>
                <torusKnotGeometry args={[1, 0.3, 100, 16]} />
                <meshBasicMaterial color="#00ff41" wireframe />
            </mesh>
            <mesh scale={1.1}>
                <torusKnotGeometry args={[1, 0.3, 100, 16]} />
                <meshBasicMaterial color="#00ff41" transparent opacity={0.1} />
            </mesh>
        </Float>
    );
};

const Lab04Scene = () => {
    const setScene = useStore(state => state.setScene);

    return (
        <group>
            {/* Thematic Background */}
            <color attach="background" args={['#000000']} />
            <Environment preset="city" />

            <Billboard>
                <Text position={[0, 4, -5]} fontSize={0.6} color="white" anchorX="center">
                    DEBUG MODE
                </Text>
            </Billboard>

            {/* Back Button */}
            <Html position={[0, 3.5, -5]} transform>
                <div className="px-4 py-1 bg-black border border-green-900 text-green-900 font-mono text-sm">
                    MONITORING ACTIVE...
                </div>
            </Html>

            <RotatingWireframe />
            <Logs />

            {/* Matrix-like Grid */}
            <Grid
                position={[0, -2, 0]}
                args={[20, 20]}
                cellSize={0.5}
                cellThickness={0.5}
                cellColor="#004400"
                sectionSize={2}
                sectionThickness={1}
                sectionColor="#00ff41"
                fadeDistance={15}
            />

            <mesh position={[0, -2.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[50, 50]} />
                <meshBasicMaterial color="black" />
            </mesh>

        </group>
    );
};

export default Lab04Scene;
