import { useTranslations } from 'next-intl';
import HeroSection from '@/components/sections/HeroSection';
import StatsBar from '@/components/sections/StatsBar';
import SectionHeader from '@/components/sections/SectionHeader';
import ProgrammeCard from '@/components/sections/ProgrammeCard';
import EventCard from '@/components/sections/EventCard';
import TestimonialCard from '@/components/sections/TestimonialCard';
import PartnerBar from '@/components/sections/PartnerBar';
import CTABlock from '@/components/sections/CTABlock';
import { featuredProgrammes, events, testimonials } from '@/data/mock';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Stats */}
      <StatsBar />

      {/* 3. Featured programmes */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={t('featured.eyebrow')}
            title={t('featured.title')}
            subtitle={t('featured.subtitle')}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProgrammes.map((prog, i) => (
              <ProgrammeCard key={prog.id} programme={prog} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/programmes"
              className="inline-flex items-center gap-2 text-ethsun-blue hover:text-ethsun-navy font-semibold text-sm transition-colors"
            >
              {t('featured.viewAll')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Upcoming events */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={t('events.eyebrow')}
            title={t('events.title')}
          />
          <div className="max-w-2xl mx-auto space-y-4">
            {events.map((event, i) => (
              <EventCard key={event.slug} event={event} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={t('testimonials.eyebrow')}
            title={t('testimonials.title')}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((test, i) => (
              <TestimonialCard key={i} testimonial={test} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Partners */}
      <PartnerBar />

      {/* 7. Final CTA */}
      <CTABlock />
    </>
  );
}
