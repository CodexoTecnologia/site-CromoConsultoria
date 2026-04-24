// src/components/sections/home/About.tsx
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-20 lg:py-24 bg-zinc-950 relative border-b border-zinc-800/50 overflow-hidden">
      
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cromo/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <div className="space-y-5 md:space-y-6">
            <div className="inline-flex items-center gap-3">
              <div className="w-8 h-[2px] bg-cromo"></div>
              <span className="text-cromo font-bold tracking-widest text-[10px] uppercase">
                Quem Somos
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.15]">
              A ponte entre a <span className="text-cromo">pesquisa de ponta</span> e a indústria.
            </h2>
            
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg">
              Nascida na UTFPR, a Cromo une o rigor científico à agilidade exigida pelo mercado. Não entregamos apenas relatórios, entregamos soluções reais, prototipadas e validadas para gerar lucro e segurança para sua empresa.
            </p>
            
            <ul className="space-y-3 pt-2 mb-8">
              {['Equipe altamente qualificada', 'Foco em inovação patenteável', 'Projetos com viabilidade técnica e comercial'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm md:text-base font-medium">
                  <div className="w-5 h-5 rounded-full bg-cromo/10 flex items-center justify-center text-cromo text-xs shrink-0">
                    ✓
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link 
                href="/sobre" 
                className="inline-flex items-center gap-2 border border-zinc-700 bg-zinc-900/50 hover:bg-cromo hover:border-cromo text-white hover:text-black font-bold text-[10px] sm:text-xs tracking-widest uppercase px-6 py-3 sm:px-8 sm:py-4 rounded-xl transition-all"
              >
                Conheça nossa história →
              </Link>
            </div>
          </div>


          <div className="relative w-full aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group">
            <Image 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000" 
              alt="Laboratório de Engenharia" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>
          
        </div>
      </div>
    </section>
  );
}