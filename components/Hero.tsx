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
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md mb-8 border border-green-100">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-semibold text-gray-700">
                Estimation gratuite sous 24h
              </span>
            </div>

            {/* H1 court et percutant avec SEO */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Vendre votre appartement loué{' '}
              <span className="text-primary">au meilleur prix</span>
            </h1>

            {/* Sous-titre naturel et convaincant */}
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-4">
              L'agence spécialisée vente de biens loués en Bretagne : Vannes, Lorient, Rennes, Nantes, Brest et Saint-Malo
            </p>

            {/* CTA optimisés */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={openTallyPopup}
                className="bg-primary text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto group"
              >
                Vendre mon appartement loué
                <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button
                onClick={openTallyPopup}
                className="bg-white text-primary border-2 border-primary px-10 py-5 rounded-xl text-lg font-bold hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Estimation gratuite 24h
              </button>
            </div>

            {/* Texte SEO enrichi avec mots-clés géolocalisés */}
            <div className="max-w-4xl mx-auto text-left bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-green-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Pourquoi choisir VAL' pour vendre votre appartement loué en Bretagne ?
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <div className="flex gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Spécialiste vente appartement loué</p>
                    <p className="text-sm">La seule agence 100% dédiée à la <strong>vente d'appartements loués</strong> et <strong>maisons louées</strong> en Bretagne. Nous vendons votre <strong>bien loué</strong> sans congé locataire.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Expert local Bretagne</p>
                    <p className="text-sm">Présents à <strong>Vannes</strong>, <strong>Lorient</strong>, <strong>Rennes</strong>, <strong>Nantes</strong>, <strong>Brest</strong>, <strong>Saint-Malo</strong>. Nous connaissons parfaitement le marché pour <strong>vendre un appartement loué</strong> dans chaque ville.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Réseau investisseurs exclusif</p>
                    <p className="text-sm">Nos 12 conseillers (ex-Amundi, Arkéa, Praemia) ciblent des acheteurs investisseurs recherchant spécifiquement des <strong>appartements loués</strong> et <strong>biens occupés</strong>.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Vente rapide garantie</p>
                    <p className="text-sm"><strong>Vendre un appartement loué</strong> est 30% plus rapide avec VAL'. Votre <strong>maison louée</strong> ou <strong>appartement loué</strong> se vend en 30-60 jours en moyenne.</p>
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
