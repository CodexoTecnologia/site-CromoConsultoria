import Image from "next/image";
import { Metadata } from "next";
import Hero from "@/components/sections/shared/Hero";
import ContactForm from "@/components/sections/shared/ContactForm";
import ScrollToContactButton from "@/components/sections/shared/ScrollToContactButton";
import { portfolioProjects } from "@/content/portfolio"; // Importando do arquivo central!

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Conheça os projetos reais desenvolvidos pela Cromo Consultoria em Engenharia.",
};

export default function PortfolioPage() {
  const totalProjects = portfolioProjects.length;
  const projectsInLastRow = totalProjects % 3;

  return (
    <main className="min-h-screen bg-zinc-950 pb-20">
      <Hero
        imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000"
        imageAlt="Projetos de Engenharia Cromo Consultoria"
        label="Nossos Resultados"
        title="Nosso"
        titleHighlight="Portfólio"
        description="Confira como aplicamos a engenharia para resolver problemas reais, proteger inovações e viabilizar novos produtos para a indústria."
      />

      <section className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className={`md:col-span-1 lg:col-span-4 bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-cromo transition-colors flex flex-col group ${
                projectsInLastRow === 1 && index === totalProjects - 1
                  ? "lg:col-start-5"
                  : projectsInLastRow === 2 && index === totalProjects - 2
                    ? "lg:col-start-3"
                    : projectsInLastRow === 2 && index === totalProjects - 1
                      ? "lg:col-start-7"
                      : ""
              }`}
            >
              
              <div className="relative w-full h-56 md:h-64 bg-zinc-800 overflow-hidden border-b border-zinc-800 shrink-0">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-sm border border-zinc-700 px-3 py-1.5 rounded-full z-10">
                  <span className="text-[10px] font-bold tracking-widest text-cromo uppercase">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-80" />
                <h3 className="absolute bottom-4 left-6 right-6 text-xl md:text-2xl font-bold text-white group-hover:text-cromo transition-colors z-10">
                  {project.title}
                </h3>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow space-y-6">
                
                {project.problema && (
                  <div>
                    <span className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest block mb-1">
                      Problema
                    </span>
                    <p className="body-text text-zinc-300 text-sm">
                      {project.problema}
                    </p>
                  </div>
                )}

                {project.acao && (
                  <div>
                    <span className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest block mb-1">
                      Ação Cromo
                    </span>
                    <p className="body-text text-zinc-300 text-sm">
                      {project.acao}
                    </p>
                  </div>
                )}

                {project.resultado && (
                  <div className="mt-auto pt-4 border-t border-zinc-800/50">
                    <span className="text-cromo font-bold text-[10px] uppercase tracking-widest block mb-1">
                      Resultado
                    </span>
                    <p className="body-text text-white text-sm font-medium">
                      {project.resultado}
                    </p>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 mt-32 mb-24 md:mb-32 text-center">
        <h2 className="subtitle text-white mb-6">Seu projeto pode ser o próximo.</h2>
        <ScrollToContactButton
          className="inline-block bg-cromo text-black font-black text-xs tracking-widest uppercase px-10 py-5 rounded-xl hover:bg-yellow-400 transition-all shadow-xl shadow-cromo/20"
        >
          Quero Iniciar um Projeto
        </ScrollToContactButton>
      </section>

      <ContactForm />

    </main>
  );
}