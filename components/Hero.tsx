'use client';

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
    <section id="accueil" className="relative pt-48 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-green-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            <br />Votre bien est loué ?<br />
            Nous le vendons au bon prix, rapidement
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Expert de la vente de bien (appartment, maison, commerce) loué en <strong>Bretagne</strong> et <strong>Paris</strong>. Estimation gratuite sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={openTallyPopup}
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Confier ma vente
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 -z-10 opacity-20">
        <div className="w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-20">
        <div className="w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
