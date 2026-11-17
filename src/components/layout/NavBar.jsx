import { useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  Coffee, User, ChevronDown, LogOut, 
  Home, BookOpen, Calendar, Heart, Settings, ShieldCheck, ArrowRight, Menu, X, Palette
} from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Beranda', path: '/dashboard', icon: <Home size={18} /> },
    { name: 'Berkreasi', path: '/learning', icon: <Palette size={18} /> },
    { name: 'Jadwal Visual', path: '/schedule', icon: <Calendar size={18} /> },
    { name: 'Sudut Tenang', path: '/calm', icon: <Heart size={18} /> },
  ];

  const landingNav = [
    { label: 'Beranda', to: '/' },
    { label: 'Tentang', hash: '#tentang' },
    { label: 'Fitur', hash: '#fitur' },
    { label: 'Pratinjau Dunia', hash: '#pratinjau' },
    { label: 'Panduan', hash: '#panduan' },
  ];

  // Navigasi ke section LandingPage dari halaman mana pun
  const handleSectionClick = (e, hash) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const elem = document.querySelector(hash);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/' + hash);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF4] border-b-2 border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
        
        {/* KIRI: Logo LIVORA */}
        <Link 
          to={user ? "/dashboard" : "/"} 
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-3 no-underline shrink-0"
        >
          <div className="w-10 h-10 bg-[#2A4A38] rounded-full flex items-center justify-center text-white shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <div className="block">
            <h1 className="font-display text-xl font-bold text-[#2A4A38] leading-none">LIVORA</h1>
            <p className="text-[10px] font-bold text-gray-500 whitespace-nowrap">Ruang Belajar Ramah Sensorik</p>
          </div>
        </Link>

        {user ? (
          // ==================== TAMPILAN SUDAH LOGIN ====================
          <>
            {/* Menu Tengah Desktop */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.path}
                  className={({ isActive }) => `flex items-center gap-2 px-3.5 py-2 rounded-xl font-bold text-sm transition-colors whitespace-nowrap ${
                    isActive ? 'bg-[#2A4A38] text-white shadow-sm' : 'text-gray-600 hover:bg-[#EAF5EC]'
                  }`}
                >
                  {link.icon} {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Aksi Kanan Desktop */}
            <div className="flex items-center gap-2 shrink-0">
              <Link 
                to="/calm" 
                className="hidden sm:flex items-center gap-2 bg-[#FFDF9D] text-[#785A00] px-3.5 py-2 rounded-xl font-bold text-sm border-2 border-[#785A00] shadow-[0_3px_0_0_#785A00] hover:bg-[#F0C04D] active:translate-y-0.5 active:shadow-none transition-all whitespace-nowrap"
              >
                <Coffee size={16} /> <span>Istirahat</span>
              </Link>

              {/* Profile Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setShowProfileMenu(!showProfileMenu)} 
                  className="flex items-center gap-2 bg-white border-2 border-gray-200 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-6 h-6 bg-[#2A4A38] rounded-full flex items-center justify-center text-white text-xs shrink-0">
                    <User size={14} />
                  </div>
                  <span className="font-bold text-gray-700 text-sm hidden sm:block max-w-[100px] truncate">
                    {user?.name?.split(' ')[0]}
                  </span>
                  <ChevronDown size={14} className="text-gray-500 shrink-0" />
                </button>
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border-2 border-gray-100 rounded-xl shadow-lg py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="font-bold text-gray-800 text-sm truncate">{user?.name}</p>
                      <p className="text-xs text-gray-500 capitalize">{user?.role === 'child' ? 'Anak' : user?.role}</p>
                    </div>
                    <Link to="/profile" onClick={() => setShowProfileMenu(false)} className="block w-full text-left px-4 py-2 text-gray-700 font-bold hover:bg-gray-50 flex items-center gap-2 text-sm no-underline">
                      <User size={16} /> Profil Saya
                    </Link>
                    <Link to="/accessibility" onClick={() => setShowProfileMenu(false)} className="block w-full text-left px-4 py-2 text-gray-700 font-bold hover:bg-gray-50 flex items-center gap-2 text-sm no-underline">
                      <Settings size={16} /> Pengaturan Akses
                    </Link>
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-red-600 font-bold hover:bg-red-50 flex items-center gap-2 text-sm border-t border-gray-100 mt-1 pt-2">
                      <LogOut size={16} /> Keluar
                    </button>
                  </div>
                )}
              </div>

              {/* Hamburger Button (Mobile) */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-gray-900 rounded-xl hover:bg-gray-100 border border-gray-200"
                aria-label="Buka menu navigasi"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </>
        ) : (
          // ==================== TAMPILAN BELUM LOGIN ====================
          <>
            {/* Menu Tengah Desktop (Single Row) */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-bold text-gray-600 shrink-0">
              <Link 
                to="/" 
                className={`transition-colors whitespace-nowrap ${location.pathname === '/' && !location.hash ? 'text-[#2A4A38]' : 'hover:text-[#2A4A38]'}`}
              >
                Beranda
              </Link>
              
              <span className="hidden xl:inline-flex items-center gap-1 bg-[#EAF5EC] text-[#2A4A38] px-3 py-1 rounded-full border border-[#2A4A38]/20 text-xs whitespace-nowrap">
                <ShieldCheck size={14} /> Ramah Sensori
              </span>

              <a 
                href="/#tentang" 
                onClick={(e) => handleSectionClick(e, '#tentang')} 
                className="hover:text-[#2A4A38] transition-colors cursor-pointer whitespace-nowrap"
              >
                Tentang
              </a>
              <a 
                href="/#fitur" 
                onClick={(e) => handleSectionClick(e, '#fitur')} 
                className="hover:text-[#2A4A38] transition-colors cursor-pointer whitespace-nowrap"
              >
                Fitur
              </a>
              <a 
                href="/#pratinjau" 
                onClick={(e) => handleSectionClick(e, '#pratinjau')} 
                className="hover:text-[#2A4A38] transition-colors cursor-pointer whitespace-nowrap"
              >
                Pratinjau Dunia
              </a>
              <a 
                href="/#panduan" 
                onClick={(e) => handleSectionClick(e, '#panduan')} 
                className="hover:text-[#2A4A38] transition-colors cursor-pointer whitespace-nowrap"
              >
                Panduan
              </a>
            </nav>
            
            {/* Aksi Kanan Desktop */}
            <div className="flex items-center gap-2 shrink-0">
              <Link 
                to="/login" 
                className={`px-4 py-2 text-sm font-bold rounded-xl transition-colors whitespace-nowrap ${
                  location.pathname === '/login' 
                    ? 'bg-[#EAF5EC] text-[#2A4A38] border-2 border-[#2A4A38]' 
                    : 'text-[#2A4A38] border border-[#2A4A38] hover:bg-[#EAF5EC]'
                }`}
              >
                Masuk
              </Link>
              <Link 
                to="/register" 
                className="flex items-center gap-1.5 bg-[#2A4A38] text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-[0_3px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-0.5 active:shadow-none transition-all whitespace-nowrap"
              >
                <span>Daftar Akun</span>
                <ArrowRight size={14} />
              </Link>

              {/* Hamburger Button (Tablet / Mobile) */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900 rounded-xl hover:bg-gray-100 border border-gray-200 ml-1"
                aria-label="Buka menu navigasi"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </>
        )}

      </div>

      {/* ==================== MOBILE DROPDOWN DRAWER ==================== */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3 shadow-lg animate-[fadeIn_0.2s_ease-out]">
          {user ? (
            // Nav mobile untuk user login
            <div className="space-y-1">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => `flex items-center gap-3 px-4 py-2.5 rounded-xl font-bold text-sm ${
                    isActive ? 'bg-[#2A4A38] text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.icon} {link.name}
                </NavLink>
              ))}
              <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
                <Link 
                  to="/calm" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 bg-[#FFDF9D] text-[#785A00] px-4 py-2.5 rounded-xl font-bold text-sm border border-[#785A00]"
                >
                  <Coffee size={16} /> Istirahat di Sudut Tenang
                </Link>
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-red-600 font-bold px-4 py-2 text-sm hover:bg-red-50 rounded-xl"
                >
                  <LogOut size={16} /> Keluar
                </button>
              </div>
            </div>
          ) : (
            // Nav mobile untuk pengunjung
            <div className="flex flex-col space-y-2">
              <span className="inline-flex items-center gap-1.5 bg-[#EAF5EC] text-[#2A4A38] px-3 py-1.5 rounded-xl text-xs font-bold border border-[#2A4A38]/20 self-start">
                <ShieldCheck size={14} /> Ramah Sensori
              </span>
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-gray-700 font-bold hover:bg-gray-50 rounded-xl text-sm"
              >
                Beranda
              </Link>
              <a 
                href="/#tentang" 
                onClick={(e) => handleSectionClick(e, '#tentang')}
                className="px-3 py-2 text-gray-700 font-bold hover:bg-gray-50 rounded-xl text-sm"
              >
                Tentang LIVORA
              </a>
              <a 
                href="/#fitur" 
                onClick={(e) => handleSectionClick(e, '#fitur')}
                className="px-3 py-2 text-gray-700 font-bold hover:bg-gray-50 rounded-xl text-sm"
              >
                Fitur Ramah Sensori
              </a>
              <a 
                href="/#pratinjau" 
                onClick={(e) => handleSectionClick(e, '#pratinjau')}
                className="px-3 py-2 text-gray-700 font-bold hover:bg-gray-50 rounded-xl text-sm"
              >
                Pratinjau Dunia
              </a>
              <a 
                href="/#panduan" 
                onClick={(e) => handleSectionClick(e, '#panduan')}
                className="px-3 py-2 text-gray-700 font-bold hover:bg-gray-50 rounded-xl text-sm"
              >
                Panduan Pendamping
              </a>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
