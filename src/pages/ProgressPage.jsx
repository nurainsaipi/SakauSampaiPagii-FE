import { useProgress } from '../context/ProgressContext';
import { ACHIEVEMENTS } from '../data/achievements';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Star, Trophy, Target, ArrowLeft } from 'lucide-react';

export default function ProgressPage() {
  const { stars } = useProgress();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Button to="/dashboard" variant="ghost" className="!p-2 rounded-full">
          <ArrowLeft size={24} />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-livora-ink">Progres Belajar</h1>
          <p className="text-livora-ink/70">Setiap usaha kecil itu berharga. Teruslah mencoba!</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <Card className="text-center bg-livora-green/10 border border-livora-green/20">
          <Star className="mx-auto text-livora-honey mb-2" size={32} />
          <h2 className="text-3xl font-bold">{stars}</h2>
          <p className="text-sm font-semibold text-livora-ink/70">Total Bintang</p>
        </Card>
        <Card className="text-center bg-livora-sky/10 border border-livora-sky/20">
          <Target className="mx-auto text-livora-sky mb-2" size={32} />
          <h2 className="text-3xl font-bold">0</h2>
          <p className="text-sm font-semibold text-livora-ink/70">Misi Selesai</p>
        </Card>
        <Card className="text-center bg-livora-tan/10 border border-livora-tan/20">
          <Trophy className="mx-auto text-livora-tan mb-2" size={32} />
          <h2 className="text-3xl font-bold">0</h2>
          <p className="text-sm font-semibold text-livora-ink/70">Lencana Diraih</p>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">Koleksi Lencana</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {ACHIEVEMENTS.map(a => (
          <Card key={a.id} className="flex items-center gap-4 opacity-50 grayscale">
            <div className="text-4xl bg-livora-sand w-16 h-16 flex items-center justify-center rounded-full">
              {a.emoji}
            </div>
            <div>
              <h3 className="font-bold">{a.title}</h3>
              <p className="text-sm text-livora-ink/70">{a.description}</p>
              <p className="text-xs font-semibold text-livora-tan mt-1">Belum terbuka</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}