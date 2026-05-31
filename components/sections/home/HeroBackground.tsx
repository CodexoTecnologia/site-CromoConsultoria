// src/components/sections/home/HeroBackground.tsx
// REMOVEMOS O "use client". Agora é Server Component!
import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-zinc-950 z-0">
      
      {/* 1. A SUA FOTO OTIMIZADA */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/home/bg-project.png"
          alt="Projeto de engenharia mecânica e mecatrônica em Curitiba"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[30%_50%] md:object-center opacity-40"
        />
      </div>

      {/* 2. A PELÍCULA ESCURA DE CONTRASTE */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10" />

      {/* 3. MÁSCARA INFERIOR */}
      <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-zinc-950 to-transparent z-30" />
      
    </div>
  );
}