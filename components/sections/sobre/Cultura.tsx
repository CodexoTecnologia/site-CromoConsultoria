import { Zap, Target, Users, Rocket } from "lucide-react";

const values = [
  { title: "Sangue nos olhos", description: "Damos tudo em cada projeto. Entregamos com determinação e paixão, do começo ao fim.", icon: Zap },
  { title: "Foco em solução", description: "Encaramos obstáculos com mentalidade prática e saímos direto para a ação. Não ficamos presos no problema — buscamos respostas eficazes, sem enrolação e sem perder tempo com o que não gera resultado.", icon: Target },
  { title: "Inteligência coletiva", description: "O resultado do grupo supera o individual. Compartilhamos conhecimento, debatemos ideias e tomamos decisões juntos, porque acreditamos que a soma das perspectivas é sempre mais poderosa do que qualquer talento isolado.", icon: Users },
  { title: "Autonomia e protagonismo", description: "Cada membro age como dono, assume responsabilidade e faz acontecer sem esperar que alguém resolva.", icon: Rocket },
];

export default function Cultura() {
  return (
    <section id="nossos-valores" className="py-24 bg-zinc-900/30 border-y border-zinc-800/50 relative overflow-hidden" aria-labelledby="valores-title">
      <div className="container mx-auto px-6 relative z-10">
        <header className="text-center mb-16">
          <h2 id="valores-title" className="subtitle text-white">Nossos Valores</h2>
        </header>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 list-none p-0 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            // Alterna: linha 1 → [estreito][largo], linha 2 → [largo][estreito]
            const colClass =
              index === 1 ? "lg:col-span-2" :
              index === 2 ? "lg:col-span-2" :
              "lg:col-span-1";

            return (
              <li key={value.title} className={colClass}>
                <article className="h-full bg-zinc-950 border border-zinc-800/80 p-8 lg:p-10 rounded-[2rem] transition-all hover:bg-zinc-900 hover:border-cromo/30 group flex flex-col relative overflow-hidden">
                  <span className="absolute top-0 right-0 w-32 h-32 bg-cromo/5 blur-[50px] transition-opacity opacity-0 group-hover:opacity-100" aria-hidden="true" />
                  
                  <header className="flex items-center justify-between mb-8 relative z-10">
                    <span className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-cromo/50 transition-colors" aria-hidden="true">
                      <Icon className="w-5 h-5 text-cromo md:text-zinc-400 md:group-hover:text-cromo" />
                    </span>
                    <span className="text-zinc-300 font-black text-2xl group-hover:text-zinc-700 transition-colors" aria-hidden="true">
                      0{index + 1}
                    </span>
                  </header>
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-zinc-100 group-hover:text-white mb-3 transition-colors">{value.title}</h3>
                    <p className="body-text text-zinc-300">{value.description}</p>
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