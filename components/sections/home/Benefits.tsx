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
    <section id="beneficios" className="py-20 md:py-32 bg-[#0a0a0a] relative border-b border-zinc-800/50 overflow-hidden">

      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cromo/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cromo/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-cromo" />
                <span className="text-cromo font-bold tracking-widest text-xs uppercase">
                  Por que a Cromo?
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8">
                O diferencial competitivo que a sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">indústria precisa.</span>
              </h2>
              
              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                Não entregamos apenas projetos no papel. Entregamos soluções de engenharia que reduzem custos, otimizam processos e geram inovação palpável para o seu negócio.
              </p>

              <div className="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl group">
                <Image 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000" 
                  alt="Engenharia de Alta Performance" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 lg:pt-16">
            {benefitsData.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-cromo/50 p-8 md:p-10 rounded-3xl transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
   
                  <div className="flex-shrink-0 w-16 h-16 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-cromo transition-all shadow-lg">
                    {benefit.icon}
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cromo transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
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