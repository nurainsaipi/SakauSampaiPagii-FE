import { Link } from 'react-router-dom';
import { ArrowRight, Lock } from 'lucide-react';
import Illustration from '../ui/Illustration';

export default function WorldCard({ world, isActive }) {
  const isPlayable = world.status === 'active';
  const illustrationName = world.illustration || `world-${world.id}`;

  return (
    <div
      className={`w-full flex flex-col bg-white rounded-3xl p-8 border-4 transition-all duration-500 ease-out ${
        isActive
          ? 'border-livora-green shadow-xl opacity-100 scale-100'
          : 'border-livora-sand opacity-30 blur-[2px] scale-95'
      } relative overflow-hidden`}
    >
      {/* Latar Belakang Atas Berwarna */}
      <div className={`absolute top-0 left-0 w-full h-48 bg-gradient-to-br ${world.color} rounded-t-2xl`}></div>

      {/* Ilustrasi Utama */}
      <div className="relative z-10 flex justify-center mt-6 mb-8">
        <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-white">
          <Illustration name={illustrationName} alt={world.name} size={84} />
        </div>
      </div>

      {/* Teks Besar & Jelas */}
      <div className="relative z-10 text-center flex-1 mb-8">
        <h3 className="text-3xl font-display font-bold text-livora-ink mb-2">{world.name}</h3>
        <p className="text-lg font-bold text-livora-green-dark mb-4">{world.tagline}</p>
        <p className="text-md text-livora-ink/80 leading-relaxed px-4">
          {world.description}
        </p>
      </div>

      {/* Tombol Aksi */}
      <div className="relative z-10 mt-auto">
        {isPlayable ? (
          <Link
            to={`/worlds/${world.id}`}
            className="w-full flex items-center justify-center gap-3 bg-livora-green-dark text-white px-6 py-4 rounded-2xl font-bold text-xl shadow-[0_6px_0_#2C4538] hover:shadow-[0_2px_0_#2C4538] hover:translate-y-1 transition-all active:translate-y-1.5"
          >
            <span>Masuk Dunia</span>
            <ArrowRight size={24} />
          </Link>
        ) : (
          <div className="w-full flex items-center justify-center gap-3 bg-livora-sand py-4 rounded-2xl border-2 border-dashed border-livora-tan text-livora-ink/50 font-bold text-xl">
            <Lock size={24} />
            <span>Segera Hadir</span>
          </div>
        )}
      </div>
    </div>
  );
}
