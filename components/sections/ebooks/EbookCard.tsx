import Image from "next/image";
import type { Ebook } from "@/content/ebooks";

interface EbookCardProps {
  ebook: Ebook;
  onDownloadClick: (ebook: Ebook) => void;
}

export default function EbookCard({ ebook, onDownloadClick }: EbookCardProps) {
  return (
    <div className="relative group bg-zinc-900 border border-zinc-800 p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1 hover:border-cromo-purple/50 hover:shadow-[0_0_30px_rgba(90,35,109,0.15)] overflow-hidden h-full">
      {/* O ROXINHO (Fundo com Blur) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cromo-purple/20 blur-[60px] pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-0" />

      {/* OVERLAY CLICÁVEL (O Segredo da responsividade) 
          Ele fica invisível e cobre o card todo, mas só existe no PC (md:block).
          No celular (hidden) ele some, não atrapalha o scroll e obriga a clicar no botão. 
      */}
      <div 
        className="absolute inset-0 z-20 hidden md:block cursor-pointer" 
        onClick={() => onDownloadClick(ebook)} 
        aria-hidden="true"
      />

      {/* Conteúdo do Card (z-10 para ficar acima do brilho roxo) */}
      <div className="relative z-10 flex flex-col items-center w-full h-full">
        
        {/* Imagem (Removi o onClick daqui para não abrir no celular se o usuário esbarrar nela) */}
        <div className="relative w-32 h-44 rounded-md shadow-2xl mb-6 overflow-hidden border border-zinc-700 bg-zinc-950">
          <Image 
            src={ebook.coverImage} 
            alt={`Capa do E-book: ${ebook.title}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 128px"
          />
          <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
        </div>

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cromo transition-colors duration-300 pointer-events-none min-h-[56px] flex items-center justify-center">
          {ebook.title}
        </h3>
        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-8 font-mono pointer-events-none">
          {ebook.type} • {ebook.size}
        </p>
        
        {/* Botão (z-30 para ele ser a única coisa clicável no celular, e também funcionar no PC) */}
        <button 
          onClick={() => onDownloadClick(ebook)}
          className="w-full mt-auto relative z-30 overflow-hidden bg-cromo md:bg-zinc-800 group-hover:bg-cromo text-zinc-950 md:text-zinc-300 group-hover:text-zinc-950 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer shadow-lg shadow-cromo/20 md:shadow-none group-hover:shadow-[0_0_20px_rgba(255,199,0,0.3)]"
        >
          Download Gratuito
        </button>
      </div>
    </div>
  );
}