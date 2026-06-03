// src/components/sections/home/SimplifiedService.tsx
import Link from "next/link";
import { Lightbulb, Cuboid, Settings, Cpu, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Desenvolvimento de Produtos",
    description: "Transformamos ideias em produtos tangíveis e viáveis para o mercado.",
    icon: Lightbulb,
  },
  {
    title: "Modelagem 3D",
    description: "Visualização e simulação digital de alta precisão para validação técnica antes da fabricação.",
    icon: Cuboid,
  },
  {
    title: "Projetos Mecânicos",
    description: "Dimensionamento e detalhamento técnico completo, garantindo segurança e eficiência.",
    icon: Settings,
  },
  {
    title: "Automação",
    description: "Otimização de processos e máquinas para aumentar a produtividade da sua linha.",
    icon: Cpu,
  }
];

export default function SimplifiedService() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-zinc-950 border-b border-zinc-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 justify-center mb-4">
            <div className="w-8 h-[2px] bg-cromo" />
            <h2 className="text-cromo font-bold tracking-widest text-[10px] uppercase">
              Nossas Especialidades em Engenharia
            </h2>
            <div className="w-8 h-[2px] bg-cromo" />
          </div>
          
          {/* Classe global .subtitle */}
          <div className="subtitle text-white mb-6">
            Atuamos em diversas áreas da engenharia para <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">impulsionar sua indústria</span>
          </div>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 hover:border-cromo/50 transition-all duration-300 relative overflow-hidden flex flex-col"
              >
                {/* O TOQUE ROXO*/}
                <div className="w-14 h-14 bg-zinc-950 border border-zinc-800 group-hover:border-cromo-purple group-hover:shadow-[0_0_20px_rgba(90,35,109,0.5)] rounded-xl flex items-center justify-center mb-6 transition-all duration-500 relative z-10">
                  <Icon className="w-7 h-7 text-cromo" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-cromo transition-colors">
                  {service.title}
                </h3>
                
                <p className="body-text text-sm text-zinc-400 mb-8 flex-grow relative z-10 line-clamp-3">
                  {service.description}
                </p>

                <Link 
                  href="/servicos" 
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest color:#808089 group-hover:text-white transition-colors relative z-10 w-max"
                >
                  Saber mais <ArrowRight className="w-4 h-4 text-cromo group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}