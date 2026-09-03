'use client';

import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const office = {
    address: '22 rue Alfred Kastler, 56000 Vannes',
    phone: '07.63.64.88.23',
    email: 'contact@ukan-group.com',
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Proposez votre bien à VAL'
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estimation gratuite, sans engagement. Réponse sous 24h.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-0.5">Adresse</p>
                  <p className="text-gray-900 text-sm">{office.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-0.5">Téléphone</p>
                  <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-gray-900 text-sm hover:text-primary transition-colors">
                    {office.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-0.5">Email</p>
                  <a href={`mailto:${office.email}`} className="text-gray-900 text-sm hover:text-primary transition-colors">
                    {office.email}
                  </a>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 px-1">
              Un service du{' '}
              <a href="https://ukan-group.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                groupe Ukan
              </a>
              , basé à Vannes.
            </p>
          </div>

          <div className="lg:col-span-3 bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <iframe
              data-tally-src="https://tally.so/embed/wQPgDX?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="600"
              title="Proposez votre bien à VAL'"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      </div>

      {/* Initialise l'embed Tally ci-dessus (embed.js est déjà chargé globalement dans layout.tsx) */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              function loadTally() {
                if (typeof Tally !== 'undefined') {
                  Tally.loadEmbeds();
                } else {
                  document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach(function (el) {
                    el.src = el.dataset.tallySrc;
                  });
                }
              }
              if (typeof Tally !== 'undefined') {
                loadTally();
              } else {
                window.addEventListener('load', function () {
                  setTimeout(loadTally, 300);
                });
              }
            })();
          `,
        }}
      />
    </section>
  );
}
