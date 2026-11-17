import { WORLDS } from '../data/worlds';
import WorldCard from '../components/dashboard/WorldCard';

export default function WorldsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-livora-ink">Pilih Dunia</h1>
        <p className="text-livora-ink/70 mt-2">Jelajahi tempat baru dan pelajari keterampilan seru di setiap dunianya.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {WORLDS.map((world) => (
          <WorldCard key={world.id} world={world} />
        ))}
      </div>
    </div>
  );
}