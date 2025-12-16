import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Code, Heart, Zap, ShieldCheck } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-surface text-center">
            <div className="container mx-auto px-6">

                {/* Vision Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-20"
                >
                    <h2 className="text-3xl font-bold mb-8">Vision</h2>
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-200 mb-8">
                        "기술???�간??경험???�장?�고, 긍정?�인 변?��? 만든?�고 믿습?�다."
                    </p>
                    <div className="bg-background/30 p-8 rounded-2xl border border-white/5 text-left md:text-center space-y-4 text-gray-400">
                        <p className="flex items-center gap-3 justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            ?�제 ?�습·?�전·직업 경험???�신?�는 교육·공공 메�?버스/XR ?�로?�트
                        </p>
                        <p className="flex items-center gap-3 justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            AI·로보?�스?� 메�?버스�?결합??물리?� ?��????�계�??�결?�는 ?�합 ?�비??
                        </p>
                        <p className="flex items-center gap-3 justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            지??가?�한 가치�? 비즈?�스 모델??갖춘 ?�로?�트
                        </p>
                    </div>
                </motion.div>

                {/* Core Values */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20"
                >
                    {[
                        { icon: Zap, title: 'Problem Solver', desc: '?�결책을 찾는 추진?? },
                        { icon: ShieldCheck, title: 'Ownership', desc: '?�까지 ?�수?�는 책임�?, iconComp: Heart }, // Using Heart as placeholder for Ownership if ShieldCheck is not ideal, but let's stick to simple ones.
                        { icon: Code, title: 'Adaptability', desc: '빠른 ?�응�??�수?? }
                    ].map((item, index) => (
                        <div key={index} className="p-6 bg-background rounded-xl border border-white/5">
                            <div className="font-bold text-white mb-2">{item.title}</div>
                            <div className="text-gray-400 text-sm">{item.desc}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-block bg-background p-10 rounded-3xl border border-white/10"
                >
                    <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-left">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <Mail size={20} />
                            </div>
                            <div>
                                <div className="text-sm text-gray-400">Email</div>
                                <div className="font-bold text-white">hys9802@gmail.com</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                                <Phone size={20} />
                            </div>
                            <div>
                                <div className="text-sm text-gray-400">Phone</div>
                                <div className="font-bold text-white">010-9126-7788</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <div className="text-sm text-gray-400">Location</div>
                                <div className="font-bold text-white">Seoul, Korea</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <footer className="mt-20 text-gray-600 text-sm">
                    © 2024 Yesol Heo. All rights reserved.
                </footer>
            </div>
        </section>
    );
};
export default Contact;
