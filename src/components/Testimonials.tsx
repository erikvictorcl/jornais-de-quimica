import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

// Links das imagens externas de depoimentos no Imgur CDN
// 1. https://imgur.com/a/bdaXZ6y
const TESTIMONIAL_1_URL = 'https://i.imgur.com/A58B8Mg.jpeg';
// 2. https://imgur.com/a/r5RaHke
const TESTIMONIAL_2_URL = 'https://i.imgur.com/M03jR1L.jpeg';
// 3. https://imgur.com/a/DRnGWsd
const TESTIMONIAL_3_URL = 'https://i.imgur.com/vt8eyku.jpeg';
// 4. https://imgur.com/a/DECSlPj
const TESTIMONIAL_4_URL = 'https://i.imgur.com/oFqIxzz.jpeg';
// 5. https://imgur.com/a/lqkRN4g
const TESTIMONIAL_5_URL = 'https://i.imgur.com/Eti1JV0.jpeg';
// 6. https://imgur.com/a/KAdLRwU
const TESTIMONIAL_6_URL = 'https://i.imgur.com/lL1iwVO.jpeg';

export interface TestimonialImageItem {
  id: string;
  originalAlbumUrl: string;
  imageUrl: string;
  alt: string;
}

export const testimonialImages: TestimonialImageItem[] = [
  {
    id: 'depoimento-1',
    originalAlbumUrl: 'https://imgur.com/a/bdaXZ6y',
    imageUrl: TESTIMONIAL_1_URL,
    alt: 'Depoimento real de professor - Jornais de Química 1',
  },
  {
    id: 'depoimento-2',
    originalAlbumUrl: 'https://imgur.com/a/r5RaHke',
    imageUrl: TESTIMONIAL_2_URL,
    alt: 'Depoimento real de professor - Jornais de Química 2',
  },
  {
    id: 'depoimento-3',
    originalAlbumUrl: 'https://imgur.com/a/DRnGWsd',
    imageUrl: TESTIMONIAL_3_URL,
    alt: 'Depoimento real de professor - Jornais de Química 3',
  },
  {
    id: 'depoimento-4',
    originalAlbumUrl: 'https://imgur.com/a/DECSlPj',
    imageUrl: TESTIMONIAL_4_URL,
    alt: 'Depoimento real de professor - Jornais de Química 4',
  },
  {
    id: 'depoimento-5',
    originalAlbumUrl: 'https://imgur.com/a/lqkRN4g',
    imageUrl: TESTIMONIAL_5_URL,
    alt: 'Depoimento real de professor - Jornais de Química 5',
  },
  {
    id: 'depoimento-6',
    originalAlbumUrl: 'https://imgur.com/a/KAdLRwU',
    imageUrl: TESTIMONIAL_6_URL,
    alt: 'Depoimento real de professor - Jornais de Química 6',
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialImages.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonialImages.length - 1 ? 0 : prev + 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handlePrev, handleNext]);

  // Autoplay suave com pausa no hover/touch
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }

    touchStartXRef.current = null;
    setIsPaused(false);
  };

  return (
    <section 
      id="depoimentos"
      aria-label="Depoimentos reais de professores e estudantes de Química"
      className="py-6 sm:py-9 px-4 sm:px-6 bg-transparent overflow-hidden border-b border-[#E6DFD3]/60 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1140px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-5 sm:mb-7">
          <span className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#16332E] bg-[#FAF6EE] px-3.5 py-1 rounded-full border border-[#D5C9B3] inline-flex items-center gap-1.5 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
            <span>Experiência em Sala de Aula</span>
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl md:text-[38px] font-bold text-[#16332E] tracking-tight leading-tight">
            O que dizem os <span className="text-[#059669]">professores</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5C5C5C]">
            Relatos espontâneos de educadores que já estão usando os jornais com suas turmas.
          </p>
          <div className="w-14 h-1 bg-[#059669] mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel Container */}
        <div 
          className="relative w-full max-w-[960px] mx-auto h-[510px] sm:h-[570px] md:h-[610px] flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Depoimento anterior"
            className="absolute left-1 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#16332E] hover:bg-[#102421] active:scale-95 text-white flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.22)] hover:scale-105 transition-all cursor-pointer border border-[#102421]"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Próximo depoimento"
            className="absolute right-1 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#16332E] hover:bg-[#102421] active:scale-95 text-white flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.22)] hover:scale-105 transition-all cursor-pointer border border-[#102421]"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Cards Display */}
          <div className="relative w-full h-full flex items-center justify-center">
            {testimonialImages.map((item, index) => {
              const total = testimonialImages.length;
              let diff = (index - currentIndex) % total;
              if (diff > total / 2) diff -= total;
              if (diff < -total / 2) diff += total;

              const isCenter = diff === 0;
              const isLeft = diff === -1;
              const isRight = diff === 1;

              if (!isCenter && !isLeft && !isRight) {
                return null;
              }

              let transformClass = '';
              let zIndexClass = 'z-10';
              let opacityClass = 'opacity-35 hover:opacity-65 cursor-pointer';

              if (isCenter) {
                transformClass = 'translate-x-0 scale-100';
                zIndexClass = 'z-30';
                opacityClass = 'opacity-100';
              } else if (isLeft) {
                transformClass = '-translate-x-[56%] sm:-translate-x-[72%] md:-translate-x-[82%] scale-[0.84] sm:scale-[0.88]';
                zIndexClass = 'z-10';
              } else if (isRight) {
                transformClass = 'translate-x-[56%] sm:translate-x-[72%] md:translate-x-[82%] scale-[0.84] sm:scale-[0.88]';
                zIndexClass = 'z-10';
              }

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (isLeft) handlePrev();
                    if (isRight) handleNext();
                  }}
                  className={`absolute top-1/2 -translate-y-1/2 transition-all duration-400 ease-out origin-center w-[275px] sm:w-[325px] md:w-[350px] h-[480px] sm:h-[540px] md:h-[580px] ${transformClass} ${zIndexClass} ${opacityClass}`}
                >
                  {/* Container da Imagem do Depoimento */}
                  <div className="w-full h-full bg-white rounded-[22px] sm:rounded-[26px] p-2 sm:p-2.5 border border-[#E6DFD3] shadow-[0_12px_36px_rgba(0,0,0,0.10)] flex items-center justify-center overflow-hidden hover:shadow-[0_16px_44px_rgba(0,0,0,0.14)] transition-shadow">
                    <img
                      src={item.imageUrl}
                      alt={item.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain rounded-[16px] sm:rounded-[20px] select-none"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Dots Pagination */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2">
          {testimonialImages.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentIndex === dotIdx ? 'w-8 bg-[#16332E]' : 'w-2.5 bg-[#DCD4C6] hover:bg-[#16332E]'
              }`}
              aria-label={`Ir para depoimento ${dotIdx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
