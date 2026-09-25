import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

// External product image links hosted directly on Imgur CDN
// Notebook screen: https://imgur.com/a/yPA8PUP
const NOTEBOOK_IMGUR_URL = 'https://i.imgur.com/sQexVEM.jpeg';

// Smartphone screen: https://imgur.com/a/ypM6cR4
const CELULAR_IMGUR_URL = 'https://i.imgur.com/Wl2uZ8F.jpeg';

// 5 Newspapers for HERO and CAROUSEL:
// 1. https://imgur.com/a/E7teFSd
const JORNAL_HERO_1 = 'https://i.imgur.com/wlZmGc8.jpeg';
// 2. https://imgur.com/a/ZG3faEe
const JORNAL_HERO_2 = 'https://i.imgur.com/RofD19f.jpeg';
// 3. https://imgur.com/a/0Lg1Czp
const JORNAL_HERO_3 = 'https://i.imgur.com/Zz6r1Aj.jpeg';
// 4. https://imgur.com/a/JlzyKdU
const JORNAL_HERO_4 = 'https://i.imgur.com/itHg7CF.jpeg';
// 5. https://imgur.com/a/k4KN9mB
const JORNAL_HERO_5 = 'https://i.imgur.com/ShlTdVq.jpeg';

interface HeroProps {
  onCtaClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const scrollToOffers = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const el = document.getElementById('ofertas');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 5 Portrait Newspaper Front Pages (External CDN links)
  const foregroundNewspapers = [
    {
      id: 'hero-paper-1',
      title: 'Jornal de Química • Edição 1',
      src: JORNAL_HERO_1,
      alt: 'Capa do Jornal de Química 1',
      rotation: '-rotate-[3.5deg]',
      translateY: 'translate-y-2 sm:translate-y-4',
      zIndex: 'z-[20]',
    },
    {
      id: 'hero-paper-2',
      title: 'Jornal de Química • Edição 2',
      src: JORNAL_HERO_2,
      alt: 'Capa do Jornal de Química 2',
      rotation: '-rotate-[1.5deg]',
      translateY: 'translate-y-1 sm:translate-y-1.5',
      zIndex: 'z-[26]',
    },
    {
      id: 'hero-paper-3',
      title: 'Jornal de Química • Edição 3',
      src: JORNAL_HERO_3,
      alt: 'Capa do Jornal de Química 3',
      rotation: 'rotate-0',
      translateY: '-translate-y-1 sm:-translate-y-2 scale-[1.05]',
      zIndex: 'z-[35]', // Center stands in front
    },
    {
      id: 'hero-paper-4',
      title: 'Jornal de Química • Edição 4',
      src: JORNAL_HERO_4,
      alt: 'Capa do Jornal de Química 4',
      rotation: 'rotate-[1.5deg]',
      translateY: 'translate-y-1 sm:translate-y-1.5',
      zIndex: 'z-[26]',
    },
    {
      id: 'hero-paper-5',
      title: 'Jornal de Química • Edição 5',
      src: JORNAL_HERO_5,
      alt: 'Capa do Jornal de Química 5',
      rotation: 'rotate-[3.5deg]',
      translateY: 'translate-y-2 sm:translate-y-4',
      zIndex: 'z-[20]',
    },
  ];

  return (
    <header id="hero-section" className="pt-4 sm:pt-6 pb-4 sm:pb-6 px-3 sm:px-6">
      <div className="max-w-[1160px] mx-auto">
        {/* Main Central Card Container */}
        <div 
          id="hero-card"
          className="bg-white rounded-[22px] border border-[#E6DFD3] shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-5 sm:p-10 md:p-12 text-center transition-all duration-300 relative overflow-hidden"
        >
          {/* 2. Main Title (H1) with Editorial Serif */}
          <h1 
            id="hero-heading"
            className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-[#16332E] tracking-tight leading-[1.12] max-w-4xl mx-auto min-h-[72px] sm:min-h-[88px] md:min-h-[115px] lg:min-h-[128px]"
          >
            <span className="text-[#059669]">+300</span> Jornais de <span className="text-[#059669] italic">Química</span> Prontos para Sala de Aula
          </h1>

          {/* 4. UNIFIED PRODUCT MOCKUP COMPOSITION */}
          <div 
            id="hero-mockup-container"
            className="mt-7 sm:mt-10 mb-6 sm:mb-8 relative w-full max-w-[1040px] mx-auto select-none min-h-[415px] sm:min-h-[580px] md:min-h-[690px] lg:min-h-[780px]"
          >
            <div 
              id="hero-composition-wrapper" 
              className="hero-composition-wrapper relative flex flex-col items-center w-full"
            >
              
              {/* BACK LAYER: CENTRAL LAPTOP + SMARTPHONE */}
              <div className="hero-back-layer relative w-full flex justify-center items-end px-2">
                
                {/* 1. CENTRAL NOTEBOOK */}
                <div className="hero-device-wrapper relative z-10 w-full max-w-[340px] sm:max-w-[520px] md:max-w-[640px] lg:max-w-[720px]">
                  
                  {/* Laptop Lid / Screen */}
                  <div className="bg-[#1E293B] rounded-t-[14px] sm:rounded-t-[18px] p-2 sm:p-2.5 shadow-[0_15px_40px_rgba(0,0,0,0.25)] border-t border-x border-[#334155] relative">
                    {/* Camera dot */}
                    <div className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#0F172A] flex items-center justify-center">
                      <div className="w-0.5 h-0.5 rounded-full bg-[#F2B705]" />
                    </div>

                    {/* Screen View */}
                    <div className="bg-[#0F172A] rounded-t-sm sm:rounded-md overflow-hidden aspect-[16/9.5] sm:aspect-[16/9.2] flex flex-col border border-slate-700 text-left relative shadow-inner">
                      <img 
                        src="https://i.imgur.com/sQexVEMl.jpeg"
                        srcSet="https://i.imgur.com/sQexVEMl.jpeg 640w, https://i.imgur.com/sQexVEMh.jpeg 1024w, https://i.imgur.com/sQexVEM.jpeg 1280w"
                        sizes="(max-width: 640px) 340px, (max-width: 1024px) 640px, 720px"
                        alt="Jornais de Química na tela do notebook" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover select-none"
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        width="640"
                        height="380"
                      />
                    </div>

                    {/* Bottom Bezel */}
                    <div className="pt-1 sm:pt-1.5 pb-0.5 flex justify-center items-center">
                      <span className="text-[7px] sm:text-[9px] font-medium tracking-wider text-[#94A3B8] font-sans">
                        MacBook Air
                      </span>
                    </div>
                  </div>

                  {/* Dark Hinge */}
                  <div className="w-[85%] mx-auto h-1 sm:h-1.5 bg-[#0A0F1D] rounded-t-sm shadow-inner" />

                  {/* Laptop Aluminum Unibody Base */}
                  <div className="relative w-[102.5%] -ml-[1.25%] bg-gradient-to-b from-[#94A3B8] via-[#64748B] to-[#475569] rounded-b-md sm:rounded-b-lg border-t border-[#CBD5E1] shadow-[0_12px_28px_rgba(0,0,0,0.25)] pt-1 sm:pt-1.5 pb-1.5 sm:pb-2.5 px-2.5 sm:px-5 flex flex-col items-center">
                    
                    {/* Horizontal Keyboard Well */}
                    <div className="w-full max-w-[560px] bg-[#0F172A] rounded-[2px] sm:rounded-[4px] p-0.5 sm:p-1 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)] border border-[#1E293B]">
                      <div className="flex flex-col gap-[1px] sm:gap-[1.5px]">
                        
                        {/* Row 1: Function / Esc keys */}
                        <div className="grid grid-cols-14 gap-[1px] sm:gap-[1.5px] h-1 sm:h-1.5">
                          <div className="bg-[#1E293B] rounded-[1px] border-b border-black flex items-center justify-center">
                            <span className="text-[3px] sm:text-[4px] text-[#94A3B8] scale-75">esc</span>
                          </div>
                          {Array.from({ length: 12 }).map((_, i) => (
                            <div key={`fn-${i}`} className="bg-[#1E293B] rounded-[1px] border-b border-black flex items-center justify-center">
                              <div className="w-0.5 sm:w-1.5 h-[0.5px] bg-[#64748B]/60" />
                            </div>
                          ))}
                          <div className="bg-[#1E293B] rounded-[1px] border-b border-black" />
                        </div>

                        {/* Row 2: Numbers row */}
                        <div className="grid grid-cols-14 gap-[1px] sm:gap-[1.5px] h-1 sm:h-2">
                          {['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '⌫'].map((k, i) => (
                            <div key={`n-${i}`} className="bg-[#1E293B] rounded-[1px] border-b border-black shadow-[0_0.5px_1px_rgba(0,0,0,0.6)] flex items-center justify-center">
                              <span className="text-[4px] sm:text-[6px] text-[#E2E8F0] font-mono leading-none">{k}</span>
                            </div>
                          ))}
                        </div>

                        {/* Row 3: QWERTY row */}
                        <div className="grid grid-cols-14 gap-[1px] sm:gap-[1.5px] h-1 sm:h-2">
                          {['⇥', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'].map((k, i) => (
                            <div key={`q-${i}`} className="bg-[#1E293B] rounded-[1px] border-b border-black shadow-[0_0.5px_1px_rgba(0,0,0,0.6)] flex items-center justify-center">
                              <span className="text-[4px] sm:text-[6px] text-[#E2E8F0] font-mono leading-none">{k}</span>
                            </div>
                          ))}
                        </div>

                        {/* Row 4: ASDF row */}
                        <div className="grid grid-cols-13 gap-[1px] sm:gap-[1.5px] h-1 sm:h-2">
                          {['⇪', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', '⏎'].map((k, i) => (
                            <div key={`a-${i}`} className={`bg-[#1E293B] rounded-[1px] border-b border-black shadow-[0_0.5px_1px_rgba(0,0,0,0.6)] flex items-center justify-center ${i === 0 || i === 12 ? 'col-span-1.5 bg-[#0F172A]' : ''}`}>
                              <span className="text-[4px] sm:text-[6px] text-[#E2E8F0] font-mono leading-none">{k}</span>
                            </div>
                          ))}
                        </div>

                        {/* Row 5: ZXCV row */}
                        <div className="grid grid-cols-12 gap-[1px] sm:gap-[1.5px] h-1 sm:h-2">
                          {['⇧', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '⇧'].map((k, i) => (
                            <div key={`z-${i}`} className={`bg-[#1E293B] rounded-[1px] border-b border-black shadow-[0_0.5px_1px_rgba(0,0,0,0.6)] flex items-center justify-center ${i === 0 || i === 11 ? 'bg-[#0F172A]' : ''}`}>
                              <span className="text-[4px] sm:text-[6px] text-[#E2E8F0] font-mono leading-none">{k}</span>
                            </div>
                          ))}
                        </div>

                        {/* Row 6: Spacebar and modifier row */}
                        <div className="flex gap-[1px] sm:gap-[1.5px] h-1 sm:h-2 justify-center">
                          <div className="w-3 sm:w-6 bg-[#0F172A] rounded-[1px] border-b border-black flex items-center justify-center">
                            <span className="text-[3px] sm:text-[5px] text-[#94A3B8]">fn</span>
                          </div>
                          <div className="w-3 sm:w-6 bg-[#0F172A] rounded-[1px] border-b border-black flex items-center justify-center">
                            <span className="text-[3px] sm:text-[5px] text-[#94A3B8]">⌃</span>
                          </div>
                          <div className="w-3 sm:w-6 bg-[#0F172A] rounded-[1px] border-b border-black flex items-center justify-center">
                            <span className="text-[3px] sm:text-[5px] text-[#94A3B8]">⌥</span>
                          </div>
                          <div className="w-4 sm:w-7 bg-[#0F172A] rounded-[1px] border-b border-black flex items-center justify-center">
                            <span className="text-[3px] sm:text-[5px] text-[#94A3B8]">⌘</span>
                          </div>
                          {/* Wide Horizontal Spacebar */}
                          <div className="flex-1 max-w-[140px] sm:max-w-[210px] bg-[#1E293B] rounded-[1px] border-b border-black shadow-[0_0.5px_1px_rgba(0,0,0,0.6)]" />
                          <div className="w-4 sm:w-7 bg-[#0F172A] rounded-[1px] border-b border-black flex items-center justify-center">
                            <span className="text-[3px] sm:text-[5px] text-[#94A3B8]">⌘</span>
                          </div>
                          <div className="w-3 sm:w-6 bg-[#0F172A] rounded-[1px] border-b border-black flex items-center justify-center">
                            <span className="text-[3px] sm:text-[5px] text-[#94A3B8]">⌥</span>
                          </div>
                          <div className="w-5 sm:w-8 grid grid-cols-2 gap-[1px]">
                            <div className="bg-[#0F172A] rounded-[1px] border-b border-black" />
                            <div className="bg-[#0F172A] rounded-[1px] border-b border-black" />
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Compact Glass Trackpad */}
                    <div className="w-20 sm:w-36 h-1.5 sm:h-2.5 bg-[#CBD5E1]/30 rounded-[2px] sm:rounded-[3px] mt-1 sm:mt-1.5 border border-[#94A3B8]/50 shadow-inner" />

                    {/* Front Edge Lip Notch */}
                    <div className="w-8 sm:w-14 h-0.5 sm:h-1 bg-[#475569] rounded-full mt-0.5 sm:mt-1 opacity-80" />
                  </div>
                </div>

                {/* 2. SMARTPHONE (OVERLAPPING LEFT SIDE) */}
                <div className="absolute left-1 sm:left-4 md:left-8 bottom-3 sm:bottom-6 z-20 w-16 sm:w-24 md:w-28 lg:w-32 bg-[#1E293B] rounded-[14px] sm:rounded-[20px] p-1 sm:p-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.3)] border-2 border-slate-700 transform -rotate-[3deg] hover:rotate-0 transition-transform duration-300">
                  <div className="bg-black rounded-[10px] sm:rounded-[15px] overflow-hidden aspect-[9/16] flex flex-col text-left border border-slate-800 relative">
                    {/* Speaker notch */}
                    <div className="w-5 sm:w-8 h-1 bg-[#475569] rounded-full mx-auto my-1 z-10 shrink-0" />
                    
                    {/* Phone screen preview */}
                    <div className="flex-1 w-full h-full relative overflow-hidden bg-black">
                      <img 
                        src="https://i.imgur.com/Wl2uZ8Fm.jpeg" 
                        srcSet="https://i.imgur.com/Wl2uZ8Fm.jpeg 320w, https://i.imgur.com/Wl2uZ8Fl.jpeg 640w"
                        sizes="(max-width: 640px) 64px, 128px"
                        alt="Jornal de Química no celular" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover select-none"
                        loading="lazy"
                        decoding="async"
                        width="128"
                        height="228"
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* FOREGROUND LAYER: 5 PORTRAIT NEWSPAPER CARDS PLACED LOWER DOWN (EXPANDED SIZE) */}
              <div 
                id="hero-cards-showcase-row"
                className="relative -mt-5 sm:-mt-10 md:-mt-14 lg:-mt-18 z-30 w-full flex items-end justify-center -space-x-5 sm:-space-x-9 md:-space-x-12 lg:-space-x-16 px-1 select-none pointer-events-none min-h-[150px] sm:min-h-[220px] md:min-h-[280px] lg:min-h-[340px]"
              >
                {foregroundNewspapers.map((paper) => (
                  <div
                    key={paper.id}
                    id={paper.id}
                    className={`relative shrink-0 w-[110px] sm:w-[180px] md:w-[240px] lg:w-[285px] aspect-[3/4.2] rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.18)] border-2 sm:border-4 border-white transition-all duration-300 select-none pointer-events-none ${paper.rotation} ${paper.translateY} ${paper.zIndex}`}
                  >
                    <img
                      src={paper.src.replace('.jpeg', 'l.jpeg')}
                      srcSet={`${paper.src.replace('.jpeg', 'm.jpeg')} 320w, ${paper.src.replace('.jpeg', 'l.jpeg')} 640w`}
                      sizes="(max-width: 640px) 110px, (max-width: 1024px) 240px, 285px"
                      alt={paper.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover select-none pointer-events-none"
                      loading="lazy"
                      decoding="async"
                      width="285"
                      height="399"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* 5. MAIN CALL TO ACTION (CTA) */}
          <div className="flex flex-col items-center mt-6 sm:mt-8">
            <button
              id="hero-cta-button"
              type="button"
              onClick={scrollToOffers}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#059669] hover:bg-[#047857] active:scale-[0.99] text-white font-bold text-base sm:text-lg rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-200 w-full sm:w-auto min-w-[290px] cursor-pointer group uppercase tracking-wide"
            >
              <span>QUERO OS JORNAIS</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Microcopy below CTA */}
            <div 
              id="hero-microcopy"
              className="mt-4 flex flex-wrap items-center justify-center gap-y-1.5 gap-x-4 text-xs sm:text-[13px] font-semibold text-[#5C5C5C]"
            >
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-[#1B3A3A] stroke-[2.8]" />
                Pronto para imprimir em A4
              </span>
              <span className="text-[#DCD4C6] hidden sm:inline">&bull;</span>
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-[#1B3A3A] stroke-[2.8]" />
                Economia de planejamento
              </span>
              <span className="text-[#DCD4C6] hidden sm:inline">&bull;</span>
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-[#1B3A3A] stroke-[2.8]" />
                Ensino Médio & Pré-Vestibular
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};


