import type { Metadata } from 'next';
import VillePage from '@/components/VillePage';

export const metadata: Metadata = {
  title: "Vendre un appartement loué à Rennes | VAL'",
  description: "Vendre un appartement, une maison ou un immeuble de rapport loué à Rennes. Le marché le plus liquide de Bretagne, 70 000 étudiants. Estimation gratuite.",
  alternates: { canonical: 'https://vendre-appartement-loue.com/vendre-appartement-loue-rennes' },
  openGraph: {
    title: "Vendre un appartement loué à Rennes | VAL'",
    description: "Vendre un bien loué à Rennes : prix par quartier, rendements, méthode de vente.",
    url: 'https://vendre-appartement-loue.com/vendre-appartement-loue-rennes',
  },
};

const data = {
  ville: 'Rennes',
  slug: 'rennes',
  heroLead:
    "Capitale bretonne et 3ᵉ ville étudiante de France, Rennes offre le marché le plus liquide de la région : une demande locative structurellement forte, idéale pour vendre un bien déjà loué.",
  stats: [
    { label: 'Prix moyen', value: '3 807 €/m²' },
    { label: 'Rendement locatif brut', value: '4 à 6 %' },
    { label: 'Population étudiante', value: '70 000' },
  ],
  marketParagraphs: [
    "Le prix moyen à Rennes s'établit à 3 807 €/m² (données PAP/DVF, mai 2026), avec des écarts marqués selon les quartiers : de 2 977 €/m² à Villejean à plus de 4 500 €/m² en hypercentre. Les rendements bruts moyens tournent autour de 4%, avec des pointes à 5-6% sur les petites surfaces meublées ou en colocation.",
    "70 000 étudiants, un pôle économique diversifié (cybersécurité, numérique, santé), la ligne B du métro (2022) et la LGV Paris en 1h26 : ces fondamentaux garantissent une rotation locative rapide et une revente facilitée. C'est un argument de poids pour un acheteur investisseur qui recherche la liquidité.",
    "La colocation sur T4-T5 constitue une stratégie de rendement recherchée par nos acheteurs : un T4 de 83 m² loué en famille pour 900 € peut générer 1 200 à 1 300 € en colocation, portant le rendement brut au-delà de 6% dans certains secteurs — un argument fort au moment de valoriser votre bien.",
  ],
  quartiers: [
    { name: 'Villejean-Beauregard', description: "Les prix les plus bas de Rennes (2 977 – 3 515 €/m²), mais les rendements les plus élevés : 5,5 à 7,5%." },
    { name: 'Beaulieu', description: "Quartier étudiant (INSA, ESIR, IUT). Rendements entre 4,5 et 5,5% sur petites surfaces meublées." },
    { name: 'Baud-Chardonnet', description: "Requalification urbaine en cours, prix 3 000 – 3 500 €/m², rendements 4,8 à 5,2%." },
    { name: 'La Courrouze', description: "Écoquartier en valorisation, 3 400 – 3 800 €/m², rendement 3,8 à 4,2%." },
  ],
  sourceNote: "Source : données PAP et DVF, mai 2026.",
  autresVilles: [
    { name: 'Vannes', href: '/vendre-appartement-loue-vannes' },
    { name: 'Lorient', href: '/vendre-appartement-loue-lorient' },
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
            serviceType: 'Vente appartement loué à Rennes',
            provider: { '@type': 'RealEstateAgent', name: "VAL' - Vendre Appartement Loué", url: 'https://vendre-appartement-loue.com' },
            areaServed: { '@type': 'City', name: 'Rennes' },
            description: data.heroLead,
          }),
        }}
      />
      <VillePage data={data} />
    </>
  );
}
