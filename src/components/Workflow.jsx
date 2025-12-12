import { motion } from 'framer-motion';
import { Search, PenTool, Rocket, TrendingUp, MessageSquare, ShieldCheck, Zap } from 'lucide-react';

const steps = [
    {
        icon: Search,
        title: 'Discover',
        desc: '문제를 명확히 정의합니다.'
    },
    {
        icon: PenTool,
        title: 'Design',
        desc: '사용자 중심 해결책 설계'
    },
    {
        icon: Rocket,
        title: 'Deliver',
        desc: '최적의 솔루션 적시 제공'
    },
    {
        icon: TrendingUp,
        title: 'Grow',
        desc: '데이터/피드백 기반 개선'
    }
];

const Workflow = () => {
    return (
        <section id="process" className="py-24 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">How I Run Projects</h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        단순히 기능을 만드는 것이 아니라, 사용자가 겪는 진짜 문제를 해결하는 데 집중합니다.
                    </p>
                </motion.div>

                {/* Process Flow */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24 relative">
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 z-0" />
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative z-10 bg-surface border border-white/5 p-8 rounded-2xl text-center group hover:border-primary/50 transition-colors"
                        >
                            <div className="w-16 h-16 bg-background rounded-full border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-primary/10">
                                <step.icon className="text-primary" size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-gray-400 text-sm">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Grid for Collaboration & QA */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-surface p-10 rounded-3xl border border-white/5"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-accent/10 rounded-lg text-accent">
                                <MessageSquare size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">협업 스타일 (Collaboration)</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                { title: '명확한 의사 전달', desc: '모호함을 없애고 구체적 언어로 소통하여 비용 절감' },
                                { title: '팀워크 조성', desc: '각 전문가의 의견을 경청하며 최선의 의사결정 유도' },
                                { title: '도구 활용', desc: 'Slack, Jira, Notion 등으로 히스토리 투명 공유' }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">{item.title}</strong>
                                        <p className="text-gray-400 text-sm">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-surface p-10 rounded-3xl border border-white/5"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">리스크 & 품질 관리</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                { title: '요구사항 명확화', desc: '초기에 모호한 요구사항을 구체화하여 변경 최소화' },
                                { title: '이슈 추적', desc: '정기적 리뷰로 잠재적 리스크 조기 식별 및 대응' },
                                { title: '품질 표준 준수', desc: '엄격한 QA 프로세스로 완성도 높은 결과물 보장' }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">{item.title}</strong>
                                        <p className="text-gray-400 text-sm">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Workflow;
