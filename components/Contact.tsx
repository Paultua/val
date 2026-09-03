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
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Proposez votre bien à VAL'
          </h2>
          <p className="text-lg text-gray-600">
            Estimation gratuite, sans engagement. Réponse sous 24h.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex justify-center">
          <iframe
            data-tally-src="https://tally.so/embed/wQPgDX?hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="600"
            title="Proposez votre bien à VAL'"
            style={{ border: 'none' }}
          />
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-600">
          <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="h-4 w-4 text-primary" />
            {office.phone}
          </a>
          <a href={`mailto:${office.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="h-4 w-4 text-primary" />
            {office.email}
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            {office.address}
          </span>
        </div>

        <p className="mt-4 text-center text-sm text-gray-500">
          Un service du{' '}
          <a href="https://ukan-group.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Groupe Ukan
          </a>
          , basé à Vannes.
        </p>
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
