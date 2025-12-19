import { motion } from 'framer-motion';
import { useStore } from '../../hooks/useStore';

const Hero = () => {
    const setScene = useStore(state => state.setScene);

    return (
        <section className="min-h-screen flex items-center justify-center relative z-10 pointer-events-none pt-20">
            <div className="container mx-auto px-6 text-center pointer-events-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/30 rounded-full mb-6">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs text-cyan-400 font-mono">5년차 PM · 이트라이브 CTS팀</span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-mono text-cyan-400 mb-4 tracking-widest">
                        안녕하세요, 허예솔입니다
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Metaverse & XR <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                            Project Manager
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
                        메타버스, XR, 블록체인 기반 플랫폼 기획과 프로젝트 전 과정을 관리합니다.<br />
                        사용자 중심 UI/UX 설계와 데이터 분석을 통해 결과물을 만듭니다.
                    </p>

                    {/* Awards Badge */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        <span className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-xs text-yellow-400 font-mono">
                            🏆 2024 ICT Award Grand Prize
                        </span>
                        <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-400 font-mono">
                            🏆 2024 웹어워드 통합대상
                        </span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105"
                        >
                            프로젝트 보기
                        </button>
                        <button
                            onClick={() => setScene('contact')}
                            className="px-8 py-3 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
                        >
                            연락하기
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

