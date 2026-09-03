import type { Metadata } from 'next';
import VillePage from '@/components/VillePage';

export const metadata: Metadata = {
  title: "Vendre un appartement loué à Vannes | VAL'",
  description: "Vendre un appartement, une maison ou un immeuble de rapport loué à Vannes. Marché 2026 : 4 181 €/m², rendement 4 à 5%. Estimation gratuite.",
  alternates: { canonical: 'https://vendre-appartement-loue.com/vendre-appartement-loue-vannes' },
  openGraph: {
    title: "Vendre un appartement loué à Vannes | VAL'",
    description: "Vendre un bien loué à Vannes : marché 2026, rendements par quartier, méthode de vente.",
    url: 'https://vendre-appartement-loue.com/vendre-appartement-loue-vannes',
  },
};

const data = {
  ville: 'Vannes',
  slug: 'vannes',
  heroLead:
    "Vannes est notre base, au 22 rue Alfred Kastler. C'est le marché que nous connaissons le mieux, quartier par quartier, un atout direct pour bien positionner et vendre votre bien occupé.",
  stats: [
    { label: 'Prix moyen 2026', value: '4 181 €/m²' },
    { label: 'Rendement locatif brut', value: '4 à 5 %' },
    { label: 'Délai de vente moyen', value: '128 jours' },
  ],
  marketParagraphs: [
    "Après quatre années de hausse (+26% en cinq ans), le marché vannetais s'ajuste depuis 2024 : environ -4,6% sur douze mois, plus marqué sur les maisons (-8,2%) que sur les appartements (-3,5%). Vannes reste néanmoins environ 29% au-dessus de la moyenne du Morbihan. Pour un vendeur, ce contexte change une chose essentielle : le prix ne se fixe plus, il s'argumente.",
    "Particularité locale : à Vannes, l'appartement se négocie parfois plus cher que la maison, du fait de la rareté des petites surfaces en centre historique. Un T2 de 40 m² à 3 900 €/m² (156 000 €), loué 17 €/m² (680 €/mois), affiche un rendement brut d'environ 5,2%. C'est exactement l'argument que nous mettons en avant auprès de nos acheteurs investisseurs.",
    "Le marché locatif reste tendu (loyer médian 18 €/m², +3% sur un an), porté par les actifs en télétravail, les retraités qui s'installent et les 8 000 étudiants du campus de Tohannic. Un bien vendu à Vannes trouve preneur en 128 jours en moyenne, mais les biens correctement positionnés dès le premier mois se vendent en 4 à 8 semaines. Sur un bien classé F ou G, la décote de marché atteint souvent 10 à 20% : une rénovation ciblée avant la vente peut parfois rapporter plus que la remise elle-même.",
  ],
  quartiers: [
    { name: 'Intra-muros & remparts', description: "Le quartier le plus ancien, très recherché en meublé. Marché de patience, plus-value quasi assurée à la revente." },
    { name: 'Conleau', description: "Le quartier le plus cher de Vannes. Familles aisées, retraités actifs, investisseurs patrimoniaux." },
    { name: 'Tohannic', description: "8 000 étudiants, pôle technologique. Le secteur de référence pour la location étudiante, avec le meilleur rendement de la ville." },
    { name: 'Secteur gare', description: "TGV (Paris en 2h15), CHU. Le point d'entrée le plus abordable, avec un vrai potentiel de rénovation." },
  ],
  sourceNote: "Source : étude de marché Ukan Group 2026, données SeLoger, MeilleursAgents, Figaro Immobilier et DVF.",
  autresVilles: [
    { name: 'Lorient', href: '/vendre-appartement-loue-lorient' },
    { name: 'Rennes', href: '/vendre-appartement-loue-rennes' },
    { name: 'Nantes', href: '/vendre-appartement-loue-nantes' },
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
            serviceType: 'Vente appartement loué à Vannes',
            provider: { '@type': 'RealEstateAgent', name: "VAL' - Vendre Appartement Loué", url: 'https://vendre-appartement-loue.com' },
            areaServed: { '@type': 'City', name: 'Vannes' },
            description: data.heroLead,
          }),
        }}
      />
      <VillePage data={data} />
    </>
  );
}
