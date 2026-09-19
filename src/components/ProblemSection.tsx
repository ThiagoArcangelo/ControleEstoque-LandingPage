import React from 'react';
import { BookOpen, Sheet, AlertCircle, CheckCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: BookOpen,
      title: 'Papel e caderno',
      description: 'Informações difíceis de consultar, atualizar e acompanhar no dia a dia da loja.',
      badgeColor: 'text-amber-700 bg-amber-50 border-amber-200'
    },
    {
      icon: Sheet,
      title: 'Planilhas',
      description: 'Fáceis de começar, mas trabalhosas de manter conforme o estoque cresce.',
      badgeColor: 'text-blue-700 bg-blue-50 border-blue-200'
    },
    {
      icon: AlertCircle,
      title: 'Falta de informação',
      description: 'Sem saber exatamente o que entrou, saiu ou quanto ainda existe disponível.',
      badgeColor: 'text-red-700 bg-red-50 border-red-200'
    }
  ];

  return (
    <section id="problema" className="py-16 md:py-24 bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2
            id="problema-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
          >
            Chega de controlar estoque no papel ou em planilhas.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Perder tempo procurando informações, esquecer de registrar movimentações ou descobrir que um produto
            acabou só quando o cliente pede não precisa fazer parte da rotina.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.title}
                className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-7 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-2xs flex flex-col"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 ${problem.badgeColor}`}
                >
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2.5">{problem.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{problem.description}</p>
              </div>
            );
          })}
        </div>

        {/* Section Resolution Highlight */}
        <div className="max-w-2xl mx-auto text-center bg-blue-50/80 border border-blue-200/80 rounded-2xl p-6 sm:p-8">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white mb-3 shadow-2xs">
            <CheckCircle className="w-5 h-5" aria-hidden="true" />
          </div>
          <p className="text-lg sm:text-xl font-bold text-slate-900">
            Tenha uma visão clara do seu estoque em poucos segundos.
          </p>
          <p className="text-sm text-slate-600 mt-1.5">
            Sem complicações, sem fórmulas perdidas e sem cadernos esquecidos no balcão.
          </p>
        </div>
      </div>
    </section>
  );
};
