import Link from "next/link";
import { Metadata } from "next";


const serviceInfo = {
  title: "Prototipagem e Validação",
  description: "Criamos protótipos funcionais e validamos ideias antes do desenvolvimento completo, reduzindo riscos e custos.",
};

export const metadata: Metadata = {
  title: `${serviceInfo.title} | Cromo Consultoria`,
  description: serviceInfo.description,
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-32 pb-20 flex flex-col">
      <div className="container mx-auto px-4 sm:px-6 flex-grow">
        
        {/* Botão Voltar */}
        <Link 
          href="/servicos"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-cromo text-xs font-bold uppercase tracking-wider transition-colors mb-12"
        >
          ← Voltar para Serviços
        </Link>

        {/* Cabeçalho da Página */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-cromo" />
            <span className="text-cromo font-bold tracking-widest text-xs uppercase">
              Serviço Especializado
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            {serviceInfo.title}
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl border-l-2 border-zinc-800 pl-6">
            {serviceInfo.description}
          </p>
        </div>

        {/* Bloco de "Em Construção" chique */}
        <div className="mt-20 p-12 bg-zinc-900 border border-zinc-800 rounded-2xl text-center max-w-4xl relative overflow-hidden">
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