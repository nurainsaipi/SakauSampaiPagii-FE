export const SCHOOL_OBJECTS = [
  { 
    id: 'tas', name: 'Tas', icon: 'item-bag', 
    desc: 'Tas dipakai untuk membawa buku.',
    quizQ: 'Mana tas?',
    options: [
      { id: 'tas', label: 'TAS', icon: 'item-bag', isCorrect: true },
      { id: 'buku', label: 'BUKU', icon: 'item-book', isCorrect: false }
    ]
  },
  { 
    id: 'buku', name: 'Buku', icon: 'item-book', 
    desc: 'Buku dipakai untuk membaca dan menulis.',
    quizQ: 'Mana buku?',
    options: [
      { id: 'pensil', label: 'PENSIL', icon: 'item-pencil', isCorrect: false },
      { id: 'buku', label: 'BUKU', icon: 'item-book', isCorrect: true }
    ]
  },
  { 
    id: 'pensil', name: 'Pensil', icon: 'item-pencil', 
    desc: 'Pensil dipakai untuk menulis.',
    quizQ: 'Mana pensil?',
    options: [
      { id: 'pensil', label: 'PENSIL', icon: 'item-pencil', isCorrect: true },
      { id: 'buku', label: 'BUKU', icon: 'item-book', isCorrect: false }
    ]
  },
  { 
    id: 'penghapus', name: 'Penghapus', icon: 'item-eraser', 
    desc: 'Penghapus dipakai untuk menghapus tulisan.',
    quizQ: 'Mana penghapus?',
    options: [
      { id: 'meja', label: 'MEJA', icon: 'item-desk', isCorrect: false },
      { id: 'penghapus', label: 'PENGHAPUS', icon: 'item-eraser', isCorrect: true }
    ]
  },
  { 
    id: 'meja', name: 'Meja', icon: 'item-desk', 
    desc: 'Meja dipakai untuk meletakkan buku.',
    quizQ: 'Mana meja?',
    options: [
      { id: 'meja', label: 'MEJA', icon: 'item-desk', isCorrect: true },
      { id: 'kursi', label: 'KURSI', icon: 'item-chair', isCorrect: false }
    ]
  },
  { 
    id: 'kursi', name: 'Kursi', icon: 'item-chair', 
    desc: 'Kursi dipakai untuk duduk.',
    quizQ: 'Mana kursi?',
    options: [
      { id: 'meja', label: 'MEJA', icon: 'item-desk', isCorrect: false },
      { id: 'kursi', label: 'KURSI', icon: 'item-chair', isCorrect: true }
    ]
  },
];
