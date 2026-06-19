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

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 list-none p-0 max-w-4xl mx-auto">
          {[mission, vision].map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.title}>
                <article className="bg-zinc-900/50 border border-zinc-800 p-10 rounded-3xl h-full transition-all duration-300 hover:border-cromo/50 hover:bg-zinc-900 hover:-translate-y-1 hover:shadow-xl hover:shadow-cromo/5">
                  <header className="flex items-center gap-4 mb-6">
                    <span className="w-14 h-14 rounded-2xl bg-zinc-950 flex items-center justify-center border border-zinc-800 shrink-0" aria-hidden="true">
                      <Icon className="w-6 h-6 text-cromo" />
                    </span>
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  </header>
                  <p className="body-text text-zinc-300 leading-relaxed">{item.description}</p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}