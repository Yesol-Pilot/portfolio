import React, { useState } from 'react';
import { patchNotes } from '../../data/history';
import { useStore } from '../../hooks/useStore';

const HistoryPanel = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState('PATCH'); // 'PATCH' | 'SYSTEM'
    const systemLogs = useStore((state) => state.systemLogs);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 pointer-events-auto">
            <div className="w-full max-w-2xl h-[70vh] bg-black border border-[#00ff41] p-6 font-mono text-[#00ff41] shadow-[0_0_20px_rgba(0,255,65,0.2)] relative overflow-hidden flex flex-col">

                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,65,0.05)_50%)] bg-[length:100%_4px] pointer-events-none z-0" />

                {/* Header & Tabs */}
                <div className="flex justify-between items-start mb-6 border-b border-[#00ff41]/30 pb-4 z-10 relative">
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-4">
                            <button
                                onClick={() => setActiveTab('PATCH')}
                                className={`text-lg font-bold transition-all ${activeTab === 'PATCH' ? 'text-white text-shadow-glow underline decoration-2 underline-offset-4' : 'opacity-50 hover:opacity-100'}`}
                            >
                                UPDATE_LOGS
                            </button>
                            <button
                                onClick={() => setActiveTab('SYSTEM')}
                                className={`text-lg font-bold transition-all ${activeTab === 'SYSTEM' ? 'text-white text-shadow-glow underline decoration-2 underline-offset-4' : 'opacity-50 hover:opacity-100'}`}
                            >
                                SYSTEM_LOGS
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="hover:bg-[#00ff41] hover:text-black px-2 py-1 transition-colors border border-[#00ff41]/50 text-xs"
                    >
                        [CLOSE_TERMINAL]
                    </button>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto custom-scrollbar z-10 relative pr-2">

                    {/* PATCH NOTES VIEW */}
                    {activeTab === 'PATCH' && (
                        <div className="space-y-8">
                            {patchNotes.map((note, idx) => (
                                <div key={idx} className="border-l-2 border-[#00ff41]/50 pl-4 relative">
                                    <div className="absolute -left-[5px] top-0 w-2 h-2 bg-[#00ff41]" />
                                    <div className="flex justify-between items-baseline mb-2 text-sm opacity-70">
                                        <span>{note.date}</span>
                                        <span>{note.version}</span>
                                    </div>
                                    <h3 className="text-lg font-bold mb-3 text-white">{note.title}</h3>
                                    <ul className="space-y-1 text-sm text-[#00ff41]/80">
                                        {note.changes.map((change, cIdx) => (
                                            <li key={cIdx} className="flex">
                                                <span className="mr-2">&gt;</span>
                                                {change}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* SYSTEM LOGS VIEW */}
                    {activeTab === 'SYSTEM' && (
                        <div className="font-mono text-xs space-y-1">
                            {systemLogs.length === 0 && (
                                <div className="text-center opacity-50 py-10">NO_SYSTEM_LOGS_FOUND_LOCAL_MEMORY_EMPTY</div>
                            )}
                            {systemLogs.map((log, idx) => (
                                <div key={idx} className="flex gap-4 hover:bg-[#00ff41]/10 px-2 py-0.5 rounded transition-colors">
                                    <span className="opacity-50 min-w-[80px]">{log.timestamp}</span>
                                    <span className={`${log.message.includes('FATAL') || log.message.includes('ERROR') ? 'text-red-500 font-bold' : log.message.includes('OK') ? 'text-white' : 'text-[#00ff41]/80'}`}>
                                        {log.message}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="mt-4 text-[10px] text-center opacity-50 border-t border-[#00ff41]/30 pt-4 z-10">
                    STATUS: {activeTab === 'PATCH' ? 'ONLINE' : 'MONITORING'} // RECORDS: {activeTab === 'PATCH' ? patchNotes.length : systemLogs.length} // MEM_USAGE: {Math.floor(Math.random() * 30 + 10)}MB
                </div>
            </div>
        </div>
    );
};

export default HistoryPanel;
