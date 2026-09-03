import type { Metadata } from 'next';
import VillePage from '@/components/VillePage';

export const metadata: Metadata = {
  title: "Vendre un appartement loué à Saint-Malo | VAL'",
  description: "Vendre un appartement, une maison ou un immeuble de rapport loué à Saint-Malo. Double potentiel location longue durée / saisonnière. Estimation gratuite.",
  alternates: { canonical: 'https://vendre-appartement-loue.com/vendre-appartement-loue-saint-malo' },
  openGraph: {
    title: "Vendre un appartement loué à Saint-Malo | VAL'",
    description: "Vendre un bien loué à Saint-Malo : marché, potentiel touristique, méthode de vente.",
    url: 'https://vendre-appartement-loue.com/vendre-appartement-loue-saint-malo',
  },
};

const data = {
  ville: 'Saint-Malo',
  slug: 'saint-malo',
  heroLead:
    "Station balnéaire prisée d'Ille-et-Vilaine, Saint-Malo valorise particulièrement bien un bien loué grâce à son double potentiel : location longue durée ou saisonnière.",
  stats: [
    { label: 'Prix moyen', value: '≈ 4 500 €/m²' },
    { label: 'Profil dominant', value: 'Résidence secondaire' },
    { label: 'Rendement', value: 'Variable selon usage' },
  ],
  marketParagraphs: [
    "Saint-Malo fait partie des marchés bretons les plus chers, porté par une demande nationale (voire internationale) pour la résidence secondaire, notamment intra-muros et sur le littoral (Paramé, Rothéneuf). Cette tension soutient les prix mais garantit aussi une bonne liquidité en cas de revente.",
    "Pour un bien déjà loué, l'argument central auprès de nos acheteurs investisseurs est le potentiel double : location longue durée classique ou bascule vers la location saisonnière (sous réserve de la réglementation locale, à vérifier commune par commune). Un bien loué à Saint-Malo évite la vacance locative pendant la vente et permet de conserver vos revenus jusqu'à la signature.",
    "Chaque secteur (Intra-Muros, Paramé, Rothéneuf, Courtoisville) a sa propre dynamique de prix et de demande : nous établissons un avis de valeur chiffré propre à votre bien plutôt qu'une moyenne de ville.",
  ],
  sourceNote: "Chiffres de cadrage à affiner lors de l'estimation gratuite de votre bien.",
  autresVilles: [
    { name: 'Vannes', href: '/vendre-appartement-loue-vannes' },
    { name: 'Lorient', href: '/vendre-appartement-loue-lorient' },
    { name: 'Rennes', href: '/vendre-appartement-loue-rennes' },
    { name: 'Nantes', href: '/vendre-appartement-loue-nantes' },
    { name: 'Brest', href: '/vendre-appartement-loue-brest' },
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
            serviceType: 'Vente appartement loué à Saint-Malo',
            provider: { '@type': 'RealEstateAgent', name: "VAL' - Vendre Appartement Loué", url: 'https://vendre-appartement-loue.com' },
            areaServed: { '@type': 'City', name: 'Saint-Malo' },
            description: data.heroLead,
          }),
        }}
      />
      <VillePage data={data} />
    </>
  );
}
