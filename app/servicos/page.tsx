import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nossos Serviços | Cromo Consultoria",
  description: "Conheça nossas soluções em engenharia mecânica, mecatrônica e patentes.",
};

const servicesList = [
  { name: "Desenvolvimento de Produto", slug: "desenvolvimentodeproduto", desc: "Do conceito à fabricação." },
  { name: "Estudo de Viabilidade", slug: "estudodeviabilidade", desc: "Análise técnica e financeira de projetos." },
  { name: "Formulação de Patentes", slug: "formulacaodepatentes", desc: "Proteção intelectual da sua inovação." },
  { name: "Otimização de Processo", slug: "otimizacaodeprocesso", desc: "Redução de custos e aumento de eficiência." },
  { name: "Prototipagem e Validação", slug: "prototipagemevalidacao", desc: "Testes práticos antes da escala industrial." },
];

export default function ServicosHome() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-cromo font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
            Nossa Expertise
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Soluções em <span className="text-cromo">Engenharia</span>
          </h1>
          <p className="text-zinc-400 text-lg">
            Selecione uma de nossas áreas de atuação para descobrir como podemos transformar o seu desafio técnico em um diferencial competitivo.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {servicesList.map((service) => (
            <Link 
              key={service.slug}
              href={`/servicos/${service.slug}`}
              className="group bg-zinc-900 border border-zinc-800 hover:border-cromo rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-800 group-hover:bg-cromo/10 flex items-center justify-center mb-6 transition-colors">
                <div className="w-3 h-3 rounded-sm bg-zinc-500 group-hover:bg-cromo transition-colors" />
              </div>
              <h2 className="text-xl font-bold text-zinc-100 group-hover:text-white mb-3">
                {service.name}
              </h2>
              <p className="text-zinc-500 text-sm mb-6">
                {service.desc}
              </p>
              <div className="text-cromo text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                Saber mais 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </main>
  );
}