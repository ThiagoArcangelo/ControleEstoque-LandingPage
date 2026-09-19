import React from 'react';
import { Store, ShoppingBag, UserCheck, ArrowRightLeft } from 'lucide-react';

export const TargetAudienceSection: React.FC = () => {
  const audiences = [
    {
      id: 'audience-pequenos-negocios',
      icon: Store,
      title: 'Pequenos negócios',
      description: 'Tenha controle dos seus produtos sem precisar de um sistema complexo.'
    },
    {
      id: 'audience-lojas',
      icon: ShoppingBag,
      title: 'Lojas',
      description: 'Saiba rapidamente quais produtos estão disponíveis e quais precisam de reposição.'
    },
    {
      id: 'audience-autonomos',
      icon: UserCheck,
      title: 'Autônomos',
      description: 'Controle seus produtos de qualquer lugar, direto pelo smartphone na palma da mão.'
    },
    {
      id: 'audience-planilhas',
      icon: ArrowRightLeft,
      title: 'Quem usa planilhas',
      description: 'Substitua controles manuais por uma ferramenta feita especificamente para estoque.'
    }
  ];

  return (
    <section id="para-quem-e" className="py-16 md:py-24 bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2
            id="para-quem-e-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
          >
            Feito para quem precisa de controle, não de complicação.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Desenvolvido pensando na rotina de quem vende produtos e precisa de clareza imediata sobre o que tem guardado.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="bg-slate-50/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 hover:border-slate-300 hover:bg-slate-50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
