import { Environment, Stars, Sparkles, Cloud, MeshReflectorMaterial } from '@react-three/drei';
import SolarSystem from '../../components/solar/SolarSystem';
import TechConstellation from '../../components/solar/TechConstellation';

import { useStore } from '../../hooks/useStore';

const HubScene = () => {
    const performanceMode = useStore((state) => state.performanceMode);
    const isHighPerf = performanceMode === 'high';

    return (
        <group position={[0, -1, 0]}>
            <Environment preset="city" />

            {/* Deep Space Background - Reduced count in Low Mode */}
            <Stars
                radius={300}
                depth={100}
                count={isHighPerf ? 10000 : 2000}
                factor={6}
                saturation={0.5}
                fade
                speed={isHighPerf ? 0.5 : 0.1}
            />

            <Sparkles
                count={isHighPerf ? 800 : 200}
                scale={40}
                size={2}
                speed={0.2}
                opacity={0.4}
                color="#ffffff"
            />
            <fog attach="fog" args={['#050510', 20, 60]} />

            {/* Cinematic Background Elements: NEBULA - High Mode Only */}
            {isHighPerf && (
                <>
                    <Cloud opacity={0.2} seed={1} position={[20, 0, -30]} speed={0.1} color="#0c4a6e" segments={20} bounds={[10, 2, 2]} volume={10} />
                    <Cloud opacity={0.2} seed={2} position={[-20, 10, -40]} speed={0.1} color="#4c1d95" segments={20} bounds={[10, 2, 2]} volume={10} />
                </>
            )}

            {/* The Solar System Architecture */}
            <SolarSystem />

            {/* Background Skills */}
            <TechConstellation />

            {/* Premium Reflective Floor - Simplified in Low Mode */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
                <planeGeometry args={[100, 100]} />
                {isHighPerf ? (
                    <MeshReflectorMaterial
                        blur={[300, 100]}
                        resolution={1024}
                        mixBlur={1}
                        mixStrength={60}
                        roughness={0.5}
                        depthScale={1.2}
                        minDepthThreshold={0.4}
                        maxDepthThreshold={1.4}
                        color="#101010"
                        metalness={0.8}
                        mirror={0.5}
                    />
                ) : (
                    <meshStandardMaterial
                        color="#101010"
                        roughness={0.8}
                        metalness={0.2}
                    />
                )}
            </mesh>

            <spotLight position={[-10, 10, 10]} angle={0.3} penumbra={1} intensity={10} color="#06b6d4" />
        </group>
    );
};

export default HubScene;
