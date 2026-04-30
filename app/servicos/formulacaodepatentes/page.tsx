import { Metadata } from "next";
import Hero from "@/components/sections/shared/Hero";
import { GraduationCap, FileText, CheckCircle, Clock } from "lucide-react";
import Feedback from "@/components/sections/home/Feedback";
import ContactForm from "@/components/sections/shared/ContactForm";

const serviceInfo = {
  title: "Formulação de Patentes",
  description: "Proteja sua inovação com documentação técnica precisa e estratégica para o INPI.",
  heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000",
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
  title: serviceInfo.title,
  description: serviceInfo.description,
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-zinc-950">

      <Hero
        imageSrc={serviceInfo.heroImage}
        imageAlt={serviceInfo.title}
        label="Serviço Especializado"
        title={serviceInfo.title}
        description={serviceInfo.description}
      />

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
