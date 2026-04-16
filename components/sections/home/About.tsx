// src/components/sections/home/About.tsx
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-zinc-950 relative border-b border-zinc-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3">
              <div className="w-12 h-[2px] bg-cromo"></div>
              <span className="text-cromo font-bold tracking-widest text-xs uppercase">Quem Somos</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              A ponte entre a <span className="text-cromo">pesquisa de ponta</span> e a indústria.
            </h2>
            
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Nascida na UTFPR, a Cromo une o rigor científico à agilidade exigida pelo mercado. Não entregamos apenas relatórios, entregamos soluções reais, prototipadas e validadas para gerar lucro e segurança para sua empresa.
            </p>
            
            <ul className="space-y-4 pt-4 mb-8">
              {['Equipe altamente qualificada', 'Foco em inovação patenteável', 'Projetos com viabilidade técnica e comercial'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-cromo/10 flex items-center justify-center text-cromo text-xs">✓</div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link 
                href="/sobre" 
                className="inline-flex items-center gap-2 border border-zinc-700 bg-zinc-900/50 hover:bg-cromo hover:border-cromo text-white hover:text-black font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-xl transition-all"
              >
                Conheça nossa história →
              </Link>
            </div>
          </div>

          <div className="relative aspect-square md:aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group">
            <Image 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000" 
              alt="Laboratório de Engenharia" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
          </div>
          
        </div>
      </div>
    </section>
  );
}