import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      question: "Que signifie VAL' et pourquoi choisir cette agence ?",
      answer:
        "VAL' signifie 'Vendez votre Appartement Loué'. Nous sommes la seule agence spécialisée exclusivement dans la vente de biens loués en Bretagne et à Paris intra-muros. Notre ADN financier unique, avec +12 conseillers issus de grandes maisons comme Amundi, Arkéa, Praemia et La Française, nous permet de parler le langage des investisseurs. Nous ne vendons pas comme une agence traditionnelle, nous valorisons votre actif immobilier comme un produit d'investissement.",
    },
    {
      question: "Quelle est votre différence avec les agences immobilières classiques ?",
      answer:
        "Les agences classiques vendent des biens vides à des primo-accédants. Nous, nous vendons des biens occupés à des investisseurs. Notre réseau exclusif d'acheteurs qualifiés, notre compréhension des rendements locatifs et notre expertise financière font toute la différence. Nous sommes paramétrés pour ce marché de niche.",
    },
    {
      question: "Comment gérez-vous la présence du locataire ?",
      answer:
        "C'est justement notre force. Nous maîtrisons parfaitement les aspects juridiques et pratiques de la vente avec locataire en place. Nous organisons les visites en respectant le bail, valorisons le bien occupé comme un actif performant, et trouvons des acheteurs investisseurs qui recherchent spécifiquement ce type de biens.",
    },
    {
      question: "Dans quelles villes intervenez-vous ?",
      answer:
        "Nous couvrons toute la Bretagne avec une présence forte à Rennes, Nantes, Vannes, Lorient, Brest, Saint-Malo, Quimper et Pontivy. Nous intervenons également à Paris intra-muros uniquement. La Bretagne est notre zone prioritaire où la concurrence est plus faible et où notre expertise locale fait toute la différence. Nos 12 conseillers sont répartis entre la Bretagne et Paris pour un accompagnement de proximité.",
    },
    {
      question: "Quel est votre réseau d'acheteurs ?",
      answer:
        "Grâce à l'origine professionnelle de nos conseillers (gestion d'actifs, banque privée, family offices), nous avons accès à un réseau fermé d'investisseurs qualifiés : SCPI, institutionnels, investisseurs privés patrimoniaux. Ces acheteurs recherchent activement des biens loués et décident rapidement.",
    },
    {
      question: "Combien de temps pour vendre un bien loué ?",
      answer:
        "En moyenne, un bien loué se vend 30% plus rapidement avec VAL' qu'avec une agence traditionnelle. Pourquoi ? Parce que nous ciblons directement les bons acheteurs. Là où une agence classique cherche un particulier pour habiter, nous présentons votre bien à des investisseurs qui recherchent exactement ce profil.",
    },
    {
      question: "Comment valorisez-vous un bien loué ?",
      answer:
        "Nous appliquons une méthode d'évaluation d'investissement : rendement locatif brut et net, taux de capitalisation, potentiel d'optimisation fiscale (Pinel, Malraux, monuments historiques), qualité du locataire et du bail. Cette approche financière permet d'obtenir le meilleur prix pour votre bien.",
    },
    {
      question: "Quels types de biens vendez-vous ?",
      answer:
        "Nous vendons tous types de biens loués : appartements (du studio au T5), maisons individuelles, immeubles de rapport, commerces et locaux professionnels. Du petit investissement locatif au patrimoine immobilier conséquent, nous adaptons notre stratégie à chaque situation.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Questions Fréquentes
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez notre ADN et notre approche unique de la vente de biens loués
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-2xl border-0 shadow-lg shadow-gray-200/50 px-6 hover:shadow-xl transition-shadow"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-primary py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Vous avez d'autres questions ?</p>
          <a
            href="#contact"
            className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            Contactez notre équipe
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
