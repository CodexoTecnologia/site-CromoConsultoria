import { Metadata } from "next";
import Hero from "@/components/sections/shared/Hero";
import { TrendingUp, Cog, ShieldCheck, FileText } from "lucide-react";
import Feedback from "@/components/sections/home/Feedback";
import ContactForm from "@/components/sections/shared/ContactForm";

const serviceInfo = {
  title: "Estudo de ",
  titleHighlight: "Viabilidade",
  description: "Avaliamos a viabilidade técnica, econômica e comercial de projetos, garantindo decisões seguras e estratégicas.",
  heroImage: "/assets/images/servicos/viabilidade/hero-viabilidade.png",
  heroImageAlt: "Análise de Viabilidade Técnica e Econômica com gráficos e relatórios",
  copy: {
    title: "Avaliação técnica e econômica antes do investimento",
    paragraphs: [
      "Antes de investir tempo, dinheiro e recursos em um projeto, é essencial entender se ele realmente faz sentido do ponto de vista técnico e econômico. Muitas ideias falham não por falta de potencial, mas por ausência de uma análise estruturada antes da execução. Sem uma avaliação adequada, decisões importantes acabam sendo tomadas com base em suposições, o que aumenta significativamente os riscos envolvidos.",
      "A CROMO realiza estudos de viabilidade completos, avaliando os pontos fortes e limitações do projeto, além de analisar custos, materiais, tecnologias necessárias e possíveis riscos envolvidos. Também consideramos cenários alternativos e variáveis externas que podem impactar a execução e o desempenho do projeto ao longo do tempo. A partir disso, construímos uma visão clara sobre a possibilidade real de implementação e retorno.",
      "Com uma abordagem baseada em engenharia e análise estratégica, ajudamos você a tomar decisões mais seguras, evitando prejuízos e direcionando esforços para projetos com maior chance de sucesso e sustentabilidade no longo prazo.",
    ],
  },
  benefits: [
    { title: "Redução de riscos técnicos e financeiros", description: "Identificamos e quantificamos os principais riscos para mitigar impactos antes da execução.", Icon: TrendingUp },
    { title: "Análise clara de custos e recursos", description: "Estimativas detalhadas de custos, materiais e recursos necessários para executar o projeto.", Icon: FileText },
    { title: "Maior segurança na tomada de decisão", description: "Entregamos dados e recomendações que permitem decisões baseadas em evidência, não em suposições.", Icon: ShieldCheck },
    { title: "Identificação de limitações e oportunidades", description: "Detectamos restrições técnicas e oportunidades de melhoria ou inovação no conceito.", Icon: Cog },
    { title: "Planejamento mais estratégico do projeto", description: "Definimos cenários, prioridades e caminhos para execução com maior previsibilidade.", Icon: TrendingUp },
  ],
  headingLine1: "TOME DECISÕES SEGURAS",
  headingLine2: "FALE CONOSCO!",
  formSubtitle: "Decida analisando dados reais, não suposições. Fale com a Cromo e tenha a segurança técnica e financeira para avançar com seu projeto.",
};

export const metadata: Metadata = {
  title: "Estudo de Viabilidade | Cromo Consultoria",
  description: serviceInfo.description,
  openGraph: {
    url: "https://www.cromoconsultoria.com.br/servicos/estudodeviabilidade",
  }
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
      
      />

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

      <section className="py-16 md:py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-800/50">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cromo/5 rounded-full blur-[150px] pointer-events-none" />

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {serviceInfo.benefits.map((benefit, i) => {
              const Icon = benefit.Icon;

              return (
                <div
                  key={i}
                  className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:border-cromo-purple/50 hover:shadow-[0_0_30px_rgba(90,35,109,0.15)] group relative overflow-hidden flex flex-col"
                >
                  <div className="absolute -top-12 -left-12 w-32 h-32 bg-cromo-purple/20 blur-[50px] pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                  
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

      <Feedback />

      <ContactForm
        headingLine1={serviceInfo.headingLine1}
        headingLine2={serviceInfo.headingLine2}
        subtitle={serviceInfo.formSubtitle}
      />

    </main>
  );
}