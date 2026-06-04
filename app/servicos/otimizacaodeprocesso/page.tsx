import { Metadata } from "next";
import Hero from "@/components/sections/shared/Hero";
import { Target, TrendingUp, CheckCircle, Zap, Layers } from "lucide-react";
import Feedback from "@/components/sections/home/Feedback";
import ContactForm from "@/components/sections/shared/ContactForm";

const serviceInfo = {
  title: "Otimização de ",
  titleHighlight: "Processos, Curitiba",
  description: "Identificamos e eliminamos gargalos operacionais com análise de processos, padronização e melhoria contínua para aumentar produtividade e reduzir custos.",
  heroImage: "/assets/images/servicos/otimizacao-de-processo/hero-otimizacao-cr.jpg",
  heroImageAlt: "Engenheiros otimizando processos em chão de fábrica",
  copy: {
    title: "Mais eficiência, menos desperdício — sem parar a produção",
    paragraphs: [
      "Processos ineficientes geram desperdícios, aumentam custos e reduzem a competitividade de uma empresa. Muitas vezes, pequenas falhas operacionais impactam diretamente nos resultados sem serem percebidas, comprometendo a produtividade e a qualidade das entregas. A falta de padronização e controle também pode dificultar o crescimento sustentável do negócio.",
      "A CROMO realiza uma análise detalhada dos processos, identificando gargalos, falhas e oportunidades de melhoria. Avaliamos fluxos de trabalho, uso de recursos e desempenho operacional para propor soluções práticas, aplicáveis e alinhadas com a realidade da empresa. Nosso foco é promover melhorias que tragam resultados concretos e mensuráveis.",
      "Nosso trabalho busca tornar sua operação mais organizada, produtiva e alinhada às melhores práticas de engenharia. Com melhorias bem direcionadas, é possível reduzir custos, otimizar recursos e alcançar resultados mais consistentes, aumentando a eficiência e a competitividade da empresa no mercado.",
    ],
  },
  benefits: [
    { title: "Redução de custos operacionais", description: "Redução de custos operacionais por meio de otimizações práticas.", Icon: TrendingUp },
    { title: "Aumento da produtividade", description: "Melhor aproveitamento do tempo e dos recursos disponíveis.", Icon: Zap },
    { title: "Identificação de gargalos", description: "Mapeamento e identificação dos principais pontos de estrangulamento.", Icon: Target },
    { title: "Processos mais eficientes", description: "Padronização e ajustes que tornam o fluxo de trabalho mais fluido.", Icon: Layers },
    { title: "Melhor aproveitamento de recursos", description: "Uso otimizado de pessoal, equipamentos e materiais.", Icon: CheckCircle },
  ],
  headingLine1: "MELHORE SEUS RESULTADOS",
  headingLine2: "COM PROCESSOS OTIMIZADOS!",
  formSubtitle: "Descubra com a Cromo como tornar seus processos mais eficientes, produtivos e competitivos.",
};

export const metadata: Metadata = {
  title: `${serviceInfo.title}${serviceInfo.titleHighlight}`, 
  description: serviceInfo.description,
  keywords: [
    "Otimização de Processo",
    "Análise de Eficiência",
    "Melhoria de Processos",
    "Decisão Estratégica",
    "Curitiba"
  ],
  alternates: {
    canonical: "/servicos/otimizacaodeprocesso",
  },
  openGraph: {
    title: `${serviceInfo.title}${serviceInfo.titleHighlight} | Cromo Consultoria`,
    description: serviceInfo.description,
    url: "/servicos/otimizacaodeprocesso",
    images: [
      {
        url: serviceInfo.heroImage,
        width: 1200,
        height: 630,
        alt: serviceInfo.heroImageAlt,
      },
    ],
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-zinc-950 relative z-10 w-full">

      <Hero
        imageSrc={serviceInfo.heroImage}
        imageAlt={serviceInfo.heroImageAlt}
        label="Serviço Especializado"
        title={serviceInfo.title}
        titleHighlight={serviceInfo.titleHighlight}
        description={serviceInfo.description}
        imagePosition="object-[center_70%]"
      />

      {/* COPY (Texto explicativo) */}
      <section className="py-16 md:py-24 bg-zinc-950 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="subtitle text-white mb-10">
              {serviceInfo.copy.title}
            </h2>
            <div className="space-y-6 border-l-2 border-zinc-800 pl-6 md:pl-8">
              {serviceInfo.copy.paragraphs.map((p, i) => (
                <p key={i} className="body-text text-zinc-400">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS (Cards Premium) */}
      <section className="py-16 md:py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-800/50">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cromo-light/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <header className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-cromo" />
              <span className="text-cromo font-bold tracking-widest text-[10px] uppercase">
                Por que nos escolher
              </span>
              <div className="w-8 h-[2px] bg-cromo" />
            </div>
            
            <h2 className="subtitle text-white">
              Os benefícios de trabalhar{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">
                com a Cromo
              </span>
            </h2>
          </header>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">*/}
          <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
            
            {serviceInfo.benefits.map((benefit, i) => {
              const Icon = benefit.Icon;

              return (
                <div
                  key={i}
                  // className="w-full bg-zinc-900 border border-zinc-800 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:border-cromo/50 hover:shadow-[0_0_30px_rgba(90,35,109,0.15)] group relative overflow-hidden flex flex-col"
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-zinc-900 border border-zinc-800 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:border-cromo/50 hover:shadow-[0_0_5px_rgba(255,255,255,0.15)] group relative overflow-hidden flex flex-col"
                >

                  <div className="absolute -top-12 -left-12 w-32 h-32 bg-cromo/10 blur-[50px] pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                  
                  <div className="mb-8 flex items-center justify-between relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-cromo group-hover:border-cromo/30 transition-colors duration-300 shadow-inner">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-100 group-hover:text-white mb-4 relative z-10 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="body-text text-zinc-400 flex-grow relative z-10">
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