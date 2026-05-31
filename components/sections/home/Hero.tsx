// src/components/sections/home/Hero.tsx
// Sem 'use client' aqui!
import Link from "next/link";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] pt-10 md:pt-24 pb-16 flex items-center justify-center overflow-hidden bg-zinc-950">

      {/* COMPONENTE DE FUNDO (A FOTO + LUZ DO MOUSE) */}
      <HeroBackground />

      <div className="container relative z-40 mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
        
        <h1 className="text-[2.50rem] sm:text-5xl lg:text-6xl font-black text-white/95 leading-[1.18] sm:leading-[1.12] lg:leading-[1.08] max-w-4xl tracking-tight mb-6">
          Soluções em engenharia <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
            mecânica e mecatrônica em Curitiba
          </span>
        </h1>
        
        <p className="body-text text-zinc-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
          Transformamos desafios técnicos em produtos inovadores e processos otimizados com rigor acadêmico e visão de mercado.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <Link 
            href="#contato" 
            className="w-full sm:w-auto max-w-[300px] sm:max-w-none flex items-center justify-center bg-cromo text-black font-black text-xs sm:text-sm tracking-widest uppercase px-8 py-4 sm:py-5 rounded-xl transition-all shadow-[0_0_20px_rgba(255,199,0,0.15)] hover:bg-white hover:shadow-[0_0_30px_rgba(255,199,0,0.3)] hover:-translate-y-1 focus:ring-2 focus:ring-white focus:outline-none"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </div>

      {/* INDICADOR DE SCROLL ANIMADO */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-40">
        <Link href="#sobre" aria-label="Rolar para baixo" className="flex flex-col items-center group focus:outline-none">
          <span className="text-zinc-500 group-hover:text-cromo text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] mb-3 transition-colors">
            Rolar
          </span>
          <div className="hidden md:flex w-6 h-10 border-2 border-zinc-500 group-hover:border-cromo rounded-full justify-center pt-2 transition-colors">
            <div className="w-1 h-2 bg-zinc-500 group-hover:bg-cromo rounded-full animate-bounce transition-colors" />
          </div>
          <div className="flex md:hidden flex-col items-center animate-bounce text-zinc-500 group-hover:text-cromo transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5" />
              <path d="M7 6l5 5 5-5" />
            </svg>
          </div>
        </Link>
      </div>
    </section>
  );
}