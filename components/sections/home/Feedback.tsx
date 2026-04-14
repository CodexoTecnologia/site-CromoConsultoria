// src/components/sections/home/Feedback.tsx
"use client";

import Carousel from "@/components/sections/shared/Carrossel";

const feedbacks = [
  {
    name: "Carlos Eduardo Silva",
    role: "Diretor Industrial | Metalúrgica Forte",
    content: "A Cromo conseguiu mapear um gargalo na nossa linha de usinagem que nos custava milhares de reais. O projeto de otimização se pagou em menos de 3 meses. Profissionalismo puro.",
  },
  {
    name: "Mariana Albuquerque",
    role: "CEO | AgroTech Innovations",
    content: "Nós tínhamos uma ideia, mas faltava a engenharia mecânica para viabilizar. A equipe da Cromo desenhou, prototipou e nos acompanhou até a emissão da patente. Essenciais para nosso negócio.",
  },
  {
    name: "Roberto Campos",
    role: "Gerente P&D | Polímeros S.A.",
    content: "O rigor técnico que eles trouxeram da UTFPR faz toda a diferença. Análises de materiais precisas e entrega pontual. Recomendo de olhos fechados.",
  },
  {
    name: "Fernanda Costa",
    role: "Fundadora | Mobilidade Elétrica BR",
    content: "Reforçaram o chassi do nosso principal produto sem adicionar peso. Engenharia de altíssimo nível, nos deram a segurança técnica que precisávamos para lançar no mercado.",
  }
];

export default function Feedback() {
  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-[#111111] relative overflow-hidden">
      {/* Detalhe de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cromo/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <header className="mb-16 md:mb-20 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <span className="text-cromo font-bold tracking-widest text-xs uppercase">Feedback</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            O que dizem os nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">Parceiros</span>
          </h2>
        </header>

        <Carousel 
          data={feedbacks}
          renderItem={(item) => (
            <div className="h-full bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 hover:border-cromo/50 transition-colors flex flex-col relative group backdrop-blur-sm">

              <div className="absolute top-6 right-8 text-cromo opacity-20 group-hover:opacity-100 transition-opacity">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-8 relative z-10 pt-4">
                "{item.content}"
              </p>
              
              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 font-bold border border-zinc-700">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm md:text-base">{item.name}</h4>
                  <p className="text-cromo text-[10px] md:text-xs uppercase tracking-wider font-bold mt-1">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          )}
        />
        
      </div>
    </section>
  );
}