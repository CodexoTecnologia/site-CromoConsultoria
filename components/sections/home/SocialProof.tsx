// src/components/sections/home/SocialProof.tsx
"use client";
import { motion } from "framer-motion";

const metrics = [
  { label: "Projetos Entregues", value: "+150" },
  { label: "CSAT (Satisfação)", value: "98%" },
  { label: "Anos de Experiência", value: "+10" },
  { label: "Ranking PR Inovação", value: "Top 5" },
];

export default function SocialProof() {
  return (
    <section className="py-12 bg-cromo-dark border-b border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-zinc-800">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center space-y-2 px-4"
            >
              <span className="text-4xl md:text-5xl font-black text-cromo tracking-tighter">
                {metric.value}
              </span>
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-zinc-400">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}