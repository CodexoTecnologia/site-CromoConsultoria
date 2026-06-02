import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/shared/Hero";
import ExpandableImage from "@/components/ui/ExpandableImage";
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
  title: "Sobre Nós | Cromo Consultoria",
  description:
    "Conheça a Cromo Consultoria, Empresa Júnior da UTFPR que conecta universidade e mercado com soluções em engenharia.",
};

const values = [
  { title: "Comprometimento", description: "Assumimos cada projeto com responsabilidade, presença e dedicação para entregar o melhor resultado possível.", icon: Target },
  { title: "Inovação", description: "Buscamos novas formas de resolver problemas e criar soluções de engenharia mais inteligentes e eficazes.", icon: Lightbulb },
  { title: "Proatividade", description: "Agimos com iniciativa, antecipando necessidades e construindo caminhos para a evolução contínua.", icon: Compass },
  { title: "Qualidade", description: "Mantemos foco em excelência técnica, consistência e atenção aos detalhes em cada entrega.", icon: Users },
  { title: "Ética", description: "Conduzimos nossas relações e decisões com transparência, respeito e responsabilidade.", icon: ShieldCheck },
];

const mission = {
  title: "Missão",
  description:
    "Desenvolver soluções em engenharia com qualidade, contribuindo para o crescimento dos clientes e a formação de profissionais capacitados.",
  icon: Target,
};

const vision = {
  title: "Visão",
  description: "Ser referência em projetos de engenharia no movimento empresa júnior.",
  icon: Rocket,
};

const pillars = [
  { title: "Contexto VUCA", description: "Atuamos com leitura de cenário volátil, incerto, complexo e ambíguo para tomar decisões mais inteligentes.", icon: ShieldCheck },
  { title: "Manifesto Ágil", description: "Nosso trabalho prioriza colaboração, entregas contínuas e adaptação rápida para resolver o problema certo.", icon: Rocket },
];

const resourceFocus = [
  { title: "Capacitação dos membros", description: "Investimos em desenvolvimento pessoal e profissional com cursos e vivência empresarial." },
  { title: "Estruturação da empresa", description: "Priorizamos ferramentas e ambiente de trabalho para elevar performance, qualidade e consistência de entrega." },
];

export default function SobreNosPage() {
  return (
    <main className="min-h-screen bg-zinc-950 relative z-10 w-full">
      <Hero
        imageSrc="/assets/images/home/equipe-home.png"
        imageAlt="Equipe Cromo Consultoria"
        label="Empresa Júnior"
        title="Sobre"
        titleHighlight="Nós"
        description="A Cromo Consultoria é uma empresa júnior vinculada à Universidade Tecnológica Federal do Paraná (UTFPR), campus Curitiba."
        imagePosition="object-[center_30%]"
      />

      {/* QUEM SOMOS */}
      <section className="py-16 md:py-24 bg-zinc-950 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl space-y-7">
              <div className="flex items-center gap-3">
                <div className="w-12 h-[2px] bg-cromo" />
                <span className="text-cromo font-bold tracking-widest text-[10px] uppercase">Quem Somos</span>
              </div>
              <h2 className="subtitle text-white leading-tight">
                Engenharia com <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">propósito e impacto</span>.
              </h2>
              <p className="body-text text-zinc-400 border-l-2 border-zinc-800 pl-6">
                A Cromo Consultoria é uma empresa júnior vinculada à Universidade Tecnológica Federal do Paraná (UTFPR), campus Curitiba. Formada por estudantes de engenharia mecânica, mecatrônica e produção, a empresa tem como propósito desenvolver soluções em engenharia que atendam às necessidades do mercado, proporcionando aos seus membros experiência prática e desenvolvimento profissional.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="#o-que-e-cromo" className="inline-flex items-center justify-center rounded-xl bg-cromo px-6 py-3.5 text-[10px] sm:text-xs font-black uppercase tracking-widest text-zinc-950 transition-all shadow-[0_0_20px_rgba(255,199,0,0.15)] hover:bg-white hover:shadow-[0_0_30px_rgba(255,199,0,0.3)] hover:-translate-y-1 focus:ring-2 focus:ring-white focus:outline-none">
                  Entender a Cromo
                </Link>
                <Link href="#contato" className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3.5 text-[10px] sm:text-xs font-black uppercase tracking-widest text-zinc-200 transition-all hover:border-cromo hover:text-cromo hover:-translate-y-1">
                  Falar com a equipe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE É A CROMO */}
      <section id="o-que-e-cromo" className="py-16 md:py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-800/50">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            
            <div className="space-y-8 lg:order-2">
              <div>
                <h2 className="subtitle text-white mb-6">O que é a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">Cromo</span></h2>
                <p className="body-text text-zinc-400 mb-4">A Cromo Consultoria é uma empresa júnior vinculada à UTFPR, campus Curitiba, formada por estudantes de engenharia mecânica, mecatrônica e produção.</p>
                <p className="body-text text-zinc-400">Nosso propósito é desenvolver soluções em engenharia que atendam às necessidades do mercado, gerando aprendizado prático para os membros e valor concreto para os clientes.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <article key={pillar.title} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:border-cromo-purple/50 hover:shadow-[0_0_30px_rgba(90,35,109,0.15)] group relative overflow-hidden flex flex-col">
                      <div className="absolute -top-12 -left-12 w-24 h-24 bg-cromo-purple/20 blur-[40px] pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                      <Icon className="w-6 h-6 text-zinc-500 group-hover:text-cromo transition-colors duration-300 mb-4 relative z-10" />
                      <h3 className="text-white font-bold mb-2 relative z-10">{pillar.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed relative z-10">{pillar.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* APLICANDO COMPONENTE EXPANDABLE NA PRIMEIRA FOTO */}
            <ExpandableImage
              src="/assets/images/sobre/equipe-talk1.png"
              alt="Planejamento técnico e estratégico de projetos"
              className="w-full aspect-square lg:aspect-[4/5] rounded-3xl border border-zinc-800 shadow-2xl lg:order-1"
              gallery={[
                "/assets/images/sobre/equipe-talk1.png",
                "/assets/images/sobre/equipe-talk2.png"
              ]} 
            />

          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 mt-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[mission, vision].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="bg-zinc-900 border border-zinc-800 p-8 lg:p-10 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:border-cromo-purple/50 hover:shadow-[0_0_30px_rgba(90,35,109,0.15)] group relative overflow-hidden flex flex-col"
                >
                  <div className="absolute -top-12 -left-12 w-32 h-32 bg-cromo-purple/20 blur-[50px] pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="w-14 h-14 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-cromo/30 transition-colors duration-300 shadow-inner relative z-10">
                    <Icon className="w-6 h-6 text-zinc-400 group-hover:text-cromo transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white mb-4 relative z-10 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="body-text text-zinc-400 relative z-10">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* NOSSOS VALORES */}
      <section id="nossos-valores" className="py-20 md:py-32 bg-zinc-950 relative overflow-hidden border-t border-zinc-800/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cromo/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-cromo" />
              <span className="text-cromo font-bold tracking-widest text-[10px] uppercase">A nossa cultura</span>
              <div className="w-8 h-[2px] bg-cromo" />
            </div>
            <h2 className="subtitle text-white">Nossos Valores</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article key={value.title} className="bg-zinc-900 border border-zinc-800 p-8 lg:p-10 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:border-cromo-purple/50 hover:shadow-[0_0_30px_rgba(90,35,109,0.15)] group relative overflow-hidden flex flex-col">
                  <div className="absolute -top-12 -left-12 w-32 h-32 bg-cromo-purple/20 blur-[50px] pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="w-14 h-14 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-cromo/30 transition-colors duration-300 shadow-inner relative z-10">
                    <Icon className="w-6 h-6 text-zinc-400 group-hover:text-cromo transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white mb-4 relative z-10 transition-colors duration-300">{value.title}</h3>
                  <p className="body-text text-zinc-400 relative z-10">{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* RECURSOS */}
      <section className="py-16 bg-zinc-950 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-5xl mx-auto rounded-3xl border border-zinc-800 bg-zinc-900 p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cromo/5 blur-[80px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 relative z-10">Onde aplicamos nossos recursos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {resourceFocus.map((item, index) => {
                const number = String(index + 1).padStart(2, '0');
                return (
                  <article key={item.title} className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 transition-all duration-500 hover:border-cromo-purple/50 hover:shadow-[0_0_20px_rgba(90,35,109,0.1)] relative overflow-hidden group/card">
                    <div className="absolute -top-8 -left-8 w-20 h-20 bg-cromo-purple/20 blur-[30px] pointer-events-none transition-opacity duration-500 opacity-0 group-hover/card:opacity-100" />
                    <div className="flex justify-between items-start mb-3 relative z-10">
                      <h3 className="text-cromo text-[11px] uppercase tracking-widest font-black">{item.title}</h3>
                      <span className="text-[10px] font-bold text-zinc-700 group-hover/card:text-cromo transition-colors">{number}</span>
                    </div>
                    <p className="body-text text-zinc-400 relative z-10">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* MOVIMENTO EJ */}
      <section id="movimento-ej" className="py-16 md:py-24 bg-zinc-950 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-5xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-12 items-center">
            
            <div className="flex-1 space-y-6">
              <span className="text-cromo font-black text-[10px] uppercase tracking-[0.3em]">Conexão MEJ</span>
              <h2 className="subtitle text-white leading-tight">Movimento Empresa Júnior</h2>
              <p className="body-text text-zinc-400">
                Fazemos parte do maior movimento de empreendedorismo jovem do mundo. Na Cromo, isso se traduz em projetos de alto impacto, desenvolvimento de lideranças e evolução profissional contínua.
              </p>
            </div>
            
            <div className="w-full md:w-1/3 flex justify-center shrink-0">
              <ExpandableImage
                src="/assets/images/sobre/equipe-ecoar.png"
                alt="Equipe no evento ECOAR do Movimento Empresa Júnior"
                className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl border border-zinc-700 shadow-2xl"
              />
            </div>
            
          </div>
        </div>
      </section>

      <section id="contato" className="relative z-10">
        <ContactForm />
      </section>
    </main>
  );
}