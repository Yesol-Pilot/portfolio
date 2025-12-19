import { useStore } from '../../hooks/useStore';
import HistoryPanel from './HistoryPanel';
import Navbar from './Navbar';

const Overlay = () => {
    const currentScene = useStore((state) => state.currentScene);
    const setScene = useStore((state) => state.setScene);
    const isMuted = useStore((state) => state.isMuted);
    const toggleMute = useStore((state) => state.toggleMute);
    const orbitSpeed = useStore((state) => state.orbitSpeed);
    const setOrbitSpeed = useStore((state) => state.setOrbitSpeed);

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
            <Navbar />

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


        </div>
    );
};

export default Overlay;
