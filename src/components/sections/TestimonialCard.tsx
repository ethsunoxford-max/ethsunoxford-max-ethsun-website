'use client';

import { motion } from 'framer-motion';
import { Testimonial } from '@/data/mock';
import { Quote } from 'lucide-react';

interface Props {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({ testimonial, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 relative"
    >
      <div className="absolute left-0 top-6 bottom-6 w-1 bg-ethsun-gold rounded-full" />

      <Quote className="w-8 h-8 text-ethsun-gold/30 mb-4" />

      <p className="text-gray-700 italic leading-relaxed mb-6 text-[15px]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-ethsun-navy flex items-center justify-center text-white text-sm font-bold">
          {testimonial.initials}
        </div>
        <div>
          <p className="font-semibold text-ethsun-navy text-sm">{testimonial.name}</p>
          <p className="text-xs text-gray-500">{testimonial.title}, {testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  );
}
