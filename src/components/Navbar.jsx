import { useState, useEffect } from 'react';
import { useStore } from '../hooks/useStore';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [activeSection, setActiveSection] = useState('');

    // Scroll Spy Logic
    useEffect(() => {
        const handleSpy = () => {
            const sections = ['hero', 'work', 'expertise', 'achievements'];
            const scrollPosition = window.scrollY + 100; // Offset

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section);
                    return;
                }
            }
            setActiveSection('');
        };

        window.addEventListener('scroll', handleSpy);
        return () => window.removeEventListener('scroll', handleSpy);
    }, []);

    const navItems = ['HOME', 'WORK', 'EXPERTISE', 'PROCESS', 'CONTACT', 'HISTORY'];
    const currentScene = useStore((state) => state.currentScene);
    const setScene = useStore((state) => state.setScene);

    const handleNav = (scene, id) => {
        setScene(scene);
        if (id) {
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    // Reordered to match ProfileScene: Work -> Expertise -> Process(Achievements)
    const navLinks = [
        { name: 'Home', action: () => handleNav('hub'), id: 'hub' },
        { name: 'Work', action: () => handleNav('profile', 'work'), id: 'work' },
        { name: 'Expertise', action: () => handleNav('profile', 'expertise'), id: 'expertise' },
        { name: 'Process', action: () => handleNav('profile', 'achievements'), id: 'achievements' },
        { name: 'Contact', action: () => handleNav('contact'), id: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <button onClick={() => setScene('hub')} className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Yesol Heo
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={link.action}
                            className={`transition-colors text-sm font-medium ${activeSection === link.id
                                ? 'text-primary font-bold shadow-[0_0_10px_rgba(6,182,212,0.5)]'
                                : 'text-gray-300 hover:text-white hover:text-glow'
                                }`}
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface border-b border-gray-800"
                    >
                        <div className="flex flex-col px-6 py-4 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white block py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
