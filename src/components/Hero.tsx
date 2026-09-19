import React, { useState } from 'react';
import {
  ArrowRight,
  Plus,
  ArrowDownToLine,
  ArrowUpFromLine,
  Search,
  Package,
  AlertTriangle,
  TrendingUp,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';
import { INITIAL_PRODUCTS } from '../data/mockStockData';
import { ProductItem } from '../types';

interface HeroProps {
  onOpenAuth: (mode?: 'login' | 'signup') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAuth }) => {
  const [products, setProducts] = useState<ProductItem[]>(INITIAL_PRODUCTS.slice(0, 3));
  const [filter, setFilter] = useState<'all' | 'in_stock' | 'low_stock'>('all');
  const [showSimulateModal, setShowSimulateModal] = useState(false);
  const [movementType, setMovementType] = useState<'in' | 'out'>('in');
  const [selectedProdId, setSelectedProdId] = useState('1');
  const [qtyInput, setQtyInput] = useState('5');
  const [feedbackNotice, setFeedbackNotice] = useState<string | null>(null);

  const filteredProducts = products.filter((p) => {
    if (filter === 'all') return true;
    return p.status === filter;
  });

  const handleSimulateMovement = (e: React.FormEvent) => {
    e.preventDefault();
    const qty = parseInt(qtyInput, 10);
    if (isNaN(qty) || qty <= 0) return;

    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === selectedProdId) {
          const newQty = movementType === 'in' ? p.quantity + qty : Math.max(0, p.quantity - qty);
          const newStatus = newQty <= 5 ? 'low_stock' : 'in_stock';
          return {
            ...p,
            quantity: newQty,
            status: newStatus,
            lastMovement: 'Agora mesmo'
          };
        }
        return p;
      })
    );

    const targetProd = products.find((p) => p.id === selectedProdId);
    setFeedbackNotice(
      `Movimentação registrada: ${movementType === 'in' ? '+ ' : '- '}${qty} un. em "${targetProd?.name}".`
    );
    setShowSimulateModal(false);
    setTimeout(() => setFeedbackNotice(null), 4000);
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC]"
    >
      {/* Subtle background decoration */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Badge */}
            <div
              id="hero-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-semibold mb-6 shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Controle de estoque simples</span>
            </div>

            {/* Main H1 Title */}
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6"
            >
              Controle seu estoque <span className="text-blue-600">sem complicação.</span>
            </h1>

            {/* Subtext */}
            <p
              id="hero-description"
              className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl"
            >
              Cadastre seus produtos, registre entradas e saídas e acompanhe tudo pelo celular ou computador.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-6">
              <button
                id="hero-cta-primary"
                type="button"
                onClick={() => onOpenAuth('signup')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-sm hover:shadow-md transition-all focus:outline-hidden focus-visible:ring-3 focus-visible:ring-blue-600 focus-visible:ring-offset-2 cursor-pointer"
              >
                <span>Começar grátis</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>

              <a
                id="hero-cta-secondary"
                href="#como-funciona"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300/80 rounded-xl shadow-2xs transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Ver como funciona
              </a>
            </div>

            {/* Helper text */}
            <p id="hero-auxiliary-text" className="text-sm text-slate-500 font-medium flex items-center gap-2">
              <span>Grátis para começar</span>
              <span className="text-slate-300">•</span>
              <span>Celular e computador</span>
              <span className="text-slate-300">•</span>
              <span>Fácil de usar</span>
            </p>
          </div>

          {/* Right Column: Realistic Mockup of the Stock Control Software */}
          <div className="lg:col-span-6 w-full">
            <div
              id="hero-app-mockup"
              className="relative mx-auto bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden transition-all"
            >
              {/* Mockup Window Header / Browser Chrome */}
              <div className="bg-slate-100/90 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-400/80 inline-block" />
                  <span className="ml-2 text-xs font-medium text-slate-500 hidden sm:inline-block">
                    Ordo - Visão Geral
                  </span>
                </div>
                <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Atualizado em tempo real
                </span>
              </div>

              {/* Mockup App Interface */}
              <div className="p-4 sm:p-6 bg-slate-50/50">
                {/* Top App Bar inside Mockup */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">Visão geral do estoque</h3>
                    <p className="text-xs text-slate-500">Resumo da situação atual dos seus itens</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowSimulateModal(true)}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-2xs transition-colors self-start sm:self-auto cursor-pointer"
                    title="Clique para testar o registro rápido de uma entrada ou saída"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Nova movimentação</span>
                  </button>
                </div>

                {/* Feedback Toast if simulated */}
                {feedbackNotice && (
                  <div className="mb-4 p-2.5 bg-blue-50 border border-blue-200 text-blue-800 text-xs font-medium rounded-lg flex items-center gap-2 animate-in fade-in duration-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{feedbackNotice}</span>
                  </div>
                )}

                {/* 3 Metric Cards explicitly requested */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 mb-5">
                  {/* Card 1: Produtos cadastrados: 128 */}
                  <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200/90 shadow-2xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] sm:text-xs font-medium text-slate-500 leading-tight">
                        Produtos cadastrados
                      </span>
                      <Package className="w-4 h-4 text-slate-400 hidden sm:block" />
                    </div>
                    <p className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">128</p>
                    <span className="text-[10px] text-slate-500 mt-0.5 inline-block">Itens ativos</span>
                  </div>

                  {/* Card 2: Estoque baixo: 7 (amber) */}
                  <div className="bg-white p-3 sm:p-4 rounded-xl border border-amber-200/80 bg-amber-50/20 shadow-2xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] sm:text-xs font-medium text-amber-800 leading-tight">
                        Estoque baixo
                      </span>
                      <AlertTriangle className="w-4 h-4 text-amber-500 hidden sm:block" />
                    </div>
                    <p className="text-xl sm:text-2xl font-bold text-amber-600 tracking-tight">7</p>
                    <span className="text-[10px] text-amber-700/90 mt-0.5 inline-block font-medium">Requer atenção</span>
                  </div>

                  {/* Card 3: Movimentações hoje: 24 */}
                  <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200/90 shadow-2xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] sm:text-xs font-medium text-slate-500 leading-tight">
                        Movimentações hoje
                      </span>
                      <TrendingUp className="w-4 h-4 text-blue-500 hidden sm:block" />
                    </div>
                    <p className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">24</p>
                    <span className="text-[10px] text-slate-500 mt-0.5 inline-block">Entradas & saídas</span>
                  </div>
                </div>

                {/* Filter buttons inside mockup */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 mb-3">
                  <span className="text-xs font-semibold text-slate-700">Situação atual dos produtos</span>
                  <div className="flex gap-1 text-xs">
                    <button
                      type="button"
                      onClick={() => setFilter('all')}
                      className={`px-2 py-0.5 rounded-md font-medium transition-colors ${
                        filter === 'all'
                          ? 'bg-slate-900 text-white'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                      }`}
                    >
                      Todos
                    </button>
                    <button
                      type="button"
                      onClick={() => setFilter('in_stock')}
                      className={`px-2 py-0.5 rounded-md font-medium transition-colors ${
                        filter === 'in_stock'
                          ? 'bg-green-600 text-white'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                      }`}
                    >
                      Em estoque
                    </button>
                    <button
                      type="button"
                      onClick={() => setFilter('low_stock')}
                      className={`px-2 py-0.5 rounded-md font-medium transition-colors ${
                        filter === 'low_stock'
                          ? 'bg-amber-500 text-white'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                      }`}
                    >
                      Baixo
                    </button>
                  </div>
                </div>

                {/* Product List as requested in Section 11 */}
                <div className="space-y-2">
                  {filteredProducts.map((prod) => {
                    const isInStock = prod.status === 'in_stock';
                    const isLowStock = prod.status === 'low_stock';

                    return (
                      <div
                        key={prod.id}
                        className="bg-white p-3 rounded-xl border border-slate-200/80 flex items-center justify-between hover:border-slate-300 transition-colors"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                              isInStock ? 'bg-slate-100 text-slate-700' : 'bg-amber-100 text-amber-700'
                            }`}
                          >
                            <Package className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-slate-900 truncate">{prod.name}</p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>{prod.category}</span>
                              <span>•</span>
                              <span className="text-[11px]">Atualizado: {prod.lastMovement}</span>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0 text-right">
                          <div>
                            <span className="text-sm font-bold text-slate-900">{prod.quantity}</span>
                            <span className="text-xs text-slate-500 ml-1">unidades</span>
                          </div>

                          <div
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                              isInStock
                                ? 'bg-green-50 text-green-700 border border-green-200/80'
                                : 'bg-amber-50 text-amber-700 border border-amber-200/80'
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${isInStock ? 'bg-green-600' : 'bg-amber-500'}`}
                            />
                            <span>{isInStock ? 'Em estoque' : 'Estoque baixo'}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Interactive Demo callout */}
                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>Interface simples: tudo em poucos toques</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowSimulateModal(true)}
                    className="text-blue-600 font-semibold hover:underline cursor-pointer"
                  >
                    Simular movimentação &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mini Simulation Modal inside Mockup for testing effortless simplicity */}
      {showSimulateModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150"
        >
          <div className="bg-white rounded-2xl p-5 max-w-sm w-full border border-slate-200 shadow-xl">
            <h4 className="text-base font-bold text-slate-900 mb-1">Registrar movimentação rápida</h4>
            <p className="text-xs text-slate-500 mb-4">
              Veja na prática como é rápido dar entrada ou saída de itens.
            </p>

            <form onSubmit={handleSimulateMovement} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Produto</label>
                <select
                  value={selectedProdId}
                  onChange={(e) => setSelectedProdId(e.target.value)}
                  className="w-full text-sm border border-slate-300 rounded-lg p-2 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                >
                  {products.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} (Atual: {p.quantity} un.)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Tipo de movimentação</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setMovementType('in')}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 border transition-colors ${
                      movementType === 'in'
                        ? 'bg-green-50 border-green-500 text-green-700'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <ArrowDownToLine className="w-3.5 h-3.5 text-green-600" />
                    <span>Entrada (+)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMovementType('out')}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 border transition-colors ${
                      movementType === 'out'
                        ? 'bg-blue-50 border-blue-500 text-blue-700'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <ArrowUpFromLine className="w-3.5 h-3.5 text-blue-600" />
                    <span>Saída (-)</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Quantidade</label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={qtyInput}
                  onChange={(e) => setQtyInput(e.target.value)}
                  className="w-full text-sm border border-slate-300 rounded-lg p-2 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowSimulateModal(false)}
                  className="flex-1 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-xs cursor-pointer"
                >
                  Confirmar registro
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
