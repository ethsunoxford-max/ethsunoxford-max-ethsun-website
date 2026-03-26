'use client';

import { Link } from '@/i18n/routing';
import { BlogPost } from '@/data/mock';
import CTABlock from '@/components/sections/CTABlock';
import { ChevronRight, Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  post: BlogPost;
}

export default function BlogPostClient({ post }: Props) {
  return (
    <>
      {/* Header */}
      <section className="relative bg-gradient-to-br from-ethsun-navy-dark via-ethsun-navy to-ethsun-blue pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="absolute inset-0 kente-pattern" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/80 truncate">{post.title}</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-ethsun-gold/20 text-ethsun-gold text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-5">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed font-medium mb-6">
              {post.excerpt}
            </p>

            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                La transformation des économies africaines passe inévitablement par le développement des compétences. Dans un contexte de mutation rapide des marchés et des technologies, les professionnels doivent se former en continu pour rester compétitifs.
              </p>
              <p>
                ETHSUN Institute s&apos;inscrit dans cette dynamique en proposant des formations certifiantes conçues par des experts praticiens, ancrées dans les réalités du terrain africain et enrichies par les meilleures pratiques internationales.
              </p>

              <h2 className="font-serif text-xl font-bold text-ethsun-navy mt-10 mb-4">
                Les enjeux de la formation professionnelle en Afrique
              </h2>
              <p>
                Le continent africain connaît une croissance démographique sans précédent. D&apos;ici 2050, l&apos;Afrique comptera plus de 2,5 milliards d&apos;habitants, dont une majorité de jeunes actifs. Cette transition démographique représente à la fois un défi et une opportunité considérable.
              </p>
              <p>
                Pour transformer ce dividende démographique en moteur de croissance, il est impératif d&apos;investir massivement dans la formation et le développement des compétences. Les programmes doivent être adaptés aux besoins réels des entreprises et des institutions.
              </p>

              <h2 className="font-serif text-xl font-bold text-ethsun-navy mt-10 mb-4">
                Notre approche
              </h2>
              <p>
                Chez ETHSUN, nous croyons que la formation est le levier le plus puissant pour transformer les organisations et les économies. Nos programmes combinent rigueur académique et pertinence opérationnelle, avec un ancrage fort dans les standards internationaux grâce à notre présence à Oxford.
              </p>
              <p>
                Chaque certificat ETHSUN est un engagement de qualité, conçu pour délivrer un impact mesurable sur la carrière de nos apprenants et la performance de leurs organisations.
              </p>
            </div>
          </article>

          {/* Back to blog */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-ethsun-blue hover:text-ethsun-navy font-semibold text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
