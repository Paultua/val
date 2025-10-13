import { Target, MapPin, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function WhyVal() {
  const features = [
    {
      icon: Target,
      title: 'Expertise Ultime',
      description:
        "Contrairement aux agences généralistes, VAL' est paramétré pour vendre ce type de biens. Notre expertise métier et financière, associée à un réseau exclusif d'investisseurs qualifiés, garantit la concrétisation de votre vente avec locataire.",
    },
    {
      icon: MapPin,
      title: 'Accompagnement Local',
      description:
        'Bureaux à Vannes (56) et Paris - Proximité et réactivité sur le marché immobilier locatif. Une connaissance approfondie des spécificités locales pour optimiser votre transaction.',
    },
    {
      icon: TrendingUp,
      title: 'Valorisation Optimale',
      description:
        'Estimation juste de tous vos biens immobiliers locatifs pour votre vente bien occupé. Maximisez la valeur de votre investissement grâce à notre expertise du marché.',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            L'agence immobilière des biens loués en{' '}
            <span className="text-primary">Bretagne</span> et{' '}
            <span className="text-primary">Paris</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Spécialistes de la vente d'appartements, maisons et commerces loués
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg shadow-gray-200/50 hover:shadow-xl transition-shadow duration-300 rounded-2xl"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
