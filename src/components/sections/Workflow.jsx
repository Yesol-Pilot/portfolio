import { motion } from 'framer-motion';
import { Search, PenTool, Rocket, TrendingUp, MessageSquare, ShieldCheck, Zap } from 'lucide-react';

const steps = [
    {
        icon: Search,
        title: 'Discover',
        desc: 'Î¨∏Ï†úÎ•?Î™ÖÌôï???ïÏùò?©Îãà??'
    },
    {
        icon: PenTool,
        title: 'Design',
        desc: '?¨Ïö©??Ï§ëÏã¨ ?¥Í≤∞Ï±??§Í≥Ñ'
    },
    {
        icon: Rocket,
        title: 'Deliver',
        desc: 'ÏµúÏ†Å???îÎ£®???ÅÏãú ?úÍ≥µ'
    },
    {
        icon: TrendingUp,
        title: 'Grow',
        desc: '?∞Ïù¥???ºÎìúÎ∞?Í∏∞Î∞ò Í∞úÏÑ†'
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
                        ?®Ïàú??Í∏∞Îä•??ÎßåÎìú??Í≤ÉÏù¥ ?ÑÎãà?? ?¨Ïö©?êÍ? Í≤™Îäî ÏßÑÏßú Î¨∏Ï†úÎ•??¥Í≤∞?òÎäî ??ÏßëÏ§ë?©Îãà??
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
                            <h3 className="text-2xl font-bold">?ëÏóÖ ?§Ì???(Collaboration)</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                { title: 'Î™ÖÌôï???òÏÇ¨ ?ÑÎã¨', desc: 'Î™®Ìò∏?®ÏùÑ ?ÜÏï†Í≥?Íµ¨Ï≤¥???∏Ïñ¥Î°??åÌÜµ?òÏó¨ ÎπÑÏö© ?àÍ∞ê' },
                                { title: '?Ä?åÌÅ¨ Ï°∞ÏÑ±', desc: 'Í∞??ÑÎ¨∏Í∞Ä???òÍ≤¨??Í≤ΩÏ≤≠?òÎ©∞ ÏµúÏÑ†???òÏÇ¨Í≤∞Ï†ï ?†ÎèÑ' },
                                { title: '?ÑÍµ¨ ?úÏö©', desc: 'Slack, Jira, Notion ?±ÏúºÎ°??àÏä§?†Î¶¨ ?¨Î™Ö Í≥µÏú†' }
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
                            <h3 className="text-2xl font-bold">Î¶¨Ïä§??& ?àÏßà Í¥ÄÎ¶?/h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                { title: '?îÍµ¨?¨Ìï≠ Î™ÖÌôï??, desc: 'Ï¥àÍ∏∞??Î™®Ìò∏???îÍµ¨?¨Ìï≠??Íµ¨Ï≤¥?îÌïò??Î≥ÄÍ≤?ÏµúÏÜå?? },
                                { title: '?¥Ïäà Ï∂îÏ†Å', desc: '?ïÍ∏∞??Î¶¨Î∑∞Î°??†Ïû¨??Î¶¨Ïä§??Ï°∞Í∏∞ ?ùÎ≥Ñ Î∞??Ä?? },
                                { title: '?àÏßà ?úÏ? Ï§Ä??, desc: '?ÑÍ≤©??QA ?ÑÎ°ú?∏Ïä§Î°??ÑÏÑ±???íÏ? Í≤∞Í≥ºÎ¨?Î≥¥Ïû•' }
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
