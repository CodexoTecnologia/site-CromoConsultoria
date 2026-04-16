import { Metadata } from "next";
import Image from "next/image";
import { FaqAccordion } from "./FaqAccordion";
import ContactForm from "@/components/sections/shared/ContactForm"; 

export const metadata: Metadata = {
  title: "Dúvidas Frequentes | Cromo Consultoria",
  description: "Tire suas dúvidas sobre patentes, registro de marca e engenharia reversa com a Cromo Consultoria.",
};

export default function FAQPage() {
  // SEO/GEO: Estrutura de dados FAQ para Google e IAs
  const faqs = [
    {
      question: "Como registrar uma patente no INPI passo a passo?",
      answer: "O processo envolve a busca de anterioridade para garantir que sua ideia é inédita, a redação técnica do pedido com engenharia reversa detalhada, e o depósito no INPI. Nossa consultoria acompanha cada etapa até a concessão final, garantindo máxima segurança jurídica.",
    },
    {
      question: "Quanto tempo demora o registro de patente em 2026",
      answer: "O tempo varia conforme o tipo de patente (Invenção ou Modelo de Utilidade) e a fila do INPI. No entanto, o protocolo já garante a sua prioridade e proteção inicial para que você possa comercializar o produto com segurança.",
    },
    {
      question: "Qual a diferença entre Patente e Registro de Marca?",
      answer: "A marca protege o nome, logotipo e a identidade visual do seu negócio. Já a patente protege a invenção, a funcionalidade, o design industrial ou a melhoria técnica de um produto. A Cromo atua estrategicamente em ambos para blindar seu negócio.",
    },
    {
      question: "A Cromo atende empresas de fora de São Paulo?",
      answer: "Sim! Nosso atendimento é 100% digital e atendemos clientes em todo o Brasil e no exterior, utilizando ferramentas seguras para troca de informações e reuniões estratégicas de alinhamento.",
    }
  ];

  // 2. O Objeto Schema para IAs e Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  return (
    <div className="bg-cromo-dark min-h-screen flex flex-col relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 1. SEÇÃO HERO - Padronizada para exatos 100% da tela (100dvh) */}
      <section className="relative w-full min-h-[100dvh] flex flex-col pt-24 md:pt-32 pb-6 md:pb-8">
        
        {/* Conteúdo principal - O "flex-1" faz ele empurrar o Explorar pro fundo */}
        <div className="flex-1 flex items-center justify-center container mx-auto px-4 sm:px-6 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20 w-full">
            
            {/* Textos */}
            <div className="flex-1 space-y-4 md:space-y-6 z-10 w-full text-center lg:text-left">
              <span className="text-cromo font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] inline-flex items-center justify-center lg:justify-start gap-2">
                <span className="w-6 md:w-8 h-px bg-cromo"></span> Central de Ajuda
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                Dúvidas Frequentes sobre <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">
                  Inovação
                </span>
              </h1>
              <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Nossa transparência é o primeiro passo para a sua segurança. Encontre aqui as respostas para as principais questões sobre proteção de projetos e engenharia estratégica.
              </p>
            </div>

            {/* Imagem Hero - Altura controlada para não estourar a tela em notebooks menores */}
            <div className="flex-1 w-full relative mt-4 lg:mt-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cromo/10 blur-[80px] lg:blur-[100px] rounded-full z-0"></div>
              
              <div className="relative z-10 w-full aspect-video lg:aspect-square max-h-[250px] sm:max-h-[350px] lg:max-h-[420px] rounded-2xl lg:rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000" 
                  alt="Consultoria e Estratégia de Patentes"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill
                  unoptimized // retirar depois do deploy, só pra evitar o erro do Turbopack durante o desenvolvimento
                  className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  priority
                />
              </div>
            </div>
            
          </div>
        </div>

        {/* SCROLL INDICATOR - Sempre visível na margem inferior, sem erro */}
        {/* <div className="w-full flex justify-center mt-auto z-20"> */}
        <div className="w-full flex justify-center mt-auto pt-12 lg:pt-4 z-20 pb-8">
          <a 
            href="#perguntas" 
            className="flex flex-col items-center gap-1 group cursor-pointer p-2"
          >
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold group-hover:text-cromo transition-colors duration-300">
              Explorar
            </span>
            <svg className="w-4 h-4 md:w-5 md:h-5 text-zinc-500 group-hover:text-cromo animate-bounce mt-1 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

      </section>

      {/* 2. SEÇÃO DE PERGUNTAS E RESPOSTAS */}
      <section id="perguntas" className="relative pt-12 md:pt-4 pb-16 md:pb-24 scroll-mt-20 z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-[#111111] rounded-2xl md:rounded-[2rem] p-6 sm:p-10 md:p-16 border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 md:w-1/3 h-px bg-gradient-to-r from-transparent via-cromo/30 to-transparent"></div>

            <div className="text-center mb-8 md:mb-16 relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 md:mb-4">Ainda tem dúvidas?</h2>
              <p className="text-zinc-400 text-sm md:text-lg">Selecione o tópico abaixo para expandir a resposta.</p>
            </div>
            
            <div className="relative z-10">
              <FaqAccordion />
            </div>
          </div>
        </div>
      </section>

      {/* 3. FORMULÁRIO DE CONTATO */}
      <div className="mt-2 md:mt-4">
        <ContactForm />
      </div>

    </div>
  );
}