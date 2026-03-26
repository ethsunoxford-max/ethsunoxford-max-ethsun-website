'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function StatsBar() {
  const t = useTranslations('stats');

  const stats = [
    { number: '60+', label: t('programmes') },
    { number: '12', label: t('domains') },
    { number: '500+', label: t('alumni') },
    { number: '2', label: t('campuses') },
  ];

  return (
    <section className="bg-white py-12 lg:py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-gray-200">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-4"
            >
              <p className="text-3xl lg:text-4xl font-bold text-ethsun-blue font-serif">
                {stat.number}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
