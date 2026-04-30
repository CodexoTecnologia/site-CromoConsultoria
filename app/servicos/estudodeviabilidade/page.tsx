import Link from "next/link";
import { Metadata } from "next";
import Hero from "@/components/sections/shared/Hero";

const serviceInfo = {
  title: "Estudo de Viabilidade",
  description: "Avaliamos a viabilidade técnica, econômica e comercial de projetos, garantindo decisões informadas e estratégicas.",
};

export const metadata: Metadata = {
  title: serviceInfo.title,
  description: serviceInfo.description,
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-zinc-950">

      <Hero
        imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000"
        imageAlt="Análise de Viabilidade Técnica e Econômica"
        label="Serviço Especializado"
        title="Estudo de"
        titleHighlight="Viabilidade"
        description={serviceInfo.description}
      />

      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="p-12 bg-zinc-900 border border-zinc-800 rounded-2xl text-center max-w-4xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cromo/5 blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-zinc-200 mb-4">
              Página em estruturação
            </h2>
            <p className="text-zinc-500 mb-8 max-w-lg mx-auto">
              Em breve disponibilizaremos cases específicos, metodologia detalhada e os benefícios exclusivos deste serviço.
            </p>

            <Link
              href="#contato"
              className="inline-block bg-cromo text-zinc-950 font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-cromo/10"
            >
              Falar com Especialista
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
