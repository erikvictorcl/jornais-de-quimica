import React from 'react';
import { Sparkles } from 'lucide-react';
import { NewspaperItem } from '../types';

// External newspaper covers directly hosted on Imgur CDN
// 5 Newspapers (HERO and CAROUSEL):
// 1. https://imgur.com/a/E7teFSd
const JORNAL_1_URL = 'https://i.imgur.com/wlZmGc8.jpeg';
// 2. https://imgur.com/a/ZG3faEe
const JORNAL_2_URL = 'https://i.imgur.com/RofD19f.jpeg';
// 3. https://imgur.com/a/0Lg1Czp
const JORNAL_3_URL = 'https://i.imgur.com/Zz6r1Aj.jpeg';
// 4. https://imgur.com/a/JlzyKdU
const JORNAL_4_URL = 'https://i.imgur.com/itHg7CF.jpeg';
// 5. https://imgur.com/a/k4KN9mB
const JORNAL_5_URL = 'https://i.imgur.com/ShlTdVq.jpeg';

// 4 Additional Newspapers (ONLY in the CAROUSEL):
// 6. https://imgur.com/a/hgtNbff
const JORNAL_6_URL = 'https://i.imgur.com/j2dVU1V.jpeg';
// 7. https://imgur.com/a/w5LrZNk
const JORNAL_7_URL = 'https://i.imgur.com/S8IRXFl.jpeg';
// 8. https://imgur.com/a/DOVLnGm
const JORNAL_8_URL = 'https://i.imgur.com/FxHEzoR.jpeg';
// 9. https://imgur.com/a/SAkmFYG
const JORNAL_9_URL = 'https://i.imgur.com/0l56LHz.jpeg';

export interface NewspaperCoverItem {
  id: string;
  title: string;
  imageUrl: string;
  alt: string;
}

// All 9 covers for the carousel
export const allNewspaperCovers: NewspaperCoverItem[] = [
  { id: 'jornal-capa-1', title: 'Jornal de Química • Edição 1', imageUrl: JORNAL_1_URL, alt: 'Jornal de Química - Edição 1' },
  { id: 'jornal-capa-2', title: 'Jornal de Química • Edição 2', imageUrl: JORNAL_2_URL, alt: 'Jornal de Química - Edição 2' },
  { id: 'jornal-capa-3', title: 'Jornal de Química • Edição 3', imageUrl: JORNAL_3_URL, alt: 'Jornal de Química - Edição 3' },
  { id: 'jornal-capa-4', title: 'Jornal de Química • Edição 4', imageUrl: JORNAL_4_URL, alt: 'Jornal de Química - Edição 4' },
  { id: 'jornal-capa-5', title: 'Jornal de Química • Edição 5', imageUrl: JORNAL_5_URL, alt: 'Jornal de Química - Edição 5' },
  { id: 'jornal-capa-6', title: 'Jornal de Química • Edição 6', imageUrl: JORNAL_6_URL, alt: 'Jornal de Química - Edição 6' },
  { id: 'jornal-capa-7', title: 'Jornal de Química • Edição 7', imageUrl: JORNAL_7_URL, alt: 'Jornal de Química - Edição 7' },
  { id: 'jornal-capa-8', title: 'Jornal de Química • Edição 8', imageUrl: JORNAL_8_URL, alt: 'Jornal de Química - Edição 8' },
  { id: 'jornal-capa-9', title: 'Jornal de Química • Edição 9', imageUrl: JORNAL_9_URL, alt: 'Jornal de Química - Edição 9' },
];

// Continuous Marquee Streams
const row1Covers: NewspaperCoverItem[] = [
  allNewspaperCovers[0],
  allNewspaperCovers[1],
  allNewspaperCovers[2],
  allNewspaperCovers[3],
  allNewspaperCovers[4],
  allNewspaperCovers[5],
  allNewspaperCovers[6],
  allNewspaperCovers[7],
  allNewspaperCovers[8],
];

const row2Covers: NewspaperCoverItem[] = [
  allNewspaperCovers[5],
  allNewspaperCovers[6],
  allNewspaperCovers[7],
  allNewspaperCovers[8],
  allNewspaperCovers[0],
  allNewspaperCovers[1],
  allNewspaperCovers[2],
  allNewspaperCovers[3],
  allNewspaperCovers[4],
];

interface MindMapsShowcaseProps {
  onSelectMap?: (map: NewspaperItem) => void;
}

// Backward-compatible NewspaperItem array for modal preview & external imports
export const sampleNewspapers: NewspaperItem[] = allNewspaperCovers.map((item, idx) => ({
  id: item.id,
  title: item.title,
  discipline: 'Química Geral',
  thinkerOrTheme: item.title,
  era: 'Material Didático',
  headline: item.title,
  lead: 'Jornal de Química pronto para impressão em alta definição.',
  description: 'Material visual completo em formato de jornal para o ensino de Química.',
  previewUrl: item.imageUrl,
  keySections: ['Conteúdo Visual', 'Infográficos', 'Exercícios'],
  quote: 'Um material visual bem estruturado transforma fórmulas difíceis em entendimento real.',
  sheetNumber: `Edição 0${idx + 1}`,
  badgeLabel: 'Jornal de Química',
}));

export const sampleMindMaps: NewspaperItem[] = sampleNewspapers;
export const row1Newspapers: NewspaperItem[] = sampleNewspapers.slice(0, 5);
export const row2Newspapers: NewspaperItem[] = sampleNewspapers.slice(5);

export const MindMapsShowcase: React.FC<MindMapsShowcaseProps> = () => {
  return (
    <section 
      id="jornais-por-dentro" 
      aria-label="Vitrine de Jornais de Química"
      className="py-5 sm:py-7 bg-transparent border-y border-[#E6DFD3]/60 overflow-hidden relative select-none"
    >
      {/* Header Section */}
      <div className="max-w-[1020px] mx-auto text-center px-4 sm:px-6 mb-4 sm:mb-5 relative">
        
        {/* Acervo Visual Exclusivo Pill (positioned above the main heading) */}
        <div className="mb-3.5 sm:mb-4 flex items-center justify-center">
          <span className="relative z-10 text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#16332E] bg-[#FAF6EE] px-4 py-1.5 rounded-full border border-[#D5C9B3] inline-flex items-center gap-1.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
            <span>Acervo Visual Exclusivo</span>
          </span>
        </div>

        {/* Title: Bem grande, em tom Verde-Petróleo Escuro #16332E com destaque em Verde #059669 */}
        <h2 className="relative z-10 font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-black text-[#16332E] tracking-tight leading-[1.12]">
          Veja os <span className="text-[#059669]">jornais</span> por dentro
        </h2>

        {/* Accent Bar Underline */}
        <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-[#059669] rounded-full mx-auto mt-4 sm:mt-5 shadow-xs" />
      </div>

      {/* DOUBLE CONTINUOUS MARQUEE WRAPPER (Water effect container) */}
      <div className="relative w-full overflow-hidden space-y-4 sm:space-y-6">

        {/* WATER EFFECT LAYER (BLOCO 5: Starts at midpoint of Row 1 and covers down through the bottom of Row 2) */}
        <div 
          aria-hidden="true"
          className="absolute top-[24%] bottom-0 inset-x-0 pointer-events-none z-10 overflow-hidden flex flex-col justify-between"
        >
          {/* Surface Water Line / Rippling Crest (cuts Row 1 cards in half horizontally) */}
          <div className="relative w-full h-3 sm:h-4 shrink-0">
            {/* Shimmering specular line glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#38BDF8]/65 to-transparent animate-water-shimmer" />
            {/* Moving water surface wave */}
            <div className="absolute inset-x-0 -top-1 h-3.5 opacity-75 overflow-hidden">
              <svg className="w-[200%] h-full text-[#38BDF8] animate-water-wave" preserveAspectRatio="none" viewBox="0 0 1200 24" fill="none">
                <path d="M0,12 C150,4 350,20 600,12 C850,4 1050,20 1200,12 L1200,24 L0,24 Z" fill="currentColor" fillOpacity="0.45" />
              </svg>
            </div>
            {/* Fine horizon light gleam */}
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/85 to-transparent shadow-[0_0_12px_rgba(56,189,248,0.7)]" />
          </div>

          {/* Submerged Water Area (Gentle cyan/teal translucent tint + subtle caustic depth ripples) */}
          <div className="w-full flex-1 bg-gradient-to-b from-[#0284C7]/12 via-[#0F766E]/12 to-[#0284C7]/16 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-300 via-transparent to-transparent animate-water-depth" />
          </div>
        </div>

        {/* FILEIRA 1: Movimento contínuo para a DIREITA */}
        <div className="relative w-full overflow-hidden py-2 sm:py-3 pointer-events-none select-none">
          <div className="animate-marquee-right flex gap-4 sm:gap-6 md:gap-8 items-center pointer-events-none">
            {/* First Set */}
            {row1Covers.map((paper, idx) => (
              <CleanNewspaperCard 
                key={`r1-set1-${paper.id}-${idx}`}
                paper={paper}
                index={idx}
              />
            ))}
            {/* Duplicated Set for Seamless Infinite Loop */}
            {row1Covers.map((paper, idx) => (
              <CleanNewspaperCard 
                key={`r1-set2-${paper.id}-${idx}`}
                paper={paper}
                index={idx + row1Covers.length}
                aria-hidden={true}
              />
            ))}
          </div>
        </div>

        {/* FILEIRA 2: Movimento contínuo para a ESQUERDA */}
        <div className="relative w-full overflow-hidden py-2 sm:py-3 pointer-events-none select-none">
          <div className="animate-marquee-left flex gap-4 sm:gap-6 md:gap-8 items-center pointer-events-none">
            {/* First Set */}
            {row2Covers.map((paper, idx) => (
              <CleanNewspaperCard 
                key={`r2-set1-${paper.id}-${idx}`}
                paper={paper}
                index={idx + 3}
              />
            ))}
            {/* Duplicated Set for Seamless Infinite Loop */}
            {row2Covers.map((paper, idx) => (
              <CleanNewspaperCard 
                key={`r2-set2-${paper.id}-${idx}`}
                paper={paper}
                index={idx + row2Covers.length + 3}
                aria-hidden={true}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// Subcomponent: Clean Newspaper Cover Card (Visual Only - No Extra Texts/Descriptions)
interface CleanNewspaperCardProps {
  paper: NewspaperCoverItem;
  index?: number;
  'aria-hidden'?: boolean;
}

const bobDurations = [3.6, 4.2, 3.8, 4.4, 3.5, 4.0, 3.7, 4.3, 3.9];
const bobDelays = [0, 0.8, 1.6, 0.4, 1.2, 2.0, 0.6, 1.4, 2.2];

const CleanNewspaperCard: React.FC<CleanNewspaperCardProps> = ({ paper, index = 0, 'aria-hidden': ariaHidden }) => {
  const duration = bobDurations[index % bobDurations.length];
  const delay = bobDelays[index % bobDelays.length];

  return (
    <div
      aria-hidden={ariaHidden}
      style={{
        animation: `water-bob ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
      className="shrink-0 w-[215px] sm:w-[275px] md:w-[325px] lg:w-[365px] bg-white rounded-2xl sm:rounded-[22px] border-2 border-[#E6DFD3] overflow-hidden shadow-[0_10px_28px_rgba(15,82,87,0.10)] p-2 sm:p-2.5 select-none pointer-events-none will-change-transform"
    >
      {/* Newspaper Image Canvas - Exact uncropped framing (BLOCO 1: ensures top masthead is never cut) */}
      <div className="w-full aspect-[1/1.51] rounded-xl sm:rounded-lg overflow-hidden bg-[#FAF6EE] border border-[#E6DFD3]/80 relative shadow-inner p-1 sm:p-1.5 flex items-center justify-center">
        <img 
          src={paper.imageUrl} 
          alt={paper.alt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain select-none"
          loading="lazy"
        />
      </div>
    </div>
  );
};


