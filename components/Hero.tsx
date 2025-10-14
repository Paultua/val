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
    <section id="accueil" className="relative pt-54 pb-32 lg:pt-40 lg:pb-48 overflow-hidden">
      {/* Gradient de fond amélioré */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 opacity-80" />
      
      {/* Dégradé radial subtil pour plus de profondeur */}
      <div className="absolute inset-0 bg-radial-gradient opacity-40" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)',
      }} />
      
      {/* Contenu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto relative">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight relative">
            Votre bien est loué ?
            <br />
            Nous le <span className="text-primary">vendons au bon prix</span>, rapidement
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Les experts de la vente de biens loués (appartement, maison, commerce) en <strong>Bretagne</strong> et <strong>Paris</strong>. Estimation gratuite sous 24h.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <button
              onClick={openTallyPopup}
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Confier ma vente
            </button>
            <button
              onClick={openTallyPopup}
              className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-all duration-300 w-full sm:w-auto"
            >
              Estimer mon bien
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
