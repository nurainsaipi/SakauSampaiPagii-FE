import Illustration from '../ui/Illustration';

export default function WorldPreview() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold font-display text-gray-800">Enam Dunia untuk Dijelajahi</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="bg-white p-6 rounded-livora shadow-livora-soft border border-gray-100 flex flex-col items-start gap-2">
          <div className="flex items-center gap-3">
            <Illustration name="world-home" alt="Dunia Rumah" size={36} />
            <h3 className="text-xl font-semibold text-gray-800">Dunia Rumah</h3>
          </div>
          <p className="mt-1 text-livora-ink/80 text-sm">Keterampilan rumah sehari-hari.</p>
        </div>
        <div className="bg-white p-6 rounded-livora shadow-livora-soft border border-gray-100 flex flex-col items-start gap-2">
          <div className="flex items-center gap-3">
            <Illustration name="world-school" alt="Dunia Sekolah" size={36} />
            <h3 className="text-xl font-semibold text-gray-800">Dunia Sekolah</h3>
          </div>
          <p className="mt-1 text-livora-ink/80 text-sm">Angka, huruf, warna, bentuk.</p>
        </div>
        <div className="bg-white p-6 rounded-livora shadow-livora-soft border border-gray-100 flex flex-col items-start gap-2">
          <div className="flex items-center gap-3">
            <Illustration name="world-nature" alt="Dunia Alam" size={36} />
            <h3 className="text-xl font-semibold text-gray-800">Dunia Alam</h3>
          </div>
          <p className="mt-1 text-livora-ink/80 text-sm">Hewan, tumbuhan, lingkungan.</p>
        </div>
      </div>
    </section>
  );
}
