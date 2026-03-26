'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/sections/SectionHeader';
import CTABlock from '@/components/sections/CTABlock';
import { faculty } from '@/data/mock';
import { Badge } from '@/components/ui/badge';
import { User } from 'lucide-react';

export default function IntervenantsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-ethsun-navy-dark via-ethsun-navy to-ethsun-blue pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="absolute inset-0 kente-pattern" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow="NOS INTERVENANTS"
            title="Des experts au service de votre réussite"
            subtitle="Nos formateurs sont des professionnels de haut niveau, praticiens reconnus dans leurs domaines respectifs. Ils apportent une expertise concrète, ancrée dans les réalités du terrain."
            light
          />
        </div>
      </section>

      {/* Faculty grid */}
      <section className="py-14 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {faculty.map((person, i) => (
              <motion.div
                key={person.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                {/* Gradient header with avatar */}
                <div className={`relative h-32 bg-gradient-to-br ${person.gradient} flex items-center justify-center`}>
                  <div className="absolute inset-0 kente-pattern opacity-50" />
                  <div className="relative w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                    <span className="text-xl font-bold text-white">{person.initials}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-serif text-base font-bold text-ethsun-navy leading-snug mb-1">
                    {person.name}
                  </h3>
                  <p className="text-xs text-ethsun-gold font-semibold mb-1">{person.title}</p>
                  <p className="text-xs text-gray-500 mb-3">{person.organization}</p>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {person.bio}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {person.expertise.map((exp, j) => (
                      <Badge key={j} variant="secondary" className="text-[10px] font-medium bg-gray-100 text-gray-600 border-0">
                        {exp}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a trainer CTA */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-ethsun-gold/10 mx-auto mb-6 flex items-center justify-center">
            <User className="w-8 h-8 text-ethsun-gold" />
          </div>
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-ethsun-navy mb-4">
            Devenez intervenant ETHSUN
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto">
            Vous êtes un expert reconnu dans votre domaine ? Rejoignez notre équipe de formateurs et partagez votre expertise avec les professionnels d&apos;Afrique de l&apos;Ouest.
          </p>
          <a
            href="mailto:contact@ethsun-institute.org?subject=Candidature%20intervenant"
            className="inline-flex items-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold px-7 py-3.5 rounded-lg text-sm transition-all shadow-md"
          >
            Postuler comme intervenant
          </a>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
