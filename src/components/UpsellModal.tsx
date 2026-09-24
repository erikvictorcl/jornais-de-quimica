import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAcceptUpgrade?: () => void;
  onDeclineUpgrade?: () => void;
}

// Links oficiais de checkout
const CHECKOUT_UPGRADE_POPUP_URL = 'https://pay.wiapy.com/GXQGWxYgEuL';
const CHECKOUT_BASIC_URL = 'https://pay.wiapy.com/ZftwtJhBpFS1';

export const UpsellModal: React.FC<UpsellModalProps> = ({
  isOpen,
  onClose,
  onAcceptUpgrade,
  onDeclineUpgrade,
}) => {
  // Lock background scrolling when modal is active
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const notIncludedItems = [
    '600 Atividades de Química para Imprimir',
    '30 Experimentos de Química em Sala de Aula',
    '50 Desafios de Química em Sala de Aula',
    'Tabela Periódica Visual + Guia de Consulta Rápida',
  ];

  return (
    <div
      id="upsell-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="upsell-modal-heading"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-[2px] animate-in fade-in duration-200"
    >
      {/* Modal Container */}
      <div
        id="upsell-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="relative w-[92%] sm:w-full max-w-[490px] bg-white rounded-[24px] sm:rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-[#E6DFD3] overflow-hidden animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col text-[#2B2B2B]"
      >
        {/* 1. CABEÇALHO COM FAIXA DESTACADA */}
        <div className="bg-[#16332E] border-b border-[#0F2420] px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between gap-2 shrink-0">
          <h3
            id="upsell-modal-heading"
            className="font-bold text-[13px] sm:text-[15px] text-[#6EE7B7] flex items-center gap-1.5 leading-snug tracking-tight"
          >
            <span className="text-base sm:text-lg">🎁</span>
            <span className="font-extrabold text-[#A7F3D0]">ESPERE! Vai deixar esses bônus incríveis?</span>
          </h3>

          {/* Botão X para fechar (apenas fecha, sem redirecionar) */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar janela"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#A7F3D0] hover:text-white flex items-center justify-center transition-all border border-white/20 shadow-2xs cursor-pointer shrink-0 ml-1"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Modal Body Scrollable */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          {/* 2. BLOCO "O PACOTE BÁSICO NÃO INCLUI" */}
          <div className="mb-4">
            <p className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-[#16332E] mb-2 text-left">
              O PACOTE BÁSICO <span className="text-[#DC2626] font-black">NÃO INCLUI:</span>
            </p>

            <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-[16px] p-3 sm:p-3.5 space-y-2">
              {notIncludedItems.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5 text-left">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 border border-red-200 mt-0.5">
                    <X className="w-3.5 h-3.5 text-red-600 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-[#374151] leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. BLOCO DE UPGRADE */}
          <div className="bg-[#F0FDF4] border-2 border-[#86EFAC] rounded-[18px] p-3.5 sm:p-4 text-center shadow-xs">
            <p className="text-xs sm:text-sm font-semibold text-[#166534] leading-tight">
              Por apenas <span className="font-extrabold text-[#15803D] bg-white px-1.5 py-0.5 rounded border border-[#BBF7D0] shadow-2xs">+ R$ 17,90</span>, destrave o
            </p>

            <p className="font-editorial text-2xl sm:text-3xl font-black text-[#059669] tracking-tight uppercase my-1.5">
              PACOTE COMPLETO
            </p>

            <p className="text-xs sm:text-[13px] font-bold text-[#166534] leading-tight">
              com todos os Bônus Exclusivos
            </p>
          </div>

          {/* 4. BOTÃO PRINCIPAL (UPGRADE PARA PACOTE COMPLETO VIA POPUP) */}
          <a
            href={CHECKOUT_UPGRADE_POPUP_URL}
            onClick={() => onAcceptUpgrade?.()}
            className="w-full mt-4 py-3.5 sm:py-4 px-4 bg-[#059669] hover:bg-[#047857] active:scale-[0.99] text-white font-extrabold text-sm sm:text-base rounded-[16px] shadow-[0_6px_20px_rgba(5,150,105,0.32)] hover:shadow-[0_8px_24px_rgba(5,150,105,0.42)] transition-all cursor-pointer text-center uppercase tracking-wide flex flex-col items-center justify-center leading-tight gap-0.5"
          >
            <span>SIM! Quero o Pacote Completo por</span>
            <span className="text-base sm:text-lg font-black text-amber-200">+ R$ 17,90</span>
          </a>

          {/* 5. BOTÃO SECUNDÁRIO (CONTINUAR COM PACOTE BÁSICO) */}
          <a
            href={CHECKOUT_BASIC_URL}
            onClick={() => onDeclineUpgrade?.()}
            className="block w-full mt-2.5 py-2.5 sm:py-3 px-4 bg-[#FAF9F5] hover:bg-[#F3EFE6] text-[#555E6D] hover:text-[#1F2937] font-semibold text-xs sm:text-[13px] rounded-[14px] border border-[#E5E7EB] transition-colors cursor-pointer text-center"
          >
            Continuar apenas com o Pacote Básico
          </a>
        </div>
      </div>
    </div>
  );
};
