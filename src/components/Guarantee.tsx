import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section 
      id="garantia"
      aria-label="Garantia incondicional de 7 dias"
      className="py-5 sm:py-7 px-4 sm:px-6 bg-transparent border-t border-[#E6DFD3]/60 text-center"
    >
      <div className="max-w-[700px] mx-auto">
        
        {/* Shield Icon in Warm Circle */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FAF6EE] border-2 border-[#D5C9B3] flex items-center justify-center mx-auto mb-3.5 shadow-xs">
          <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-[#059669] stroke-[2.2]" />
        </div>

        {/* Heading */}
        <h2 className="font-editorial text-2xl sm:text-3xl md:text-[34px] font-bold text-[#16332E] tracking-tight leading-snug">
          Você tem <span className="underline decoration-[#059669] text-[#059669] font-black">7 dias</span> para testar o acervo na sua rotina de estudos e aulas
        </h2>

        {/* Bottom Guarantee Badge */}
        <div className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 bg-white rounded-full border border-[#E6DFD3] text-xs sm:text-sm font-semibold text-[#2B2B2B] shadow-xs">
          <Award className="w-4 h-4 text-[#059669]" />
          <span>Garantia incondicional de 7 dias • Risco zero para você</span>
        </div>

      </div>
    </section>
  );
};

