import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/NavBar';
import { 
  ArrowRight, Volume2, Ear, Clock, CheckCircle2, Shield, 
  MonitorPlay, Moon, ListOrdered, UserCheck, ShieldCheck, Heart, PlayCircle, Sparkles, Settings
} from 'lucide-react';
import Illustration from '../components/ui/Illustration';

export default function LandingPage() {
  const location = useLocation();

  // Scroll otomatis ke section jika ada hash di URL (misal dari /login#tentang)
  useEffect(() => {
    if (location.hash) {
      const elem = document.querySelector(location.hash);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#FAFAF4] font-sans text-[#1A1C19]">
      <Navbar />

      {/* TOP BANNER */}
      <div className="bg-[#F4F4EE] border-b border-gray-200 py-2 px-4 flex justify-between items-center text-xs font-bold text-[#2A4A38]">
        <div className="flex items-center gap-2">
          <Volume2 size={16} /> Fitur Baca Suara (Manual) Siap Digunakan
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-white border border-[#2A4A38] px-4 py-1 rounded-full flex items-center gap-2 hover:bg-gray-50">
            <Volume2 size={14} /> Dengarkan Halaman Ini
          </button>
          <span className="text-gray-500">Tanpa Iklan • Aman untuk Anak</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-24">
        
        {/* HERO SECTION */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-[#EAF5EC] text-[#2A4A38] px-4 py-2 rounded-full font-bold text-sm mb-6 border border-[#2A4A38]/20">
              <Sparkles size={16} /> Ruang Belajar Ramah Sensori & Rutinitas Visual
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight text-[#2A4A38] mb-6">
              Belajar Tenang, Terstruktur, dan Menyenangkan Bersama Kiko.
            </h1>
            <p className="text-lg text-gray-600 font-medium mb-8 max-w-lg">
              LIVORA membantu anak autisme dan disabilitas intelektual ringan (usia 7–12 tahun) mengenali aktivitas harian dan benda di sekitarnya bersama orang tua dan guru.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link to="/register" className="flex items-center gap-2 bg-[#2A4A38] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_6px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-1 active:shadow-none transition-all">
                Masuk ke Akun Belajar <ArrowRight size={20} />
              </Link>
              <Link to="/login" className="flex items-center gap-2 bg-[#FFDF9D] text-[#785A00] px-8 py-4 rounded-xl font-bold text-lg shadow-[0_6px_0_0_#785A00] hover:bg-[#F0C04D] active:translate-y-1 active:shadow-none transition-all border-2 border-[#785A00]">
                <PlayCircle size={20} /> Coba Demo Langsung
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm font-bold text-gray-500">
              <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#2A4A38]"/> Tanpa Batas Waktu</span>
              <span className="flex items-center gap-2"><Ear size={18} className="text-[#2A4A38]"/> Suara Manual (Bebas Kejut)</span>
              <span className="flex items-center gap-2"><UserCheck size={18} className="text-[#2A4A38]"/> Dampingan Bersama</span>
            </div>
          </div>
          
          {/* Mockup Kiko */}
          <div className="relative">
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-xl relative z-10">
              <div className="bg-[#F4F4EE] rounded-2xl p-4 flex gap-4 mb-4">
                <div className="w-10 h-10 bg-[#FFDF9D] rounded-full flex items-center justify-center shrink-0 overflow-hidden">
                  <Illustration name="avatar-child-boy" alt="Kiko" size={36} />
                </div>
                <div>
                  <p className="font-bold text-[#785A00] text-sm">Kiko Menyapa:</p>
                  <p className="text-gray-700 font-medium text-sm">"Halo, teman baru! Ayo belajar pelan-pelan tanpa buru-buru."</p>
                </div>
              </div>
              <div className="w-full h-64 bg-gradient-to-b from-[#C1E8FF] to-[#FAFAF4] rounded-2xl flex flex-col items-center justify-center border border-gray-200 relative overflow-hidden">
                <Illustration name="avatar-child-boy" alt="Kiko" size={96} className="mb-4 z-10" />
                <div className="absolute bottom-4 flex gap-2">
                  <span className="bg-white px-3 py-1 rounded-full text-xs font-bold border border-gray-200 shadow-sm">Karakter Pemandu</span>
                  <span className="bg-[#C6EBD3] px-3 py-1 rounded-full text-xs font-bold border border-[#2A4A38] shadow-sm">Teman Belajar</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-[#EAF5EC] rounded-3xl transform rotate-3 scale-105 -z-10"></div>
          </div>
        </section>

        {/* METODE VISUAL TERPREDIKSI */}
        <section id="tentang" className="text-center pt-8">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Metode Visual Terprediksi</p>
          <h2 className="font-display text-4xl font-bold text-[#2A4A38] mb-12">Urutan Belajar yang Pasti dan Teratur</h2>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-sm relative pt-12">
              <div className="absolute -top-5 left-8 bg-[#2A4A38] text-white px-4 py-2 rounded-full font-bold text-sm shadow-md">1. PERTAMA</div>
              <h3 className="font-display text-2xl font-bold text-gray-800 mb-3">Pilih Materi atau Buka Jadwal</h3>
              <p className="text-gray-600 font-medium leading-relaxed">Anak bersama pendamping memilih satu topik kartu yang diinginkan. Tidak ada daftar panjang yang membingungkan.</p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-sm relative pt-12">
              <div className="absolute -top-5 left-8 bg-[#C1E8FF] text-[#004A63] px-4 py-2 rounded-full font-bold text-sm shadow-md border-2 border-[#004A63]">2. KEDUA</div>
              <h3 className="font-display text-2xl font-bold text-gray-800 mb-3">Ikuti Langkah Visual & Suara</h3>
              <p className="text-gray-600 font-medium leading-relaxed">Setiap tindakan dipecah menjadi satu gambar sederhana. Tombol suara dapat ditekan jika anak ingin mendengar panduan.</p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-sm relative pt-12">
              <div className="absolute -top-5 left-8 bg-[#FFDF9D] text-[#785A00] px-4 py-2 rounded-full font-bold text-sm shadow-md border-2 border-[#785A00]">3. LALU</div>
              <h3 className="font-display text-2xl font-bold text-gray-800 mb-3">Istirahat di Sudut Tenang</h3>
              <p className="text-gray-600 font-medium leading-relaxed">Selesai belajar atau jika merasa lelah, anak dapat langsung menekan tombol Sudut Tenang untuk relaksasi.</p>
            </div>
          </div>
        </section>

        {/* MENGAPA LIVORA */}
        <section id="fitur" className="pt-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Fokus Kebutuhan Sensorik</p>
            <h2 className="font-display text-4xl font-bold text-[#2A4A38] mb-4">Mengapa LIVORA Nyaman dan Aman?</h2>
            <p className="text-gray-500 font-medium max-w-2xl mx-auto">Didesain khusus untuk menurunkan kelelahan kognitif dan sensorik anak tanpa unsur kompetisi atau desakan waktu.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-[#F4F4EE] rounded-2xl flex items-center justify-center text-[#2A4A38] mb-6"><Clock size={28} /></div>
              <h3 className="font-display text-xl font-bold mb-3">Bebas Tekanan Waktu</h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6">Tanpa timer detik yang menakutkan, tanpa hitung mundur, tanpa skor perbandingan, dan tanpa kata hukuman saat keliru.</p>
              <span className="inline-flex items-center gap-2 bg-[#EAF5EC] text-[#2A4A38] px-3 py-1.5 rounded-full text-xs font-bold"><CheckCircle2 size={14} /> Ritme Belajar Sendiri</span>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-[#C1E8FF] rounded-2xl flex items-center justify-center text-[#004A63] mb-6"><Ear size={28} /></div>
              <h3 className="font-display text-xl font-bold mb-3">Kontrol Sensorik Penuh</h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6">Tersedia tombol akses cepat Sudut Tenang kapan saja. Suara alam lembut hanya aktif jika ditekan, serta warna lembut bebas silau.</p>
              <span className="inline-flex items-center gap-2 bg-[#EAF5EC] text-[#2A4A38] px-3 py-1.5 rounded-full text-xs font-bold"><CheckCircle2 size={14} /> Bebas Stimulasi Berlebih</span>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-[#FFDF9D] rounded-2xl flex items-center justify-center text-[#785A00] mb-6"><UserCheck size={28} /></div>
              <h3 className="font-display text-xl font-bold mb-3">Dukungan Pendamping Nyata</h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6">Membantu orang tua dan guru menyusun jadwal visual harian yang sesuai kebutuhan rumah maupun sekolah secara praktis.</p>
              <span className="inline-flex items-center gap-2 bg-[#FFDF9D]/30 text-[#785A00] px-3 py-1.5 rounded-full text-xs font-bold border border-[#785A00]/20"><CheckCircle2 size={14} /> Panduan Konkret</span>
            </div>
          </div>
        </section>

        {/* PRATINJAU DUNIA */}
        <section id="pratinjau" className="pt-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Eksplorasi Konsep Nyata</p>
            <h2 className="font-display text-4xl font-bold text-[#2A4A38]">Pratinjau Dunia Belajar</h2>
            <p className="text-gray-500 font-medium mt-2">Setiap modul mengenalkan lingkungan nyata anak dengan urutan visual yang konsisten.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Dunia Rumah */}
            <div className="bg-white border-2 border-[#2A4A38] rounded-3xl p-5 shadow-[0_6px_0_0_#2A4A38]">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-[#EAF5EC] text-[#2A4A38] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"><CheckCircle2 size={12}/> Siap Dimainkan</span>
                <span className="text-xs font-bold text-gray-500">3 Modul</span>
              </div>
              <div className="h-40 bg-[#F4F4EE] rounded-2xl mb-4 flex items-center justify-center border border-gray-200">
                <Illustration name="world-home" alt="Dunia Rumah" size={72} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">Dunia Rumah</h3>
              <p className="text-sm text-gray-600 font-medium mb-4">Keterampilan mandiri harian seperti cuci tangan 6 langkah sederhana, sikat gigi bersih, dan merapikan pakaian sendiri.</p>
              <Link to="/worlds/home" className="block text-center w-full bg-[#2A4A38] text-white py-3 rounded-xl font-bold shadow-[0_4px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-1 active:shadow-none transition-all">Lihat Contoh Dunia Rumah</Link>
            </div>

            {/* Dunia Sekolah */}
            <div className="bg-white border-2 border-[#2A4A38] rounded-3xl p-5 shadow-[0_6px_0_0_#2A4A38]">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-[#C1E8FF] text-[#004A63] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"><CheckCircle2 size={12}/> Siap Dimainkan</span>
                <span className="text-xs font-bold text-gray-500">6 Benda Kelas</span>
              </div>
              <div className="h-40 bg-[#F4F4EE] rounded-2xl mb-4 flex items-center justify-center border border-gray-200">
                <Illustration name="world-school" alt="Dunia Sekolah" size={72} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">Dunia Sekolah</h3>
              <p className="text-sm text-gray-600 font-medium mb-4">Mengenal 6 benda penting di ruang kelas (tas, buku, pensil, penghapus, meja, kursi) secara bertahap dan teratur.</p>
              <Link to="/worlds/school" className="block text-center w-full bg-[#2A4A38] text-white py-3 rounded-xl font-bold shadow-[0_4px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-1 active:shadow-none transition-all">Lihat Contoh Dunia Sekolah</Link>
            </div>

            {/* Dunia Taman (Segera) */}
            <div className="bg-[#F9F9F9] border-2 border-gray-200 rounded-3xl p-5 opacity-80 relative">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-gray-200 text-gray-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">🔒 Segera Hadir</span>
                <span className="text-xs font-bold text-gray-400">Dalam Pengembangan</span>
              </div>
              <div className="h-40 bg-gray-100 rounded-2xl mb-4 flex items-center justify-center border border-gray-300">
                <Illustration name="world-nature" alt="Dunia Taman" size={72} className="grayscale opacity-50" />
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-500 mb-2">Dunia Taman & Ruang Terbuka</h3>
              <p className="text-sm text-gray-500 font-medium mb-4">Berlatih pemahaman sosial sederhana: antre menunggu giliran ayunan, menyapa ramah, dan membuang sampah pada tempatnya.</p>
              <button disabled className="w-full bg-gray-300 text-gray-500 py-3 rounded-xl font-bold cursor-not-allowed">Modul Belum Dibuka</button>
            </div>
          </div>
        </section>

        {/* FITUR PENDUKUNG */}
        <section>
          <div className="mb-8">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Alat Bantu Harian</p>
            <h2 className="font-display text-4xl font-bold text-[#2A4A38]">Fitur Pendukung Regulasi & Keteraturan</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#EAF5EC] rounded-xl flex items-center justify-center text-[#2A4A38]"><ListOrdered size={24} /></div>
                <div>
                  <h3 className="font-display text-xl font-bold">Jadwal Visual Rutinitas</h3>
                  <p className="text-xs font-bold text-gray-500">Konsep Kelas: Sekarang & Berikutnya</p>
                </div>
              </div>
              <p className="text-gray-600 font-medium mb-6">Membantu anak memahami urutan hari secara konkret. Mengurangi kecemasan terhadap perubahan aktivitas harian lewat kartu tugas yang bisa dipindah mandiri.</p>
              
              <div className="bg-[#FAFAF4] border border-gray-200 rounded-2xl p-4 flex gap-4 items-center">
                <div className="flex-1 bg-white border border-gray-200 p-3 rounded-xl flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-600"/>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400">Sekarang:</p>
                    <p className="text-sm font-bold text-gray-800">Sarapan Pagi</p>
                  </div>
                </div>
                <ArrowRight size={20} className="text-gray-300" />
                <div className="flex-1 bg-white border border-gray-200 p-3 rounded-xl flex items-center gap-2 opacity-60">
                  <Clock size={20} className="text-gray-400"/>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400">Berikutnya:</p>
                    <p className="text-sm font-bold text-gray-800">Memakai Sepatu</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#C1E8FF] rounded-xl flex items-center justify-center text-[#004A63]"><Moon size={24} /></div>
                <div>
                  <h3 className="font-display text-xl font-bold">Sudut Tenang & Latihan Napas</h3>
                  <p className="text-xs font-bold text-gray-500">Tombol Relaksasi Mandiri</p>
                </div>
              </div>
              <p className="text-gray-600 font-medium mb-6">Ruang jeda instan jika anak merasa overwhelmed atau lelah sensorik. Dilengkapi visual lingkaran napas ritmis dan suara rintik hujan lembut tanpa paksaan.</p>
              
              <div className="bg-[#EAF5EC] border border-[#2A4A38]/20 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2A4A38] rounded-full flex items-center justify-center text-white"><Heart size={20}/></div>
                  <div>
                    <p className="text-sm font-bold text-[#2A4A38]">Lingkaran Napas Terpandu</p>
                    <p className="text-xs text-gray-600">Tarik napas lembut... hembuskan perlahan.</p>
                  </div>
                </div>
                <Link to="/calm" className="bg-[#2A4A38] text-white px-4 py-2 rounded-xl font-bold text-sm shadow-[0_3px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-0.5 active:shadow-none transition-all">Coba Tenang</Link>
              </div>
            </div>
          </div>
        </section>

        {/* PANDUAN ORANG TUA */}
        <section id="panduan" className="pt-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center justify-center gap-2"><Shield size={16}/> Transparan, Etis, dan Bertanggung Jawab</p>
            <h2 className="font-display text-4xl font-bold text-[#2A4A38] mb-4">Panduan untuk Orang Tua & Guru</h2>
            <p className="text-gray-500 font-medium max-w-2xl mx-auto">LIVORA dirancang bukan sebagai terapi klinis pengganti, melainkan sarana bantu visual pendukung di rumah dan ruang kelas. Kami menjaga batasan etis digital demi kenyamanan anak.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F4F4EE] rounded-3xl p-8">
              <div className="w-12 h-12 bg-[#2A4A38] rounded-full flex items-center justify-center text-white mb-6"><ShieldCheck size={24} /></div>
              <h3 className="font-display text-xl font-bold mb-3">1. Privasi Terjaga Penuh</h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">Data perkembangan tersimpan aman secara privat. Tidak ada pelacakan komersial, profil perilaku, atau penjualan data anak ke pihak mana pun.</p>
            </div>
            
            <div className="bg-[#F4F4EE] rounded-3xl p-8">
              <div className="w-12 h-12 bg-[#2A4A38] rounded-full flex items-center justify-center text-white mb-6"><MonitorPlay size={24} /></div>
              <h3 className="font-display text-xl font-bold mb-3">2. 100% Bebas Iklan</h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">Tidak ada iklan pop-up, video sponsor, banner pihak ketiga, maupun jejakan pembelian dalam aplikasi yang memicu distraksi dan kecemasan.</p>
            </div>
            
            <div className="bg-[#F4F4EE] rounded-3xl p-8">
              <div className="w-12 h-12 bg-[#2A4A38] rounded-full flex items-center justify-center text-white mb-6"><Clock size={24} /></div>
              <h3 className="font-display text-xl font-bold mb-3">3. Batas Layar Sehat</h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">Menolak fitur adiktif yang membuat anak terus terpaku pada layar. Tombol istirahat mudah dijangkau untuk mengarahkan kembali ke interaksi fisik nyata.</p>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-white border-2 border-[#2A4A38] rounded-3xl p-8 md:p-12 shadow-[0_8px_0_0_#2A4A38] flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <div className="w-full h-64 bg-[#C6EBD3] rounded-2xl border-2 border-[#2A4A38] flex items-center justify-center relative overflow-hidden">
              <Illustration name="world-home" alt="Dunia Rumah & Sekolah" size={100} />
              <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold border border-gray-200 shadow-sm">Kiko siap menemani langkah pertama hari ini</div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="inline-flex items-center gap-2 bg-[#FFDF9D] text-[#785A00] px-4 py-2 rounded-full font-bold text-sm mb-6 border border-[#785A00]/30"><Sparkles size={16}/> Langkah Bersama yang Nyaman</span>
            <h2 className="font-display text-4xl font-bold text-[#2A4A38] mb-4">Siap Memulai Bersama Anak Anda Hari Ini?</h2>
            <p className="text-lg text-gray-600 font-medium mb-8">Coba gratis mode demo tanpa registrasi awal, atau masuk ke akun keluarga/sekolah untuk menyimpan kemajuan visual mandiri.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/register" className="bg-[#2A4A38] text-white px-8 py-3.5 rounded-xl font-bold shadow-[0_5px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-1 active:shadow-none transition-all flex items-center gap-2">
                Masuk Sekarang <ArrowRight size={18}/>
              </Link>
              <Link to="/login" className="bg-[#F4F4EE] text-[#2A4A38] border-2 border-gray-300 px-8 py-3.5 rounded-xl font-bold hover:bg-gray-200 transition-all flex items-center gap-2">
                <PlayCircle size={18}/> Buka Mode Demo
              </Link>
            </div>
            <p className="text-xs text-gray-400 font-bold mt-4">* Tidak memerlukan kartu kredit. Aman, privat, dan dapat dihentikan kapan saja sesuai kesiapan anak.</p>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#F4F4EE] border-t-2 border-gray-200 py-12 px-4 mt-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#2A4A38] rounded-full flex items-center justify-center text-white">
                <Heart size={16} />
              </div>
              <span className="font-display text-xl font-bold text-[#2A4A38]">LIVORA</span>
            </div>
            <p className="text-sm text-gray-600 font-medium mb-4">Ruang belajar ramah sensorik untuk anak usia 7-12 tahun didampingi orang tua, guru, dan terapis.</p>
            <div className="flex items-center gap-2 text-xs font-bold text-[#2A4A38]">
              <ShieldCheck size={16}/> Standar Aksesibilitas Sensorik Teruji
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm font-medium text-gray-600">
              <li><Link to="/" className="hover:text-[#2A4A38]">Beranda</Link></li>
              <li><a href="/#tentang" className="hover:text-[#2A4A38]">Tentang</a></li>
              <li><a href="/#pratinjau" className="hover:text-[#2A4A38]">Pratinjau Dunia</a></li>
              <li><a href="/#panduan" className="hover:text-[#2A4A38]">Panduan Pendamping</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Etika & Keamanan</h4>
            <ul className="space-y-2 text-sm font-medium text-gray-600">
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#2A4A38]"/> Tanpa Iklan</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#2A4A38]"/> Bebas Pelacakan</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#2A4A38]"/> Pendampingan Nyata</li>
            </ul>
            <p className="text-xs text-gray-400 mt-4">Dirancang tanpa janji medis klinis palsu. Fokus pada ruang belajar yang tenang, terstruktur, dan terprediksi.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-300 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-500">
          <div className="flex items-center gap-2">
            <span className="bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm flex items-center">
              <Settings size={14} className="inline mr-1 text-[#2A4A38]" /> Pengaturan Akses
            </span>
            <span>© 2025 LIVORA. Hak cipta dilindungi.</span>
          </div>
          <div className="flex gap-4">
            <span>Pendamping 7-12 Tahun</span>
            <span className="text-[#2A4A38]">WCAG 2.1 Level AA</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
