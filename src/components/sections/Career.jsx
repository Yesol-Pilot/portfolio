import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building, Users, TrendingUp, Award, ChevronRight } from 'lucide-react';

const Career = () => {
    const careers = [
        {
            company: "㈜이트라이브 (e-Tribe)",
            role: "CTS Team • Project Leader / Manager",
            period: "2023.08 - Present",
            location: "Seoul, Korea",
            description: "메타버스 및 XR 플랫폼 기획/개발 총괄. 다수의 국책 과제(KOCCA, TIPA 등) 수주 및 PM 수행.",
            metrics: [
                { label: "Secured Funding", value: "11.6억", unit: "KRW" },
                { label: "R&D Projects", value: "3", unit: "Lead" },
                { label: "Team Size", value: "6", unit: "Members" }
            ],
            key_achievements: [
                "심리 메타버스 플랫폼 구축 (TIPA R&D, 7.5억)",
                "개성만월대 디지털 복원 플랫폼 구축 수주 (5억)",
                "Hanok-meta 한옥 건축 시뮬레이션 기획 (KOCCA, 3.7억)",
                "학교안전공제중앙회 메타버스 자료 개발 (1.4억)",
                "경남 온라인 안전체험원 구축 (ICT 어워드 대상)",
                "중간평가 '우수(A등급)' 달성 (Hanok-meta)"
            ],
            stack: ["Unreal Engine 5", "Unity", "Jira", "Confluence", "Notion", "Slack"]
        },
        {
            company: "㈜이츠자비스 (ItsJavis)",
            role: "Service Dev Team • Team Lead",
            period: "2021.06 - 2023.06",
            location: "Seoul, Korea",
            description: "블록체인 기반 서비스 및 메타버스 플랫폼 기획 팀장. 투자 유치 및 토큰 이코노미 설계 주도.",
            metrics: [
                { label: "Investments", value: "8억", unit: "KRW" },
                { label: "Duration", value: "2y 1m", unit: "Tenure" },
                { label: "Team Build", value: "0→4", unit: "Setup" }
            ],
            key_achievements: [
                "1o1.GG 이스포츠 통합 플랫폼 구축 및 투자 유치 (5억)",
                "Holiday 메타버스 플랫폼 기획 및 시드 투자 유치 (3억)",
                "Cyber-holic NFT 프로젝트 런칭 (Binance Marketplace)",
                "백서(Whitepaper) V1.0 작성 및 토큰 이코노미 설계",
                "팀장 승진 및 신규 기획팀 셋업"
            ],
            stack: ["Blockchain", "Tokenomics", "Whitepaper", "Web3.js", "Figma", "GA4"]
        },
        {
            company: "Before Career",
            role: "Service & Research",
            period: "2018.03 - 2021.05",
            location: "Gyeonggi / Seoul",
            description: "다양한 서비스업 경험 및 경제연구소 연구원 재직. 현장 중심의 소통 능력과 데이터 리서치 역량 배양.",
            metrics: [
                { label: "Research", value: "1", unit: "Year" },
                { label: "Service", value: "3+", unit: "Years" }
            ],
            key_achievements: [
                "수원대학교 북한경제연구소 연구원 (논문/자료 수집)",
                "서비스업(CJ푸드빌 등) 매니저 근무: 현장 관리 및 고객 응대",
                "다양한 이해관계자와의 커뮤니케이션 노하우 체득"
            ],
            stack: ["MS Office", "Data Entry", "Communication", "Service Mind"]
        }
    ];

    return (
        <section className="py-24 relative z-10 text-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 flex items-center justify-between border-b border-white/10 pb-8"
                >
                    <div>
                        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500 mb-2">
                            Career History
                        </h2>
                        <p className="text-gray-400 font-mono text-sm">
                            // PROFESSIONAL TIMELINE & MILESTONES
                        </p>
                    </div>
                </motion.div>

                <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-24">
                    {careers.map((career, index) => (
                        <CareerItem key={index} data={career} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const CareerItem = ({ data, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 md:pl-16"
        >
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] top-0 w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_10px_cyan]" />

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-4 mb-6">
                <h3 className="text-3xl font-bold text-white leading-none">
                    {data.company}
                </h3>
                <span className="text-emerald-400 font-mono text-sm bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20">
                    {data.period}
                </span>
            </div>

            {/* Role & Location */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-300">
                <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-gray-500" />
                    <span className="font-semibold text-white">{data.role}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">{data.location}</span>
                </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-8 leading-relaxed max-w-3xl text-lg">
                {data.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-2xl bg-white/5 p-6 rounded-xl border border-white/10">
                {data.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-white mb-1 font-mono">
                            {metric.value}
                        </div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">
                            {metric.label} <span className="text-cyan-500/50">({metric.unit})</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Key Achievements */}
            <div className="mb-8">
                <h4 className="flex items-center gap-2 text-sm text-gray-400 uppercase tracking-widest mb-4">
                    <Award className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                </h4>
                <ul className="space-y-3">
                    {data.key_achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                            <ChevronRight className="w-4 h-4 text-cyan-500 mt-1 shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
                {data.stack.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/5 text-gray-400 text-xs font-mono rounded-lg border border-white/5 hover:border-white/20 hover:text-white transition-colors">
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default Career;
