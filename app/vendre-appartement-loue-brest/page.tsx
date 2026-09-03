import type { Metadata } from 'next';
import VillePage from '@/components/VillePage';

export const metadata: Metadata = {
  title: "Vendre un appartement loué à Brest | VAL'",
  description: "Vendre un appartement, une maison ou un immeuble de rapport loué à Brest. Marché stable, prix accessibles. Estimation gratuite.",
  alternates: { canonical: 'https://vendre-appartement-loue.com/vendre-appartement-loue-brest' },
  openGraph: {
    title: "Vendre un appartement loué à Brest | VAL'",
    description: "Vendre un bien loué à Brest : marché, rendement, méthode de vente.",
    url: 'https://vendre-appartement-loue.com/vendre-appartement-loue-brest',
  },
};

const data = {
  ville: 'Brest',
  slug: 'brest',
  heroLead:
    "Marché immobilier stable et accessible, Brest attire les investisseurs pour son rendement locatif, porté par la présence militaire, l'université et le technopôle.",
  stats: [
    { label: 'Prix moyen', value: '≈ 2 324 €/m²' },
    { label: 'Rendement locatif brut', value: '4 à 6 %' },
    { label: 'Position', value: 'Prix les plus accessibles de Bretagne' },
  ],
  marketParagraphs: [
    "Brest affiche l'un des prix au m² les plus accessibles des grandes villes bretonnes, ce qui permet à un investisseur d'entrer sur le marché avec un capital plus limité tout en visant un rendement locatif attractif, généralement entre 4 et 6% brut selon le quartier et la typologie.",
    "La demande locative s'appuie sur des piliers stables : la Marine nationale et la Direction des Constructions Navales, l'Université de Bretagne Occidentale, et le technopôle Brest Iroise. Cette diversité de locataires potentiels (militaires, étudiants, cadres) sécurise l'occupation d'un bien loué, un argument que nous mettons en avant auprès de nos acheteurs investisseurs.",
    "Chaque vente étant différente, nous établissons un avis de valeur chiffré propre à votre bien (rendement réel, qualité du bail, quartier) plutôt que de raisonner sur une moyenne de ville.",
  ],
  sourceNote: "Chiffres de cadrage à affiner lors de l'estimation gratuite de votre bien.",
  autresVilles: [
    { name: 'Vannes', href: '/vendre-appartement-loue-vannes' },
    { name: 'Lorient', href: '/vendre-appartement-loue-lorient' },
    { name: 'Rennes', href: '/vendre-appartement-loue-rennes' },
    { name: 'Nantes', href: '/vendre-appartement-loue-nantes' },
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
            serviceType: 'Vente appartement loué à Brest',
            provider: { '@type': 'RealEstateAgent', name: "VAL' - Vendre Appartement Loué", url: 'https://vendre-appartement-loue.com' },
            areaServed: { '@type': 'City', name: 'Brest' },
            description: data.heroLead,
          }),
        }}
      />
      <VillePage data={data} />
    </>
  );
}
