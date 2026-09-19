import React from 'react';
import { CheckCircle2, Sparkles, Clock, HeartHandshake } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section id="confianca" className="py-14 md:py-20 bg-white border-y border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 mb-6">
          <HeartHandshake className="w-6 h-6" aria-hidden="true" />
        </div>

        <h2
          id="confianca-heading"
          className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
        >
          Seu estoque merece estar organizado.
        </h2>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
          Uma ferramenta simples para transformar o controle de estoque em uma tarefa rápida e organizada.
        </p>

        {/* 3 calm reassurance pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100 text-left">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-sm text-slate-900">Fácil de manter</h3>
              <p className="text-xs text-slate-500 mt-1">Registros rápidos que não atrapalham as vendas do seu dia.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-sm text-slate-900">Menos tempo perdido</h3>
              <p className="text-xs text-slate-500 mt-1">Saiba instantaneamente o saldo de qualquer produto quando precisar.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-sm text-slate-900">Sem burocracia</h3>
              <p className="text-xs text-slate-500 mt-1">Desenvolvido sem jargões e sem menus cheios de funções que você não usa.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
