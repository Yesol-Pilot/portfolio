import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />

            <motion.div style={{ y: y1 }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse" />
            <motion.div style={{ y: y2 }} className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />

            {/* Geometric Accents */}
            <div className="absolute top-20 right-20 opacity-20 hidden md:block">
                <div className="w-20 h-20 border border-white/20 rounded-full" />
                <div className="w-40 h-40 border border-white/10 rounded-full -mt-30 -mr-10" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-surface border border-white/10 text-accent text-sm font-medium mb-6">
                        PM Portfolio
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        교육·공공 <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">메타버스/XR</span><br />
                        프로젝트 전문 PM, 허예솔
                    </h1>
                    <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                        교육청·공공기관과 함께 메타버스/XR 프로젝트를 기획·운영해 온 PM입니다.<br className="hidden md:block" />
                        현장의 문제를 깊이 이해하고, 사용자 경험을 중심에 두어<br className="hidden md:block" />
                        기술이 '더 나은(Better)·더 쉬운(Easy)' 경험이 되도록 설계합니다.
                    </p>
                </motion.div>

                {/* KPI Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                >
                    {[
                        { label: '메타버스·XR·블록체인 프로젝트 총괄', value: '10+' },
                        { label: '고객 만족도 (사용자 중심 기획)', value: '90%' },
                        { label: '프로젝트 기한 준수율', value: '100%' },
                    ].map((item, index) => (
                        <div key={index} className="bg-surface/50 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <div className="text-4xl font-bold text-white mb-2">{item.value}</div>
                            <div className="text-sm text-gray-400">{item.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-1.5 h-1.5 bg-accent rounded-full"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
