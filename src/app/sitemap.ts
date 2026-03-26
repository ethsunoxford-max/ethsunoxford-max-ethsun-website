import { MetadataRoute } from 'next';
import { allProgrammes } from '@/data/mock';

const BASE_URL = 'https://ethsun-institute.org';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['fr', 'en'];

  const staticPages = [
    '',
    '/programmes',
    '/evenements',
    '/evenements/universite-tourisme',
    '/evenements/universite-immobilier',
    '/e-learning',
    '/international',
    '/entreprises',
    '/a-propos',
    '/intervenants',
    '/alumni',
    '/blog',
    '/contact',
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1 : 0.8,
      });
    }

    for (const prog of allProgrammes) {
      entries.push({
        url: `${BASE_URL}/${locale}/programmes/${prog.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }
  }

  return entries;
}
