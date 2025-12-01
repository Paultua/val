'use client';

import { Check, TrendingUp, Users, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  const openTallyPopup = () => {
    if (typeof window !== 'undefined' && (window as any).Tally) {
      (window as any).Tally.openPopup('wQPgDX', {
        emoji: {
          text: '👋',
          animation: 'wave',
        },
      });
    }
  };

  return (
    <>
      <section id="accueil" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Gradient de fond amélioré */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 opacity-80" />
        
        {/* Dégradé radial subtil pour plus de profondeur */}
        <div className="absolute inset-0 bg-radial-gradient opacity-40" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)',
        }} />
        
        {/* Contenu */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto relative">
            {/* Badge de confiance */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md mb-12 border border-green-100">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-semibold text-gray-700">
                N°1 Vente investissement locatif en Bretagne
              </span>
            </div>

            {/* H1 court et percutant avec SEO */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Vendre votre bien{' '}
              <span className="text-primary">au meilleur prix</span>
            </h1>

            {/* Sous-titre naturel et convaincant */}
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12">
              L'agence spécialisée vente de biens loués en Bretagne : Vannes, Lorient, Rennes, Nantes, Brest et Saint-Malo
            </p>

            {/* CTA optimisés */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={openTallyPopup}
                className="bg-primary text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto group"
              >
                Vendre mon bien
                <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button
                onClick={openTallyPopup}
                className="bg-white text-primary border-2 border-primary px-10 py-5 rounded-xl text-lg font-bold hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Estimation gratuite
              </button>
            </div>

            {/* Texte SEO enrichi avec mots-clés géolocalisés - VERSION CONDENSÉE */}
            <div className="max-w-4xl mx-auto text-left bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-green-100">
              <p className="text-center text-gray-700 mb-6 text-lg">
                Vous souhaitez <strong>vendre un appartement loué</strong> ou une <strong>maison louée</strong> ? 
                VAL' est l'expert pour <strong>vendre votre bien loué</strong> rapidement, sans congé locataire.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 text-gray-700 text-sm">
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">100% spécialisés biens loués</p>
                    <p>Seule agence dédiée à la vente d'appartements loués en Bretagne</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Expertise locale Bretagne</p>
                    <p>Présents à Vannes, Lorient, Rennes, Nantes, Brest, Saint-Malo</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Réseau investisseurs qualifiés</p>
                    <p>12 conseillers experts ciblent les bons acheteurs pour votre bien loué</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Vente 30% plus rapide</p>
                    <p>Votre appartement loué vendu en moyenne sous 45 jours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Badges de confiance supplémentaires */}
            <div className="mt-10 flex flex-wrap justify-center gap-8 items-center opacity-70">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">127+</div>
                <div className="text-sm text-gray-600">Biens loués vendus</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-gray-600">Note clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">45j</div>
                <div className="text-sm text-gray-600">Délai moyen vente</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">6</div>
                <div className="text-sm text-gray-600">Villes Bretagne</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org Service pour SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Vente appartement loué',
            provider: {
              '@type': 'RealEstateAgent',
              name: "VAL' - Vendre Appartement Loué",
              url: 'https://vendre-appartement-loue.com',
              telephone: '+33763648823',
              areaServed: [
                { '@type': 'City', name: 'Vannes' },
                { '@type': 'City', name: 'Lorient' },
                { '@type': 'City', name: 'Rennes' },
                { '@type': 'City', name: 'Nantes' },
                { '@type': 'City', name: 'Brest' },
                { '@type': 'City', name: 'Saint-Malo' },
              ],
            },
            description: 'Service spécialisé vente appartement loué et maison louée en Bretagne. Expert vente bien occupé à Vannes, Lorient, Rennes, Nantes, Brest, Saint-Malo.',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'EUR',
              description: 'Estimation gratuite appartement loué sous 24h',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '127',
            },
          }),
        }}
      />
    </>
  );
}
