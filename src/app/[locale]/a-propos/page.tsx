'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeader from '@/components/sections/SectionHeader';
import CTABlock from '@/components/sections/CTABlock';
import { Star, Lightbulb, TrendingUp, Globe, Building } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('about');

  const values = [
    { icon: Star, title: 'Excellence', description: 'Chaque programme est conçu pour délivrer un impact mesurable sur la carrière de nos apprenants.' },
    { icon: Lightbulb, title: 'Innovation', description: 'Nous intégrons les technologies les plus avancées (IA, e-learning, blended learning) dans nos méthodes pédagogiques.' },
    { icon: TrendingUp, title: 'Impact', description: 'Nous formons des professionnels qui transforment leurs organisations et contribuent au développement économique de l\'Afrique.' },
    { icon: Globe, title: 'Accessibilité', description: 'Nos formats flexibles rendent la formation de qualité accessible au plus grand nombre.' },
  ];

  const ecosystem = [
    { name: 'ETHSUN Executive Education Oxford', desc: 'Maison mère basée au Royaume-Uni. Programmes exécutifs premium, recherche et développement pédagogique.' },
    { name: 'ETHSUN Institute Abidjan', desc: 'Franchise principale. Certificats professionnels, séminaires, bootcamps sectoriels, événements phares.' },
    { name: 'ETHSUN Analytics', desc: 'Pôle intelligence artificielle et data, au service de la formation et du conseil.' },
    { name: 'Lloyd Berkeley Holding', desc: 'Structure holding internationale basée à Singapour.' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-ethsun-navy-dark via-ethsun-navy to-ethsun-blue pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="absolute inset-0 kente-pattern" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow={t('eyebrow')}
            title={t('title')}
            subtitle={t('subtitle')}
            light
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="font-serif text-xl font-bold text-ethsun-navy mb-4">{t('missionTitle')}</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">{t('missionText1')}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{t('missionText2')}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-ethsun-navy rounded-xl p-8">
              <h3 className="font-serif text-xl font-bold text-white mb-4">{t('visionTitle')}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{t('visionText')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] text-ethsun-gold text-center mb-8">{t('founderTitle')}</p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl p-8 lg:p-10 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-ethsun-gold/30">
                <Image src="/images/founder-portrait.jpeg" alt="Jean-Calvin ETHIEN" width={128} height={128} className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-ethsun-navy mb-1">{t('founderName')}</h3>
              <p className="text-ethsun-gold font-semibold text-sm mb-4">{t('founderRole')}</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">{t('founderBio')}</p>
              <p className="text-gray-600 text-sm leading-relaxed italic">{t('founderAmbition')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="" title={t('ecosystemTitle')} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ecosystem.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Building className="w-5 h-5 text-ethsun-gold" />
                  <h4 className="font-semibold text-ethsun-navy text-sm">{item.name}</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campuses */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="" title={t('campusesTitle')} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="h-48 relative">
                <Image src="/images/campus-jury.jpeg" alt="Campus Abidjan — Plateau" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h4 className="font-serif text-lg font-bold text-ethsun-navy mb-2">Abidjan — Plateau</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Avenue Franchet d&apos;Esperey, Plateau, Abidjan, Côte d&apos;Ivoire. Au cœur du quartier des affaires d&apos;Abidjan, notre campus principal accueille les sessions présentielles et les événements institutionnels.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-ethsun-navy to-ethsun-blue relative flex items-center justify-center">
                <div className="absolute inset-0 kente-pattern opacity-30" />
                <Image src="/images/seal-oxford-hd.jpeg" alt="ETHSUN Executive Education Oxford" width={120} height={120} className="relative z-10 rounded-full opacity-80" />
              </div>
              <div className="p-6">
                <h4 className="font-serif text-lg font-bold text-ethsun-navy mb-2">Oxford — Science Park</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Oxford Science Park, OX4, Oxfordshire, Royaume-Uni. Siège de la maison mère ETHSUN Executive Education Oxford, notre présence à Oxford ancre notre engagement dans l&apos;excellence académique britannique.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="" title={t('valuesTitle')} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-ethsun-gold/10 mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-ethsun-gold" />
                </div>
                <h4 className="font-serif text-lg font-bold text-ethsun-navy mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Oxford seal */}
      <section className="py-10 bg-gray-50 text-center">
        <Image src="/images/seal-oxford.png" alt="ETHSUN Executive Education Oxford" width={80} height={80} className="mx-auto mb-3 opacity-70" />
        <p className="text-xs text-gray-500 italic">A franchise of ETHSUN Executive Education Oxford — Per Doctrinam Excelsior</p>
      </section>

      <CTABlock />
    </>
  );
}
