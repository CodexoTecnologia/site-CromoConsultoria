"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

// Componente agora recebe as props do page.tsx
export function FaqAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showExtraFaqs, setShowExtraFaqs] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Dividimos os dados: 15 para exibir logo de cara, 8 extras para ocultar.
  const mainFaqs = faqs.slice(0, 15);
  const extraFaqs = faqs.slice(15);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* 15 perguntas da Cromo */}
      {mainFaqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.div 
            key={index}
            initial={false}
            className={`border rounded-xl overflow-hidden transition-all duration-300 hover:bg-zinc-900/80 hover:border-white/20 ${
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

      {/* Bloco Extra (SEO + Restante Perguntas Cromo) "VER MAIS" */}
      <div className="pt-8 mt-8 border-t border-white/5">
        <button
          onClick={() => setShowExtraFaqs(!showExtraFaqs)}
          className="w-full flex items-center justify-center gap-3 py-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 hover:text-cromo text-zinc-400 transition-colors font-bold uppercase tracking-wider text-sm"
        >
          {showExtraFaqs ? "Ocultar tópicos técnicos" : "Ver mais dúvidas"}
          <motion.div animate={{ rotate: showExtraFaqs ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </button>

        {/* Div que retém o código no HTML (SEO) mas o esconde visualmente via grid transition */}
        <div 
          className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
            showExtraFaqs ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="space-y-4 pt-6">
              {extraFaqs.map((faq, idx) => {
                const globalIndex = idx + 15; // Mantém a referência do index original do array
                const isOpen = openIndex === globalIndex;

                return (
                  <motion.div 
                    key={globalIndex}
                    initial={false}
                    className={`border rounded-xl overflow-hidden transition-all duration-300 hover:bg-zinc-900/80 hover:border-white/20 ${
                      isOpen 
                        ? "bg-zinc-900 border-cromo/30 shadow-[0_0_20px_rgba(255,199,0,0.05)]" 
                        : "bg-zinc-950/50 border-white/5 hover:border-white/10"
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(globalIndex)}
                      className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                    >
                      <h3 className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? "text-cromo" : "text-white"}`}>
                        {faq.question}
                      </h3>
                      
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
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
                          transition={{ duration: 0.3 }}
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
          </div>
        </div>
      </div>
    </div>
  );
}