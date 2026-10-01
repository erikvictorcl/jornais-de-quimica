import React, { useState, useEffect } from 'react';

// Lista de compradores de demonstração
const BUYER_NAMES: string[] = [
  'Mariana Almeida',
  'Carlos Henrique',
  'Fernanda Souza',
  'Juliana Martins',
  'Rafael Oliveira',
  'Amanda Costa',
  'Lucas Pereira',
  'Patrícia Gomes',
  'Bruno Ferreira',
  'Camila Rodrigues',
  'Eduarda Lima',
  'Thiago Alves',
  'Vanessa Ribeiro',
  'Renata Carvalho',
  'Felipe Santos',
  'Bianca Fernandes',
  'Roberto Lima',
  'Natália Martins',
  'Aline Castro',
  'Gustavo Rocha',
  'Larissa Mendes',
  'Ricardo Nogueira',
  'Priscila Moraes',
  'Daniela Barros',
  'Márcio Azevedo',
  'Beatriz Monteiro',
  'André Luiz',
  'Tatiane Freitas',
  'Sérgio Andrade',
  'Letícia Ramos',
  'Diego Fernandes',
  'Paula Teixeira',
  'Fábio Gomes',
  'Cíntia Lopes',
  'Vinícius Batista',
  'Elaine Cardoso',
  'Murilo Costa',
  'Simone Almeida',
  'Caio Henrique',
  'Jéssica Ribeiro',
  'Marcela Fernandes',
  'Rodrigo Martins',
  'Débora Oliveira',
  'Leonardo Souza',
  'Carolina Mendes',
  'Renato Moreira',
  'Isabela Rocha',
  'Marcelo Santos',
  'Ana Paula Ribeiro',
  'João Pedro Costa',
  'Gabriela Lima',
  'Cristiane Alves',
  'Alexandre Ramos',
  'Mônica Ferreira',
  'Pedro Henrique',
  'Kelly Cristina',
  'Luana Carvalho',
  'Wesley Gomes',
  'Adriana Martins',
  'Leandro Batista',
];

interface PurchaseData {
  name: string;
  packageName: string;
}

// Sorteia próximo comprador garantindo não repetir o mesmo em sequência
const getNextBuyer = (lastName: string | null): PurchaseData => {
  const availableNames = lastName 
    ? BUYER_NAMES.filter((n) => n !== lastName) 
    : BUYER_NAMES;
  const selectedName = availableNames[Math.floor(Math.random() * availableNames.length)];

  // 90% Pacote Bônus e 10% Pacote Básico
  const selectedPackage = Math.random() < 0.9 ? '“Pacote Bônus”' : '“Pacote Básico”';

  return {
    name: selectedName,
    packageName: selectedPackage,
  };
};

// Gera um novo intervalo aleatório entre 15 e 20 segundos
const getRandomInterval = () => {
  return Math.floor(Math.random() * (20000 - 15000 + 1)) + 15000;
};

export const PurchaseNotification: React.FC = () => {
  // Inicializa já com um comprador para garantir animação CSS suave desde a primeira aparição
  const [data, setData] = useState<PurchaseData>(() => getNextBuyer(null));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let hideTimeoutId: NodeJS.Timeout;
    let fadeOutTimeoutId: NodeJS.Timeout;
    let currentLastName: string = data.name;

    const cycle = () => {
      // Cada nova notificação sorteia um intervalo aleatório entre 15 e 20 segundos
      const waitTime = getRandomInterval();

      timeoutId = setTimeout(() => {
        const nextBuyer = getNextBuyer(currentLastName);
        currentLastName = nextBuyer.name;
        setData(nextBuyer);
        setIsVisible(true);

        // Permanece visível por ~5 segundos (entre 4 e 6 segundos)
        hideTimeoutId = setTimeout(() => {
          setIsVisible(false);

          // Aguarda fade-out suave (700ms) antes de iniciar novo ciclo com novo tempo aleatório
          fadeOutTimeoutId = setTimeout(() => {
            cycle();
          }, 700);
        }, 5000);
      }, waitTime);
    };

    // Inicia o primeiro ciclo aleatório
    cycle();

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(hideTimeoutId);
      clearTimeout(fadeOutTimeoutId);
    };
  }, []);

  return (
    <aside
      aria-live="polite"
      aria-atomic="true"
      className={`fixed top-3 right-3 sm:top-5 sm:right-5 z-40 max-w-[220px] sm:max-w-[265px] w-auto pointer-events-none select-none transition-all duration-700 ease-in-out ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
      }`}
    >
      <div className="bg-[#F0FDF4]/80 backdrop-blur-xs border border-[#86EFAC]/50 rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-2.5 shadow-[0_4px_16px_rgba(22,51,46,0.07)] text-[#16332E]">
        <div className="flex flex-col text-left leading-tight">
          {/* Linha 1: Adquiriu: Mariana Almeida */}
          <span className="text-[12px] sm:text-[13px] text-[#2B3B34] truncate">
            Adquiriu: <strong className="font-bold text-[#16332E]">{data.name}</strong>
          </span>

          {/* Linha 2: “Pacote Bônus” ou “Pacote Básico” */}
          <span className="text-[11px] sm:text-xs font-semibold text-[#047857] mt-0.5 truncate">
            {data.packageName}
          </span>
        </div>
      </div>
    </aside>
  );
};
