// src/components/sections/home/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] py-32 flex items-center justify-center overflow-hidden bg-zinc-950">

      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
        
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-zinc-950 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl tracking-tight mb-8">
          Soluções em engenharia <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
            mecânica e mecatrônica
          </span>
        </h1>
        
        <p className="text-zinc-300 text-base md:text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
          Transformamos desafios técnicos em produtos inovadores e processos otimizados com rigor acadêmico e visão de mercado.
        </p>
        
        <Link 
          href="#servicos" 
          className="bg-cromo hover:bg-yellow-400 text-black font-black text-xs sm:text-sm md:text-base tracking-widest uppercase px-8 py-4 sm:py-5 rounded-xl transition-all shadow-[0_0_20px_rgba(255,199,0,0.15)] hover:shadow-[0_0_30px_rgba(255,199,0,0.3)] hover:-translate-y-1"
        >
          Nossos serviços
        </Link>
      </div>
    </section>
  );
}