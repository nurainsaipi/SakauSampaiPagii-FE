import { MISSIONS } from '../../data/missions';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Star } from 'lucide-react';

export default function DailyMissionWidget() {
  const dailyMission = MISSIONS[0]; // Ambil misi pertama untuk contoh

  if (!dailyMission) return null;

  return (
    <Card className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Star className="text-livora-honey" size={24} />
        <h2 className="text-xl font-bold">Misi Hari Ini</h2>
      </div>
      
      <div className="flex items-start gap-4 flex-1">
        <div className="text-4xl bg-livora-sand rounded-full p-3">{dailyMission.emoji}</div>
        <div>
          <h3 className="font-semibold text-lg">{dailyMission.title}</h3>
          <p className="text-sm text-livora-ink/70 mb-2">{dailyMission.description}</p>
          <p className="text-xs font-semibold text-livora-green-dark">{dailyMission.steps} langkah • {dailyMission.duration}</p>
        </div>
      </div>

      <Button to={`/mission/${dailyMission.id}`} className="mt-4 w-full" variant="secondary">
        Mulai Misi
      </Button>
    </Card>
  );
}