import Card from '../ui/Card';
import { useProgress } from '../../context/ProgressContext';
import { Trophy, Star, Target } from 'lucide-react';

export default function ProgressSummary() {
  const { stars } = useProgress();

  return (
    <Card className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="text-livora-honey" size={24} />
          <h2 className="text-xl font-bold">Progres Kamu</h2>
        </div>
        <p className="text-sm text-livora-ink/80 mb-6">
          Setiap usaha itu hebat. Terus berlatih dengan ritme kamu sendiri!
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center mt-auto">
        <div className="bg-livora-sand/50 p-4 rounded-livora flex flex-col items-center">
          <Star className="text-[#FDCB57] fill-[#FDCB57] mb-1" size={28} />
          <div className="text-2xl font-bold">{stars}</div>
          <div className="text-xs font-semibold text-livora-ink/70">Bintang</div>
        </div>
        <div className="bg-livora-sand/50 p-4 rounded-livora flex flex-col items-center">
          <Target className="text-[#004A63] mb-1" size={28} />
          <div className="text-2xl font-bold">0</div>
          <div className="text-xs font-semibold text-livora-ink/70">Misi Selesai</div>
        </div>
      </div>
    </Card>
  );
}
