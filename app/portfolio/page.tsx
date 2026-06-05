// src/app/portfolio/page.tsx
import { Metadata } from "next";
import Hero from "@/components/sections/shared/Hero";
import ContactForm from "@/components/sections/shared/ContactForm";
import ScrollToContactButton from "@/components/sections/shared/ScrollToContactButton";
import PortfolioGrid from "@/components/sections/portfolio/PortfolioGrid";
import { portfolioProjects } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Portfólio de Projetos em Engenharia Mecânica",
  description: "Conheça os projetos reais de engenharia mecânica e mecatrônica desenvolvidos pela Cromo Consultoria para empresas e indústrias em Curitiba.",
  
  keywords: ["Portfólio", "Engenharia", "Empresa Júnior", "UTFPR", "Curitiba", "Mecânica", "Mecatrônica"],

  alternates: {
    canonical: "/portfolio",
  }
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-zinc-950 relative z-10 w-full pb-10">
      <Hero
        imageSrc="/assets/images/portfolio/portfolio-hero.png"
        imageAlt="Projetos de Engenharia Cromo Consultoria"
        label="Nossos Resultados"
        title="Nosso"
        titleHighlight="Portfólio"
        description="Confira como aplicamos a engenharia para resolver problemas reais, proteger inovações e viabilizar novos produtos para a indústria."
      />

      <section className="py-16 md:py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cromo/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Injetando o Grid Interativo aqui! */}
          <PortfolioGrid projects={portfolioProjects} />

        </div>
        
      </section>

      <section className="container mx-auto px-4 sm:px-6 my-24 md:my-32 text-center relative z-10">
        <h2 className="subtitle text-white mb-8">Seu projeto pode ser o próximo.</h2>
        <ScrollToContactButton
          className="inline-flex items-center justify-center bg-cromo text-zinc-950 font-black text-xs md:text-sm tracking-widest uppercase px-10 py-5 rounded-xl transition-all shadow-[0_0_20px_rgba(255,199,0,0.15)] hover:bg-white hover:shadow-[0_0_30px_rgba(255,199,0,0.3)] hover:-translate-y-1 focus:ring-2 focus:ring-white focus:outline-none"
        >
          Quero Iniciar um Projeto
        </ScrollToContactButton>
      </section>

      <ContactForm />
    </main>
  );
}