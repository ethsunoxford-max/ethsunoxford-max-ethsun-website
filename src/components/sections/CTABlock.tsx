'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTABlock() {
  const t = useTranslations('cta');

  return (
    <section className="relative bg-ethsun-navy-dark py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 kente-pattern" />
      <div className="absolute inset-0 bg-gradient-to-r from-ethsun-navy-dark/90 to-ethsun-navy/80" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto px-4 text-center"
      >
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5">
          {t('title')}
        </h2>
        <p className="text-base lg:text-lg text-gray-300 leading-relaxed mb-10 max-w-xl mx-auto">
          {t('subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/programmes"
            className="inline-flex items-center justify-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold px-7 py-3.5 rounded-lg text-sm transition-all shadow-lg"
          >
            {t('cta1')}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-7 py-3.5 rounded-lg text-sm transition-all hover:bg-white/10"
          >
            <Phone className="w-4 h-4" />
            {t('cta2')}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
