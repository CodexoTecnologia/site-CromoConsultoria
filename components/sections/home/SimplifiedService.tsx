// src/components/sections/home/SimplifiedService.tsx
import Link from "next/link";

const services = [
  {
    title: "Desenvolvimento de Produto",
    desc: "Do rascunho ao protótipo funcional, garantindo viabilidade e inovação.",
    link: "/servicos/desenvolvimento-de-produto"
  },
  {
    title: "Otimização de Processos",
    desc: "Aumento de eficiência e redução de custos operacionais na indústria.",
    link: "/servicos/otimizacao-de-processos"
  },
  {
    title: "Formulações e Patentes",
    desc: "Segurança intelectual e estruturação técnica para suas inovações.",
    link: "/servicos/formulacao-de-patentes"
  }
];

export default function SimplifiedService() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-[#111111] relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        <header className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-cromo font-bold tracking-widest text-xs uppercase mb-4 block">Expertise</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Nossas Soluções
            </h2>
          </div>
          <Link href="/servicos" className="text-zinc-400 hover:text-cromo transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
            Ver todos os serviços <span>→</span>
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link 
              href={service.link} 
              key={index}
              className="group bg-zinc-900/50 border border-zinc-800 hover:border-cromo rounded-2xl p-8 transition-all duration-300 hover:bg-zinc-900 relative overflow-hidden"
            >
              <div className="w-12 h-12 bg-black border border-zinc-800 group-hover:border-cromo/50 rounded-xl mb-6 flex items-center justify-center transition-colors">
                <div className="w-4 h-4 bg-cromo rounded-sm group-hover:scale-110 transition-transform"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cromo transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <div className="text-cromo text-sm font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                Saber mais →
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}