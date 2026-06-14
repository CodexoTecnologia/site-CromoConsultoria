import ExpandableImage from "@/components/ui/ExpandableImage";
import { Rocket, Target } from "lucide-react";

const mission = { title: "Missão", description: "Projetar sonhos que diminuam o distanciamento tecnológico existente entre a comunidade e a universidade enfrentando desafios que gerem evolução pessoal e profissional aos nossos clientes internos e externos.", icon: Target };
const vision = { title: "Visão", description: "Em 2026, seremos donos do que fazemos, atuando com organização, agilidade e seriedade para alcançar nossas ambições, buscando ser autênticos e inovadores, gerando valor ao membro e ampliando nosso alcance e visibilidade.", icon: Rocket };

export default function Identidade() {
  return (
    <section id="o-que-e-cromo" className="py-24 bg-zinc-950 relative" aria-labelledby="identidade-title">
      <div className="container mx-auto px-6">
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <h2 id="identidade-title" className="subtitle text-white mb-6">
            A nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">identidade</span>
          </h2>
          <p className="body-text text-zinc-300 max-w-2xl mx-auto">Gerando aprendizado prático para os membros e valor concreto e mensurável para os nossos clientes.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <figure className="m-0 relative group lg:col-span-5">
            <div className="absolute inset-0 bg-cromo/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" aria-hidden="true" />
            <ExpandableImage
              src="/assets/images/sobre/cultura.jpg"
              alt="Planejamento técnico e estratégico da equipe Cromo"
              className="w-full aspect-[4/3] lg:aspect-[1/1] rounded-[2rem] border border-zinc-800 shadow-2xl relative z-10 object-cover"
              // gallery={["/assets/images/sobre/cultura.jpg"]}
            />
          </figure>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 list-none p-0 self-center lg:col-span-7">
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
                    <p className="body-text text-zinc-300">{item.description}</p>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}