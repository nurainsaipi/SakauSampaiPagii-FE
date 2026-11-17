import { Lock, ArrowRight, BookOpen } from 'lucide-react';
import Illustration from '../ui/Illustration';

export default function SchoolCard({ title, desc, image, isActive, itemsCount }) {
  return (
    <div className={`relative flex flex-col p-5 rounded-3xl border-2 transition-all ${
      isActive ? 'bg-white border-[#2A4A38] shadow-[0_6px_0_0_#2A4A38]' : 'bg-[#F4F4F4] border-gray-200'
    }`}>
      <div className="relative w-full h-36 bg-[#F9F9F9] rounded-2xl flex items-center justify-center mb-4 overflow-hidden border border-gray-100">
        {typeof image === 'string' && (image.startsWith('item-') || image.startsWith('world-')) ? (
          <Illustration name={image} alt={title} size={64} />
        ) : typeof image === 'string' ? (
          <span className="text-xl font-bold text-[#2A4A38]">{title}</span>
        ) : (
          image
        )}
        {isActive ? (
          <span className="absolute top-3 right-3 bg-[#EAF5EC] text-[#2A4A38] text-xs font-bold px-3 py-1 rounded-full border border-[#2A4A38]">
            Buka Sekarang
          </span>
        ) : (
          <span className="absolute top-3 right-3 bg-gray-200 text-gray-500 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <Lock size={12} /> Terkunci
          </span>
        )}
      </div>

      <div className="flex-1 mb-4">
        <h3 className={`font-display text-2xl font-bold ${isActive ? 'text-gray-800' : 'text-gray-500'}`}>{title}</h3>
        <p className="text-sm font-medium text-gray-500 mt-1">{desc}</p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {isActive && (
            <>
              <span className="bg-[#F4F4EE] text-[#2A4A38] px-3 py-1 rounded-full text-xs font-bold border border-gray-200 flex items-center gap-1.5">
                <BookOpen size={14} /> {itemsCount} Benda
              </span>
              <span className="bg-[#EAF5EC] text-[#2A4A38] px-3 py-1 rounded-full text-xs font-bold border border-[#2A4A38]/20 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#2A4A38]" /> Bisa Belajar
              </span>
            </>
          )}
          {!isActive && (
            <span className="bg-transparent text-gray-400 px-3 py-1 rounded-full text-xs font-bold border border-gray-300 flex items-center gap-1">
              Segera Datang
            </span>
          )}
        </div>

        {isActive ? (
          <button className="w-full flex items-center justify-center gap-2 bg-[#2A4A38] text-white py-3.5 rounded-xl font-bold shadow-[0_4px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-1 active:shadow-none transition-all">
            Mulai Belajar <ArrowRight size={18} />
          </button>
        ) : (
          <button disabled className="w-full flex items-center justify-center gap-2 bg-[#EAEAEA] text-gray-400 py-3.5 rounded-xl font-bold cursor-not-allowed">
            <Lock size={18} /> Segera Hadir
          </button>
        )}
      </div>
    </div>
  );
}
