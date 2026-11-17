import { Package } from 'lucide-react';

export default function SceneCanvas() {
  return (
    <div className="w-full h-64 md:h-96 bg-livora-sand/30 border-4 border-dashed border-livora-tan rounded-livora-xl flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
      <Package size={64} className="text-[#2A4A38] mb-4" strokeWidth={1.75} />
      <h2 className="text-2xl font-bold font-display text-livora-ink">Area Simulasi Virtual</h2>
      <p className="text-livora-ink/70 mt-2 max-w-md">
        Di sini kamu akan berlatih secara visual dan berinteraksi langsung dengan panduan langkahnya.
      </p>
      <span className="mt-4 bg-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm text-livora-green-dark border border-gray-200">
        Segera Hadir
      </span>
    </div>
  );
}
