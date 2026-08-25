import Image from 'next/image';

export default function Footer() {
  const links = {
    regions: [
      { label: 'Vendre à Vannes, Lorient', href: '/#regions' },
      { label: 'Vendre à Rennes, Nantes', href: '/#regions' },
      { label: 'Vendre à Brest, Saint-Malo', href: '/#regions' },
    ],
    agence: [
      { label: 'Notre expertise', href: '/#expertise' },
      { label: 'Comment ça marche', href: '/#comment-ca-marche' },
      { label: 'Questions fréquentes', href: '/#faq' },
      { label: 'Contact', href: '/#contact' },
    ],
    legal: [
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'Politique de confidentialité', href: '/confidentialite' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/vendre-appartement-loue-rose.png"
                alt="VAL' Logo"
                width={120}
                height={120}
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Agence spécialisée dans la vente d'appartements, maisons et commerces loués en
              Bretagne (Vannes, Lorient, Rennes, Nantes, Brest, Saint-Malo) et en Île-de-France.
            </p>
            <p className="text-sm text-gray-500">
              VAL' est un service du{' '}
              <a href="https://ukan-group.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white underline">
                groupe Ukan
              </a>
              , basé à Vannes, également éditeur d'
              <a href="https://www.investir-en-bretagne.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white underline">
                Investir en Bretagne
              </a>
              .
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Nos régions</h4>
            <ul className="space-y-3">
              {links.regions.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">L'agence</h4>
            <ul className="space-y-3">
              {links.agence.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} VAL' - Tous droits réservés
            </p>
            <div className="flex gap-6">
              {links.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
