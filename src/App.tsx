import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { QuickBenefits } from './components/QuickBenefits';
import { MindMapsShowcase } from './components/MindMapsShowcase';
import { WhatItDelivers } from './components/WhatItDelivers';
import { PricingOffers } from './components/PricingOffers';
import { Testimonials } from './components/Testimonials';
import { Guarantee } from './components/Guarantee';
import { AccessSteps } from './components/AccessSteps';
import { Footer } from './components/Footer';

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
      <WhatItDelivers />

      {/* 6. PLANOS E PREÇOS (R$ 10,00 e R$ 19,90) */}
      <PricingOffers 
        onSelectPlan={handleSelectPlan}
      />

      {/* 7. DEPOIMENTOS DE PROFESSORES */}
      <Testimonials />

      {/* 8. PASSO A PASSO DE ACESSO */}
      <AccessSteps />

      {/* 9. GARANTIA INCONDICIONAL DE 7 DIAS */}
      <Guarantee />

      {/* 10. RODAPÉ */}
      <Footer />

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

