import React from 'react';
import { CreditCard, Send, Download, Printer } from 'lucide-react';

export const AccessSteps: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Compra rápida e 100% segura',
      icon: CreditCard,
    },
    {
      number: '2',
      title: 'Acesso imediato aos arquivos de Química',
      icon: Send,
    },
    {
      number: '3',
      title: 'Download dos PDFs em altíssima resolução',
      icon: Download,
    },
    {
      number: '4',
      title: 'Impressão facilitada em A4 e aplicação em aula ou revisão',
      icon: Printer,
    },
  ];

  return (
    <section 
      id="como-recebera"
      aria-label="Passo a passo de como receber e utilizar os jornais de Química"
      className="py-5 sm:py-7 px-4 sm:px-6 bg-transparent border-t border-[#E6DFD3]/60"
    >
      <div className="max-w-[800px] mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-4 sm:mb-6">
          <span className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#16332E] bg-[#FAF6EE] px-3.5 py-1 rounded-full border border-[#D5C9B3] inline-block mb-3">
            Simplicidade do Início ao Fim
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl md:text-[34px] font-bold text-[#16332E] tracking-tight leading-tight">
            Como você <span className="text-[#059669]">recebe e utiliza</span> o material
          </h2>
          <div className="w-14 sm:w-16 h-1 sm:h-1.5 bg-[#059669] rounded-full mx-auto mt-2.5 sm:mt-3" />
        </div>

        {/* 4 Steps Stacked Cards */}
        <div className="space-y-3.5 sm:space-y-4 max-w-[700px] mx-auto">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white rounded-[16px] sm:rounded-[20px] p-3.5 sm:p-4 px-5 sm:px-6 border border-[#E6DFD3] hover:border-[#059669]/40 shadow-xs transition-all flex items-center gap-4 sm:gap-5 text-left"
              >
                {/* Step Number Circle in Pine #16332E */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#16332E] text-white font-bold text-base sm:text-lg flex items-center justify-center shrink-0 shadow-sm border border-[#102421]">
                  {step.number}
                </div>

                {/* Step Content */}
                <div className="flex-1 flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-[#059669] shrink-0" />
                  <h3 className="text-sm sm:text-base font-bold text-[#2B2B2B]">
                    {step.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};



