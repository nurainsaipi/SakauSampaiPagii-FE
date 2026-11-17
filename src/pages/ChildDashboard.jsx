import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import WorldGridCard from '../components/dashboard/WorldGridCard';
import { WORLDS } from '../data/worlds';
import { 
  ArrowRight, BookOpen, Hand, CheckCircle2, Circle, Star, 
  Trophy, Heart, MousePointerClick, Award, Handshake, Smile 
} from 'lucide-react';
import StarRow from '../components/ui/StarRow';

export default function ChildDashboard() {
  const missions = [
    { id: 1, title: 'Cuci tangan sebelum beraktivitas', status: 'done' },
    { id: 2, title: 'Kenali warna di rumah', status: 'pending' },
    { id: 3, title: 'Hitung sampai 5 buah mainan', status: 'pending' },
  ];

  return (
    <div className="space-y-10 pb-24">
      
      {/* 1. WELCOME BANNER */}
      <WelcomeBanner />

      {/* 2. PETUNJUK PERTAMA - LALU */}
      <div className="bg-[#F4F4EE] rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 border-2 border-gray-200">
        <div className="flex items-center gap-3 bg-white px-5 py-2 rounded-full border-2 border-[#2A4A38]">
          <span className="w-8 h-8 rounded-full bg-[#FFDF9D] text-[#785A00] font-bold text-lg flex items-center justify-center">1</span>
          <span className="font-bold text-gray-800">Pertama: Pilih dunia.</span>
        </div>
        <ArrowRight className="text-gray-400 hidden sm:block" size={24} />
        <div className="flex items-center gap-3 bg-white px-5 py-2 rounded-full border-2 border-[#2A4A38]">
          <span className="w-8 h-8 rounded-full bg-[#C1E8FF] text-[#004A63] font-bold text-lg flex items-center justify-center">2</span>
          <span className="font-bold text-gray-800">Lalu: Ikuti langkahnya.</span>
        </div>
      </div>

      {/* 3. PILIH DUNIA */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold text-gray-800">Pilih Dunia</h2>
            <p className="text-gray-500 font-medium mt-1">Pilih dunia untuk belajar dengan tenang.</p>
          </div>
          <div className="bg-[#FFDF9D] text-[#785A00] px-4 py-2 rounded-full font-bold text-sm border-2 border-[#785A00] flex items-center gap-2 self-start sm:self-auto shadow-sm">
            <MousePointerClick size={16} /> Tekan tombol hijau
          </div>
        </div>
        
        {/* Grid Responsif */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORLDS.map(world => (
            <WorldGridCard key={world.id} world={world} />
          ))}
        </div>
      </section>

      {/* 4. BELAJAR LAINNYA */}
      <section>
        <h2 className="font-display text-2xl font-bold text-gray-800 mb-1">Belajar Lainnya</h2>
        <p className="text-gray-500 text-sm font-medium mb-4">Keterampilan hidup dan latihan menyenangkan.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 flex items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#C1E8FF] rounded-full flex items-center justify-center text-[#004A63]">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">Akademik Dasar</h3>
                <p className="text-sm text-gray-500">Huruf, angka, warna, bentuk, dan hewan.</p>
              </div>
            </div>
            <button className="flex items-center gap-1 bg-[#2A4A38] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-[0_4px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-1 active:shadow-none transition-all shrink-0">
              Buka <ArrowRight size={16} />
            </button>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 flex items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FFDF9D] rounded-full flex items-center justify-center text-[#785A00]">
                <Hand size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">Life Skills</h3>
                <p className="text-sm text-gray-500">Mandiri, jaga diri, memilah sampah, dan rapi.</p>
              </div>
            </div>
            <button className="flex items-center gap-1 bg-[#2A4A38] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-[0_4px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-1 active:shadow-none transition-all shrink-0">
              Buka <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. MISI & BINTANGKU */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <section className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-[#2A4A38]" size={24} />
              <h2 className="font-display text-2xl font-bold text-gray-800">Misi Hari Ini</h2>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-4">Lakukan perlahan, tidak ada batas waktu.</p>
          
          <div className="space-y-3 mb-6">
            {missions.map(m => (
              <div key={m.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border-2 border-gray-100">
                <div className="flex items-center gap-3">
                  {m.status === 'done' ? <CheckCircle2 size={20} className="text-[#2A4A38]" /> : <Circle size={20} className="text-gray-300" />}
                  <span className={`font-bold ${m.status === 'done' ? 'text-gray-800' : 'text-gray-500'}`}>{m.title}</span>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-lg ${m.status === 'done' ? 'bg-[#EAF5EC] text-[#2A4A38]' : 'bg-gray-200 text-gray-500'}`}>
                  {m.status === 'done' ? 'Selesai' : 'Belum'}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 font-medium bg-blue-50 p-3 rounded-xl">
            <Heart size={18} className="text-[#FDCB57] fill-[#FDCB57] shrink-0"/> Langkah demi langkah menuju kemandirian.
          </div>
        </section>

        <section className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Star className="text-[#FFDF9D]" size={24} fill="currentColor" />
              <h2 className="font-display text-2xl font-bold text-gray-800">Bintangku</h2>
            </div>
          </div>
          
          <div className="bg-[#FFF9EB] border-2 border-[#FDE6B1] rounded-xl p-6 text-center mb-6">
            <StarRow count={5} max={5} size={36} className="mb-3" />
            <h3 className="font-display font-bold text-gray-800 text-xl">Kamu sudah punya 5 bintang!</h3>
            <p className="text-sm text-gray-600 mt-2">Setiap langkah kecil adalah kemajuan besar.</p>
          </div>

          <div className="space-y-3 mb-6">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Lencana Yang Diperoleh</p>
            <div className="flex flex-wrap gap-2 text-sm font-bold text-gray-600">
              <span className="bg-gray-100 px-3 py-2 rounded-xl border border-gray-200 flex items-center gap-2">
                <Award size={18} className="text-[#785A00]" /> Pujian Belajar
              </span>
              <span className="bg-gray-100 px-3 py-2 rounded-xl border border-gray-200 flex items-center gap-2">
                <Handshake size={18} className="text-[#004A63]" /> Teman Baru
              </span>
              <span className="bg-gray-100 px-3 py-2 rounded-xl border border-gray-200 flex items-center gap-2">
                <Smile size={18} className="text-[#2A4A38]" /> Lagi Ceria
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-400 font-bold bg-gray-50 p-3 rounded-xl">
            <Trophy size={16} /> Bebas dari peringkat & perbandingan
          </div>
        </section>

      </div>

    </div>
  );
}
