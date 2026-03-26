'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { partners } from '@/data/mock';
import { Building2 } from 'lucide-react';

export default function PartnerBar() {
  const t = useTranslations('partners');

  return (
    <section className="bg-gray-50 py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-ethsun-gold text-center mb-10">
          {t('eyebrow')}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-white border border-gray-100 opacity-60 hover:opacity-100 transition-opacity"
            >
              <Building2 className="w-8 h-8 text-gray-400 mb-2" />
              <p className="text-xs text-gray-500 text-center font-medium leading-tight">{partner}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
