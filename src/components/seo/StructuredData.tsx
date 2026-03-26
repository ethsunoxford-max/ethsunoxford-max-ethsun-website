export default function StructuredData() {
  const orgData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'ETHSUN Institute',
    alternateName: 'ETHSUN Executive Education Oxford',
    url: 'https://ethsun-institute.org',
    logo: 'https://ethsun-institute.org/images/logo-horizontal.png',
    description:
      "L'Université des Entreprises Performantes. Institut de formation professionnelle et de conseil stratégique, fondé à Abidjan avec un ancrage académique à Oxford.",
    foundingDate: '2020',
    founder: {
      '@type': 'Person',
      name: 'Jean-Calvin ETHIEN',
      jobTitle: 'Fondateur & Président',
    },
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Avenue Franchet d\'Esperey, Plateau',
        addressLocality: 'Abidjan',
        addressCountry: 'CI',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Oxford Science Park, OX4',
        addressLocality: 'Oxford',
        addressRegion: 'Oxfordshire',
        addressCountry: 'GB',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+225-05-45-61-30-35',
      contactType: 'customer service',
      availableLanguage: ['French', 'English'],
    },
    sameAs: ['https://ci.linkedin.com/company/ethsun-institute'],
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 15,
    },
    areaServed: [
      { '@type': 'Country', name: "Côte d'Ivoire" },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Senegal' },
      { '@type': 'Country', name: 'Guinea' },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgData) }}
    />
  );
}

export function CourseStructuredData({
  title,
  description,
  price,
  currency,
  duration,
  url,
}: {
  title: string;
  description: string;
  price: number;
  currency: string;
  duration: string;
  url: string;
}) {
  const courseData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: title,
    description,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'ETHSUN Institute',
      url: 'https://ethsun-institute.org',
    },
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: currency === 'XOF' ? 'XOF' : currency,
      availability: 'https://schema.org/InStock',
    },
    timeRequired: duration,
    url,
    inLanguage: 'fr',
    courseMode: 'blended',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(courseData) }}
    />
  );
}
