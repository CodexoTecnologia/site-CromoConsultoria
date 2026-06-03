"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { feedbacks } from "@/content/feedbacks";

export default function Feedbacks() {
  return (
    <section className="py-16 md:py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 justify-center mb-4">
            <div className="w-8 h-[2px] bg-cromo" />
            <h2 className="text-cromo font-bold tracking-widest text-[10px] uppercase">
              Feedbacks Reais
            </h2>
            <div className="w-8 h-[2px] bg-cromo" />
          </div>
          <div className="subtitle text-white mb-4">
            O que nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">parceiros dizem</span>
          </div>
          <p className="body-text text-zinc-400">Resultados que validam a nossa dedicação técnica.</p>
        </div>

        {/* TROCAMOS O GRID PELO FLEX COM JUSTIFY-CENTER */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
          {feedbacks.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl relative hover:border-cromo-purple/50 transition-colors group"
            >
              <Quote className="w-8 h-8 text-cromo/20 mb-6 group-hover:text-cromo-purple/50 transition-colors" />
              
              <p className="body-text text-zinc-300 mb-8 italic">"{t.content}"</p>
              
              <div className="flex items-center justify-between mt-auto border-t border-zinc-800 pt-6">
                <div>
                  {/* TAG <p> NO NOME DO CLIENTE PARA GABARITAR O SEO */}
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-cromo text-[10px] uppercase tracking-widest font-bold">{t.role}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-cromo fill-cromo" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}