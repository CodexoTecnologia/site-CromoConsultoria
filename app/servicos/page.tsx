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
        imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000"
        imageAlt="Serviços de Engenharia Cromo Consultoria"
        label="Nossa Expertise"
        title="Nossos"
        titleHighlight="Serviços"
        description="Soluções em engenharia para transformar seu desafio técnico em diferencial competitivo."
      />

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
