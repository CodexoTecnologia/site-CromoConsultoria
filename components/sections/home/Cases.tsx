"use client";

import Carousel from "@/components/sections/shared/Carrossel";

const casesData = [
  {
    client: "Indústria Metalúrgica XYZ",
    title: "Redução de 30% no tempo de usinagem",
    description: "Otimizamos o processo de corte CNC implementando novos parâmetros de engenharia mecânica, gerando economia de R$ 200k anuais.",
    tag: "Otimização",
    metric: "-30%",
  },
  {
    client: "Startup AgroTech",
    title: "Prototipagem de Semeadora Automática",
    description: "Desenvolvimento do zero ao MVP validado de um mecanismo de plantio de precisão, culminando no registro da patente.",
    tag: "Prototipagem",
    metric: "Patenteado",
  },
  {
    client: "Fábrica de Polímeros",
    title: "Nacionalização de Componente Importado",
    description: "Engenharia reversa e estudo de viabilidade para fabricação local de válvulas de alta pressão, eliminando dependência externa.",
    tag: "Engenharia Reversa",
    metric: "ROI 4 meses",
  },
  {
    client: "Empresa de Mobilidade",
    title: "Adequação Estrutural de Chassis",
    description: "Análise de Elementos Finitos (FEA) para reforçar o chassi de veículos elétricos leves sem aumentar o peso total.",
    tag: "Estudo de Viabilidade",
    metric: "100% Seguro",
  }
];

export default function Cases() {
  return (
    <section id="cases" className="py-20 md:py-32 bg-[#0a0a0a] relative border-b border-zinc-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho da Seção */}
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-cromo"></div>
              <span className="text-cromo font-bold tracking-widest text-xs uppercase">Resultados Comprovados</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Cases de <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Sucesso</span>
            </h2>
          </div>
        </header>

        {/* Chamando o Carrossel Genérico */}
        <Carousel 
          data={casesData}
          renderItem={(item) => (
            <div className="h-full bg-[#111111] border border-zinc-800 rounded-2xl p-8 hover:border-zinc-600 transition-colors flex flex-col group">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase bg-zinc-800/50 px-3 py-1.5 rounded-full">
                  {item.tag}
                </span>
                <span className="text-cromo font-black text-xl">
                  {item.metric}
                </span>
              </div>
              
              <p className="text-sm text-zinc-500 font-mono mb-3">{item.client}</p>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cromo transition-colors">
                {item.title}
              </h3>
              
              <p className="text-zinc-400 text-sm leading-relaxed mt-auto">
                {item.description}
              </p>
            </div>
          )}
        />
        
      </div>
    </section>
  );
}