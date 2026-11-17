import { Volume2 } from 'lucide-react';

export default function SpeakButton({ text }) {
  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'id-ID';
      window.speechSynthesis.speak(u);
    }
  };

  return (
    <button onClick={handleSpeak} aria-label="Bacakan teks" className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-livora-sand text-livora-green-dark hover:bg-livora-tan">
      <Volume2 size={18} />
    </button>
  );
}