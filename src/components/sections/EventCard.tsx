'use client';

import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { EventData } from '@/data/mock';

interface Props {
  event: EventData;
  index?: number;
}

const monthsFr = ['JAN', 'FÉV', 'MAR', 'AVR', 'MAI', 'JUN', 'JUL', 'AOÛ', 'SEP', 'OCT', 'NOV', 'DÉC'];

export default function EventCard({ event, index = 0 }: Props) {
  const date = new Date(event.date);
  const day = date.getDate();
  const month = monthsFr[date.getMonth()];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        href={`/evenements/${event.slug}`}
        className="group flex gap-5 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all"
      >
        {/* Calendar block */}
        <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-ethsun-navy flex flex-col items-center justify-center text-white">
          <span className="text-2xl font-bold leading-none">{day}</span>
          <span className="text-xs font-medium text-ethsun-gold-light">{month}</span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-base font-bold text-ethsun-navy group-hover:text-ethsun-blue transition-colors leading-snug">
            {event.title}
          </h3>
          <p className="flex items-center gap-1.5 text-sm text-gray-500 mt-1.5">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            {event.venue}, {event.city}
          </p>
        </div>

        <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-ethsun-blue transition-colors flex-shrink-0 mt-1" />
      </Link>
    </motion.div>
  );
}
