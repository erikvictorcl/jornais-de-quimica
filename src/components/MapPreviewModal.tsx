import React from 'react';
import { X, BookOpen, Quote, Download, CheckCircle2 } from 'lucide-react';
import { NewspaperItem } from '../types';

interface MapPreviewModalProps {
  map: NewspaperItem | null;
  onClose: () => void;
  onSelectPlan?: () => void;
}

export const MapPreviewModal: React.FC<MapPreviewModalProps> = ({ map, onClose, onSelectPlan }) => {
  if (!map) return null;

  const getBadgeStyle = (discipline: string) => {
    switch (discipline) {
      case 'Química Orgânica':
      case 'Físico-Química':
      case 'Química Inorgânica':
      default:
        return 'bg-[#FAF6EE] text-[#16332E] border-[#D5C9B3]';
    }
  };

  return (
    <div 
      id="map-preview-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#16332E]/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="map-preview-modal-dialog"
        className="bg-[#F7F3EA] rounded-[24px] max-w-2xl w-full border border-[#E6DFD3] shadow-2xl overflow-hidden text-left flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-white border-b border-[#E6DFD3] px-5 sm:px-6 py-4 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${getBadgeStyle(map.discipline)}`}>
                {map.discipline} • {map.era}
              </span>
              {map.sheetNumber && (
                <span className="text-[10px] font-mono text-[#5C5C5C]">
                  {map.sheetNumber}
                </span>
              )}
            </div>
            <h3 className="font-editorial text-lg sm:text-2xl font-bold text-[#16332E] mt-1">
              {map.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F7F3EA] text-[#5C5C5C] hover:text-[#16332E] transition-colors cursor-pointer"
            aria-label="Fechar pré-visualização"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Newspaper Page Display */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          
          {/* Main Newspaper Image Mockup */}
          <div className="bg-white rounded-xl border border-[#E6DFD3] p-3 sm:p-4 shadow-sm">
            <div className="rounded-lg overflow-hidden border border-[#E6DFD3] bg-[#FAF7F0] flex items-center justify-center">
              <img 
                src={map.previewUrl} 
                alt={`Edição de Jornal: ${map.title}`}
                referrerPolicy="no-referrer"
                className="w-full max-h-[380px] sm:max-h-[420px] object-contain shadow-xs"
              />
            </div>

            {/* Headline and Lead */}
            <div className="mt-4 pt-3 border-t border-[#E6DFD3]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#059669] block">
                Manchete da Edição
              </span>
              <h4 className="font-editorial text-base sm:text-lg font-bold text-[#16332E] mt-0.5 leading-snug">
                "{map.headline}"
              </h4>
              <p className="text-xs sm:text-sm text-[#5C5C5C] mt-1 leading-relaxed">
                {map.lead}
              </p>
            </div>

            {/* Quote block */}
            {map.quote && (
              <div className="mt-3.5 p-3 bg-[#FAF6EE] rounded-lg border-l-4 border-[#059669] flex items-start gap-2.5">
                <Quote className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                <p className="font-editorial italic text-xs sm:text-[13px] text-[#2B2B2B] leading-relaxed">
                  "{map.quote}"
                </p>
              </div>
            )}

            {/* Key Sections Tags */}
            <div className="mt-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#5C5C5C] block mb-1.5">
                Seções Didáticas Inclusas nesta Edição:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {map.keySections.map((section, idx) => (
                  <span 
                    key={idx} 
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FAF7F0] text-[#2B2B2B] font-semibold text-xs rounded-md border border-[#E6DFD3]"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#059669]" />
                    {section}
                  </span>
                ))}
              </div>
            </div>

            {/* Pedagogical Description */}
            <p className="text-xs text-[#5C5C5C] border-t border-[#E6DFD3] pt-3 mt-4 leading-relaxed">
              <strong className="text-[#16332E]">Orientação para aula e estudo:</strong> {map.description}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-white border-t border-[#E6DFD3] px-5 sm:px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-xs text-[#5C5C5C] text-center sm:text-left">
            Arquivo PDF com qualidade gráfica para impressão ilimitada em sulfite A4.
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-[#5C5C5C] hover:text-[#16332E] cursor-pointer"
            >
              Fechar
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onSelectPlan?.();
              }}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold rounded-xl shadow-sm transition-all cursor-pointer whitespace-nowrap uppercase tracking-wider"
            >
              Quero Esta Coleção
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


