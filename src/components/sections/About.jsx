import { motion } from 'framer-motion';
import { Quote, Sparkles, Clock, MessageCircle } from 'lucide-react';

const About = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="py-24 relative z-10 text-white overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 max-w-6xl relative">
                {/* 1. The Manifesto (Typography) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-24 text-center"
                >
                    <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md">
                        <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase">My Philosophy</span>
                    </motion.div>

                    <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                        <span className="block text-gray-400 text-2xl md:text-3xl mb-2 font-light">"농담은 해도,</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-400 shadow-glow">
                            거짓말은 하지 않습니다."
                        </span>
                    </motion.h2>

                    <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed font-light break-keep text-balance">
                        화려한 말보다 <strong className="text-white font-bold">정확한 팩트</strong>를,<br className="md:hidden" /> 막연한 다짐보다 <strong className="text-white font-bold">확실한 약속</strong>을 전합니다.
                    </motion.p>
                </motion.div>

                {/* 2. ABC Identity Cards (Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <IdentityCard
                        icon={<Sparkles className="w-8 h-8 text-yellow-400" />}
                        title="Attitude"
                        desc="적극적이고 주도적인 자세"
                        detail="시키는 일만 하지 않습니다. 프로젝트의 성공을 위해 먼저 고민하고, 막힌 곳을 뚫어내며, 팀에 긍정적인 에너지를 불어넣는 주도적인(Proactive) 자세로 임합니다."
                        delay={0}
                    />
                    <IdentityCard
                        icon={<Clock className="w-8 h-8 text-cyan-400" />}
                        title="Be in time"
                        desc="철저한 시간 엄수"
                        detail="모든 약속과 마감 기한(Deadline)을 생명처럼 여깁니다. 철저한 일정 관리(Scheduling)를 통해 프로젝트가 지연 없이 목표에 도달하도록 완벽을 기합니다."
                        delay={0.2}
                    />
                    <IdentityCard
                        icon={<MessageCircle className="w-8 h-8 text-pink-400" />}
                        title="Communication"
                        desc="정확하고 배려하는 소통"
                        detail="모호함을 배제한 명확한 커뮤니케이션을 지향합니다. 동시에 상대방의 입장을 경청하고 조율하며, 신뢰(Trust)를 바탕으로 협업을 이끌어냅니다."
                        delay={0.4}
                    />
                </div>

                {/* 3. The Definition (Quote Style) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative p-10 md:p-14 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl backdrop-blur-xl overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-500 to-purple-600" />
                    <Quote className="absolute top-8 right-8 w-20 h-20 text-white/5 rotate-180" />

                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Multiverse Architect <span className="text-gray-500 font-normal text-lg ml-2">// 세계관 설계자</span>
                        </h3>
                        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                            <p>
                                저에게 기획이란 단순히 기능 명세서를 작성하는 일이 아닙니다.<br />
                                <strong className="text-white">하나의 완결된 우주(Universe)</strong>를 창조하는 엔지니어링입니다.
                            </p>
                            <p>
                                코드(Code)와 디자인(Design), 그리고 비즈니스(Business)라는<br />
                                서로 다른 행성들이 조화롭게 공전할 수 있도록 중력을 설계합니다.
                            </p>
                            <p>
                                <span className="text-cyan-400 font-mono">Input:</span> 클라이언트의 요구사항과 사용자의 니즈<br />
                                <span className="text-purple-400 font-mono">Process:</span> 데이터 분석과 논리적 아키텍처 설계<br />
                                <span className="text-emerald-400 font-mono">Output:</span> <strong className="text-white border-b border-white/30 pb-0.5">몰입감 있는 경험과 비즈니스 성과</strong>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Helper Component for Cards
const IdentityCard = ({ icon, title, desc, detail, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="group relative bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.3)]"
        >
            <div className="mb-6 p-4 bg-white/5 rounded-full w-fit group-hover:bg-cyan-500/20 transition-colors">
                {icon}
            </div>
            <h4 className="text-3xl font-black text-white mb-2 italic tracking-tighter">{title}</h4>
            <div className="text-cyan-400 font-bold text-sm mb-4 uppercase tracking-wider">{desc}</div>
            <p className="text-gray-400 text-sm leading-relaxed text-pretty">
                {detail}
            </p>
        </motion.div>
    );
};

export default About;
