import Card from '../ui/Card';
import { Camera } from 'lucide-react';

export default function CameraPermission() {
  return (
    <Card className="text-center py-12 border-2 border-livora-sand">
      <Camera size={48} className="mx-auto text-livora-ink/50 mb-4" />
      <h2 className="text-xl font-bold">Akses Kamera</h2>
      <p className="text-livora-ink/70 mt-2 max-w-sm mx-auto">
        Fitur interaksi gerakan tangan (Computer Vision) akan segera hadir.
      </p>
      <span className="inline-block mt-4 bg-livora-honey/30 px-4 py-1 rounded-full font-semibold">Segera Hadir</span>
    </Card>
  );
}