// src/app/servicos/page.tsx
import Link from "next/link";
import Hero from "@/components/sections/shared/Hero";
import { Metadata } from "next";
import { Wrench, BarChart2, ShieldCheck, Settings, Cpu } from "lucide-react";
import Cases from "@/components/sections/home/Cases";
import ContactForm from "@/components/sections/shared/ContactForm";

const pageTitle = "Serviços de Engenharia";
const pageDescription = "Conheça nossas soluções em engenharia mecânica, mecatrônica e patentes.";
const pageUrl = "https://www.cromoconsultoria.com.br/servicos";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: pageUrl,
    title: pageTitle,
    description: pageDescription,
    siteName: "Cromo Consultoria",
    images: [
      {
        url: "/assets/images/og-image-default.png",
        width: 1200,
        height: 628,
        alt: "Cromo Consultoria - Serviços de Engenharia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/assets/images/og-image-default.png"],
  },
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

      <Hero
        imageSrc="/assets/images/servicos/hero-servicos.png"
        imageAlt="Serviços de Engenharia Cromo Consultoria"
        label="Nossa Expertise"
        title="Nossos"
        titleHighlight="Serviços"
        description="Soluções em engenharia para transformar seu desafio técnico em diferencial competitivo."
      />

      {/* SERVIÇOS - bg-zinc-950 restaurado na section também */}
      <section className="py-16 md:py-24 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          
          <header className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-cromo" />
              <span className="text-cromo font-bold tracking-widest text-[10px] uppercase">
                Áreas de Atuação
              </span>
              <div className="w-8 h-[2px] bg-cromo" />
            </div>
            
            <h2 className="subtitle text-white">
              O que podemos fazer{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">
                por você
              </span>
            </h2>
            
            <p className="body-text text-zinc-400 mt-5 max-w-xl mx-auto">
              Selecione uma das nossas áreas de atuação para descobrir como podemos transformar o seu desafio técnico em resultado real.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {servicesList.map((service, index) => {
              const Icon = service.Icon;
              const number = String(index + 1).padStart(2, '0');

              return (
                <Link
                  key={service.slug}
                  href={`/servicos/${service.slug}`}
                  className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:border-cromo-purple/50 hover:shadow-[0_0_30px_rgba(90,35,109,0.15)] group relative overflow-hidden flex flex-col focus:outline-none focus:ring-2 focus:ring-cromo"
                >
                  {/* Glow interno roxo */}
                  <div className="absolute -top-12 -left-12 w-32 h-32 bg-cromo-purple/20 blur-[50px] pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                  
                  <div className="mb-8 flex items-center justify-between relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-cromo group-hover:border-cromo/30 transition-colors duration-300 shadow-inner">
                      <Icon size={26} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-700 group-hover:text-cromo-purple/70 transition-colors duration-300">
                      {number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white mb-4 relative z-10 transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  <p className="body-text text-zinc-400 mb-8 flex-grow relative z-10">
                    {service.desc}
                  </p>

                  <div className="text-zinc-500 group-hover:text-cromo text-[10px] sm:text-xs font-bold uppercase tracking-widest flex items-center gap-2 mt-auto relative z-10 transition-colors duration-300">
                    Saiba mais
                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* CASES E CONTATO */}
      <Cases />
      <ContactForm />

    </main>
  );
}