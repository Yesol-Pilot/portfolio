import { Html } from '@react-three/drei';

const SystemHUD = () => {
    return (
        <Html fullscreen style={{ pointerEvents: 'none' }}>
            <div className="absolute top-8 right-8 w-64 font-mono text-cyan-500/80">
                <div className="border border-cyan-500/30 bg-black/40 backdrop-blur-md p-4 rounded-lg">
                    <h3 className="text-xs uppercase tracking-[0.2em] border-b border-cyan-500/30 pb-2 mb-2">
                        System Status
                    </h3>
                    <div className="space-y-1 text-[10px] leading-relaxed opacity-80">
                        <div className="flex justify-between">
                            <span>STABILITY:</span>
                            <span className="text-emerald-400">98.4%</span>
                        </div>
                        <div className="flex justify-between">
                            <span>DIMENSION:</span>
                            <span>Z-742</span>
                        </div>
                        <div className="flex justify-between">
                            <span>ORBITS:</span>
                            <span>NORMAL</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Grid Lines */}
            <div className="absolute bottom-10 left-10 w-48 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        </Html>
    );
};

export default SystemHUD;
