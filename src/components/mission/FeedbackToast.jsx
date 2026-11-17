import { CheckCircle2, HelpCircle } from 'lucide-react';

export default function FeedbackToast({ message, type = 'success' }) {
  if (!message) return null;

  const isSuccess = type === 'success';

  return (
    <div className={`fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full shadow-lg flex items-center gap-3 animate-[fadeIn_0.3s_ease-out] ${
      isSuccess ? 'bg-livora-green-dark text-white' : 'bg-livora-honey text-livora-ink'
    }`}>
      {isSuccess ? <CheckCircle2 size={24} /> : <HelpCircle size={24} />}
      <span className="font-bold">{message}</span>
    </div>
  );
}