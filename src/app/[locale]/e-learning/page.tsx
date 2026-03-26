'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/sections/SectionHeader';
import CTABlock from '@/components/sections/CTABlock';
import { Video, CheckCircle, Bot, Award, Smartphone, BookOpen, ArrowRight, ExternalLink } from 'lucide-react';

export default function ELearningPage() {
  const t = useTranslations('elearning');

  const features = [
    { icon: Video, text: 'Modules vidéo de qualité professionnelle (Synthesia AI + tournages experts)' },
    { icon: CheckCircle, text: 'Quiz et évaluations à chaque étape pour valider vos acquis' },
    { icon: BookOpen, text: 'Ateliers virtuels en direct via Zoom avec les formateurs' },
    { icon: Bot, text: 'Tuteur IA disponible 24/7 pour répondre à vos questions' },
    { icon: Award, text: 'Certificat ETHSUN à l\'issue de chaque parcours validé' },
    { icon: Smartphone, text: 'Accès depuis mobile, tablette ou ordinateur' },
  ];

  const steps = [
    'Choisissez votre programme dans notre catalogue e-learning',
    'Inscrivez-vous en ligne et réglez en toute sécurité (carte, Mobile Money, virement)',
    'Apprenez à votre rythme avec les modules vidéo, quiz et ressources',
    'Participez aux ateliers virtuels en direct pour la mise en pratique',
    'Certifiez-vous en validant l\'évaluation finale et recevez votre certificat ETHSUN',
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-ethsun-navy-dark via-ethsun-navy to-emerald-900 pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 kente-pattern" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow={t('eyebrow')}
            title={t('title')}
            subtitle={t('subtitle')}
            light
          />
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold px-7 py-3.5 rounded-lg text-sm transition-all shadow-lg"
            >
              <ExternalLink className="w-4 h-4" />
              {t('ctaPlatform')}
            </a>
            <Link
              href="/programmes"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-7 py-3.5 rounded-lg text-sm transition-all hover:bg-white/10"
            >
              {t('ctaProgrammes')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="" title={t('whyTitle')} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <feature.icon className="w-8 h-8 text-ethsun-gold mb-4" />
                <p className="text-sm text-gray-700 leading-relaxed">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="" title={t('howTitle')} />
          <div className="space-y-5">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 items-start"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-ethsun-navy flex items-center justify-center text-ethsun-gold font-bold text-sm">
                  {i + 1}
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex-1">
                  <p className="text-sm text-gray-700 leading-relaxed">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
