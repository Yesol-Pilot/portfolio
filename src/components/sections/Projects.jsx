import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor, Box, Layers, Zap } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Hanok-meta Architecture",
            category: "R&D / Metaverse",
            role: "Project Leader (PL)",
            period: "2024.04 - 2024.12",
            description: "한국콘텐츠진흥원(KOCCA) R&D 과제. 한옥 건축 정보 모델링(BIM) 데이터를 활용한 메타버스 시뮬레이션 플랫폼 기획. 언리얼 엔진 5 기반의 실시간 렌더링 및 웹 연동 아키텍처 설계.",
            metrics: [
                "Funding: 3.7억 (KOCCA)",
                "Eval: 'Excellent' (A)",
                "Tech: Unreal 5 / Pixel Streaming"
            ],
            tech: ["Unreal Engine 5", "React", "Pixel Streaming", "BIM"],
            color: "from-amber-700 to-yellow-600",
            icon: <Box className="w-6 h-6 text-amber-500" />
        },
        {
            title: "GYEONGNAM Safety VR",
            category: "Public / VR Platform",
            role: "Project Manager (PM)",
            period: "2023.09 - 2023.12",
            description: "경상남도 온라인 안전체험원 VR 파노라마 플랫폼 구축. 5개 테마관, 30종 이상의 안전 교육 콘텐츠를 VR360 파노라마 웹 뷰어로 구현. ICT 어워드 대상 수상작.",
            metrics: [
                "Award: ICT Grand Prize",
                "Content: 5 Zones / 30+ Types",
                "Platform: WebGL / VR360"
            ],
            tech: ["WebGL", "VR360", "React", "Three.js"],
            color: "from-emerald-600 to-teal-500",
            icon: <Monitor className="w-6 h-6 text-emerald-500" />
        },
        {
            title: "1o1.GG Esports Platform",
            category: "Startup / Web Service",
            role: "PM / Service Lead",
            period: "2021.08 - 2022.05",
            description: "데이터 분석 기반 이스포츠 코칭 및 커뮤니티 플랫폼. 게임 API(Riot Games) 연동을 통한 전적 분석 시스템 및 강사 매칭 마켓플레이스 기획.",
            metrics: [
                "Inv: 5억 Secured (Seed)",
                "User: Pro Gamers & Coaches",
                "Data: Riot API Integration"
            ],
            tech: ["Next.js", "Node.js", "AWS", "Riot API"],
            color: "from-blue-600 to-indigo-500",
            icon: <Zap className="w-6 h-6 text-blue-500" />
        },
        {
            title: "Interactive Portfolio Universe",
            category: "Personal / Creative Coding",
            role: "Design & Dev",
            period: "2024.12 - Present",
            description: "React Three Fiber를 활용한 3D 웹 포트폴리오. PM으로서의 기획력과 테크니컬 아티스트로서의 구현 능력을 입증하기 위한 멀티버스 컨셉 프로젝트.",
            metrics: [
                "Scene: Hub + 4 Labs",
                "Arch: React + R3F + Zustand",
                "Effect: Post-processing / GLSL"
            ],
            tech: ["React Three Fiber", "GLSL", "Zustand", "Framer Motion"],
            color: "from-purple-600 to-pink-500",
            icon: <Layers className="w-6 h-6 text-purple-500" />
        }
    ];

    return (
        <section className="py-24 relative z-10 text-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex items-center gap-4"
                >
                    <h2 className="text-4xl font-bold">Featured Projects</h2>
                    <div className="h-px flex-1 bg-white/10" />
                    <span className="text-cyan-500 font-mono text-sm">SELECTED WORKS</span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 hover:transform hover:-translate-y-2"
                        >
                            {/* Color Bar */}
                            <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />

                            <div className="p-8">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors`}>
                                        {project.icon}
                                    </div>
                                    <span className="text-xs font-mono text-gray-400 border border-white/10 px-2 py-1 rounded">
                                        {project.period}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex items-center gap-2 mb-4 text-sm">
                                    <span className="text-white/80 font-bold">{project.role}</span>
                                    <span className="text-gray-600">•</span>
                                    <span className="text-gray-400">{project.category}</span>
                                </div>

                                <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3 md:line-clamp-none h-auto md:h-20">
                                    {project.description}
                                </p>

                                {/* Key Metrics */}
                                <div className="bg-white/5 rounded-lg p-4 mb-6 border border-white/5">
                                    <ul className="space-y-2">
                                        {project.metrics.map((metric, i) => (
                                            <li key={i} className="flex items-center gap-2 text-xs font-mono text-cyan-200/80">
                                                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                                                {metric}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-2 py-1 text-[10px] font-bold bg-white/5 text-gray-400 rounded hover:bg-white/10 hover:text-white transition-colors">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
