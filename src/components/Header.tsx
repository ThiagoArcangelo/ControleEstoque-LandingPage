import React, { useState, useEffect } from 'react';
import { Package, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenAuth: (mode?: 'login' | 'signup') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAuth }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Recursos', href: '#recursos' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Para quem é', href: '#para-quem-e' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3'
          : 'bg-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            id="brand-logo"
            href="#"
            className="flex items-center gap-2.5 text-slate-900 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md py-1"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs group-hover:bg-blue-700 transition-colors">
              <Package className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 leading-tight">
                Ordo
              </span>
              <span className="text-[11px] text-slate-500 font-medium -mt-0.5 hidden sm:block">
                Controle de Estoque
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" aria-label="Navegação principal" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors py-1 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-5">
            <button
              id="header-login-btn"
              type="button"
              onClick={() => onOpenAuth('login')}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors px-2 py-1.5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md cursor-pointer"
            >
              Entrar
            </button>
            <button
              id="header-signup-btn"
              type="button"
              onClick={() => onOpenAuth('signup')}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-xs transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 cursor-pointer"
            >
              <span>Começar grátis</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              id="mobile-signup-quick"
              type="button"
              onClick={() => onOpenAuth('signup')}
              className="text-xs font-semibold px-3 py-1.5 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Começar grátis
            </button>
            <button
              id="mobile-menu-toggle"
              type="button"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('login');
                }}
                className="w-full text-center py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
              >
                Entrar
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('signup');
                }}
                className="w-full text-center py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors"
              >
                Começar grátis
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
