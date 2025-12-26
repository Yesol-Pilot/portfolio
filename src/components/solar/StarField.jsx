import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useStore } from '../../hooks/useStore';

const StarField = ({ count = 500 }) => {
    const mesh = useRef();
    const performanceMode = useStore((state) => state.performanceMode);
    const isHighPerf = performanceMode === 'high';

    // Reduce count in low perf mode
    const finalCount = isHighPerf ? count : Math.floor(count / 3); // Drastic reduction for Low Mode

    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Generate random particles
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < finalCount; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
        }
        return temp;
    }, [finalCount]);

    // Track mouse uniformly
    useFrame((state) => {
        if (!mesh.current) return;

        // Mouse influence
        const mouseX = (state.pointer.x * state.viewport.width) / 2;
        const mouseY = (state.pointer.y * state.viewport.height) / 2;

        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle;

            // Standard orbital movement
            t = particle.t += speed / 2;
            const a = Math.cos(t) + Math.sin(t * 1) / 10;
            const b = Math.sin(t) + Math.cos(t * 2) / 10;
            const s = Math.cos(t);

            // Mouse repulsion logic
            // Calculate distance to mouse projected on the Z plane mostly
            // This is a simplified "Space Dust" effect where mouse pushes dust away

            // Update position
            particle.mx += (mouseX - particle.mx) * 0.01;
            particle.my += (mouseY - particle.my) * 0.01;

            dummy.position.set(
                (particle.mx / 10) + a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                (particle.my / 10) + b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            );

            dummy.scale.setScalar(s * 0.5 + 0.5); // Pulsate size
            dummy.rotation.set(s * 5, s * 5, s * 5);
            dummy.updateMatrix();

            mesh.current.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, finalCount]}>
            <dodecahedronGeometry args={[0.05, 0]} /> {/* Small geometric dust */}
            <meshBasicMaterial color={isHighPerf ? "#a5f3fc" : "#ffffff"} transparent opacity={0.6} blending={THREE.AdditiveBlending} />
        </instancedMesh>
    );
};

export default StarField;
