import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, Html } from '@react-three/drei';

const ProcessStep = ({ position, title, subtitle, index }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <group position={position}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}>
            <mesh scale={hovered ? 1.2 : 1}>
                <boxGeometry args={[2.5, 1.5, 0.2]} />
                <meshStandardMaterial
                    color={hovered ? "#06b6d4" : "#1a1a1a"}
                    emissive={hovered ? "#06b6d4" : "#000000"}
                    emissiveIntensity={hovered ? 0.5 : 0}
                    wireframe
                />
            </mesh>
            <Text position={[0, 0.2, 0.2]} fontSize={0.3} color="white" anchorX="center">
                {title}
            </Text>
            <Text position={[0, -0.3, 0.2]} fontSize={0.15} color="#a3a3a3" anchorX="center">
                {subtitle}
            </Text>

            {hovered && (
                <Html position={[0, 1.5, 0]} center>
                    <div className="w-48 p-2 bg-black/80 border border-accent text-[10px] text-accent font-mono backdrop-blur-sm">
                        STEP 0{index + 1}: PROCESS INITIATED
                    </div>
                </Html>
            )}
        </group>
    );
};

const ProcessScene = () => {
    return (
        <group position={[0, -32, 0]}>
            <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
                <Text position={[0, 3, 0]} fontSize={0.8} color="#ffffff" anchorX="center">
                    PROCESS LAB
                </Text>

                <ProcessStep position={[-4, 0, 0]} title="DISCOVER" subtitle="Research & Analysis" index={0} />
                <ProcessStep position={[-1.5, 1.5, 0]} title="DEFINE" subtitle="Strategy & Planning" index={1} />
                <ProcessStep position={[1.5, 1.5, 0]} title="DESIGN" subtitle="UX/UI & Prototyping" index={2} />
                <ProcessStep position={[4, 0, 0]} title="DELIVER" subtitle="Dev & Launch" index={3} />

                {/* Connecting Lines */}
                <mesh position={[0, 0, -1]}>
                    <torusGeometry args={[5, 0.05, 16, 100, Math.PI]} rotation={[0, 0, Math.PI]} />
                    <meshBasicMaterial color="#333" />
                </mesh>
            </Float>
        </group>
    );
};

export default ProcessScene;
