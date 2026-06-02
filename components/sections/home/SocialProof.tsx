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
    <section className="py-16 md:py-20 bg-zinc-950 relative border-y border-zinc-800/50 overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-cromo-purple/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 md:gap-4 divide-x divide-zinc-800/50">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center px-2 sm:px-4"
            >
              {/* Número com animação */}
              <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-cromo tracking-tighter mb-2 drop-shadow-[0_0_15px_rgba(90,35,109,0.4)]">
                <AnimatedCounter 
                  to={metric.to} 
                  prefix={metric.prefix} 
                  suffix={metric.suffix} 
                />
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}