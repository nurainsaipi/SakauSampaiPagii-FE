import Button from './Button';

export default function ComingSoon({ title, description }) {
  return (
    <div className="mx-auto max-w-xl rounded-3xl bg-white p-8 text-center shadow-sm border-2 border-gray-200 mt-10">
      <span className="inline-block rounded-full bg-[#FFDF9D] text-[#785A00] px-4 py-1.5 text-sm font-bold border-2 border-[#785A00]">
        Segera Hadir
      </span>
      <h1 className="mt-6 text-3xl font-display font-bold text-gray-800">{title}</h1>
      <p className="mt-3 text-gray-600 font-medium">
        {description || 'Fitur ini sedang disiapkan dan akan segera bisa kamu gunakan.'}
      </p>
      <div className="mt-8">
        <Button to="/dashboard" className="inline-flex items-center justify-center min-h-[56px] px-8 bg-[#2A4A38] text-white font-bold text-lg rounded-xl border-[3px] border-[#41624F] shadow-[0_6px_0_0_#1A1C19] hover:bg-[#1E3629] active:translate-y-1.5 active:shadow-none transition-all">
          Kembali ke Beranda
        </Button>
      </div>
    </div>
  );
}