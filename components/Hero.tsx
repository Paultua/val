'use client';

import { Check, Users, MapPin } from 'lucide-react';

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
      <section id="accueil" className="relative pt-32 pb-20 lg:pt-28 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Repère de confiance : groupe Ukan, vérifiable */}
            <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 mb-8">
              <span>Un service du</span>
              <a href="https://ukan-group.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                groupe Ukan
              </a>
              <span>— Vannes</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Vendre un bien loué,{' '}
              <span className="text-primary">sans donner congé au locataire</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
              VAL' est une agence spécialisée dans la vente d'appartements, de maisons, d'immeubles
              de rapport et de commerces déjà loués, en Bretagne (Vannes, Lorient, Rennes, Nantes,
              Brest, Saint-Malo). Vous gardez vos loyers jusqu'à la signature.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={openTallyPopup}
                className="bg-primary text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-primary/90 transition-colors w-full sm:w-auto"
              >
                Estimer mon bien loué
              </button>
              <a
                href="#comment-ca-marche"
                className="text-base font-semibold text-gray-700 hover:text-primary transition-colors"
              >
                Comment ça marche →
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Spécialistes du bien occupé</p>
                  <p className="text-sm text-gray-600">Nous ne vendons que des biens loués</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Ancrage Bretagne</p>
                  <p className="text-sm text-gray-600">Basés à Vannes, actifs sur toute la région</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Acheteurs investisseurs</p>
                  <p className="text-sm text-gray-600">Un bien loué se vend à un investisseur, pas à un particulier</p>
                </div>
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
