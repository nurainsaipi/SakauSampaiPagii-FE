import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { Sprout } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-livora-xl bg-livora-sand/50 p-6 md:p-12">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <p className="inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold text-livora-green-dark shadow-livora-soft">
            Platform Belajar Inklusif
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl font-display">
            Jelajahi Dunia, Belajar Sambil Bermain, Tumbuh Percaya Diri
          </h1>
          <p className="mt-4 text-lg text-livora-ink/85">
            LIVORA menemani anak berkebutuhan khusus belajar keterampilan hidup lewat dunia virtual yang ramah.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button as={Link} to="/register" variant="primary" size="lg">Mulai Belajar</Button>
            <Button as={Link} to="/login" variant="secondary" size="lg">Jelajahi LIVORA</Button>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-sm">
          <div className="absolute inset-0 rounded-full bg-livora-green/20" aria-hidden="true" />
          <div className="absolute inset-12 grid place-items-center rounded-full bg-livora-green text-white shadow-livora-lg" aria-hidden="true">
            <Sprout size={72} strokeWidth={2.5} className="text-[#C6EBD3]" />
          </div>
        </div>
      </div>
    </section>
  );
}
