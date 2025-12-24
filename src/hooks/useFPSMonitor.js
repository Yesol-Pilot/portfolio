import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useStore } from './useStore';

/**
 * Auto-Performance Tuner
 * Monitors FPS and switches to 'low' mode if performance drops below threshold.
 */
export const useFPSMonitor = (threshold = 30, gracePeriod = 5000) => {
    const performanceMode = useStore((state) => state.performanceMode);
    const setPerformanceMode = useStore((state) => state.setPerformanceMode);

    // FPS Calculation State
    const framesRef = useRef(0);
    const timeRef = useRef(0);
    const historyRef = useRef([]); // Store last 5 seconds of FPS data
    const mountedTimeRef = useRef(Date.now());

    // Config
    const MONITOR_INTERVAL = 1000; // Check every second

    useFrame((state, delta) => {
        // Skip if already in LOW mode or during grace period
        if (performanceMode === 'low') return;
        if (Date.now() - mountedTimeRef.current < gracePeriod) return;

        framesRef.current += 1;
        timeRef.current += delta;

        if (timeRef.current >= 1) { // Every 1 second
            const fps = framesRef.current;

            // Push to history (max 3 seconds)
            historyRef.current.push(fps);
            if (historyRef.current.length > 3) historyRef.current.shift();

            // Calculate Average FPS
            const avgFPS = historyRef.current.reduce((a, b) => a + b, 0) / historyRef.current.length;

            if (historyRef.current.length >= 3 && avgFPS < threshold) {
                console.warn(`[System] Performance Drop Detected (Avg: ${avgFPS.toFixed(1)} FPS). Switching to Low Mode.`);
                setPerformanceMode('low');

                // Optional: Trigger a Toast notification here if you have a toast system
                // alert("System overloaded. Switching to safe mode.");
            }

            // Reset
            framesRef.current = 0;
            timeRef.current = 0;
        }
    });
};
