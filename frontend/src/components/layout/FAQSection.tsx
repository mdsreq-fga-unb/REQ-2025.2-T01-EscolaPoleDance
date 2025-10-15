import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(2); // Terceiro item aberto por padrão

  const faqItems: FAQItem[] = [
    {
      question: "Preciso ter experiência prévia para começar?",
      answer: "Não! Nossas aulas são adaptadas para todos os níveis, desde iniciantes até avançadas. Nossas instrutoras são especializadas em ensinar desde o básico."
    },
    {
      question: "Qual a idade mínima para participar?",
      answer: "Aceitamos alunas a partir de 16 anos. Para menores de idade, é necessário autorização dos responsáveis."
    },
    {
      question: "O que preciso levar para a primeira aula?",
      answer: "Para a primeira aula, venha com roupas confortáveis (shorts e top) e muita disposição! Temos poles disponíveis na escola."
    },
    {
      question: "Como funciona o sistema de turmas?",
      answer: "Oferecemos turmas por níveis (iniciante, intermediário e avançado) com horários flexíveis durante a semana e fins de semana."
    },
    {
      question: "Posso fazer aula experimental?",
      answer: "Sim! Oferecemos aula experimental gratuita para você conhecer nossa metodologia e se sentir à vontade antes de se matricular."
    },
    {
      question: "Existe limite de idade para praticar pole dance?",
      answer: "Não há limite de idade! Atendemos mulheres de todas as idades, desde adolescentes até senhoras. Cada faixa etária tem suas particularidades e benefícios. O importante é ter vontade de aprender e se divertir. Venha conhecer nossa metodologia adaptada para cada perfil!"
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-purple-100 px-6 lg:px-[90px] py-16">
      <div className="mb-12">
        <h2 className="text-purple-900 text-5xl font-semibold font-['Montserrat'] leading-[55px]">
          Dúvidas comuns
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 lg:items-start">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-purple-50 rounded-xl border border-zinc-300 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] h-fits flex flex-col hover:bg-purple-100 transition-colors">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <p className="text-purple-950 text-base font-medium font-['Montserrat'] leading-6 flex-1">
                {item.question}
              </p>
              <div className="ml-4 flex-shrink-0">
                <svg
                  className={`w-4 h-4 text-purple-950 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            
            {openIndex === index && (
              <div className="px-4 pb-4">
                <p className="text-purple-950 text-sm font-normal font-['Montserrat'] leading-5">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;