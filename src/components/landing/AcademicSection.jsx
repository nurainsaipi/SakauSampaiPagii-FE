import { BookOpen } from 'lucide-react';

export default function AcademicSection() {
  const items = ['Huruf & kosakata dasar', 'Angka & berhitung sederhana', 'Warna & bentuk', 'Mengenal hewan & tumbuhan'];

  return (
    <section aria-labelledby="academic-heading" className="mt-16 grid gap-6 md:grid-cols-2">
      <div>
        <h2 id="academic-heading" className="text-3xl font-bold font-display text-gray-800">Akademik Dasar</h2>
        <p className="mt-2 text-livora-ink/80">Materi dasar yang dikemas singkat, ramah, dan penuh pujian.</p>
        <ul className="mt-4 space-y-2 text-lg">
          {items.map((t) => (
            <li key={t} className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-2 w-2 h-2 rounded-full bg-livora-green shrink-0" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-livora-xl bg-livora-sky/30 p-8 flex flex-col items-center justify-center gap-3 text-center" aria-hidden="true">
        <BookOpen size={64} className="text-[#004A63]" />
        <span className="font-display font-bold text-4xl text-[#004A63] tracking-wider">ABC 123</span>
      </div>
    </section>
  );
}
