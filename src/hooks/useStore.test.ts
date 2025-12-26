import { describe, it, expect, beforeEach } from 'vitest';
import { useStore } from './useStore';

describe('useStore', () => {
    // Reset store before each test (optional for Zustand but good practice)
    beforeEach(() => {
        useStore.setState({
            currentScene: 'boot',
            systemLogs: [],
            performanceMode: 'high',
            isMuted: false
        });
    });

    it('should have correct initial state', () => {
        const state = useStore.getState();
        expect(state.currentScene).toBe('boot');
        expect(state.performanceMode).toBe('high');
        expect(state.systemLogs).toHaveLength(0);
    });

    it('should add logs', () => {
        useStore.getState().addLog('Test Log');
        const state = useStore.getState();
        expect(state.systemLogs).toHaveLength(1);
        expect(state.systemLogs[0].message).toBe('Test Log');
    });

    it('should toggle performance mode', () => {
        useStore.getState().setPerformanceMode('low');
        expect(useStore.getState().performanceMode).toBe('low');
    });

    it('should toggle mute', () => {
        useStore.getState().toggleMute();
        expect(useStore.getState().isMuted).toBe(true);
        useStore.getState().toggleMute();
        expect(useStore.getState().isMuted).toBe(false);
    });
});
