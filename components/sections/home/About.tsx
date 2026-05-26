// src/components/sections/home/About.tsx
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-20 lg:py-24 bg-zinc-950 relative border-b border-zinc-800/50 overflow-hidden">
      
      {/* Elemento decorativo luminoso */}
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
            
            {/* Classe Global .subtitle aplicada */}
            <h2 className="subtitle text-white">
              A ponte entre a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">pesquisa de ponta</span> e a indústria.
            </h2>
            
            {/* Classe Global .body-text aplicada e texto do seu Docx */}
            <p className="body-text text-zinc-400 max-w-lg">
              Somos a Cromo Consultoria, uma empresa júnior formada por estudantes de engenharia mecânica e mecatrônica da <strong>UTFPR Curitiba</strong>. 
              Nosso objetivo é desenvolver soluções inovadoras e acessíveis, ao mesmo tempo em que formamos profissionais capacitados para o mercado.
            </p>
            
            <ul className="space-y-3 pt-2 mb-8">
              {[
                'Projetos personalizados e acessíveis', 
                'Foco em inovação e metodologias modernas', 
                'Equipe altamente qualificada e rigor acadêmico'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300 font-medium body-text">
                  <div className="w-5 h-5 rounded-full bg-cromo/10 flex items-center justify-center text-cromo text-xs shrink-0" aria-hidden="true">
                    ✓
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link 
                href="/sobre" 
                className="inline-flex items-center gap-2 border border-zinc-700 bg-zinc-900/50 hover:bg-cromo hover:border-cromo text-white hover:text-black font-bold text-[10px] sm:text-xs tracking-widest uppercase px-6 py-3 sm:px-8 sm:py-4 rounded-xl transition-all focus:ring-2 focus:ring-cromo focus:outline-none"
              >
                Conheça nossa história →
              </Link>
            </div>
          </div>

          <div className="relative w-full aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group">
            <Image 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000" 
              alt="Equipe da Cromo trabalhando em laboratório de engenharia na UTFPR" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>
          
        </div>
      </div>
    </section>
  );
}