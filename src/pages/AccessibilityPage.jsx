import { useAccessibility } from '../context/AccessibilityContext';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Type, Volume2, Contrast, Zap } from 'lucide-react';

export default function AccessibilityPage() {
  const { settings, update, toggle, reset } = useAccessibility();

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-livora-ink">LIVORA ACCESS</h1>
        <p className="text-livora-ink/70 mt-2">Atur tampilan dan suara agar kamu belajar dengan paling nyaman.</p>
      </div>

      <div className="space-y-6">
        {/* Ukuran Teks */}
        <Card>
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4"><Type /> Ukuran Teks</h2>
          {/* Ubah dari flex ke grid agar responsif saat teks membesar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {['normal', 'large', 'xlarge'].map((size) => (
              <button
                key={size}
                onClick={() => update('textSize', size)}
                className={`py-3 rounded-livora font-semibold border-2 transition-all ${
                  settings.textSize === size ? 'border-livora-green-dark bg-livora-green/10' : 'border-livora-sand bg-white hover:bg-livora-sand/50'
                }`}
              >
                {size === 'normal' ? 'Normal' : size === 'large' ? 'Besar' : 'Sangat Besar'}
              </button>
            ))}
          </div>
        </Card>

        {/* Suara */}
        <Card>
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4"><Volume2 /> Suara & Bacaan</h2>
          <label className="flex items-center justify-between p-4 bg-livora-sand/30 rounded-livora cursor-pointer">
            <span className="font-semibold">Aktifkan Suara (Text-to-Speech)</span>
            <input type="checkbox" checked={settings.audioEnabled} onChange={() => toggle('audioEnabled')} className="h-6 w-6 accent-livora-green-dark shrink-0" />
          </label>
        </Card>

        {/* Tampilan */}
        <Card>
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4"><Contrast /> Tampilan Visual</h2>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-4 bg-livora-sand/30 rounded-livora cursor-pointer">
              <span className="font-semibold">Kontras Tinggi</span>
              <input type="checkbox" checked={settings.highContrast} onChange={() => toggle('highContrast')} className="h-6 w-6 accent-livora-green-dark shrink-0" />
            </label>
            <label className="flex items-center justify-between p-4 bg-livora-sand/30 rounded-livora cursor-pointer">
              <span className="font-semibold">Mode Sederhana (Teks Pendek)</span>
              <input type="checkbox" checked={settings.simpleMode} onChange={() => toggle('simpleMode')} className="h-6 w-6 accent-livora-green-dark shrink-0" />
            </label>
          </div>
        </Card>

        {/* Sensor & Motorik */}
        <Card>
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4"><Zap /> Sensor & Motorik</h2>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-4 bg-livora-sand/30 rounded-livora cursor-pointer">
              <span className="font-semibold">Kurangi Animasi (Reduced Motion)</span>
              <input type="checkbox" checked={settings.reduceMotion} onChange={() => toggle('reduceMotion')} className="h-6 w-6 accent-livora-green-dark shrink-0" />
            </label>
            <label className="flex items-center justify-between p-4 bg-livora-sand/30 rounded-livora cursor-pointer">
              <span className="font-semibold">Tombol Besar (Ramah Motorik)</span>
              <input type="checkbox" checked={settings.bigTargets} onChange={() => toggle('bigTargets')} className="h-6 w-6 accent-livora-green-dark shrink-0" />
            </label>
          </div>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button onClick={reset} variant="secondary" className="flex-1">Kembalikan ke Default</Button>
          <Button to="/dashboard" className="flex-1">Simpan & Kembali</Button>
        </div>
      </div>
    </div>
  );
}