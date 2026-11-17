export default function Loading({ label = 'Memuat...' }) {
  return (
    <div className="flex items-center justify-center gap-3 py-12 text-livora-ink/80">
      <span className="inline-block h-6 w-6 rounded-full border-4 border-livora-sand border-t-livora-green-dark animate-spin" />
      <span>{label}</span>
    </div>
  );
}