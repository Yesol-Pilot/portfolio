import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const endorsements = [
    {
        text: "?¤ë¬´ ì¤‘ì‹¬??êµìœ¡ ?˜ê²½??ë©”í?ë²„ìŠ¤ë¡??ì›”?˜ê²Œ êµ¬í˜„?ˆìŠµ?ˆë‹¤.",
        author: "ê°•ì›?„êµ?¡ì²­ ?´ë‹¹??,
        role: "Client",
        project: "?„ìº”ë²„ìŠ¤"
    },
    {
        text: "?™ìƒ?¤ì´ ?„ê¸° ?í™©??ì§ì ‘ ì²´í—˜?˜ê³  ?€ì²˜í•˜???¥ë ¥??ê¸°ë? ???ˆëŠ” ?ê¸°?ì¸ ?ˆì „ êµìœ¡?…ë‹ˆ??",
        author: "ê²½ìƒ?¨ë„êµìœ¡ì²?ê´€ê³„ìž",
        role: "Client",
        project: "VR ?ˆì „ì²´í—˜??
    },
    {
        text: "??‚¬??ê°€ì¹˜ë? ?”ì??¸ë¡œ ?„ë²½?˜ê²Œ ë³µì›?˜ì—¬ ë¬¸í™”? ì‚° ë³´ì¡´???ˆë¡œ??ëª¨ë¸???œì‹œ?ˆìŠµ?ˆë‹¤.",
        author: "ICT ?´ì›Œ???¬ì‚¬??,
        role: "Award Jury",
        project: "ë¶ì´Œ?œì˜¥ë§ˆì„ ?”ì????¸ìœˆ"
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <Quote size={48} className="text-primary mx-auto mb-4 opacity-50" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Partners & Feedback</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {endorsements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-surface p-8 rounded-2xl border border-white/5 relative group hover:border-primary/30 transition-colors"
                        >
                            <div className="absolute top-6 right-6 text-primary/20 text-6xl font-serif leading-none">"</div>
                            <p className="text-gray-300 text-lg mb-8 relative z-10 leading-relaxed">
                                {item.text}
                            </p>
                            <div>
                                <div className="font-bold text-white">{item.author}</div>
                                <div className="text-sm text-primary">{item.role}</div>
                                <div className="text-xs text-gray-500 mt-1">{item.project}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
