import { Link } from 'react-router-dom';
import { Lock, ArrowRight, Volume2 } from 'lucide-react';
import { useSpeech } from '../../hooks/useSpeech';
import Illustration from '../ui/Illustration';

export default function WorldGridCard({ world }) {
  const { speak } = useSpeech();
  const isActive = world.status === 'active';
  const illustrationName = world.illustration || `world-${world.id}`;

  return (
    <div className={`relative flex flex-col bg-white rounded-2xl border-2 transition-all p-4 ${
      isActive ? 'border-[#2A4A38] shadow-[0_6px_0_0_#2A4A38]' : 'border-gray-200 opacity-60'
    }`}>
      
      {/* Bagian Atas: Gambar/Ilustrasi */}
      <div className={`relative w-full h-32 rounded-xl flex items-center justify-center mb-4 ${world.color}`}>
        <Illustration name={illustrationName} alt={world.name} size={72} />
        <button 
          onClick={() => speak(world.tagline)}
          className="absolute top-2 right-2 p-1.5 bg-white rounded-full border border-gray-200 hover:bg-gray-50"
          aria-label={`Dengarkan penjelasan ${world.name}`}
        >
          <Volume2 size={16} className="text-gray-600" />
        </button>
      </div>

      {/* Teks */}
      <div className="flex-1">
        <h3 className="font-display text-xl font-bold text-gray-800 mb-1">{world.name}</h3>
        <p className="text-sm text-gray-600 font-medium leading-relaxed mb-4">{world.tagline}</p>
      </div>

      {/* Tombol */}
      {isActive ? (
        <Link 
          to={`/worlds/${world.id}`}
          className="w-full flex items-center justify-between bg-[#2A4A38] text-white px-4 py-3 rounded-xl font-bold shadow-[0_4px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-1 active:shadow-none transition-all"
        >
          <span>Masuk Dunia</span>
          <ArrowRight size={18} />
        </Link>
      ) : (
        <div className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-500 py-3 rounded-xl font-bold border-2 border-dashed border-gray-300">
          <Lock size={16} /> Segera Hadir
        </div>
      )}

      {/* Badge Progress Khusus Dunia Aktif */}
      {isActive && world.progress && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C1E8FF] text-[#004A63] px-3 py-1 rounded-full text-xs font-bold border border-[#004A63] whitespace-nowrap shadow-sm">
          {world.progress}
        </div>
      )}
    </div>
  );
}
