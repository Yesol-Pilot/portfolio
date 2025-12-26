import { useState, useEffect, useCallback } from 'react';

export const useSpeechRecognition = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [error, setError] = useState(null);

    const startListening = useCallback(() => {
        if (!('webkitSpeechRecognition' in window)) {
            setError('Speech recognition is not supported in this browser.');
            return;
        }

        const recognition = new window.webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'ko-KR'; // Korean by default

        recognition.onstart = () => {
            setIsListening(true);
            setError(null);
        };

        recognition.onresult = (event) => {
            const result = event.results[0][0].transcript;
            setTranscript(result);
        };

        recognition.onerror = (event) => {
            setError(event.error);
            setIsListening(false);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognition.start();
    }, []);

    return { isListening, transcript, startListening, error, setTranscript }; // export setTranscript to clear it manually
};
