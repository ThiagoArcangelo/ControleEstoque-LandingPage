import React, { useState } from 'react';
import { X, CheckCircle, Package, ArrowRight, Smartphone } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'signup'
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [name, setName] = useState('');
  const [storeName, setStoreName] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync mode if initialMode changes
  React.useEffect(() => {
    setMode(initialMode);
    setIsSuccess(false);
  }, [initialMode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate instantaneous friendly onboarding
    setIsSuccess(true);
  };

  const handleFinish = () => {
    setIsSuccess(false);
    onClose();
    // Smoothly scroll to the live interactive mockup
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative animate-in zoom-in-95 duration-150"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-4 border border-green-200">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 id="auth-modal-title" className="text-2xl font-bold text-slate-900 mb-2">
              {mode === 'signup' ? 'Tudo pronto!' : 'Bem-vindo de volta!'}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {mode === 'signup'
                ? 'Sua conta gratuita foi criada. Você já pode organizar seus produtos e movimentações sem nenhuma complicação.'
                : 'Você está conectado com sucesso ao controle de estoque.'}
            </p>
            <button
              type="button"
              onClick={handleFinish}
              className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Ver demonstração da aplicação</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Package className="w-4 h-4" />
              </div>
              <span className="font-bold text-base text-slate-900">[NOME_DO_PRODUTO]</span>
            </div>

            <h3 id="auth-modal-title" className="text-2xl font-bold text-slate-900 mb-1.5">
              {mode === 'signup' ? 'Comece gratuitamente' : 'Acesse seu estoque'}
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              {mode === 'signup'
                ? 'Organize seus produtos pelo celular ou computador em poucos segundos.'
                : 'Informe seus dados para continuar para a sua conta.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'signup' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Seu nome</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-sm border border-slate-300 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              )}

              {mode === 'signup' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Nome da sua loja ou negócio (opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Mercearia do Bairro"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    className="w-full text-sm border border-slate-300 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  E-mail ou Celular (WhatsApp)
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: contato@sualoja.com ou (11) 99999-9999"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  className="w-full text-sm border border-slate-300 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{mode === 'signup' ? 'Criar minha conta grátis' : 'Entrar no sistema'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Mode switch */}
              <div className="text-center pt-2 text-xs text-slate-500">
                {mode === 'signup' ? (
                  <span>
                    Já possui acesso?{' '}
                    <button
                      type="button"
                      onClick={() => setMode('login')}
                      className="font-semibold text-blue-600 hover:underline cursor-pointer"
                    >
                      Fazer login
                    </button>
                  </span>
                ) : (
                  <span>
                    Ainda não tem conta?{' '}
                    <button
                      type="button"
                      onClick={() => setMode('signup')}
                      className="font-semibold text-blue-600 hover:underline cursor-pointer"
                    >
                      Criar conta grátis
                    </button>
                  </span>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
