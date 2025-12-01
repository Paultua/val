import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://vendre-appartement-loue.com'),
  // Title optimisé : 60 caractères max, mots-clés en début
  title: 'Vendre Appartement Loué Bretagne | Vannes, Lorient, Rennes',
  // Description optimisée : 155 caractères, CTA + bénéfices
  description: "Expert vente appartement loué en Bretagne. Vendu 30% + vite à Vannes, Lorient, Rennes, Nantes, Brest. Estimation gratuite, gardez vos loyers.",
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
    title: 'Vendre Appartement Loué Bretagne | Expert Vannes, Lorient, Rennes',
    description: '🏆 N°1 vente appartement loué Bretagne. 30% + rapide. Réseau investisseurs exclusif. Estimation gratuite à Vannes, Lorient, Rennes, Nantes, Brest, Saint-Malo.',
    images: [
      {
        url: '/vendre-appartement-loue-vert.png',
        width: 1200,
        height: 630,
        alt: 'VAL\' - Expert vente appartement loué Bretagne et Paris',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vendre Appartement Loué Bretagne | Vannes, Lorient, Rennes',
    description: '🏆 Expert vente appartement loué. Vendu 30% + vite. Réseau investisseurs exclusif en Bretagne.',
    images: ['/vendre-appartement-loue-vert.png'],
    creator: '@VALimmobilier',
  },
  alternates: {
    canonical: 'https://vendre-appartement-loue.com',
  },
  verification: {
    google: 'votre-code-google-search-console',
  },
  // Données géographiques pour SEO local
  other: {
    'geo.region': 'FR-BRE',
    'geo.placename': 'Bretagne',
    'geo.position': '48.117266;-1.6777926', // Coordonnées Rennes (centre Bretagne)
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org multi-types pour domination SEO
  const jsonLdOrganization = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': 'https://vendre-appartement-loue.com/#organization',
    name: "VAL' - Vendre Appartement Loué",
    alternateName: 'VAL Immobilier',
    description:
      "Agence immobilière n°1 spécialisée vente appartement loué, maison louée en Bretagne (Vannes, Lorient, Rennes, Nantes, Brest, Saint-Malo) et Paris. Expert vente bien occupé.",
    url: 'https://vendre-appartement-loue.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://vendre-appartement-loue.com/vendre-appartement-loue-vert.png',
      width: 600,
      height: 600,
    },
    image: 'https://vendre-appartement-loue.com/vendre-appartement-loue-vert.png',
    telephone: '+33763648823',
    email: 'contact@vendre-appartement-loue.com',
    priceRange: '$$',
    openingHours: ['Mo-Fr 09:00-18:00', 'Sa 10:00-17:00'],
    
    // Adresses multiples pour SEO local dans chaque ville
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Vannes',
        addressRegion: 'Morbihan',
        postalCode: '56000',
        addressCountry: 'FR',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Lorient',
        addressRegion: 'Morbihan',
        postalCode: '56100',
        addressCountry: 'FR',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Rennes',
        addressRegion: 'Ille-et-Vilaine',
        postalCode: '35000',
        addressCountry: 'FR',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Nantes',
        addressRegion: 'Loire-Atlantique',
        postalCode: '44000',
        addressCountry: 'FR',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Brest',
        addressRegion: 'Finistère',
        postalCode: '29200',
        addressCountry: 'FR',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Saint-Malo',
        addressRegion: 'Ille-et-Vilaine',
        postalCode: '35400',
        addressCountry: 'FR',
      },
    ],
    
    // Zone de service détaillée par ville ET quartiers
    areaServed: [
      {
        '@type': 'City',
        name: 'Vannes',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Morbihan',
        },
      },
      {
        '@type': 'City',
        name: 'Lorient',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Morbihan',
        },
      },
      {
        '@type': 'City',
        name: 'Rennes',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Ille-et-Vilaine',
        },
      },
      {
        '@type': 'City',
        name: 'Nantes',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Loire-Atlantique',
        },
      },
      {
        '@type': 'City',
        name: 'Brest',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Finistère',
        },
      },
      {
        '@type': 'City',
        name: 'Saint-Malo',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Ille-et-Vilaine',
        },
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
    
    // Avis clients pour étoiles dans Google (CRUCIAL pour CTR)
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    
    // Services proposés (mots-clés sémantiques)
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services vente biens loués',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Vente appartement loué',
            description: 'Vente appartement loué à Vannes, Lorient, Rennes, Nantes, Brest, Saint-Malo',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Vente maison louée',
            description: 'Vente maison louée en Bretagne et Paris',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Vente bien occupé',
            description: 'Vente commerce loué et immeuble de rapport',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Estimation bien loué',
            description: 'Estimation gratuite appartement loué et maison louée',
          },
        },
      ],
    },
    
    sameAs: [
      'https://www.linkedin.com/company/vendreappartementloue',
      'https://www.facebook.com/vendreappartementloue',
      'https://www.instagram.com/vendreappartementloue',
    ],
  };

  // Schema LocalBusiness pour chaque ville majeure (SEO local)
  const jsonLdLocalBusinessVannes = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://vendre-appartement-loue.com/#vannes',
    name: "VAL' Vannes - Vendre Appartement Loué",
    description: 'Expert vente appartement loué à Vannes. Spécialiste bien occupé Morbihan.',
    image: 'https://vendre-appartement-loue.com/vendre-appartement-loue-vert.png',
    telephone: '+33763648823',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Zone Bretagne',
      addressLocality: 'Vannes',
      postalCode: '56000',
      addressRegion: 'Morbihan',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.6586,
      longitude: -2.7603,
    },
    url: 'https://vendre-appartement-loue.com',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
  };

  const jsonLdLocalBusinessLorient = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://vendre-appartement-loue.com/#lorient',
    name: "VAL' Lorient - Vendre Appartement Loué",
    description: 'Expert vente appartement loué à Lorient. Spécialiste bien occupé Morbihan.',
    telephone: '+33763648823',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lorient',
      postalCode: '56100',
      addressRegion: 'Morbihan',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.7482,
      longitude: -3.3606,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
  };

  const jsonLdLocalBusinessRennes = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://vendre-appartement-loue.com/#rennes',
    name: "VAL' Rennes - Vendre Appartement Loué",
    description: 'Expert vente appartement loué à Rennes. Spécialiste bien occupé Ille-et-Vilaine.',
    telephone: '+33763648823',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Rennes',
      postalCode: '35000',
      addressRegion: 'Ille-et-Vilaine',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.1173,
      longitude: -1.6778,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
  };

  // Schema WebSite avec SearchAction (barre de recherche Google)
  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://vendre-appartement-loue.com/#website',
    url: 'https://vendre-appartement-loue.com',
    name: "VAL' - Vendre Appartement Loué",
    description: 'Expert vente appartement loué Bretagne et Paris',
    publisher: {
      '@id': 'https://vendre-appartement-loue.com/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://vendre-appartement-loue.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  // Schema BreadcrumbList pour fil d'Ariane
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://vendre-appartement-loue.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Vendre Appartement Loué Bretagne',
        item: 'https://vendre-appartement-loue.com',
      },
    ],
  };

  return (
    <html lang="fr">
      <head>
        {/* Schema.org - Tous les types pour domination */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusinessVannes) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusinessLorient) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusinessRennes) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
        />
        
        {/* Preconnect pour performance (Core Web Vitals) */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://tally.so" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Hreflang pour ciblage géographique */}
        <link rel="alternate" hrefLang="fr-FR" href="https://vendre-appartement-loue.com" />
        <link rel="alternate" hrefLang="fr" href="https://vendre-appartement-loue.com" />
      </head>
      <body className={inter.className}>
        {children}
        
        {/* Scripts optimisés pour performance */}
        <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11483776859"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11483776859');
            
            // Event tracking vente appartement loué
            gtag('event', 'conversion', {
              'send_to': 'AW-11483776859',
              'value': 1.0,
              'currency': 'EUR'
            });
          `}
        </Script>

        {/* Hotjar ou Microsoft Clarity pour heatmaps (optionnel) */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "votre-clarity-id");
          `}
        </Script>
      </body>
    </html>
  );
}
