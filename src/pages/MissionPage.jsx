import { useParams } from 'react-router-dom';
import HomeHandwashingMission from '../components/missions/Home-HandwashingMission'; // <-- Sesuaikan nama
import ComingSoonMission from '../components/missions/ComingSoonMission';

export default function MissionPage() {
  const { missionId } = useParams();

  if (missionId === 'handwashing') {
    return <HomeHandwashingMission />;
  }

  return <ComingSoonMission title={missionId} />;
}