import { motion } from 'framer-motion';
import { Trophy, Star, Award } from 'lucide-react';

const awards = [
    {
        project: 'Î∂ÅÏ¥å?úÏò•ÎßàÏùÑ ?îÏ????∏Ïúà',
        prizes: [
            '?èÜ 2024 ?πÏñ¥?åÎìúÏΩîÎ¶¨??Î¨∏ÌôîÎ∂ÄÎ¨??µÌï©?Ä??(Grand Prize)',
            '?éñÔ∏?2024 ICT?¥Ïõå?úÏΩîÎ¶¨ÏïÑ Í∏∞Ïà†?ÅÏã†Î∂ÑÏïº BRONZE'
        ]
    },
    {
        project: 'Í≤ΩÎÇ®ÍµêÏú°Ï≤??ôÏÉù?àÏ†ÑÏ≤¥Ìóò??XR',
        prizes: [
            '?èÜ 2024 ICT ?¥Ïõå???îÏ???Ïª§Î??àÏ??¥ÏÖò GRAND PRIZE',
            '?•á 2024 ?πÏñ¥?åÎìúÏΩîÎ¶¨??Ï≤¥ÌóòÎ∂ÑÏïº ÏµúÏö∞?òÏÉÅ'
        ]
    },
    {
        project: '?ÑÎ∂Å ÏßÅÏóÖÍ≥ÑÍ≥† Î©îÌ?Î≤ÑÏä§ Campus',
        prizes: [
            '?èÜ 2024 ?πÏñ¥?åÎìúÏΩîÎ¶¨??Î©îÌ?Î≤ÑÏä§Î∂ÑÏïº ?Ä??(Winner)',
            '?åü ÍµêÏú°Î∂Ä ?•Í? ?úÏ∞Ω (?ÑÎ°ú?ùÌä∏ Í≥µÎ°ú)'
        ]
    }
];

const Achievements = () => {
    return (
        <section id="achievements" className="py-32 bg-transparent border-t border-white/5 relative">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-6 flex justify-center items-center gap-3">
                        <Trophy className="text-yellow-400 fill-yellow-400 w-10 h-10" />
                        <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">Available Achievements</span>
                    </h2>
                    <p className="text-gray-400 text-lg">?ÅÏõî???±Í≥ºÎ°??∏Ï†ïÎ∞õÏ? ?ÑÎ°ú?ùÌä∏ ?òÏÉÅ ?¥Ïó≠?ÖÎãà??</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {awards.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, rotateX: 90 }}
                            whileInView={{ opacity: 1, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, type: 'spring', stiffness: 50 }}
                            className="bg-gradient-to-br from-white/10 to-black/40 backdrop-blur-md p-1 rounded-2xl border border-yellow-500/30 group hover:border-yellow-400 transition-colors duration-500"
                        >
                            <div className="bg-black/80 h-full rounded-xl p-8 flex flex-col items-center text-center relative overflow-hidden">
                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300 ring-1 ring-yellow-500/30">
                                    <Award size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-yellow-400 transition-colors h-16 flex items-center justify-center">
                                    {item.project}
                                </h3>

                                <ul className="space-y-4 w-full">
                                    {item.prizes.map((prize, pIndex) => (
                                        <li key={pIndex} className="bg-white/5 py-3 px-4 rounded-lg text-sm text-gray-300 border border-white/5 flex items-center gap-3 text-left">
                                            <Star size={14} className="text-yellow-500 flex-shrink-0 fill-yellow-500" />
                                            <span>{prize}</span>
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

export default Achievements;
