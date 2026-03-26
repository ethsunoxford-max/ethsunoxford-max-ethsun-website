'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/sections/SectionHeader';
import CTABlock from '@/components/sections/CTABlock';
import { blogPosts } from '@/data/mock';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

export default function BlogPage() {
  const t = useTranslations('blog');
  const [category, setCategory] = useState<string | null>(null);

  const categories = [
    { key: null, label: t('categories.all') },
    { key: 'expertise', label: t('categories.expertise') },
    { key: 'news', label: t('categories.news') },
    { key: 'alumni', label: t('categories.alumni') },
    { key: 'ia', label: t('categories.ia') },
  ];

  const filtered = category ? blogPosts.filter((p) => p.category === category) : blogPosts;

  return (
    <>
      <section className="relative bg-gradient-to-br from-ethsun-navy-dark via-ethsun-navy to-ethsun-blue pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="absolute inset-0 kente-pattern" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow={t('eyebrow')}
            title={t('title')}
            subtitle={t('subtitle')}
            light
          />
        </div>
      </section>

      <section className="py-10 lg:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8 -mx-4 px-4 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.key ?? 'all'}
                onClick={() => setCategory(cat.key)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  category === cat.key
                    ? 'bg-ethsun-navy text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Articles */}
          <div className="space-y-6">
            {filtered.map((post, i) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all group"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-5">
                  {/* Gradient thumbnail */}
                  <div className="flex-shrink-0 w-full lg:w-48 h-32 rounded-lg bg-gradient-to-br from-ethsun-navy to-ethsun-blue kente-pattern flex items-center justify-center">
                    <span className="text-xs text-ethsun-gold font-bold tracking-wider uppercase">{post.category}</span>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-bold text-ethsun-navy group-hover:text-ethsun-blue transition-colors mb-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                  </div>

                  <ArrowRight className="hidden lg:block w-5 h-5 text-gray-300 group-hover:text-ethsun-blue transition-colors flex-shrink-0 mt-2" />
                </div>
              </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
