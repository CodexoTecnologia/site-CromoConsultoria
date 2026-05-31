import { Metadata } from "next";
import Hero from "@/components/sections/shared/Hero";
import { TrendingUp, Cog, ShieldCheck, FileText } from "lucide-react";
import Feedback from "@/components/sections/home/Feedback";
import ContactForm from "@/components/sections/shared/ContactForm";

const serviceInfo = {
  title: "Estudo de ",
  titleHighlight: "Viabilidade",
  description: "Avaliamos a viabilidade técnica, econômica e comercial de projetos, garantindo decisões informadas e estratégicas.",
  heroImage: "/assets/images/servicos/viabilidade/hero-viabilidade.png",
  heroImageAlt: "Análise de Viabilidade Técnica e Econômica com gráficos e relatórios",
  copy: {
    title: "Segurança técnica e financeira antes do próximo passo",
    paragraphs: [
      "Tirar uma ideia do papel exige mais do que intuição. O Estudo de Viabilidade é a etapa crucial onde validamos se o seu projeto é tecnicamente possível, financeiramente viável e comercialmente atrativo para o mercado.",
      "Nossos engenheiros analisam profundamente os requisitos de materiais, custos de fabricação, processos produtivos e normas técnicas. Entregamos um panorama claro e realista, mitigando riscos antes mesmo de você investir grandes capitais em protótipos ou maquinário.",
      "Com dados precisos e análises criteriosas estruturadas pela Cromo, você ganha a segurança necessária para buscar investimentos, aprovar orçamentos internos ou pivotar a ideia no momento certo, economizando tempo e recursos valiosos.",
    ],
  },
  benefits: [
    { title: "Análise Econômica", description: "Projeção detalhada de custos de manufatura, materiais e operação para garantir a rentabilidade do seu projeto.", Icon: TrendingUp },
    { title: "Validação Técnica", description: "Avaliação rigorosa de processos produtivos, escolha de materiais e limitações de engenharia mecânica.", Icon: Cog },
    { title: "Mitigação de Riscos", description: "Identificação antecipada de gargalos técnicos e barreiras comerciais que podem travar o desenvolvimento.", Icon: ShieldCheck },
    { title: "Relatório Estratégico", description: "Documentação completa com o veredito claro e direcionamentos técnicos para os próximos passos.", Icon: FileText },
  ],
  headingLine1: "VAMOS",
  headingLine2: "VALIDAR SUA IDEIA?",
  formSubtitle: "Fale com nossos engenheiros e descubra se o seu projeto está pronto para sair do papel de forma segura.",
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
        // imagePosition="object-[center_70%]"
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