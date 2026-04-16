// src/components/sections/home/SocialProof.tsx
"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

const metrics = [
  { label: "Projetos Entregues", to: 150, prefix: "+", suffix: "" },
  { label: "CSAT (Satisfação)", to: 98, prefix: "", suffix: "%" },
  { label: "Anos de Experiência", to: 10, prefix: "+", suffix: "" },
  { label: "Ranking PR Inovação", to: 5, prefix: "Top ", suffix: "" },
];

function AnimatedCounter({ to, prefix, suffix }: { to: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, to, {
        duration: 2.5, 
        ease: "easeOut", 
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = `${prefix}${Math.round(value)}${suffix}`;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, to, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export default function SocialProof() {
  return (
    <section className="py-12 bg-zinc-950 border-b border-zinc-800">
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
                <AnimatedCounter 
                  to={metric.to} 
                  prefix={metric.prefix} 
                  suffix={metric.suffix} 
                />
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