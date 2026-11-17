export default function EmptyState({ title = 'Belum ada apa-apa di sini', description }) {
  return (
    <div className="rounded-livora bg-livora-sand/60 p-8 text-center">
      <p className="text-lg font-semibold">{title}</p>
      {description && <p className="mt-2 text-livora-ink/80">{description}</p>}
    </div>
  );
}