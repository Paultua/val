import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Politique de confidentialité | VAL\' - Vendre Appartement Loué',
  description: "Politique de confidentialité et gestion des données personnelles du site vendre-appartement-loue.com.",
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://vendre-appartement-loue.com/confidentialite' },
};

export default function Confidentialite() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-10">Politique de confidentialité</h1>

          <div className="space-y-10 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Responsable du traitement</h2>
              <p>
                Les données collectées sur ce site sont traitées par Ukan Group SAS (17 avenue Jean
                Moulin, 93100 Montreuil), éditeur de VAL' - Vendre Appartement Loué. Voir les{' '}
                <a href="/mentions-legales" className="text-primary hover:underline">mentions légales</a>{' '}
                pour les coordonnées complètes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Données collectées</h2>
              <p className="mb-3">
                Lorsque vous remplissez le formulaire d'estimation ou de contact (via Tally), nous
                collectons les informations que vous renseignez volontairement : nom, coordonnées,
                informations sur le bien à vendre. Ces données sont utilisées uniquement pour répondre
                à votre demande d'estimation ou de mise en relation.
              </p>
              <p>
                Le site utilise également des outils de mesure d'audience (Google Analytics / Google Ads)
                afin de comprendre l'usage du site et mesurer l'efficacité de nos campagnes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Base légale et finalité</h2>
              <p>
                Le traitement de vos données repose sur votre consentement (formulaire de contact) et
                sur l'intérêt légitime d'Ukan Group SAS à assurer le bon fonctionnement et l'amélioration
                du site, conformément au Règlement Général sur la Protection des Données (RGPD, règlement UE 2016/679)
                et à la loi Informatique et Libertés du 6 janvier 1978.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Durée de conservation</h2>
              <p>
                Les données transmises via le formulaire de contact sont conservées le temps nécessaire
                au traitement de votre demande, puis archivées ou supprimées conformément aux obligations
                légales applicables aux professionnels de l'immobilier.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Cookies</h2>
              <p className="mb-3">Ce site utilise des cookies pour :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>assurer le fonctionnement technique du site,</li>
                <li>mesurer l'audience et les statistiques de visite (Google Analytics),</li>
                <li>suivre l'efficacité des campagnes publicitaires (Google Ads).</li>
              </ul>
              <p className="mt-3">Vous pouvez à tout moment refuser ou supprimer ces cookies via les paramètres de votre navigateur.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Vos droits</h2>
              <p>
                Conformément à la réglementation applicable, vous disposez d'un droit d'accès, de
                rectification, d'effacement et de portabilité de vos données, ainsi que d'un droit
                d'opposition et de limitation du traitement. Pour exercer ces droits, contactez-nous à{' '}
                <a href="mailto:contact@ukan-group.com" className="text-primary hover:underline">contact@ukan-group.com</a>.
              </p>
            </section>

            <p className="text-sm text-gray-400 pt-6 border-t border-gray-200">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' })}</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
