import { useState, useRef, useEffect } from 'react';
import { 
  Palette, Eraser, RotateCcw, Trash2, Download, Volume2, 
  Sparkles, Star, Heart, Sun, Flower2, Circle, Check, RefreshCw
} from 'lucide-react';
import { useSpeech } from '../hooks/useSpeech';

export default function LearningHubPage() {
  const { speak } = useSpeech();
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Drawing state
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState('brush'); // 'brush' | 'eraser' | 'stamp'
  const [color, setColor] = useState('#2A4A38'); // LIVORA primary
  const [brushSize, setBrushSize] = useState(12);
  const [stamp, setStamp] = useState('star'); // 'star' | 'heart' | 'sun' | 'flower'
  const [history, setHistory] = useState([]);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  // Palet Warna Ramah Sensori & Ceria
  const colors = [
    { name: 'Hijau Daun', hex: '#2A4A38' },
    { name: 'Biru Tenang', hex: '#004A63' },
    { name: 'Biru Langit', hex: '#38BDF8' },
    { name: 'Kuning Hangat', hex: '#F59E0B' },
    { name: 'Oranye Jeruk', hex: '#F97316' },
    { name: 'Merah Ceria', hex: '#EF4444' },
    { name: 'Ungu Anggur', hex: '#8B5CF6' },
    { name: 'Cokelat Kayu', hex: '#78350F' },
    { name: 'Hitam Pensil', hex: '#1A1C19' },
  ];

  // Ukuran Kuas
  const brushSizes = [
    { label: 'Tipis', size: 6, dotSize: 8 },
    { label: 'Sedang', size: 14, dotSize: 14 },
    { label: 'Tebal', size: 26, dotSize: 22 },
  ];

  // Stempel Bentuk
  const stamps = [
    { id: 'star', name: 'Bintang', icon: <Star size={20} /> },
    { id: 'heart', name: 'Hati', icon: <Heart size={20} /> },
    { id: 'sun', name: 'Matahari', icon: <Sun size={20} /> },
    { id: 'flower', name: 'Bunga', icon: <Flower2 size={20} /> },
  ];

  // Inisialisasi Kanvas Putih
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    // Set resolusi internal kanvas
    canvas.width = 900;
    canvas.height = 550;

    // Background putih
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Simpan snapshot awal ke history
    saveState();
  }, []);

  // Simpan langkah untuk Undo
  const saveState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setHistory(prev => [...prev.slice(-15), imageData]); // Simpan max 15 langkah
  };

  // Undo (Batalkan Coretan Terakhir)
  const handleUndo = () => {
    if (history.length <= 1) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const newHistory = [...history];
    newHistory.pop(); // buang state sekarang
    const previousState = newHistory[newHistory.length - 1];
    ctx.putImageData(previousState, 0, 0);
    setHistory(newHistory);
  };

  // Bersihkan Kanvas
  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    saveState();
    setShowClearConfirm(false);
  };

  // Unduh Gambar Hasil Karya
  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `karyaku-livora-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    speak('Karya gambarmu berhasil disimpan!');
  };

  // Koordinat relatif kanvas (menangani scaling CSS & event Mouse/Touch)
  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    const clientY = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 0);

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  };

  // Menggambar Bentuk Stempel
  const drawStamp = (ctx, x, y, stampType, stampColor) => {
    ctx.save();
    ctx.fillStyle = stampColor;
    ctx.strokeStyle = stampColor;
    ctx.lineWidth = 3;

    if (stampType === 'star') {
      const spikes = 5;
      const outerRadius = 26;
      const innerRadius = 13;
      let rot = (Math.PI / 2) * 3;
      let step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(x, y - outerRadius);
      for (let i = 0; i < spikes; i++) {
        let sx = x + Math.cos(rot) * outerRadius;
        let sy = y + Math.sin(rot) * outerRadius;
        ctx.lineTo(sx, sy);
        rot += step;

        sx = x + Math.cos(rot) * innerRadius;
        sy = y + Math.sin(rot) * innerRadius;
        ctx.lineTo(sx, sy);
        rot += step;
      }
      ctx.lineTo(x, y - outerRadius);
      ctx.closePath();
      ctx.fill();
    } else if (stampType === 'heart') {
      const size = 18;
      ctx.beginPath();
      ctx.moveTo(x, y + size / 4);
      ctx.quadraticCurveTo(x, y, x - size, y);
      ctx.quadraticCurveTo(x - size * 1.5, y + size * 0.75, x, y + size * 1.5);
      ctx.quadraticCurveTo(x + size * 1.5, y + size * 0.75, x + size, y);
      ctx.quadraticCurveTo(x, y, x, y + size / 4);
      ctx.fill();
    } else if (stampType === 'sun') {
      ctx.beginPath();
      ctx.arc(x, y, 16, 0, Math.PI * 2);
      ctx.fill();
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4;
        ctx.beginPath();
        ctx.moveTo(x + Math.cos(angle) * 20, y + Math.sin(angle) * 20);
        ctx.lineTo(x + Math.cos(angle) * 28, y + Math.sin(angle) * 28);
        ctx.stroke();
      }
    } else if (stampType === 'flower') {
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        ctx.beginPath();
        ctx.arc(x + Math.cos(angle) * 14, y + Math.sin(angle) * 14, 10, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.beginPath();
      ctx.arc(x, y, 9, 0, Math.PI * 2);
      ctx.fillStyle = '#FFDF9D';
      ctx.fill();
    }

    ctx.restore();
  };

  // Event Handlers Menggambar
  const startDrawing = (e) => {
    e.preventDefault();
    const { x, y } = getCoordinates(e);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    if (tool === 'stamp') {
      drawStamp(ctx, x, y, stamp, color);
      saveState();
      return;
    }

    setIsDrawing(true);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = brushSize;
    ctx.strokeStyle = tool === 'eraser' ? '#FFFFFF' : color;
  };

  const draw = (e) => {
    if (!isDrawing || tool === 'stamp') return;
    e.preventDefault();
    const { x, y } = getCoordinates(e);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      saveState();
    }
  };

  return (
    <div className="space-y-6 pb-20 font-sans">
      
      {/* 1. HEADER KANVAS KREASI */}
      <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-[#C6EBD3] text-[#2A4A38] rounded-2xl border-2 border-[#2A4A38] flex items-center justify-center shrink-0">
            <Palette size={28} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#785A00] bg-[#FFDF9D] px-2.5 py-0.5 rounded-full border border-[#785A00]/20">
                Ruang Bebas Anak
              </span>
            </div>
            <h1 className="font-display text-3xl font-bold text-gray-800 mt-1">Kanvas Berkreasi</h1>
            <p className="text-sm font-medium text-gray-500">Pilih warna sesukamu dan gambarlah dengan tenang tanpa takut salah.</p>
          </div>
        </div>

        {/* Aksi Cepat Header */}
        <div className="flex items-center gap-2 flex-wrap justify-end">
          <button 
            onClick={() => speak('Selamat datang di Kanvas Berkreasi! Pilih warnamu dan gambarlah dengan bebas.')}
            className="flex items-center gap-2 bg-[#C1E8FF] text-[#004A63] border-2 border-[#004A63] px-4 py-2.5 rounded-xl font-bold text-sm shadow-[0_3px_0_0_#004A63] hover:bg-[#A0DCFD] active:translate-y-0.5 active:shadow-none transition-all"
            aria-label="Dengarkan panduan suara"
          >
            <Volume2 size={18} /> Suara Panduan
          </button>
          <button 
            onClick={handleDownload}
            className="flex items-center gap-2 bg-[#2A4A38] text-white border-2 border-[#1A1C19] px-5 py-2.5 rounded-xl font-bold text-sm shadow-[0_3px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-0.5 active:shadow-none transition-all"
          >
            <Download size={18} /> Simpan Gambar
          </button>
        </div>
      </div>

      {/* 2. AREA UTAMA KANVAS & TOOLBAR */}
      <div className="bg-white border-2 border-gray-200 rounded-3xl p-4 md:p-6 shadow-sm space-y-4">
        
        {/* TOOLBAR ATAS: Alat Gambar, Kuas, Stempel, & Riwayat */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b-2 border-gray-100">
          
          {/* Kelompok 1: Pilihan Alat (Kuas / Penghapus / Stempel) */}
          <div className="flex items-center gap-2 bg-[#FAFAF4] p-1.5 rounded-2xl border border-gray-200">
            <button
              onClick={() => setTool('brush')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                tool === 'brush' 
                  ? 'bg-[#2A4A38] text-white shadow-sm' 
                  : 'text-gray-600 hover:bg-white'
              }`}
            >
              <Palette size={18} /> Kuas
            </button>
            <button
              onClick={() => setTool('eraser')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                tool === 'eraser' 
                  ? 'bg-[#2A4A38] text-white shadow-sm' 
                  : 'text-gray-600 hover:bg-white'
              }`}
            >
              <Eraser size={18} /> Penghapus
            </button>
            <button
              onClick={() => setTool('stamp')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                tool === 'stamp' 
                  ? 'bg-[#2A4A38] text-white shadow-sm' 
                  : 'text-gray-600 hover:bg-white'
              }`}
            >
              <Sparkles size={18} /> Stempel
            </button>
          </div>

          {/* Kelompok 2: Pilihan Ukuran Kuas (Jika pakai Kuas atau Penghapus) */}
          {tool !== 'stamp' && (
            <div className="flex items-center gap-2 bg-[#FAFAF4] px-3 py-1.5 rounded-2xl border border-gray-200">
              <span className="text-xs font-bold text-gray-500 mr-1">Ukuran:</span>
              {brushSizes.map((b) => (
                <button
                  key={b.size}
                  onClick={() => setBrushSize(b.size)}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold transition-all ${
                    brushSize === b.size 
                      ? 'bg-white border-2 border-[#2A4A38] text-[#2A4A38] shadow-sm' 
                      : 'text-gray-400 hover:bg-white'
                  }`}
                  aria-label={`Ukuran ${b.label}`}
                >
                  <div 
                    className="rounded-full bg-current" 
                    style={{ width: b.dotSize, height: b.dotSize }} 
                  />
                </button>
              ))}
            </div>
          )}

          {/* Kelompok 2B: Pilihan Bentuk Stempel (Jika pakai Stempel) */}
          {tool === 'stamp' && (
            <div className="flex items-center gap-1.5 bg-[#FAFAF4] px-3 py-1.5 rounded-2xl border border-gray-200">
              <span className="text-xs font-bold text-gray-500 mr-1">Bentuk:</span>
              {stamps.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setStamp(s.id)}
                  className={`p-2 rounded-xl transition-all ${
                    stamp === s.id 
                      ? 'bg-[#FFDF9D] text-[#785A00] border-2 border-[#785A00] shadow-sm' 
                      : 'text-gray-500 hover:bg-white'
                  }`}
                  aria-label={s.name}
                  title={s.name}
                >
                  {s.icon}
                </button>
              ))}
            </div>
          )}

          {/* Kelompok 3: Aksi Undo & Bersihkan */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleUndo}
              disabled={history.length <= 1}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold text-sm border-2 transition-all ${
                history.length > 1 
                  ? 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50' 
                  : 'border-gray-200 text-gray-300 bg-gray-50 cursor-not-allowed'
              }`}
              title="Batalkan goresan terakhir"
            >
              <RotateCcw size={16} /> Undo
            </button>

            {showClearConfirm ? (
              <div className="flex items-center gap-1 bg-red-50 p-1 rounded-xl border border-red-200">
                <button
                  onClick={handleClear}
                  className="bg-red-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-red-700 transition-colors"
                >
                  Ya, Hapus
                </button>
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="bg-white text-gray-600 px-3 py-1.5 rounded-lg text-xs font-bold border border-gray-200 hover:bg-gray-50"
                >
                  Batal
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowClearConfirm(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold text-sm border-2 border-red-200 text-red-600 bg-white hover:bg-red-50 transition-colors"
                title="Hapus seluruh kanvas"
              >
                <Trash2 size={16} /> Bersihkan
              </button>
            )}
          </div>

        </div>

        {/* PALET WARNA (Kotak Warna Besar & Mudah Ditekan) */}
        <div className="flex items-center gap-2 overflow-x-auto py-2 scrollbar-none">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-2 shrink-0">Warna:</span>
          {colors.map((c) => {
            const isSelected = color === c.hex && tool !== 'eraser';
            return (
              <button
                key={c.hex}
                onClick={() => {
                  setColor(c.hex);
                  if (tool === 'eraser') setTool('brush');
                }}
                className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all shrink-0 ${
                  isSelected 
                    ? 'scale-110 shadow-[0_4px_10px_rgba(0,0,0,0.15)] ring-4 ring-[#2A4A38]/30 border-2 border-white' 
                    : 'hover:scale-105 border-2 border-gray-200 shadow-sm'
                }`}
                style={{ backgroundColor: c.hex }}
                aria-label={`Pilih warna ${c.name}`}
                title={c.name}
              >
                {isSelected && (
                  <Check size={20} className={c.hex === '#FFFFFF' ? 'text-black' : 'text-white'} strokeWidth={3} />
                )}
              </button>
            );
          })}
        </div>

        {/* KANVAS GAMBAR */}
        <div 
          ref={containerRef}
          className="relative w-full rounded-2xl border-4 border-gray-200 bg-white shadow-inner overflow-hidden cursor-crosshair"
          style={{ minHeight: '480px', touchAction: 'none' }}
        >
          <canvas
            ref={canvasRef}
            onPointerDown={startDrawing}
            onPointerMove={draw}
            onPointerUp={stopDrawing}
            onPointerLeave={stopDrawing}
            className="w-full h-full block"
            style={{ touchAction: 'none' }}
          />

          {/* Indikator Tool di Pojok Kanvas */}
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-200 text-xs font-bold text-gray-600 flex items-center gap-2 shadow-sm pointer-events-none">
            {tool === 'brush' && (
              <>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                <span>Kuas Menggambar</span>
              </>
            )}
            {tool === 'eraser' && (
              <>
                <Eraser size={14} className="text-gray-500" />
                <span>Penghapus Aktif</span>
              </>
            )}
            {tool === 'stamp' && (
              <>
                <Sparkles size={14} className="text-[#F59E0B]" />
                <span>Sentuh kanvas untuk mencetak {stamp}</span>
              </>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
