'use client';

import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/sections/SectionHeader';
import PartnerBar from '@/components/sections/PartnerBar';
import { b2bSectors, b2bSteps, companyInfo } from '@/data/mock';
import {
  Building2, Landmark, Home, Plane, Wifi, Factory,
  ArrowRight, Phone, CheckCircle
} from 'lucide-react';

const sectorIcons: Record<string, React.ElementType> = {
  building: Building2,
  landmark: Landmark,
  home: Home,
  plane: Plane,
  wifi: Wifi,
  factory: Factory,
};

export default function EntreprisesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-ethsun-navy-dark via-ethsun-navy to-ethsun-blue pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 kente-pattern" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xs font-bold tracking-[0.25em] text-ethsun-gold mb-5">ENTREPRISES & INSTITUTIONS</p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Des solutions de formation sur mesure pour vos équipes
            </h1>
            <p className="text-base lg:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              ETHSUN conçoit et déploie des programmes de formation adaptés aux défis spécifiques de votre organisation. De la banque à l&apos;administration publique, du tourisme à l&apos;immobilier.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our approach - Steps */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="NOTRE APPROCHE" title="Un processus en 4 étapes" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {b2bSteps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <div className="w-10 h-10 rounded-full bg-ethsun-navy flex items-center justify-center text-ethsun-gold font-bold text-sm mb-4">
                  {item.step}
                </div>
                <h3 className="font-serif text-lg font-bold text-ethsun-navy mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                {i < b2bSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ethsun-gold z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="SECTEURS D'INTERVENTION" title="Des expertises sectorielles pointues" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {b2bSectors.map((sector, i) => {
              const Icon = sectorIcons[sector.icon] || Building2;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all"
                >
                  <Icon className="w-8 h-8 text-ethsun-gold mb-4" />
                  <h3 className="font-semibold text-ethsun-navy text-base mb-2">{sector.title}</h3>
                  <p className="text-sm text-gray-600">{sector.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why ETHSUN */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="" title="Pourquoi choisir ETHSUN ?" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Programmes conçus par des experts praticiens du terrain africain',
              'Double ancrage Abidjan — Oxford pour des standards internationaux',
              'Formats flexibles : dans vos locaux, dans nos campus ou en ligne',
              'Certification reconnue par les professionnels',
              'Plateforme e-learning Neuroklax pour le suivi post-formation',
              'Réseau alumni de 500+ cadres et dirigeants',
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-ethsun-gold flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <PartnerBar />

      {/* CTA */}
      <section className="relative py-20 lg:py-28 bg-ethsun-navy-dark overflow-hidden">
        <div className="absolute inset-0 kente-pattern" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-5">
            Demandez un devis personnalisé
          </h2>
          <p className="text-gray-300 mb-8">
            Ou contactez-nous directement : {companyInfo.campuses[0].phone}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold px-7 py-3.5 rounded-lg text-sm transition-all shadow-lg"
            >
              Demander un devis
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${companyInfo.campuses[0].phone}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-7 py-3.5 rounded-lg text-sm transition-all hover:bg-white/10"
            >
              <Phone className="w-4 h-4" />
              Nous appeler
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
