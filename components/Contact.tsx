'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Contact() {
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

  const offices = [
    {
      name: 'Bretagne',
      address: 'Bureaux à Vannes pour couvrir la Bretagne',
      phone: '07.63.64.88.23',
      email: 'contact@ukan-group.com',
    },
    {
      name: 'Paris intra-muros',
      address: "Paris 19ème pour couvrir l'Ile-de-France",
      phone: '07.63.64.88.23',
      email: 'contact@ukan-group.com',
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Contactez notre agence pour vendre votre bien loué{' '}
            <span className="text-primary">en Bretagne</span> et{' '}
            <span className="text-primary">Paris</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Une estimation gratuite et un accompagnement expert pour votre appartement, maison ou commerce loué
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={openTally}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8 py-6 text-lg shadow-xl shadow-primary/20"
            >
              Estimer mon bien loué rapidement
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-xl px-8 py-6 text-lg"
              onClick={() => {
                const phone = offices[0].phone;
                window.location.href = `tel:${phone.replace(/\s/g, '')}`;
              }}
            >
              Contacter notre équipe
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {offices.map((office, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl shadow-gray-200/50 rounded-2xl"
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{office.name}</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Adresse</p>
                      <p className="text-gray-900">{office.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Téléphone</p>
                      <a
                        href={`tel:${office.phone.replace(/\s/g, '')}`}
                        className="text-gray-900 hover:text-primary transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                      <a
                        href={`mailto:${office.email}`}
                        className="text-gray-900 hover:text-primary transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
