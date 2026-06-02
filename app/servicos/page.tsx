// src/app/servicos/page.tsx
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/sections/shared/Hero";
import { Metadata } from "next";
import { Lightbulb, ClipboardList, ShieldCheck, Settings, Cpu, } from "lucide-react";
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
    desc: "Transformamos sua ideia em um produto real, realizando modelagens, cálculos e simulações. Garantimos que sua solução seja funcional, viável e pronta para aplicação, reduzindo erros e retrabalhos no desenvolvimento.",
    Icon: Lightbulb,
    heroImage: "/assets/images/servicos/desenvolvimento-de-produto/hero-desenvolvimento.png",
    heroAlt: "Hero de desenvolvimento de produto",
  },
  {
    name: "Estudo de Viabilidade",
    slug: "estudodeviabilidade",
    desc: "Avaliamos a viabilidade técnica e econômica do seu projeto, analisando custos, riscos e potencial de retorno. Assim, você toma decisões mais seguras antes de investir tempo e recursos..",
    Icon: ClipboardList,
    heroImage: "/assets/images/servicos/viabilidade/hero-viabilidade.png",
    heroAlt: "Hero de estudo de viabilidade",
  },
  {
    name: "Formulação de Patentes",
    slug: "formulacaodepatentes",
    desc: "Auxiliamos na estruturação técnica da sua patente, organizando informações e garantindo clareza na documentação. Isso aumenta a qualidade do processo e fortalece a proteção da sua inovação..",
    Icon: ShieldCheck,
    heroImage: "/assets/images/servicos/formulacao-de-patentes/hero-banner-patente.jpg",
    heroAlt: "Hero de formulação de patentes",
  },
  {
    name: "Otimização de Processo",
    slug: "otimizacaodeprocesso",
    desc: "Analisamos seus processos para identificar falhas, gargalos e desperdícios. Aplicamos melhorias que aumentam a eficiência, reduzem custos e tornam sua operação mais produtiva e competitiva..",
    Icon: Settings,
    heroImage: "/assets/images/servicos/otimizacao-de-processo/hero-otimizacao-cr.jpg",
    heroAlt: "Hero de otimização de processo",
  },
  {
    name: "Prototipagem e Validação",
    slug: "prototipagemevalidacao",
    desc: "Desenvolvemos protótipos para testar e validar sua solução antes da implementação final. Isso permite identificar melhorias, reduzir riscos e evitar investimentos em projetos não otimizados.",
    Icon: Cpu,
    heroImage: "/assets/images/servicos/prototipagem-e-validacao/hero-prototipo.png",
    heroAlt: "Hero de prototipagem e validação",
  },
];

export default function ServicosHome() {
  return (
    <main className="min-h-screen bg-zinc-950">

      <Hero
        imageSrc="/assets/images/servicos/hero-servicos.png"
        imageAlt="Serviços de Engenharia Cromo Consultoria"
        label="Nossa Expertise"
        title="Nossas"
        titleHighlight="Soluções"
        description="Soluções completas em engenharia para transformar seu desafio em diferencial competitivo."
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
                <div key={service.slug} className="group relative">
                  <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-cromo-purple/0 blur-3xl opacity-0 transition-all duration-500 group-hover:bg-cromo-purple/20 group-hover:opacity-100" />

                  <Link
                    href={`/servicos/${service.slug}`}
                    className="relative flex min-h-[420px] flex-col overflow-hidden rounded-3xl border border-white/8 bg-zinc-950/95 transition-all duration-500 hover:-translate-y-1 hover:border-cromo/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)] focus:outline-none focus:ring-2 focus:ring-cromo"
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={service.heroImage}
                        alt={service.heroAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover brightness-[0.22] contrast-125 saturate-0 transition-transform duration-700 group-hover:scale-105 group-hover:brightness-[0.28]"
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,199,0,0.08),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.42)_0%,rgba(2,2,4,0.82)_46%,rgba(2,2,4,0.98)_100%)]" />
                    </div>

                    <div className="absolute -top-12 -left-12 h-32 w-32 rounded-full bg-cromo-purple/15 blur-[55px] opacity-40 transition-opacity duration-500 group-hover:opacity-75" />

                    <div className="relative z-10 flex flex-1 flex-col justify-between p-7 sm:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/35 text-cromo backdrop-blur-md shadow-[0_0_24px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:-translate-y-1">
                          <Icon size={26} strokeWidth={1.5} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-300/70">
                          {number}
                        </span>
                      </div>

                      <div className="mt-auto pt-16">
                        <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cromo">
                          {service.name}
                        </h3>

                        <p className="body-text max-w-md text-zinc-300/85">
                          {service.desc}
                        </p>

                        <div className="mt-8 flex items-center justify-between border-t border-white/8 pt-5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 transition-colors duration-300 group-hover:text-white/90">
                          <span>Ver detalhes</span>
                          <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CASES E CONTATO */}
      <Cases />
      <ContactForm 
        headingLine1="TIRE SEU PROJETO"
        headingLine2="DO PAPEL COM A CROMO!"
        subtitle="Fale com nosso time e descubra como podemos ajudar no seu projeto com engenharia e estratégia."
      />

    </main>
  );
}