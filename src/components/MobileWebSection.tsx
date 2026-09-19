import React from 'react';
import { Smartphone, Monitor, CheckCircle, Package, ArrowDownToLine, ArrowUpFromLine, Search, Plus } from 'lucide-react';

export const MobileWebSection: React.FC = () => {
  return (
    <section id="mobile-web" className="py-16 md:py-24 bg-white border-y border-slate-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2
            id="mobile-web-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
          >
            Seu estoque com você. No celular ou no computador.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Controle seus produtos onde estiver. Use o celular durante a rotina e o computador quando precisar de uma visão mais ampla.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>Uma experiência. Onde você precisar.</span>
          </div>
        </div>

        {/* Visual Composition: Laptop & Smartphone Mockups */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Desktop / Notebook Mockup (Col 8) */}
            <div className="lg:col-span-8 order-2 lg:order-1">
              <div className="bg-slate-900 rounded-2xl p-2.5 sm:p-3 shadow-xl border border-slate-800">
                {/* Notebook Top bezel */}
                <div className="flex items-center justify-between px-3 py-1.5 bg-slate-800/80 rounded-t-xl text-slate-400 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-2 font-mono text-[11px] text-slate-300 hidden sm:inline">
                      https://app.[NOME_DO_PRODUTO].com.br
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px]">
                    <Monitor className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-slate-300">Versão Web</span>
                  </div>
                </div>

                {/* Notebook Screen Content */}
                <div className="bg-[#F8FAFC] rounded-b-xl p-4 sm:p-5 text-slate-900">
                  {/* Web Top Nav */}
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                        P
                      </div>
                      <span className="font-bold text-sm text-slate-900">Mercearia Central</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="hidden sm:flex items-center gap-1.5 bg-white border border-slate-200 px-2.5 py-1 rounded-md text-xs text-slate-400">
                        <Search className="w-3.5 h-3.5" />
                        <span>Buscar produto...</span>
                      </div>
                      <span className="px-2.5 py-1 bg-blue-600 text-white rounded-md text-xs font-medium">
                        + Cadastrar item
                      </span>
                    </div>
                  </div>

                  {/* Web Table Preview */}
                  <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-2xs">
                    <div className="px-3 py-2 bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 grid grid-cols-12">
                      <span className="col-span-6 sm:col-span-5">Item / Categoria</span>
                      <span className="col-span-3 sm:col-span-3 text-right">Quantidade</span>
                      <span className="col-span-3 sm:col-span-4 text-right">Situação</span>
                    </div>

                    <div className="divide-y divide-slate-100 text-xs">
                      <div className="px-3 py-2.5 grid grid-cols-12 items-center">
                        <div className="col-span-6 sm:col-span-5">
                          <p className="font-semibold text-slate-900">Detergente 500ml</p>
                          <span className="text-[11px] text-slate-500">Limpeza Geral</span>
                        </div>
                        <div className="col-span-3 sm:col-span-3 text-right font-bold text-slate-800">
                          42 un.
                        </div>
                        <div className="col-span-3 sm:col-span-4 text-right">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-green-50 text-green-700 border border-green-200">
                            Em estoque
                          </span>
                        </div>
                      </div>

                      <div className="px-3 py-2.5 grid grid-cols-12 items-center">
                        <div className="col-span-6 sm:col-span-5">
                          <p className="font-semibold text-slate-900">Desinfetante 2L</p>
                          <span className="text-[11px] text-slate-500">Limpeza Geral</span>
                        </div>
                        <div className="col-span-3 sm:col-span-3 text-right font-bold text-slate-800">
                          5 un.
                        </div>
                        <div className="col-span-3 sm:col-span-4 text-right">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                            Estoque baixo
                          </span>
                        </div>
                      </div>

                      <div className="px-3 py-2.5 grid grid-cols-12 items-center">
                        <div className="col-span-6 sm:col-span-5">
                          <p className="font-semibold text-slate-900">Sabão em pó 1kg</p>
                          <span className="text-[11px] text-slate-500">Lavanderia</span>
                        </div>
                        <div className="col-span-3 sm:col-span-3 text-right font-bold text-slate-800">
                          18 un.
                        </div>
                        <div className="col-span-3 sm:col-span-4 text-right">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-green-50 text-green-700 border border-green-200">
                            Em estoque
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Smartphone Mockup (Col 4) */}
            <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center">
              <div className="w-64 sm:w-72 bg-slate-900 p-3 rounded-[36px] shadow-2xl border-4 border-slate-800">
                {/* Phone Speaker Notch */}
                <div className="flex justify-center mb-2">
                  <div className="w-16 h-4 bg-slate-800 rounded-full flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-900 inline-block" />
                  </div>
                </div>

                {/* Phone Screen */}
                <div className="bg-[#F8FAFC] rounded-[24px] overflow-hidden p-3.5 border border-slate-200 text-slate-900 text-xs">
                  {/* Phone Header */}
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-md bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
                        P
                      </div>
                      <span className="font-bold text-slate-900">Meu Estoque</span>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full">
                      Mobile App
                    </span>
                  </div>

                  {/* Phone Quick Stats */}
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="bg-white p-2 rounded-lg border border-slate-200">
                      <span className="text-[10px] text-slate-500 block">Total Itens</span>
                      <span className="text-base font-bold text-slate-900">128</span>
                    </div>
                    <div className="bg-amber-50 p-2 rounded-lg border border-amber-200">
                      <span className="text-[10px] text-amber-800 block font-medium">Atenção</span>
                      <span className="text-base font-bold text-amber-600">7 un.</span>
                    </div>
                  </div>

                  {/* Phone Quick Movements */}
                  <div className="space-y-2 mb-3">
                    <div className="bg-white p-2 rounded-lg border border-slate-200 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-slate-900 leading-tight">Detergente 500ml</p>
                        <span className="text-[10px] text-slate-400">42 un. em estoque</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                    </div>

                    <div className="bg-white p-2 rounded-lg border border-slate-200 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-slate-900 leading-tight">Desinfetante 2L</p>
                        <span className="text-[10px] text-amber-600 font-semibold">5 un. (Baixo)</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                    </div>

                    <div className="bg-white p-2 rounded-lg border border-slate-200 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-slate-900 leading-tight">Sabão em pó 1kg</p>
                        <span className="text-[10px] text-slate-400">18 un. em estoque</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                  </div>

                  {/* Phone Bottom Quick Action */}
                  <div className="bg-blue-600 text-white rounded-lg p-2 text-center font-semibold text-xs shadow-xs flex items-center justify-center gap-1">
                    <Plus className="w-3.5 h-3.5" />
                    <span>Lançar movimentação</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
