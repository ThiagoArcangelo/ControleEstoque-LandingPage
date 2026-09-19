import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { BenefitsSection } from './components/BenefitsSection';
import { MobileWebSection } from './components/MobileWebSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { FreeTierSection } from './components/FreeTierSection';
import { TrustSection } from './components/TrustSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { InfoModal } from './components/InfoModal';

export default function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup');

  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [infoTitle, setInfoTitle] = useState('');
  const [infoContent, setInfoContent] = useState('');

  const handleOpenAuth = (mode: 'login' | 'signup' = 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleOpenInfo = (title: string, content: string) => {
    setInfoTitle(title);
    setInfoContent(content);
    setInfoModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] selection:bg-blue-100 selection:text-blue-900">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-blue-600 text-white font-medium rounded-md shadow-lg"
      >
        Pular para o conteúdo principal
      </a>

      {/* 1. Header */}
      <Header onOpenAuth={handleOpenAuth} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        {/* 2. Hero with Interactive Mockup */}
        <Hero onOpenAuth={handleOpenAuth} />

        {/* 3. Problema */}
        <ProblemSection />

        {/* 4. Benefícios / Recursos */}
        <BenefitsSection />

        {/* 5. Mobile + Web */}
        <MobileWebSection />

        {/* 6. Como funciona */}
        <HowItWorksSection />

        {/* 7. Para quem é */}
        <TargetAudienceSection />

        {/* 8. Versão gratuita */}
        <FreeTierSection onOpenAuth={handleOpenAuth} />

        {/* 9. Seção de Confiança */}
        <TrustSection />

        {/* 10. FAQ */}
        <FaqSection />

        {/* 11. CTA Final */}
        <FinalCtaSection onOpenAuth={handleOpenAuth} />
      </main>

      {/* 12. Footer */}
      <Footer onOpenModalInfo={handleOpenInfo} />

      {/* Modals */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />

      <InfoModal
        isOpen={infoModalOpen}
        onClose={() => setInfoModalOpen(false)}
        title={infoTitle}
        content={infoContent}
      />
    </div>
  );
}
