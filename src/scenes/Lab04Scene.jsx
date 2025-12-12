import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html, Float, Wireframe, Grid, PerspectiveCamera } from '@react-three/drei';
import { useStore } from '../hooks/useStore';
import * as THREE from 'three';

const Lab04Scene = () => {
    const setScene = useStore(state => state.setScene);
    const [debugMode, setDebugMode] = useState(true);

    // Matrix Rain Effect (Simulated with Text instances or Particles)
    // For MVP, we'll use a wireframe aesthetic with floating code snippets

    return (
        <group>
            {/* Dark Grid Floor - The Construct */}
            <Grid
                args={[100, 100]}
                cellSize={1}
                cellThickness={0.5}
                sectionSize={3}
                sectionThickness={1}
                sectionColor="#00ff41"
                cellColor="#003300"
                fadeDistance={30}
            />

            {/* Central Debug Terminal */}
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <group position={[0, 1, 0]}>
                    <mesh>
                        <boxGeometry args={[2, 2, 2]} />
                        <meshBasicMaterial color="black" wireframe />
                    </mesh>
                    <mesh>
                        <boxGeometry args={[1.9, 1.9, 1.9]} />
                        <meshBasicMaterial color="#00ff41" transparent opacity={0.1} />
                    </mesh>
                </group>
            </Float>

            {/* Floating Stats / Logs */}
            <Text
                position={[0, 3, 0]}
                fontSize={0.5}
                color="#00ff41"
                font="https://fonts.gstatic.com/s/sharetechmono/v15/J7aHnp1uDWRCCytEs2UM2w.woff"
            >
                DEBUG_MODE: ACTIVE
            </Text>

            <Html position={[3, 2, 0]} transform>
                <div className="w-64 bg-black/90 border border-green-500 p-4 font-mono text-xs text-green-500">
                    <div className="border-b border-green-500 mb-2 pb-1">SYSTEM_LOGS</div>
                    <div className="opacity-80">
                        > INITIATING LAB 04<br />
                        > LOADING ASSETS...<br />
                        > RENDERER: WEBGL<br />
                        > FPS: STABLE<br />
                        > USER: AUTHENTICATED
                    </div>
                </div>
            </Html>

            {/* Back Button */}
            <group position={[0, -2, 2]} onClick={() => setScene('hub')}>
                <Text fontSize={0.2} color="white">
                    [ RETURN TO HUB ]
                </Text>
            </group>
        </group>
    );
};

export default Lab04Scene;
