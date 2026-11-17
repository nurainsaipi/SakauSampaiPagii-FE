import { useParams } from 'react-router-dom';
import ComingSoon from '../components/ui/ComingSoon';

export default function ActivityPage() {
  const { activityId } = useParams();
  return (
    <ComingSoon 
      title="Aktivitas Belajar" 
      description={`Aktivitas "${activityId}" sedang dikembangkan. Nantikan permainan seru di sini!`} 
    />
  );
}