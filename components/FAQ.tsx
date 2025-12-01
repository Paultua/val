import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      question: "Comment vendre un appartement loué à Vannes ?",
      answer:
        "Vendre un appartement loué à Vannes est simple avec VAL', l'agence spécialisée dans la vente d'appartements loués dans le Morbihan. À Vannes, nous vendons votre appartement loué en moyenne 30% plus rapidement qu'une agence classique. Pourquoi ? Car nous ciblons directement les investisseurs recherchant des appartements loués à Vannes pour leur rendement attractif (4-6% brut). Notre process pour vendre votre appartement loué à Vannes : évaluation financière de votre appartement loué, mise en avant auprès de notre réseau d'investisseurs, visites organisées avec votre locataire, et vente rapide. Que vous possédiez un studio loué, un T2 loué ou un T3 loué à Vannes centre ou Vannes périphérie, nous valorisons votre appartement loué comme un actif rentable.",
    },
    {
      question: "Vendre un appartement loué à Lorient : combien de temps ?",
      answer:
        "Vendre un appartement loué à Lorient prend en moyenne 45 à 60 jours avec VAL'. Le marché de l'appartement loué à Lorient est très dynamique grâce au port, à la base navale et aux écoles d'ingénieurs qui assurent une demande locative stable. Pour vendre rapidement votre appartement loué à Lorient, nous le présentons à des investisseurs ciblés recherchant des appartements loués dans le Morbihan. Les appartements loués à Lorient (Nouvelle Ville, Centre-Ville, Merville) offrent des rendements de 5-7%, ce qui attire nos acheteurs. Vendre un appartement loué à Lorient avec VAL' garantit : conservation de vos loyers pendant la vente, pas de travaux à prévoir, et acheteurs investisseurs qualifiés.",
    },
    {
      question: "Vendre un appartement loué à Rennes : quelle stratégie ?",
      answer:
        "Vendre un appartement loué à Rennes nécessite une expertise du marché locatif rennais. À Rennes, capitale bretonne en forte croissance, vendre un appartement loué est stratégique car la demande locative est soutenue (60 000 étudiants + nombreux actifs). Pour vendre votre appartement loué à Rennes, VAL' utilise une méthode d'investissement : nous calculons le rendement de votre appartement loué, identifions son potentiel de valorisation, et le présentons à notre réseau d'investisseurs institutionnels et privés. Vendre un appartement loué à Rennes Centre, Villejean, Maurepas ou Beaulieu avec VAL' assure une transaction rapide car nous ciblons des acheteurs recherchant spécifiquement des appartements loués à Rennes.",
    },
    {
      question: "Vendre un appartement loué à Nantes : pourquoi c'est plus rapide ?",
      answer:
        "Vendre un appartement loué à Nantes est effectivement plus rapide qu'un bien vide car vous vendez un actif immédiatement rentable. À Nantes, métropole attractive de Loire-Atlantique, les investisseurs recherchent activement des appartements loués pour sécuriser leur investissement. Avec VAL', vendre votre appartement loué à Nantes (Île de Nantes, Erdre, Doulon, Malakoff) se fait en 30-50 jours grâce à notre réseau exclusif. Votre appartement loué à Nantes continue de générer des revenus pendant toute la durée de vente. Nous valorisons chaque appartement loué à Nantes selon son rendement (4-6% en moyenne), la qualité du bail, et le potentiel du quartier.",
    },
    {
      question: "Peut-on vendre un appartement loué à Brest ?",
      answer:
        "Absolument ! Vendre un appartement loué à Brest est même recommandé car le marché locatif brestois est stable (présence militaire, université, technopôle). Pour vendre un appartement loué à Brest, VAL' s'appuie sur sa connaissance du Finistère et ses contacts investisseurs. Les appartements loués à Brest (Siam, Saint-Martin, Europe, Lambezellec) offrent des rendements attractifs de 5-7%. Vendre votre appartement loué à Brest avec notre agence spécialisée vous évite la contrainte du congé locataire et accélère la transaction. Nous présentons votre appartement loué à Brest à des acheteurs qui apprécient la sécurité d'un bien déjà occupé et rentable.",
    },
    {
      question: "Vendre un appartement loué à Saint-Malo : quels avantages ?",
      answer:
        "Vendre un appartement loué à Saint-Malo présente de multiples avantages. À Saint-Malo, station balnéaire prisée d'Ille-et-Vilaine, un appartement loué se valorise excellemment auprès d'investisseurs recherchant du rendement locatif touristique ou résidentiel. Pour vendre votre appartement loué à Saint-Malo (Intra-Muros, Paramé, Rothéneuf, Courtoisville), VAL' met en avant son potentiel double : location longue durée ou saisonnière. Vendre un appartement loué à Saint-Malo évite la vacance locative et permet de conserver vos revenus jusqu'à la signature. Notre réseau d'investisseurs apprécie particulièrement les appartements loués à Saint-Malo pour leur emplacement premium.",
    },
    {
      question: "Vendre une maison louée en Bretagne : même process qu'un appartement loué ?",
      answer:
        "Vendre une maison louée en Bretagne suit effectivement un process similaire à vendre un appartement loué, avec quelques spécificités. Que votre maison louée soit à Vannes, Lorient, Rennes, Nantes, Brest ou Saint-Malo, nous la valorisons comme un investissement locatif. Une maison louée attire des investisseurs recherchant du rendement stable et du patrimoine durable. Pour vendre votre maison louée, VAL' analyse : le rendement locatif de la maison louée, la qualité du bail et du locataire, le potentiel de valorisation. Vendre une maison louée conserve vos revenus pendant la vente et évite les travaux. Les maisons louées en Bretagne (individuelle, mitoyenne, avec jardin) séduisent particulièrement les family offices et investisseurs privés de notre réseau.",
    },
    {
      question: "Vendre un bien loué : appartement ou maison, quelle différence de prix ?",
      answer:
        "Pour vendre un bien loué, qu'il s'agisse d'un appartement loué ou d'une maison louée, nous appliquons la même méthode de valorisation par le rendement. Un appartement loué se vend généralement sur un rendement brut de 4-7% selon la ville (Vannes, Lorient, Rennes, Nantes, Brest, Saint-Malo). Une maison louée affiche souvent un rendement de 3-5% mais une meilleure valorisation long terme. Vendre votre bien loué avec VAL' garantit le meilleur prix car nous ciblons des acheteurs investisseurs qui raisonnent en TRI (Taux de Rendement Interne), cash-flow et potentiel. Appartement loué ou maison louée, votre bien est présenté comme un actif financier performant.",
    },
    {
      question: "Pourquoi vendre un appartement loué plutôt que vide ?",
      answer:
        "Vendre un appartement loué présente 5 avantages majeurs sur vendre un appartement vide : 1) Vous conservez vos loyers pendant toute la durée de vente de l'appartement loué, 2) Aucuns travaux à réaliser sur l'appartement loué, 3) Pas de vacance locative ni de charges à supporter, 4) Les investisseurs achètent plus vite un appartement loué qu'un particulier un bien vide, 5) Valorisation financière optimale de votre appartement loué. À Vannes, Lorient, Rennes, Nantes, Brest et Saint-Malo, vendre un appartement loué via VAL' est 30% plus rapide. Nous ne vendons QUE des appartements loués et maisons louées, c'est notre ADN.",
    },
    {
      question: "Vendre appartement loué : quels documents préparer ?",
      answer:
        "Pour vendre un appartement loué, préparez ces documents essentiels : bail en cours de votre appartement loué, quittances de loyer (12 derniers mois), diagnostics immobiliers obligatoires, charges de copropriété, taxe foncière, DPE de l'appartement loué. Chez VAL', nous accompagnons chaque vendeur d'appartement loué dans la constitution du dossier. Vendre un appartement loué à Vannes, Lorient, Rennes, Nantes, Brest ou Saint-Malo nécessite aussi de respecter le droit de préemption du locataire. Nous gérons cette procédure légale pour vendre votre appartement loué en toute conformité et rapidité.",
    },
    {
      question: "Combien coûte de vendre un appartement loué avec VAL' ?",
      answer:
        "Vendre un appartement loué avec VAL' coûte exactement le même honoraire qu'une agence classique (5-7% selon barème), mais avec 3 différences majeures : 1) Votre appartement loué se vend 30% plus vite donc vous économisez du temps, 2) Nous obtenons le meilleur prix pour votre appartement loué grâce à notre valorisation financière, 3) Vous gardez vos loyers jusqu'à la vente finale. Pour vendre un appartement loué à Vannes, Lorient, Rennes, Nantes, Brest ou Saint-Malo, nos honoraires sont transparents et dégressifs selon la valeur de l'appartement loué. Contactez-nous pour une estimation gratuite de votre appartement loué.",
    },
    {
      question: "Vente appartement loué : que devient le locataire ?",
      answer:
        "Lors d'une vente d'appartement loué, le locataire reste en place et son bail se poursuit avec le nouvel propriétaire. C'est l'atout principal pour vendre un appartement loué : l'acheteur acquiert un bien immédiatement rentable. Pour la vente de votre appartement loué, nous informons le locataire selon la procédure légale, organisons les visites en respectant son droit de jouissance paisible, et gérons son éventuel droit de préemption (rarement exercé sur un appartement loué). Vendre un appartement loué à Vannes, Lorient, Rennes, Nantes, Brest ou Saint-Malo conserve les droits du locataire : même loyer, même bail, même conditions. C'est cette sécurité juridique qui attire les investisseurs vers les appartements loués.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Vendre un Appartement Loué : Questions Fréquentes
          </h1>
          <p className="text-lg text-gray-600">
            Tout savoir pour vendre votre appartement loué à Vannes, Lorient, Rennes, Nantes, Brest et Saint-Malo
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

        <div className="mt-16 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Prêt à vendre votre appartement loué ?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Spécialistes de la vente d'appartements loués et maisons louées à Vannes, Lorient, Rennes, Nantes, Brest et Saint-Malo
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
          >
            Estimation gratuite de votre appartement loué
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

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-2xl font-bold text-primary mb-1">30%</div>
            <div className="text-sm text-gray-600">Plus rapide qu'une agence classique</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-2xl font-bold text-primary mb-1">6 villes</div>
            <div className="text-sm text-gray-600">Vannes, Lorient, Rennes, Nantes, Brest, Saint-Malo</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-2xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-gray-600">Spécialisés biens loués</div>
          </div>
        </div>
      </div>
    </section>
  );
}
