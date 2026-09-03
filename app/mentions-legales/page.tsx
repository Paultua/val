import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Mentions légales | VAL\' - Vendre Appartement Loué',
  description: "Mentions légales du site vendre-appartement-loue.com, édité par Ukan Group SAS.",
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://vendre-appartement-loue.com/mentions-legales' },
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-10">Mentions légales</h1>

          <div className="space-y-10 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Éditeur du site</h2>
              <div className="bg-gray-50 rounded-xl p-6 space-y-1">
                <p className="font-semibold">UKAN GROUP SAS</p>
                <p>17 avenue Jean Moulin, 93100 Montreuil, France</p>
                <p>SAS au capital de 1 000 €, RCS Bobigny n° 915 117 931</p>
                <p>SIRET : 915 117 931 00013 — Code APE : 6831Z</p>
                <p>Titulaire de la carte professionnelle n° CPI93012022000000041, délivrée par la CCI Paris Île-de-France le 07/09/2022 (Transaction, Gestion immobilière)</p>
                <p>Garantie financière : 120 000 € (voir détail dans la carte professionnelle)</p>
                <p>
                  Email :{' '}
                  <a href="mailto:contact@ukan-group.com" className="text-primary hover:underline">contact@ukan-group.com</a>
                </p>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                VAL' - Vendre Appartement Loué est une marque exploitée par Ukan Group SAS, qui édite
                également{' '}
                <a href="https://www.investir-en-bretagne.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Investir en Bretagne
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Directeur de la publication</h2>
              <p>Paul Tuauden, en qualité de représentant d'Ukan Group SAS.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Hébergement</h2>
              <div className="bg-gray-50 rounded-xl p-6 space-y-1">
                <p>Vercel Inc.</p>
                <p>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Nature de l'intervention</h2>
              <p className="mb-3">
                Ukan Group SAS intervient dans le cadre de son activité d'agence immobilière réglementée,
                pour la présentation et la commercialisation de biens immobiliers loués (appartements,
                maisons, immeubles de rapport, commerces) en Bretagne. Elle peut agir :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>en tant que mandataire du vendeur pour la commercialisation du bien,</li>
                <li>en tant qu'intermédiaire vis-à-vis d'acquéreurs investisseurs.</li>
              </ul>
              <p className="mt-3">
                Ukan Group SAS limite sa responsabilité aux prestations immobilières strictement définies
                par sa carte professionnelle. Les aspects juridiques, fiscaux ou financiers propres à
                chaque transaction relèvent, le cas échéant, des professionnels réglementés compétents
                (notaires, avocats, experts-comptables).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Propriété intellectuelle</h2>
              <p>
                La marque, le logo et l'ensemble des contenus (textes, images) figurant sur ce site sont
                la propriété d'Ukan Group SAS. Toute reproduction ou utilisation, totale ou partielle, sans
                autorisation préalable est interdite et constitue une contrefaçon.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">TRACFIN — Lutte contre le blanchiment</h2>
              <p>
                En vertu des articles L561-5 et suivants du Code monétaire et financier, les agents
                immobiliers sont tenus de vérifier l'identité de leurs clients, vendeurs et acquéreurs,
                avant d'entrer en relation d'affaires.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Médiation de la consommation</h2>
              <p>
                Conformément aux articles L611-1 et suivants du Code de la consommation, le consommateur
                a la possibilité de saisir gratuitement le médiateur de la consommation dont relève le
                professionnel : Association Nationale des Médiateurs (ANM) — 2 rue de Colmar, 94300
                Vincennes —{' '}
                <a href="https://www.anm-conso.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  www.anm-conso.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Modifications</h2>
              <p>Ukan Group SAS se réserve le droit de modifier ou corriger le contenu de ce site à tout moment et sans préavis.</p>
            </section>

            <p className="text-sm text-gray-400 pt-6 border-t border-gray-200">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' })}</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
