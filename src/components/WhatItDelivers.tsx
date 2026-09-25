import React from 'react';
import { Gift } from 'lucide-react';

// External bonus image links hosted directly on Imgur CDN
// Bônus 1: https://imgur.com/a/AxU1ZTh
const BONUS_1_IMG = 'https://i.imgur.com/m17GUvu.jpeg';

// Bônus 2: https://imgur.com/a/O7mAl2q
const BONUS_2_IMG = 'https://i.imgur.com/DpNaM2Z.jpeg';

// Bônus 3: https://imgur.com/a/kFogSl2
const BONUS_3_IMG = 'https://i.imgur.com/1luCabK.jpeg';

// Bônus 4: https://imgur.com/a/ZV6JSPS
const BONUS_4_IMG = 'https://i.imgur.com/zR6Xupr.jpeg';

// 4 Chemical Laboratory Glassware Vessels (Erlenmeyer, Beaker, Volumetric Flask, Reagent Flask)
const renderChemicalVessel = (index: number) => {
  switch (index) {
    case 0:
      // 1. Frasco Erlenmeyer (Conical Flask) - Compact
      return (
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          viewBox="0 0 400 360" 
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path 
            d="M 140 12 C 140 6, 150 5, 160 5 L 240 5 C 250 5, 260 6, 260 12 C 260 18, 252 20, 244 22 L 244 55 C 244 72, 265 92, 278 108 L 368 300 C 378 322, 362 350, 325 350 L 75 350 C 38 350, 22 322, 32 300 L 122 108 C 135 92, 156 72, 156 55 L 156 22 C 148 20, 140 18, 140 12 Z" 
            fill="#FFFFFF" 
            stroke="#DCD4C6" 
            strokeWidth="2" 
            vectorEffect="non-scaling-stroke"
            className="group-hover:stroke-[#059669]/60 transition-colors duration-300"
          />
          <ellipse cx="200" cy="12" rx="42" ry="3.5" fill="none" stroke="#DCD4C6" strokeWidth="1.5" vectorEffect="non-scaling-stroke" opacity="0.6" />
          {/* Graduation lines placed safely on upper right flank */}
          <line x1="295" y1="230" x2="320" y2="230" stroke="#C5BCAE" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          <text x="285" y="234" fill="#9C9283" fontSize="10" fontFamily="sans-serif" textAnchor="end" fontWeight="600">300ml</text>
          <line x1="260" y1="170" x2="280" y2="170" stroke="#C5BCAE" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          <text x="250" y="174" fill="#9C9283" fontSize="10" fontFamily="sans-serif" textAnchor="end" fontWeight="600">200ml</text>
          <line x1="230" y1="115" x2="248" y2="115" stroke="#C5BCAE" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          <text x="220" y="119" fill="#9C9283" fontSize="10" fontFamily="sans-serif" textAnchor="end" fontWeight="600">100ml</text>
        </svg>
      );

    case 1:
      // 2. Béquer Graduado (Beaker with pouring spout) - Compact
      return (
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          viewBox="0 0 400 360" 
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path 
            d="M 22 16 C 26 8, 42 10, 55 14 L 360 14 C 372 14, 380 18, 380 24 C 380 30, 372 32, 362 32 L 362 315 C 362 338, 342 350, 310 350 L 90 350 C 58 350, 38 338, 38 315 L 38 42 C 30 40, 18 26, 22 16 Z" 
            fill="#FFFFFF" 
            stroke="#DCD4C6" 
            strokeWidth="2" 
            vectorEffect="non-scaling-stroke"
            className="group-hover:stroke-[#059669]/60 transition-colors duration-300"
          />
          <path d="M 22 16 Q 38 24, 55 14" fill="none" stroke="#DCD4C6" strokeWidth="1.5" vectorEffect="non-scaling-stroke" opacity="0.6" />
          {/* Graduation lines on upper left, leaving the bottom completely clean for the title */}
          <line x1="38" y1="100" x2="68" y2="100" stroke="#C5BCAE" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          <text x="75" y="104" fill="#9C9283" fontSize="10" fontFamily="sans-serif" fontWeight="600">200ml</text>
          <line x1="38" y1="160" x2="68" y2="160" stroke="#C5BCAE" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          <text x="75" y="164" fill="#9C9283" fontSize="10" fontFamily="sans-serif" fontWeight="600">150ml</text>
          <line x1="38" y1="220" x2="68" y2="220" stroke="#C5BCAE" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          <text x="75" y="224" fill="#9C9283" fontSize="10" fontFamily="sans-serif" fontWeight="600">100ml</text>
        </svg>
      );

    case 2:
      // 3. Balão Volumétrico / Balão de Fundo Chato (Volumetric Flask) - Compact
      return (
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          viewBox="0 0 400 360" 
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path 
            d="M 152 12 C 152 6, 162 5, 172 5 L 228 5 C 238 5, 248 6, 248 12 C 248 18, 240 20, 234 22 L 234 68 C 255 82, 310 118, 348 165 C 382 208, 378 265, 342 310 C 322 338, 290 350, 250 350 L 150 350 C 110 350, 78 338, 58 310 C 22 265, 18 208, 52 165 C 90 118, 145 82, 166 68 L 166 22 C 160 20, 152 18, 152 12 Z" 
            fill="#FFFFFF" 
            stroke="#DCD4C6" 
            strokeWidth="2" 
            vectorEffect="non-scaling-stroke"
            className="group-hover:stroke-[#059669]/60 transition-colors duration-300"
          />
          {/* Calibration line */}
          <line x1="166" y1="48" x2="234" y2="48" stroke="#059669" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeDasharray="3 2" />
          <text x="240" y="51" fill="#059669" fontSize="9" fontFamily="sans-serif" fontWeight="700">500ml</text>
          <path d="M 72 170 C 48 215, 52 265, 75 305" fill="none" stroke="#E6DFD3" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" opacity="0.6" />
        </svg>
      );

    case 3:
    default:
      // 4. Frasco Reagente / Kitassato de Laboratório (Reagent Flask) - Compact
      return (
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          viewBox="0 0 400 360" 
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path 
            d="M 145 14 C 145 6, 155 5, 168 5 L 232 5 C 245 5, 255 6, 255 14 C 255 20, 245 24, 238 26 L 238 52 C 265 62, 340 85, 355 120 L 355 315 C 355 338, 335 350, 305 350 L 95 350 C 65 350, 45 338, 45 315 L 45 120 C 60 85, 135 62, 162 52 L 162 26 C 155 24, 145 20, 145 14 Z" 
            fill="#FFFFFF" 
            stroke="#DCD4C6" 
            strokeWidth="2" 
            vectorEffect="non-scaling-stroke"
            className="group-hover:stroke-[#059669]/60 transition-colors duration-300"
          />
          <rect x="162" y="26" width="76" height="26" fill="none" stroke="#E6DFD3" strokeWidth="1.5" strokeDasharray="2 2" vectorEffect="non-scaling-stroke" opacity="0.6" />
          <line x1="325" y1="140" x2="355" y2="140" stroke="#C5BCAE" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          <text x="318" y="144" fill="#9C9283" fontSize="10" fontFamily="sans-serif" textAnchor="end" fontWeight="600">200ml</text>
          <line x1="325" y1="210" x2="355" y2="210" stroke="#C5BCAE" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          <text x="318" y="214" fill="#9C9283" fontSize="10" fontFamily="sans-serif" textAnchor="end" fontWeight="600">100ml</text>
        </svg>
      );
  }
};

export const WhatItDelivers: React.FC = () => {
  const bonusCards = [
    {
      id: 'bonus-card-1',
      badge: 'BÔNUS Nº 1',
      title: '600 atividades de Química',
      description: 'Acervo completo e categorizado de exercícios e atividades didáticas para fixação e aplicação imediata.',
      imageUrl: BONUS_1_IMG,
    },
    {
      id: 'bonus-card-2',
      badge: 'BÔNUS Nº 2',
      title: '50 Experimentos de Química para Sala de Aula',
      description: 'Práticas experimentais seguras e envolventes para demonstrar conceitos químicos na prática com materiais acessíveis.',
      imageUrl: BONUS_2_IMG,
    },
    {
      id: 'bonus-card-3',
      badge: 'BÔNUS Nº 3',
      title: '50 Desafios de Química para Sala de Aula',
      description: 'Enigmas, dinâmicas e desafios instigantes para estimular o raciocínio lógico e o engajamento dos alunos.',
      imageUrl: BONUS_3_IMG,
    },
    {
      id: 'bonus-card-4',
      badge: 'BÔNUS Nº 4',
      title: 'Tabela Periódica Visual + Guia de Consulta Rápida',
      description: 'Ficha síntese plastificável com propriedades periódicas, massas atômicas e consultas rápidas prontas para impressão.',
      imageUrl: BONUS_4_IMG,
    },
  ];

  return (
    <section 
      id="bonus-exclusivos"
      aria-label="Bônus exclusivos inclusos na coleção de Química"
      className="py-5 sm:py-7 px-4 sm:px-6 bg-transparent"
    >
      <div className="max-w-[1060px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 bg-[#FAF6EE] text-[#16332E] px-4 py-1.5 rounded-full border border-[#D5C9B3] text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 shadow-xs">
            <Gift className="w-4 h-4 text-[#059669]" />
            <span>BÔNUS EXCLUSIVOS</span>
          </div>
          
          <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#16332E] tracking-tight leading-tight">
            E tem mais! Leve também:
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C5C5C]">
            Recursos complementares pensados para enriquecer ainda mais seus estudos e aulas:
          </p>
        </div>

        {/* 2x2 Bonuses Grid: Chemical Lab Vessels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[840px] mx-auto">
          {bonusCards.map((card, index) => {
            return (
              <div 
                key={card.id}
                id={card.id}
                className="relative flex flex-col items-center text-center pt-4 sm:pt-5 pb-5 sm:pb-6 px-5 sm:px-7 max-w-[370px] mx-auto w-full filter drop-shadow-[0_6px_18px_rgba(0,0,0,0.06)] hover:drop-shadow-[0_12px_26px_rgba(0,0,0,0.11)] hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Chemical Glassware Vessel Silhouette (Pure White Background) */}
                {renderChemicalVessel(index)}

                {/* Top Badge */}
                <div className="relative z-10 mb-2 sm:mb-2.5">
                  <span className="bg-[#FAF6EE] text-[#16332E] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-3 py-0.5 rounded-full border border-[#D5C9B3] shadow-2xs inline-block">
                    {card.badge}
                  </span>
                </div>

                {/* Visual Bonus Image (Maintained size, generous padding) */}
                <div className="relative z-10 w-full aspect-square max-w-[145px] sm:max-w-[160px] md:max-w-[170px] rounded-2xl overflow-hidden bg-[#FAF7F0] border-2 border-[#E6DFD3] shadow-[0_4px_16px_rgba(0,0,0,0.06)] mb-2 sm:mb-2.5 group-hover:scale-[1.03] transition-all duration-300 flex items-center justify-center">
                  <img 
                    src={card.imageUrl.replace('.jpeg', 'l.jpeg')} 
                    srcSet={`${card.imageUrl.replace('.jpeg', 'm.jpeg')} 320w, ${card.imageUrl.replace('.jpeg', 'l.jpeg')} 640w`}
                    sizes="(max-width: 640px) 145px, 170px"
                    alt={card.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none"
                    loading="lazy"
                    decoding="async"
                    width="170"
                    height="170"
                  />
                </div>

                {/* Text Details (Title brought up closer, eliminating dead space) */}
                <div className="relative z-10 text-center w-full px-2">
                  <h3 className="font-editorial text-sm sm:text-base md:text-lg font-bold text-[#16332E] tracking-tight max-w-[260px] mx-auto leading-snug">
                    {card.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner Below Cards */}
        <div 
          id="deliveries-highlight-banner"
          className="mt-6 sm:mt-7 max-w-[480px] mx-auto bg-[#16332E] border border-[#102421] rounded-[20px] sm:rounded-[22px] py-4 sm:py-5 px-5 sm:px-7 text-center shadow-[0_12px_32px_rgba(22,51,46,0.22)] text-[#F7F3EA]"
        >
          {/* Top Label */}
          <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] text-[#FAF6EE]/80 uppercase mb-1">
            VALOR TOTAL DOS BÔNUS
          </p>

          {/* Strikethrough Value */}
          <p className="text-lg sm:text-xl font-bold text-[#DCD4C6]/80 line-through decoration-[#F7F3EA]/60 decoration-2 mb-1.5 sm:mb-2">
            R$ 97,00
          </p>

          {/* Main Action Line */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap text-base sm:text-lg md:text-xl font-bold text-white tracking-tight">
            <span>Inclusos</span>
            <span className="bg-[#059669] text-white px-2.5 py-0.5 rounded-[8px] shadow-xs uppercase font-black text-xs sm:text-sm tracking-wide">
              GRÁTIS
            </span>
            <span>na oferta completa!</span>
          </div>
        </div>

      </div>
    </section>
  );
};


