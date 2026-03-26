'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeader from '@/components/sections/SectionHeader';
import TestimonialCard from '@/components/sections/TestimonialCard';
import CTABlock from '@/components/sections/CTABlock';
import { testimonials } from '@/data/mock';
import { Users, Heart } from 'lucide-react';

export default function AlumniPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-ethsun-navy-dark via-ethsun-navy to-ethsun-blue pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="absolute inset-0 kente-pattern" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow="NOS ALUMNI"
            title="Le réseau ETHSUN : une communauté de leaders"
            subtitle="Plus de 500 professionnels certifiés ETHSUN occupent aujourd'hui des postes clés dans les entreprises et institutions d'Afrique de l'Ouest."
            light
          />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 lg:py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-3xl lg:text-4xl font-bold text-ethsun-blue font-serif">500+</p>
            <p className="mt-1 text-sm text-gray-500">Professionnels certifiés</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <p className="text-3xl lg:text-4xl font-bold text-ethsun-blue font-serif">12</p>
            <p className="mt-1 text-sm text-gray-500">Secteurs d&apos;activité</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <p className="text-3xl lg:text-4xl font-bold text-ethsun-blue font-serif">5</p>
            <p className="mt-1 text-sm text-gray-500">Pays représentés</p>
          </motion.div>
        </div>
      </section>

      {/* Featured testimonials */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="TÉMOIGNAGES EN VEDETTE"
            title="Ils ont choisi ETHSUN"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((test, i) => (
              <TestimonialCard key={i} testimonial={test} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery placeholder */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="GALERIE"
            title="Galerie des promotions"
            subtitle="Retrouvez les moments forts des cérémonies de remise de certificats."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: '/images/ceremony-group.jpeg', alt: 'Cérémonie de remise des certificats' },
              { src: '/images/cert-group-kente.jpeg', alt: 'Diplômés avec étoles Kente' },
              { src: '/images/graduates-crowd.jpeg', alt: 'Promotion diplômée' },
              { src: '/images/selfie-graduates.jpeg', alt: 'Selfie avec les diplômés' },
              { src: '/images/cert-group-standing.jpeg', alt: 'Groupe de certifiés' },
              { src: '/images/graduates-kente.jpeg', alt: 'Diplômés en toge' },
              { src: '/images/cert-remise-3.jpeg', alt: 'Remise de certificat' },
              { src: '/images/uimmo-group.jpeg', alt: 'Promotion UIMMO' },
            ].map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square relative rounded-xl overflow-hidden border border-gray-100"
              >
                <Image src={photo.src} alt={photo.alt} fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network & Mentor CTAs */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Alumni network */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 rounded-full bg-ethsun-gold/10 mb-5 flex items-center justify-center">
                <Users className="w-7 h-7 text-ethsun-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-ethsun-navy mb-3">
                Réseau alumni ETHSUN Bridge
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Rejoignez le réseau ETHSUN Bridge pour rester connecté avec vos pairs, accéder à des opportunités exclusives et participer aux événements de la communauté.
              </p>
              <button className="inline-flex items-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold px-6 py-3 rounded-lg text-sm transition-all shadow-md">
                Rejoindre le réseau alumni
              </button>
            </motion.div>

            {/* Mentor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-ethsun-navy rounded-xl p-8"
            >
              <div className="w-14 h-14 rounded-full bg-ethsun-gold/20 mb-5 flex items-center justify-center">
                <Heart className="w-7 h-7 text-ethsun-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                Devenir mentor
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Vous êtes un professionnel expérimenté ? Partagez votre expertise en devenant mentor ETHSUN. Accompagnez la prochaine génération de leaders africains.
              </p>
              <button className="inline-flex items-center gap-2 border-2 border-ethsun-gold text-ethsun-gold hover:bg-ethsun-gold hover:text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all">
                Devenir mentor
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
