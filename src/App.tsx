import React, { useState, Suspense, lazy } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { QuickBenefits } from './components/QuickBenefits';
import { MindMapsShowcase } from './components/MindMapsShowcase';
import { WhatItDelivers } from './components/WhatItDelivers';
import { PricingOffers } from './components/PricingOffers';

// Dynamic code-splitting for below-the-fold components to reduce initial JS payload
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const AccessSteps = lazy(() => import('./components/AccessSteps').then(m => ({ default: m.AccessSteps })));
const Guarantee = lazy(() => import('./components/Guarantee').then(m => ({ default: m.Guarantee })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

export default function App() {
  const [notification, setNotification] = useState<string | null>(null);

  const scrollToOffers = () => {
    const el = document.getElementById('ofertas');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectPlan = (planName: string) => {
    setNotification(`Opção selecionada: ${planName}. O checkout seguro será aberto.`);
    setTimeout(() => {
      setNotification(null);
    }, 4500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-newsprint-texture text-[#2B2B2B] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. FAIXA SUPERIOR DE AVISO */}
      <TopBar />

      {/* 2. HERO PRINCIPAL */}
      <Hero 
        onCtaClick={scrollToOffers}
      />

      {/* 3. BENEFÍCIOS RÁPIDOS */}
      <QuickBenefits />

      {/* 4. SHOWCASE DOS JORNAIS (CARROSSEL MARQUEE) */}
      <MindMapsShowcase />

      {/* 5. BÔNUS EXCLUSIVOS INCLUSOS */}
      <div className="content-visibility-auto">
        <WhatItDelivers />
      </div>

      {/* 6. PLANOS E PREÇOS (R$ 10,00 e R$ 19,90) */}
      <PricingOffers 
        onSelectPlan={handleSelectPlan}
      />

      {/* COMPONENTES CARREGADOS SOB DEMANDA ABAIXO DA DOBRA */}
      <Suspense fallback={null}>
        {/* 7. DEPOIMENTOS DE PROFESSORES */}
        <div className="content-visibility-auto">
          <Testimonials />
        </div>

        {/* 8. PASSO A PASSO DE ACESSO */}
        <div className="content-visibility-auto">
          <AccessSteps />
        </div>

        {/* 9. GARANTIA INCONDICIONAL DE 7 DIAS */}
        <div className="content-visibility-auto">
          <Guarantee />
        </div>

        {/* 10. RODAPÉ */}
        <div className="content-visibility-auto">
          <Footer />
        </div>
      </Suspense>

      {/* TOAST DE NOTIFICAÇÃO */}
      {notification && (
        <div 
          role="status"
          className="fixed bottom-5 right-5 z-50 max-w-sm bg-[#16332E] text-[#F7F3EA] text-xs sm:text-sm px-4 py-3 rounded-xl shadow-2xl border border-[#102421] flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <span>{notification}</span>
          <button 
            type="button" 
            onClick={() => setNotification(null)}
            className="text-white/80 hover:text-white font-bold text-xs cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
