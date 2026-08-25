import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      question: "Pourquoi vendre un appartement loué plutôt qu'attendre qu'il se libère ?",
      answer:
        "Parce qu'un bien loué se vend à un acheteur différent : un investisseur, pas un futur habitant. Vous conservez vos loyers jusqu'à la signature, vous n'avez ni congé à donner ni vacance locative à gérer, et vous n'avez pas à faire de travaux de présentation. Un investisseur, lui, achète un rendement immédiat — c'est cet argument que nous mettons en avant pour vendre plus vite.",
    },
    {
      question: "Que devient le locataire lors de la vente ?",
      answer:
        "Rien ne change pour lui : le bail se poursuit à l'identique avec le nouveau propriétaire, mêmes conditions, même loyer. Nous informons le locataire selon la procédure légale, organisons les visites en respectant son droit de jouissance paisible, et gérons son éventuel droit de préemption (rarement exercé sur un bien déjà loué). C'est cette continuité qui rassure les investisseurs.",
    },
    {
      question: "Quels documents faut-il préparer ?",
      answer:
        "Le bail en cours, les quittances de loyer des 12 derniers mois, les diagnostics immobiliers obligatoires (dont le DPE), les charges de copropriété si applicable, et l'avis de taxe foncière. Nous vous accompagnons dans la constitution du dossier et vérifions le respect du droit de préemption du locataire avant toute mise en vente.",
    },
    {
      question: "Appartement, maison ou local commercial loué : même méthode ?",
      answer:
        "Le principe est le même — valoriser le bien par son rendement plutôt que par sa seule surface — mais les acheteurs diffèrent. Un appartement loué se vend souvent sur un rendement brut de 4 à 7% selon la ville ; une maison louée, plutôt 3 à 5% avec un potentiel de valorisation à long terme ; un commerce loué dépend surtout de la solidité du bail commercial et de l'enseigne en place.",
    },
    {
      question: "Combien de temps prend la vente d'un bien loué ?",
      answer:
        "Cela dépend du marché local, du rendement affiché et de la qualité du bail, mais un bien déjà occupé se vend en général plus vite qu'un bien vide comparable : l'acheteur investisseur n'a pas à attendre une libération ni à anticiper des travaux. Nous vous donnons une estimation de délai propre à votre bien dès l'estimation gratuite.",
    },
    {
      question: "Combien coûte une vente avec VAL' ?",
      answer:
        "Nos honoraires sont alignés sur les barèmes classiques du marché (autour de 5 à 7% selon la valeur du bien), sans surcoût pour la spécialisation « bien loué ». La différence n'est pas sur le prix de la prestation, mais sur qui nous ciblons : des acheteurs investisseurs déjà qualifiés, qui comprennent la valeur d'un bien occupé.",
    },
    {
      question: "Est-ce que je dois faire des travaux avant de vendre ?",
      answer:
        "En général non. C'est l'un des intérêts de vendre un bien loué : un investisseur achète le rendement et l'état d'occupation, pas un coup de cœur décoratif. Si des travaux sont vraiment nécessaires (mise aux normes DPE par exemple), nous vous le disons clairement dès l'estimation plutôt que de vous les faire découvrir après coup.",
    },
    {
      question: "Vendez-vous des biens loués en dehors de la Bretagne ?",
      answer:
        "Notre cœur d'activité est la Bretagne (Vannes, Lorient, Rennes, Nantes, Brest, Saint-Malo), où le groupe Ukan est implanté depuis plusieurs années. Nous intervenons également en Île-de-France (Paris et première couronne) via notre réseau d'investisseurs.",
    },
  ];

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-20 lg:py-32 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Questions fréquentes
          </h2>
          <p className="text-lg text-gray-600">
            Tout savoir pour vendre un appartement, une maison ou un commerce loué
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

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Prêt à vendre votre bien loué ?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Estimation gratuite, sans engagement.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            Estimer mon bien loué
          </a>
        </div>
      </div>
    </section>
  );
}
