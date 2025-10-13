'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building2, Home, Store, MapPin, Euro, TrendingUp, ChevronDown } from 'lucide-react';
import PropertyModal from './PropertyModal';

interface Property {
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

export default function Properties() {
  const properties: Property[] = [
    {
      id: 1,
      type: 'appartement',
      title: 'Appartement T3 Centre Vannes',
      reference: 'VAL-VAN-001',
      location: 'Vannes, Morbihan',
      region: 'bretagne',
      price: '245 000',
      surface: '68 m²',
      rooms: '3 pièces',
      rentalYield: '6.2%',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      constructionYear: '1985',
      dpe: 'D',
      city: 'Vannes',
      capex: '15 000 €',
      monthlyRent: '1 250 €',
      tenantQuality: 'Excellent (CDI, salaire 3x le loyer)',
      description: 'Bel appartement T3 idéalement situé en centre-ville de Vannes, à proximité de toutes commodités. Actuellement loué à un locataire de qualité avec un bail de 3 ans.'
    },
    {
      id: 2,
      type: 'maison',
      title: 'Maison avec jardin',
      reference: 'VAL-LOR-002',
      location: 'Lorient, Morbihan',
      region: 'bretagne',
      price: '385 000',
      surface: '120 m²',
      rooms: '5 pièces',
      rentalYield: '5.8%',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      constructionYear: '1995',
      dpe: 'C',
      city: 'Lorient',
      landSurface: '450 m²',
      capex: '20 000 €',
      monthlyRent: '1 850 €',
      tenantQuality: 'Très bon (fonctionnaire)',
      description: 'Magnifique maison familiale avec jardin arboré dans un quartier calme et recherché de Lorient. Locataire en place depuis 4 ans.'
    },
    {
      id: 3,
      type: 'commerce',
      title: 'Commerce rue passante',
      reference: 'VAL-VAN-003',
      location: 'Vannes Centre',
      region: 'bretagne',
      price: '175 000',
      surface: '45 m²',
      rentalYield: '7.5%',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
      constructionYear: '1970',
      dpe: 'E',
      city: 'Vannes',
      capex: '10 000 €',
      monthlyRent: '1 100 €',
      tenantQuality: 'Bon (commerce établi depuis 5 ans)',
      description: 'Local commercial en plein centre-ville de Vannes, sur un axe très fréquenté. Bail commercial 3/6/9 en cours.'
    },
    {
      id: 4,
      type: 'appartement',
      title: 'Appartement T2 Paris 13ème',
      reference: 'VAL-PAR-004',
      location: 'Paris 13ème',
      region: 'paris',
      price: '395 000',
      surface: '42 m²',
      rooms: '2 pièces',
      rentalYield: '5.2%',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      constructionYear: '2010',
      dpe: 'B',
      city: 'Paris',
      capex: '5 000 €',
      monthlyRent: '1 700 €',
      tenantQuality: 'Excellent (cadre supérieur)',
      description: 'Appartement moderne dans une résidence récente du 13ème arrondissement, proche métro et commerces. Loué meublé.'
    },
    {
      id: 5,
      type: 'appartement',
      title: 'Appartement T4 Vue Golfe',
      reference: 'VAL-BAD-005',
      location: 'Baden, Morbihan',
      region: 'bretagne',
      price: '425 000',
      surface: '95 m²',
      rooms: '4 pièces',
      rentalYield: '5.5%',
      image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
      constructionYear: '2005',
      dpe: 'C',
      city: 'Baden',
      capex: '12 000 €',
      monthlyRent: '1 950 €',
      tenantQuality: 'Excellent (famille, CDI)',
      description: 'Superbe appartement T4 avec vue imprenable sur le Golfe du Morbihan. Résidence sécurisée avec parking.'
    },
    {
      id: 6,
      type: 'maison',
      title: 'Maison traditionnelle',
      reference: 'VAL-AUR-006',
      location: 'Auray, Morbihan',
      region: 'bretagne',
      price: '310 000',
      surface: '100 m²',
      rooms: '4 pièces',
      rentalYield: '6.0%',
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
      constructionYear: '1980',
      dpe: 'D',
      city: 'Auray',
      landSurface: '350 m²',
      capex: '25 000 €',
      monthlyRent: '1 550 €',
      tenantQuality: 'Bon (couple en CDI)',
      description: 'Charmante maison bretonne à rénover dans le centre historique d\'Auray. Grand potentiel de valorisation.'
    },
    {
      id: 7,
      type: 'commerce',
      title: 'Local commercial',
      reference: 'VAL-PAR-007',
      location: 'Paris 11ème',
      region: 'paris',
      price: '520 000',
      surface: '80 m²',
      rentalYield: '6.8%',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      constructionYear: '1900',
      dpe: 'E',
      city: 'Paris',
      capex: '30 000 €',
      monthlyRent: '2 950 €',
      tenantQuality: 'Excellent (enseigne nationale)',
      description: 'Local commercial premium dans le quartier dynamique du 11ème arrondissement. Enseigne nationale avec bail ferme.'
    },
    {
      id: 8,
      type: 'appartement',
      title: 'Studio investisseur',
      reference: 'VAL-VAN-008',
      location: 'Vannes Gare',
      region: 'bretagne',
      price: '125 000',
      surface: '28 m²',
      rooms: '1 pièce',
      rentalYield: '7.8%',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      constructionYear: '2015',
      dpe: 'B',
      city: 'Vannes',
      capex: '3 000 €',
      monthlyRent: '810 €',
      tenantQuality: 'Bon (étudiant avec garant)',
      description: 'Studio moderne proche de la gare de Vannes, idéal pour investissement locatif à fort rendement. Parfait état.'
    },
    {
      id: 9,
      type: 'maison',
      title: 'Maison rénovée',
      reference: 'VAL-PLE-009',
      location: 'Ploemeur, Morbihan',
      region: 'bretagne',
      price: '395 000',
      surface: '110 m²',
      rooms: '5 pièces',
      rentalYield: '5.6%',
      image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
      constructionYear: '1990',
      dpe: 'C',
      city: 'Ploemeur',
      landSurface: '500 m²',
      capex: '8 000 €',
      monthlyRent: '1 840 €',
      tenantQuality: 'Excellent (cadre, salaire élevé)',
      description: 'Belle maison entièrement rénovée proche des plages de Ploemeur. Jardin paysager et garage double.'
    },
  ];

  const [selectedFilter, setSelectedFilter] = useState<string>('tous');
  const [showLocationMenu, setShowLocationMenu] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getFilteredProperties = () => {
    if (selectedFilter === 'tous') return properties;
    if (selectedFilter === 'bretagne' || selectedFilter === 'paris') {
      return properties.filter((p) => p.region === selectedFilter);
    }
    return properties.filter((p) => p.type === selectedFilter);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'appartement':
        return <Building2 className="h-4 w-4" />;
      case 'maison':
        return <Home className="h-4 w-4" />;
      case 'commerce':
        return <Store className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="biens" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
              Appartements, Maisons et Commerces loués à vendre en{' '}
              <span className="text-primary">Bretagne</span> et{' '}
              <span className="text-primary">Paris</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Notre sélection de biens occupés à Rennes, Nantes, Vannes, Lorient, Brest et Paris
            </p>
          </div>

          <Tabs defaultValue="tous" className="w-full" onValueChange={setSelectedFilter}>
            <TabsList className="inline-flex h-auto p-1 bg-gray-100 rounded-xl mb-12 flex-wrap justify-center gap-2">
              <TabsTrigger value="tous" className="rounded-lg px-6 py-2.5 data-[state=active]:bg-white data-[state=active]:shadow-md">
                Tous
              </TabsTrigger>
              <TabsTrigger value="appartement" className="rounded-lg px-6 py-2.5 data-[state=active]:bg-white data-[state=active]:shadow-md">
                Appartements
              </TabsTrigger>
              <TabsTrigger value="maison" className="rounded-lg px-6 py-2.5 data-[state=active]:bg-white data-[state=active]:shadow-md">
                Maisons
              </TabsTrigger>
              <TabsTrigger value="commerce" className="rounded-lg px-6 py-2.5 data-[state=active]:bg-white data-[state=active]:shadow-md">
                Commerces
              </TabsTrigger>
              <div className="relative">
                <TabsTrigger
                  value="lieux"
                  className="rounded-lg px-6 py-2.5 data-[state=active]:bg-white data-[state=active]:shadow-md flex items-center gap-2"
                  onClick={() => setShowLocationMenu(!showLocationMenu)}
                >
                  Lieux
                  <ChevronDown className="h-4 w-4" />
                </TabsTrigger>
                {showLocationMenu && (
                  <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[160px] z-10">
                    <button
                      onClick={() => {
                        setSelectedFilter('bretagne');
                        setShowLocationMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      Bretagne
                    </button>
                    <button
                      onClick={() => {
                        setSelectedFilter('paris');
                        setShowLocationMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      Paris
                    </button>
                  </div>
                )}
              </div>
            </TabsList>

            <TabsContent value={selectedFilter} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getFilteredProperties().map((property) => (
                  <Card
                    key={property.id}
                    onClick={() => handlePropertyClick(property)}
                    className="group border-0 shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-secondary text-white border-0 flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        {property.rentalYield}
                      </Badge>
                      <Badge className="absolute top-4 right-4 bg-white/90 text-gray-900 border-0">
                        Bien loué
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          {getIcon(property.type)}
                          <span className="text-sm font-medium text-gray-600 capitalize">
                            {property.type}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500 font-mono">{property.reference}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {property.title}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center text-primary font-semibold text-xl">
                          <Euro className="h-5 w-5 mr-1" />
                          {property.price}
                        </div>
                        <div className="text-sm text-gray-600">
                          {property.surface}
                          {property.rooms && ` • ${property.rooms}`}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <PropertyModal
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
