import { Compass, Lightbulb, ShieldCheck, Target, Users } from "lucide-react";

const values = [
  { title: "Comprometimento", description: "Assumimos cada projeto com responsabilidade, presença e dedicação para entregar o melhor resultado possível.", icon: Target },
  { title: "Inovação", description: "Buscamos novas formas de resolver problemas e criar soluções de engenharia mais inteligentes e eficazes.", icon: Lightbulb },
  { title: "Proatividade", description: "Agimos com iniciativa, antecipando necessidades e construindo caminhos para a evolução contínua.", icon: Compass },
  { title: "Qualidade", description: "Mantemos foco em excelência técnica, consistência e atenção aos detalhes em cada entrega.", icon: Users },
  { title: "Ética", description: "Conduzimos nossas relações e decisões com transparência, respeito e responsabilidade.", icon: ShieldCheck },
];

export default function Cultura() {
  return (
    <section id="nossos-valores" className="py-24 bg-zinc-900/30 border-y border-zinc-800/50 relative overflow-hidden" aria-labelledby="valores-title">
      <div className="container mx-auto px-6 relative z-10">
        <header className="text-center mb-16">
          <h2 id="valores-title" className="subtitle text-white">A nossa cultura</h2>
        </header>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 list-none p-0 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            const isWide = index === 0; 

            return (
              <li key={value.title} className={isWide ? "md:col-span-2 lg:col-span-2" : "col-span-1"}>
                <article className="h-full bg-zinc-950 border border-zinc-800/80 p-8 lg:p-10 rounded-[2rem] transition-all hover:bg-zinc-900 hover:border-cromo/30 group flex flex-col relative overflow-hidden">
                  <span className="absolute top-0 right-0 w-32 h-32 bg-cromo/5 blur-[50px] transition-opacity opacity-0 group-hover:opacity-100" aria-hidden="true" />
                  
                  <header className="flex items-center justify-between mb-8 relative z-10">
                    <span className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-cromo/50 transition-colors" aria-hidden="true">
                      <Icon className="w-5 h-5 text-zinc-400 group-hover:text-cromo" />
                    </span>
                    <span className="text-zinc-500 font-black text-2xl group-hover:text-zinc-700 transition-colors" aria-hidden="true">
                      0{index + 1}
                    </span>
                  </header>
                  <div className="mt-auto relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-zinc-100 group-hover:text-white mb-3 transition-colors">{value.title}</h3>
                    <p className="body-text text-zinc-500">{value.description}</p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}