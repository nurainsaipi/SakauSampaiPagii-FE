import { useAuth } from '../context/AuthContext';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6 text-livora-ink">Profil Kamu</h1>
      
      <Card className="mb-6">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-livora-green/20 rounded-full flex items-center justify-center text-livora-green-dark">
            <User size={48} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-livora-ink">{user.name}</h2>
            <p className="text-livora-ink/70">{user.email}</p>
            <span className="inline-block mt-2 bg-livora-sand px-3 py-1 rounded-full text-sm font-semibold capitalize">
              Peran: {user.role === 'child' ? 'Anak' : user.role === 'parent' ? 'Orang Tua' : 'Guru'}
            </span>
          </div>
        </div>
      </Card>

      <div className="flex gap-4">
        <Button to="/accessibility" variant="secondary" className="flex-1">
          Pengaturan Aksesibilitas
        </Button>
        <Button onClick={handleLogout} variant="outline" className="flex-1 text-red-600 border-red-600 hover:bg-red-50">
          <LogOut size={18} /> Keluar Akun
        </Button>
      </div>
    </div>
  );
}