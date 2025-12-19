/**
 * Lore & Narrative Data Constants
 * 프로젝트 서사(Narrative)와 관련된 텍스트 상수를 정의합니다.
 */

export const LORE = {
    // 공통 시스템 메시지
    SYSTEM: {
        BOOT_SEQUENCE: [
            "Initializing Neural Link...",
            "Loading Reality Modules...",
            "Stabilizing Quantum Fields...",
            "Bypassing Security Protocols...",
            "Welcome, Visitor."
        ],
        LOADING: "Synchronizing Dimensions...",
        ERROR: "⚠️ Anomaly Detected: Reality breach imminent.",
        SUCCESS: "Sequence Complete.",
    },

    // 각 씬(Scene)별 서사 정보 + 비주얼 데이터
    SECTORS: {
        LAB_01: {
            id: 'LAB-01',
            name: 'The Prism',
            tech: 'SHADER',
            type: 'Crystalline Planet',
            description: "A world of pure light and refraction.",
            mission: "Navigation & Orientation",
            status: "STABLE",
            visual: {
                color: '#06b6d4', // Cyan
                texture: 'glass',
                effect: 'transmission'
            }
        },
        LAB_02: {
            id: 'LAB-02',
            name: 'The Terrarium',
            tech: 'PHYSICS',
            type: 'Living Planet',
            description: "An ecosystem of evolving data-forms.",
            mission: "Creature Analysis",
            status: "ACTIVE",
            visual: {
                color: '#10b981', // Emerald
                texture: 'organic',
                effect: 'pulse'
            }
        },
        LAB_03: {
            id: 'LAB-03',
            name: 'The Resonance',
            tech: 'AUDIO',
            type: 'Gas Giant',
            description: "A storm of sound waves and frequencies.",
            mission: "Audio Visualization",
            status: "REACTIVE",
            visual: {
                color: '#facc15', // Yellow
                texture: 'gas',
                effect: 'waves'
            }
        },
        LAB_04: {
            id: 'LAB-04',
            name: 'The Glitch',
            tech: 'DEBUG',
            type: 'Fractured Moon',
            description: "Unstable reality requiring constant patches.",
            mission: "Debug & Test",
            status: "UNSTABLE",
            visual: {
                color: '#ef4444', // Red
                texture: 'wireframe',
                effect: 'glitch'
            }
        },
        PROFILE: {
            id: 'PROFILE',
            name: 'The Core',
            tech: 'LEGACY',
            type: 'Stellar Source',
            description: "The source of all code and creation.",
            mission: "Data Retrieval",
            status: "SECURE",
            visual: {
                color: '#3b82f6', // Blue
                texture: 'plasma',
                effect: 'glow'
            }
        }
    },

    // 설계자(Architect) 프로필 텍스트
    ARCHITECT: {
        TITLE: "Dimension Architect",
        SUBTITLE: "Weaving Logic into Reality",
        QUOTE: "\"I don't just write code; I build worlds.\"",
    },

    // 크리처 기원(Origin) 스토리 템플릿
    CREATURE_ORIGINS: {
        COMMON: "Formed from basic data dust found in the Void.",
        RARE: "Synthesized from compressed logic gates and crystallized algorithms.",
        LEGENDARY: "A unique anomaly that gained sentience through a recursive singularity."
    }
};
