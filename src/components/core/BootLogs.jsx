import { useState, useEffect } from 'react';
import { useStore } from '../../hooks/useStore';

const BOOT_SEQUENCE = [
    "INITIALIZING KERNEL...",
    "LOADING MEMORY MODULES... [OK]",
    "MOUNTING V-DOM FILESYSTEM...",
    "CHECKING QUANTUM ENTANGLEMENT...",
    "FATAL ERROR: SEGMENTATION FAULT IN SECTOR 0x9F",
    "SYSTEM INTEGRITY COMPROMISED.",
    "INITIATING RECOVERY PROTOCOL...",
    "PERFORMING INTEGRITY CHECK...",
    "REPAIRING CORRUPTED DATA BLOCKS...",
    "REBUILDING DEPENDENCIES... [OK]",
    "BYPASSING SECURITY FIREWALL...",
    "ACCESSING MAINFRAME...",
    "ESTABLISHING SECURE CONNECTION...",
    "SYSTEM RESTORED.",
    "SYSTEM READY."
];

const THEMES = {
    warp: {
        primary: "text-cyan-400",
        secondary: "text-cyan-300",
        border: "border-cyan-500/30",
        shadow: "shadow-[0_0_20px_rgba(6,182,212,0.2)]",
        error: "text-red-500"
    },
    genesis: {
        primary: "text-green-400",
        secondary: "text-green-300",
        border: "border-green-500/30",
        shadow: "shadow-[0_0_20px_rgba(0,255,0,0.2)]",
        error: "text-orange-500"
    },
    neural: {
        primary: "text-purple-400",
        secondary: "text-purple-300",
        border: "border-purple-500/30",
        shadow: "shadow-[0_0_20px_rgba(168,85,247,0.2)]",
        error: "text-pink-500"
    },
    classic: { // Added classic theme support if needed or fallback
        primary: "text-green-500",
        secondary: "text-green-400",
        border: "border-green-500/30",
        shadow: "shadow-[0_0_20px_rgba(0,255,0,0.2)]",
        error: "text-red-500"
    }
};

const getLogColor = (text, themeStyles) => {
    if (text.includes("FATAL ERROR") || text.includes("COMPROMISED")) return `${themeStyles.error} font-bold drop-shadow-md`;
    if (text.includes("RECOVERY") || text.includes("INTEGRITY") || text.includes("REPAIRING")) return "text-yellow-400";
    if (text.includes("OK") || text.includes("RESTORED") || text.includes("READY")) return themeStyles.primary;
    return themeStyles.secondary;
};

const BootLogs = ({ onComplete, theme = 'genesis' }) => {
    const [logs, setLogs] = useState([]);
    const [index, setIndex] = useState(0);
    const styles = THEMES[theme] || THEMES.genesis;

    // Stable PID
    const [pid] = useState(() => Math.floor(Math.random() * 9000) + 1000);
    const addLog = useStore((state) => state.addLog);

    useEffect(() => {
        if (index >= BOOT_SEQUENCE.length) {
            if (onComplete) onComplete();
            return;
        }

        const isError = BOOT_SEQUENCE[index].includes("FATAL") || BOOT_SEQUENCE[index].includes("INTEGRITY");
        const delay = isError ? 800 : Math.random() * 200 + 50;

        const timeout = setTimeout(() => {
            const currentLog = BOOT_SEQUENCE[index];
            setLogs(prev => [...prev.slice(-8), currentLog]); // Show slightly more lines in 2D
            addLog(currentLog);
            setIndex(prev => prev + 1);
        }, delay);

        return () => clearTimeout(timeout);
    }, [index, onComplete, addLog]);

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
            <div className={`w-[400px] font-mono text-xs text-center bg-black/80 p-6 border-2 ${styles.border} backdrop-blur-md select-none rounded-lg shadow-2xl transition-all duration-300`}>
                <div className={`border-b ${styles.border} mb-4 pb-2 ${styles.primary} font-bold flex justify-between items-center opacity-90 tracking-widest`}>
                    <span>SYSTEM_BOOT_LOG</span>
                    <span className="opacity-70">PID: {pid}</span>
                </div>
                <div className="flex flex-col gap-1 min-h-[160px] items-center justify-center">
                    {logs.map((log, i) => (
                        <div key={i} className="opacity-90 flex items-center w-full text-left pl-2">
                            <span className={`mr-3 ${styles.secondary} opacity-50 shrink-0 text-[10px]`}>
                                {new Date().toLocaleTimeString('en-US', { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" })}
                            </span>
                            <span className={`${getLogColor(log, styles)} break-words leading-tight`}>{log}</span>
                        </div>
                    ))}
                    <div className={`animate-pulse ${styles.primary} font-bold text-lg mt-1`}>_</div>
                </div>
            </div>
        </div>
    );
};

export default BootLogs;
