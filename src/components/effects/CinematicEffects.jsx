import { Component } from 'react';
import { EffectComposer, Bloom, Vignette, ChromaticAberration, Noise, ToneMapping } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

/**
 * Bloom 효과 ErrorBoundary
 * - 호환성 문제로 오류 발생 시 자동으로 비활성화
 */
class BloomErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error) {
        console.log('[CinematicEffects] Bloom 효과 비활성화:', error.message);
    }

    render() {
        if (this.state.hasError) {
            return null; // 오류 발생 시 아무것도 렌더링하지 않음
        }
        return this.props.children;
    }
}

/**
 * CinematicEffects 컴포넌트
 * - Bloom 효과로 시네마틱 분위기 연출
 * - ErrorBoundary로 호환성 문제 시 자동 비활성화
 */
const CinematicEffects = () => {
    return (
        <BloomErrorBoundary>
            <EffectComposer disableNormalPass>
                {/* 1. Toned Down Bloom for Balanced Visuals */}
                <Bloom
                    luminanceThreshold={0.5} // Higher threshold: only very bright things glow
                    mipmapBlur
                    intensity={0.4} // Reduced intensity
                    radius={0.6} // Reduced spread
                    levels={8}
                />

                {/* 2. Chromatic Aberration */}
                <ChromaticAberration
                    offset={[0.001, 0.001]} // Very subtle
                    radialModulation={false}
                    modulationOffset={0}
                />

                {/* 3. Vignette */}
                <Vignette
                    offset={0.4}
                    darkness={0.5}
                    eskil={false}
                />



                {/* 5. Tone Mapping for Color Depth */}
                <ToneMapping
                    adaptive={true} // Use adaptive tone mapping if supported
                    resolution={256}
                    middleGrey={0.6}
                    maxLuminance={16.0}
                    averageLuminance={1.0}
                    adaptationRate={1.0}
                />
            </EffectComposer>
        </BloomErrorBoundary>
    );
};

export default CinematicEffects;


