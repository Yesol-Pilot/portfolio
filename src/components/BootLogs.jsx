import { useState, useEffect } from 'react';
import { Html } from '@react-three/drei';

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

const getLogColor = (text) => {
    if (text.includes("FATAL ERROR") || text.includes("COMPROMISED")) return "text-red-500 font-bold drop-shadow-md";
    if (text.includes("RECOVERY") || text.includes("INTEGRITY") || text.includes("REPAIRING")) return "text-yellow-400";
    if (text.includes("OK") || text.includes("RESTORED") || text.includes("READY")) return "text-green-400";
    return "text-green-500";
};

const BootLogs = ({ onComplete }) => {
    const [logs, setLogs] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index >= BOOT_SEQUENCE.length) {
            if (onComplete) onComplete();
            return;
        }

        // Variable delay: longer for errors to let them sink in
        const isError = BOOT_SEQUENCE[index].includes("FATAL") || BOOT_SEQUENCE[index].includes("INTEGRITY");
        const delay = isError ? 800 : Math.random() * 300 + 100;

        const timeout = setTimeout(() => {
            setLogs(prev => [...prev.slice(-8), BOOT_SEQUENCE[index]]); // Keep last 9 lines
            setIndex(prev => prev + 1);
        }, delay);

        return () => clearTimeout(timeout);
    }, [index, onComplete]);

    return (
        <Html position={[0, -2, 0]} center transform distanceFactor={5} zIndexRange={[100, 0]}>
            <div className="w-96 font-mono text-xs text-left bg-black/90 p-4 border border-green-500/30 rounded-lg backdrop-blur-md select-none shadow-[0_0_20px_rgba(0,255,0,0.1)]">
                <div className="border-b border-green-500/30 mb-2 pb-1 text-green-300 font-bold flex justify-between items-center">
                    <span>SYSTEM_BOOT_LOG</span>
                    <span className="text-[10px] opacity-70">PID: {Math.floor(Math.random() * 9000) + 1000}</span>
                </div>
                <div className="flex flex-col gap-1 min-h-[140px]">
                    {logs.map((log, i) => (
                        <div key={i} className="opacity-90 flex items-start">
                            <span className="mr-2 text-green-800 shrink-0">[{new Date().toLocaleTimeString('en-US', { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" })}]</span>
                            <span className={`${getLogColor(log)} break-words leading-tight`}>{log}</span>
                        </div>
                    ))}
                    <div className="animate-pulse text-green-500 font-bold">_</div>
                </div>
            </div>
        </Html>
    );
};

export default BootLogs;
