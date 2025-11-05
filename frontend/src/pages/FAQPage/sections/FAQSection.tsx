import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqsByCategory } from '@/data/faqsData';
import type { FAQItem } from '@/data/faqsData';

export default function FAQSection() {
  

  // build an array of [category, items] so we can split into two balanced columns
  const categories: [string, FAQItem[]][] = Object.entries(faqsByCategory);
  const half = Math.ceil(categories.length / 2);
  const leftCategories: [string, FAQItem[]][] = categories.slice(0, half);
  const rightCategories: [string, FAQItem[]][] = categories.slice(half);

  return (
    <section
      id="faq"
      className="bg-fuchsia-pink-100 px-6 md:px-8 lg:px-[80px] pt-24 md:pt-[180px] pb-24 md:pb-[65px]"
    >
      <div className="mx-auto w-full max-w-[1200px] bg-fuchsia-pink-50 rounded-2xl shadow-sm">
        <div className="px-6 md:px-10 py-8 md:py-12">

      <div className="mb-12 text-center">
        <h2 className="text-fuchsia-pink-900 text-4xl sm:text-5xl font-semibold font-['Montserrat'] leading-tight">
          Perguntas Frequentes
        </h2>
      </div>
          {/* duas colunas de categorias. Em mobile é uma coluna só */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* coluna esquerda */}
            <div className="space-y-6">
              {leftCategories.map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-fuchsia-pink-700 text-xl font-semibold mb-3">{category}</h3>
                  <div className="space-y-3">
                    {items.map((item, idx) => (
                      <Accordion
                        key={idx}
                        type="single"
                        collapsible
                        className="w-full text-fuchsia-pink-900 bg-white/0 rounded-lg"
                      >
                        <AccordionItem value={`${category}-${idx}`}>
                          <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                          <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* coluna direita */}
            <div className="space-y-6">
              {rightCategories.map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-fuchsia-pink-700 text-xl font-semibold mb-3">{category}</h3>
                  <div className="space-y-3">
                    {items.map((item, idx) => (
                      <Accordion
                        key={idx}
                        type="single"
                        collapsible
                        className="w-full text-fuchsia-pink-900 bg-white/0 rounded-lg"
                      >
                        <AccordionItem value={`${category}-${idx}`}>
                          <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                          <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}