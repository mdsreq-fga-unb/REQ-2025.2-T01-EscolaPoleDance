import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
      answer: "Sim! Oferecemos aula experimental paga para você conhecer nossa metodologia e se sentir à vontade antes de se matricular. Comece tudo marcando sua aula experimental no horário que se encaixa melhor para você!"
    },
    {
      question: "Existe limite de idade para praticar pole dance?",
      answer: "Não há limite de idade! Todas as mulheres são bem-vindas, desde que estejam liberadas para praticar atividade física. Cada faixa etária tem suas particularidades e benefícios. O importante é ter vontade de aprender e se divertir. Venha conhecer nossa metodologia adaptada para cada perfil!"
    }
  ];

  return (
    <section id="faq" className="bg-fuchsia-pink-100 px-6 lg:px-[90px] py-16">
      <div className="mb-12">
        <h2 className="text-fuchsia-pink-900 text-5xl font-semibold font-['Montserrat'] leading-[55px]">
          Dúvidas comuns
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 lg:items-start">
        {faqItems.map((item, index) => (
            <Accordion key={index} type="single" collapsible className="w-full flex items-center justify-start pl-2 text-fuchsia-pink-900">
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
        ))}
      </div>
    </section>

  );
};

export default FAQSection;