import { useEffect, useRef, useCallback } from 'react';
import { useStore } from '../../hooks/useStore';

const SoundManager = () => {
    const currentScene = useStore((state) => state.currentScene);
    const audioMuted = useStore((state) => state.audioMuted);
    const audioContextRef = useRef(null);
    const masterGainRef = useRef(null);
    const oscillatorsRef = useRef([]);

    // Initialize Audio Context
    useEffect(() => {
        const initAudio = () => {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;

            const ctx = new AudioContext();
            const masterGain = ctx.createGain();
            masterGain.gain.value = audioMuted ? 0 : 0.3;
            masterGain.connect(ctx.destination);

            audioContextRef.current = ctx;
            masterGainRef.current = masterGain;
        };

        if (!audioContextRef.current) {
            initAudio();
        }

        return () => {
            if (audioContextRef.current) {
                audioContextRef.current.close();
                audioContextRef.current = null;
            }
        };
    }, []);

    // Handle Mute/Unmute
    useEffect(() => {
        if (masterGainRef.current) {
            const targetGain = audioMuted ? 0 : 0.3;
            // Smooth transition
            masterGainRef.current.gain.setTargetAtTime(targetGain, audioContextRef.current.currentTime, 0.5);

            if (!audioMuted && audioContextRef.current?.state === 'suspended') {
                audioContextRef.current.resume();
            }
        }
    }, [audioMuted]);

    // Generative Drone System
    const playDrone = useCallback((type) => {
        const ctx = audioContextRef.current;
        if (!ctx || !masterGainRef.current) return;

        // Cleanup previous oscillators
        oscillatorsRef.current.forEach(osc => {
            try {
                osc.stop(ctx.currentTime + 2); // Fade out
            } catch { /* ignore */ }
        });
        oscillatorsRef.current = [];

        // Define drone characteristics based on scene type
        let frequencies = [55, 110]; // Default (A1, A2)
        let waveType = 'sine';

        if (type === 'hub') {
            frequencies = [65.41, 130.81, 196.00]; // C2, C3, G3 (Space chords)
            waveType = 'sine';
        } else if (type === 'lab01') {
            frequencies = [523.25, 1046.50]; // C5, C6 (High crystal chime)
            waveType = 'triangle';
        } else if (type === 'lab02') {
            frequencies = [82.41, 164.81, 329.63]; // E2, E3, E4 (Nature chord)
            waveType = 'sine';
        } else if (type === 'lab03') {
            frequencies = [40, 42, 45]; // Deep bass cluster
            waveType = 'sawtooth'; // Rougher
        } else if (type === 'lab04') {
            frequencies = [60, 1000]; // Low + High interference
            waveType = 'square'; // Glitchy
        }

        // Create new oscillators
        frequencies.forEach(freq => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            const lfo = ctx.createOscillator();
            const lfoGain = ctx.createGain();

            osc.type = waveType;
            osc.frequency.value = freq;

            // LFO for movement
            lfo.frequency.value = 0.1 + Math.random() * 0.2;
            lfoGain.gain.value = 50; // Pitch modulation depth
            lfo.connect(lfoGain);
            lfoGain.connect(osc.detune);

            // Envelope
            gain.gain.value = 0;
            gain.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 3); // Fade in over 3s

            // Routing
            osc.connect(gain);
            gain.connect(masterGainRef.current);

            osc.start();
            lfo.start();

            oscillatorsRef.current.push(osc);
            oscillatorsRef.current.push(lfo); // Track LFOs to stop them too
        });

    }, []);

    // Scene Change Listener
    useEffect(() => {
        if (!audioContextRef.current) return;

        let sceneType = 'hub';
        if (currentScene.startsWith('lab01')) sceneType = 'lab01';
        else if (currentScene.startsWith('lab02')) sceneType = 'lab02';
        else if (currentScene.startsWith('lab03')) sceneType = 'lab03';
        else if (currentScene.startsWith('lab04')) sceneType = 'lab04';
        else if (currentScene === 'hub') sceneType = 'hub';
        else sceneType = 'hub'; // Use hub drone for other scenes for now

        playDrone(sceneType);

    }, [currentScene, playDrone]);

    return null; // This is a logic-only component
};

export default SoundManager;
