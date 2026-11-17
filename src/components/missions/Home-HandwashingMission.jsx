import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, Volume2, Sparkles, CheckCircle2, RotateCcw, 
  Home, Star, Droplets, Wind
} from 'lucide-react';
import { useSpeech } from '../../hooks/useSpeech';

export default function HomeHandwashingMission() {
  const navigate = useNavigate();
  const { speak } = useSpeech();
  const [currentStep, setCurrentStep] = useState(0);

  const stepsData = [
    {
      id: 'air', title: 'BASAHI TANGAN', shortTitle: 'Air', 
      iconComponent: <Droplets size={80} className="text-[#004A63] mb-4 animate-bounce" />,
      instruction: 'Basahi kedua tanganmu dengan air bersih.',
      audio: 'Mari basahi tangan dengan air bersih.',
      bubble: 'Tekan tombol suara untuk dengar', bgColor: 'bg-[#C1E8FF]',
    },
    {
      id: 'sabun', title: 'GOSOK SABUN BUSA', shortTitle: 'Sabun', 
      iconComponent: <Sparkles size={80} className="text-[#2A4A38] mb-4 animate-bounce" />,
      instruction: 'Gosok sabun hingga berbusa banyak di kedua tangan.',
      audio: 'Ayo ambil sabun dan buat busa di tanganmu!',
      bubble: 'Buat busa putih banyak', bgColor: 'bg-[#EAF5EC]',
    },
    {
      id: 'kering', title: 'KERINGKAN TANGAN', shortTitle: 'Kering', 
      iconComponent: <Wind size={80} className="text-[#785A00] mb-4 animate-bounce" />,
      instruction: 'Keringkan tanganmu menggunakan handuk bersih.',
      audio: 'Keringkan tanganmu dengan handuk sampai kering.',
      bubble: 'Tangan Bersih & Segar', bgColor: 'bg-[#FFDF9D]',
    }
  ];

  // FITUR AUTO-VOICE: Suara otomatis muncul setiap kali pindah langkah
  useEffect(() => {
    if (currentStep < 3) {
      speak(stepsData[currentStep].audio);
    } else {
      speak('Hore! Kamu hebat sekali! Semua kuman sudah bersih.');
    }
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  const handleRepeat = () => {
    setCurrentStep(0);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF4] pb-24 font-sans">
      
      {/* 1. HEADER ATAS */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-20 flex items-center justify-between">
          <button 
            onClick={() => navigate('/worlds/home')}
            className="flex items-center gap-2 bg-white border-2 border-[#2A4A38] text-[#2A4A38] px-4 py-2 rounded-xl font-bold shadow-[0_4px_0_0_#2A4A38] hover:bg-gray-50 active:translate-y-1 active:shadow-none transition-all"
          >
            <ChevronLeft size={20} /> Kembali
          </button>
          <div className="text-center">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Misi Cuci Tangan</span>
            <span className="font-display font-bold text-xl text-[#1A1C19]">
              {currentStep < 3 ? `Langkah ${currentStep + 1} dari 3` : 'Selesai!'}
            </span>
          </div>
          <div className="w-20"></div> {/* Spacer penyeimbang */}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 pt-8">
        
        {/* 2. PROGRESS BAR SEDERHANA */}
        <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden mb-6 border-2 border-gray-300">
          <div 
            className="bg-[#2A4A38] h-full transition-all duration-500 ease-out"
            style={{ width: `${((currentStep) / 3) * 100}%` }}
          />
        </div>

        {/* 3. INDIKATOR 3 KARTU */}
        <div className="flex gap-2 sm:gap-4 mb-8">
          {stepsData.map((step, idx) => {
            const isActive = currentStep === idx;
            const isCompleted = currentStep > idx || currentStep === 3;
            return (
              <div key={step.id} className="flex-1 flex items-center justify-center relative">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 w-full justify-center transition-all ${
                  isActive ? 'bg-[#FFDF9D] border-[#785A00] shadow-[0_3px_0_0_#785A00]' : 
                  isCompleted ? 'bg-[#EAF5EC] border-[#2A4A38]' : 'bg-white border-gray-200'
                }`}>
                  {isCompleted ? <CheckCircle2 size={18} className="text-[#2A4A38]" /> : <span className="font-bold text-gray-800">{idx + 1}.</span>}
                  <span className={`font-bold uppercase ${isActive ? 'text-[#785A00]' : isCompleted ? 'text-[#2A4A38]' : 'text-gray-400'}`}>
                    {step.shortTitle}
                  </span>
                </div>
                {idx < 2 && <div className="hidden sm:block w-4 h-0.5 bg-gray-300 mx-1" />}
              </div>
            );
          })}
        </div>

        {/* LAYAR UTAMA */}
        {currentStep < 3 ? (
          <div className="bg-white border-[3px] border-gray-200 rounded-3xl p-6 md:p-8 shadow-[0_8px_0_0_#E5E5E5] relative min-h-[500px] flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-[#2A4A38] bg-[#EAF5EC] px-6 py-2 rounded-full border-2 border-[#2A4A38]">
                {stepsData[currentStep].title}
              </h1>
              <button 
                onClick={() => speak(stepsData[currentStep].audio)} 
                className="p-3 bg-[#C1E8FF] text-[#004A63] rounded-full border-2 border-[#004A63] shadow-[0_3px_0_0_#004A63] hover:bg-[#A0DCFD] active:translate-y-0.5 active:shadow-none transition-all"
                aria-label="Dengarkan suara instruksi"
              >
                <Volume2 size={24} />
              </button>
            </div>

            <button 
              onClick={() => speak(stepsData[currentStep].audio)} 
              className="w-full flex items-center justify-center gap-3 bg-[#C1E8FF] text-[#004A63] font-bold text-xl py-4 rounded-2xl border-[3px] border-[#004A63] shadow-[0_5px_0_0_#004A63] hover:bg-[#A0DCFD] active:translate-y-1 active:shadow-none transition-all mb-8"
            >
              <Volume2 size={28} /> DENGARKAN SUARA
            </button>

            <div className={`relative flex-1 min-h-[250px] rounded-2xl flex flex-col items-center justify-center border-4 border-dashed border-gray-300 ${stepsData[currentStep].bgColor} overflow-hidden mb-8`}>
               {stepsData[currentStep].iconComponent}
               <p className="text-gray-600 font-bold bg-white/80 px-4 py-2 rounded-full">(Area Panduan: {stepsData[currentStep].title})</p>
               <div className="absolute bottom-4 right-4 bg-white text-sm font-bold text-gray-700 px-3 py-1.5 rounded-full border border-gray-300 shadow-sm flex items-center gap-1">
                 <Sparkles size={14} className="text-[#FFDF9D]" /> {stepsData[currentStep].bubble}
               </div>
            </div>
            <div className="text-center"><p className="text-xl font-bold text-gray-800 italic">"{stepsData[currentStep].instruction}"</p></div>
          </div>
        ) : (
          /* LAYAR PERAYAAN */
          <div className="bg-white border-[3px] border-[#2A4A38] rounded-3xl p-6 md:p-10 shadow-[0_8px_0_0_#2A4A38] relative min-h-[500px] flex flex-col items-center text-center">
            <div className="flex items-center justify-center gap-4 mb-2">
              <Star size={32} className="text-[#FFDF9D] fill-[#FFDF9D]" />
              <h1 className="font-display text-4xl md:text-5xl font-bold text-[#2A4A38]">KAMU HEBAT!</h1>
              <Star size={32} className="text-[#FFDF9D] fill-[#FFDF9D]" />
            </div>
            <p className="text-xl font-bold text-gray-500 mb-8">KERINGKAN TANGAN</p>
            
            <div className="w-full max-w-md bg-[#EAF5EC] rounded-2xl border-4 border-white shadow-sm flex flex-col items-center justify-center p-8 mb-10 relative">
               <div className="flex items-center justify-center gap-3 mb-4">
                 <Sparkles size={72} className="text-[#2A4A38]" />
                 <Star size={48} className="text-[#FDCB57] fill-[#FDCB57]" />
               </div>
               <div className="bg-white px-4 py-2 rounded-full font-bold text-[#2A4A38] text-sm shadow-sm absolute bottom-4 right-4">Tangan Bersih & Segar</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mt-auto">
               <button onClick={handleRepeat} className="flex-1 flex items-center justify-center gap-2 bg-white text-[#2A4A38] font-bold text-lg py-4 rounded-2xl border-2 border-[#2A4A38] hover:bg-gray-50 transition-all">
                 <RotateCcw size={22} /> ULANGI LAGI
               </button>
               <button onClick={() => navigate('/dashboard')} className="flex-1 flex items-center justify-center gap-2 bg-[#2A4A38] text-white font-bold text-lg py-4 rounded-2xl border-2 border-[#2A4A38] shadow-[0_4px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-1 active:shadow-none transition-all">
                 <Home size={22} /> KE BERANDA
               </button>
            </div>
          </div>
        )}
      </div>

      {/* 4. FOOTER NAVIGASI BAWAH */}
      {currentStep < 3 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
            <button 
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`flex-1 flex items-center justify-center gap-2 font-bold text-lg py-4 rounded-2xl border-2 transition-all ${
                currentStep === 0 
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                  : 'border-[#2A4A38] text-[#2A4A38] hover:bg-gray-50 shadow-[0_4px_0_0_#2A4A38] active:translate-y-1 active:shadow-none'
              }`}
            >
              <ChevronLeft size={24} /> SEBELUMNYA
            </button>

            <button 
              onClick={handleNext}
              className="flex-1 flex items-center justify-center gap-2 bg-[#2A4A38] text-white font-bold text-lg py-4 rounded-2xl border-2 border-[#1A1C19] shadow-[0_4px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-1 active:shadow-none transition-all"
            >
              {currentStep === 2 ? 'SELESAI' : 'LANJUT'}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
