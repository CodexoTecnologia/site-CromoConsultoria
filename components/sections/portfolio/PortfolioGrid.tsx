"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { PortfolioProject } from "@/content/portfolio";
import { X, ChevronLeft, ChevronRight, Maximize2, Image as ImageIcon, ZoomIn, ZoomOut, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioGrid({ projects }: { projects: PortfolioProject[] }) {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(1);
  
  const isDragging = useRef(false);

  useEffect(() => setIsMounted(true), []);

  const activeImages = selectedProject 
    ? (selectedProject.gallery?.length ? selectedProject.gallery : [selectedProject.image])
    : [];

  const closeGallery = () => {
    setSelectedProject(null);
    setScale(1); 
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === activeImages.length - 1 ? 0 : prev + 1));
    setScale(1);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? activeImages.length - 1 : prev - 1));
    setScale(1);
  };

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.min(prev + 0.5, 4)); 
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.max(prev - 0.5, 1)); 
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, activeImages.length]);

  useEffect(() => {
    if (selectedProject) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedProject]);

  return (
    <>
      {/* 1. VOLTAMOS PRO GRID PERFEITAMENTE ALINHADO */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => {
          const hasGallery = project.gallery && project.gallery.length > 1;

          return (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:border-cromo/30 hover:shadow-[0_0_5px_rgba(255,255,255,0.15)] overflow-hidden flex flex-col group relative h-full"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cromo/10 blur-[60px] pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-0" />
              
              {/* IMAGEM DO CARD */}
              <div 
                className="relative w-full h-56 md:h-64 bg-zinc-900 overflow-hidden shrink-0 z-10 cursor-pointer"
                onClick={() => { setSelectedProject(project); setCurrentIndex(0); setScale(1); }}
              >
                {/* AJUSTE APLICADO AQUI: Priority e Sizes corretos */}
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700 scale-[1.02]"
                />
                
                <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-sm border border-zinc-700 px-3 py-1.5 rounded-full z-10">
                  <span className="text-[10px] font-bold tracking-widest text-cromo uppercase">
                    {project.category}
                  </span>
                </div>

                <div className={`absolute top-4 right-4 bg-cromo text-zinc-950 rounded-full z-10 opacity-100 translate-y-0 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 shadow-lg flex items-center justify-center ${hasGallery ? 'px-3 py-1.5 gap-1.5' : 'p-2'}`}>
                  {hasGallery ? (
                    <>
                      <ImageIcon size={16} />
                      <span className="text-xs font-black leading-none">{project.gallery!.length}</span>
                    </>
                  ) : (
                    <Maximize2 size={18} />
                  )}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80" />
                
                <h3 className="absolute bottom-5 left-6 right-6 text-xl font-bold text-white group-hover:text-cromo transition-colors duration-300 z-10 line-clamp-2">
                  {project.title}
                </h3>
              </div>

              {/* CONTEÚDO DO CARD (LIMITADO PARA TODOS TEREM A MESMA ALTURA) */}
              <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 bg-zinc-900 -mt-px">
                <p className="body-text text-zinc-400 text-sm line-clamp-5 mb-6">
                  {project.shortDescription}
                </p>
                
                <div 
                  className="mt-auto pt-5 border-t border-zinc-800/50 flex items-center justify-between cursor-pointer group/btn"
                  onClick={() => { setSelectedProject(project); setCurrentIndex(0); setScale(1); }}
                >
                  <span className="text-cromo font-bold text-[10px] uppercase tracking-widest group-hover/btn:text-white transition-colors">Ver Case Completo</span>
                  <ArrowRight size={16} className="text-cromo group-hover/btn:translate-x-1 group-hover/btn:text-white transition-all" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. O NOVO MODAL (TELA DIVIDIDA) */}
      {isMounted && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-zinc-950/90 backdrop-blur-md p-4 md:p-8">
              {/* Clicar fora fecha */}
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0" onClick={() => { if (!isDragging.current) closeGallery(); }} 
              />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-6xl h-full max-h-[850px] bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden z-10"
              >
                {/* BOTÃO FECHAR */}
                <button 
                  onClick={closeGallery}
                  className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center bg-zinc-900/80 backdrop-blur-md border border-zinc-700 rounded-full text-zinc-400 hover:text-white hover:bg-cromo hover:border-cromo transition-all shadow-xl"
                >
                  <X size={20} />
                </button>

                {/* METADE ESQUERDA: GALERIA E ZOOM */}
                <div className="w-full h-[40%] md:w-[55%] md:h-full relative bg-zinc-900/50 flex flex-col border-b md:border-b-0 md:border-r border-zinc-800">
                  <div className="absolute top-4 left-4 z-40 flex items-center gap-1 sm:gap-2 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-full p-1 shadow-xl">
                    <button onClick={handleZoomOut} className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-white rounded-full hover:bg-zinc-800"><ZoomOut size={16} /></button>
                    <span className="text-[10px] font-bold text-zinc-500 min-w-[3ch] text-center">{scale * 100}%</span>
                    <button onClick={handleZoomIn} className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-white rounded-full hover:bg-zinc-800"><ZoomIn size={16} /></button>
                  </div>

                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <motion.div
                      drag={scale > 1} 
                      dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
                      animate={scale === 1 ? { scale: 1, x: 0, y: 0 } : { scale }}
                      className={`relative w-full h-full ${scale > 1 ? 'cursor-grab active:cursor-grabbing' : ''}`}
                    >
                      <Image 
                        src={activeImages[currentIndex]} 
                        alt={`${selectedProject.title} - Imagem`}
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw" // <-- Ajustado para o tamanho real do modal
                        priority
                        className="object-contain pointer-events-none p-4 md:p-8"
                      />
                    </motion.div>
                  </div>

                  {activeImages.length > 1 && (
                    <>
                      <button onClick={prevImage} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-zinc-900/80 border border-zinc-700 rounded-full text-white hover:bg-cromo hover:text-black transition-all z-20"><ChevronLeft size={20} /></button>
                      <button onClick={nextImage} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-zinc-900/80 border border-zinc-700 rounded-full text-white hover:bg-cromo hover:text-black transition-all z-20"><ChevronRight size={20} /></button>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-zinc-900 border border-zinc-800 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-zinc-400 z-20">
                        <span className="text-white">{currentIndex + 1}</span> / {activeImages.length}
                      </div>
                    </>
                  )}
                </div>

                {/* METADE DIREITA: OS TEXTÕES DO CASE */}
                <div className="w-full h-[60%] md:w-[45%] md:h-full bg-zinc-950 p-6 md:p-10 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  <div className="pr-8">
                    <span className="text-cromo text-[10px] font-bold tracking-widest uppercase">{selectedProject.client}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-8">{selectedProject.title}</h3>
                  </div>

                  <div className="space-y-8">
                    {selectedProject.problema && (
                      <div>
                        <span className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 mb-3">
                          <div className="w-4 h-[1px] bg-zinc-700"/> O Desafio
                        </span>
                        <p className="text-zinc-300 text-sm leading-relaxed">{selectedProject.problema}</p>
                      </div>
                    )}
                    {selectedProject.acao && (
                      <div>
                        <span className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 mb-3">
                          <div className="w-4 h-[1px] bg-zinc-700"/> Solução Cromo
                        </span>
                        <p className="text-zinc-300 text-sm leading-relaxed">{selectedProject.acao}</p>
                      </div>
                    )}
                    {selectedProject.resultado && (
                      <div>
                        <span className="text-cromo font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 mb-3">
                          <div className="w-4 h-[1px] bg-cromo/50"/> O Resultado
                        </span>
                        <p className="text-white font-medium text-sm leading-relaxed">{selectedProject.resultado}</p>
                      </div>
                    )}
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}