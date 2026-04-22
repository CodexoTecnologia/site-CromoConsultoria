import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Search, DollarSign, ShieldCheck, FileText } from "lucide-react";
import Feedback from "@/components/sections/home/Feedback";
import ContactForm from "@/components/sections/shared/ContactForm";

const serviceInfo = {
  title: "Estudo de Viabilidade",
  description: "Antes de investir, entenda se o seu projeto é técnica e financeiramente viável.",
  heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000",
  copy: {
    title: "Decisões mais inteligentes, investimentos mais seguros",
    paragraphs: [
      "Antes de investir tempo e capital no desenvolvimento de um produto ou processo, é fundamental entender se a ideia é técnica e financeiramente viável. O Estudo de Viabilidade da Cromo entrega exatamente isso: clareza.",
      "Realizamos análises detalhadas de mercado, custo de fabricação, retorno sobre investimento, riscos técnicos e alternativas de solução. O resultado é um relatório completo que embasa decisões estratégicas com dados reais.",
      "Seja para validar uma nova linha de produtos, avaliar um processo de manufatura ou apresentar um projeto a investidores, nosso estudo fornece os argumentos técnicos e financeiros que você precisa.",
    ],
  },
  benefits: [
    { title: "Análise Técnica Completa", description: "Avaliamos a viabilidade técnica considerando materiais, processos e normas aplicáveis.", Icon: Search },
    { title: "Projeção Financeira", description: "Calculamos custos, investimentos necessários e estimativa de retorno sobre o investimento.", Icon: DollarSign },
    { title: "Redução de Riscos", description: "Identificamos pontos críticos antes que se tornem problemas caros no futuro.", Icon: ShieldCheck },
    { title: "Relatório Executivo", description: "Entregamos um documento profissional, ideal para apresentações a sócios e investidores.", Icon: FileText },
  ],
  headingLine1: "VAMOS",
  headingLine2: "VALIDAR SUA IDEIA?",
  formSubtitle: "Conte com nossa equipe para analisar o potencial do seu projeto antes de investir.",
};

export const metadata: Metadata = {
  title: `${serviceInfo.title} | Cromo Consultoria`,
  description: serviceInfo.description,
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-zinc-950">

      {/* HERO */}
      <section className="relative w-full h-[55vh] min-h-[380px] max-h-[560px] overflow-hidden">
        <Image
          src={serviceInfo.heroImage}
          alt={serviceInfo.title}
          fill
          unoptimized
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 sm:px-6 pb-14">
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-cromo text-xs font-bold uppercase tracking-wider transition-colors mb-8"
          >
            ← Voltar para Serviços
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-cromo" />
            <span className="text-cromo font-bold tracking-widest text-[10px] uppercase">
              Serviço Especializado
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            {serviceInfo.title}
          </h1>
          <p className="text-zinc-300 text-base md:text-lg max-w-2xl leading-relaxed">
            {serviceInfo.description}
          </p>
        </div>
      </section>

      {/* COPY */}
      <section className="py-16 md:py-24 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-10">
              {serviceInfo.copy.title}
            </h2>
            <div className="space-y-6 border-l-2 border-zinc-800 pl-6 md:pl-8">
              {serviceInfo.copy.paragraphs.map((p, i) => (
                <p key={i} className="text-zinc-400 text-base md:text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-16 md:py-24 bg-zinc-900/40 border-y border-zinc-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <header className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-cromo" />
              <span className="text-cromo font-bold tracking-widest text-[10px] uppercase">
                Por que nos escolher
              </span>
              <div className="w-8 h-[2px] bg-cromo" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Os benefícios de trabalhar{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">
                com a Cromo
              </span>
            </h2>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {serviceInfo.benefits.map((benefit, i) => {
              const Icon = benefit.Icon;
              return (
                <div
                  key={i}
                  className="bg-zinc-900 border border-zinc-800 hover:border-cromo/50 rounded-2xl p-6 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cromo/10 border border-cromo/20 group-hover:bg-cromo/20 flex items-center justify-center mb-4 text-cromo transition-colors">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-white font-bold mb-2 text-sm md:text-base">
                    {benefit.title}
                  </h3>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <Feedback />

      {/* CONTATO */}
      <ContactForm
        headingLine1={serviceInfo.headingLine1}
        headingLine2={serviceInfo.headingLine2}
        subtitle={serviceInfo.formSubtitle}
      />

    </main>
  );
}
