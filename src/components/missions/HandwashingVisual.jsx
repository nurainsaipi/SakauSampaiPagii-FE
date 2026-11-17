import { useState } from 'react';
import { Play, Pause, Sparkles } from 'lucide-react';

/**
 * HandwashingVisual - Animasi interaktif gerakan cuci tangan ramah sensori.
 * Menampilkan:
 * 1. 'air'  : Keran air mengalir, kedua tangan bergerak saling mengusap & terguyur air beserta percikan air.
 * 2. 'sabun': Kedua tangan saling menggosok dengan busa sabun putih berlimpah yang mekar & bergerak.
 * 3. 'kering': Handuk lembut menyeka kedua tangan hingga bersih bersinar dengan kerlipan bintang.
 */
export default function HandwashingVisual({ step = 'air' }) {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="relative w-full h-[280px] md:h-[320px] rounded-2xl overflow-hidden flex flex-col items-center justify-center select-none">
      {/* INLINE CSS KEYFRAMES */}
      <style>{`
        @keyframes waterFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -40; }
        }
        @keyframes dropFall1 {
          0% { transform: translateY(0); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translateY(70px); opacity: 0; }
        }
        @keyframes dropFall2 {
          0% { transform: translateY(0); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: translateY(85px); opacity: 0; }
        }
        @keyframes rubLeftHand {
          0%, 100% { transform: translate(0px, 0px) rotate(-3deg); }
          50% { transform: translate(14px, -10px) rotate(4deg); }
        }
        @keyframes rubRightHand {
          0%, 100% { transform: translate(0px, 0px) rotate(3deg); }
          50% { transform: translate(-14px, 10px) rotate(-4deg); }
        }
        @keyframes waterSplash1 {
          0%, 100% { transform: translate(0, 0) scale(0.6); opacity: 0.2; }
          50% { transform: translate(-12px, -8px) scale(1.2); opacity: 0.9; }
        }
        @keyframes waterSplash2 {
          0%, 100% { transform: translate(0, 0) scale(0.6); opacity: 0.2; }
          50% { transform: translate(14px, -6px) scale(1.1); opacity: 0.9; }
        }
        @keyframes soapBubbleFloat {
          0%, 100% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.18) translateY(-6px); }
        }
        @keyframes soapBubbleRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes towelWipe {
          0%, 100% { transform: translate(-15px, -5px) rotate(-4deg); }
          50% { transform: translate(15px, 8px) rotate(4deg); }
        }
        @keyframes sparkleTwinkle {
          0%, 100% { transform: scale(0.7); opacity: 0.4; }
          50% { transform: scale(1.25); opacity: 1; }
        }
        @keyframes rippleExpand {
          0% { r: 12; opacity: 0.8; }
          100% { r: 38; opacity: 0; }
        }

        .anim-active .water-stream {
          animation: waterFlow 0.8s linear infinite;
        }
        .anim-active .drop-1 {
          animation: dropFall1 0.9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .anim-active .drop-2 {
          animation: dropFall2 1.1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s infinite;
        }
        .anim-active .drop-3 {
          animation: dropFall1 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s infinite;
        }
        .anim-active .hand-left-rub {
          animation: rubLeftHand 1.6s ease-in-out infinite;
          transform-origin: 150px 220px;
        }
        .anim-active .hand-right-rub {
          animation: rubRightHand 1.6s ease-in-out infinite;
          transform-origin: 250px 220px;
        }
        .anim-active .splash-1 {
          animation: waterSplash1 1.6s ease-in-out infinite;
        }
        .anim-active .splash-2 {
          animation: waterSplash2 1.6s ease-in-out infinite;
        }
        .anim-active .bubble-pulse {
          animation: soapBubbleFloat 2s ease-in-out infinite;
        }
        .anim-active .bubble-spin {
          animation: soapBubbleRotate 8s linear infinite;
          transform-origin: 200px 180px;
        }
        .anim-active .towel-anim {
          animation: towelWipe 2.2s ease-in-out infinite;
          transform-origin: 200px 180px;
        }
        .anim-active .sparkle-anim {
          animation: sparkleTwinkle 1.5s ease-in-out infinite;
        }
        .anim-active .ripple-anim {
          animation: rippleExpand 1.6s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .anim-active * {
            animation: none !important;
          }
        }
      `}</style>

      {/* KANVAS ILUSTRASI SVG */}
      <svg 
        viewBox="0 0 400 300" 
        className={`w-full h-full max-h-[300px] ${isPlaying ? 'anim-active' : ''}`}
        aria-label="Animasi gerakan cuci tangan"
      >
        <defs>
          {/* Gradien Aliran Air */}
          <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7DD3FC" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#0284C7" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0369A1" stopOpacity="0.95" />
          </linearGradient>

          {/* Gradien Tangan */}
          <linearGradient id="skinGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FED7AA" />
            <stop offset="100%" stopColor="#FDBA74" />
          </linearGradient>
          <linearGradient id="skinGradRight" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FED7AA" />
            <stop offset="100%" stopColor="#FB923C" />
          </linearGradient>

          {/* Gradien Busa Sabun */}
          <radialGradient id="soapGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#E0F2FE" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.8" />
          </radialGradient>

          {/* Gradien Handuk */}
          <linearGradient id="towelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="50%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#EAB308" />
          </linearGradient>

          {/* Shadow lembut */}
          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* ======================================================== */}
        {/* BAGIAN 1: BASAHI TANGAN (AIR MENGALIR + TANGAN MENGUSAP) */}
        {/* ======================================================== */}
        {step === 'air' && (
          <g>
            {/* 1A. KERAN AIR (FAUCET) DI ATAS */}
            <g id="faucet" filter="url(#softShadow)">
              {/* Pipa horizontal */}
              <rect x="182" y="10" width="36" height="22" rx="4" fill="#64748B" />
              <rect x="186" y="14" width="28" height="14" rx="2" fill="#94A3B8" />
              {/* Leher keran lengkung ke bawah */}
              <path 
                d="M185 24 Q185 68 190 74 L210 74 Q215 68 215 24 Z" 
                fill="#475569" 
              />
              <path 
                d="M189 24 Q189 65 193 70 L207 70 Q211 65 211 24 Z" 
                fill="#94A3B8" 
              />
              {/* Mulut keran (Nozzle) */}
              <rect x="187" y="70" width="26" height="8" rx="3" fill="#334155" />
              <ellipse cx="200" cy="78" rx="10" ry="3" fill="#0284C7" />
            </g>

            {/* 1B. CURAHAN AIR DERAS DARI KERAN MENUJU TANGAN */}
            <g id="water-stream-group">
              {/* Kolom air utama */}
              <path
                d="M192 78 Q194 130 196 175 L204 175 Q206 130 208 78 Z"
                fill="url(#waterGrad)"
                opacity="0.85"
              />
              {/* Garis alur air bergelombang (Animated dash) */}
              <line 
                x1="197" y1="78" x2="197" y2="178" 
                stroke="#FFFFFF" 
                strokeWidth="2.5" 
                strokeDasharray="8 6" 
                strokeLinecap="round"
                className="water-stream"
                opacity="0.8" 
              />
              <line 
                x1="203" y1="78" x2="203" y2="178" 
                stroke="#E0F2FE" 
                strokeWidth="2" 
                strokeDasharray="6 8" 
                strokeLinecap="round"
                className="water-stream"
                opacity="0.9" 
              />

              {/* Tetesan air yang jatuh bergantian */}
              <circle cx="196" cy="85" r="3.5" fill="#38BDF8" className="drop-1" />
              <circle cx="204" cy="90" r="4" fill="#0284C7" className="drop-2" />
              <circle cx="200" cy="98" r="3" fill="#BAE6FD" className="drop-3" />
            </g>

            {/* 1C. KEDUA TANGAN SALING MENGUSAP DI BAWAH AIR */}
            <g id="rubbing-hands-group">
              
              {/* TANGAN KIRI (Maju-Mundur mengusap) */}
              <g className="hand-left-rub" filter="url(#softShadow)">
                {/* Lengan/Pergelangan Kiri */}
                <path 
                  d="M100 280 L140 215 L165 225 L120 290 Z" 
                  fill="url(#skinGradLeft)" 
                  stroke="#EA580C" 
                  strokeWidth="2.5" 
                  strokeLinejoin="round" 
                />
                {/* Telapak & Ibu Jari Kiri */}
                <path 
                  d="M140 215 C135 195 155 175 175 168 C185 165 192 172 188 185 C185 195 178 202 170 210 Z" 
                  fill="url(#skinGradLeft)" 
                  stroke="#EA580C" 
                  strokeWidth="2.5" 
                />
                {/* Jari-Jemari Kiri (Mengatup & Mengusap ke tengah) */}
                <path 
                  d="M172 170 C182 150 196 150 205 162 C210 168 205 178 195 182 L165 225 Z" 
                  fill="url(#skinGradLeft)" 
                  stroke="#EA580C" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                />
                {/* Garis lekukan jari telapak */}
                <path d="M165 185 Q178 178 190 184" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
                <path d="M160 198 Q174 192 184 200" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
              </g>

              {/* TANGAN KANAN (Berlawanan arah mengusap) */}
              <g className="hand-right-rub" filter="url(#softShadow)">
                {/* Lengan/Pergelangan Kanan */}
                <path 
                  d="M300 280 L260 215 L235 225 L280 290 Z" 
                  fill="url(#skinGradRight)" 
                  stroke="#C2410C" 
                  strokeWidth="2.5" 
                  strokeLinejoin="round" 
                />
                {/* Telapak & Ibu Jari Kanan */}
                <path 
                  d="M260 215 C265 195 245 175 225 168 C215 165 208 172 212 185 C215 195 222 202 230 210 Z" 
                  fill="url(#skinGradRight)" 
                  stroke="#C2410C" 
                  strokeWidth="2.5" 
                />
                {/* Jari-Jemari Kanan */}
                <path 
                  d="M228 170 C218 150 204 150 195 162 C190 168 195 178 205 182 L235 225 Z" 
                  fill="url(#skinGradRight)" 
                  stroke="#C2410C" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                />
                {/* Garis lekukan jari kanan */}
                <path d="M235 185 Q222 178 210 184" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
                <path d="M240 198 Q226 192 216 200" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
              </g>

            </g>

            {/* 1D. PERCIKAN AIR & LAPISAN BASAH DI ATAS TANGAN */}
            <g id="water-splashes">
              {/* Lapisan basah berkilau di titik temu kedua tangan */}
              <ellipse cx="200" cy="180" rx="28" ry="12" fill="#E0F2FE" opacity="0.75" />
              <ellipse cx="200" cy="180" rx="18" ry="7" fill="#38BDF8" opacity="0.6" />

              {/* Riak air memancar */}
              <circle cx="200" cy="180" r="14" stroke="#38BDF8" strokeWidth="2" fill="none" className="ripple-anim" />

              {/* Percikan butiran air kiri */}
              <g className="splash-1">
                <circle cx="175" cy="165" r="4" fill="#38BDF8" />
                <path d="M172 165 Q164 160 162 154 Q168 160 172 165 Z" fill="#0284C7" />
                <circle cx="160" cy="180" r="3" fill="#7DD3FC" />
                <circle cx="168" cy="195" r="3.5" fill="#0284C7" />
              </g>

              {/* Percikan butiran air kanan */}
              <g className="splash-2">
                <circle cx="225" cy="165" r="4" fill="#38BDF8" />
                <path d="M228 165 Q236 160 238 154 Q232 160 228 165 Z" fill="#0284C7" />
                <circle cx="240" cy="180" r="3" fill="#7DD3FC" />
                <circle cx="232" cy="195" r="3.5" fill="#0284C7" />
              </g>
            </g>

            {/* 1E. PANAH GERAKAN DUA ARAH (MENGUSAP) */}
            <g opacity="0.85">
              <path 
                d="M150 142 Q200 132 250 142" 
                stroke="#004A63" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeDasharray="6 4" 
                fill="none" 
              />
              <polygon points="144,142 154,136 154,148" fill="#004A63" />
              <polygon points="256,142 246,136 246,148" fill="#004A63" />
            </g>
          </g>
        )}

        {/* ======================================================== */}
        {/* BAGIAN 2: GOSOK SABUN BUSA (TANGAN BERBUSA BERGERAK)    */}
        {/* ======================================================== */}
        {step === 'sabun' && (
          <g>
            {/* Botol Sabun di samping atas */}
            <g transform="translate(45, 40)" filter="url(#softShadow)">
              <rect x="0" y="25" width="40" height="60" rx="10" fill="#2A4A38" />
              <rect x="12" y="15" width="16" height="12" fill="#EAF5EC" rx="2" />
              <path d="M20 15 L20 5 L35 5 L35 9 L24 9" stroke="#1A1C19" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <circle cx="20" cy="50" r="10" fill="#FFDF9D" />
              <Sparkles size={14} x="13" y="43" className="text-[#785A00]" />
            </g>

            {/* Kedua Tangan Menggosok Memutar */}
            <g id="soap-hands-rubbing">
              {/* Tangan Kiri */}
              <g className="hand-left-rub" filter="url(#softShadow)">
                <path d="M100 280 L140 215 L165 225 L120 290 Z" fill="url(#skinGradLeft)" stroke="#EA580C" strokeWidth="2.5" />
                <path d="M140 215 C135 195 155 175 175 168 C185 165 192 172 188 185 C185 195 178 202 170 210 Z" fill="url(#skinGradLeft)" stroke="#EA580C" strokeWidth="2.5" />
                <path d="M172 170 C182 150 196 150 205 162 C210 168 205 178 195 182 L165 225 Z" fill="url(#skinGradLeft)" stroke="#EA580C" strokeWidth="2.5" />
              </g>

              {/* Tangan Kanan */}
              <g className="hand-right-rub" filter="url(#softShadow)">
                <path d="M300 280 L260 215 L235 225 L280 290 Z" fill="url(#skinGradRight)" stroke="#C2410C" strokeWidth="2.5" />
                <path d="M260 215 C265 195 245 175 225 168 C215 165 208 172 212 185 C215 195 222 202 230 210 Z" fill="url(#skinGradRight)" stroke="#C2410C" strokeWidth="2.5" />
                <path d="M228 170 C218 150 204 150 195 162 C190 168 195 178 205 182 L235 225 Z" fill="url(#skinGradRight)" stroke="#C2410C" strokeWidth="2.5" />
              </g>
            </g>

            {/* Kumpulan Gelembung Busa Sabun Melimpah */}
            <g className="bubble-spin" filter="url(#softShadow)">
              {/* Gelembung utama tengah */}
              <circle cx="200" cy="180" r="22" fill="url(#soapGrad)" stroke="#38BDF8" strokeWidth="1.5" />
              <circle cx="193" cy="173" r="5" fill="#FFFFFF" opacity="0.8" />

              <circle cx="178" cy="165" r="16" fill="url(#soapGrad)" stroke="#38BDF8" strokeWidth="1.5" />
              <circle cx="173" cy="160" r="4" fill="#FFFFFF" opacity="0.8" />

              <circle cx="222" cy="165" r="17" fill="url(#soapGrad)" stroke="#38BDF8" strokeWidth="1.5" />
              <circle cx="218" cy="160" r="4" fill="#FFFFFF" opacity="0.8" />

              <circle cx="190" cy="198" r="15" fill="url(#soapGrad)" stroke="#38BDF8" strokeWidth="1.5" />
              <circle cx="212" cy="198" r="14" fill="url(#soapGrad)" stroke="#38BDF8" strokeWidth="1.5" />
            </g>

            {/* Busa Mengambang Kecil & Kerlipan */}
            <g className="bubble-pulse">
              <circle cx="155" cy="150" r="10" fill="url(#soapGrad)" stroke="#BAE6FD" strokeWidth="1" />
              <circle cx="245" cy="148" r="11" fill="url(#soapGrad)" stroke="#BAE6FD" strokeWidth="1" />
              <circle cx="180" cy="135" r="8" fill="url(#soapGrad)" stroke="#BAE6FD" strokeWidth="1" />
              <circle cx="225" cy="132" r="9" fill="url(#soapGrad)" stroke="#BAE6FD" strokeWidth="1" />

              {/* Kerlipan bintang sabun bersih */}
              <g className="sparkle-anim" transform="translate(145, 120)">
                <path d="M10 0 L12 7 L19 10 L12 13 L10 20 L8 13 L1 10 L8 7 Z" fill="#F59E0B" />
              </g>
              <g className="sparkle-anim" transform="translate(240, 115)">
                <path d="M10 0 L12 7 L19 10 L12 13 L10 20 L8 13 L1 10 L8 7 Z" fill="#F59E0B" />
              </g>
            </g>

            {/* Indikasi Gerak Melingkar */}
            <g opacity="0.85">
              <path 
                d="M170 130 C190 120 220 120 235 135 C245 145 245 160 235 170" 
                stroke="#2A4A38" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeDasharray="5 4" 
                fill="none" 
              />
              <polygon points="166,132 176,128 174,138" fill="#2A4A38" />
            </g>
          </g>
        )}

        {/* ======================================================== */}
        {/* BAGIAN 3: KERINGKAN TANGAN (HANDUK MENYEKA HINGGA BERKILAU)*/}
        {/* ======================================================== */}
        {step === 'kering' && (
          <g>
            {/* Kedua Tangan Terbuka Bersih */}
            <g id="clean-hands" filter="url(#softShadow)">
              {/* Tangan Kiri */}
              <g transform="translate(-10, 0)">
                <path d="M120 280 L150 210 L170 220 L140 290 Z" fill="url(#skinGradLeft)" stroke="#EA580C" strokeWidth="2.5" />
                <path d="M150 210 C145 180 165 155 185 155 C195 155 198 165 192 178 L170 220 Z" fill="url(#skinGradLeft)" stroke="#EA580C" strokeWidth="2.5" />
              </g>
              {/* Tangan Kanan */}
              <g transform="translate(10, 0)">
                <path d="M280 280 L250 210 L230 220 L260 290 Z" fill="url(#skinGradRight)" stroke="#C2410C" strokeWidth="2.5" />
                <path d="M250 210 C255 180 235 155 215 155 C205 155 202 165 208 178 L230 220 Z" fill="url(#skinGradRight)" stroke="#C2410C" strokeWidth="2.5" />
              </g>
            </g>

            {/* Handuk Lembut Menyeka Bergerak */}
            <g className="towel-anim" filter="url(#softShadow)">
              <rect x="150" y="145" width="100" height="65" rx="14" fill="url(#towelGrad)" stroke="#CA8A04" strokeWidth="2.5" />
              {/* Serat tekstur handuk lembut */}
              <line x1="160" y1="160" x2="240" y2="160" stroke="#FEF9C3" strokeWidth="3" strokeDasharray="6 4" strokeLinecap="round" />
              <line x1="160" y1="175" x2="240" y2="175" stroke="#FEF9C3" strokeWidth="3" strokeDasharray="6 4" strokeLinecap="round" />
              <line x1="160" y1="190" x2="240" y2="190" stroke="#FEF9C3" strokeWidth="3" strokeDasharray="6 4" strokeLinecap="round" />
              {/* Lipatan ujung handuk */}
              <path d="M150 195 Q200 215 250 195 L250 210 Q200 230 150 210 Z" fill="#EAB308" />
            </g>

            {/* Bintang Kemilau Kebersihan */}
            <g className="sparkle-anim" transform="translate(120, 90)">
              <path d="M15 0 L18 10 L28 15 L18 20 L15 30 L12 20 L2 15 L12 10 Z" fill="#F59E0B" />
            </g>
            <g className="sparkle-anim" transform="translate(250, 85)">
              <path d="M15 0 L18 10 L28 15 L18 20 L15 30 L12 20 L2 15 L12 10 Z" fill="#F59E0B" />
            </g>
            <g className="sparkle-anim" transform="translate(190, 70)">
              <path d="M10 0 L12 7 L19 10 L12 13 L10 20 L8 13 L1 10 L8 7 Z" fill="#10B981" />
            </g>
          </g>
        )}
      </svg>

      {/* KONTROL PUTAR / JEDA ANIMASI (RAMAH AKSESIBILITAS SENSORI) */}
      <div className="absolute top-3 right-3 flex items-center gap-2">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white/90 hover:bg-white text-gray-700 border border-gray-300 shadow-sm backdrop-blur-sm transition-all"
          title={isPlaying ? "Jeda gerakan animasi" : "Putar gerakan animasi"}
          aria-label={isPlaying ? "Jeda gerakan animasi" : "Putar gerakan animasi"}
        >
          {isPlaying ? <Pause size={13} className="text-[#2A4A38]" /> : <Play size={13} className="text-[#2A4A38] fill-[#2A4A38]" />}
          <span>{isPlaying ? 'Gerak' : 'Diam'}</span>
        </button>
      </div>

      {/* KETERANGAN GERAKAN RAMAH ANAK */}
      <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-gray-200 text-xs font-bold text-gray-700 flex items-center gap-1.5 shadow-sm pointer-events-none">
        <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
        {step === 'air' && <span>Kedua tangan saling mengusap di bawah air</span>}
        {step === 'sabun' && <span>Gosok telapak & sela jari hingga berbusa</span>}
        {step === 'kering' && <span>Seka kedua tangan sampai kering bersih</span>}
      </div>
    </div>
  );
}
