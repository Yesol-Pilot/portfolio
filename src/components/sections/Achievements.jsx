import { motion } from 'framer-motion';
import { Award, Trophy, Star, Crown, Medal } from 'lucide-react';

const Achievements = () => {
    const achievements = [
        {
            icon: <Crown className="w-8 h-8 text-yellow-400" />,
            title: "Grand Prize: Digital Comm.",
            project: "경남 온라인 학생 안전체험원",
            org: "2024 ICT Awards",
            desc: "디지털 커뮤니케이션 부문 Grand Prize 수상"
        },
        {
            icon: <Trophy className="w-8 h-8 text-orange-400" />,
            title: "Best Experience Design",
            project: "경남 온라인 학생 안전체험원",
            org: "2024 Web Award Korea",
            desc: "체험분야 최우수상 수상 (사용자 몰입형 인터페이스)"
        },
        {
            icon: <Star className="w-8 h-8 text-purple-400" />,
            title: "Metaverse Sector Grand Prize",
            project: "직업계고 메타버스 잡스페이스",
            org: "2024 Web Award Korea",
            desc: "메타버스분야 대상 (가상 공간 구축 및 연출)"
        },
        {
            icon: <Medal className="w-8 h-8 text-pink-400" />,
            title: "Cultural Sector Integrated Grand Prize",
            project: "메타한옥 : 북촌",
            org: "2024 Web Award Korea",
            desc: "문화부문 통합대상 (디지털 문화 콘텐츠 혁신)"
        },
        {
            icon: <Award className="w-8 h-8 text-blue-400" />,
            title: "Digital Tech Innovation Bronze",
            project: "메타한옥 : 북촌",
            org: "2024 ICT Award Korea",
            desc: "디지털 기술혁신분야 Bronze Prize 수상"
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
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
                        Honors & Awards
                    </span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-zinc-900/50 border border-white/10 p-8 rounded-2xl flex items-start gap-6 hover:border-yellow-500/50 transition-colors group"
                        >
                            <div className="bg-white/10 p-3 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                <p className="text-sm text-cyan-400 font-mono mb-1">{item.project}</p>
                                <p className="text-sm text-yellow-600 font-bold mb-3">{item.org}</p>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;

