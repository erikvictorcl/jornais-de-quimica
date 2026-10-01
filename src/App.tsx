import React, { useState, Suspense, lazy } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { QuickBenefits } from './components/QuickBenefits';
import { MindMapsShowcase } from './components/MindMapsShowcase';
import { WhatItDelivers } from './components/WhatItDelivers';
import { PricingOffers } from './components/PricingOffers';
import { PurchaseNotification } from './components/PurchaseNotification';

// Dynamic code-splitting for below-the-fold components to reduce initial JS payload
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const AccessSteps = lazy(() => import('./components/AccessSteps').then(m => ({ default: m.AccessSteps })));
const Guarantee = lazy(() => import('./components/Guarantee').then(m => ({ default: m.Guarantee })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

export default function App() {
  const scrollToOffers = () => {
    const el = document.getElementById('ofertas');
    el?.scrollIntoView({ behavior: 'smooth' });
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
      <PricingOffers />

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

      {/* NOTIFICAÇÃO FLUTUANTE DE COMPRA DISCRETA */}
      <PurchaseNotification />
    </div>
  );
}
