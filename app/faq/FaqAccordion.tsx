"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Como funciona o processo de registro de uma patente?",
    answer: "O processo envolve a busca de anterioridade para garantir que sua ideia é inédita, a redação técnica do pedido com engenharia reversa detalhada, e o depósito no INPI. Nossa consultoria acompanha cada etapa até a concessão final, garantindo máxima segurança jurídica.",
  },
  {
    question: "Quanto tempo demora para uma patente ser aprovada?",
    answer: "O tempo varia conforme o tipo de patente (Invenção ou Modelo de Utilidade) e a fila do INPI. No entanto, o protocolo já garante a sua prioridade e proteção inicial para que você possa comercializar o produto com segurança.",
  },
  {
    question: "Qual a diferença entre Patente e Registro de Marca?",
    answer: "A marca protege o nome, logotipo e a identidade visual do seu negócio. Já a patente protege a invenção, a funcionalidade, o design industrial ou a melhoria técnica de um produto. A Cromo atua estrategicamente em ambos para blindar seu negócio.",
  },
  {
    question: "A Cromo atende empresas de fora de São Paulo?",
    answer: "Sim! Nosso atendimento é 100% digital e atendemos clientes em todo o Brasil e no exterior, utilizando ferramentas seguras para troca de informações e reuniões estratégicas de alinhamento.",
  },
];

// Note que tirei o "default" daqui. Isso evita o bug do Turbopack!
export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 ">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.div 
            key={index}
            initial={false}
            className={`border rounded-xl overflow-hidden transition-all duration-300 hover:bg-zinc-900/80 hover:border-white/20${
              isOpen 
                ? "bg-zinc-900 border-cromo/30 shadow-[0_0_20px_rgba(255,199,0,0.05)]" 
                : "bg-zinc-950/50 border-white/5 hover:border-white/10"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <h3 className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? "text-cromo" : "text-white"}`}>
                {faq.question}
              </h3>
              
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`flex-shrink-0 ml-4 flex items-center justify-center w-8 h-8 rounded-full border ${isOpen ? "border-cromo text-cromo" : "border-zinc-700 text-zinc-400"}`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  )}
                </svg>
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8 text-zinc-400 leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}