import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, Volume2, Coffee, User, ArrowLeft, ArrowRight, 
  RotateCcw, Check, Calendar, Utensils, BookOpen, Sun, Smile 
} from 'lucide-react';
import { useSpeech } from '../../hooks/useSpeech';
import Illustration from '../../components/ui/Illustration';

export default function VisualSchedulePage() {
  const navigate = useNavigate();
  const { speak } = useSpeech();

  // State untuk mengatur tampilan: 'today' atau 'completed'
  const [activeTab, setActiveTab] = useState('today'); 
  const [currentIndex, setCurrentIndex] = useState(1);

  const activities = [
    { id: 'bangun', name: 'Bangun Pagi', icon: <Sun size={32} />, desc: 'Bangun tidur dan rapikan tempat tidur.', status: 'done' },
    { id: 'sikat', name: 'Sikat Gigi', icon: <Smile size={32} />, desc: 'Bersihkan gigi atas dan bawah perlahan dengan busa lembut.', status: 'current' },
    { id: 'sarapan', name: 'Sarapan', icon: <Utensils size={32} />, desc: 'Makan pagi yang sehat dan bergizi.', status: 'next' },
    { id: 'belajar', name: 'Belajar LIVORA', icon: <BookOpen size={32} />, desc: 'Waktunya belajar sambil bermain.', status: 'later' },
    { id: 'istirahat', name: 'Istirahat', icon: <Coffee size={32} />, desc: 'Waktu santai sejenak.', status: 'later' },
  ];

  const currentActivity = activities[currentIndex];
  const nextActivity = activities[currentIndex + 1];

  const handleNext = () => {
    if (currentIndex < activities.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setActiveTab('completed');
      speak('Jadwal hari ini selesai. Semua kegiatan sudah kamu lakukan dengan tenang.');
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-[#FAFAF4] font-sans pb-12">
      <div className="max-w-3xl mx-auto px-4 pt-4">
        
        {/* TOGGLE TAB (Dipindah ke bawah Navbar Utama) */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 bg-gray-200/60 p-1.5 rounded-full border border-gray-300">
            <button 
              onClick={() => setActiveTab('today')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === 'today' ? 'bg-white text-[#2A4A38] shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Jadwal Hari Ini
            </button>
            <button 
              onClick={() => setActiveTab('completed')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === 'completed' ? 'bg-[#2A4A38] text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Jadwal Selesai
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* TAB 1: JADWAL HARI INI (Sedang Berjalan) */}
        {/* ========================================================= */}
        {activeTab === 'today' && (
          <div className="animate-[fadeIn_0.3s_ease-out] space-y-6">
            
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 flex items-center justify-between shadow-sm">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Ruang Rutinitas Anak</p>
                <h2 className="font-display text-2xl font-bold text-[#2A4A38]">Jadwal Hari Ini</h2>
                <p className="text-gray-500 font-medium mt-1">Satu per satu, perlahan dan tenang.</p>
              </div>
              <div className="w-16 h-16 bg-[#C6EBD3] rounded-full border-2 border-[#2A4A38] flex items-center justify-center overflow-hidden shrink-0">
                <Illustration name="avatar-child-girl" alt="Karakter Pendamping" size={56} />
              </div>
            </div>

            {/* Kartu Kegiatan Sekarang */}
            <div className="bg-white border-2 border-[#2A4A38] rounded-3xl p-8 text-center shadow-[0_8px_0_0_#2A4A38]">
              <div className="flex justify-between items-center mb-6">
                <span className="bg-[#FFDF9D] text-[#785A00] px-4 py-1.5 rounded-full font-bold border border-[#785A00] text-sm">SEKARANG</span>
                <button onClick={() => speak(currentActivity.desc)} className="flex items-center gap-2 bg-[#C1E8FF] text-[#004A63] px-4 py-2 rounded-xl text-sm font-bold border border-[#004A63] hover:bg-[#A0DCFD]">
                  <Volume2 size={16} /> Dengarkan
                </button>
              </div>
              
              <div className="w-48 h-48 mx-auto bg-[#F4F4EE] rounded-3xl border-2 border-gray-200 flex items-center justify-center mb-6 text-[#2A4A38]">
                {currentActivity.icon}
              </div>
              
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-2">{currentActivity.name}</h2>
              <p className="text-gray-500 font-medium mb-8">{currentActivity.desc}</p>
              
              <button onClick={handleNext} className="w-full max-w-sm mx-auto bg-[#2A4A38] text-white py-4 rounded-xl font-bold shadow-[0_4px_0_0_#1A1C19] hover:bg-[#1E3629] transition-all flex items-center justify-center gap-2 text-lg">
                <CheckCircle2 size={22} /> Sudah Selesai
              </button>
            </div>

            {/* Bar Kegiatan Berikutnya */}
            {nextActivity && (
              <div className="bg-white border-2 border-[#004A63] rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="bg-[#C1E8FF] text-[#004A63] px-3 py-1 rounded-full text-xs font-bold border border-[#004A63] flex items-center gap-1">
                    <ArrowRight size={12} /> BERIKUTNYA
                  </span>
                  <span className="bg-[#FFDF9D] p-1.5 rounded-full text-lg">{nextActivity.icon}</span>
                  <div>
                    <p className="text-xs font-bold text-gray-400">Setelah {currentActivity.name.toLowerCase()}:</p>
                    <p className="font-bold text-gray-800 text-lg">{nextActivity.name}</p>
                  </div>
                </div>
                <button onClick={() => speak(`Berikutnya ${nextActivity.name}`)} className="text-sm font-bold text-[#004A63] border border-[#004A63] px-4 py-2 rounded-xl hover:bg-[#EAF5EC]">
                  Lihat Kegiatan
                </button>
              </div>
            )}

            {/* Scroller Horizontal */}
            <div className="bg-[#F4F4EE] border-2 border-gray-200 rounded-3xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-display font-bold text-gray-800">Urutan Kegiatan Hari Ini</h3>
                <span className="text-xs font-bold text-gray-500">Tetap Berurutan</span>
              </div>
              
              <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-4 pt-2">
                <button onClick={handlePrev} disabled={currentIndex === 0} className="p-2 bg-white rounded-full border border-gray-300 shadow-sm disabled:opacity-30 shrink-0">
                  <ArrowLeft size={20} className="text-gray-600" />
                </button>
                
                {activities.map((act, idx) => {
                  const isDone = idx < currentIndex;
                  const isNow = idx === currentIndex;
                  const isNext = idx === currentIndex + 1;
                  
                  return (
                    <div key={act.id} className={`shrink-0 w-28 p-3 rounded-2xl border-2 flex flex-col items-center text-center transition-all ${
                      isNow ? 'bg-white border-[#2A4A38] shadow-[0_4px_0_0_#2A4A38]' : 
                      isDone ? 'bg-gray-100 border-gray-200 opacity-60' :
                      'bg-white border-gray-200'
                    }`}>
                      <span className={`text-xs font-bold mb-2 px-2 py-0.5 rounded-full w-full truncate text-white ${isNow ? 'bg-[#2A4A38]' : isDone ? 'bg-green-600' : 'bg-gray-400'}`}>
                        {isDone ? 'Selesai' : isNow ? 'Sekarang' : isNext ? 'Berikutnya' : 'Nanti'}
                      </span>
                      <div className="text-3xl mb-2 text-gray-700">{act.icon}</div>
                      <span className="font-bold text-sm text-gray-800 mb-2 leading-tight">{act.name}</span>
                      {isDone ? (
                        <span className="text-[10px] font-bold text-green-600 flex items-center gap-1"><CheckCircle2 size={12}/> Tuntas</span>
                      ) : isNow ? (
                        <span className="text-[10px] font-bold text-[#785A00]">Sedang aktif</span>
                      ) : (
                        <span className="text-[10px] font-bold text-gray-400">Menunggu</span>
                      )}
                    </div>
                  );
                })}
                
                <button onClick={handleNext} className="p-2 bg-white rounded-full border border-gray-300 shadow-sm shrink-0">
                  <ArrowRight size={20} className="text-gray-600" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
              <button onClick={handlePrev} className="flex items-center gap-2 text-sm font-bold text-gray-600 bg-white border border-gray-300 px-4 py-2 rounded-xl hover:bg-gray-50">
                <ArrowLeft size={16} /> Batal Sudah (Kembali)
              </button>
              <button onClick={() => speak("Halaman pengaturan akses pendamping")} className="flex items-center gap-2 text-sm font-bold text-gray-600 bg-white border border-gray-300 px-4 py-2 rounded-xl hover:bg-gray-50">
                <User size={16} /> Pengaturan Akses Pendamping
              </button>
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: JADWAL SELESAI */}
        {/* ========================================================= */}
        {activeTab === 'completed' && (
          <div className="animate-[fadeIn_0.3s_ease-out]">
            <div className="bg-white border-2 border-[#2A4A38] rounded-3xl p-8 text-center shadow-[0_8px_0_0_#2A4A38] mb-6">
              
              <div className="w-64 h-48 mx-auto bg-[#F4F4EE] rounded-3xl border-2 border-gray-200 flex flex-col items-center justify-center mb-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-white p-2 rounded-xl border border-gray-200 shadow-sm text-left">
                  <p className="text-[10px] font-bold text-gray-400 mb-1">Jadwal Selesai</p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-gray-600"><Check size={10} className="text-green-500"/> Bangun Pagi</div>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-gray-600"><Check size={10} className="text-green-500"/> Mandi</div>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-gray-600"><Check size={10} className="text-green-500"/> Sarapan</div>
                  </div>
                </div>
                <Illustration name="avatar-child-boy" alt="Anak tersenyum" size={84} />
              </div>
              
              <h2 className="font-display text-4xl font-bold text-[#2A4A38] mb-3">Jadwal hari ini selesai.</h2>
              <p className="text-gray-500 font-medium mb-6">Semua kegiatan sudah kamu lakukan dengan tenang.</p>
              
              <button onClick={() => speak("Jadwal hari ini selesai. Semua kegiatan sudah kamu lakukan dengan tenang.")} className="inline-flex items-center gap-2 bg-[#C1E8FF] text-[#004A63] px-6 py-3 rounded-xl font-bold border-2 border-[#004A63] hover:bg-[#A0DCFD] transition-all">
                <Volume2 size={20} /> Dengarkan Suara
              </button>
            </div>

            <div className="bg-[#F4F4EE] border-2 border-gray-200 rounded-3xl p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-display font-bold text-gray-800 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-[#2A4A38]" /> Urutan yang Sudah Dilakukan
                </h3>
                <span className="text-xs font-bold text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">5 dari 5 kegiatan</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {activities.map((act) => (
                  <div key={act.id} className="bg-white border border-gray-200 rounded-2xl p-3 flex flex-col items-center text-center shadow-sm">
                    <div className="w-8 h-8 bg-[#EAF5EC] rounded-full flex items-center justify-center text-[#2A4A38] mb-2">
                      {act.icon}
                    </div>
                    <p className="font-bold text-xs text-gray-800 mb-1">{act.name}</p>
                    <p className="text-[10px] font-bold text-green-600 flex items-center gap-1"><CheckCircle2 size={10}/> Tuntas</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <button onClick={() => navigate('/calm')} className="bg-[#2A4A38] text-white px-8 py-3.5 rounded-xl font-bold shadow-[0_4px_0_0_#1A1C19] hover:bg-[#1E3629] transition-all flex items-center justify-center gap-2">
                <Coffee size={20} /> Ke Sudut Tenang
              </button>
              <button onClick={() => { setActiveTab('today'); setCurrentIndex(0); }} className="bg-white text-[#2A4A38] border-2 border-[#2A4A38] px-8 py-3.5 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                <RotateCcw size={20} /> Lihat Jadwal Lagi
              </button>
            </div>
            
            <p className="text-center text-sm font-bold text-gray-400 bg-white py-2 px-6 rounded-full inline-block mx-auto w-max border border-gray-200 shadow-sm">
              Tidak ada kegiatan tertunda. Kamu boleh beristirahat bebas.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}