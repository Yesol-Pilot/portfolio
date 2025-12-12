import HistoryPanel from './HistoryPanel';

// ... existing imports

const Overlay = () => {
    // ... existing hooks

    return (
        <div className="fixed inset-0 pointer-events-none z-40 text-xs font-mono select-none">

            {/* History Panel Overlay */}
            {currentScene === 'history' && (
                <HistoryPanel onClose={() => setScene('hub')} />
            )}

            {/* Global Back Button (Visible in sub-scenes) */}
            {currentScene !== 'boot' && currentScene !== 'hub' && currentScene !== 'history' && (
                <button
                    onClick={() => setScene('hub')}
                    className="fixed top-24 left-6 pointer-events-auto flex items-center gap-2 group text-white/70 hover:text-white transition-colors"
                >
                    <span className="w-8 h-px bg-white/30 group-hover:bg-accent transition-colors" />
                    &lt; RETURN TO SYSTEM [ESC]
                </button>
            )}

            {/* Top Navigation Bar */}
            <nav className="fixed top-0 w-full p-6 flex justify-between items-start pointer-events-auto mix-blend-difference">
                <Navbar />
            </nav>

            {/* Sound Toggle */}
            <button
                onClick={toggleMute}
                className="fixed top-24 right-10 pointer-events-auto px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 hover:border-accent text-white transition-colors z-50 flex items-center gap-2"
            >
                <div className={`w-2 h-2 rounded-full ${isMuted ? 'bg-red-500' : 'bg-green-500 animate-pulse'}`} />
                {isMuted ? 'MUTED' : 'AUDIO ON'}
            </button>

            {/* Bottom Left Status */}
            <div className="fixed bottom-10 left-10 text-xs text-muted font-mono mix-blend-difference">
                SYSTEM: ONLINE <br />
                FPS: 60 <br />
                COORD: [34.5, 127.0]
            </div>

            {/* Bottom Right UI Area */}
            <div className="fixed bottom-10 right-10 flex flex-col items-end gap-4 mix-blend-difference pointer-events-auto">

                {/* Orbit Speed Controls (visible only in 'hub') */}
                {currentScene === 'hub' && (
                    <div className="bg-black/50 backdrop-blur-md border border-white/10 p-4 rounded-lg text-right scale-150 origin-bottom-right">
                        <div className="text-xs text-muted font-mono mb-2 uppercase">System Speed</div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setOrbitSpeed(Math.max(0.05, orbitSpeed - 0.05))}
                                className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-accent hover:text-black transition-colors rounded"
                            >
                                -
                            </button>
                            <span className="w-12 text-center font-mono text-accent">
                                {orbitSpeed.toFixed(2)}
                            </span>
                            <button
                                onClick={() => setOrbitSpeed(Math.min(0.5, orbitSpeed + 0.05))}
                                className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-accent hover:text-black transition-colors rounded"
                            >
                                +
                            </button>
                        </div>
                    </div>
                )}

                {/* Scroll Progress Placeholder */}
                <div className="text-right">
                    <div className="text-xs text-muted font-mono mb-2">SCROLL PROGRESS</div>
                    <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-accent w-1/3 animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overlay;
