'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Programme, formatPrice, formatDate } from '@/data/mock';
import ProgrammeCard from '@/components/sections/ProgrammeCard';
import SectionHeader from '@/components/sections/SectionHeader';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Clock, Monitor, Calendar, CreditCard, Download,
  MessageCircle, ChevronRight, Target, Users,
  BookOpen, CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { companyInfo } from '@/data/mock';

interface Props {
  programme: Programme;
  similar: Programme[];
}

export default function ProgrammeDetailClient({ programme, similar }: Props) {
  const t = useTranslations('programme');

  const statusColors = {
    open: 'bg-green-100 text-green-700 border-green-200',
    coming_soon: 'bg-amber-100 text-amber-700 border-amber-200',
    closed: 'bg-red-100 text-red-700 border-red-200',
  };

  const statusLabels = {
    open: t('enrollmentOpen'),
    coming_soon: t('enrollmentSoon'),
    closed: t('enrollmentClosed'),
  };

  return (
    <>
      {/* Header */}
      <section className="relative bg-gradient-to-br from-ethsun-navy-dark via-ethsun-navy to-ethsun-blue pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="absolute inset-0 kente-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">{t('breadcrumbHome')}</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/programmes" className="hover:text-white transition-colors">{t('breadcrumbProgrammes')}</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/80 truncate">{programme.title}</span>
          </nav>

          <Badge className={`${statusColors[programme.enrollmentStatus]} border text-xs font-semibold mb-4`}>
            {statusLabels[programme.enrollmentStatus]}
          </Badge>

          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
            {programme.title}
          </h1>
          <p className="text-white/70 text-base lg:text-lg max-w-2xl">
            {programme.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left column - Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Objectives */}
              {programme.objectives && programme.objectives.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100">
                  <h2 className="flex items-center gap-3 font-serif text-xl font-bold text-ethsun-navy mb-5">
                    <Target className="w-5 h-5 text-ethsun-gold" />
                    {t('objectives')}
                  </h2>
                  <ul className="space-y-3">
                    {programme.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700 text-[15px] leading-relaxed">
                        <CheckCircle className="w-5 h-5 text-ethsun-gold flex-shrink-0 mt-0.5" />
                        {obj}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Programme détaillé */}
              {programme.modules && programme.modules.length > 0 && (
                <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100">
                  <h2 className="flex items-center gap-3 font-serif text-xl font-bold text-ethsun-navy mb-5">
                    <BookOpen className="w-5 h-5 text-ethsun-gold" />
                    {t('detailedProgramme')}
                  </h2>
                  <Accordion className="space-y-2">
                    {programme.modules.map((mod, i) => (
                      <AccordionItem key={i} className="border border-gray-100 rounded-lg px-4">
                        <AccordionTrigger className="text-sm font-semibold text-ethsun-navy hover:no-underline py-4">
                          {mod.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-gray-600 leading-relaxed pb-4">
                          {mod.description}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}

              {/* Target audience & prerequisites */}
              {(programme.targetAudience || programme.prerequisites) && (
                <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100">
                  <h2 className="flex items-center gap-3 font-serif text-xl font-bold text-ethsun-navy mb-5">
                    <Users className="w-5 h-5 text-ethsun-gold" />
                    {t('targetAudience')}
                  </h2>
                  {programme.targetAudience && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-sm text-ethsun-navy mb-2">{t('targetTitle')}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{programme.targetAudience}</p>
                    </div>
                  )}
                  {programme.prerequisites && (
                    <div>
                      <h3 className="font-semibold text-sm text-ethsun-navy mb-2">{t('prerequisites')}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{programme.prerequisites}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Methods */}
              {programme.methods && programme.methods.length > 0 && (
                <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100">
                  <h2 className="flex items-center gap-3 font-serif text-xl font-bold text-ethsun-navy mb-5">
                    <BookOpen className="w-5 h-5 text-ethsun-gold" />
                    {t('methods')}
                  </h2>
                  <ul className="space-y-2.5">
                    {programme.methods.map((method, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-ethsun-blue flex-shrink-0 mt-0.5" />
                        {method}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right sidebar - Sticky */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  {/* Meta info */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">{t('duration')}</p>
                        <p className="font-medium text-ethsun-navy">{programme.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Monitor className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">{t('format')}</p>
                        <p className="font-medium text-ethsun-navy">{programme.format}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">{t('nextSession')}</p>
                        <p className="font-medium text-ethsun-navy">{formatDate(programme.nextSession)}</p>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="border-t border-gray-100 pt-4 mb-6">
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-4 h-4 text-gray-400" />
                      <p className="text-xs text-gray-500">{t('price')}</p>
                    </div>
                    <p className="text-2xl font-bold text-ethsun-gold mt-1">
                      {formatPrice(programme.price.amount, programme.price.currency)}
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-3">
                    <Link
                      href="/contact"
                      className="block w-full text-center bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold py-3.5 rounded-lg text-sm transition-all shadow-md"
                    >
                      {t('register')}
                    </Link>
                    <button className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:border-ethsun-blue text-gray-700 hover:text-ethsun-blue font-medium py-3 rounded-lg text-sm transition-colors">
                      <Download className="w-4 h-4" />
                      {t('brochure')}
                    </button>
                  </div>

                  {/* WhatsApp */}
                  <a
                    href={companyInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mt-4 text-sm text-green-600 hover:text-green-700 font-medium transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {t('whatsapp')}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Similar programmes */}
          {similar.length > 0 && (
            <div className="mt-16">
              <SectionHeader
                eyebrow=""
                title={t('similar')}
                centered={false}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {similar.map((prog, i) => (
                  <ProgrammeCard key={prog.id} programme={prog} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
