import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://vendre-appartement-loue.com'),
  title: 'Vendre un appartement, une maison, un commerce loué, Bretagne (Rennes, Lorient, Brest, Vannes) et Paris | VAL, une agence immobilière spécialisée vente appartement loué',
  description: "Agence immobilière experte en vente d'appartements loués, maisons louées et commerces loués en Bretagne (Rennes, Nantes, Vannes, Lorient, Brest, Saint-Malo, Quimper, Pontivy) et Paris. Estimation gratuite, accompagnement personnalisé, réseau d'investisseurs locatifs qualifiés.",
  keywords: [
    'vendre appartement loué',
    'vente bien loué Bretagne',
    'vendre maison louée',
    'vente commerce loué',
    'appartement loué à vendre Rennes',
    'maison louée Nantes',
    'commerce loué Vannes',
    'vente bien occupé Lorient',
    'vendre appartement loué Brest',
    'immobilier locatif Saint-Malo',
    'bien loué Quimper',
    'appartement loué Pontivy',
    'vendre bien avec locataire',
    'agence immobilière biens loués',
    'estimation appartement loué',
    'vente immeuble de rapport',
    'investissement locatif',
  ],
  authors: [{ name: 'VAL\' - Vendre Appartement Loué' }],
  creator: 'VAL\' Agence Immobilière',
  publisher: 'VAL\'',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/Favicon-vendre-votre-appartement-loue.png',
    apple: '/Favicon-vendre-votre-appartement-loue.png',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://vendre-appartement-loue.com',
    siteName: 'VAL\' - Vendre Appartement Loué',
    title: 'Vendre un appartement, une maison, un commerce loué, Bretagne (Rennes, Lorient, Brest, Vannes) et Paris | VAL\' Agence Immobilière',
    description: 'Agence immobilière spécialisée dans la vente d\'appartements loués, maisons louées et commerces loués en Bretagne et Paris. +23 conseillers experts issus des plus grandes maisons d\'investissement. Estimation gratuite.',
    images: [
      {
        url: '/vendre-appartement-loue-vert.png',
        width: 1200,
        height: 630,
        alt: 'VAL\' - Agence immobilière spécialisée biens loués',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vendre un appartement, une maison, un commerce loué, Bretagne (Rennes, Lorient, Brest, Vannes) et Paris | VAL\' Bretagne & Paris',
    description: 'Agence experte en vente de biens loués. Estimation gratuite, accompagnement personnalisé en Bretagne et Paris.',
    images: ['/vendre-appartement-loue-vert.png'],
  },
  alternates: {
    canonical: 'https://vendre-appartement-loue.com',
  },
  verification: {
    google: 'votre-code-google-search-console',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: "VAL' - Vendre Appartement Loué",
    description:
      "Agence immobilière spécialisée dans la vente d'appartements loués, maisons louées et commerces loués en Bretagne et Paris",
    url: 'https://vendre-appartement-loue.com',
    logo: 'https://vendre-appartement-loue.com/vendre-appartement-loue-vert.png',
    image: 'https://vendre-appartement-loue.com/vendre-appartement-loue-vert.png',
    telephone: '+33-7-63-64-88-23',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Rennes',
      addressRegion: 'Bretagne',
      addressCountry: 'FR',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Rennes',
      },
      {
        '@type': 'City',
        name: 'Nantes',
      },
      {
        '@type': 'City',
        name: 'Vannes',
      },
      {
        '@type': 'City',
        name: 'Lorient',
      },
      {
        '@type': 'City',
        name: 'Brest',
      },
      {
        '@type': 'City',
        name: 'Saint-Malo',
      },
      {
        '@type': 'City',
        name: 'Quimper',
      },
      {
        '@type': 'City',
        name: 'Pontivy',
      },
      {
        '@type': 'City',
        name: 'Paris',
      },
    ],
    priceRange: '$$',
    openingHours: 'Mo-Fr 09:00-18:00',
    sameAs: [
      'https://www.linkedin.com/company/vendreappartementloue',
      'https://www.facebook.com/vendreappartementloue',
    ],
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
