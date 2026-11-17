import { useParams } from 'react-router-dom';
import HomeWorldPage from './worlds/HomeWorldPage';
import SchoolWorldPage from './worlds/SchoolWorldPage';
import ComingSoon from '../components/ui/ComingSoon';

export default function WorldDetailPage() {
  const { worldId } = useParams();

  // Melempar ke halaman yang sesuai
  if (worldId === 'home') return <HomeWorldPage />;
  if (worldId === 'school') return <SchoolWorldPage />;

  // Jika dunia belum dibuat
  return (
    <div className="min-h-screen bg-[#FAFAF4] flex items-center justify-center p-4">
      <ComingSoon title="Dunia Segera Hadir" description="Dunia ini sedang dibangun. Nantikan ya!" />
    </div>
  );
}