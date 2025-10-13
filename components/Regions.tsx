import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Regions() {
  const regions = [
    {
      name: 'Bretagne - Toute la région',
      priority: true,
      description:
        "Nous vendons des appartements loués, maisons louées et commerces loués en Bretagne. Vente de biens loués à Vannes, Rennes, Nantes, Lorient, Brest, Saint-Malo, Quimper et Pontivy.",
      highlights: [
        'Vendre appartement loué Rennes, Nantes, Vannes',
        'Maison louée à vendre Lorient, Brest, Quimper',
        'Commerce loué Saint-Malo, Pontivy, Morbihan',
        'Vente bien occupé toute la Bretagne',
      ],
    },
    {
      name: 'Paris & 1ère Couronne',
      priority: false,
      description:
        'Experts du marché parisien et de sa première couronne pour la vente de biens immobiliers loués dans la capitale et ses environs immédiats : Yvelines, Hauts-de-Seine, Val de Marne.',
      highlights: [
        'Appartement loué Paris',
        'Immeuble de rapport Paris',
        'Commerce loué centre Paris',
        'Investissement locatif Paris',
      ],
    },
  ];

  return (
    <section id="regions" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Nous intervenons <span className="text-primary">en Bretagne (Rennes, Nantes, Vannes, Lorient, Brest)</span>{' '}
            et <span className="text-primary">à Paris</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Deux régions stratégiques pour vendre votre bien loué (appartement loué, maison louée, commerce loué)
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {regions.map((region, index) => (
            <Card
              key={index}
              className={`border-0 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-300 rounded-2xl ${
                region.priority ? 'lg:scale-105' : ''
              }`}
            >
              <CardContent className="p-8 lg:p-10">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mt-2">{region.name}</h3>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">{region.description}</p>

                <div className="space-y-3">
                  {region.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                      <span className="text-sm font-medium text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
