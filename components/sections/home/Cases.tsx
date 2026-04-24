// src/components/sections/home/Cases.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

const casesData = [
  {
    client: "Cliente Industrial",
    title: "Torrador de Café",
    description: "Desenvolvimento de desenho industrial e relatório descritivo no SolidWorks para garantir a patente e evitar cópias da concorrência.",
    tag: "Desenho Industrial",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800",
  },
  {
    client: "Ekorama",
    title: "Máquina de Fliperama Sustentável",
    description: "Desenvolvimento de máquina de jogos onde a ficha é um material reciclável (latas, tampas), incentivando a sustentabilidade.",
    tag: "Desenvolvimento de Produto",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
  },
  {
    client: "EMaster",
    title: "Empilhadeira Motorizada",
    description: "Dimensionamento e desenvolvimento do projeto, incluindo alternativas de mobilidade, gabaritos de solda e memorial de cálculo para 1000Kg.",
    tag: "Engenharia Mecânica",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800",
  },
  {
    client: "EMaster",
    title: "Elevador Automotivo Hidráulico",
    description: "Modelagem 3D, desenhos de fabricação e dimensionamento de componentes comerciais para um novo elevador do tipo pórtico.",
    tag: "Modelagem 3D",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
  },
  {
    client: "Setor Esportivo",
    title: "Case 3D para Sensor Crossfit",
    description: "Prototipagem em impressão 3D da estrutura externa de um sensor de medição de desempenho, com tamanho compatível para o esporte.",
    tag: "Prototipagem 3D",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
  },
  {
    client: "Setor Alimentício",
    title: "Máquina de Pastel Automatizada",
    description: "Conceituação e projeto de máquina para automatizar a produção de massas recheadas em diversos formatos, como letras.",
    tag: "Automação",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
  }
];

export default function Cases() {
  const duplicatedCases = [...casesData, ...casesData];

  return (
    <section id="cases" className="py-16 md:py-20 lg:py-24 bg-zinc-950 relative border-b border-zinc-800/50 overflow-hidden">
      
      <style dangerouslySetInnerHTML={{__html: `
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cromo/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-cromo"></div>
              <span className="text-cromo font-bold tracking-widest text-[10px] uppercase">Resultados Comprovados</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Confira o nosso <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">Portfólio</span>
            </h2>
            <p className="text-zinc-400 mt-3 text-sm md:text-base max-w-lg">
              Projetos reais desenvolvidos pela nossa equipe de engenharia para solucionar desafios complexos da indústria.
            </p>
          </div>
          
          <Link 
            href="/portfolio" 
            className="shrink-0 bg-cromo text-black font-black text-[10px] sm:text-xs tracking-widest uppercase px-6 py-3 sm:px-8 sm:py-4 rounded-xl shadow-lg shadow-cromo/20 hover:bg-yellow-400 transition-all flex items-center justify-center w-max"
          >
            Acessar Portfólio Completo
          </Link>
        </header>
      </div>

      <div className="w-full overflow-hidden relative z-10 pb-4">
        <div className="marquee-track">
          {duplicatedCases.map((item, index) => (
            <div key={index} className="pr-4 sm:pr-6 w-[280px] sm:w-[320px] shrink-0">
              
              <Link href="/portfolio" className="block h-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-cromo/50 transition-colors flex flex-col group">
                
                <div className="relative w-full h-40 sm:h-48 bg-zinc-800 overflow-hidden border-b border-zinc-800">
                  <Image 
                    src={item.image} 
                    alt={`Projeto: ${item.title}`} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-sm border border-zinc-700 px-2.5 py-1 rounded-full">
                    <span className="text-[8px] sm:text-[9px] font-bold tracking-widest text-cromo uppercase">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1.5">
                    {item.client}
                  </p>
                  
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cromo transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mt-auto line-clamp-3">
                    {item.description}
                  </p>
                </div>

              </Link>
            </div>
          ))}
        </div>

        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none" />
      </div>

    </section>
  );
}