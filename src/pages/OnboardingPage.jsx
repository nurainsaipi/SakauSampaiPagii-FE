import { useNavigate } from 'react-router-dom';
import { useAccessibility } from '../context/AccessibilityContext';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function OnboardingPage() {
  const { settings, toggle } = useAccessibility();
  const { markOnboardingDone } = useAuth();
  const navigate = useNavigate();

  const finish = () => {
    markOnboardingDone();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#FAFAF4] flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full border-2 border-gray-200 shadow-sm p-8 bg-white rounded-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-[#2A4A38] mb-3">Kenalan Dulu, Yuk!</h1>
          <p className="text-gray-600 font-medium text-lg">Pilih cara belajar yang paling nyaman untukmu. Semua pilihan ini bisa diubah kapan saja.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 mb-10">
          {[
            { k: 'audioEnabled', l: 'Suara & Bacaan', d: 'Instruksi dibacakan dengan suara.' },
            { k: 'highContrast', l: 'Kontras Tinggi', d: 'Tampilan lebih jelas dan tegas.' },
            { k: 'simpleMode', l: 'Mode Sederhana', d: 'Teks lebih singkat dan padat.' },
            { k: 'reduceMotion', l: 'Kurangi Animasi', d: 'Tampilan lebih tenang dan statis.' },
            { k: 'bigTargets', l: 'Tombol Besar', d: 'Lebih mudah ditekan.' },
          ].map((o) => (
            <label 
              key={o.k} 
              className={`flex items-start gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                settings[o.k] ? 'border-[#2A4A38] bg-[#EAF5EC]' : 'border-gray-200 bg-white hover:bg-gray-50'
              }`}
            >
              <input 
                type="checkbox" 
                checked={!!settings[o.k]} 
                onChange={() => toggle(o.k)} 
                className="mt-1 h-6 w-6 accent-[#2A4A38] cursor-pointer" 
              />
              <div>
                <p className="font-bold text-gray-800 text-lg">{o.l}</p>
                <p className="text-sm text-gray-500 font-medium mt-1">{o.d}</p>
              </div>
            </label>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            onClick={finish} 
            className="flex-1 inline-flex items-center justify-center min-h-[60px] bg-[#2A4A38] text-white font-bold text-lg rounded-xl border-[3px] border-[#41624F] shadow-[0_6px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-1.5 active:shadow-none transition-all"
          >
            Selesai & Mulai Belajar
          </Button>
          <Button 
            onClick={finish} 
            className="flex-1 inline-flex items-center justify-center min-h-[60px] bg-white text-[#2A4A38] font-bold text-lg rounded-xl border-2 border-[#2A4A38] hover:bg-gray-50 transition-all"
          >
            Lewati Dulu
          </Button>
        </div>
      </Card>
    </div>
  );
}