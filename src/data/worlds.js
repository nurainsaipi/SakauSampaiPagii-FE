export const WORLDS = [
  { 
    id: 'home', 
    name: 'Dunia Rumah', 
    illustration: 'world-home', 
    tagline: 'Cuci tangan, sikat gigi, pakai baju, rapikan tempat tidur.', 
    color: 'bg-[#EAF5EC]', 
    status: 'active', 
    progress: 'Langkah 3 dari 6' 
  },
  { 
    id: 'school', 
    name: 'Dunia Sekolah', 
    illustration: 'world-school', 
    tagline: 'Mengenal benda di sekolah dan aktivitas bersama teman.', 
    color: 'bg-[#EAF3F8]', 
    status: 'active'
  },
  { 
    id: 'nature', 
    name: 'Dunia Taman', 
    illustration: 'world-nature', 
    tagline: 'Bermain ayunan, mengenal giliran, dan menjaga kebersihan.', 
    color: 'bg-[#F4F4F4]', 
    status: 'coming-soon' 
  },
  { 
    id: 'market', 
    name: 'Dunia Pasar', 
    illustration: 'world-market', 
    tagline: 'Membeli buah segar dan membayar kado dengan benar.', 
    color: 'bg-[#F4F4F4]', 
    status: 'coming-soon' 
  },
  { 
    id: 'street', 
    name: 'Dunia Jalan', 
    illustration: 'world-street', 
    tagline: 'Menyeberang jalan aman dan mengenali rambu lalu lintas.', 
    color: 'bg-[#F4F4F4]', 
    status: 'coming-soon' 
  },
  { 
    id: 'health', 
    name: 'Dunia Kesehatan', 
    illustration: 'world-health', 
    tagline: 'Mengenal dokter ramah dan minum obat dengan tenang.', 
    color: 'bg-[#F4F4F4]', 
    status: 'coming-soon' 
  },
];

export const findWorld = (id) => WORLDS.find((w) => w.id === id);
