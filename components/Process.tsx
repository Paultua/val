import { ClipboardCheck, Users, Home, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: ClipboardCheck,
      number: '01',
      title: 'Estimation gratuite',
      description: 'Évaluation précise de votre bien loué par nos experts immobiliers',
    },
    {
      icon: Users,
      number: '02',
      title: 'Réseau Investisseurs',
      description: "Présentation à notre réseau ciblé d'investisseurs pour accélérer la transaction",
    },
    {
      icon: Home,
      number: '03',
      title: 'Gestion locataire',
      description: 'Organisation des visites dans le respect du locataire en place',
    },
    {
      icon: CheckCircle,
      number: '04',
      title: 'Vente sécurisée',
      description: 'Accompagnement juridique et finalisation de la transaction',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Vendre votre bien loué{' '}
            <span className="text-primary">en 4 étapes simples</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Un processus optimisé pour la vente de votre appartement, maison ou commerce loué
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg shadow-gray-200/50 flex items-center justify-center relative z-10">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{step.number}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
