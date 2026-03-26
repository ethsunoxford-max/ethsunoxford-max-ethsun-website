'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, MapPin, Clock, Phone, Building2 } from 'lucide-react';
import { events, companyInfo } from '@/data/mock';

export default function UniversiteTourismePage() {
  const t = useTranslations('eventPage');
  const event = events[0];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-ethsun-navy-dark via-ethsun-navy to-amber-900 pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 kente-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ethsun-navy-dark/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-ethsun-gold/20 text-ethsun-gold text-xs font-bold tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">
              {t('edition')}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {t('title')}
            </h1>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80 mb-8">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-ethsun-gold" />{t('date')}</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-ethsun-gold" />{t('venue')}</span>
            </div>
            <p className="text-xs text-white/50">{t('organizer')}</p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed text-center">
            {t('intro')}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-10 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-ethsun-blue font-serif">{event.stats.participants}</p>
            <p className="text-sm text-gray-500 mt-1">{t('statsParticipants')}</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-ethsun-blue font-serif">{event.stats.speakers}</p>
            <p className="text-sm text-gray-500 mt-1">{t('statsSpeakers')}</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-ethsun-blue font-serif">1</p>
            <p className="text-sm text-gray-500 mt-1">{t('statsDuration')}</p>
          </div>
        </div>
      </section>

      {/* Honorary Rector */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] text-ethsun-gold text-center mb-8">
            {t('rectorTitle')}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-ethsun-navy to-ethsun-navy-dark rounded-xl p-8 lg:p-10 text-center"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-5 border-2 border-ethsun-gold/30">
              <Image src="/images/rector-micro.jpeg" alt="M. Siandou FOFANA" width={80} height={80} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">{t('rectorName')}</h3>
            <p className="text-ethsun-gold text-sm font-medium mb-5">{t('rectorRole')}</p>
            <p className="text-gray-300 text-sm leading-relaxed max-w-lg mx-auto">
              {t('rectorBio')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-14 lg:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] text-ethsun-gold text-center mb-3">
            {t('schedule')}
          </p>
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-ethsun-navy text-center mb-10">
            {t('schedule')}
          </h2>

          <div className="relative">
            <div className="absolute left-[23px] top-0 bottom-0 w-0.5 bg-ethsun-gold/20" />
            <div className="space-y-6">
              {event.schedule?.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-5 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ethsun-navy flex items-center justify-center">
                    <Clock className="w-5 h-5 text-ethsun-gold" />
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex-1">
                    <p className="text-xs font-bold text-ethsun-gold mb-1">{item.time}</p>
                    <p className="text-sm text-ethsun-navy font-medium">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-ethsun-gold mb-8">
            {t('partnersTitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {event.partners?.map((partner, i) => (
              <div key={i} className="flex items-center gap-2 bg-gray-50 px-5 py-3 rounded-lg border border-gray-100">
                <Building2 className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600 font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-14 lg:py-20 bg-gradient-to-br from-ethsun-navy-dark to-ethsun-navy">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <a
            href={companyInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold px-8 py-4 rounded-lg text-base transition-all shadow-lg"
          >
            {t('registerCta')}
          </a>

          <div className="mt-8">
            <p className="text-xs text-ethsun-gold font-bold tracking-[0.2em] mb-3">{t('contactTitle')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {event.contact?.map((phone, i) => (
                <a key={i} href={`tel:+225${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors">
                  <Phone className="w-4 h-4" />
                  (+225) {phone}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
