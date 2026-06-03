"use client";

import React, { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { portfolioProjects } from "@/content/portfolio";

export default function Cases() {
  // Limita a renderização para no máximo 5 projetos
  const displayCases = portfolioProjects.slice(0, 7);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      dragFree: true,
      containScroll: false
    },
    [
      Autoplay({ 
        delay: 2500,
        stopOnInteraction: false,
        stopOnMouseEnter: true
      })
    ]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="cases" className="py-16 md:py-20 lg:py-24 bg-zinc-950 relative border-b border-zinc-800/50 overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cromo/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-cromo"></div>
              <h2 className="text-cromo font-bold tracking-widest text-[10px] uppercase">Resultados Comprovados</h2>
            </div>
            
            <div className="subtitle text-white">
              Confira o nosso <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">Portfólio</span>
            </div>
            
            <p className="body-text text-zinc-400 mt-3 max-w-lg">
              Projetos reais desenvolvidos pela nossa equipe de engenharia para solucionar desafios complexos da indústria.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-2">
              <button 
                onClick={scrollPrev} 
                aria-label="Projeto anterior"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-white hover:text-cromo hover:border-cromo transition-all shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-cromo"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={scrollNext} 
                aria-label="Próximo projeto"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-white hover:text-cromo hover:border-cromo transition-all shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-cromo"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
            
            <Link 
              href="/portfolio" 
              className="shrink-0 bg-cromo text-black font-black text-[10px] sm:text-xs tracking-widest uppercase px-6 py-3 sm:px-8 sm:py-4 rounded-xl shadow-lg shadow-cromo/20 hover:bg-yellow-400 transition-all flex items-center justify-center w-max focus:outline-none focus:ring-2 focus:ring-white"
            >
              Acessar Portfólio Completo
            </Link>
          </div>
        </header>
      </div>

      <div className="w-full relative z-10 pb-4">
        <div className="overflow-hidden px-4 sm:px-6 lg:px-20" ref={emblaRef}>
          {/* CORREÇÃO DO BUG: Removido o "gap" e adicionada margem negativa (-ml-4) */}
          <div 
            className="flex -ml-4 md:-ml-6 touch-pan-y py-4 cursor-grab active:cursor-grabbing" 
            onDragStartCapture={(e) => e.preventDefault()}
          >
            {displayCases.map((item, index) => (
              /* CORREÇÃO DO BUG: Adicionado padding-left (pl-4) para criar o espaço de forma segura para a matemática do Embla */
              <div key={index} className="flex-[0_0_280px] sm:flex-[0_0_320px] min-w-0 pl-4 md:pl-6 select-none">
                
                {/* TRANSFORMADO EM LINK: Agora o card inteiro é clicável e leva para /portfolio */}
                <Link 
                  href="/portfolio" 
                  className="block h-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-cromo-purple/50 hover:shadow-[0_0_25px_rgba(90,35,109,0.3)] transition-all duration-300 flex flex-col group focus:outline-none focus:ring-2 focus:ring-cromo"
                >
                  
                  <div className="relative w-full h-40 sm:h-48 bg-zinc-800 overflow-hidden border-b border-zinc-800">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      sizes="(max-width: 640px) 280px, 320px"
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-sm border border-zinc-700 px-2.5 py-1 rounded-full">
                      <span className="text-[8px] sm:text-[9px] font-bold tracking-widest text-cromo uppercase">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mb-1.5">
                      {item.client}
                    </p>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cromo transition-colors">
                      {item.title}
                    </h3>
                    <p className="body-text text-zinc-400 text-sm sm:text-sm mt-2">
                      {item.shortDescription}
                    </p>
                  </div>
                  
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none z-20" />
        <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none z-20" />
      </div>

    </section>
  );
}