import ExpandableImage from "@/components/ui/ExpandableImage";
import { Rocket, ShieldCheck, Target } from "lucide-react";

const mission = { title: "Missão", description: "Desenvolver soluções em engenharia com qualidade, contribuindo para o crescimento dos clientes e a formação de profissionais capacitados.", icon: Target };
const vision = { title: "Visão", description: "Ser referência em projetos de engenharia no movimento empresa júnior.", icon: Rocket };

const pillars = [
  { title: "Contexto VUCA", description: "Atuamos com leitura de cenário volátil, incerto, complexo e ambíguo para tomar decisões mais inteligentes.", icon: ShieldCheck },
  { title: "Manifesto Ágil", description: "Nosso trabalho prioriza colaboração, entregas contínuas e adaptação rápida para resolver o problema certo.", icon: Rocket },
];

export default function Identidade() {
  return (
    <section id="o-que-e-cromo" className="py-24 bg-zinc-950 relative" aria-labelledby="identidade-title">
      <div className="container mx-auto px-6">
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <h2 id="identidade-title" className="subtitle text-white mb-6">
            A nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">identidade</span>
          </h2>
          <p className="body-text text-zinc-400 max-w-2xl mx-auto">Gerando aprendizado prático para os membros e valor concreto e mensurável para os nossos clientes.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <figure className="m-0 relative group">
            <div className="absolute inset-0 bg-cromo/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" aria-hidden="true" />
            <ExpandableImage
              src="/assets/images/sobre/equipe-talk1.png"
              alt="Planejamento técnico e estratégico da equipe Cromo"
              className="w-full aspect-square lg:aspect-[4/5] rounded-[2rem] border border-zinc-800 shadow-2xl relative z-10 object-cover"
              gallery={["/assets/images/sobre/equipe-talk1.png", "/assets/images/sobre/equipe-talk2.png"]} 
            />
          </figure>

          <div className="space-y-12">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 list-none p-0">
              {[mission, vision].map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.title}>
                    <article className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl h-full transition-colors hover:border-cromo/50">
                      <header className="flex items-center gap-4 mb-4">
                        <span className="w-12 h-12 rounded-xl bg-zinc-950 flex items-center justify-center border border-zinc-800" aria-hidden="true">
                          <Icon className="w-5 h-5 text-cromo" />
                        </span>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      </header>
                      <p className="body-text text-zinc-400">{item.description}</p>
                    </article>
                  </li>
                );
              })}
            </ul>

            <div className="pt-8 border-t border-zinc-900">
              <h3 className="text-sm font-black text-white uppercase tracking-widest mb-6">Nossos Pilares Operacionais</h3>
              <ul className="space-y-6 list-none p-0">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <li key={pillar.title} className="flex gap-4">
                      <Icon className="w-6 h-6 text-zinc-600 shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <h4 className="text-white font-bold mb-1">{pillar.title}</h4>
                        <p className="body-text text-zinc-500">{pillar.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}