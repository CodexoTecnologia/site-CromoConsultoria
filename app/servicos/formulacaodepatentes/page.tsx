import { Metadata } from "next";
import Hero from "@/components/sections/shared/Hero";
import { GraduationCap, FileText, CheckCircle, Clock } from "lucide-react";
import Feedback from "@/components/sections/home/Feedback";
import ContactForm from "@/components/sections/shared/ContactForm";

const serviceInfo = {
  title: "Formulação de ",
  titleHighlight: "Patentes",
  description: "Proteja sua inovação com documentação técnica precisa e estratégica para o INPI.",
  heroImage: "/assets/images/servicos/formulacao-de-patentes/hero-patente.png",
  heroImageAlt: "Documentação estratégica e registro de patentes",
  copy: {
    title: "Proteja sua inovação antes que alguém o faça",
    paragraphs: [
      "Uma patente é o ativo mais valioso que uma empresa inovadora pode ter. Ela garante exclusividade, valoriza sua marca e impede que concorrentes copiem o que você construiu. Na Cromo, cuidamos de todo o processo de formulação.",
      "Elaboramos o relatório descritivo, reivindicações, desenhos técnicos e toda a documentação exigida pelo INPI, com linguagem precisa e estratégica para maximizar o escopo de proteção da sua invenção.",
      "Nossa equipe tem experiência em patentes de invenção, modelos de utilidade e desenhos industriais — atuando em produtos mecânicos, mecatrônicos e de engenharia em geral.",
    ],
  },
  benefits: [
    { title: "Experiência com INPI", description: "Conhecemos os critérios e exigências do INPI para maximizar as chances de aprovação.", Icon: GraduationCap },
    { title: "Documentação Estratégica", description: "Elaboramos reivindicações amplas e precisas para garantir o maior escopo de proteção.", Icon: FileText },
    { title: "Desenhos Técnicos", description: "Criamos os desenhos exigidos com qualidade e clareza para o processo de registro.", Icon: CheckCircle },
    { title: "Acompanhamento Total", description: "Monitoramos o andamento do pedido e respondemos às exigências do INPI.", Icon: Clock },
  ],
  headingLine1: "VAMOS",
  headingLine2: "PROTEGER SUA INVENÇÃO?",
  formSubtitle: "Nossa equipe está pronta para proteger sua inovação. Entre em contato agora.",
};

export const metadata: Metadata = {
  title: "Formulação de Patentes | Cromo Consultoria",
  description: serviceInfo.description,
  openGraph: {
    url: "https://www.cromoconsultoria.com.br/servicos/formulacaodepatentes",
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
        imagePosition="object-[center_30%]"
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