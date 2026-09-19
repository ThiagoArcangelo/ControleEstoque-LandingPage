import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface FreeTierSectionProps {
  onOpenAuth: (mode?: 'login' | 'signup') => void;
}

export const FreeTierSection: React.FC<FreeTierSectionProps> = ({ onOpenAuth }) => {
  return (
    <section id="versao-gratuita" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          {/* Subtle background circles */}
          <div
            className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/10 pointer-events-none blur-2xl"
            aria-hidden="true"
          />
          <div
            className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-black/10 pointer-events-none blur-2xl"
            aria-hidden="true"
          />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-semibold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Acesso Gratuito</span>
            </div>

            {/* Title */}
            <h2
              id="gratuito-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5"
            >
              Comece gratuitamente.
            </h2>

            {/* Text */}
            <p className="text-base sm:text-lg text-blue-50 leading-relaxed mb-8">
              Tenha acesso às principais ferramentas para começar a organizar seu estoque sem precisar investir em um sistema complexo.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="free-tier-cta"
                type="button"
                onClick={() => onOpenAuth('signup')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-blue-700 bg-white hover:bg-blue-50 active:bg-blue-100 rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-hidden focus-visible:ring-3 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 cursor-pointer"
              >
                <span>Criar minha conta grátis</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Micro reassurance */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-blue-100 font-medium">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-200" />
                Sem burocracia
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-200" />
                Celular e computador
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-200" />
                Pronto para usar
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
