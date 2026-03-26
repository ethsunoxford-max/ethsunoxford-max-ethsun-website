import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ethsun-institute.org'),
  title: 'ETHSUN Institute — L\'Université des Entreprises Performantes',
  description: 'Plus de 60 certificats professionnels dans 12 domaines stratégiques. Formation executive à Abidjan et Oxford.',
  openGraph: {
    type: 'website',
    siteName: 'ETHSUN Institute',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  icons: {
    icon: '/images/favicon-32.png',
    apple: '/images/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
