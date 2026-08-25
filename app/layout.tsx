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
    description: "Agence spécialisée dans la vente de biens loués en Bretagne : appartements, maisons, commerces occupés. Estimation gratuite, vous gardez vos loyers pendant la vente.",
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
    description: "Agence spécialisée vente de biens loués en Bretagne. Estimation gratuite, vous gardez vos loyers pendant la vente.",
    images: ['/vendre-appartement-loue-vert.png'],
  },
  alternates: {
    canonical: 'https://vendre-appartement-loue.com',
  },
  verification: {
    google: 'q9SNa8snqFN5nAn0uzLHGXoHufkcNkzcMHBIWe_e8hk',
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
  // Schema.org — une seule entité, des informations vérifiables uniquement
  const jsonLdOrganization = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': 'https://vendre-appartement-loue.com/#organization',
    name: "VAL' - Vendre Appartement Loué",
    alternateName: 'VAL Immobilier',
    description:
      "Agence spécialisée dans la vente d'appartements, maisons et commerces loués en Bretagne (Vannes, Lorient, Rennes, Nantes, Brest, Saint-Malo) et en Île-de-France.",
    url: 'https://vendre-appartement-loue.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://vendre-appartement-loue.com/vendre-appartement-loue-vert.png',
      width: 600,
      height: 600,
    },
    image: 'https://vendre-appartement-loue.com/vendre-appartement-loue-vert.png',
    telephone: '+33763648823',
    email: 'contact@ukan-group.com',
    priceRange: '$$',

    address: {
      '@type': 'PostalAddress',
      streetAddress: '22 rue Alfred Kastler',
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

    // VAL fait partie du groupe Ukan, également éditeur d'Investir en Bretagne
    parentOrganization: {
      '@type': 'Organization',
      name: 'Ukan Group',
      url: 'https://ukan-group.com',
    },
    sameAs: [
      'https://ukan-group.com',
      'https://www.investir-en-bretagne.com',
      'https://www.linkedin.com/in/paul-tuauden/',
    ],

    // Zone de service (couverture commerciale, pas des agences physiques)
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

    // Services proposés
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
  };

  // Schema WebSite (identité du site, sans SearchAction : pas de moteur de recherche interne)
  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://vendre-appartement-loue.com/#website',
    url: 'https://vendre-appartement-loue.com',
    name: "VAL' - Vendre Appartement Loué",
    description: 'Agence spécialisée dans la vente de biens loués en Bretagne et en Île-de-France',
    publisher: {
      '@id': 'https://vendre-appartement-loue.com/#organization',
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
        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
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

            // Conversion comptée uniquement quand un formulaire Tally est réellement envoyé
            window.addEventListener('message', function (event) {
              try {
                var data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
                if (data && data.event === 'Tally.FormSubmitted') {
                  gtag('event', 'conversion', {
                    send_to: 'AW-11483776859',
                    value: 1.0,
                    currency: 'EUR',
                  });
                }
              } catch (e) {}
            });
          `}
        </Script>
      </body>
    </html>
  );
}
