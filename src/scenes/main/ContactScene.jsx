import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sparkles, Text, Float, useCursor, Html, Environment } from '@react-three/drei';
import { useStore } from '../../hooks/useStore';
import * as THREE from 'three';

const ContactScene = () => {
    const setScene = useStore(state => state.setScene);
    const portalRef = useRef();
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [buttonText, setButtonText] = useState("SEND VIA GMAIL");

    const handleContact = (e) => {
        e.stopPropagation();

        if (!name || !message) {
            setButtonText("PLEASE FILL ALL FIELDS");
            setTimeout(() => setButtonText("SEND VIA GMAIL"), 2000);
            return;
        }

        // Construct Gmail Web Link (100% connection success on web)
        const subject = encodeURIComponent(`[PORTFOLIO] Message from ${name}`);
        const body = encodeURIComponent(message);
        // Gmail Composer URL
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=dpthf1537@gmail.com&su=${subject}&body=${body}`;

        // Feedback
        setButtonText("CONNECTING TO GMAIL...");

        // Execute - Open in new tab
        window.open(gmailUrl, '_blank');

        // Reset
        setTimeout(() => {
            setButtonText("TRANSMISSION ESTABLISHED");
            setName('');
            setMessage('');
        }, 1000);
        setTimeout(() => setButtonText("SEND VIA GMAIL"), 3000);
    };

    useFrame((state) => {
        if (portalRef.current) {
            portalRef.current.rotation.z += 0.02; // Faster rotation
            // Pulse effect
            const scale = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.05;
            portalRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <group>
            {/* Thematic Background */}
            <color attach="background" args={['#08020a']} />
            <Environment preset="city" />

            <group position={[0, 0, 0]}>
                {/* Main Portal Ring */}
                <group ref={portalRef}>
                    <mesh>
                        <torusGeometry args={[3, 0.1, 16, 100]} />
                        <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={5} toneMapped={false} />
                    </mesh>
                    <mesh rotation={[0, 0, Math.PI / 2]}>
                        <torusGeometry args={[3.2, 0.05, 16, 100]} />
                        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={3} toneMapped={false} />
                    </mesh>
                </group>

                {/* Inner Void */}
                <mesh>
                    <circleGeometry args={[2.8, 32]} />
                    <meshBasicMaterial color="#000000" />
                </mesh>

                {/* Particles spewing out */}
                <Sparkles count={300} scale={12} size={6} speed={0.6} opacity={0.8} color="#ec4899" />

                <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
                    <Text position={[0, 0.5, 1]} fontSize={0.6} color="#ffffff" anchorX="center">
                        OPEN CHANNEL
                    </Text>

                    {/* Z=2, pointerEvents auto */}
                    <Html position={[0, -0.8, 2]} transform distanceFactor={5} style={{ pointerEvents: 'auto' }}>
                        <div className="bg-black/90 p-6 rounded-2xl border border-white/10 backdrop-blur-md w-96 text-left shadow-[0_0_30px_rgba(236,72,153,0.3)]">
                            <h2 className="text-xl font-bold text-white mb-4 text-center">COMMS TERMINAL</h2>

                            {/* Form Inputs */}
                            <div className="space-y-3 mb-4">
                                <div>
                                    <label className="text-xs text-pink-500 font-mono block mb-1">SENDER IDENTITY</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter your name..."
                                        className="w-full bg-white/5 border border-white/20 rounded p-2 text-white text-sm focus:border-pink-500 outline-none transition-colors"
                                        onPointerDown={(e) => e.stopPropagation()}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-cyan-500 font-mono block mb-1">TRANSMISSION CONTENT</label>
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Type your message..."
                                        rows={3}
                                        className="w-full bg-white/5 border border-white/20 rounded p-2 text-white text-sm focus:border-cyan-500 outline-none transition-colors resize-none"
                                        onPointerDown={(e) => e.stopPropagation()}
                                    />
                                </div>
                            </div>

                            <button
                                onClick={handleContact}
                                className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded-lg w-full transition-all mb-4 flex items-center justify-center gap-2 text-sm"
                            >
                                <span className={buttonText === "SEND VIA GMAIL" ? "animate-pulse" : ""}>✉</span> {buttonText}
                            </button>

                            <div className="text-[10px] text-gray-500 font-mono text-center leading-tight">
                                DIR: dpthf1537@gmail.com<br />
                                TEL: +82 010-3743-2073<br />
                                SECURE_LINE: ACTIVE
                            </div>
                        </div>
                    </Html>
                </Float>
            </group>
        </group>
    );
};

export default ContactScene;
