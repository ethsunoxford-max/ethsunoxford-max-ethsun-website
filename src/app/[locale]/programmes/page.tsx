'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Search, SlidersHorizontal } from 'lucide-react';
import SectionHeader from '@/components/sections/SectionHeader';
import ProgrammeCard from '@/components/sections/ProgrammeCard';
import CTABlock from '@/components/sections/CTABlock';
import { allProgrammes, domains } from '@/data/mock';

export default function CataloguePage() {
  const t = useTranslations('catalogue');
  const [search, setSearch] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);

  const formats = ['Présentiel', 'En ligne', 'Blended'];

  const filtered = useMemo(() => {
    return allProgrammes.filter((p) => {
      const matchSearch = !search || 
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.domain.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchDomain = !selectedDomain || p.domain === selectedDomain;
      const matchFormat = !selectedFormat || p.format === selectedFormat;
      return matchSearch && matchDomain && matchFormat;
    });
  }, [search, selectedDomain, selectedFormat]);

  return (
    <>
      {/* Hero header */}
      <section className="relative bg-gradient-to-br from-ethsun-navy-dark via-ethsun-navy to-ethsun-blue pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 kente-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={t('eyebrow')}
            title={t('title')}
            subtitle={t('subtitle')}
            light
          />
        </div>
      </section>

      {/* Search + Filters */}
      <section className="bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Search bar */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('search')}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-ethsun-blue/30 focus:border-ethsun-blue transition-all"
            />
          </div>

          {/* Domain pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-none">
            <button
              onClick={() => setSelectedDomain(null)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                !selectedDomain
                  ? 'bg-ethsun-navy text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {t('all')}
            </button>
            {domains.map((domain) => (
              <button
                key={domain}
                onClick={() => setSelectedDomain(selectedDomain === domain ? null : domain)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedDomain === domain
                    ? 'bg-ethsun-navy text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {domain}
              </button>
            ))}
          </div>

          {/* Format filter */}
          <div className="flex items-center gap-3 mt-3">
            <SlidersHorizontal className="w-4 h-4 text-gray-400" />
            <div className="flex gap-2">
              {formats.map((f) => (
                <button
                  key={f}
                  onClick={() => setSelectedFormat(selectedFormat === f ? null : f)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                    selectedFormat === f
                      ? 'bg-ethsun-blue text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-10 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-6">
            <span className="font-bold text-ethsun-navy">{filtered.length}</span> {t('found')}
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filtered.map((prog, i) => (
                <ProgrammeCard key={prog.id} programme={prog} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">{t('noResults')}</p>
            </div>
          )}

          {/* Custom training CTA */}
          <div className="mt-16 bg-white rounded-xl p-8 lg:p-10 border border-gray-100 text-center">
            <p className="text-gray-600 mb-4 max-w-xl mx-auto">{t('customCta')}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold px-6 py-3 rounded-lg text-sm transition-all"
            >
              {t('customBtn')}
            </Link>
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
