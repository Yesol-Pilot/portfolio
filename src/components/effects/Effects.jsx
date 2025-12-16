import { useRef, useEffect, useMemo } from 'react';
import { extend, useThree, useFrame } from '@react-three/fiber';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass';
import { Vector2 } from 'three';

// Extend Three.js classes to be usable in R3F as JSX
extend({ EffectComposer, RenderPass, UnrealBloomPass, OutputPass });

const Effects = () => {
    const { gl, scene, camera, size } = useThree();
    const composer = useRef();

    useEffect(() => {
        if (composer.current) {
            composer.current.setSize(size.width, size.height);
        }
    }, [size]);

    useFrame(() => {
        if (composer.current) {
            composer.current.render();
        }
    }, 1); // Priority 1 to render after default loop

    return (
        <effectComposer ref={composer} args={[gl]} disableNormalPass>
            <renderPass attach="passes-0" args={[scene, camera]} />
            <unrealBloomPass attach="passes-1" args={[new Vector2(size.width, size.height), 1.5, 0.4, 0.85]} />
            {/* <outputPass attach="passes-2" /> */}
        </effectComposer>
    );
};

export default Effects;
