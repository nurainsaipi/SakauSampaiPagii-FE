import Card from '../ui/Card';
import Button from '../ui/Button';
import SpeakButton from '../ui/SpeakButton';
import StepList from './StepList';

export default function MissionPanel({ 
  title = "Tantangan Cuci Tangan", 
  instruction = "Ikuti arahan pemandu untuk menyelesaikan misi.",
  steps = ["Basahi tangan", "Ambil sabun", "Gosok tangan", "Bilas", "Keringkan"],
  currentStep = 0
}) {
  return (
    <Card className="h-full flex flex-col">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h1 className="text-2xl font-bold text-livora-green-dark">{title}</h1>
        <SpeakButton text={instruction} />
      </div>
      
      <p className="text-livora-ink/80 mb-4 bg-livora-sand/50 p-3 rounded-livora italic">
        "{instruction}"
      </p>

      <div className="flex-1 overflow-y-auto">
        <StepList steps={steps} currentStep={currentStep} />
      </div>

      <div className="mt-6 pt-4 border-t border-livora-sand flex gap-2">
        <Button variant="secondary" className="flex-1" onClick={() => alert("Ini tombol petunjuk (belum aktif)")}>
          Butuh Petunjuk?
        </Button>
        <Button className="flex-1" onClick={() => alert("Ini tombol kontrol (belum aktif)")}>
          Aksi Selanjutnya
        </Button>
      </div>
    </Card>
  );
}