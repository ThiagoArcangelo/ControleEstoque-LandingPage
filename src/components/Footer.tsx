import React from 'react';
import { Package, Globe, Instagram, Linkedin, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenModalInfo?: (title: string, content: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModalInfo }) => {
  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-400 py-12 md:py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#" className="flex items-center gap-2.5 text-white mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs">
                <Package className="w-4 h-4" aria-hidden="true" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">Ordo</span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Controle de estoque simples para pequenos negócios.
            </p>

            {/* Social Media Area (Prepared for future accounts) */}
            <div className="flex items-center gap-3 text-slate-400">
              <a
                href="#main-footer"
                aria-label="Instagram da marca"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#main-footer"
                aria-label="LinkedIn da marca"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#main-footer"
                aria-label="Canal de suporte e contato"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Navegação */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">Produto</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#recursos" className="hover:text-white transition-colors">
                    Recursos
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" className="hover:text-white transition-colors">
                    Como funciona
                  </a>
                </li>
                <li>
                  <a href="#para-quem-e" className="hover:text-white transition-colors">
                    Para quem é
                  </a>
                </li>
                <li>
                  <a href="#mobile-web" className="hover:text-white transition-colors">
                    Celular e Computador
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Suporte & Dúvidas */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">Ajuda</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenModalInfo?.(
                        'Fale Conosco',
                        'Nosso canal de atendimento para suporte e dúvidas: contato@seuestogue.com.br. Estamos à disposição para ajudar você a começar.'
                      )
                    }
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">Legal</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenModalInfo?.(
                        'Termos de Uso',
                        'O serviço de controle de estoque simples foi projetado para auxiliar no gerenciamento de produtos. O usuário é responsável pela exatidão dos dados inseridos.'
                      )
                    }
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    Termos de uso
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenModalInfo?.(
                        'Política de Privacidade',
                        'Respeitamos a privacidade do seu negócio. As informações cadastradas de produtos e estoque são tratadas com integridade e nunca compartilhadas comercialmente com terceiros.'
                      )
                    }
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    Política de privacidade
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 [NOME_DO_PRODUTO]. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5" />
            <span>Feito para o comércio real. Sem complicação.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
