'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openTally = () => {
    if (typeof window !== 'undefined' && (window as any).Tally) {
      (window as any).Tally.openPopup('wQPgDX', {
        emoji: {
          text: '👋',
          animation: 'wave',
        },
      });
    }
  };

  const menuItems = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Zone', href: '#regions' },
    { label: 'Equipe', href: '#expertise' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#accueil" className="flex items-center group" aria-label="VAL' Agence Immobilière - Retour à l'accueil">
            <Image
              src="/vendre-appartement-loue-vert.png"
              alt="VAL' - Agence spécialisée vente appartements loués, maisons louées et commerces loués"
              width={100}
              height={100}
              className="transition-transform group-hover:scale-105"
            />
          </a>

          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-xl hover:bg-gray-50"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0763648823"
              className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors font-medium"
            >
              <Phone className="h-5 w-5" />
              <span>07.63.64.88.23</span>
            </a>
            <Button
              onClick={openTally}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 shadow-lg shadow-primary/20"
            >
              Estimer mon bien loué
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#regions"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 pl-8 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-xl transition-colors"
            >
              Bretagne
            </a>
            <a
              href="#regions"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 pl-8 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-xl transition-colors"
            >
              Paris
            </a>
            <a
              href="tel:0763648823"
              className="flex items-center justify-center gap-2 px-4 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>07.63.64.88.23</span>
            </a>
            <Button
              onClick={() => {
                openTally();
                setIsMobileMenuOpen(false);
              }}
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/20"
            >
              Estimer mon bien loué
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
