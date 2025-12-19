import { useState, useMemo, Suspense, useEffect } from 'react';
import { useStore } from '../../hooks/useStore';
import BootLogs from '../../components/core/BootLogs';
import React from 'react';
import { EffectComposer, Bloom, Noise, Vignette, ChromaticAberration } from '@react-three/postprocessing';
import { Html } from '@react-three/drei';

// Lazy load themes to optimize bundle size
// Lazy load themes to optimize bundle size
const QuantumWarp = React.lazy(() => import('../../components/boot/QuantumWarp'));
const DigitalGenesis = React.lazy(() => import('../../components/boot/DigitalGenesis'));
const NeuralDive = React.lazy(() => import('../../components/boot/NeuralDive'));
const ClassicMatrix = React.lazy(() => import('../../components/boot/ClassicMatrix'));

const BootScene = () => {
    const setScene = useStore((state) => state.setScene);
    const performanceMode = useStore((state) => state.performanceMode);
    const [isFinished, setIsFinished] = useState(false);

    // 1. 랜덤 테마 결정
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        const variants = ['warp', 'genesis', 'neural', 'classic'];
        const randomTheme = variants[Math.floor(Math.random() * variants.length)];
        setTheme(randomTheme);
        console.log(`[System] Boot Theme Selected: ${randomTheme.toUpperCase()}`);
    }, []);

    const handleBootComplete = () => {
        if (isFinished) return;
        setIsFinished(true);
        setTimeout(() => setScene('hub'), 1500); // 텍스트 읽을 시간 확보 (1.5초)
    };

    if (!theme) return null;

    return (
        <group>
            {/* 3. 랜덤 테마 렌더링 */}
            <Suspense fallback={null}>
                {theme === 'warp' && <QuantumWarp isFinished={isFinished} />}
                {theme === 'genesis' && <DigitalGenesis isFinished={isFinished} />}
                {theme === 'neural' && <NeuralDive isFinished={isFinished} />}
                {theme === 'classic' && <ClassicMatrix isFinished={isFinished} />}
            </Suspense>

            {/* 4. 포스트 프로세싱 (High Mode Only) */}
            {performanceMode === 'high' && (
                <EffectComposer disableNormalPass>
                    {/* 테마별 미세 조정은 어렵지만 전역적으로 네온 느낌 강화 */}
                    <Bloom luminanceThreshold={0.5} mipmapBlur intensity={0.4} radius={0.4} />
                    <Noise opacity={0.02} />
                    {/* 속도감을 위한 렌즈 왜곡 (최소화) */}
                    <ChromaticAberration offset={[0.0005, 0.0005]} />
                    <Vignette eskil={false} offset={0.1} darkness={0.4} />
                </EffectComposer>
            )}

            {/* 5. UI Overlay (Logs & Skip) */}
            {!isFinished && (
                <group>
                    <BootLogs onComplete={handleBootComplete} theme={theme} />

                    {/* Skip Button - Bottom Center */}
                    <Html position={[0, -2, 0]} center zIndexRange={[100, 0]}>
                        <button
                            onClick={handleBootComplete}
                            className="px-6 py-2 border border-white/20 bg-black/40 text-white/50 text-xs font-mono hover:bg-white/10 hover:text-white transition-all backdrop-blur-sm rounded-full tracking-widest"
                        >
                            SKIP SEQUENCE
                        </button>
                    </Html>
                </group>
            )}
        </group>
    );
};

export default BootScene;
