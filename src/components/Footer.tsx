import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer 
      id="rodape-editorial"
      className="py-6 px-4 sm:px-6 bg-[#16332E] text-xs text-[#F7F3EA]/90 border-t border-[#102421]"
    >
      <div className="max-w-[1040px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="tracking-wide font-medium">
          &copy; {new Date().getFullYear()} Jornais de Química. Todos os direitos reservados.
        </p>
        <p className="text-[11px] text-[#DCD4C6] max-w-md text-center sm:text-right">
          Material didático complementar de síntese visual para estudantes e professores da Educação Básica, Ensino Médio e Pré-Vestibular.
        </p>
      </div>
    </footer>
  );
};

