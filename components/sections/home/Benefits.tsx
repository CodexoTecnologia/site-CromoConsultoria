// src/components/sections/home/Benefits.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket, GraduationCap, ShieldCheck, TrendingUp } from "lucide-react";

const benefitsData = [
  {
    title: "Excelência Chancelada",
    desc: "Projetos desenvolvidos por mentes brilhantes e validados por professores doutores da UTFPR, garantindo rigor acadêmico com aplicação prática.",
    icon: <GraduationCap className="w-6 h-6 text-cromo" />,
  },
  {
    title: "Agilidade de Start-up",
    desc: "Sem a burocracia das grandes engenharias tradicionais. Operamos com metodologias ágeis para entregar soluções na velocidade que o seu mercado exige.",
    icon: <Rocket className="w-6 h-6 text-cromo" />,
  },
  {
    title: "Proteção de Ativos",
    desc: "Nossa engenharia tem foco em patenteabilidade. Não apenas resolvemos o seu problema, mas ajudamos a proteger a propriedade intelectual da sua empresa.",
    icon: <ShieldCheck className="w-6 h-6 text-cromo" />,
  },
  {
    title: "Investimento Inteligente",
    desc: "Como Empresa Júnior, somos isentos de fins lucrativos. Todo o seu investimento é revertido em tecnologia e educação, garantindo um custo-benefício imbatível.",
    icon: <TrendingUp className="w-6 h-6 text-cromo" />,
  }
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-16 md:py-20 lg:py-24 bg-zinc-950 relative border-b border-zinc-800/50 overflow-hidden">

      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-cromo/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cromo/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-28 space-y-6 md:space-y-8">
              
              <div>
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-8 h-[2px] bg-cromo" />
                  <span className="text-cromo font-bold tracking-widest text-[10px] uppercase">
                    Por que a Cromo?
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.15]">
                  O diferencial competitivo que a sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">indústria precisa.</span>
                </h2>
              </div>
              
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                Não entregamos apenas projetos no papel. Entregamos soluções de engenharia que reduzem custos, otimizam processos e geram inovação palpável para o seu negócio.
              </p>

              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group">
                <Image 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000" 
                  alt="Engenharia de Alta Performance" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 lg:pt-8">
            {benefitsData.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 hover:border-cromo/50 p-6 md:p-8 rounded-2xl transition-colors duration-300 group"
              >
                <div className="flex flex-col sm:flex-row gap-5 items-start">
   
                  <div className="flex-shrink-0 w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center group-hover:border-cromo transition-colors shadow-sm">
                    {benefit.icon}
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cromo transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}