"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Simulação Estrutural de Chassis",
    category: "Engenharia Mecânica",
    desc: "Análise de elementos finitos para redução de peso e aumento de rigidez torcional.",
    slug: "simulacao-chassis"
  },
  {
    title: "Braço Robótico Colaborativo",
    category: "Mecatrônica",
    desc: "Desenvolvimento de cinemática e controle para automação de linha de montagem.",
    slug: "braco-robotico"
  },
  {
    title: "Patente: Sistema de Irrigação Solar",
    category: "Propriedade Intelectual",
    desc: "Redação técnica e depósito de patente para tecnologia de agricultura de precisão.",
    slug: "patente-irrigacao"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        
        <header className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-cromo" />
            <span className="text-cromo font-bold tracking-widest text-xs uppercase">Nosso Trabalho</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white max-w-2xl leading-tight">
            Transformando teoria em <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">soluções tangíveis</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >

              <div className="relative aspect-[4/5] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 group-hover:border-cromo/50 transition-colors mb-6">
                <div className="absolute inset-0 bg-zinc-800 animate-pulse group-hover:scale-110 transition-transform duration-700 flex items-center justify-center text-zinc-700 font-mono text-xs">
                  [Imagem do Projeto]
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
              </div>

              {/* Texto */}
              <div className="space-y-2">
                <span className="text-cromo font-bold text-[10px] uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-cromo transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
            Ver Portfólio Completo <span className="text-cromo">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}