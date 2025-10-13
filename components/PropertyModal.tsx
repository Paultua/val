'use client';

import { X } from 'lucide-react';

interface PropertyDetails {
  id: number;
  type: 'appartement' | 'maison' | 'commerce';
  title: string;
  reference: string;
  location: string;
  region: 'bretagne' | 'paris';
  price: string;
  surface: string;
  rooms?: string;
  rentalYield: string;
  image: string;
  constructionYear?: string;
  dpe?: string;
  city: string;
  landSurface?: string;
  capex?: string;
  monthlyRent?: string;
  tenantQuality?: string;
  description?: string;
}

interface PropertyModalProps {
  property: PropertyDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PropertyModal({ property, isOpen, onClose }: PropertyModalProps) {
  if (!isOpen || !property) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" />
          </button>

          <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden rounded-t-2xl">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4 sm:mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-1 sm:mb-2">
                  {property.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">{property.location}</p>
              </div>
              <div className="sm:text-right">
                <div className="text-2xl sm:text-2xl md:text-3xl font-bold text-primary">{property.price} €</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Rentabilité: {property.rentalYield}</div>
              </div>
            </div>

            {property.description && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-xl">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{property.description}</p>
              </div>
            )}

            <div className="border-t border-gray-200 pt-4 sm:pt-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Caractéristiques du bien</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                <div className="flex justify-between py-2 sm:py-3 px-3 sm:px-4 bg-gray-50 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-gray-700">Référence</span>
                  <span className="text-xs sm:text-sm text-gray-900">{property.reference}</span>
                </div>

                <div className="flex justify-between py-2 sm:py-3 px-3 sm:px-4 bg-gray-50 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-gray-700">Ville</span>
                  <span className="text-xs sm:text-sm text-gray-900">{property.city}</span>
                </div>

                <div className="flex justify-between py-2 sm:py-3 px-3 sm:px-4 bg-gray-50 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-gray-700">Type</span>
                  <span className="text-xs sm:text-sm text-gray-900 capitalize">{property.type}</span>
                </div>

                <div className="flex justify-between py-2 sm:py-3 px-3 sm:px-4 bg-gray-50 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-gray-700">Surface habitation</span>
                  <span className="text-xs sm:text-sm text-gray-900">{property.surface}</span>
                </div>

                {property.landSurface && (
                  <div className="flex justify-between py-2 sm:py-3 px-3 sm:px-4 bg-gray-50 rounded-lg">
                    <span className="text-xs sm:text-sm font-medium text-gray-700">Surface terrain</span>
                    <span className="text-xs sm:text-sm text-gray-900">{property.landSurface}</span>
                  </div>
                )}

                {property.rooms && (
                  <div className="flex justify-between py-2 sm:py-3 px-3 sm:px-4 bg-gray-50 rounded-lg">
                    <span className="text-xs sm:text-sm font-medium text-gray-700">Pièces</span>
                    <span className="text-xs sm:text-sm text-gray-900">{property.rooms}</span>
                  </div>
                )}

                {property.constructionYear && (
                  <div className="flex justify-between py-2 sm:py-3 px-3 sm:px-4 bg-gray-50 rounded-lg">
                    <span className="text-xs sm:text-sm font-medium text-gray-700">Année de construction</span>
                    <span className="text-xs sm:text-sm text-gray-900">{property.constructionYear}</span>
                  </div>
                )}

                {property.dpe && (
                  <div className="flex justify-between py-2 sm:py-3 px-3 sm:px-4 bg-gray-50 rounded-lg">
                    <span className="text-xs sm:text-sm font-medium text-gray-700">DPE</span>
                    <span className="text-xs sm:text-sm text-gray-900">{property.dpe}</span>
                  </div>
                )}

                <div className="flex justify-between py-2 sm:py-3 px-3 sm:px-4 bg-gray-50 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-gray-700">Prix de vente</span>
                  <span className="text-xs sm:text-sm text-gray-900 font-semibold">{property.price} €</span>
                </div>

                {property.capex && (
                  <div className="flex justify-between py-2 sm:py-3 px-3 sm:px-4 bg-gray-50 rounded-lg">
                    <span className="text-xs sm:text-sm font-medium text-gray-700">CAPEX à prévoir</span>
                    <span className="text-xs sm:text-sm text-gray-900">{property.capex}</span>
                  </div>
                )}

                {property.monthlyRent && (
                  <div className="flex justify-between py-2 sm:py-3 px-3 sm:px-4 bg-gray-50 rounded-lg">
                    <span className="text-xs sm:text-sm font-medium text-gray-700">Loyer mensuel</span>
                    <span className="text-xs sm:text-sm text-gray-900">{property.monthlyRent}</span>
                  </div>
                )}

                <div className="flex justify-between py-2 sm:py-3 px-3 sm:px-4 bg-gray-50 rounded-lg">
                  <span className="text-xs sm:text-sm font-medium text-gray-700">Rentabilité</span>
                  <span className="text-xs sm:text-sm text-gray-900 font-semibold text-secondary">{property.rentalYield}</span>
                </div>

                {property.tenantQuality && (
                  <div className="flex justify-between py-2 sm:py-3 px-3 sm:px-4 bg-gray-50 rounded-lg">
                    <span className="text-xs sm:text-sm font-medium text-gray-700">Qualité du locataire</span>
                    <span className="text-xs sm:text-sm text-gray-900">{property.tenantQuality}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={onClose}
                className="flex-1 bg-gray-100 text-gray-900 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-200 transition-colors"
              >
                Fermer
              </button>
              <button
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).Tally) {
                    (window as any).Tally.openPopup('wQPgDX', {
                      emoji: {
                        text: '👋',
                        animation: 'wave',
                      },
                    });
                  }
                  onClose();
                }}
                className="flex-1 bg-primary text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-primary/90 transition-colors"
              >
                Demander plus d'informations
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
