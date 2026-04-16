// src/app/sobre/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Target, Users, Compass, Lightbulb } from "lucide-react";
import ContactForm from "@/components/sections/shared/ContactForm";

export const metadata: Metadata = {
  title: "Sobre Nós | Cromo Consultoria",
  description: "Conheça a história da Cromo, os nossos valores e a nossa actuação no Movimento Empresa Júnior.",
};

export default function SobreNosPage() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-32 pb-10">

      <section className="container mx-auto px-4 sm:px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-cromo" />
              <span className="text-cromo font-bold tracking-widest text-xs uppercase">
                Quem Somos
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-8">
              Engenharia que <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">
                Gera Valor.
              </span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed border-l-2 border-zinc-800 pl-6">
              A cultura da nossa empresa torna nossa equipe um diferencial dentro do mercado competitivo.
            </p>
          </div>
          <div className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl group">
            <Image 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000" 
              alt="Escritório Cromo" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative aspect-square rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl order-2 lg:order-1 group">
            <Image 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000" 
              alt="Projeto de Engenharia e Planejamento" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
              unoptimized
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">A ponte entre a academia e a indústria.</h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed text-lg">
              <p>
                A Cromo é mais do que uma consultoria; somos um centro de desenvolvimento tecnológico focado em resultados. Nascida dentro da UTFPR, carregamos no nosso ADN a precisão científica e o compromisso com a inovação.
              </p>
              <p>
                Apoiamos empresas na criação de novos produtos, otimização de linhas de produção e protecção de propriedade intelectual, garantindo que o conhecimento técnico se traduza em vantagem competitiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 border-y border-zinc-800 py-24 mb-32 relative overflow-hidden">

        <div className="absolute top-0 right-0 w-96 h-96 bg-cromo/5 rounded-full blur-[100px] pointer-events-none translate-x-1/4 -translate-y-1/4" />

        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cromo/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/4 translate-y-1/4" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white">Nossos Valores</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { 
                title: "Sangue nos Olhos", 
                desc: "Senso crítico para analisar o que já foi feito, assertividade para saber o que precisa fazer e autonomia para melhorar o que temos.",
                icon: <Target className="w-6 h-6 text-cromo" />
              },
              { 
                title: "Inteligência Coletiva", 
                desc: "Valorização do cliente interno prezando pela assertividade na comunicação, empatia por todos e a troca de conhecimento.",
                icon: <Users className="w-6 h-6 text-cromo" />
              },
              { 
                title: "Autonomia e Protagonismo", 
                desc: "Ser dono da sua própria história e protagonista de suas tarefas e responsabilidades, assumindo a liderança em seu capítulo dentro da Cromo.",
                icon: <Compass className="w-6 h-6 text-cromo" />
              },
              { 
                title: "Foco em Solução", 
                desc: "Buscar a satisfação do cliente interno e externo de forma que ambos se desenvolvam.",
                icon: <Lightbulb className="w-6 h-6 text-cromo" />
              }
            ].map((valor, i) => (
              <div key={i} className="bg-zinc-950 border border-zinc-800 p-8 lg:p-10 rounded-2xl hover:border-cromo group transition-all duration-300 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-cromo/5 rounded-full blur-3xl group-hover:bg-cromo/10 transition-colors" />

                <div className="w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cromo/50 transition-all shadow-lg">
                  {valor.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cromo transition-colors relative z-10">
                  {valor.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed relative z-10">
                  {valor.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 mb-32">
        <div className="max-w-5xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <span className="text-cromo font-black text-[10px] uppercase tracking-[0.3em]">Conexão MEJ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Orgulho de sermos uma Empresa Júnior.</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Fazemos parte do Movimento Empresa Júnior, a maior escola de empreendedorismo do mundo. Como uma EJ da UTFPR, somos movidos pelo propósito de formar líderes que transformam a realidade através de projectos de alto impacto social e económico.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-zinc-700 shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000" 
                alt="Equipa colaborativa" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                unoptimized
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