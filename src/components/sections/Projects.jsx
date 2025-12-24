import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor, Layers, Boxes } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Hanok-meta Platform",
            category: "R&D / Metaverse",
            role: "PM (Project Leader)",
            period: "2023.08 - 2024.12",
            description: "한국콘텐츠진흥원(KOCCA) R&D 과제. 한옥의 건축 요소를 디지털 자산화하고, 언리얼 엔진 기반의 시뮬레이터를 통해 가상 건축이 가능한 웹 플랫폼 구축.",
            metrics: [
                "ROI 320% 달성 (기술이전)",
                "중간평가 '우수(92점)' 획득",
                "특허 출원 2건"
            ],
            tech: ["Unreal Engine 5", "React", "AWS", "Jira"],
            color: "from-amber-600 to-orange-500",
            icon: <Layers className="w-6 h-6" />
        },
        {
            title: "Holiday Metaverse",
            category: "Blockchain / Social",
            role: "Product Owner",
            period: "2022.01 - 2022.12",
            description: "블록체인 기반의 소셜 메타버스 플랫폼. 토큰 이코노미(Tokenomics) 설계 및 NFT 마켓플레이스 연동. 사용자 간의 실시간 소통 및 경제 활동 지원.",
            metrics: [
                "Seed 투자 5억 유치",
                "백서(Whitepaper) V1.0 작성",
                "커뮤니티 1.5만명 달성"
            ],
            tech: ["Unity", "Solidity", "Web3.js", "Figma"],
            color: "from-cyan-500 to-blue-600",
            icon: <Boxes className="w-6 h-6" />
        },
        {
            title: "Safe-Edu VR Platform",
            category: "EdTech / VR",
            role: "PM",
            period: "2023.03 - 2023.11",
            description: "초등학생 대상 안전교육 VR 콘텐츠 및 LMS 관리 시스템. HMD 없이도 웹에서 체험 가능한 360도 파노라마 교육 환경 구축.",
            metrics: [
                "전국 31개교 도입 완료",
                "교육 만족도 4.8/5.0",
                "콘텐츠 4종 개발 완료"
            ],
            tech: ["Three.js", "React", "WebGL", "LMS"],
            color: "from-emerald-500 to-green-600",
            icon: <Monitor className="w-6 h-6" />
        }
    ];

    return (
        <section className="py-20 relative z-10 text-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex items-end gap-6 border-b border-white/10 pb-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                        Key Projects
                    </h2>
                    <span className="text-gray-400 font-mono text-sm mb-2 hidden md:block">
                        // SELECTED WORKS
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 hover:transform hover:-translate-y-2"
                        >
                            {/* Color Bar */}
                            <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />

                            <div className="p-8">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-3 rounded-xl bg-white/5 text-white group-hover:bg-white/10 transition-colors`}>
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
                                    <span className="text-purple-400 font-bold">{project.role}</span>
                                    <span className="text-gray-600">•</span>
                                    <span className="text-gray-400">{project.category}</span>
                                </div>

                                <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Key Metrics */}
                                <div className="bg-black/20 rounded-lg p-4 mb-6 border border-white/5">
                                    <ul className="space-y-2">
                                        {project.metrics.map((metric, i) => (
                                            <li key={i} className="flex items-center gap-2 text-xs font-mono text-cyan-200/80">
                                                <span className="w-1 h-1 bg-cyan-500 rounded-full" />
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
