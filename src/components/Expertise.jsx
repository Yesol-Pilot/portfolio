import { motion } from 'framer-motion';
import { Target, Users, Briefcase, Lightbulb } from 'lucide-react';

const expertises = [
    {
        icon: Target,
        title: 'Education & Public Sector',
        desc: '교육청 및 공공기관의 특수성을 고려한 맞춤형 플랫폼 설계',
        details: [
            '20만 명 이상의 학생/교사가 접속하는 대규모 트래픽 안정성 확보 경험',
            '웹 접근성(WCAG) 및 공공기관 보안 규정 준수 가이드라인 수립',
            '이러닝(LMS)과 메타버스 공간의 데이터 연동 설계'
        ]
    },
    {
        icon: Users,
        title: 'UX/Service Design',
        desc: '사용자 여정(Journey Map) 기반의 직관적인 경험 설계',
        details: [
            '복잡한 3D 조작을 웹 표준 UI로 풀어내는 하이브리드 UX 전략',
            '게이미피케이션(Gamification) 요소를 활용한 자발적 참여 유도',
            'Figma/Protopie를 활용한 고도화된 인터랙션 프로토타이핑'
        ]
    },
    {
        icon: Briefcase,
        title: 'Business Strategy',
        desc: '단순 구축을 넘어선 지속 가능한 비즈니스 모델(BM) 수립',
        details: [
            '초기 스타트업 Seed 투자 유치를 위한 IR Deck 및 사업계획서 작성',
            'B2G/B2B 제안 경쟁 PT 수주율 80% 달성 노하우',
            '프로젝트 예산 관리 및 리스크 매니지먼트'
        ]
    },
    {
        icon: Lightbulb,
        title: 'Tech & Development Leadership',
        desc: '기획자와 개발자 사이의 명확한 커뮤니케이션 가교',
        details: [
            'Unity/Unreal 엔진의 기술적 한계와 가능성을 이해한 기능 명세',
            'Blockchain(Solidity) 스마트 컨트랙트 구조 설계를 위한 심도 있는 이해',
            'Agile 스프린트 운영을 통한 빠른 MVP 검증 및 피드백 반영'
        ]
    }
];

const Expertise = () => {
    return (
        <section id="expertise" className="py-32 bg-transparent relative">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Core Competencies</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        디지털 경험을 설계하는 기획자로서 네 가지 핵심 역량을 바탕으로 프로젝트를 성공으로 이끕니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {expertises.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Spotlight Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-black/50 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-primary/50 shadow-lg">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                                    {item.desc}
                                </p>
                                <ul className="space-y-3 border-t border-white/5 pt-6">
                                    {item.details.map((detail, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                                            <span className="text-primary mt-0.5">•</span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
