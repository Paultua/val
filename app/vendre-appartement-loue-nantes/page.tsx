import type { Metadata } from 'next';
import VillePage from '@/components/VillePage';

export const metadata: Metadata = {
  title: "Vendre un appartement loué à Nantes | VAL'",
  description: "Vendre un appartement, une maison ou un immeuble de rapport loué à Nantes. Métropole attractive de Loire-Atlantique. Estimation gratuite.",
  alternates: { canonical: 'https://vendre-appartement-loue.com/vendre-appartement-loue-nantes' },
  openGraph: {
    title: "Vendre un appartement loué à Nantes | VAL'",
    description: "Vendre un bien loué à Nantes : pourquoi un bien occupé se vend souvent plus vite qu'un bien vide.",
    url: 'https://vendre-appartement-loue.com/vendre-appartement-loue-nantes',
  },
};

const data = {
  ville: 'Nantes',
  slug: 'nantes',
  heroLead:
    "Métropole attractive de Loire-Atlantique, Nantes concentre une forte demande d'investisseurs pour le bien déjà loué, un profil d'acheteur que nous savons cibler.",
  stats: [],
  marketParagraphs: [
    "Nantes est une métropole en croissance, avec un marché locatif actif et une base d'investisseurs importante qui recherchent activement des biens déjà occupés pour sécuriser un rendement immédiat. Vendre un appartement, une maison ou un immeuble de rapport loué à Nantes présente les mêmes avantages qu'ailleurs en Bretagne : conservation des loyers pendant la vente, aucune vacance locative, pas de travaux de présentation à engager.",
    "Nous n'avons pas encore consolidé de données de marché quartier par quartier pour Nantes aussi précises que pour Vannes, Lorient ou Rennes. Nous établissons donc un avis de valeur chiffré propre à votre bien dès la première estimation, sur la base des ventes réellement comparables dans votre secteur.",
  ],
  sourceNote: "Étude de marché quartier par quartier à venir pour Nantes.",
  autresVilles: [
    { name: 'Vannes', href: '/vendre-appartement-loue-vannes' },
    { name: 'Lorient', href: '/vendre-appartement-loue-lorient' },
    { name: 'Rennes', href: '/vendre-appartement-loue-rennes' },
    { name: 'Brest', href: '/vendre-appartement-loue-brest' },
    { name: 'Saint-Malo', href: '/vendre-appartement-loue-saint-malo' },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Vente appartement loué à Nantes',
            provider: { '@type': 'RealEstateAgent', name: "VAL' - Vendre Appartement Loué", url: 'https://vendre-appartement-loue.com' },
            areaServed: { '@type': 'City', name: 'Nantes' },
            description: data.heroLead,
          }),
        }}
      />
      <VillePage data={data} />
    </>
  );
}
