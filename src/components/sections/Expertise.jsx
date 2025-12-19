import { motion } from 'framer-motion';
import { Target, Users, Briefcase, Lightbulb } from 'lucide-react';

const Expertise = () => {
    const expertiseItems = [
        {
            icon: <Briefcase className="w-8 h-8 text-cyan-400" />,
            title: "Project Management",
            desc: "사업기획, 제안서(RFP) 분석 및 작성, 예산 산출, 일정 및 리스크 관리, Agile/Waterfall 방법론 적용"
        },
        {
            icon: <Target className="w-8 h-8 text-purple-400" />,
            title: "Metaverse & XR Planning",
            desc: "플랫폼 아키텍처 및 세계관 설계, 서비스 화면설계서(IA/SB) 작성, 데이터 분석 기반 서비스 고도화"
        },
        {
            icon: <Users className="w-8 h-8 text-pink-400" />,
            title: "Communication & Tools",
            desc: "Jira/Redmine/Slack 활용 협업, GA/SQL 데이터 분석, 클라이언트/협력사 커뮤니케이션 주도"
        },
        {
            icon: <Lightbulb className="w-8 h-8 text-emerald-400" />,
            title: "Technical Understanding",
            desc: "Three.js/WebGL 구조 이해, 블록체인(Token/NFT) 생태계 설계, UI/UX 디자인 가이드라인 수립"
        }
    ];

    return (
        <section className="py-20 relative z-10 text-white">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-16 text-center"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                        Core Expertise
                    </span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {expertiseItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all hover:scale-105"
                        >
                            <div className="mb-6 p-4 bg-black/30 rounded-full w-fit mx-auto border border-white/5">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-center">{item.title}</h3>
                            <p className="text-gray-400 text-sm text-center leading-relaxed break-keep">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;

