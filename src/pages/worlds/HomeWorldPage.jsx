import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, Volume2, Coffee, User, ArrowRight, 
  Sparkles, CheckCircle2, Lock, Play, Star
} from 'lucide-react';
import { useSpeech } from '../../hooks/useSpeech';
import BreakModal from '../../components/accessibility/BreakModal';
import Illustration from '../../components/ui/Illustration';

export default function HomeWorldPage() {
  const navigate = useNavigate();
  const { speak } = useSpeech();
  const [isBreak, setIsBreak] = useState(false);

  const missions = [
    {
      id: 'handwashing',
      title: 'Cuci Tangan',
      tagline: 'Basahi, beri sabun, dan keringkan.',
      status: 'active',
      steps: '3 Langkah Utama',
      bgColor: 'bg-[#C1E8FF]',
      accentColor: 'border-[#004A63] text-[#004A63]',
      route: '/mission/handwashing'
    },
    {
      id: 'brushing-teeth',
      title: 'Sikat Gigi',
      tagline: 'Gigi bersih dan nafas segar.',
      status: 'coming-soon',
      steps: '5 Langkah',
      bgColor: 'bg-[#FAFAF4]',
      accentColor: 'border-gray-300 text-gray-500'
    },
    {
      id: 'dressing-up',
      title: 'Pakai Baju',
      tagline: 'Pilih baju dan pakai sendiri perlahan.',
      status: 'coming-soon',
      steps: '4 Langkah',
      bgColor: 'bg-[#FAFAF4]',
      accentColor: 'border-gray-300 text-gray-500'
    },
    {
      id: 'making-bed',
      title: 'Rapikan Tempat Tidur',
      tagline: 'Tarik selimut dan rapikan bantal.',
      status: 'coming-soon',
      steps: '3 Langkah',
      bgColor: 'bg-[#FAFAF4]',
      accentColor: 'border-gray-300 text-gray-500'
    }
  ];

  const handleListenIntro = () => {
    speak('Selamat datang di Dunia Rumah! Di sini kamu bisa belajar cara mencuci tangan yang bersih dan rapi.');
  };

  return (
    <div className="min-h-screen bg-[#FAFAF4] pb-20 font-sans">
      {isBreak && <BreakModal onClose={() => setIsBreak(false)} />}

      {/* HEADER */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 bg-white border-2 border-[#2A4A38] text-[#2A4A38] px-5 py-2.5 rounded-xl font-bold shadow-[0_4px_0_0_#2A4A38] hover:bg-gray-50 active:translate-y-1 active:shadow-none transition-all"
          >
            <ChevronLeft size={20} /> Kembali
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#EAF5EC] rounded-lg border-2 border-[#2A4A38] flex items-center justify-center text-[#2A4A38]">
              <Illustration name="world-home" alt="Dunia Rumah" size={28} />
            </div>
            <h1 className="font-display text-2xl font-bold text-[#1A1C19]">Dunia Rumah</h1>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsBreak(true)}
              className="flex items-center gap-2 bg-[#FFDF9D] text-[#785A00] border-2 border-[#785A00] px-4 py-2.5 rounded-xl font-bold shadow-[0_3px_0_0_#785A00] hover:bg-[#F0C04D] active:translate-y-0.5 active:shadow-none transition-all"
            >
              <Coffee size={18} /> <span className="hidden sm:inline">Istirahat</span>
            </button>
            <button className="w-10 h-10 bg-gray-100 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
              <User size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* KONTEN */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-sm">
          <div className="w-24 h-24 bg-[#C6EBD3] rounded-full border-4 border-[#2A4A38] flex items-center justify-center shrink-0 overflow-hidden">
            <Illustration name="avatar-child-boy" alt="Kawan Kiko" size={80} />
          </div>
          <div className="flex-1 relative bg-[#FAFAF4] border-2 border-gray-200 rounded-2xl p-6 text-center sm:text-left">
            <div className="hidden sm:block absolute -left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#FAFAF4] border-l-2 border-b-2 border-gray-200 transform rotate-45"></div>
            <span className="inline-block bg-[#FFDF9D] text-[#785A00] border border-[#785A00] text-xs font-bold px-3 py-1 rounded-full mb-3">Kawan Kiko</span>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xl font-bold text-gray-800">Halo! Kamu mau belajar apa hari ini?</p>
              <button onClick={handleListenIntro} className="flex items-center gap-2 bg-[#C1E8FF] text-[#004A63] px-4 py-2 rounded-xl text-sm font-bold border-2 border-[#004A63] shadow-[0_3px_0_0_#004A63] hover:bg-[#A0DCFD] active:translate-y-0.5 active:shadow-none transition-all shrink-0">
                <Volume2 size={16} /> Dengarkan
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 border-2 border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 bg-[#FAFAF4] px-5 py-2 rounded-full border border-gray-200">
            <span className="bg-[#FFDF9D] text-[#785A00] w-7 h-7 rounded-full flex items-center justify-center font-bold border border-[#785A00]">1</span>
            <span className="text-gray-700 font-bold text-sm">Pertama: Pilih kegiatan.</span>
          </div>
          <ArrowRight size={20} className="text-gray-400 hidden sm:block" />
          <div className="flex items-center gap-3 bg-[#FAFAF4] px-5 py-2 rounded-full border border-gray-200">
            <span className="bg-[#C1E8FF] text-[#004A63] w-7 h-7 rounded-full flex items-center justify-center font-bold border border-[#004A63]">2</span>
            <span className="text-gray-700 font-bold text-sm">Lalu: Belajar bersama Kiko.</span>
          </div>
        </div>

        {/* LIST KEGIATAN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {missions.map(m => {
            const isActive = m.status === 'active';

            return (
              <div 
                key={m.id}
                className={`relative flex flex-col p-6 rounded-3xl border-2 transition-all ${
                  isActive ? 'bg-white border-[#2A4A38] shadow-[0_6px_0_0_#2A4A38]' : 'bg-[#F4F4F4] border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                    isActive ? 'bg-[#EAF5EC] text-[#2A4A38] border-[#2A4A38]' : 'bg-gray-200 text-gray-500 border-gray-300'
                  }`}>
                    {m.steps}
                  </span>
                  {isActive ? (
                    <span className="flex items-center gap-1 text-xs font-bold text-[#2A4A38] bg-[#EAF5EC] px-3 py-1 rounded-full">
                      <Sparkles size={14} /> Terbuka
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                      <Lock size={12} /> Segera Hadir
                    </span>
                  )}
                </div>

                <h3 className={`font-display text-2xl font-bold mb-2 ${isActive ? 'text-gray-800' : 'text-gray-400'}`}>
                  {m.title}
                </h3>
                <p className={`text-sm font-medium mb-6 flex-1 ${isActive ? 'text-gray-600' : 'text-gray-400'}`}>
                  {m.tagline}
                </p>

                {isActive ? (
                  <button 
                    onClick={() => navigate(m.route)}
                    className="w-full flex items-center justify-center gap-2 bg-[#2A4A38] text-white py-3.5 rounded-xl font-bold shadow-[0_4px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-1 active:shadow-none transition-all"
                  >
                    Mulai Belajar <ArrowRight size={18} />
                  </button>
                ) : (
                  <button disabled className="w-full flex items-center justify-center gap-2 bg-[#EAEAEA] text-gray-400 py-3.5 rounded-xl font-bold cursor-not-allowed">
                    <Lock size={18} /> Segera Hadir
                  </button>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
