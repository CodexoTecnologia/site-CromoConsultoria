import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/sections/shared/Hero";
import {
  Compass,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import ContactForm from "@/components/sections/shared/ContactForm";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a Cromo Consultoria, Empresa Júnior da UTFPR que conecta universidade e mercado com soluções em engenharia.",
};

const values = [
  {
    title: "Sangue nos olhos",
    description:
      "Senso crítico para analisar o que já foi feito, assertividade para agir e autonomia para evoluir continuamente.",
    icon: Target,
  },
  {
    title: "Inteligência coletiva",
    description:
      "Comunicação clara, empatia e troca de conhecimento para gerar mais valor ao cliente interno e externo.",
    icon: Users,
  },
  {
    title: "Autonomia e protagonismo",
    description:
      "Cada membro é protagonista da própria trajetória e assume a liderança do seu capítulo dentro da Cromo.",
    icon: Compass,
  },
  {
    title: "Foco em solução",
    description:
      "Buscamos resultados práticos com impacto real para clientes, equipe e ecossistema de inovação.",
    icon: Lightbulb,
  },
];

const pillars = [
  {
    title: "Contexto VUCA",
    description:
      "Atuamos com leitura de cenário volátil, incerto, complexo e ambíguo para tomar decisões mais inteligentes.",
    icon: ShieldCheck,
  },
  {
    title: "Manifesto Ágil",
    description:
      "Nosso trabalho prioriza colaboração, entregas contínuas e adaptação rápida para resolver o problema certo.",
    icon: Rocket,
  },
];

const resourceFocus = [
  {
    title: "Capacitação dos membros",
    description:
      "Investimos em desenvolvimento pessoal e profissional com cursos e vivência empresarial.",
  },
  {
    title: "Estruturação da empresa",
    description:
      "Priorizamos ferramentas e ambiente de trabalho para elevar performance, qualidade e consistência de entrega.",
  },
];

export default function SobreNosPage() {
  return (
    <main className="min-h-screen bg-zinc-950 pb-10">
      <Hero
        imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000"
        imageAlt="Equipe Cromo Consultoria"
        label="Empresa Júnior"
        title="Sobre"
        titleHighlight="Nós"
        description="A Cromo é uma Empresa Júnior da UTFPR que conecta universidade e mercado com soluções de engenharia aplicadas."
      />
      <section className="container mx-auto px-4 sm:px-6 pt-10 md:pt-14 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl space-y-7">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-cromo" />
              <span className="text-cromo font-bold tracking-widest text-xs uppercase">
                Quem Somos
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight">
              Engenharia com{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600 whitespace-nowrap">
                propósito e impacto
              </span>
              .
            </h2>

            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed border-l-2 border-zinc-800 pl-6">
              A Cromo Consultoria é uma Empresa Júnior da UTFPR que conecta
              universidade e mercado para reduzir o distanciamento tecnológico
              com soluções de engenharia aplicadas.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#o-que-e-cromo"
                className="inline-flex items-center justify-center rounded-full border border-cromo bg-cromo px-5 py-3 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-zinc-950 transition-colors hover:bg-cromo-hover"
              >
                Entender a Cromo
              </Link>
              <Link
                href="#contato"
                className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 px-5 py-3 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-zinc-200 transition-colors hover:border-cromo hover:text-cromo"
              >
                Falar com a equipe
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="o-que-e-cromo"
        className="container mx-auto px-4 sm:px-6 mb-28"
      >
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <div className="space-y-6 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              O que é a Cromo
            </h2>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Projetamos sonhos com vivência empresarial real, formando líderes
              e entregando valor para clientes internos e externos.
            </p>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Atuamos em um cenário VUCA e, por isso, combinamos base técnica,
              visão de negócio e métodos ágeis para transformar desafios em
              soluções viáveis.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <article
                    key={pillar.title}
                    className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 hover:border-cromo transition-colors"
                  >
                    <Icon className="w-5 h-5 text-cromo mb-3" />
                    <h3 className="text-white font-bold mb-2">{pillar.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="relative aspect-square rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl group lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1800"
              alt="Planejamento técnico e estratégico de projetos"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section
        id="nossos-valores"
        className="bg-zinc-900 border-y border-zinc-800 py-24 mb-28 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-cromo/5 rounded-full blur-[100px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cromo/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/4 translate-y-1/4" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white">
              Nossos Valores
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="bg-zinc-950 border border-zinc-800 p-8 lg:p-10 rounded-2xl hover:border-cromo group transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-cromo/5 rounded-full blur-3xl group-hover:bg-cromo/10 transition-colors" />
                  <div className="w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cromo/50 transition-all shadow-lg">
                    <Icon className="w-6 h-6 text-cromo" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cromo transition-colors relative z-10">
                    {value.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed relative z-10">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 mb-16">
        <div className="max-w-5xl mx-auto rounded-3xl border border-zinc-800 bg-zinc-900 p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Onde aplicamos nossos recursos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {resourceFocus.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5 hover:border-cromo transition-colors"
              >
                <h3 className="text-cromo text-sm uppercase tracking-[0.15em] font-black mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="movimento-ej" className="container mx-auto px-4 sm:px-6 mb-32">
        <div className="max-w-5xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <span className="text-cromo font-black text-[10px] uppercase tracking-[0.3em]">
              Conexão MEJ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Movimento Empresa Júnior
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Fazemos parte do maior movimento de empreendedorismo jovem do
              mundo. Na Cromo, isso se traduz em projetos de alto impacto,
              desenvolvimento de lideranças e evolução profissional contínua.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-56 h-56 rounded-2xl overflow-hidden border-2 border-zinc-700 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000"
                alt="Equipe colaborativa em projeto"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contato">
        <ContactForm />
      </section>
    </main>
  );
}
