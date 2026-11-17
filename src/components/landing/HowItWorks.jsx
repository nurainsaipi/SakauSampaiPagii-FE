export default function HowItWorks() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold">Cara Kerja LIVORA</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        <div className="bg-white p-6 rounded-livora shadow-livora-soft">
          <h3 className="font-semibold text-lg">1. Kenali Diri</h3>
          <p className="mt-2 text-livora-ink/80">Pilih preferensi belajar yang paling nyaman.</p>
        </div>
        <div className="bg-white p-6 rounded-livora shadow-livora-soft">
          <h3 className="font-semibold text-lg">2. Jelajahi Dunia</h3>
          <p className="mt-2 text-livora-ink/80">Masuk ke dunia virtual bersama karakter pemandu.</p>
        </div>
        <div className="bg-white p-6 rounded-livora shadow-livora-soft">
          <h3 className="font-semibold text-lg">3. Selesaikan Misi</h3>
          <p className="mt-2 text-livora-ink/80">Latih keterampilan hidup lewat permainan singkat.</p>
        </div>
        <div className="bg-white p-6 rounded-livora shadow-livora-soft">
          <h3 className="font-semibold text-lg">4. Tumbuh Percaya Diri</h3>
          <p className="mt-2 text-livora-ink/80">Rayakan setiap usaha, bukan hanya hasil akhir.</p>
        </div>
      </div>
    </section>
  );
}