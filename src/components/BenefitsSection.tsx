import React from 'react';
import {
  Package,
  ArrowUpDown,
  History,
  Smartphone,
  Monitor,
  Eye
} from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      id: 'beneficio-cadastro',
      icon: Package,
      title: 'Cadastro de produtos',
      description: 'Mantenha seus produtos organizados em um único lugar, com nome, categoria e quantidades claras.'
    },
    {
      id: 'beneficio-movimentacoes',
      icon: ArrowUpDown,
      title: 'Entradas e saídas',
      description: 'Registre cada movimentação de forma rápida sempre que chegar reposição ou houver uma venda.'
    },
    {
      id: 'beneficio-historico',
      icon: History,
      title: 'Histórico',
      description: 'Saiba o que aconteceu com seu estoque ao longo do tempo com registros detalhados de cada alteração.'
    },
    {
      id: 'beneficio-celular',
      icon: Smartphone,
      title: 'Controle pelo celular',
      description: 'Faça registros diretamente pelo smartphone enquanto atende clientes ou organiza as prateleiras.'
    },
    {
      id: 'beneficio-computador',
      icon: Monitor,
      title: 'Acesso pelo computador',
      description: 'Utilize a versão web quando estiver trabalhando no computador com uma visão ampla de todos os itens.'
    },
    {
      id: 'beneficio-visao-rapida',
      icon: Eye,
      title: 'Visão rápida',
      description: 'Veja rapidamente quais produtos estão disponíveis e quais precisam de atenção imediata.'
    }
  ];

  return (
    <section id="recursos" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2
            id="beneficios-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
          >
            Tudo que você precisa para controlar seu estoque.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Sem telas complicadas ou ferramentas desnecessárias. Apenas as funcionalidades essenciais para o seu negócio funcionar bem.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.id}
                id={benefit.id}
                className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300/80 transition-all duration-200 flex flex-col items-start group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
