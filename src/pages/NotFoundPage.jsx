import Button from '../components/ui/Button';
import { Compass } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <Compass size={84} className="text-[#2A4A38] mb-6 stroke-[1.5]" />
      <h1 className="text-4xl font-bold font-display text-livora-ink mb-2">Tersesat, ya?</h1>
      <p className="text-livora-ink/70 mb-8 max-w-md">
        Halaman yang kamu cari tidak ditemukan. Yuk, kembali ke tempat yang aman.
      </p>
      <Button to="/" size="lg">Kembali ke Beranda</Button>
    </div>
  );
}
