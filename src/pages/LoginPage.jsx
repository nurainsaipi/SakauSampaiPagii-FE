import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const { login, error } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = login(form);
    if (res.ok) {
      // Jika berhasil login, arahkan ke dashboard
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-livora-cream flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-livora-green-dark mb-2">Selamat Datang!</h1>
            <p className="text-livora-ink/70">
              Belum punya akun? <Link to="/register" className="text-livora-green-dark font-semibold hover:underline">Daftar di sini</Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-semibold mb-2">Email atau Username</label>
              <input 
                type="text" 
                required 
                value={form.email} 
                onChange={e => setForm({...form, email: e.target.value})} 
                className="w-full border-2 border-livora-sand p-3 rounded-livora focus:border-livora-green-dark focus:ring-0 outline-none bg-white transition-colors" 
                placeholder="Masukkan email atau 'Admin'"
              />
            </div>
            
            <div>
              <label className="block font-semibold mb-2">Kata Sandi</label>
              <div className="relative">
                <input 
                  type={showPass ? "text" : "password"} 
                  required 
                  value={form.password} 
                  onChange={e => setForm({...form, password: e.target.value})} 
                  className="w-full border-2 border-livora-sand p-3 rounded-livora focus:border-livora-green-dark focus:ring-0 outline-none bg-white transition-colors pr-12" 
                  placeholder="Masukkan kata sandi"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-livora-ink/50 hover:text-livora-ink transition-colors font-semibold text-sm"
                >
                  {showPass ? 'Sembunyikan' : 'Lihat'}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-livora text-sm font-semibold">
                {error}
              </div>
            )}

            <Button type="submit" size="lg" className="w-full mt-2">
              Masuk ke LIVORA
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-livora-sand text-center">
            <p className="text-sm text-livora-ink/50 bg-livora-sand/30 p-3 rounded-lg">
              <strong>Info Testing:</strong><br/>
              Username: <code>Admin</code> | Sandi: <code>12345</code>
            </p>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
}