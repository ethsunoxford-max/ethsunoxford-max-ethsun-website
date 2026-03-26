import { notFound } from 'next/navigation';
import { allProgrammes } from '@/data/mock';
import ProgrammeDetailClient from './ProgrammeDetailClient';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return allProgrammes.map((p) => ({ slug: p.slug }));
}

export default async function ProgrammeDetailPage(
  props: {
    params: Promise<{ slug: string; locale: string }>;
  }
) {
  const params = await props.params;
  const programme = allProgrammes.find((p) => p.slug === params.slug);

  if (!programme) {
    notFound();
  }

  const similar = allProgrammes
    .filter((p) => p.domain === programme.domain && p.slug !== programme.slug)
    .slice(0, 3);

  return <ProgrammeDetailClient programme={programme} similar={similar} />;
}
