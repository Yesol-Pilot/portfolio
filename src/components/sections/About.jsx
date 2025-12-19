import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="py-20 relative z-10 text-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-mono text-cyan-400 mb-2 tracking-widest">ABOUT ME</h2>
                    <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                        노력으로 끝내지 않고 <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            결과물로 입증하는 PM
                        </span>
                    </h3>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 text-gray-300 leading-relaxed text-lg">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full" />
                            공감에 기반한 소통
                        </h4>
                        <p className="mb-6">
                            다양한 서비스업 경험과 스타트업 초기 멤버로서의 활동을 통해,
                            가장 낮은 곳에서부터 관리자 위치까지 폭넓은 시야를 갖추게 되었습니다.
                        </p>
                        <p>
                            이러한 경험은 개발자, 디자이너, 클라이언트 등
                            다양한 이해관계자의 입장을 이해하고 조율하는
                            유연한 커뮤니케이션 능력의 바탕이 되었습니다.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <h4 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-purple-500 rounded-full" />
                            끝까지 해결하는 책임감
                        </h4>
                        <p className="mb-6">
                            "농담은 해도 거짓말은 하지 않는다"는 생활신조 아래,
                            맡은 일에 대해서는 변명보다 해결책을 찾으려 노력합니다.
                        </p>
                        <p>
                            예상치 못한 이슈가 발생하더라도 포기하지 않고
                            데이터와 논리를 바탕으로 문제를 해결하며,
                            반드시 실질적인 성과로 연결시키는 것을 목표로 합니다.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 p-8 bg-white/5 border border-white/10 rounded-2xl text-center backdrop-blur-sm"
                >
                    <p className="text-xl font-medium text-white mb-2">
                        "저에게 기획이란 단순히 문서를 만드는 것이 아니라,"
                    </p>
                    <p className="text-cyan-400">
                        사용자와 기술 사이의 복잡한 문제를 풀어내는 과정입니다.
                    </p>
                    {/* Planning Philosophy */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm text-left"
                    >
                        <h4 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-purple-500 rounded-full" />
                            Multiverse Architect: 세계를 설계하다
                        </h4>
                        <p className="mb-6 leading-relaxed">
                            저에게 기획이란 단순한 기능 명세가 아닌, **하나의 완결된 우주(Universe)**를 창조하는 작업입니다.
                            코드와 디자인, 사운드라는 각각의 요소들이 모여 고유한 중력을 가진 행성(Project)이 되고,
                            사용자는 그 안에서 몰입하고 탐험하며 새로운 가치를 발견합니다.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            이 포트폴리오 사이트 역시 저의 이러한 철학을 반영하여, **[Boot - Hub - Lab]**으로 이어지는
                            유기적인 멀티버스 구조로 설계되었습니다.
                            데이터 기반의 이성적 설계와 감성적인 스토리텔링이 결합될 때 비로소 진정한 몰입이 완성된다고 믿습니다.
                            기술 너머의 경험을 설계하는 **테크니컬 아티스트형 기획자**, 바로 저의 지향점입니다.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
