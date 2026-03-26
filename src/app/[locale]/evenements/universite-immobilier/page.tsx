'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Phone } from 'lucide-react';
import { events, companyInfo } from '@/data/mock';

export default function UniversiteImmobilierPage() {
  const event = events[1];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-ethsun-navy-dark via-ethsun-navy to-blue-900 pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 kente-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ethsun-navy-dark/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-ethsun-gold/20 text-ethsun-gold text-xs font-bold tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">
              6ÈME ÉDITION
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Université de l&apos;Immobilier
            </h1>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80 mb-8">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-ethsun-gold" />21-22 Juin 2026</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-ethsun-gold" />{event.venue}, {event.city}</span>
            </div>
            <p className="text-xs text-white/50">Organisé par : ETHSUN Institute</p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
            La 6ème Université de l&apos;Immobilier est le rendez-vous incontournable des professionnels de l&apos;immobilier en Afrique de l&apos;Ouest. Pendant 2 jours, experts, promoteurs, investisseurs et décideurs publics se réunissent pour débattre des enjeux du secteur et partager les meilleures pratiques.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-10 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-ethsun-blue font-serif">{event.stats.participants}</p>
            <p className="text-sm text-gray-500 mt-1">participants attendus</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-ethsun-blue font-serif">{event.stats.speakers}</p>
            <p className="text-sm text-gray-500 mt-1">intervenants experts</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-ethsun-blue font-serif">2</p>
            <p className="text-sm text-gray-500 mt-1">jours intensifs</p>
          </div>
        </div>
      </section>

      {/* Themes */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-ethsun-navy text-center mb-10">
            Thématiques clés
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Financement immobilier et accès au crédit',
              'Réglementation foncière et urbanisme',
              'Promotion immobilière et investissement',
              'Gestion de patrimoine et facility management',
              'Immobilier commercial et espaces de bureau',
              'Technologies et innovation dans l\'immobilier',
            ].map((theme, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100"
              >
                <div className="w-2 h-2 rounded-full bg-ethsun-gold mt-2 flex-shrink-0" />
                <p className="text-sm text-gray-700">{theme}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-14 lg:py-20 bg-gradient-to-br from-ethsun-navy-dark to-ethsun-navy">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-5">
            Réservez votre place
          </h2>
          <p className="text-gray-300 mb-8 text-sm">
            Tarif d&apos;inscription : 350 000 FCFA — Places limitées
          </p>
          <a
            href={companyInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold px-8 py-4 rounded-lg text-base transition-all shadow-lg"
          >
            S&apos;inscrire à la 6ème Université de l&apos;Immobilier
          </a>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`tel:+225${companyInfo.campuses[0].phone.replace(/[^0-9]/g, '').slice(-10)}`} className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors">
              <Phone className="w-4 h-4" />
              {companyInfo.campuses[0].phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
