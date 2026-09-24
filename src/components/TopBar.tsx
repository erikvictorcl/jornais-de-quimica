import React from 'react';

export const TopBar: React.FC = () => {
  return (
    <aside 
      id="top-notification-bar"
      aria-label="Aviso de oferta por tempo limitado"
      className="w-full bg-[#16332E] text-[#F7F3EA] py-2.5 sm:py-3 px-4 text-center border-b border-[#102421] shadow-xs select-none"
    >
      <p className="text-[11px] sm:text-xs md:text-sm font-black tracking-wider uppercase flex items-center justify-center gap-2 leading-tight text-[#F7F3EA]">
        <span className="text-sm sm:text-base leading-none">🔥</span>
        <span className="tracking-wide">OFERTA DISPONÍVEL POR TEMPO LIMITADO</span>
        <span className="text-sm sm:text-base leading-none">🔥</span>
      </p>
    </aside>
  );
};



