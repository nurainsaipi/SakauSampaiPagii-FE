/**
 * Hook untuk mendeteksi gerakan tangan (Computer Vision).
 * Status: STUB (Belum aktif). 
 * Akan diimplementasikan di Fase 6 menggunakan MediaPipe.
 */
export function useHandTracking() {
  return {
    status: 'idle',
    landmarks: [],
    videoRef: { current: null },
    start: async () => {
      console.log('[LIVORA] Fitur Hand Tracking segera hadir.');
      return false;
    },
    stop: () => {},
  };
}