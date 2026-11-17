import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Construction } from 'lucide-react';

export default function ComingSoonMission({ title }) {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#FAFAF4] flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white p-10 rounded-3xl border-2 border-gray-200 shadow-sm max-w-md w-full">
        <Construction size={64} className="text-[#F0C04D] mx-auto mb-6" />
        <h1 className="text-3xl font-display font-bold text-gray-800 mb-2">Misi {title}</h1>
        <p className="text-gray-500 font-medium mb-8">Misi ini sedang disiapkan. Nantikan ya!</p>
        <button 
          onClick={() => navigate('/worlds/home')}
          className="w-full flex items-center justify-center gap-2 bg-[#2A4A38] text-white py-3 rounded-xl font-bold border-2 border-[#2A4A38] shadow-[0_4px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-1 active:shadow-none transition-all"
        >
          <ArrowLeft size={20} /> Kembali
        </button>
      </div>
    </div>
  );
}