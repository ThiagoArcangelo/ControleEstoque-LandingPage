import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_LIST } from '../data/mockStockData';

export const FaqSection: React.FC = () => {
  // First item open by default for clear affordance
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 mb-4">
            <HelpCircle className="w-5 h-5" aria-hidden="true" />
          </div>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
          >
            Perguntas frequentes
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Tire suas dúvidas sobre o funcionamento do produto.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5" role="region" aria-label="Lista de perguntas frequentes">
          {FAQ_LIST.map((item, index) => {
            const isOpen = openIndex === index;
            const itemId = `faq-item-${index}`;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-blue-300 shadow-xs ring-1 ring-blue-100' : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <button
                  id={itemId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left font-semibold text-base sm:text-lg text-slate-900 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-blue-600' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={itemId}
                    className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed animate-in fade-in duration-150 border-t border-slate-100"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
