import { Metadata } from "next";
import Hero from "@/components/sections/shared/Hero";
import { GraduationCap, FileText, CheckCircle, TrendingUp, PackageOpen } from "lucide-react";
import Feedback from "@/components/sections/home/Feedback";
import ContactForm from "@/components/sections/shared/ContactForm";

const serviceInfo = {
  title: "Desenvolvimento de ",
  titleHighlight: "Produto",
  description: "Transformamos suas ideias em produtos físicos reais, com rigor técnico do conceito à fabricação.",
  heroImage: "/assets/images/servicos/desenvolvimento-de-produto/hero-desenvolvimento.png",
  heroImageAlt: "Engenheiros trabalhando em projeto CAD e medição de peças na indústria",
  copy: {
    title: "Da ideia ao mercado, com rigor técnico e visão de produto",
    paragraphs: [
      "Transformar uma ideia em um produto real exige muito mais do que criatividade. É necessário aplicar conhecimentos técnicos, realizar análises estruturadas e garantir que a solução seja funcional, viável e eficiente. Além disso, é fundamental considerar fatores como custo de produção, escalabilidade, durabilidade e adequação às necessidades do mercado.",
      "A CROMO atua em todas as etapas do desenvolvimento de produto, realizando dimensionamentos mecânicos e mecatrônicos, modelagens 2D e 3D, cálculos e simulações. Nosso processo é construído para reduzir incertezas e garantir que o produto final atenda às expectativas técnicas e práticas.",
      "Trabalhamos com metodologias ágeis, o que nos permite lidar com adversidades, adaptar rapidamente o projeto às mudanças de requisitos e manter flexibilidade ao longo de todo o desenvolvimento.",
      "Mantemos um acompanhamento frequente entre nossa equipe e o cliente, garantindo alinhamento contínuo, coerência nas decisões e maior controle sobre o resultado final. Além disso, nossas entregas podem incluir listas de fornecedores e fabricantes, estimativas de custos, manuais de uso, montagem e fabricação, bem como desenvolvimento de programação quando necessário.",
      "Dessa forma, garantimos um processo mais transparente, eficiente e completo, transformando ideias em soluções concretas, testáveis e prontas para aplicação no mercado.",
    ],
  },
  benefits: [
    { title: "Desenvolvimento Técnico Completo", description: "Atuamos em todas as etapas do projeto, do conceito inicial à validação final, com visão integrada de engenharia.", Icon: GraduationCap },
    { title: "Modelagem e Simulação", description: "Criamos modelagens 2D e 3D, cálculos e simulações para reduzir incertezas e validar a solução antes da execução.", Icon: FileText },
    { title: "Redução de Erros e Retrabalho", description: "Acompanhamento frequente e análises estruturadas ajudam a evitar falhas e a manter o projeto sob controle.", Icon: CheckCircle },
    { title: "Soluções Personalizadas", description: "Adaptamos cada entrega às exigências técnicas, operacionais e de mercado de cada cliente.", Icon: PackageOpen },
    { title: "Maior Previsibilidade do Resultado", description: "Consideramos custo, escalabilidade, durabilidade e viabilidade para orientar decisões mais seguras.", Icon: TrendingUp },
  ],
  headingLine1: "VAMOS DAR FORMA",
  headingLine2: "À SUA IDEIA COM ENGENHARIA?",
  formSubtitle: "Fale com a Cromo, transforme seu conceito em um produto real, funcional e pronto para o mercado.",
};

export const metadata: Metadata = {
  title: serviceInfo.title,
  description: serviceInfo.description,
  openGraph: {
    url: "https://www.cromoconsultoria.com.br/servicos/desenvolvimentodeproduto",
  }
};

export default function ServicePage() {
  return (
    // Trava principal do Dark Mode e z-index
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
            {/* Aplicado a classe .subtitle */}
            <h2 className="subtitle text-white mb-10">
              {serviceInfo.copy.title}
            </h2>
            <div className="space-y-6 border-l-2 border-zinc-800 pl-6 md:pl-8">
              {serviceInfo.copy.paragraphs.map((p, i) => (
                // Aplicado a classe .body-text
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
        
        {/* Glow de fundo da seção para dar volume */}
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
            
            {/* Aplicado a classe .subtitle */}
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
              // const number = String(i + 1).padStart(2, '0');

              return (
                <div
                  key={i}
                  className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:border-cromo-purple/50 hover:shadow-[0_0_30px_rgba(90,35,109,0.15)] group relative overflow-hidden flex flex-col"
                >
                  {/* Glow interno roxo */}
                  <div className="absolute -top-12 -left-12 w-32 h-32 bg-cromo-purple/20 blur-[50px] pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                  
                  <div className="mb-8 flex items-center justify-between relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-cromo group-hover:border-cromo/30 transition-colors duration-300 shadow-inner">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    {/* <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-700 group-hover:text-cromo-purple/70 transition-colors duration-300">
                      {number}
                    </span> */}
                  </div>

                  <h3 className="text-lg font-bold text-zinc-100 group-hover:text-white mb-4 relative z-10 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  {/* Aplicado a classe .body-text */}
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