import { create } from 'zustand';

// 1. Core Types
export type SceneType = 'boot' | 'hub' | 'lab01' | 'lab02' | 'lab03' | 'lab04' | 'contact' | 'history';
export type PerformanceMode = 'high' | 'low';

export interface LogItem {
    timestamp: string;
    message: string;
}

export interface Lab01Config {
    distort: number;
    speed: number;
    color: string;
}

export interface Lab02Config {
    zeroG: boolean;
    gravity: [number, number, number];
}

export interface Lab03Config {
    mode: 'demo' | 'interactive';
}

export interface MissionData {
    lab: string;
    config: any;
    warpPos?: [number, number, number];
}

// 2. Global State Interface
interface GlobalState {
    // Core System State
    currentScene: SceneType;
    prevScene: SceneType | null;
    isTransitioning: boolean;

    // Performance & Settings
    performanceMode: PerformanceMode;
    isMuted: boolean;

    // Persistence Data
    systemLogs: LogItem[];

    // Interaction State
    hoverState: boolean;
    hoveredPlanet: string | null;

    // Phase 34: Mission Modal State
    missionModalData: MissionData | null;

    // Phase 35: Black Box Modal State
    blackBoxOpen: boolean;
    currentLogId: string | null;

    // Phase 38: Hyperspace Navigation Logic
    isWarping: boolean;
    warpTarget: SceneType | null;
    warpTargetPosition: [number, number, number] | null;

    // Visual Settings
    orbitSpeed: number;

    // Lab Configs
    lab01Config: Lab01Config;
    lab02Config: Lab02Config;
    lab03Config: Lab03Config;
}

// 3. Actions Interface
interface GlobalActions {
    // System
    addLog: (log: string) => void;

    // Interaction
    setHoverState: (hovering: boolean) => void;
    setHoveredPlanet: (planetId: string | null) => void;

    // Modals
    openMissionModal: (data: MissionData) => void;
    closeMissionModal: () => void;
    openBlackBox: (logId?: string | null) => void;
    closeBlackBox: () => void;
    setCurrentLog: (logId: string | null) => void;

    // Navigation
    warpTo: (targetScene: SceneType, position?: [number, number, number] | null) => void;
    finishWarp: () => void;
    setScene: (scene: SceneType) => void;
    endTransition: () => void;

    // Settings
    setPerformanceMode: (mode: PerformanceMode) => void;
    toggleMute: () => void;
    setOrbitSpeed: (speed: number) => void;

    // Lab Config Setters
    setLab01Config: (config: Partial<Lab01Config>) => void;
    setLab02Config: (config: Partial<Lab02Config>) => void;
    setLab03Config: (mode: 'demo' | 'interactive') => void;
}

// 4. Store Implementation
export const useStore = create<GlobalState & GlobalActions>((set, get) => ({
    // Initial State
    currentScene: 'boot',
    prevScene: null,
    isTransitioning: false,
    performanceMode: 'high',
    isMuted: false,
    systemLogs: [],
    hoverState: false,
    hoveredPlanet: null,
    missionModalData: null,
    blackBoxOpen: false,
    currentLogId: null,
    isWarping: false,
    warpTarget: null,
    warpTargetPosition: null,
    orbitSpeed: 0.05,

    lab01Config: { distort: 0.4, speed: 1.5, color: '#06b6d4' },
    lab02Config: { zeroG: false, gravity: [0, -0.5, 0] },
    lab03Config: { mode: 'demo' },

    // Actions
    addLog: (log: string) => set((state) => {
        const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const newLog: LogItem = { timestamp, message: log };
        // Keep last 100 logs
        const updatedLogs = [newLog, ...state.systemLogs].slice(0, 100);
        return { systemLogs: updatedLogs };
    }),

    setHoverState: (hovering) => set({ hoverState: hovering }),
    setHoveredPlanet: (planetId) => set({ hoveredPlanet: planetId }),

    openMissionModal: (data) => set({ missionModalData: data }),
    closeMissionModal: () => set({ missionModalData: null }),

    openBlackBox: (logId = null) => set({ blackBoxOpen: true, currentLogId: logId }),
    closeBlackBox: () => set({ blackBoxOpen: false, currentLogId: null }),
    setCurrentLog: (logId) => set({ currentLogId: logId }),

    warpTo: (targetScene, position = null) => {
        const state = get();
        if (state.currentScene === targetScene) return;

        // 1. Warp Engage
        set({
            isWarping: true,
            warpTarget: targetScene,
            warpTargetPosition: position
        });

        // 2. Scene Switch (1.5s delay)
        setTimeout(() => {
            set((state) => ({
                prevScene: state.currentScene,
                currentScene: targetScene,
                isTransitioning: true
            }));

            // 3. Warp Disengage (Another 1.5s delay)
            setTimeout(() => {
                set({
                    isWarping: false,
                    warpTarget: null,
                    warpTargetPosition: null
                });
            }, 1500);
        }, 1500);
    },

    finishWarp: () => set({
        isWarping: false,
        warpTarget: null,
        warpTargetPosition: null
    }),

    setScene: (scene) => set((state) => {
        if (state.currentScene === scene) return {};
        return {
            prevScene: state.currentScene,
            currentScene: scene,
            isTransitioning: true
        };
    }),

    endTransition: () => set({ isTransitioning: false }),

    setPerformanceMode: (mode) => set({ performanceMode: mode }),
    toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
    setOrbitSpeed: (speed) => set({ orbitSpeed: speed }),

    setLab01Config: (config) => set((state) => ({ lab01Config: { ...state.lab01Config, ...config } })),
    setLab02Config: (config) => set((state) => ({ lab02Config: { ...state.lab02Config, ...config } })),
    setLab03Config: (mode) => set({ lab03Config: { mode } }),
}));
