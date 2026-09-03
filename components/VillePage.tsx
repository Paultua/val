import { MapPin, TrendingUp, Clock, ArrowRight } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';

export interface VillePageData {
  ville: string;
  slug: string;
  heroLead: string;
  stats: { label: string; value: string }[];
  marketParagraphs: string[];
  quartiers?: { name: string; description: string }[];
  sourceNote: string;
  autresVilles: { name: string; href: string }[];
}

export default function VillePage({ data }: { data: VillePageData }) {
  const { ville, heroLead, stats, marketParagraphs, quartiers, sourceNote, autresVilles } = data;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 mb-6">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Vendre un bien loué à {ville}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Vendre un appartement, une maison ou un immeuble de rapport loué à{' '}
              <span className="text-primary">{ville}</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">{heroLead}</p>
          </div>
        </section>

        {stats.length > 0 && (
          <section className="pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{s.value}</div>
                    <div className="text-sm text-gray-600">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-gray-700 leading-relaxed">
            {marketParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="text-sm text-gray-400 pt-2">{sourceNote}</p>
          </div>
        </section>

        {quartiers && quartiers.length > 0 && (
          <section className="py-16 bg-gray-50 border-y border-gray-200">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-10 text-center">
                Les quartiers de {ville}
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {quartiers.map((q) => (
                  <div key={q.name} className="bg-white border border-gray-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{q.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{q.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">Autres villes de Bretagne</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {autresVilles.map((v) => (
                <a
                  key={v.name}
                  href={v.href}
                  className="inline-flex items-center gap-1 px-4 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  {v.name}
                  <ArrowRight className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
