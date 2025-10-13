import { Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function Expertise() {
  const companies = [
    { name: 'Amundi', logo: 'Amundi' },
    { name: 'Arkéa', logo: 'Arkéa' },
    { name: 'Praemia', logo: 'Praemia' },
    { name: 'La Française', logo: 'La Française' },
  ];

  return (
    <section id="expertise" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Un réseau d'experts en investissement{' '}
            <span className="text-primary">à votre service</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Plus de 23 conseillers issus des plus grandes maisons de l'investissement
          </p>
        </div>

        <Card className="border-0 shadow-xl shadow-gray-200/50 rounded-2xl overflow-hidden mb-12">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <Image
                  src="/equipe-vendre-appartement-loue.png"
                  alt="Équipe VAL - Conseillers experts"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900">
                        +23 Conseillers Experts
                      </h3>
                      <p className="text-sm text-gray-600">Vannes et Paris</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Notre équipe est composée de professionnels issus des plus grandes maisons de
                  gestion d'actifs et d'investissement en France. Cette expertise financière unique
                  nous permet de valoriser parfaitement votre bien loué et d'accéder à un réseau
                  exclusif d'investisseurs qualifiés.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Répartis entre nos bureaux de Vannes et Paris, nos conseillers maîtrisent les
                  spécificités des biens occupés et vous accompagnent avec une approche sur-mesure
                  pour optimiser la vente de votre appartement loué, maison louée ou commerce loué.
                </p>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500 italic">
                    "Notre ADN financier fait toute la différence dans la vente de biens loués.
                    Nous parlons le langage des investisseurs."
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-sm font-medium text-gray-500 mb-6">
            Nos conseillers sont issus de grandes maisons reconnues
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companies.map((company, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-primary/30 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-700">{company.logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
