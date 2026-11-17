import { useCallback, useEffect, useRef, useState } from 'react';

export function useSpeech() {
  const [isSupported, setSupported] = useState(false);
  const [isSpeaking, setSpeaking] = useState(false);

  useEffect(() => {
    // Cek apakah browser mendukung Text-to-Speech
    setSupported(typeof window !== 'undefined' && 'speechSynthesis' in window);
    
    return () => {
      // Hentikan suara saat komponen dibongkar
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speak = useCallback((text, options = {}) => {
    if (!('speechSynthesis' in window) || !text) return false;
    
    // Hentikan suara sebelumnya jika ada
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID'; // Set bahasa Indonesia
    utterance.rate = options.rate || 1;
    utterance.volume = options.volume !== undefined ? options.volume : 1;
    
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    window.speechSynthesis.speak(utterance);
    return true;
  }, []);

  const stop = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
    }
  }, []);

  return { isSupported, isSpeaking, speak, stop };
}