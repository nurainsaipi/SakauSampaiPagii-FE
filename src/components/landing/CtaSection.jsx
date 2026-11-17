import { Link } from 'react-router-dom';
import Button from '../ui/Button';

export default function CtaSection() {
  return (
    <section className="mt-16 bg-livora-green-dark p-8 text-center text-white rounded-livora-xl">
      <h2 className="text-3xl font-bold">Siap Memulai Petualangan?</h2>
      <div className="mt-6 flex justify-center gap-3">
        <Button as={Link} to="/register" variant="secondary" size="lg" className="!text-livora-green-dark">Mulai Belajar</Button>
      </div>
    </section>
  );
}