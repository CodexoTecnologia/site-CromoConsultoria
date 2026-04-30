import { Metadata } from "next";
import { FaqAccordion } from "./FaqAccordion";
import Hero from "@/components/sections/shared/Hero";
import ContactForm from "@/components/sections/shared/ContactForm";

export const metadata: Metadata = {
  title: "Dúvidas Frequentes",
  description: "Tire suas dúvidas sobre patentes, registro de marca e engenharia reversa com a Cromo Consultoria.",
};

export default function FAQPage() {
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
    <div className="bg-cromo-dark min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "<"),
        }}
      />

      <Hero
        imageSrc="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000"
        imageAlt="Consultoria e Estratégia de Patentes"
        label="Central de Ajuda"
        title="Dúvidas"
        titleHighlight="Frequentes"
        description="Nossa transparência é o primeiro passo para a sua segurança. Encontre respostas sobre proteção de projetos e engenharia estratégica."
      />

      {/* PERGUNTAS E RESPOSTAS */}
      <section id="perguntas" className="relative pt-12 md:pt-16 pb-16 md:pb-24 scroll-mt-20 z-10">
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

      {/* FORMULÁRIO DE CONTATO */}
      <div className="mt-2 md:mt-4">
        <ContactForm />
      </div>

    </div>
  );
}
