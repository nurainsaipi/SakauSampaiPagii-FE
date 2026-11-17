import { Accessibility } from 'lucide-react';
import { useAccessibility } from '../../context/AccessibilityContext';

export default function FloatingAccessButton() {
  const { setPanelOpen } = useAccessibility();

  return (
    <button
      type="button"
      onClick={() => setPanelOpen(true)}
      aria-label="Buka pengaturan LIVORA ACCESS"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-livora-green-dark px-5 py-4 text-white shadow-livora-lg transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-livora-honey"
    >
      <Accessibility size={22} aria-hidden="true" />
      <span className="font-semibold hidden sm:inline">Access</span>
    </button>
  );
}