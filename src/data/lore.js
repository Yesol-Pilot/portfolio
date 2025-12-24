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
            name: '빛과 굴절의 세계 (The Prism)',
            tech: 'SHADER',
            type: '수정 행성 (Crystalline)',
            description: "순수한 빛과 셰이더 기술로 이루어진 아카이브입니다.",
            mission: "프로젝트 탐색 및 시각 기술 확인",
            status: "STABLE",
            visual: {
                color: '#06b6d4', // Cyan
                texture: 'glass',
                effect: 'transmission'
            },
            details: {
                longDescription: "이 섹터는 실시간 셰이더 기술과 빛의 굴절을 사용한 프로젝트들을 전시합니다. 수정 구체를 통해 빛이 어떻게 물체와 상호작용하는지 탐험할 수 있습니다. Transmission 머티리얼과 PBR 셰이더를 활용한 시각적 실험의 집합체입니다.",
                features: [
                    "실시간 굴절 및 반사 셰이더 체험",
                    "인터랙티브 파라미터 조절 (Distort, Color, Speed)",
                    "Transmission 머티리얼 데모",
                    "Three.js 기반 WebGL 렌더링"
                ],
                techStack: ["React Three Fiber", "Three.js", "GLSL", "Transmission Material", "PBR Shader"],
                media: ["/assets/screenshots/lab01_prism.jpg"]
            }
        },
        LAB_02: {
            id: 'LAB-02',
            name: '진화하는 데이터 생태계 (The Terrarium)',
            tech: 'PHYSICS',
            type: '생명 행성 (Living Planet)',
            description: "육성 시뮬레이션과 데이터 개체가 진화하는 세계입니다.",
            mission: "크리처 분석 및 게임 로직 체험",
            status: "ACTIVE",
            visual: {
                color: '#10b981', // Emerald
                texture: 'organic',
                effect: 'pulse'
            },
            details: {
                longDescription: "이 섹터에서는 보유한 기술 스택들이 물리 법칙에 따라 상호작용하는 '살아있는 생태계'를 체험할 수 있습니다. 각 기술은 떠다니는 구체로 시각화되며, 클릭하면 물리적 충돌 반응이 발생합니다. 무중력 전환 등 환경 변수도 조절 가능합니다.",
                features: [
                    "기술 스택 3D 시각화",
                    "물리 엔진 기반 상호작용",
                    "무중력/중력 환경 전환",
                    "실시간 충돌 시뮬레이션"
                ],
                techStack: ["React Three Fiber", "@react-three/cannon", "Physics Simulation", "Billboard", "3D Text"],
                media: ["/assets/screenshots/lab02_terrarium.jpg"]
            }
        },
        LAB_03: {
            id: 'LAB-03',
            name: '주파수의 폭풍 (The Resonance)',
            tech: 'AUDIO',
            type: '가스 거성 (Gas Giant)',
            description: "사운드 웨이브와 주파수가 휘몰아치는 공간입니다.",
            mission: "오디오 시각화 및 반응형 기술 확인",
            status: "REACTIVE",
            visual: {
                color: '#facc15', // Yellow
                texture: 'gas',
                effect: 'waves'
            },
            details: {
                longDescription: "이 섹터에서는 실시간 오디오 주파수에 반응하는 시각화를 체험합니다. 마이크 입력을 분석하여 파티클, 바(Bar), 와이어프레임 웨이브가 음악에 맞춰 춤을 춥니다. 데모 모드와 마이크 모드를 전환할 수 있습니다.",
                features: [
                    "실시간 오디오 주파수 분석",
                    "파티클 기반 시각화",
                    "3D 바 차트 렌더링",
                    "마이크 입력 반응 모드"
                ],
                techStack: ["Web Audio API", "AudioAnalyser", "GLSL Particles", "FFT Analysis", "Three.js"],
                media: ["/assets/screenshots/lab03_resonance.png"]
            }
        },
        LAB_04: {
            id: 'LAB-04',
            name: '조각난 위성 (The Glitch)',
            tech: 'DEBUG',
            type: '소행성 (Asteroid)',
            description: "시스템 오류와 글리치로 뒤덮인 불안정한 공간입니다.",
            mission: "버그 수정 및 시스템 안정화",
            status: "UNSTABLE",
            visual: {
                color: '#ff4d4d', // Red
                texture: 'glitch',
                effect: 'noise'
            },
            details: {
                longDescription: "이 섹터는 의도적인 시스템 오류와 글리치로 가득 찬 공간입니다. 사용자는 불안정한 모듈을 찾아 '패치'하여 Reality Integrity(현실 무결성)를 회복시켜야 합니다. 모든 버그가 수정되면 숨겨진 방명록이 활성화됩니다.",
                features: [
                    "매트릭스 코드 레인 효과",
                    "글리치 텍스트 및 화면 왜곡",
                    "인터랙티브 디버깅 미니게임",
                    "익명 방명록 시스템 (Firebase)"
                ],
                techStack: ["Glitch Shaders", "Post-processing", "Error Boundary", "Firebase Firestore", "Interactive Modules"],
                media: ["/assets/screenshots/lab04_glitch.png"]
            }
        },
        PROFILE: {
            id: 'PROFILE',
            name: '데이터 근원지 (The Core)',
            tech: 'LEGACY',
            type: '항성 (Stellar Source)',
            description: "모든 코드와 창작물이 시작되는 본질적인 공간입니다.",
            mission: "설계자 프로필 데이터 조회",
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
        TITLE: "디멘션 아키텍트 (Dimension Architect)",
        SUBTITLE: "로직을 현실로 엮어내는 개발자",
        QUOTE: "\"저는 단순한 코드를 넘어, 하나의 세계를 구축합니다.\"",
    },

    // 크리처 기원(Origin) 스토리 템플릿
    CREATURE_ORIGINS: {
        COMMON: "Formed from basic data dust found in the Void.",
        RARE: "Synthesized from compressed logic gates and crystallized algorithms.",
        LEGENDARY: "A unique anomaly that gained sentience through a recursive singularity."
    }
};
