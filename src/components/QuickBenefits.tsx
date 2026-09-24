import React from 'react';
import { Check } from 'lucide-react';

export const QuickBenefits: React.FC = () => {
  const benefits = [
    {
      id: 'benefit-1',
      text: 'Mais tempo livre com esquemas atrativos prontos para imprimir',
    },
    {
      id: 'benefit-2',
      text: 'Menos bloqueio e mais interesse dos alunos por fórmulas e reações',
    },
    {
      id: 'benefit-3',
      text: 'Mais facilidade para a turma visualizar modelos atômicos e fenômenos',
    },
    {
      id: 'benefit-4',
      text: 'Menos sobrecarga, sem precisar criar materiais e resumos do zero',
    },
  ];

  return (
    <section 
      id="rotina-quimica" 
      aria-label="Vantagens na rotina de ensino e aprendizado de Química"
      className="py-5 sm:py-7 px-4 sm:px-6 bg-transparent"
    >
      <div className="max-w-[960px] mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6">
          <span className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#16332E] bg-[#FAF6EE] px-3.5 py-1 rounded-full border border-[#D5C9B3] inline-block mb-3">
            Facilite Sua Rotina
          </span>
          <h2 
            id="heading-rotina-quimica"
            className="font-editorial text-2xl sm:text-3xl md:text-[36px] font-bold text-[#16332E] tracking-tight leading-tight"
          >
            Você não precisa mais lutar contra o bloqueio dos alunos em <span className="text-[#059669]">Química</span>
          </h2>
          <div className="w-14 h-1 bg-[#059669] mx-auto mt-4 rounded-full" />
        </div>

        {/* 2x2 Grid of Cards with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5">
          {benefits.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="bg-white rounded-[16px] sm:rounded-[20px] p-4 sm:p-5 border border-[#E6DFD3] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-[#059669]/40 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-200 flex items-center gap-3.5 sm:gap-4.5"
            >
              {/* Supporting Accent Badge with Checkmark */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#FAF6EE] border border-[#D5C9B3] text-[#059669] flex items-center justify-center shrink-0 shadow-2xs">
                <Check className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.8]" />
              </div>

              {/* Concise Benefit Text */}
              <p className="text-sm sm:text-[15px] md:text-base font-semibold text-[#2B2B2B] leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Big Rounded Banner in Deep Forest Pine #16332E */}
        <div 
          id="benefits-highlight-box"
          className="mt-5 sm:mt-6 bg-[#16332E] text-[#F7F3EA] rounded-[18px] sm:rounded-[22px] p-5 sm:p-6 text-center shadow-[0_12px_32px_rgba(22,51,46,0.22)] border border-[#102421]"
        >
          <p className="font-editorial text-base sm:text-lg md:text-xl font-bold leading-snug max-w-xl mx-auto">
            Descomplica a <span className="underline decoration-[#059669] text-white italic font-black">Química</span> e devolve o seu tempo. ✅
          </p>
        </div>

      </div>
    </section>
  );
};


