// src/components/sections/home/SimplifiedService.tsx
import Link from "next/link";

const services = [
  {
    title: "Desenvolvimento de Produto",
    desc: "Do rascunho ao protótipo funcional, garantindo viabilidade e inovação.",
    link: "/servicos/desenvolvimentodeproduto"
  },
  {
    title: "Otimização de Processos",
    desc: "Aumento de eficiência e redução de custos operacionais na indústria.",
    link: "/servicos/otimizacaodeprocesso"
  },
  {
    title: "Formulações e Patentes",
    desc: "Segurança intelectual e estruturação técnica para suas inovações.",
    link: "/servicos/formulacaodepatentes"
  }
];

export default function SimplifiedService() {
  return (
    <section id="servicos" className="py-16 md:py-20 lg:py-24 bg-zinc-950 relative border-b border-zinc-800/50">
      
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cromo/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <header className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-cromo" />
              <span className="text-cromo font-bold tracking-widest text-[10px] uppercase">
                Expertise
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Nossas <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Soluções</span>
            </h2>
          </div>
          
          <Link 
            href="/servicos" 
            className="text-zinc-400 hover:text-cromo transition-colors flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest group"
          >
            Ver todos os serviços <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link 
              href={service.link} 
              key={index}
              className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-cromo/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden"
            >
              <div className="w-12 h-12 bg-zinc-950 border border-zinc-800 group-hover:border-cromo/50 rounded-xl mb-6 flex items-center justify-center transition-colors shadow-sm">
                <div className="w-4 h-4 bg-zinc-700 group-hover:bg-cromo rounded-sm group-hover:scale-110 transition-all"></div>
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-cromo transition-colors">
                {service.title}
              </h3>
              
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                {service.desc}
              </p>
              
              <div className="text-cromo text-xs tracking-widest uppercase font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all absolute bottom-6 sm:bottom-8">
                Saber mais →
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}