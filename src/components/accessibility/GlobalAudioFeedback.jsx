import { useEffect } from 'react';
import { useAccessibility } from '../../context/AccessibilityContext';
import { useSpeech } from '../../hooks/useSpeech';

export default function GlobalAudioFeedback() {
  const { settings } = useAccessibility();
  const { speak } = useSpeech();

  useEffect(() => {
    // Jika fitur suara dimatikan, jangan lakukan apa-apa
    if (!settings.audioEnabled) return;

    const handleGlobalClick = (e) => {
      // Cari elemen tombol atau link yang paling dekat dengan yang diklik
      const target = e.target.closest('button, a, input[type="checkbox"], input[type="radio"]');
      
      if (target) {
        // Ambil teks dari tombol, atau dari aria-label jika tombolnya hanya ikon
        let textToSpeak = target.getAttribute('aria-label') || target.innerText || target.value;
        
        // Jika yang diklik adalah checkbox (seperti di halaman pengaturan), kita beri respon suara khusus
        if (target.type === 'checkbox') {
           const label = target.closest('label')?.innerText || 'Pilihan';
           textToSpeak = target.checked ? `Mengaktifkan ${label}` : `Mematikan ${label}`;
        }

        if (textToSpeak && textToSpeak.trim() !== '') {
          // Batasi panjang teks agar tidak terlalu lama dibacakan
          speak(textToSpeak.trim().substring(0, 60)); 
        }
      }
    };

    // Pasang pendengar klik di seluruh dokumen
    document.addEventListener('click', handleGlobalClick);
    
    // Bersihkan pendengar saat komponen dibongkar
    return () => document.removeEventListener('click', handleGlobalClick);
  }, [settings.audioEnabled, speak]);

  return null; // Komponen ini tidak menampilkan apa pun di layar
}