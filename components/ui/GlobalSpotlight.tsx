// src/components/shared/GlobalSpotlight.tsx
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function GlobalSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      // clientX e clientY pegam a posição relativa à tela (viewport)
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isHovering) setIsHovering(true);
    };
    
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [isHovering]);

  return (
    <motion.div
      // fixed: acompanha a rolagem | z-[50]: fica acima do fundo mas abaixo de modais | pointer-events-none: não atrapalha o clique
      className="hidden md:block pointer-events-none fixed rounded-full blur-[100px] z-[50]"
      animate={{
        x: mousePosition.x - 240, 
        y: mousePosition.y - 220,
        opacity: isHovering ? 1 : 0,
      }}
      transition={{ 
        type: "tween", 
        ease: "easeOut", 
        duration: 0.1 // Um pouquinho mais rápido para acompanhar a navegação geral
      }}
      style={{
        width: "500px",
        height: "500px",
        // Opacidade levemente reduzida (0.10) para não estourar a leitura dos textos no resto do site
        background: "radial-gradient(circle, rgba(255, 200, 0, 0.22) 0%, rgba(0,0,0,0) 40%)",
        left: 0,
        top: 0,
      }}
    />
  );
}