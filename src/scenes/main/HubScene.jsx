import { Environment, Stars, Sparkles, Cloud, MeshReflectorMaterial } from '@react-three/drei';
import SolarSystem from '../../components/solar/SolarSystem';
import TechConstellation from '../../components/solar/TechConstellation';

const HubScene = () => {
    return (
        <group position={[0, -1, 0]}>
            <Environment preset="city" />

            {/* Deep Space Background */}
            <Stars
                radius={300} // Much wider radius
                depth={100}
                count={10000} // Double stars
                factor={6}
                saturation={0.5}
                fade
                speed={0.5}
            />

            <Sparkles count={800} scale={40} size={2} speed={0.2} opacity={0.4} color="#ffffff" />
            <fog attach="fog" args={['#050510', 20, 60]} /> {/* Slightly deeper fog */}

            {/* Cinematic Background Elements: NEBULA */}
            <Cloud opacity={0.2} seed={1} position={[20, 0, -30]} speed={0.1} color="#0c4a6e" segments={20} bounds={[10, 2, 2]} volume={10} />
            <Cloud opacity={0.2} seed={2} position={[-20, 10, -40]} speed={0.1} color="#4c1d95" segments={20} bounds={[10, 2, 2]} volume={10} />

            {/* The Solar System Architecture */}
            <SolarSystem />

            {/* Background Skills */}
            <TechConstellation />

            {/* Premium Reflective Floor (Glassy Metaverse Look) */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
                <planeGeometry args={[100, 100]} />
                <MeshReflectorMaterial
                    blur={[300, 100]}
                    resolution={1024}
                    mixBlur={1}
                    mixStrength={60} // Strength of reflection
                    roughness={0.5} // Glassy but slightly rough
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#101010"
                    metalness={0.8}
                    mirror={0.5} // Reflection intensity
                />
            </mesh>

            <spotLight position={[-10, 10, 10]} angle={0.3} penumbra={1} intensity={10} color="#06b6d4" />
        </group>
    );
};

export default HubScene;
