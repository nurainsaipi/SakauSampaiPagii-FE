import { X, Volume2, Type, Contrast, Zap, Hand } from 'lucide-react';
import { useAccessibility } from '../../context/AccessibilityContext';
import FloatingAccessButton from './FloatingAccessButton';

export default function AccessibilityPanel() {
  const { settings, update, toggle, reset, isPanelOpen, setPanelOpen } = useAccessibility();

  // Jika panel tertutup, tampilkan tombol melayang
  if (!isPanelOpen) return <FloatingAccessButton />;

  // Jika panel terbuka, tampilkan menu
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-end">
      <div className="w-full max-w-sm bg-livora-cream h-full overflow-y-auto p-6 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">LIVORA ACCESS</h2>
          <button onClick={() => setPanelOpen(false)} className="p-2 bg-livora-sand rounded-full hover:bg-livora-tan transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          {/* Ukuran Teks */}
          <div className="bg-white p-4 rounded-livora shadow-sm">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><Type size={18} /> Ukuran Teks</h3>
            <div className="flex gap-2">
              {['normal','large','xlarge'].map(v => (
                <button key={v} onClick={() => update('textSize', v)} className={`flex-1 py-2 rounded font-semibold ${settings.textSize === v ? 'bg-livora-green-dark text-white' : 'bg-livora-sand'}`}>
                  {v === 'normal' ? 'Normal' : v === 'large' ? 'Besar' : 'Sgt Besar'}
                </button>
              ))}
            </div>
          </div>

          {/* Suara */}
          <div className="bg-white p-4 rounded-livora shadow-sm">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><Volume2 size={18} /> Suara</h3>
            <label className="flex items-center justify-between cursor-pointer">
              <span>Aktifkan Text-to-Speech</span>
              <input type="checkbox" checked={settings.audioEnabled} onChange={() => toggle('audioEnabled')} className="h-5 w-5 accent-livora-green-dark" />
            </label>
          </div>

          {/* Tampilan */}
          <div className="bg-white p-4 rounded-livora shadow-sm">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><Contrast size={18} /> Tampilan</h3>
            <label className="flex items-center justify-between cursor-pointer mb-2">
              <span>Kontras Tinggi</span>
              <input type="checkbox" checked={settings.highContrast} onChange={() => toggle('highContrast')} className="h-5 w-5 accent-livora-green-dark" />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span>Mode Sederhana</span>
              <input type="checkbox" checked={settings.simpleMode} onChange={() => toggle('simpleMode')} className="h-5 w-5 accent-livora-green-dark" />
            </label>
          </div>

          {/* Sensor & Motorik */}
          <div className="bg-white p-4 rounded-livora shadow-sm">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><Zap size={18} /> Sensor & Motorik</h3>
            <label className="flex items-center justify-between cursor-pointer mb-2">
              <span>Kurangi Animasi</span>
              <input type="checkbox" checked={settings.reduceMotion} onChange={() => toggle('reduceMotion')} className="h-5 w-5 accent-livora-green-dark" />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span>Tombol Besar (56px)</span>
              <input type="checkbox" checked={settings.bigTargets} onChange={() => toggle('bigTargets')} className="h-5 w-5 accent-livora-green-dark" />
            </label>
          </div>

          <button onClick={reset} className="w-full py-3 bg-livora-honey/30 rounded-livora font-semibold hover:bg-livora-honey/50">
            Reset ke Default
          </button>
        </div>
      </div>
    </div>
  );
}