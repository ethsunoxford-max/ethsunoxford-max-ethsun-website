import { Link } from '@/i18n/routing';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <p className="text-6xl font-bold text-ethsun-gold font-serif mb-4">404</p>
        <h1 className="font-serif text-2xl font-bold text-ethsun-navy mb-3">Page non trouvée</h1>
        <p className="text-gray-500 mb-8">La page que vous recherchez n&apos;existe pas ou a été déplacée.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold px-7 py-3.5 rounded-lg text-sm transition-all shadow-md"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}
