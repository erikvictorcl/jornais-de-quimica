import React, { useState } from 'react';
import { Check, X, Clock, Download, Infinity as InfinityIcon, Sparkles } from 'lucide-react';
import { UpsellModal } from './UpsellModal';

interface PricingOffersProps {
  onSelectPlan?: (planName: string) => void;
}

export const PricingOffers: React.FC<PricingOffersProps> = ({ onSelectPlan }) => {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  const handleAcceptUpgrade = () => {
    setIsUpsellOpen(false);
    onSelectPlan?.('Coleção Completa');
  };

  const handleDeclineUpgrade = () => {
    setIsUpsellOpen(false);
    onSelectPlan?.('Pacote Essencial');
  };
  return (
    <section 
      id="ofertas"
      aria-label="Tabela de Ofertas da Coleção de Jornais de Química"
      className="py-5 sm:py-7 px-4 sm:px-6 bg-transparent border-t border-[#E6DFD3]/60"
    >
      <div className="max-w-[980px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-4 sm:mb-6">
          <span className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#16332E] bg-[#FAF6EE] px-3.5 py-1 rounded-full border border-[#D5C9B3] inline-block mb-3">
            Planos & Condições
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl md:text-[38px] font-bold text-[#16332E] tracking-tight leading-tight">
            Escolha a <span className="text-[#059669]">melhor opção</span> para seus estudos e aulas
          </h2>
          <div className="w-14 sm:w-16 h-1 sm:h-1.5 bg-[#059669] rounded-full mx-auto mt-3" />
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8 items-stretch max-w-[880px] mx-auto">
          
          {/* 1. PACOTE ESSENCIAL (R$ 10,00) */}
          <div 
            id="plano-essencial"
            className="bg-white rounded-[24px] border border-[#E6DFD3] p-6 sm:p-7 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:border-[#16332E]/40 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="text-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#6E6E6E] block mb-1">
                  Volume Inicial
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#16332E] tracking-tight mb-2">
                  Pacote Essencial
                </h3>

                {/* Strikethrough Price */}
                <p className="text-sm font-bold text-[#94A3B8] line-through">
                  R$ 37,00
                </p>

                {/* Main Price */}
                <p className="text-4xl sm:text-5xl font-black text-[#16332E] tracking-tight mt-0.5">
                  R$ 10<span className="text-2xl font-bold">,00</span>
                </p>

                {/* Billing Frequency */}
                <p className="text-xs sm:text-sm font-semibold text-[#5C5C5C] mt-0.5">
                  pagamento único • sem mensalidades
                </p>

                {/* Economize Badge */}
                <div className="flex justify-center mt-3 mb-6">
                  <span className="inline-block bg-[#FAF6EE] text-[#16332E] text-[11px] sm:text-xs font-black tracking-wider uppercase px-3.5 py-1 rounded-full border border-[#D5C9B3] shadow-2xs">
                    ECONOMIZE R$ 27,00
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#E6DFD3] w-full mb-6" />

              {/* Included Features List */}
              <div className="space-y-3.5">
                <div className="flex items-center gap-3 text-left">
                  <Check className="w-5 h-5 text-[#059669] shrink-0 stroke-[2.8]" />
                  <span className="text-sm sm:text-[15px] font-bold text-[#2B2B2B]">
                    Jornais de Química Geral e Inorgânica
                  </span>
                </div>

                <div className="flex items-center gap-3 text-left">
                  <Check className="w-5 h-5 text-[#059669] shrink-0 stroke-[2.8]" />
                  <span className="text-sm sm:text-[15px] font-bold text-[#2B2B2B]">
                    Arquivos em PDF de alta qualidade prontos para imprimir
                  </span>
                </div>

                <div className="flex items-center gap-3 text-left">
                  <Check className="w-5 h-5 text-[#059669] shrink-0 stroke-[2.8]" />
                  <span className="text-sm sm:text-[15px] font-bold text-[#2B2B2B]">
                    Diagramação no padrão A4 (fácil distribuição aos alunos)
                  </span>
                </div>

                <div className="flex items-center gap-3 text-left">
                  <InfinityIcon className="w-5 h-5 text-[#059669] shrink-0 stroke-[2.8]" />
                  <span className="text-sm sm:text-[15px] font-bold text-[#2B2B2B]">
                    Acesso vitalício aos arquivos inclusos
                  </span>
                </div>
              </div>

              {/* Not Included Header & Items */}
              <div className="mt-7 pt-5 border-t border-[#E6DFD3]">
                <p className="text-[11px] font-extrabold text-[#94A3B8] uppercase tracking-wider mb-3">
                  NÃO INCLUSOS NESTE PACOTE:
                </p>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 text-left text-xs sm:text-sm text-[#94A3B8] line-through">
                    <X className="w-4 h-4 text-[#94A3B8] shrink-0 stroke-[2.2]" />
                    <span>Edições de Físico-Química e Química Orgânica</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-left text-xs sm:text-sm text-[#94A3B8] line-through">
                    <X className="w-4 h-4 text-[#94A3B8] shrink-0 stroke-[2.2]" />
                    <span>Todos os 4 Bônus Exclusivos de apoio</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-left text-xs sm:text-sm text-[#94A3B8] line-through">
                    <X className="w-4 h-4 text-[#94A3B8] shrink-0 stroke-[2.2]" />
                    <span>Atualizações futuras de novas edições</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 pt-4">
              <div className="bg-[#FAF6EE] border border-[#E6DFD3] rounded-[12px] p-3 text-center flex items-center justify-center gap-2 mb-4">
                <Download className="w-4 h-4 text-[#16332E] shrink-0" />
                <p className="text-xs sm:text-[13px] font-bold text-[#16332E] italic leading-tight">
                  Receba o link para download direto no seu e-mail.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsUpsellOpen(true)}
                className="w-full py-3.5 sm:py-4 px-6 bg-[#059669] hover:bg-[#047857] active:scale-[0.99] text-white font-bold text-base sm:text-lg rounded-[14px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all cursor-pointer text-center uppercase tracking-wide"
              >
                QUERO O ESSENCIAL
              </button>
            </div>
          </div>

          {/* 2. COLEÇÃO COMPLETA (R$ 19,90 - Highlighted Card) */}
          <div 
            id="plano-completo"
            className="bg-white rounded-[24px] border-2 border-[#059669] p-6 sm:p-7 md:p-8 shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all flex flex-col justify-between relative"
          >
            {/* Top Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#059669] text-white border border-[#047857] text-[11px] sm:text-xs font-bold tracking-wider uppercase px-4 py-1 rounded-full shadow-sm flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>MAIS ESCOLHIDO POR PROFESSORES</span>
            </div>

            <div>
              {/* Header */}
              <div className="text-center pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#059669] block mb-1">
                  Acervo Total + Bônus
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#16332E] tracking-tight mb-2">
                  Coleção Completa
                </h3>

                {/* Strikethrough Price */}
                <p className="text-sm font-bold text-[#94A3B8] line-through">
                  R$ 97,00
                </p>

                {/* Main Price */}
                <p className="text-4xl sm:text-5xl font-black text-[#059669] tracking-tight mt-0.5">
                  R$ 19<span className="text-2xl font-bold">,90</span>
                </p>

                {/* Billing Frequency */}
                <p className="text-xs sm:text-sm font-semibold text-[#5C5C5C] mt-0.5">
                  pagamento único • sem mensalidades
                </p>

                {/* Economize Badge */}
                <div className="flex justify-center mt-3 mb-6">
                  <span className="inline-block bg-[#FAF6EE] text-[#059669] text-[11px] sm:text-xs font-black tracking-wider uppercase px-3.5 py-1 rounded-full border border-[#D5C9B3] shadow-2xs">
                    ECONOMIZE R$ 77,10
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#E6DFD3] w-full mb-6" />

              {/* Included Features List */}
              <div className="space-y-3.5">
                <div className="flex items-center gap-3 text-left">
                  <Check className="w-5 h-5 text-[#059669] shrink-0 stroke-[3]" />
                  <span className="text-sm sm:text-[15px] font-extrabold text-[#2B2B2B]">
                    Coleção Completa: Geral, Inorgânica, Físico-Química e Orgânica
                  </span>
                </div>

                <div className="flex items-center gap-3 text-left">
                  <Check className="w-5 h-5 text-[#059669] shrink-0 stroke-[3]" />
                  <span className="text-sm sm:text-[15px] font-extrabold text-[#2B2B2B]">
                    Todos os temas essenciais do Ensino Médio e Pré-Vestibular
                  </span>
                </div>

                <div className="flex items-center gap-3 text-left">
                  <Check className="w-5 h-5 text-[#059669] shrink-0 stroke-[3]" />
                  <span className="text-sm sm:text-[15px] font-extrabold text-[#2B2B2B]">
                    Arquivos em PDF em alta resolução prontos para imprimir
                  </span>
                </div>

                <div className="flex items-center gap-3 text-left">
                  <InfinityIcon className="w-5 h-5 text-[#059669] shrink-0 stroke-[2.8]" />
                  <span className="text-sm sm:text-[15px] font-extrabold text-[#2B2B2B]">
                    Acesso vitalício e atualizações de novas edições
                  </span>
                </div>
              </div>

              {/* Exclusive Bonuses Container Box */}
              <div className="mt-6 p-3.5 sm:p-4 bg-[#FAF7F0] border border-[#E6DFD3] rounded-[18px]">
                <p className="text-xs sm:text-[13px] font-black text-[#16332E] uppercase tracking-wide flex items-center gap-1.5 mb-3">
                  <span className="text-sm">🎁</span>
                  <span>TODOS OS 4 BÔNUS INCLUSOS (GRÁTIS):</span>
                </p>

                <div className="space-y-2">
                  <div className="bg-white rounded-[12px] p-2.5 sm:p-3 border border-[#E6DFD3] shadow-2xs flex items-center gap-2.5 text-left">
                    <span className="text-base sm:text-lg leading-none" role="img" aria-label="bonus1">📊</span>
                    <span className="text-xs sm:text-[13px] font-bold text-[#2B2B2B]">
                      Bônus 1: 600 atividades de Química
                    </span>
                  </div>

                  <div className="bg-white rounded-[12px] p-2.5 sm:p-3 border border-[#E6DFD3] shadow-2xs flex items-center gap-2.5 text-left">
                    <span className="text-base sm:text-lg leading-none" role="img" aria-label="bonus2">📚</span>
                    <span className="text-xs sm:text-[13px] font-bold text-[#2B2B2B]">
                      Bônus 2: 50 Experimentos de Química para Sala de Aula
                    </span>
                  </div>

                  <div className="bg-white rounded-[12px] p-2.5 sm:p-3 border border-[#E6DFD3] shadow-2xs flex items-center gap-2.5 text-left">
                    <span className="text-base sm:text-lg leading-none" role="img" aria-label="bonus3">🔬</span>
                    <span className="text-xs sm:text-[13px] font-bold text-[#2B2B2B]">
                      Bônus 3: 50 Desafios de Química para Sala de Aula
                    </span>
                  </div>

                  <div className="bg-white rounded-[12px] p-2.5 sm:p-3 border border-[#E6DFD3] shadow-2xs flex items-center gap-2.5 text-left">
                    <span className="text-base sm:text-lg leading-none" role="img" aria-label="bonus4">🏅</span>
                    <span className="text-xs sm:text-[13px] font-bold text-[#2B2B2B]">
                      Bônus 4: Tabela Periódica Visual + Guia de Consulta Rápida
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 pt-4">
              <div className="bg-[#F0FDF4] border border-[#86EFAC]/80 rounded-[12px] p-3 text-center flex items-center justify-center gap-2 mb-4">
                <Download className="w-4 h-4 text-[#059669] shrink-0" />
                <p className="text-xs sm:text-[13px] font-bold text-[#059669] italic leading-tight">
                  Receba acesso imediato por e-mail e WhatsApp logo após a confirmação.
                </p>
              </div>

              <a
                href="https://pay.wiapy.com/HOQYUhHeMhEx"
                onClick={() => onSelectPlan?.('Coleção Completa')}
                className="w-full py-3.5 sm:py-4 px-6 bg-[#059669] hover:bg-[#047857] active:scale-[0.99] text-white font-bold text-base sm:text-lg rounded-[14px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all cursor-pointer text-center uppercase tracking-wide block"
              >
                QUERO A COLEÇÃO COMPLETA
              </a>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] font-bold tracking-wider text-[#5C5C5C] uppercase">
                <Clock className="w-3.5 h-3.5 text-[#059669]" />
                <span>OFERTA ESPECIAL COM DESCONTO POR TEMPO LIMITADO</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Pop-up de Upsell (Acervo Completo + Bônus) */}
      <UpsellModal
        isOpen={isUpsellOpen}
        onClose={() => setIsUpsellOpen(false)}
        onAcceptUpgrade={handleAcceptUpgrade}
        onDeclineUpgrade={handleDeclineUpgrade}
      />
    </section>
  );
};



