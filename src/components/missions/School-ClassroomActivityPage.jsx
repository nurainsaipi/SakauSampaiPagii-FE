import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, Volume2, Coffee, Check, ArrowRight, BookOpen, Lightbulb, Smile
} from 'lucide-react';
import { useSpeech } from '../../hooks/useSpeech';
import { SCHOOL_OBJECTS } from '../../data/schoolObjects';
import BreakModal from '../accessibility/BreakModal';
import Illustration from '../ui/Illustration';

export default function SchoolClassroomActivityPage() {
  const navigate = useNavigate();
  const { speak } = useSpeech();
  
  // State Aktivitas
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  const currentItem = SCHOOL_OBJECTS[currentIndex];
  const totalItems = SCHOOL_OBJECTS.length;

  // Tangani pilihan kuis
  const handleOptionClick = (option) => {
    setSelectedOption(option.id);
    if (option.isCorrect) {
      setIsCorrect(true);
      speak(`Benar! Ini ${currentItem.name}. Hebat sekali!`);
    } else {
      setIsCorrect(false);
      speak(`Belum tepat, coba pilih lagi ya.`);
    }
  };

  // Pindah ke benda berikutnya
  const handleNext = () => {
    if (currentIndex < totalItems - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsCorrect(false);
    } else {
      speak('Hore! Kamu sudah berhasil mengenal semua benda di kelas!');
      navigate('/worlds/school');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF4] pb-24 font-sans">
      {isBreak && <BreakModal onClose={() => setIsBreak(false)} />}

      {/* 1. HEADER */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
          <button onClick={() => navigate('/worlds/school')} className="flex items-center gap-2 bg-white border-2 border-[#2A4A38] text-[#2A4A38] px-5 py-2.5 rounded-xl font-bold shadow-[0_4px_0_0_#2A4A38] hover:bg-gray-50 active:translate-y-1 active:shadow-none transition-all">
            <ChevronLeft size={20} /> Kembali ke Sekolah
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#EAF3F8] rounded-lg border-2 border-[#004A63] flex items-center justify-center text-[#004A63]">
              <BookOpen size={20} />
            </div>
            <h1 className="font-display text-xl font-bold text-[#1A1C19] hidden sm:block">Ruang Kelas • Mengenal Benda</h1>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => speak(currentItem.quizQ)} className="hidden sm:flex items-center gap-2 bg-[#C1E8FF] text-[#004A63] border-2 border-[#004A63] px-4 py-2.5 rounded-xl font-bold shadow-[0_4px_0_0_#004A63] hover:bg-[#A0DCFD] active:translate-y-1 active:shadow-none transition-all">
              <Volume2 size={18} /> Suara
            </button>
            <button onClick={() => setIsBreak(true)} className="hidden sm:flex items-center gap-2 bg-[#FFDF9D] text-[#785A00] border-2 border-[#785A00] px-4 py-2.5 rounded-xl font-bold shadow-[0_3px_0_0_#785A00] hover:bg-[#F0C04D] active:translate-y-1 active:shadow-none transition-all">
              <Coffee size={18} /> Istirahat
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 pt-8">
        
        {/* 2. PROGRESS BAR */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 mb-6 shadow-sm">
          <div className="flex items-center justify-between text-sm font-bold text-gray-500 mb-2">
            <span>Kemajuan Belajar</span>
            <span>{currentIndex + 1} dari {totalItems} Benda</span>
          </div>
          <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
            <div 
              className="bg-[#2A4A38] h-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / totalItems) * 100}%` }}
            />
          </div>

          <div className="flex justify-between mt-4">
            {SCHOOL_OBJECTS.map((item, index) => {
              const isDone = index < currentIndex;
              const isActive = index === currentIndex;

              return (
                <div key={item.id} className="flex flex-col items-center gap-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 ${
                    isActive ? 'bg-[#FFDF9D] border-[#785A00] text-[#785A00]' :
                    isDone ? 'bg-[#EAF5EC] border-[#2A4A38] text-[#2A4A38]' :
                    'bg-gray-100 border-gray-300 text-gray-400'
                  }`}>
                    {isDone ? <Check size={16} /> : index + 1}
                  </div>
                  <span className={`text-xs font-bold ${isActive ? 'text-[#785A00]' : isDone ? 'text-[#2A4A38]' : 'text-gray-400'}`}>
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. KARTU BELAJAR UTAMA */}
        <div className="bg-white border-[3px] border-gray-200 rounded-3xl p-8 mb-6 shadow-sm text-center">
          <div className="w-48 h-48 mx-auto bg-[#EAF5EC] rounded-3xl flex items-center justify-center mb-6 shadow-inner border border-[#2A4A38]/10">
            <Illustration name={currentItem.icon} alt={currentItem.name} size={96} />
          </div>
          <h2 className="font-display text-4xl font-bold text-gray-800 mb-2">Ini {currentItem.name.toUpperCase()}.</h2>
          <p className="text-xl text-gray-600 font-medium mb-6">{currentItem.desc}</p>
          <button 
            onClick={() => speak(`Ini ${currentItem.name}. ${currentItem.desc}`)}
            className="inline-flex items-center gap-2 bg-[#C1E8FF] text-[#004A63] px-6 py-3 rounded-xl font-bold border-2 border-[#004A63] shadow-[0_4px_0_0_#004A63] hover:bg-[#A0DCFD] active:translate-y-1 active:shadow-none transition-all"
          >
            <Volume2 size={20} /> DENGARKAN SUARA
          </button>
        </div>

        {/* 4. KARTU KUIS */}
        <div className="bg-[#F9F9F9] border-2 border-gray-200 rounded-3xl p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-2xl font-bold text-gray-800 flex items-center gap-2">
              <button 
                onClick={() => speak(currentItem.quizQ)} 
                className="p-2 bg-white rounded-full border border-gray-300 shadow-sm hover:bg-gray-100"
                aria-label="Dengarkan pertanyaan kuis"
              >
                <Volume2 size={18} className="text-[#785A00]" />
              </button>
              {currentItem.quizQ}
            </h3>
            <span className="text-sm font-bold text-gray-500 hidden sm:block">Pilih satu gambar di bawah</span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {currentItem.options.map(option => {
              const isSelected = selectedOption === option.id;
              
              return (
                <button 
                  key={option.id}
                  onClick={() => handleOptionClick(option)}
                  className={`relative flex flex-col items-center justify-center p-6 bg-white rounded-2xl border-4 transition-all ${
                    isSelected && option.isCorrect ? 'border-[#2A4A38] shadow-[0_6px_0_0_#2A4A38]' : 
                    isSelected && !option.isCorrect ? 'border-red-300' :
                    'border-gray-100 hover:border-gray-300 shadow-sm'
                  }`}
                >
                  {isSelected && option.isCorrect && (
                    <div className="absolute top-3 right-3 bg-[#2A4A38] text-white p-1 rounded-full">
                      <Check size={16} />
                    </div>
                  )}
                  <div className="w-20 h-20 flex items-center justify-center mb-3">
                    <Illustration name={option.icon} alt={option.label} size={64} />
                  </div>
                  <span className="font-bold text-lg text-gray-700">{option.label}</span>
                </button>
              );
            })}
          </div>

          {/* Kotak Umpan Balik (Hanya muncul jika benar) */}
          {isCorrect && (
            <div className="bg-[#C1E8FF] border-2 border-[#004A63] rounded-xl p-4 flex items-center gap-3 animate-[fadeIn_0.3s_ease-out]">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#004A63]">
                <Smile size={20} />
              </div>
              <div>
                <p className="font-bold text-[#004A63] text-lg">Bagus sekali!</p>
                <p className="text-sm font-medium text-[#004A63]/80">Ini {currentItem.name} untuk {currentItem.desc.split(' ').slice(2).join(' ')}. Kamu sudah mengenal {currentItem.name}.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 5. FOOTER AKSI */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-2">
          <button onClick={() => navigate('/worlds/school')} className="flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors">
            <ChevronLeft size={20} /> <span className="hidden sm:inline">Kembali</span>
          </button>
          
          <div className="flex gap-2">
            <button onClick={() => speak(currentItem.desc)} className="hidden sm:flex items-center gap-2 bg-[#F4F4EE] text-[#2A4A38] px-4 py-3 rounded-xl font-bold border border-gray-300 hover:bg-gray-50 transition-colors">
              <Volume2 size={18} /> Dengarkan Lagi
            </button>
            <button onClick={() => speak('Pilih gambar yang benar ya.')} className="flex items-center gap-2 bg-[#FFDF9D] text-[#785A00] px-4 py-3 rounded-xl font-bold border border-[#785A00] shadow-[0_3px_0_0_#785A00] hover:bg-[#F0C04D] active:translate-y-0.5 active:shadow-none transition-all">
              <Lightbulb size={18} /> Petunjuk
            </button>
          </div>

          <button 
            onClick={handleNext}
            disabled={!isCorrect}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-lg transition-all ml-auto ${
              isCorrect 
                ? 'bg-[#2A4A38] text-white border-2 border-[#1A1C19] shadow-[0_4px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-1 active:shadow-none' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Lanjut <ArrowRight size={20} />
          </button>
        </div>
      </div>

    </div>
  );
}
