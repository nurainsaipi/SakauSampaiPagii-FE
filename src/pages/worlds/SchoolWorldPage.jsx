import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, Volume2, Coffee, User, ArrowRight, BookOpen
} from 'lucide-react';
import { useSpeech } from '../../hooks/useSpeech';
import BreakModal from '../../components/accessibility/BreakModal';
import SchoolCard from '../../components/dashboard/SchoolCard';
import Illustration from '../../components/ui/Illustration';

export default function SchoolWorldPage() {
  const navigate = useNavigate();
  const { speak } = useSpeech();
  const [isBreak, setIsBreak] = useState(false);

  const handleListenIntro = () => {
    speak('Selamat datang di Dunia Sekolah! Ayo kenali benda-benda di kelas seperti tas, buku, pensil, dan meja.');
  };

  const locations = [
    { id: 'classroom', title: 'Ruang Kelas', desc: 'Meja, kursi, papan tulis', image: 'world-school', isActive: true, itemsCount: 6 },
    { id: 'bag', title: 'Tas Sekolah', desc: 'Buku, pensil, penghapus', image: 'item-bag', isActive: false },
    { id: 'library', title: 'Perpustakaan', desc: 'Rak buku, buku cerita', image: 'item-book', isActive: false },
    { id: 'field', title: 'Lapangan', desc: 'Bola, bendera, lonceng', image: 'world-nature', isActive: false },
  ];

  const previewItems = [
    { name: 'Tas', icon: 'item-bag' },
    { name: 'Buku', icon: 'item-book' },
    { name: 'Pensil', icon: 'item-pencil' },
    { name: 'Penghapus', icon: 'item-eraser' },
    { name: 'Meja', icon: 'item-desk' },
    { name: 'Kursi', icon: 'item-chair' },
  ];

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
            <div className="w-10 h-10 bg-[#EAF3F8] rounded-lg border-2 border-[#004A63] flex items-center justify-center text-[#004A63]">
              <Illustration name="world-school" alt="Dunia Sekolah" size={28} />
            </div>
            <h1 className="font-display text-2xl font-bold text-[#1A1C19]">Dunia Sekolah</h1>
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
            <Illustration name="avatar-child-girl" alt="Kawan Kiko" size={80} />
          </div>
          <div className="flex-1 relative bg-[#FAFAF4] border-2 border-gray-200 rounded-2xl p-6 text-center sm:text-left">
            <div className="hidden sm:block absolute -left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#FAFAF4] border-l-2 border-b-2 border-gray-200 transform rotate-45"></div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xl font-bold text-gray-800 mb-1">Halo! Ayo kenali benda-benda di sekolah.</p>
                <p className="text-sm font-medium text-gray-500">Sentuh tombol berwarna hijau di bawah untuk mulai belajar bersama.</p>
              </div>
              <button 
                onClick={handleListenIntro} 
                className="flex items-center gap-2 bg-[#C1E8FF] text-[#004A63] px-4 py-2 rounded-xl text-sm font-bold border-2 border-[#004A63] shadow-[0_3px_0_0_#004A63] hover:bg-[#A0DCFD] active:translate-y-0.5 active:shadow-none transition-all shrink-0"
              >
                <Volume2 size={16} /> Dengarkan Suara Kiko
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 border-2 border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 bg-[#FAFAF4] px-5 py-2 rounded-full border border-gray-200">
            <span className="bg-[#FFDF9D] text-[#785A00] w-7 h-7 rounded-full flex items-center justify-center font-bold border border-[#785A00]">1</span>
            <span className="text-gray-700 font-bold text-sm">Pertama: Pilih satu tempat.</span>
          </div>
          <ArrowRight size={20} className="text-gray-400 hidden sm:block" />
          <div className="flex items-center gap-3 bg-[#FAFAF4] px-5 py-2 rounded-full border border-gray-200">
            <span className="bg-[#C1E8FF] text-[#004A63] w-7 h-7 rounded-full flex items-center justify-center font-bold border border-[#004A63]">2</span>
            <span className="text-gray-700 font-bold text-sm">Lalu: Belajar bersama Kiko.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {locations.map((loc) => (
            <SchoolCard key={loc.id} {...loc} />
          ))}
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Pratinjau Materi</p>
              <h2 className="font-display text-2xl font-bold text-gray-800">Benda yang Akan Kamu Kenal</h2>
            </div>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-bold border border-gray-200 flex items-center gap-1.5">
              <BookOpen size={14} /> 6 Benda Dasar
            </span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {previewItems.map((item, index) => (
              <div key={index} className="bg-[#FAFAF4] border-2 border-gray-100 rounded-2xl p-3 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors cursor-default">
                <div className="w-12 h-12 flex items-center justify-center mb-1">
                  <Illustration name={item.icon} alt={item.name} size={36} />
                </div>
                <p className="text-xs font-bold text-gray-600">{index + 1}. {item.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
