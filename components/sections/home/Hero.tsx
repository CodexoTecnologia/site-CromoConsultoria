// src/components/sections/home/Hero.tsx
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] py-32 flex items-center justify-center overflow-hidden bg-zinc-950">

      {/* BACKGROUND OTIMIZADO COM NEXT/IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000"
          alt="Projeto de engenharia mecânica e mecatrônica em Curitiba"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlays visuais mantidos exatamente como você fez */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
        <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-zinc-950 to-transparent"></div>
      </div>

      <div className="container relative z-10 mt-4 mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl tracking-tight mb-4">
          Soluções em engenharia <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
            mecânica e mecatrônica em Curitiba
          </span>
        </h1>
        
        <p className="text-zinc-300 text-base md:text-lg lg:text-xl max-w-2xl mb-8 leading-relaxed">
          Transformamos desafios técnicos em produtos inovadores e processos otimizados com rigor acadêmico e visão de mercado.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
          
          {/* CTA PRIMÁRIO: Adicionado 'border border-transparent' e 'sm:min-w-[260px]' para equilibrar as proporções */}
          <Link 
            href="#contato" 
            className="w-full sm:w-auto sm:min-w-[260px] flex items-center justify-center bg-cromo border border-transparent text-black font-black text-xs sm:text-sm md:text-base tracking-widest uppercase px-8 py-4 sm:py-5 rounded-xl transition-all shadow-[0_0_20px_rgba(255,199,0,0.15)] hover:bg-white hover:shadow-[0_0_30px_rgba(255,199,0,0.3)] hover:-translate-y-1 focus:ring-2 focus:ring-white focus:outline-none"
          >
            Solicitar Orçamento
          </Link>

          {/* CTA SECUNDÁRIO: Adicionado 'sm:min-w-[260px]' e 'flex items-center justify-center'
          <Link 
            href="#servicos" 
            className="w-full sm:w-auto sm:min-w-[260px] flex items-center justify-center bg-transparent border border-zinc-700 text-white hover:border-cromo hover:text-cromo font-bold text-xs sm:text-sm md:text-base tracking-widest uppercase px-8 py-4 sm:py-5 rounded-xl transition-all hover:-translate-y-1 focus:ring-2 focus:ring-cromo focus:outline-none"
          >
            Nossos serviços
          </Link>*/}
        </div>
      </div>

      {/* =========================================
          INDICADOR DE SCROLL ANIMADO (MOBILE / PC)
          ========================================= */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
        <Link href="#sobre" aria-label="Rolar para baixo" className="flex flex-col items-center group focus:outline-none">
          
          <span className="text-zinc-500 group-hover:text-cromo text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] mb-3 transition-colors">
            Rolar
          </span>
          
          {/* MOUSE - Aparece apenas no Desktop (hidden md:flex) */}
          <div className="hidden md:flex w-6 h-10 border-2 border-zinc-500 group-hover:border-cromo rounded-full justify-center pt-2 transition-colors">
            <div className="w-1 h-2 bg-zinc-500 group-hover:bg-cromo rounded-full animate-bounce transition-colors" />
          </div>

          {/* SETINHA DUPLA - Aparece apenas no Mobile (flex md:hidden) */}
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