import { useState, useEffect } from 'react';
import { Html } from '@react-three/drei';
import MatrixRain from '../effects/MatrixRain';
import { useStore } from '../../hooks/useStore';

const ClassicMatrix = ({ isFinished }) => {
    const [showAccessGranted, setShowAccessGranted] = useState(false);

    useEffect(() => {
        if (isFinished) {
            setShowAccessGranted(true);
        }
    }, [isFinished]);

    return (
        <group>
            {/* Background Matrix Rain */}
            <MatrixRain opacity={0.3} />

            {/* Access Granted Overlay */}
            {showAccessGranted && (
                <Html center zIndexRange={[100, 0]}>
                    <div className="flex flex-col items-center justify-center w-screen h-screen bg-black/80 backdrop-blur-sm">
                        <h1 className="text-6xl md:text-8xl font-black text-[#00ff41] tracking-tighter animate-pulse drop-shadow-[0_0_20px_rgba(0,255,65,0.8)] text-center px-4">
                            ACCESS<br />GRANTED
                        </h1>
                        <div className="mt-4 text-[#00ff41] font-mono text-sm opacity-80 animate-bounce">
                            INITIALIZING SYSTEM...
                        </div>
                    </div>
                </Html>
            )}
        </group>
    );
};

export default ClassicMatrix;
