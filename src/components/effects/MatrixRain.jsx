import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const Stream = ({ startPos, speed, length, size, initialChars }) => {
    const ref = useRef();

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.position.y -= speed * delta;
            if (ref.current.position.y < -15) {
                ref.current.position.y = 15;
            }
        }
    });

    return (
        <group ref={ref} position={startPos}>
            {initialChars.map((s, i) => (
                <Text
                    key={i}
                    position={[0, s.offset, 0]}
                    fontSize={size}
                    color="#00ff41"
                    fillOpacity={s.opacity}
                    anchorX="center"
                    anchorY="middle"
                >
                    {s.char}
                </Text>
            ))}
        </group>
    );
};

const MatrixRain = ({ count = 30 }) => {
    // useState lazy init을 사용하여 Math.random()을 초기화 시에만 호출
    const [streams] = useState(() => {
        const chars = "XYZ01010101";
        return Array.from({ length: count }, () => {
            const streamLength = 5 + Math.floor(Math.random() * 10);
            const streamSize = 0.5 + Math.random() * 0.3;
            return {
                x: (Math.random() - 0.5) * 40,
                z: (Math.random() - 0.5) * 20 - 5,
                speed: 5 + Math.random() * 5,
                length: streamLength,
                size: streamSize,
                initialChars: Array.from({ length: streamLength }, (_, i) => ({
                    char: chars[Math.floor(Math.random() * chars.length)],
                    offset: i * streamSize * 1.2,
                    opacity: 1 - i / streamLength
                }))
            };
        });
    });

    return (
        <group>
            {streams.map((props, i) => (
                <Stream
                    key={i}
                    startPos={[props.x, 15, props.z]}
                    speed={props.speed}
                    length={props.length}
                    size={props.size}
                    initialChars={props.initialChars}
                />
            ))}
        </group>
    );
};

export default MatrixRain;
