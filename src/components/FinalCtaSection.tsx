import React from 'react';
import { ArrowRight, Smartphone, Monitor } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenAuth: (mode?: 'login' | 'signup') => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenAuth }) => {
  return (
    <section id="cta-final" className="py-20 md:py-28 bg-white border-t border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="final-cta-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5"
        >
          Comece a controlar seu estoque de um jeito mais simples.
        </h2>

        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-9">
          Cadastre seus produtos, registre suas movimentações e tenha seu estoque sempre à mão.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            id="bottom-start-free-btn"
            type="button"
            onClick={() => onOpenAuth('signup')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base sm:text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-hidden focus-visible:ring-3 focus-visible:ring-blue-600 focus-visible:ring-offset-2 cursor-pointer"
          >
            <span>Começar grátis</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Auxiliary text */}
        <div className="flex items-center justify-center gap-3 text-sm text-slate-500 font-medium">
          <div className="flex items-center gap-1.5">
            <Smartphone className="w-4 h-4 text-slate-400" />
            <span>Celular</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Monitor className="w-4 h-4 text-slate-400" />
            <span>Computador</span>
          </div>
          <span>•</span>
          <span>Disponível no celular e no computador.</span>
        </div>
      </div>
    </section>
  );
};
