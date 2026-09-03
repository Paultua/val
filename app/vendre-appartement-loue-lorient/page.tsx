import type { Metadata } from 'next';
import VillePage from '@/components/VillePage';

export const metadata: Metadata = {
  title: "Vendre un appartement loué à Lorient | VAL'",
  description: "Vendre un appartement, une maison ou un immeuble de rapport loué à Lorient. Les meilleurs rendements du Morbihan (5 à 8,5%). Estimation gratuite.",
  alternates: { canonical: 'https://vendre-appartement-loue.com/vendre-appartement-loue-lorient' },
  openGraph: {
    title: "Vendre un appartement loué à Lorient | VAL'",
    description: "Vendre un bien loué à Lorient : rendements, quartiers, exemple d'immeuble de rapport.",
    url: 'https://vendre-appartement-loue.com/vendre-appartement-loue-lorient',
  },
};

const data = {
  ville: 'Lorient',
  slug: 'lorient',
  heroLead:
    "Prix accessibles, rendements parmi les meilleurs de Bretagne : Lorient est un marché où le bien loué se valorise particulièrement bien auprès des investisseurs.",
  stats: [
    { label: 'Prix moyen', value: '2 650 – 2 720 €/m²' },
    { label: 'Rendement locatif brut', value: '5 à 8,5 %' },
    { label: 'Décote vs Vannes', value: '-30 à -40 %' },
  ],
  marketParagraphs: [
    "Avec des prix inférieurs de 30 à 40% à ceux de Vannes, mais des loyers qui ne subissent pas la même décote, Lorient offre le meilleur ratio prix-loyer du Morbihan. Un T2 acheté 120 000 € et loué 550 € charges comprises affiche un rendement brut proche de 5,5% — c'est précisément le type de bien que nos acheteurs investisseurs recherchent en priorité.",
    "La demande locative s'appuie sur trois piliers stables : le bassin d'emploi naval et industriel, l'Université Bretagne Sud, et les jeunes actifs du nautisme et des énergies marines renouvelables (Lorient La Base, Route du Rhum, Vendée Globe). Ce dynamisme économique soutient une demande locative durable, un argument fort au moment de la vente.",
    "Pour un immeuble de rapport, Lorient est un marché particulièrement intéressant : un exemple récent illustre un immeuble acquis 700 000 € pour une valeur de marché avoisinant le million d'euros, avec un TRI de 12 à 14% après restructuration locative. Ce type de bien — plusieurs lots loués sous un même titre — intéresse un profil d'acheteur différent d'un appartement isolé, que nous savons cibler.",
  ],
  quartiers: [
    { name: 'Centre-ville & port', description: "Demande locative la plus dense, rotation quasi nulle. Biens qui se louent et se vendent vite." },
    { name: 'Nouvelle Ville', description: "Vie étudiante et commerciale. Idéal pour les stratégies de colocation sur T4-T5." },
    { name: 'Merville', description: "Quartier résidentiel, familles, locataires stables et fidèles." },
    { name: 'Keroman', description: "Premier port de pêche de France, en pleine requalification. Potentiel de revalorisation." },
  ],
  sourceNote: "Source : analyse de marché Ukan Group, données locales 2026.",
  autresVilles: [
    { name: 'Vannes', href: '/vendre-appartement-loue-vannes' },
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
            serviceType: 'Vente appartement loué à Lorient',
            provider: { '@type': 'RealEstateAgent', name: "VAL' - Vendre Appartement Loué", url: 'https://vendre-appartement-loue.com' },
            areaServed: { '@type': 'City', name: 'Lorient' },
            description: data.heroLead,
          }),
        }}
      />
      <VillePage data={data} />
    </>
  );
}
