'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/graduates-crowd.jpeg"
          alt="Cérémonie ETHSUN Institute"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ethsun-navy-dark/95 via-ethsun-navy/85 to-ethsun-navy/60" />
      </div>
      
      {/* Kente pattern */}
      <div className="absolute inset-0 kente-pattern" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-bold tracking-[0.25em] text-ethsun-gold mb-5">
            {t('eyebrow')}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-6">
            {t('title')}
          </h1>
          <p className="text-base lg:text-lg text-white/70 leading-relaxed mb-10 max-w-xl">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/programmes"
              className="inline-flex items-center justify-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold px-7 py-3.5 rounded-lg text-sm transition-all shadow-lg hover:shadow-xl"
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
      </div>

      {/* Decorative circles */}
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-ethsun-gold/5 rounded-full blur-3xl" />
      <div className="absolute -right-10 bottom-0 w-64 h-64 bg-ethsun-blue/10 rounded-full blur-2xl" />
    </section>
  );
}
