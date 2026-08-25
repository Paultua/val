import { Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Une expertise financière au service de{' '}
            <span className="text-primary">votre bien loué</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            VAL' fait partie du groupe Ukan, basé à Vannes
          </p>
        </div>

        <Card className="border border-gray-200 shadow-none rounded-2xl overflow-hidden">
          <CardContent className="p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">
                Fondé par Paul Tuauden
              </h3>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Avant l'immobilier, Paul Tuauden a travaillé plusieurs années dans un fonds
              d'investissement immobilier privé. Cette expérience du côté investisseur est ce qui
              différencie VAL' d'une agence classique : nous valorisons un bien loué comme un actif
              financier — rendement, qualité du bail, potentiel — pas seulement comme un logement.
            </p>

            <p className="text-gray-600 leading-relaxed">
              VAL' fait partie du{' '}
              <a href="https://ukan-group.com" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                groupe Ukan
              </a>
              , basé à Vannes, qui édite également{' '}
              <a href="https://www.investir-en-bretagne.com" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                Investir en Bretagne
              </a>
              , spécialiste de l'investissement locatif dans la région. C'est ce réseau
              d'investisseurs déjà constitué que nous mobilisons pour vendre votre bien loué.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
