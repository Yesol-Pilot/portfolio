import { useEffect, useRef, useState, useCallback } from 'react';

const useAudio = () => {
    const [muted, setMuted] = useState(true);
    const audioContext = useRef(null);

    // Oscillators for synthetic UI sounds
    const playHoverSound = useCallback(() => {
        if (muted || !audioContext.current) return;

        const ctx = audioContext.current;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1);

        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

        osc.start();
        osc.stop(ctx.currentTime + 0.1);
    }, [muted]);

    const playClickSound = useCallback(() => {
        if (muted || !audioContext.current) return;

        const ctx = audioContext.current;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(200, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.2);

        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

        osc.start();
        osc.stop(ctx.currentTime + 0.2);
    }, [muted]);

    const toggleMute = () => {
        if (!audioContext.current) {
            audioContext.current = new (window.AudioContext || window.webkitAudioContext)();
        }

        if (audioContext.current.state === 'suspended') {
            audioContext.current.resume();
        }

        setMuted(!muted);
    };

    return { muted, toggleMute, playHoverSound, playClickSound };
};

export default useAudio;
