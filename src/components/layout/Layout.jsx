import { Outlet } from 'react-router-dom';
import Navbar from './NavBar';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#FAFAF4] flex flex-col font-sans">
      <Navbar />
      
      {/* Container Utama: Dibatasi lebarnya & diberi jarak dalam (padding) */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>
    </div>
  );
}