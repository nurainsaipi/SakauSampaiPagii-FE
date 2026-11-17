export default function GuideCharacter() {
  return (
    <svg 
      viewBox="0 0 160 176" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className="relative z-10 w-32 h-36 md:w-40 md:h-44 drop-shadow-md"
    >
      {/* Tubuh Burung Hantu */}
      <path d="M40 120C40 80 60 50 80 50C100 50 120 80 120 120V150C120 160 110 166 80 166C50 166 40 160 40 150V120Z" fill="#2A4A38"/>
      
      {/* Perut */}
      <path d="M55 130C55 100 65 80 80 80C95 80 105 100 105 130V150C105 155 95 158 80 158C65 158 55 155 55 150V130Z" fill="#FAD9BE"/>
      
      {/* Mata Besar Kiri */}
      <circle cx="60" cy="90" r="18" fill="#FFFFFF"/>
      <circle cx="60" cy="90" r="8" fill="#1A1C19"/>
      <circle cx="63" cy="87" r="3" fill="#FFFFFF"/>
      
      {/* Mata Besar Kanan */}
      <circle cx="100" cy="90" r="18" fill="#FFFFFF"/>
      <circle cx="100" cy="90" r="8" fill="#1A1C19"/>
      <circle cx="103" cy="87" r="3" fill="#FFFFFF"/>
      
      {/* Paruh */}
      <path d="M75 105L80 115L85 105H75Z" fill="#F59E0B"/>
      
      {/* Sayap Kiri */}
      <path d="M35 115C25 125 25 145 35 155C40 150 40 130 35 115Z" fill="#1E3629"/>
      
      {/* Sayap Kanan */}
      <path d="M125 115C135 125 135 145 125 155C120 150 120 130 125 115Z" fill="#1E3629"/>
      
      {/* Kaki */}
      <path d="M65 162V170M65 170H55M65 170H75" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round"/>
      <path d="M95 162V170M95 170H85M95 170H105" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}