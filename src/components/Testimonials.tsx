import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, CheckCheck, Plus, Camera, Mic, Smile } from 'lucide-react';

import jornalTabelaPeriodica from '../assets/images/jornal_tabela_periodica_1790134841891.jpg';
import jornalQuimicaOrganica from '../assets/images/jornal_quimica_organica_1790134871751.jpg';
import jornalModelosAtomicos from '../assets/images/jornal_modelos_atomicos_1790134862140.jpg';
import jornalReacoesTermoquimica from '../assets/images/jornal_reacoes_termoquimica_1790134886476.jpg';

interface TestimonialData {
  id: string;
  name: string;
  avatarBg: string;
  avatarText: string;
  tag: string;
  time: string;
  chatImage: string;
  chatImageAlt: string;
  message1: string;
  reaction: string;
  message2: string;
  replyTime: string;
  replyText: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 'dep-1',
    name: 'Prof. Marcos Vinicius',
    avatarBg: 'bg-[#0F5257]',
    avatarText: 'MV',
    tag: 'Prof. de Química - Ensino Médio',
    time: '11:40',
    chatImage: jornalTabelaPeriodica,
    chatImageAlt: 'Edição Tabela Periódica impressa pelos alunos em sala',
    message1: 'Boa tarde! Levei o jornal da Tabela Periódica para a aula de Química hoje no 1º ano do Ensino Médio. Os alunos dividiram a leitura em duplas como se fosse um jornal científico. A compreensão das propriedades periódicas foi impressionante!',
    reaction: '👏',
    message2: 'Pela primeira vez não tive que brigar com o celular. O visual clássico de jornal e os esquemas visuais prenderam a atenção de todos. Material de altíssimo nível!',
    replyTime: '11:43',
    replyText: 'Que relato fantástico, professor Marcos! É exatamente esse o nosso propósito: transformar a aula de Química em uma experiência visual e envolvente. Muito obrigado!',
  },
  {
    id: 'dep-2',
    name: 'Profª Juliana Diniz',
    avatarBg: 'bg-[#E8712C]',
    avatarText: 'JD',
    tag: 'Profª de Química Orgânica e Geral',
    time: '17:15',
    chatImage: jornalQuimicaOrganica,
    chatImageAlt: 'Caderno de Química Orgânica impresso para a turma',
    message1: 'Passando pra parabenizar pelo trabalho! Imprimi direto na impressora da escola em folha sulfite comum. A diagramação é perfeita, super nítida.',
    reaction: '❤️',
    message2: 'Trabalhei os conceitos de funções oxigenadas e isomeria usando a manchete e os infográficos. Facilitou demais a compreensão da turma em relação às fórmulas estruturais.',
    replyTime: '17:18',
    replyText: 'Sensacional, professora Juliana! A facilidade de imprimir em A4 e aplicar na hora é um dos maiores diferenciais. Sucesso nas suas aulas!',
  },
  {
    id: 'dep-3',
    name: 'Prof. Fernando Prado',
    avatarBg: 'bg-[#1B6FA8]',
    avatarText: 'FP',
    tag: 'Professor de Química em 3 escolas',
    time: '19:22',
    chatImage: jornalModelosAtomicos,
    chatImageAlt: 'Planejamento das aulas com o jornal de Modelos Atômicos',
    message1: 'Colegas, esse acervo me salvou no domingo à noite! Dou aula em três colégios e meu tempo de planejamento estava no limite.',
    reaction: '🔥',
    message2: 'Consegui estruturar 4 aulas completas só utilizando a linha do tempo atômica e os exercícios de Bohr e Dalton. Valeu cada centavo investido!',
    replyTime: '19:25',
    replyText: 'Professor Fernando, ficamos muito felizes em poupar o seu fim de semana! O tempo do professor é precioso demais. Conte conosco!',
  },
  {
    id: 'dep-4',
    name: 'Profª Renata Albuquerque',
    avatarBg: 'bg-[#0F5257]',
    avatarText: 'RA',
    tag: 'Profª de Química - Pré-Vestibular',
    time: '14:05',
    chatImage: jornalReacoesTermoquimica,
    chatImageAlt: 'Jornal de Termoquímica e Equilíbrio Químico',
    message1: 'Olá! Usei a edição de Termoquímica e Lei de Hess para uma revisão intensiva de Físico-Química voltada para o ENEM.',
    reaction: '⭐',
    message2: 'Os estudantes adoraram os gráficos explicados e a conexão das reações com o cotidiano. Conteúdos de cálculo e gráficos que ficaram muito mais fáceis de assimilar.',
    replyTime: '14:08',
    replyText: 'Incrível, professora Renata! Para a prova de Ciências da Natureza do ENEM esse domínio gráfico é ouro puro. Parabéns pela iniciativa!',
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
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

  return (
    <section 
      id="depoimentos"
      aria-label="Depoimentos reais de professores e estudantes de Química"
      className="py-5 sm:py-7 px-4 sm:px-6 bg-transparent overflow-hidden border-b border-[#E6DFD3]/60"
    >
      <div className="max-w-[1140px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-4 sm:mb-6">
          <span className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#16332E] bg-[#FAF6EE] px-3.5 py-1 rounded-full border border-[#D5C9B3] inline-block mb-3">
            Experiência em Sala de Aula
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
        <div className="relative w-full max-w-[920px] mx-auto h-[530px] sm:h-[560px] flex items-center justify-center">
          
          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Depoimento anterior"
            className="absolute left-1 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#16332E] hover:bg-[#102421] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.18)] hover:scale-105 active:scale-95 transition-all cursor-pointer border border-[#102421]"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Próximo depoimento"
            className="absolute right-1 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#16332E] hover:bg-[#102421] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.18)] hover:scale-105 active:scale-95 transition-all cursor-pointer border border-[#102421]"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </button>

          {/* Cards Stack */}
          <div className="relative w-full h-full flex items-center justify-center">
            {testimonials.map((item, index) => {
              const total = testimonials.length;
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
              let opacityClass = 'opacity-40 hover:opacity-75 cursor-pointer';

              if (isCenter) {
                transformClass = 'translate-x-0 scale-100';
                zIndexClass = 'z-30';
                opacityClass = 'opacity-100 shadow-[0_18px_45px_rgba(15,82,87,0.18)]';
              } else if (isLeft) {
                transformClass = '-translate-x-[56%] sm:-translate-x-[68%] md:-translate-x-[75%] scale-[0.84] sm:scale-[0.86]';
                zIndexClass = 'z-10';
              } else if (isRight) {
                transformClass = 'translate-x-[56%] sm:translate-x-[68%] md:translate-x-[75%] scale-[0.84] sm:scale-[0.86]';
                zIndexClass = 'z-10';
              }

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (isLeft) handlePrev();
                    if (isRight) handleNext();
                  }}
                  className={`absolute top-1/2 -translate-y-1/2 transition-all duration-400 ease-out origin-center select-none w-[265px] sm:w-[305px] md:w-[325px] ${transformClass} ${zIndexClass} ${opacityClass}`}
                >
                  {/* Smartphone Frame with WhatsApp Chat */}
                  <div className="bg-[#EFEAE2] rounded-[22px] sm:rounded-[26px] overflow-hidden border border-[#D5CDD9] shadow-lg flex flex-col h-[475px] sm:h-[505px]">
                    
                    {/* WhatsApp Top Header Bar */}
                    <div className="bg-[#F0F2F5] px-3 py-2 border-b border-[#E2E4E8] flex items-center justify-between shrink-0">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="flex items-center text-[#0F5257] font-semibold text-xs -ml-1">
                          <ChevronLeft className="w-3.5 h-3.5 stroke-[3]" />
                          <span className="text-[11px]">18</span>
                        </div>
                        <div className={`w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full ${item.avatarBg} text-white font-bold text-[11px] flex items-center justify-center shadow-2xs`}>
                          {item.avatarText}
                        </div>
                        <div className="leading-tight text-left">
                          <p className="text-[11.5px] sm:text-xs font-bold text-[#111B21] truncate max-w-[130px] sm:max-w-[155px]">
                            {item.name}
                          </p>
                          <p className="text-[9px] text-[#667781] font-normal truncate max-w-[130px] sm:max-w-[155px]">
                            {item.tag}
                          </p>
                        </div>
                      </div>

                      <div className="text-[9px] font-semibold text-[#1B6FA8] bg-[#EAF3FA] border border-[#C5DEF0] px-1.5 py-0.5 rounded-full">
                        WhatsApp
                      </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 p-2.5 sm:p-3 overflow-y-auto space-y-2.5 font-sans flex flex-col justify-start text-left bg-[#EFEAE2]">
                      
                      {/* Received Message 1 */}
                      <div className="relative self-start max-w-[94%] bg-white rounded-[13px] rounded-tl-xs p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.12)]">
                        <div className="rounded-[8px] overflow-hidden mb-1.5 aspect-[16/10] bg-zinc-200">
                          <img
                            src={item.chatImage}
                            alt={item.chatImageAlt}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <p className="px-0.5 text-[10.5px] sm:text-[11.5px] text-[#111B21] leading-snug">
                          {item.message1}
                        </p>

                        <div className="flex items-center justify-end px-0.5 mt-0.5 text-[9px] text-[#667781]">
                          <span>{item.time}</span>
                        </div>

                        {/* Reaction Emoji Badge */}
                        <div className="absolute -bottom-1.5 left-2 bg-white rounded-full px-1.5 py-0.5 shadow-xs border border-[#E9EDEF] text-[10px] sm:text-xs flex items-center">
                          <span>{item.reaction}</span>
                        </div>
                      </div>

                      {/* Received Message 2 */}
                      <div className="self-start max-w-[94%] bg-white rounded-[13px] rounded-tl-xs p-2 shadow-[0_1px_2px_rgba(0,0,0,0.12)] mt-0.5">
                        <p className="text-[10.5px] sm:text-[11.5px] text-[#111B21] leading-snug">
                          {item.message2}
                        </p>
                        <div className="flex items-center justify-end mt-0.5 text-[9px] text-[#667781]">
                          <span>{item.time}</span>
                        </div>
                      </div>

                      {/* Sent Reply from Support */}
                      <div className="self-end max-w-[90%] bg-[#D9FDD3] rounded-[13px] rounded-tr-xs p-2 shadow-[0_1px_2px_rgba(0,0,0,0.12)] mt-1">
                        <p className="text-[10.5px] sm:text-[11.5px] text-[#111B21] leading-snug">
                          {item.replyText}
                        </p>
                        <div className="flex items-center justify-end gap-1 mt-0.5 text-[9px] text-[#667781]">
                          <span>{item.replyTime}</span>
                          <CheckCheck className="w-3 h-3 text-[#1B6FA8]" />
                        </div>
                      </div>

                    </div>

                    {/* Bottom WhatsApp Input Bar */}
                    <div className="bg-[#F0F2F5] px-2 py-1.5 border-t border-[#E2E4E8] flex items-center gap-1.5 shrink-0">
                      <button type="button" aria-label="Anexar" className="text-[#54656F] p-0.5 hover:text-[#111B21]">
                        <Plus className="w-4 h-4" />
                      </button>

                      <div className="flex-1 bg-white rounded-full px-2.5 py-1 border border-[#E9EDEF] flex items-center justify-between text-[#8696A0]">
                        <span className="text-[10px]">Mensagem</span>
                        <div className="flex items-center gap-1 text-[#54656F]">
                          <Smile className="w-3.5 h-3.5" />
                          <Camera className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      <button type="button" aria-label="Gravar áudio" className="text-[#54656F] p-0.5 hover:text-[#111B21]">
                        <Mic className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Dots Pagination */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((_, dotIdx) => (
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


