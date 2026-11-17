import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Illustration from '../ui/Illustration';

export default function BreakModal({ onClose }) {
  const [count, setCount] = useState(4);

  // Animasi napas sederhana (visual)
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev === 4 ? 4 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-livora-cream/95 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-display font-bold text-livora-green-dark mb-4">Waktu Istirahat</h2>
        <p className="text-livora-ink/80 text-lg mb-12">
          Tidak apa-apa untuk berhenti sejenak. Tarik napas pelan-pelan...
        </p>

        {/* Lingkaran Napas */}
        <div className="relative w-48 h-48 mx-auto mb-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-livora-green/20 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
          <div className="absolute inset-4 bg-livora-green/40 rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="relative z-10 bg-white w-32 h-32 rounded-full shadow-sm flex items-center justify-center">
            <Illustration name="illustration-leaf" alt="Daun tenang" size={64} />
          </div>
        </div>

        <button 
          onClick={onClose}
          className="inline-flex items-center gap-2 bg-white border-2 border-livora-sand text-livora-ink px-8 py-4 rounded-livora font-bold shadow-sm smooth-hover hover:bg-livora-sand/50"
        >
          <X size={20} />
          Saya Sudah Siap Lanjut
        </button>
      </div>
    </div>
  );
}
