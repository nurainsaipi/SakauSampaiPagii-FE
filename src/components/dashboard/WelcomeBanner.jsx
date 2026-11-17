import { useAuth } from '../../context/AuthContext';
import { Volume2, Play } from 'lucide-react';
import { useSpeech } from '../../hooks/useSpeech';
import Illustration from '../ui/Illustration';

export default function WelcomeBanner() {
  const { user } = useAuth();
  const { speak } = useSpeech();
  const firstName = user?.name?.split(' ')[0] || 'Teman';

  return (
    <section className="w-full">
      <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
        
        {/* KIRI: Teks & Tombol */}
        <div className="flex-1 w-full">
          <div className="flex items-center gap-3 mb-3">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-800">Halo, {firstName}!</h1>
            <button 
              onClick={() => speak(`Halo ${firstName}, mau lanjut belajar?`)} 
              className="p-2 bg-[#C1E8FF] text-[#004A63] rounded-full hover:bg-[#A0DCFD] transition-colors"
              aria-label="Dengarkan salam"
            >
              <Volume2 size={20} />
            </button>
          </div>
          <p className="text-gray-500 text-lg font-medium mb-6">Senang bertemu lagi. Mau lanjut belajar atau pilih kegiatan baru?</p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-2 bg-[#2A4A38] text-white px-6 py-3.5 rounded-2xl font-bold text-lg shadow-[0_5px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-1 active:shadow-none transition-all">
              <Play size={20} fill="currentColor" /> Lanjutkan Belajar
            </button>
            <span className="inline-block bg-[#EAF5EC] text-[#2A4A38] px-4 py-2 rounded-full text-sm font-bold border-2 border-[#2A4A38]/20">
              Cuci Tangan • Langkah 3 dari 6
            </span>
          </div>
        </div>

        {/* KANAN: Kiko & Balon Percakapan */}
        <div className="flex items-end gap-3 shrink-0 relative w-full md:w-auto justify-center md:justify-end">
          {/* Balon Kiko */}
          <div className="bg-white border-2 border-gray-200 px-5 py-3 rounded-2xl rounded-br-none shadow-sm relative z-10">
            <span className="inline-block text-xs font-bold text-[#785A00] bg-[#FFDF9D] px-2 py-1 rounded-full mb-1">Kawan Kiko</span>
            <p className="font-display font-bold text-gray-800 text-lg">Halo, teman!</p>
          </div>
          {/* Karakter Kiko */}
          <div className="w-20 h-20 md:w-24 md:h-24 bg-[#C6EBD3] rounded-full border-[3px] border-[#2A4A38] flex items-center justify-center overflow-hidden shadow-sm shrink-0">
             <Illustration name="avatar-child-boy" alt="Kawan Kiko" size={84} />
          </div>
        </div>

      </div>
    </section>
  );
}
