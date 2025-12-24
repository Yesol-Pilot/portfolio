import { motion } from 'framer-motion';
import { Database, Code, PenTool, Layout, Award, BookOpen } from 'lucide-react';

const Expertise = () => {
    const skillGroups = [
        {
            title: "Planning & Strategy",
            icon: <Layout className="w-5 h-5" />,
            color: "text-cyan-400",
            skills: [
                { name: "Service Planning", level: 95 },
                { name: "Project Management", level: 90 },
                { name: "Data Analysis", level: 85 },
                { name: "Tokenomics", level: 80 }
            ]
        },
        {
            title: "Tech & Tools",
            icon: <Code className="w-5 h-5" />,
            color: "text-purple-400",
            skills: [
                { name: "Unreal / Unity", level: 75 },
                { name: "Web3 / Blockchain", level: 80 },
                { name: "Jira / Confluence", level: 95 },
                { name: "Figma", level: 85 }
            ]
        }
    ];

    const certifications = [
        {
            title: "정보처리기사 (필기)",
            issuer: "한국산업인력공단",
            date: "2024.08"
        },
        {
            title: "IT 프로젝트 성과관리 & 위험관리",
            issuer: "한국산업인력공단 (15h)",
            date: "2024.06"
        },
        {
            title: "프로젝트 통합관리 (IT사례)",
            issuer: "한국산업인력공단 (15h)",
            date: "2024.06"
        }
    ];

    return (
        <section className="py-24 relative z-10 text-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold mb-4">Core Expertise</h2>
                    <p className="text-gray-400">Technical Knowledge & Professional Skills</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-black/40 border border-white/10 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden group"
                        >
                            {/* Decorative Glow - Fixed Syntax */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-${group.color.split('-')[1]}-500/10 rounded-bl-full`} />

                            <div className="flex items-center gap-3 mb-8">
                                <div className={`p-3 bg-white/5 rounded-lg ${group.color}`}>
                                    {group.icon}
                                </div>
                                <h3 className="text-2xl font-bold">{group.title}</h3>
                            </div>

                            <div className="space-y-6">
                                {group.skills.map((skill, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-gray-200 font-medium">{skill.name}</span>
                                            <span className={`font-mono ${group.color}`}>{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                                className={`h-full ${group.color.replace('text', 'bg')} opacity-80 shadow-[0_0_10px_currentColor]`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Training & Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12"
                >
                    <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                        <Award className="w-6 h-6 text-yellow-400" />
                        <h3 className="text-2xl font-bold">Certifications & Education</h3>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {certifications.map((cert, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-black/20 hover:bg-black/40 transition-colors">
                                <BookOpen className="w-5 h-5 text-gray-500 mt-1" />
                                <div className="text-left">
                                    <div className="font-bold text-white mb-1">{cert.title}</div>
                                    <div className="text-sm text-gray-400 mb-1">{cert.issuer}</div>
                                    <div className="text-xs font-mono text-cyan-500">{cert.date}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Expertise;
