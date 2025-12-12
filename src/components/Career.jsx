import { motion } from 'framer-motion';
import { Calendar, GraduationCap } from 'lucide-react';

const history = [
    {
        period: '2023.05 - Present',
        company: '(주)이트라이브',
        role: 'Metaverse & XR General Manager',
        desc: '공공/교육 분야 메타버스 플랫폼 구축 총괄. 10억 원 규모 이상의 대형 프로젝트 PM 수행. 기획부터 개발, 런칭, 운영까지 전 주기 리딩. 주요 클라이언트: 서울시, 경상남도교육청, 전북교육청 등.',
        tech: ['Unity', 'Unreal', 'WebGL', 'AWS']
    },
    {
        period: '2021.06 - 2023.06',
        company: '이츠자비스',
        role: 'Head of Service Planning',
        desc: '블록체인 기반 메타버스 플랫폼 기획 및 서비스 팀 리딩. NFT 프로젝트 및 에너지 데이터 관리 플랫폼(BEMS) 구축. 초기 스타트업의 서비스 기획, UX/UI 설계, 사업 제안 주도.',
        tech: ['React', 'Solidity', 'Three.js', 'Figma']
    }
];

const others = [
    {
        title: '이스포츠 메타버스 플랫폼 Holiday',
        desc: '가상 공간에서의 이스포츠 경기 관람 및 팬 커뮤니티 허브. 아바타 인터랙션과 실시간 경기 스트리밍 연동 기능 기획.'
    },
    {
        title: 'NFT 프로젝트 "Cyber-holic"',
        desc: '10,000개의 PFP NFT 제너레이티브 아트 기획 및 민팅 웹사이트 개발 리딩. 로드맵 설계 및 커뮤니티 운영.'
    },
    {
        title: '자비스월드 J-BEMS',
        desc: '건물 에너지 관리 시스템(BEMS)에 블록체인을 도입하여 데이터 무결성을 보장하는 친환경 에너지 플랫폼 기획.'
    }
];

const Career = () => {
    return (
        <section id="work" className="py-32 bg-transparent relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
                            <span className="w-2 h-8 bg-primary rounded-full" />
                            Career Timeline
                        </h2>

                        <div className="relative border-l-2 border-white/10 ml-3 space-y-12">
                            {history.map((item, index) => (
                                <div key={index} className="relative pl-10 group">
                                    {/* Timeline Node */}
                                    <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-black border-2 border-primary group-hover:bg-primary transition-colors duration-300 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

                                    {/* Card */}
                                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group-hover:translate-x-2">
                                        <div className="flex items-center gap-3 text-primary font-mono text-sm mb-2">
                                            <Calendar size={14} /> {item.period}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{item.company}</h3>
                                        <div className="text-lg text-white/80 font-medium mb-3">{item.role}</div>
                                        <p className="text-gray-300 text-sm leading-relaxed border-t border-white/5 pt-3 mt-3 mb-4">{item.desc}</p>

                                        {/* Tech Stack Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {item.tech && item.tech.map((t, i) => (
                                                <span key={i} className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded border border-primary/20">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="relative pl-10 group">
                                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-black border-2 border-gray-600 group-hover:border-gray-400 transition-colors" />
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
                                    <div className="flex items-center gap-2 text-gray-400 font-mono text-sm mb-2">
                                        <GraduationCap size={14} /> Education
                                    </div>
                                    <h3 className="text-lg font-bold text-white">수원대학교 경제금융학과 졸업</h3>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Other Projects */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
                            <span className="w-2 h-8 bg-accent rounded-full" />
                            Side Projects
                        </h2>
                        <div className="grid gap-6">
                            {others.map((project, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-300 group"
                                >
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{project.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Career;
