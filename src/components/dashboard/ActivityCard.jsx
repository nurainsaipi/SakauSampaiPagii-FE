import { Link } from 'react-router-dom';
import { useSpeech } from '../../hooks/useSpeech';
import { ArrowRight, RotateCcw, List, Star, Volume2 } from 'lucide-react';

export default function ActivityCard({ mission }) {
  const { speak } = useSpeech();
  const isCompleted = mission.status === 'completed';

  const renderIllustration = () => {
    switch (mission.id) {
      case 'handwashing':
        return (
          <svg className="w-48 h-44 drop-shadow-sm" fill="none" viewBox="0 0 180 160">
            <path d="M90 12V34M80 34H100" stroke="#727973" strokeLinecap="round" strokeWidth="8"></path>
            <path d="M90 34C90 42 82 46 72 46H60V54H74" stroke="#727973" strokeLinecap="round" strokeWidth="7"></path>
            <path d="M72 66C72 72 68 76 68 80C68 83 76 83 76 80C76 76 72 72 72 66Z" fill="#1E627E"></path>
            <path d="M84 76C84 80 81 83 81 86C81 88 87 88 87 86C87 83 84 80 84 76Z" fill="#92CEEF"></path>
            <path d="M30 125C44 116 62 108 82 114L98 126C104 130 102 138 94 139L64 142L34 139C28 138 26 130 30 125Z" fill="#FAD9BE" stroke="#41624F" strokeWidth="3"></path>
            <path d="M150 125C136 116 118 108 98 114L82 126C76 130 78 138 86 139L116 142L146 139C152 138 154 130 150 125Z" fill="#FAD9BE" stroke="#41624F" strokeWidth="3"></path>
            <circle cx="82" cy="100" fill="#FAF4EE" r="10" stroke="#1E627E" strokeWidth="3"></circle>
            <circle cx="102" cy="94" fill="#FAF4EE" r="8" stroke="#1E627E" strokeWidth="3"></circle>
            <circle cx="94" cy="112" fill="#FAF4EE" r="6" stroke="#1E627E" strokeWidth="2"></circle>
            <circle cx="70" cy="112" fill="#FAF4EE" r="5" stroke="#1E627E" strokeWidth="2"></circle>
          </svg>
        );
      case 'brushing-teeth':
        return (
          <svg className="w-48 h-44 drop-shadow-sm" fill="none" viewBox="0 0 180 160">
            <path d="M50 82C44 72 48 50 68 50C78 50 84 56 84 56C84 56 90 50 100 50C120 50 124 72 118 82C112 92 110 120 98 120C90 120 88 106 84 106C80 106 78 120 70 120C58 120 56 92 50 82Z" fill="#FFFFFF" stroke="#1E627E" strokeWidth="4"></path>
            <circle cx="74" cy="72" fill="#1A1C19" r="3"></circle>
            <circle cx="94" cy="72" fill="#1A1C19" r="3"></circle>
            <path d="M78 82C80 86 88 86 90 82" stroke="#1A1C19" strokeLinecap="round" strokeWidth="3"></path>
            <rect fill="#FDCD57" height="85" rx="8" stroke="#785A00" strokeWidth="3" transform="rotate(25 110 30)" width="16" x="110" y="30"></rect>
            <path d="M125 24L142 32L134 46L117 38Z" fill="#1E627E"></path>
            <path d="M124 20C132 16 142 22 140 28" stroke="#FAF4EE" strokeLinecap="round" strokeWidth="5"></path>
          </svg>
        );
      case 'dressing-up':
        return (
          <svg className="w-48 h-44 drop-shadow-sm" fill="none" viewBox="0 0 180 160">
            <path d="M90 28C84 28 82 22 86 16C90 10 98 12 96 20C96 26 90 28 90 28V36M40 54L90 36L140 54" stroke="#785A00" strokeLinecap="round" strokeWidth="4"></path>
            <path d="M50 48L24 66L38 88L54 78V126H126V78L142 88L156 66L130 48C118 56 102 56 90 56C78 56 62 56 50 48Z" fill="#1E627E" stroke="#004A63" strokeLinejoin="round" strokeWidth="4"></path>
            <rect fill="#92CEEF" height="18" rx="3" width="16" x="100" y="74"></rect>
            <path d="M60 126H120" stroke="#FDCD57" strokeWidth="6"></path>
          </svg>
        );
      case 'making-bed':
        return (
          <svg className="w-48 h-44 drop-shadow-sm" fill="none" viewBox="0 0 180 160">
            <rect fill="#F0C04D" height="40" rx="8" stroke="#785A00" strokeWidth="4" width="132" x="24" y="44"></rect>
            <path d="M48 44V84M90 44V84M132 44V84" stroke="#785A00" strokeWidth="3"></path>
            <rect fill="#FAF4EE" height="46" rx="6" stroke="#2A4A38" strokeWidth="4" width="140" x="20" y="80"></rect>
            <rect fill="#FFFFFF" height="24" rx="8" stroke="#41624F" strokeWidth="3" width="46" x="36" y="66"></rect>
            <rect fill="#FFFFFF" height="24" rx="8" stroke="#41624F" strokeWidth="3" width="46" x="96" y="66"></rect>
            <path d="M22 92C22 88 26 86 32 86H148C154 86 158 88 158 92V124H22V92Z" fill="#41624F"></path>
            <path d="M22 88H158V96H22V88Z" fill="#C6EBD3"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  const getBgColor = () => {
    switch (mission.id) {
      case 'handwashing': return 'bg-[#EAF5EC] border-[#2A4A38]/20';
      case 'brushing-teeth': return 'bg-[#C1E8FF] border-[#004A63]/20';
      case 'dressing-up': return 'bg-[#FFDF9D] border-[#785A00]/20';
      case 'making-bed': return 'bg-[#FFF9EB] border-[#F0C04D]/20';
      default: return 'bg-gray-100';
    }
  };

  return (
    <article className="bg-white border-2 border-gray-200 rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
      <div>
        <div className={`relative w-full min-h-[200px] rounded-2xl p-4 flex items-center justify-center border-2 mb-6 overflow-hidden ${getBgColor()}`}>
          {renderIllustration()}
          
          <button 
            onClick={() => speak(`Kegiatan ${mission.title}, ${mission.steps} langkah`)}
            className="absolute top-4 right-4 min-h-[44px] px-3 py-1 bg-white text-[#004A63] font-bold text-sm rounded-full border-2 border-[#004A63] shadow-[0_3px_0_0_#004A63] flex items-center gap-1 hover:bg-gray-50 transition-colors active:translate-y-0.5 active:shadow-none"
          >
            <Volume2 size={18} />
            <span className="hidden sm:inline">Dengarkan</span>
          </button>
        </div>

        <h2 className="font-display text-3xl font-bold text-gray-800 mb-3">{mission.title}</h2>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 font-bold text-gray-600 border border-gray-200 text-sm">
            <List size={16} /> {mission.steps} langkah
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-50 text-gray-600 font-bold border border-gray-200 text-sm">
            {[...Array(3)].map((_, i) => (
              <Star key={i} className={i < mission.stars ? "fill-[#F0C04D] text-[#F0C04D]" : "text-gray-300"} size={16} />
            ))}
            <span className="ml-1">{mission.stars}/3 Bintang</span>
          </span>
        </div>
      </div>

      {/* TOMBOL MULAI BELAJAR: Menggunakan Link agar pindah halaman */}
      {isCompleted ? (
        <Link 
          to={`/mission/${mission.id}`}
          className="w-full min-h-[60px] bg-[#2a4a38] text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 border-2 border-[#1A1C19] shadow-[0_5px_0_0_#1A1C19] hover:bg-[#1E3629] transition-colors active:translate-y-1 active:shadow-none"
        >
          <RotateCcw size={22} />
          <span>Ulangi Lagi</span>
        </Link>
      ) : (
        <Link 
          to={`/mission/${mission.id}`}
          className="w-full min-h-[60px] bg-[#2a4a38] text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 border-2 border-[#1A1C19] shadow-[0_5px_0_0_#1A1C19] hover:bg-[#1E3629] transition-colors active:translate-y-1 active:shadow-none"
        >
          <span>Mulai Belajar</span>
          <ArrowRight size={22} />
        </Link>
      )}
    </article>
  );
}