'use client';

import SectionHeader from '@/components/sections/SectionHeader';
import EventCard from '@/components/sections/EventCard';
import CTABlock from '@/components/sections/CTABlock';
import { events } from '@/data/mock';

export default function EventsPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-ethsun-navy-dark via-ethsun-navy to-ethsun-blue pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="absolute inset-0 kente-pattern" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow="AGENDA"
            title="Événements à venir"
            subtitle="Retrouvez les grands rendez-vous ETHSUN : conférences, séminaires, universités thématiques et cérémonies de remise de certificats."
            light
          />
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          {events.map((event, i) => (
            <EventCard key={event.slug} event={event} index={i} />
          ))}
        </div>
      </section>

      <CTABlock />
    </>
  );
}
