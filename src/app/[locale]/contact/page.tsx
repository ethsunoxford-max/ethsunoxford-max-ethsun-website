'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/sections/SectionHeader';
import { companyInfo, allProgrammes } from '@/data/mock';
import { Send, MapPin, Phone, Mail, MessageCircle, Calendar } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => setSending(false), 2000);
  };

  return (
    <>
      {/* Hero */}
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

      <section className="py-14 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('name')}</label>
                    <input type="text" required className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-ethsun-blue/30 focus:border-ethsun-blue" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('email')}</label>
                    <input type="email" required className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-ethsun-blue/30 focus:border-ethsun-blue" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('phone')}</label>
                    <input type="tel" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-ethsun-blue/30 focus:border-ethsun-blue" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('subject')}</label>
                    <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-ethsun-blue/30 focus:border-ethsun-blue bg-white">
                      <option value="info">{t('subjectOptions.info')}</option>
                      <option value="custom">{t('subjectOptions.custom')}</option>
                      <option value="partnership">{t('subjectOptions.partnership')}</option>
                      <option value="enrollment">{t('subjectOptions.enrollment')}</option>
                      <option value="other">{t('subjectOptions.other')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('programmeInterest')}</label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-ethsun-blue/30 focus:border-ethsun-blue bg-white">
                    <option value="">—</option>
                    {allProgrammes.map((p) => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('message')}</label>
                  <textarea rows={5} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-ethsun-blue/30 focus:border-ethsun-blue resize-none" />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold py-3.5 rounded-lg text-sm transition-all shadow-md disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {sending ? '...' : t('send')}
                </button>
              </form>
            </motion.div>

            {/* Right side - Info */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-2 space-y-6">
              {/* Campus Abidjan */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-serif text-base font-bold text-ethsun-navy mb-4">{t('campusAbidjan')}</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p className="flex items-start gap-3"><MapPin className="w-4 h-4 text-ethsun-gold flex-shrink-0 mt-0.5" />{companyInfo.campuses[0].address}</p>
                  <p className="flex items-center gap-3"><Phone className="w-4 h-4 text-ethsun-gold" />{companyInfo.campuses[0].phone}</p>
                  <p className="flex items-center gap-3"><Mail className="w-4 h-4 text-ethsun-gold" />{companyInfo.campuses[0].email}</p>
                </div>
              </div>

              {/* Campus Oxford */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-serif text-base font-bold text-ethsun-navy mb-4">{t('campusOxford')}</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p className="flex items-start gap-3"><MapPin className="w-4 h-4 text-ethsun-gold flex-shrink-0 mt-0.5" />{companyInfo.campuses[1].address}</p>
                  <p className="flex items-center gap-3"><Mail className="w-4 h-4 text-ethsun-gold" />{companyInfo.campuses[1].email}</p>
                </div>
              </div>

              {/* Quick actions */}
              <div className="space-y-3">
                <a
                  href={companyInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 rounded-lg text-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t('whatsapp')}
                </a>
                <button className="flex items-center justify-center gap-2 w-full border border-ethsun-blue text-ethsun-blue hover:bg-ethsun-blue hover:text-white font-semibold py-3.5 rounded-lg text-sm transition-all">
                  <Calendar className="w-4 h-4" />
                  {t('appointment')}
                </button>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-200 rounded-xl h-48 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-gray-400" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
