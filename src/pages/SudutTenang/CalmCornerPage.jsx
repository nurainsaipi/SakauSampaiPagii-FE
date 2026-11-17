import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Volume2, CheckCircle2, Play, Square, 
  Wind, Music, MessageCircle, Droplets, Bed, DoorClosed, 
  HandHelping, Heart, ArrowLeft, ArrowRight, Ear, Eye, HelpCircle
} from 'lucide-react';
import { useSpeech } from '../../hooks/useSpeech';
import Illustration from '../../components/ui/Illustration';
import { ambientEngine } from '../../utils/ambientAudio';

export default function CalmCornerPage() {
  const navigate = useNavigate();
  const { speak } = useSpeech();
  const [activeView, setActiveView] = useState('hub'); 

  // --- STATE UNTUK NAPAS BERSAMA ---
  const [breathState, setBreathState] = useState('tarik'); 

  // --- STATE UNTUK SUARA TENANG ---
  const [activeSound, setActiveSound] = useState(null); 
  const [volume, setVolume] = useState(1); 
  const audioRef = useRef(null);

  // --- STATE UNTUK AKU BUTUH ---
  const [selectedNeed, setSelectedNeed] = useState(null);

  // Efek untuk animasi napas (ganti teks tarik/lepas tiap 4 detik)
  useEffect(() => {
    if (activeView === 'breath') {
      const interval = setInterval(() => {
        setBreathState(prev => prev === 'tarik' ? 'lepas' : 'tarik');
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [activeView]);

  // Bersihkan audio saat komponen unmount
  useEffect(() => {
    return () => {
      ambientEngine.stop();
      if (audioRef.current) audioRef.current.pause();
    };
  }, []);

  // Fungsi memutar/menghentikan suara
  const handlePlaySound = (soundId, url) => {
    if (activeSound === soundId) {
      stopAllAudio();
    } else {
      setActiveSound(soundId);
      ambientEngine.setVolume(volume);

      if (soundId === 'hujan') {
        ambientEngine.playRain();
      } else if (soundId === 'ombak') {
        ambientEngine.playWaves();
      } else if (soundId === 'musik') {
        ambientEngine.playMusic();
      }

      if (audioRef.current && url) {
        audioRef.current.src = url;
        audioRef.current.volume = volume;
        audioRef.current.play().catch(() => {});
      }
    }
  };

  const stopAllAudio = () => {
    setActiveSound(null);
    ambientEngine.stop();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const changeVolume = (newVol) => {
    setVolume(newVol);
    ambientEngine.setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF4] font-sans flex flex-col">
      <audio ref={audioRef} loop />

      {/* HEADER UTAMA */}
      <header className="bg-white border-b-2 border-gray-200 px-4 h-20 flex items-center justify-between shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#2A4A38] rounded-full flex items-center justify-center text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <span className="font-display font-bold text-lg text-gray-800">LIVORA</span>
        </div>
        
        <h1 className="font-display text-xl font-bold text-[#1A1C19]">Sudut Tenang</h1>
        
        <button 
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 bg-[#2A4A38] text-white px-5 py-2.5 rounded-xl font-bold shadow-[0_4px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-1 active:shadow-none transition-all"
        >
          <CheckCircle2 size={18} /> Aku siap
        </button>
      </header>

      <div className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-8">
        
        {/* VIEW 1: HUB UTAMA */}
        {activeView === 'hub' && (
          <div className="animate-[fadeIn_0.3s_ease-out]">
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 mb-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
              <div className="w-24 h-24 bg-[#C6EBD3] rounded-3xl border-2 border-[#2A4A38] flex items-center justify-center shrink-0 overflow-hidden">
                <Illustration name="avatar-child-girl" alt="Karakter Pendamping" size={80} />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <span className="inline-block bg-[#EAF5EC] text-[#2A4A38] text-xs font-bold px-3 py-1 rounded-full mb-2 border border-[#2A4A38]/20">Ruang Santai</span>
                <h2 className="font-display text-2xl font-bold text-gray-800 mb-1">Di sini tenang. Kamu boleh pilih.</h2>
                <p className="text-gray-500 font-medium">Ambil waktu sebanyak yang kamu perlukan.</p>
              </div>
              <button onClick={() => speak("Di sini tenang. Kamu boleh pilih. Ambil waktu sebanyak yang kamu perlukan.")} className="flex items-center gap-2 bg-[#C1E8FF] text-[#004A63] px-5 py-2.5 rounded-xl font-bold border-2 border-[#004A63] shadow-[0_3px_0_0_#004A63] hover:bg-[#A0DCFD] active:translate-y-0.5 active:shadow-none transition-all shrink-0">
                <Volume2 size={18} /> Dengarkan
              </button>
            </div>

            <div className="bg-[#F4F4EE] rounded-2xl p-4 mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 border border-gray-200">
              <div className="flex items-center gap-3 bg-white px-5 py-2 rounded-full border border-gray-200">
                <span className="bg-[#FFDF9D] text-[#785A00] w-7 h-7 rounded-full flex items-center justify-center font-bold border border-[#785A00]">1</span>
                <span className="text-gray-700 font-bold text-sm">Istirahat sekarang</span>
              </div>
              <ArrowRight size={20} className="text-gray-400 hidden sm:block" />
              <div className="flex items-center gap-3 bg-white px-5 py-2 rounded-full border border-gray-200">
                <span className="bg-[#C1E8FF] text-[#004A63] w-7 h-7 rounded-full flex items-center justify-center font-bold border border-[#004A63]">2</span>
                <span className="text-gray-700 font-bold text-sm">Lanjut belajar</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 flex flex-col shadow-sm">
                <div className="w-16 h-16 bg-[#C1E8FF] rounded-2xl flex items-center justify-center text-[#004A63] mb-4">
                  <Wind size={32} />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-800 mb-1">Napas Bersama</h3>
                <p className="text-sm text-gray-500 mb-6 flex-1">Tarik napas pelan bersama lingkaran tenang.</p>
                <button onClick={() => setActiveView('breath')} className="w-full flex items-center justify-center gap-2 bg-[#2A4A38] text-white py-3 rounded-xl font-bold shadow-[0_4px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-1 active:shadow-none transition-all">
                  <Play size={18} /> Pilih
                </button>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 flex flex-col shadow-sm">
                <div className="w-16 h-16 bg-[#FFDF9D] rounded-2xl flex items-center justify-center text-[#785A00] mb-4">
                  <Music size={32} />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-800 mb-1">Suara Tenang</h3>
                <p className="text-sm text-gray-500 mb-6 flex-1">Dengar suara rintik hujan dan angin lembut.</p>
                <button onClick={() => setActiveView('audio')} className="w-full flex items-center justify-center gap-2 bg-[#2A4A38] text-white py-3 rounded-xl font-bold shadow-[0_4px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-1 active:shadow-none transition-all">
                  <Play size={18} /> Pilih
                </button>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 flex flex-col shadow-sm">
                <div className="w-16 h-16 bg-[#EAF5EC] rounded-2xl flex items-center justify-center text-[#2A4A38] mb-4">
                  <MessageCircle size={32} />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-800 mb-1">Aku Butuh...</h3>
                <p className="text-sm text-gray-500 mb-6 flex-1">Tunjukkan kebutuhanmu tanpa harus bicara.</p>
                <button onClick={() => setActiveView('needs')} className="w-full flex items-center justify-center gap-2 bg-[#2A4A38] text-white py-3 rounded-xl font-bold shadow-[0_4px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-1 active:shadow-none transition-all">
                  <Play size={18} /> Pilih
                </button>
              </div>
            </div>

            <div className="bg-[#F4F4EE] rounded-2xl p-4 border border-gray-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-gray-500">Kenyamanan Cepat</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="bg-white border border-gray-300 px-3 py-1.5 rounded-lg text-sm font-bold text-gray-600 flex items-center gap-1 hover:bg-gray-50">
                  <Eye size={14} /> Redupkan layar <span className="text-gray-400 ml-1">Mati</span>
                </button>
                <button className="bg-white border border-gray-300 px-3 py-1.5 rounded-lg text-sm font-bold text-gray-600 flex items-center gap-1 hover:bg-gray-50">
                  <Ear size={14} /> Tanpa suara <span className="text-gray-400 ml-1">Mati</span>
                </button>
                <button className="bg-[#EAF5EC] border border-[#2A4A38] px-3 py-1.5 rounded-lg text-sm font-bold text-[#2A4A38] flex items-center gap-1">
                  <Wind size={14} /> Kurangi gerak <span className="bg-[#2A4A38] text-white px-2 rounded ml-1 text-xs">Aktif</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: NAPAS BERSAMA */}
        {activeView === 'breath' && (
          <div className="animate-[fadeIn_0.3s_ease-out] flex flex-col items-center justify-center min-h-[60vh]">
            <div className="w-full flex justify-between items-center mb-10">
              <div>
                <h2 className="font-display text-3xl font-bold text-[#2A4A38] flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#2A4A38] rounded-full"></span> Napas Bersama
                </h2>
                <p className="text-gray-500 font-medium mt-1">Ikuti lingkaran pelan-pelan.</p>
              </div>
              <button onClick={() => speak("Ikuti lingkaran pelan-pelan. Tarik napas, lalu lepas.")} className="flex items-center gap-2 bg-[#C1E8FF] text-[#004A63] px-5 py-2.5 rounded-xl font-bold border-2 border-[#004A63] shadow-[0_3px_0_0_#004A63] hover:bg-[#A0DCFD] active:translate-y-0.5 active:shadow-none transition-all">
                <Volume2 size={18} /> Dengarkan
              </button>
            </div>

            <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center mb-12">
              <div className={`absolute inset-0 rounded-full bg-[#C1E8FF] opacity-50 transition-transform duration-[4000ms] ease-in-out ${breathState === 'tarik' ? 'scale-100' : 'scale-75'}`}></div>
              <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 bg-[#7DC5ED] rounded-full flex flex-col items-center justify-center shadow-lg">
                <Wind size={48} className="text-white mb-4" />
                <span className="font-display text-4xl font-bold text-[#004A63] capitalize">{breathState}...</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
              <button onClick={() => setActiveView('hub')} className="flex-1 bg-white border-2 border-gray-300 text-gray-600 font-bold py-3 rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                <Square size={18} /> Berhenti
              </button>
              <button onClick={() => navigate('/dashboard')} className="flex-1 bg-[#2A4A38] text-white font-bold py-3 rounded-xl shadow-[0_4px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2">
                <CheckCircle2 size={18} /> Aku siap
              </button>
            </div>
          </div>
        )}

        {/* VIEW 3: SUARA TENANG */}
        {activeView === 'audio' && (
          <div className="animate-[fadeIn_0.3s_ease-out]">
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Langkah 3 • Relaksasi Audio</p>
                <h2 className="font-display text-3xl font-bold text-[#1A1C19]">Suara Tenang</h2>
                <p className="text-gray-500 font-medium mt-1">Pilih satu suara.</p>
              </div>
              <button onClick={() => speak("Pilih satu suara. Kamu bisa mendengarkan suara hujan, ombak, atau musik lembut.")} className="flex items-center gap-2 bg-[#C1E8FF] text-[#004A63] px-5 py-2.5 rounded-xl font-bold border-2 border-[#004A63] shadow-[0_3px_0_0_#004A63] hover:bg-[#A0DCFD] active:translate-y-0.5 active:shadow-none transition-all">
                <Volume2 size={18} /> Dengarkan Petunjuk
              </button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 mb-6 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#EAF5EC] rounded-full flex items-center justify-center text-[#2A4A38]">
                  <Volume2 size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400">Kondisi saat ini:</p>
                  <p className="font-bold text-gray-800">{activeSound ? `Sedang bunyi: ${activeSound === 'hujan' ? 'Hujan Tenang' : activeSound === 'ombak' ? 'Ombak' : 'Musik Lembut'}` : 'Semua suara mati'}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${activeSound ? 'bg-[#2A4A38] text-white border-[#1A1C19]' : 'bg-gray-100 text-gray-500 border-gray-300'}`}>
                {activeSound ? 'Aktif' : 'Mati'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div onClick={() => handlePlaySound('hujan', '/sounds/rain.mp3')} className={`cursor-pointer bg-white border-2 rounded-3xl p-6 flex flex-col transition-all ${activeSound === 'hujan' ? 'border-[#2A4A38] shadow-[0_6px_0_0_#2A4A38]' : 'border-gray-200 shadow-sm hover:border-gray-300'}`}>
                <div className="flex justify-between items-center mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${activeSound === 'hujan' ? 'bg-[#EAF5EC] text-[#2A4A38]' : 'bg-gray-100 text-gray-500'}`}>
                    {activeSound === 'hujan' ? <><Volume2 size={12}/> Sedang bunyi</> : <><Volume2 size={12}/> Mati</>}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeSound === 'hujan' ? 'bg-[#EAF5EC] text-[#2A4A38]' : 'bg-gray-50 text-gray-400'}`}>
                    <Wind size={20} />
                  </div>
                </div>
                <div className="w-full h-32 bg-[#EAF5EC] rounded-2xl mb-4 flex items-center justify-center border border-[#2A4A38]/10">
                  <Illustration name="sound-rain" alt="Suara hujan" size={72} />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-800">Hujan</h3>
                <p className="text-sm text-gray-500 mb-6 flex-1">Rintik tenang di daun hijau.</p>
                <div className={`w-full py-2 rounded-xl text-center font-bold text-sm ${activeSound === 'hujan' ? 'bg-[#2A4A38] text-white' : 'bg-gray-100 text-gray-600'}`}>
                  {activeSound === 'hujan' ? 'Sentuh untuk mematikan' : 'Sentuh untuk putar'}
                </div>
              </div>

              <div onClick={() => handlePlaySound('ombak', '/sounds/waves.mp3')} className={`cursor-pointer bg-white border-2 rounded-3xl p-6 flex flex-col transition-all ${activeSound === 'ombak' ? 'border-[#2A4A38] shadow-[0_6px_0_0_#2A4A38]' : 'border-gray-200 shadow-sm hover:border-gray-300'}`}>
                <div className="flex justify-between items-center mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${activeSound === 'ombak' ? 'bg-[#EAF5EC] text-[#2A4A38]' : 'bg-gray-100 text-gray-500'}`}>
                    {activeSound === 'ombak' ? <><Volume2 size={12}/> Sedang bunyi</> : <><Volume2 size={12}/> Mati</>}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeSound === 'ombak' ? 'bg-[#EAF5EC] text-[#2A4A38]' : 'bg-gray-50 text-gray-400'}`}>
                    <Droplets size={20} />
                  </div>
                </div>
                <div className="w-full h-32 bg-[#C1E8FF] rounded-2xl mb-4 flex items-center justify-center border border-[#004A63]/10">
                  <Illustration name="sound-wave" alt="Suara ombak" size={72} />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-800">Ombak</h3>
                <p className="text-sm text-gray-500 mb-6 flex-1">Gelombang santai di pantai.</p>
                <div className={`w-full py-2 rounded-xl text-center font-bold text-sm ${activeSound === 'ombak' ? 'bg-[#2A4A38] text-white' : 'bg-gray-100 text-gray-600'}`}>
                  {activeSound === 'ombak' ? 'Sentuh untuk mematikan' : 'Sentuh untuk putar'}
                </div>
              </div>

              <div onClick={() => handlePlaySound('musik', '/sounds/music.mp3')} className={`cursor-pointer bg-white border-2 rounded-3xl p-6 flex flex-col transition-all ${activeSound === 'musik' ? 'border-[#2A4A38] shadow-[0_6px_0_0_#2A4A38]' : 'border-gray-200 shadow-sm hover:border-gray-300'}`}>
                <div className="flex justify-between items-center mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${activeSound === 'musik' ? 'bg-[#EAF5EC] text-[#2A4A38]' : 'bg-gray-100 text-gray-500'}`}>
                    {activeSound === 'musik' ? <><Volume2 size={12}/> Sedang bunyi</> : <><Volume2 size={12}/> Mati</>}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeSound === 'musik' ? 'bg-[#EAF5EC] text-[#2A4A38]' : 'bg-gray-50 text-gray-400'}`}>
                    <Music size={20} />
                  </div>
                </div>
                <div className="w-full h-32 bg-[#FFDF9D] rounded-2xl mb-4 flex items-center justify-center border border-[#785A00]/10">
                  <Music size={56} className="text-[#785A00]" />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-800">Musik Lembut</h3>
                <p className="text-sm text-gray-500 mb-6 flex-1">Lagu damai tanpa kata.</p>
                <div className={`w-full py-2 rounded-xl text-center font-bold text-sm ${activeSound === 'musik' ? 'bg-[#2A4A38] text-white' : 'bg-gray-100 text-gray-600'}`}>
                  {activeSound === 'musik' ? 'Sentuh untuk mematikan' : 'Sentuh untuk putar'}
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-lg font-bold text-gray-800">Kekuatan Suara</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-500">Tingkat:</span>
                  <div className="flex gap-1">
                    <div className={`w-6 h-4 rounded-sm ${volume > 0 ? 'bg-[#2A4A38]' : 'bg-gray-200'}`}></div>
                    <div className={`w-6 h-4 rounded-sm ${volume > 0.5 ? 'bg-[#2A4A38]' : 'bg-gray-200'}`}></div>
                    <div className={`w-6 h-4 rounded-sm ${volume > 0.8 ? 'bg-[#2A4A38]' : 'bg-gray-200'}`}></div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <button onClick={() => changeVolume(0.4)} className="flex-1 bg-white border border-gray-300 py-2.5 rounded-xl font-bold text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2 active:scale-95 transition-all">
                  <Volume2 size={16} /> Lebih pelan
                </button>
                <button onClick={() => changeVolume(0.9)} className="flex-1 bg-white border border-gray-300 py-2.5 rounded-xl font-bold text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2 active:scale-95 transition-all">
                  <Volume2 size={16} /> Lebih keras
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center gap-4">
              <button onClick={stopAllAudio} className="bg-red-50 text-red-600 border border-red-200 px-6 py-3 rounded-xl font-bold hover:bg-red-100 transition-colors flex items-center gap-2">
                <Square size={18} /> Hentikan suara
              </button>
              <button onClick={() => { stopAllAudio(); setActiveView('hub'); }} className="bg-[#2A4A38] text-white px-8 py-3 rounded-xl font-bold shadow-[0_4px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-1 active:shadow-none transition-all flex items-center gap-2">
                <CheckCircle2 size={18} /> Aku siap
              </button>
            </div>
          </div>
        )}

        {/* VIEW 4: AKU BUTUH... */}
        {activeView === 'needs' && (
          <div className="animate-[fadeIn_0.3s_ease-out]">
            <div className="bg-[#EAF5EC] rounded-2xl p-4 mb-8 flex items-center justify-between border border-[#2A4A38]/20 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2A4A38]">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="font-bold text-[#2A4A38]">Papan Komunikasi Langsung</p>
                  <p className="text-sm text-gray-600">Sentuh gambar kebutuhanmu lalu tunjukkan layar ke orang terdekat.</p>
                </div>
              </div>
              <button onClick={() => speak("Pilih gambar yang kamu butuhkan, lalu tunjukkan layar ini ke pendampingmu.")} className="hidden sm:flex items-center gap-2 bg-white text-[#2A4A38] px-4 py-2 rounded-xl text-sm font-bold border border-[#2A4A38]/30 hover:bg-gray-50">
                <Volume2 size={16} /> Dengarkan Suara
              </button>
            </div>

            {selectedNeed ? (
              <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 mb-8 text-center shadow-sm flex flex-col items-center animate-[fadeIn_0.2s_ease-out]">
                <div className="w-64 h-64 bg-[#F4F4EE] rounded-3xl flex items-center justify-center mb-6 border border-gray-200">
                  {selectedNeed === 'istirahat' && <Bed size={100} className="text-gray-600" />}
                  {selectedNeed === 'air' && <Droplets size={100} className="text-[#004A63]" />}
                  {selectedNeed === 'sepi' && <DoorClosed size={100} className="text-gray-600" />}
                  {selectedNeed === 'toilet' && <DoorClosed size={100} className="text-[#004A63]" />}
                  {selectedNeed === 'bantuan' && <HandHelping size={100} className="text-[#785A00]" />}
                  {selectedNeed === 'peluk' && <Heart size={100} className="text-red-400" />}
                </div>
                <h2 className="font-display text-4xl font-bold text-[#2A4A38] mb-4">
                  Aku butuh {selectedNeed === 'air' ? 'air minum' : selectedNeed === 'sepi' ? 'tempat sepi' : selectedNeed === 'toilet' ? 'ke toilet' : selectedNeed === 'bantuan' ? 'bantuan' : selectedNeed === 'peluk' ? 'peluk' : 'istirahat'}.
                </h2>
                <p className="text-gray-500 font-bold bg-[#F4F4EE] px-4 py-2 rounded-full inline-flex items-center gap-2 mb-8">
                  <Eye size={18} /> Tunjukkan layar ini ke pendamping.
                </p>

                <div className="flex gap-4">
                  <button onClick={() => setSelectedNeed(null)} className="bg-white border-2 border-gray-300 text-gray-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 flex items-center gap-2">
                    <ArrowLeft size={18} /> Pilih Lagi
                  </button>
                  <button onClick={() => { setSelectedNeed(null); setActiveView('hub'); }} className="bg-[#2A4A38] text-white px-8 py-3 rounded-xl font-bold shadow-[0_4px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-1 active:shadow-none transition-all flex items-center gap-2">
                    <CheckCircle2 size={18} /> Aku siap
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <HelpCircle size={24} className="text-[#785A00]" /> Pilih gambar yang kamu butuhkan:
                  </h2>
                  <span className="text-sm font-bold text-gray-400">6 Pilihan Tersedia</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <button onClick={() => setSelectedNeed('istirahat')} className="bg-white border-2 border-gray-200 rounded-3xl p-6 flex flex-col items-center hover:border-[#2A4A38] transition-all shadow-sm group">
                    <div className="w-20 h-20 bg-[#F4F4EE] rounded-full flex items-center justify-center text-gray-500 mb-4 group-hover:bg-[#EAF5EC] group-hover:text-[#2A4A38] transition-colors">
                      <Bed size={40} />
                    </div>
                    <span className="font-display font-bold text-lg text-gray-800">Istirahat</span>
                    <span className="text-xs text-gray-500 font-medium">Bantal santai</span>
                  </button>

                  <button onClick={() => setSelectedNeed('air')} className="bg-white border-2 border-gray-200 rounded-3xl p-6 flex flex-col items-center hover:border-[#2A4A38] transition-all shadow-sm group">
                    <div className="w-20 h-20 bg-[#F4F4EE] rounded-full flex items-center justify-center text-gray-500 mb-4 group-hover:bg-[#EAF5EC] group-hover:text-[#2A4A38] transition-colors">
                      <Droplets size={40} />
                    </div>
                    <span className="font-display font-bold text-lg text-gray-800">Air minum</span>
                    <span className="text-xs text-gray-500 font-medium">Gelas air segar</span>
                  </button>

                  <button onClick={() => setSelectedNeed('sepi')} className="bg-white border-2 border-gray-200 rounded-3xl p-6 flex flex-col items-center hover:border-[#2A4A38] transition-all shadow-sm group">
                    <div className="w-20 h-20 bg-[#F4F4EE] rounded-full flex items-center justify-center text-gray-500 mb-4 group-hover:bg-[#EAF5EC] group-hover:text-[#2A4A38] transition-colors">
                      <DoorClosed size={40} />
                    </div>
                    <span className="font-display font-bold text-lg text-gray-800">Tempat sepi</span>
                    <span className="text-xs text-gray-500 font-medium">Sudut tenang sunyi</span>
                  </button>

                  <button onClick={() => setSelectedNeed('toilet')} className="bg-white border-2 border-gray-200 rounded-3xl p-6 flex flex-col items-center hover:border-[#2A4A38] transition-all shadow-sm group">
                    <div className="w-20 h-20 bg-[#F4F4EE] rounded-full flex items-center justify-center text-gray-500 mb-4 group-hover:bg-[#EAF5EC] group-hover:text-[#2A4A38] transition-colors">
                      <DoorClosed size={40} />
                    </div>
                    <span className="font-display font-bold text-lg text-gray-800">Ke toilet</span>
                    <span className="text-xs text-gray-500 font-medium">Pintu kamar kecil</span>
                  </button>

                  <button onClick={() => setSelectedNeed('bantuan')} className="bg-white border-2 border-gray-200 rounded-3xl p-6 flex flex-col items-center hover:border-[#2A4A38] transition-all shadow-sm group">
                    <div className="w-20 h-20 bg-[#F4F4EE] rounded-full flex items-center justify-center text-gray-500 mb-4 group-hover:bg-[#EAF5EC] group-hover:text-[#2A4A38] transition-colors">
                      <HandHelping size={40} />
                    </div>
                    <span className="font-display font-bold text-lg text-gray-800">Bantuan</span>
                    <span className="text-xs text-gray-500 font-medium">Dua tangan tolong</span>
                  </button>

                  <button onClick={() => setSelectedNeed('peluk')} className="bg-white border-2 border-gray-200 rounded-3xl p-6 flex flex-col items-center hover:border-[#2A4A38] transition-all shadow-sm group">
                    <div className="w-20 h-20 bg-[#F4F4EE] rounded-full flex items-center justify-center text-gray-500 mb-4 group-hover:bg-[#EAF5EC] group-hover:text-[#2A4A38] transition-colors">
                      <Heart size={40} />
                    </div>
                    <span className="font-display font-bold text-lg text-gray-800">Peluk</span>
                    <span className="text-xs text-gray-500 font-medium">Pelukan tenang</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}