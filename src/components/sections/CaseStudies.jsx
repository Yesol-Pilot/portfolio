import { motion } from 'framer-motion';

const CaseStudies = () => {
    return (
        <section id="work" className="py-20 relative z-10">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    Case Studies
                </h2>
                <div className="text-gray-300 text-center p-10 border border-white/10 rounded-xl backdrop-blur-sm">
                    <p>데이터 복구 필요: 인코딩 오류로 인해 컴포넌트가 초기화되었습니다.</p>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
