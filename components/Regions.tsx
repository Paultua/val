import { MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Regions() {
  const villes = [
    {
      name: 'Vannes',
      href: '/vendre-appartement-loue-vannes',
      description: "Notre base, au cœur du Golfe du Morbihan. Marché résidentiel tendu, rendements 4 à 5%.",
    },
    {
      name: 'Lorient',
      href: '/vendre-appartement-loue-lorient',
      description: "Les meilleurs rendements du Morbihan (5 à 8,5%), portés par le nautisme et les énergies marines.",
    },
    {
      name: 'Rennes',
      href: '/vendre-appartement-loue-rennes',
      description: "Le marché le plus liquide de Bretagne, tiré par 70 000 étudiants et le pôle tech.",
    },
    {
      name: 'Nantes',
      href: '/vendre-appartement-loue-nantes',
      description: "Métropole attractive de Loire-Atlantique, forte demande d'investisseurs sur le bien occupé.",
    },
    {
      name: 'Brest',
      href: '/vendre-appartement-loue-brest',
      description: "Marché stable adossé à la présence militaire, l'université et le technopôle.",
    },
    {
      name: 'Saint-Malo',
      href: '/vendre-appartement-loue-saint-malo',
      description: "Le potentiel double location longue durée / saisonnière valorise le bien loué.",
    },
  ];

  return (
    <section id="regions" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Nous intervenons <span className="text-primary">partout en Bretagne</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Appartements, maisons, immeubles de rapport et commerces loués : Vannes, Lorient, Rennes, Nantes, Brest et Saint-Malo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {villes.map((ville) => (
            <a key={ville.name} href={ville.href} className="group block">
              <Card className="border border-gray-200 shadow-none rounded-2xl h-full transition-colors group-hover:border-primary/40">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{ville.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{ville.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Vendre à {ville.name}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
