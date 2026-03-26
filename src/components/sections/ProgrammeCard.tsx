'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Clock, Monitor, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Programme, formatPrice } from '@/data/mock';
import { motion } from 'framer-motion';

interface ProgrammeCardProps {
  programme: Programme;
  index?: number;
}

export default function ProgrammeCard({ programme, index = 0 }: ProgrammeCardProps) {
  const t = useTranslations('featured');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/programmes/${programme.slug}`} className="group block">
        <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
          {/* Gradient header */}
          <div className={`relative h-40 bg-gradient-to-br ${programme.imageGradient} p-5 flex flex-col justify-end`}>
            <div className="absolute inset-0 kente-pattern opacity-50" />
            {programme.badge && (
              <Badge className="absolute top-4 right-4 bg-ethsun-gold text-white border-0 text-xs font-semibold shadow-md">
                {programme.badge}
              </Badge>
            )}
            <div className="relative z-10">
              <p className="text-xs text-white/60 font-medium mb-1">{programme.domain}</p>
              <p className="text-xs text-ethsun-gold-light font-medium">{programme.certificateLevel}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-1">
            <h3 className="font-serif text-lg font-bold text-ethsun-navy group-hover:text-ethsun-blue transition-colors leading-snug mb-3">
              {programme.title}
            </h3>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {programme.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <Monitor className="w-3.5 h-3.5" />
                {programme.format}
              </span>
            </div>

            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
              <p className="text-lg font-bold text-ethsun-gold">
                {formatPrice(programme.price.amount, programme.price.currency)}
              </p>
              <span className="text-sm text-ethsun-blue font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                {t('viewProgramme')}
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
