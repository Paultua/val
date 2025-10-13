import Image from 'next/image';

export default function Footer() {
  const links = {
    biens: [
      { label: 'Appartements loués Rennes Nantes', href: '#biens' },
      { label: 'Maisons louées Lorient Brest', href: '#biens' },
      { label: 'Commerces loués Bretagne', href: '#biens' },
    ],
    regions: [
      { label: 'Vendre bien loué Rennes Nantes', href: '#regions' },
      { label: 'Vendre bien loué Vannes Lorient', href: '#regions' },
      { label: 'Vendre bien loué Brest Saint-Malo', href: '#regions' },
    ],
    agence: [
      { label: 'Notre expertise', href: '#expertise' },
      { label: 'Nos régions', href: '#regions' },
      { label: 'Contact', href: '#contact' },
    ],
    legal: [
      { label: 'Mentions légales', href: '#' },
      { label: 'Politique de confidentialité', href: '#' },
      { label: 'CGV', href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/vendre-appartement-loue-vert.png"
                alt="VAL' Logo"
                width={90}
                height={90}
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Agence immobilière spécialisée dans la vente d'appartements, maisons et commerces
              loués en Bretagne (Rennes, Nantes, Vannes, Lorient, Brest, Saint-Malo, Quimper, Pontivy) et Paris.
            </p>
            <p className="text-sm text-gray-500">
              Expert en immobilier locatif Bretagne, vente bien loué et occupé toutes villes, appartement maison commerce loué.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Biens loués</h4>
            <ul className="space-y-3">
              {links.biens.map((link, index) => (
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
