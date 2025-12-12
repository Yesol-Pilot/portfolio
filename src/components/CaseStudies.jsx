import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
    {
        title: '강원교육청 위캔버스 (We Canvas)',
        category: 'Metaverse Platform',
        period: '2023.05 - 2024.12',
        role: '메타버스 플랫폼 구축 및 운영 총괄 (PM)',
        summary: '강원도 내 학생/교사를 위한 몰입형 메타버스 교육/커뮤니티 플랫폼',
        partner: '강원도교육청 / 한화시스템 / EBS',
        description: [
            '교육 현장 니즈 분석: 교사와 학생이 실제 수업에 활용할 수 있는 실감형 콘텐츠 및 수업 도구 설계.',
            '사용자 경험 최적화: 복잡한 3D 조작을 직관적으로 개선하여 디지털 격차 해소.',
            '확장성 고려: 타 교육청 및 기관 연동이 가능한 표준화된 플랫폼 구조 기획.'
        ],
        outcome: '강원도 내 초중고 시범 도입 및 "실무 중심의 교육 환경 구현" 평가.',
        tags: ['Education', 'Metaverse', 'Platform']
    },
    {
        title: '경상남도교육청 VR온라인 학생안전체험원',
        category: 'VR Experience',
        role: '콘텐츠 기획 총괄 및 시나리오 설계',
        summary: '시공간 제약 없이 안전 교육을 체험할 수 있는 VR 기반 온라인 안전체험관',
        partner: '경상남도교육청',
        description: [
            '몰입형 시나리오: 학생이 위기 상황을 직접 체험하고 대처하는 인터랙티브 시나리오 설계.',
            '접근성 강화: HMD 없이도 웹/모바일에서 원활하게 구동되는 경량화된 VR 경험 구현.'
        ],
        outcome: '2024 ICT 어워드 Grand Prize, 2024 웹어워드코리아 최우수상 수상.',
        tags: ['VR', 'Safety', 'WebXR']
    },
    {
        title: '전라북도직업계고 메타버스 ZEP',
        category: '2D Metaverse',
        role: 'ZEP 맵 기획/디자인 디렉팅, 행사 운영 설계',
        summary: '직업계고 홍보 및 진로 상담을 위한 2D 도트 기반(ZEP) 메타버스 공간',
        partner: '전라북도교육청',
        description: [
            '타깃 맞춤형 디자인: 학생들에게 친숙한 2D 도트 그래픽과 게임 요소를 활용하여 참여 유도.',
            '소통 중심 설계: 학교별 홍보 부스와 실시간 상담 기능을 유기적으로 연결.'
        ],
        outcome: '2024 웹어워드코리아 메타버스분야 대상, 비대면 입학 박람회 성공 개최.',
        tags: ['ZEP', '2D', 'Event']
    },
    {
        title: '북촌한옥마을 디지털 트윈',
        category: 'Digital Twin',
        role: '디지털 트윈 구축 PM, 공간 데이터 모델링 기획',
        summary: '북촌의 역사적/문화적 가치를 디지털 공간에 그대로 구현한 고정밀 디지털 트윈',
        partner: '서울시',
        description: [
            '고정밀 모델링: 실제 북촌 거리와 건물을 오차 없이 가상 공간에 복제하여 현장감 극대화.',
            '문화 콘텐츠 결합: 단순 공간 구현을 넘어 역사 해설 및 관광 안내 콘텐츠 통합.'
        ],
        outcome: '2024 웹어워드코리아 통합대상, 2024 ICT어워드 Bronze Prize.',
        tags: ['Digital Twin', 'Culture', '3D']
    }
];

const CaseStudies = () => {
    return (
        <section id="work" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Selected Works</h2>
                    <p className="text-muted text-lg max-w-2xl">
                        공공·교육 분야의 문제를 메타버스와 XR 기술로 해결한 대표 프로젝트입니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-surface rounded-3xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-300"
                        >
                            <div className="grid md:grid-cols-12 gap-0">
                                {/* Project Info */}
                                <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-primary font-medium text-sm tracking-wider uppercase">{project.category}</span>
                                            {project.period && <span className="text-gray-500 text-sm">{project.period}</span>}
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-lg text-gray-300 mb-6 font-medium">
                                            {project.summary}
                                        </p>

                                        <div className="space-y-4 mb-8">
                                            <div className="flex flex-col sm:flex-row sm:gap-8 gap-2 border-l-2 border-white/10 pl-4">
                                                <div>
                                                    <span className="text-muted text-sm block mb-1">Role</span>
                                                    <span className="text-white font-medium">{project.role}</span>
                                                </div>
                                                <div>
                                                    <span className="text-muted text-sm block mb-1">Client/Partner</span>
                                                    <span className="text-white font-medium">{project.partner}</span>
                                                </div>
                                            </div>

                                            <div className="bg-background/50 rounded-xl p-5 space-y-3">
                                                {project.description.map((desc, i) => (
                                                    <div key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                                                        <span className="text-primary mt-1">•</span>
                                                        <span>{desc}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="inline-flex items-center gap-2 text-accent font-medium bg-accent/10 px-4 py-2 rounded-lg">
                                            <span className="text-sm">Outcome: {project.outcome}</span>
                                        </div>
                                        <div className="flex gap-2 mt-4">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Visual Placeholder (Ideally this would be an image) */}
                                <div className="md:col-span-5 bg-gradient-to-br from-gray-800 to-black relative min-h-[300px] md:min-h-full overflow-hidden flex items-center justify-center p-8 group-hover:bg-gray-800/80 transition-colors">
                                    <div className="text-center p-6 border border-white/10 rounded-xl bg-black/20 backdrop-blur-sm">
                                        <div className="text-5xl mb-4 opacity-50">✨</div>
                                        <p className="text-gray-400 text-sm">Project Visual</p>
                                    </div>
                                    {/* Decorative elements */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* R&D Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="rounded-3xl p-8 md:p-12 border border-dashed border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
                    >
                        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                            <div>
                                <div className="text-secondary font-bold mb-2">Ongoing R&D</div>
                                <h3 className="text-2xl font-bold mb-4">메타버스 심리케어 코칭 플랫폼</h3>
                                <p className="text-gray-400 max-w-2xl mb-4">
                                    익명성이 보장되는 아바타 기반 상담과 몰입형 상호작용 치료 활동을 제공하는 멘탈 헬스케어 플랫폼을 연구·개발 중입니다.
                                    시공간 제약 없는 심리 안전망 구축을 목표로 합니다.
                                </p>
                                <div className="flex gap-2">
                                    <span className="text-xs px-2 py-1 bg-secondary/20 text-secondary rounded">Mental Health</span>
                                    <span className="text-xs px-2 py-1 bg-secondary/20 text-secondary rounded">R&D</span>
                                </div>
                            </div>
                            <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all flex items-center gap-2">
                                View Research <ArrowRight size={16} />
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
