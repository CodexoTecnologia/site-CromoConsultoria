import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Wrench, BarChart2, ShieldCheck, Settings, Cpu } from "lucide-react";
import Cases from "@/components/sections/home/Cases";
import ContactForm from "@/components/sections/shared/ContactForm";

export const metadata: Metadata = {
  title: "Serviços de Engenharia",
  description: "Conheça nossas soluções em engenharia mecânica, mecatrônica e patentes.",
  openGraph: {
    url: "https://www.cromoconsultoria.com.br/servicos",
  }
};

const servicesList = [
  {
    name: "Desenvolvimento de Produto",
    slug: "desenvolvimentodeproduto",
    desc: "Do conceito ao produto final com engenharia de precisão e documentação completa.",
    Icon: Wrench,
  },
  {
    name: "Estudo de Viabilidade",
    slug: "estudodeviabilidade",
    desc: "Análise técnica e financeira completa para validar seu projeto antes de investir.",
    Icon: BarChart2,
  },
  {
    name: "Formulação de Patentes",
    slug: "formulacaodepatentes",
    desc: "Proteção intelectual da sua inovação com documentação estratégica para o INPI.",
    Icon: ShieldCheck,
  },
  {
    name: "Otimização de Processo",
    slug: "otimizacaodeprocesso",
    desc: "Redução de custos e aumento de eficiência na sua linha de produção.",
    Icon: Settings,
  },
  {
    name: "Prototipagem e Validação",
    slug: "prototipagemevalidacao",
    desc: "Testes práticos com prototipagem rápida antes da escala industrial.",
    Icon: Cpu,
  },
];

export default function ServicosHome() {
  return (
    <main className="min-h-screen bg-zinc-950">

      {/* HERO */}
      <section className="relative w-full h-[55vh] min-h-[380px] max-h-[560px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000"
          alt="Serviços de Engenharia Cromo Consultoria"
          fill
          unoptimized
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 sm:px-6 pb-14">
          <span className="text-cromo font-bold text-[10px] uppercase tracking-[0.3em] inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-cromo" /> Nossa Expertise
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
            Nossos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">
              Serviços
            </span>
          </h1>
          <p className="text-zinc-300 text-base md:text-lg max-w-2xl">
            Soluções em engenharia para transformar seu desafio técnico em diferencial competitivo.
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-16 md:py-24 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6">

          <header className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-cromo" />
              <span className="text-cromo font-bold tracking-widest text-[10px] uppercase">
                Áreas de Atuação
              </span>
              <div className="w-8 h-[2px] bg-cromo" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              O que podemos fazer{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">
                por você
              </span>
            </h2>
            <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
              Selecione uma das nossas áreas de atuação para descobrir como podemos transformar o seu desafio técnico em resultado real.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {servicesList.map((service) => {
              const Icon = service.Icon;
              return (
                <Link
                  key={service.slug}
                  href={`/servicos/${service.slug}`}
                  className="group bg-zinc-900 border border-zinc-800 hover:border-cromo rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col"
                >
                  <div className="w-14 h-14 rounded-xl bg-cromo/10 border border-cromo/20 group-hover:bg-cromo group-hover:border-cromo flex items-center justify-center mb-6 transition-all duration-300 text-cromo group-hover:text-zinc-950">
                    <Icon size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-100 group-hover:text-white mb-3">
                    {service.name}
                  </h2>
                  <p className="text-zinc-500 text-sm mb-6 flex-grow leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="text-cromo text-xs font-bold uppercase tracking-wider flex items-center gap-2 mt-auto">
                    Saiba mais
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* CASES */}
      <Cases />

      {/* CONTATO */}
      <ContactForm />

    </main>
  );
}
