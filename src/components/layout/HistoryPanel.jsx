import React from 'react';
import { patchNotes } from '../../data/history';

const HistoryPanel = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 pointer-events-auto">
            <div className="w-full max-w-2xl bg-black border border-[#00ff41] p-6 font-mono text-[#00ff41] shadow-[0_0_20px_rgba(0,255,65,0.2)] relative overflow-hidden">

                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,65,0.05)_50%)] bg-[length:100%_4px] pointer-events-none" />

                {/* Header */}
                <div className="flex justify-between items-center mb-8 border-b border-[#00ff41]/30 pb-4">
                    <h2 className="text-xl font-bold tracking-widest text-shadow-glow">SYSTEM_UPDATE_LOGS</h2>
                    <button
                        onClick={onClose}
                        className="hover:bg-[#00ff41] hover:text-black px-2 py-1 transition-colors"
                    >
                        [CLOSE]
                    </button>
                </div>

                {/* Content */}
                <div className="h-[60vh] overflow-y-auto pr-2 custom-scrollbar space-y-8">
                    {patchNotes.map((note, idx) => (
                        <div key={idx} className="border-l-2 border-[#00ff41]/50 pl-4 relative">
                            {/* Bullet */}
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

                {/* Footer */}
                <div className="mt-4 text-xs text-center opacity-50 border-t border-[#00ff41]/30 pt-4">
                    END_OF_LOG // TOTAL_RECORDS: {patchNotes.length}
                </div>
            </div>
        </div>
    );
};

export default HistoryPanel;
