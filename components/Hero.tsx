'use client';

import { Check, Users, MapPin, TrendingUp } from 'lucide-react';

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
      <section id="accueil" className="relative overflow-hidden pt-32 pb-20 lg:pt-36 lg:pb-28">
        {/* Accents de fond discrets */}
        <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-24 -right-32 w-[420px] h-[420px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute top-56 -left-32 w-[320px] h-[320px] rounded-full bg-secondary/20 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-16 items-center">
            {/* Colonne texte */}
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 mb-6 bg-white border border-gray-200 rounded-full px-4 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>Un service du</span>
                <a href="https://ukan-group.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Groupe Ukan
                </a>
                <span>à Vannes</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                Vendre un bien loué,
                <br />
                <span className="text-primary">sans donner congé au locataire</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
                VAL' est une agence spécialisée dans la vente d'appartements, de maisons,
                d'immeubles de rapport et de commerces déjà loués en Bretagne. Vous gardez vos
                loyers jusqu'à la signature.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button
                  onClick={openTallyPopup}
                  className="bg-primary text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-primary/90 transition-colors"
                >
                  Estimer mon bien loué
                </button>
                <a
                  href="#comment-ca-marche"
                  className="inline-flex items-center justify-center text-base font-semibold text-gray-700 hover:text-primary transition-colors"
                >
                  Comment ça marche →
                </a>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  Spécialistes du bien occupé
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  Basés à Vannes, actifs sur toute la Bretagne
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary flex-shrink-0" />
                  Acheteurs investisseurs
                </div>
              </div>
            </div>

            {/* Colonne visuelle : exemple d'estimation */}
            <div>
              <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-6 lg:p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Exemple d'estimation
                  </span>
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    Bien loué
                  </span>
                </div>

                <p className="text-sm text-gray-500 mb-1">Appartement T2 · Vannes</p>
                <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">156 000 €</p>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Loyer mensuel</p>
                    <p className="font-semibold text-gray-900">680 €</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Rendement brut
                    </p>
                    <p className="font-semibold text-primary">5,2 %</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3 text-center">
                Exemple basé sur le marché vannetais 2026
              </p>
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
            description: 'Service spécialisé vente appartement loué, maison louée et immeuble de rapport en Bretagne. Expert vente bien occupé à Vannes, Lorient, Rennes, Nantes, Brest, Saint-Malo.',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'EUR',
              description: 'Estimation gratuite appartement loué sous 24h',
            },
          }),
        }}
      />
    </>
  );
}
