import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const endorsements = [
    {
        text: "실무 중심의 교육 환경을 메타버스로 탁월하게 구현했습니다.",
        author: "강원도교육청 담당자",
        role: "Client",
        project: "위캔버스"
    },
    {
        text: "학생들이 위기 상황을 직접 체험하고 대처하는 능력을 기를 수 있는 획기적인 안전 교육입니다.",
        author: "경상남도교육청 관계자",
        role: "Client",
        project: "VR 안전체험원"
    },
    {
        text: "역사적 가치를 디지털로 완벽하게 복원하여 문화유산 보존의 새로운 모델을 제시했습니다.",
        author: "ICT 어워드 심사평",
        role: "Award Jury",
        project: "북촌한옥마을 디지털 트윈"
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
