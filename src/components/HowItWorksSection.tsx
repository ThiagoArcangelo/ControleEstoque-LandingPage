import React from 'react';
import { PackagePlus, ArrowLeftRight, ClipboardCheck } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Cadastre',
      description: 'Adicione seus produtos e informe a quantidade inicial disponível.',
      icon: PackagePlus
    },
    {
      number: '02',
      title: 'Movimente',
      description: 'Registre entradas e saídas conforme os produtos chegam ou são vendidos.',
      icon: ArrowLeftRight
    },
    {
      number: '03',
      title: 'Acompanhe',
      description: 'Consulte seu estoque e seu histórico sempre que precisar tomar decisões.',
      icon: ClipboardCheck
    }
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            id="como-funciona-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
          >
            Comece em poucos passos.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Você não precisa de treinamentos ou manuais extensos para organizar o estoque da sua loja.
          </p>
        </div>

        {/* 3 Steps with connecting line on desktop */}
        <div className="relative max-w-5xl mx-auto mb-14">
          {/* Connecting line on desktop */}
          <div
            className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-slate-200 -translate-y-6 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col items-center text-center group"
                >
                  {/* Step Badge */}
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-bold text-sm flex items-center justify-center mb-5 shadow-xs group-hover:scale-105 transition-transform">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 flex items-center gap-2">
                    <Icon className="w-5 h-5 text-blue-600 inline-block" />
                    <span>{step.title}</span>
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section Ending Message */}
        <div className="text-center">
          <span className="inline-block text-xl sm:text-2xl font-bold text-slate-900 bg-blue-50 px-6 py-2.5 rounded-full border border-blue-200/80">
            Simples assim.
          </span>
        </div>
      </div>
    </section>
  );
};
