"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { PortfolioProject } from "@/content/portfolio";
import { X, ChevronLeft, ChevronRight, Maximize2, Image as ImageIcon, ZoomIn, ZoomOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioGrid({ projects }: { projects: PortfolioProject[] }) {
  const totalProjects = projects.length;
  const projectsInLastRow = totalProjects % 3;

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => {
          const hasGallery = project.gallery && project.gallery.length > 1;

          return (
            <div
              key={index}
              className={`md:col-span-1 lg:col-span-4 bg-zinc-900 border border-zinc-800 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:border-cromo-purple/50 hover:shadow-[0_0_30px_rgba(90,35,109,0.15)] overflow-hidden flex flex-col group relative backface-hidden ${
                projectsInLastRow === 1 && index === totalProjects - 1 ? "lg:col-start-5"
                  : projectsInLastRow === 2 && index === totalProjects - 2 ? "lg:col-start-3"
                  : projectsInLastRow === 2 && index === totalProjects - 1 ? "lg:col-start-7"
                  : ""
              }`}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cromo-purple/10 blur-[60px] pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-0" />
              
              <div 
                className="relative w-full h-56 md:h-64 bg-zinc-900 overflow-hidden shrink-0 z-10 cursor-pointer"
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentIndex(0);
                  setScale(1);
                }}
              >
                {/* 1. MUDANÇA NA FOTO: Colorida por padrão, preto e branco só no md: */}
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700 scale-[1.02]"
                />
                
                <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-sm border border-zinc-700 px-3 py-1.5 rounded-full z-10">
                  <span className="text-[10px] font-bold tracking-widest text-cromo uppercase">
                    {project.category}
                  </span>
                </div>

                {/* 2. MUDANÇA NO ÍCONE: Visível por padrão (opacity-100), escondido e animado só no md: */}
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
                
                <h3 className="absolute bottom-5 left-6 right-6 text-xl md:text-2xl font-bold text-white group-hover:text-cromo transition-colors duration-300 z-10">
                  {project.title}
                </h3>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow space-y-6 relative z-10">
                {project.problema && (
                  <div>
                    <span className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest block mb-2">O Desafio</span>
                    <p className="body-text text-zinc-400 text-sm md:text-base">{project.problema}</p>
                  </div>
                )}
                {project.acao && (
                  <div>
                    <span className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest block mb-2">Solução Cromo</span>
                    <p className="body-text text-zinc-400 text-sm md:text-base">{project.acao}</p>
                  </div>
                )}
                {project.resultado && (
                  <div className="mt-auto pt-5 border-t border-zinc-800/50">
                    <span className="text-cromo font-bold text-[10px] uppercase tracking-widest block mb-2 transition-colors duration-300">O Resultado</span>
                    <p className="body-text text-zinc-200 text-sm md:text-base font-medium group-hover:text-white transition-colors duration-300">{project.resultado}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL / LIGHTBOX NO PORTAL (Mantido igual) */}
      {isMounted && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!isDragging.current) closeGallery();
              }} 
              className="fixed inset-0 z-[999999] flex items-center justify-center bg-zinc-950/95 backdrop-blur-xl"
            >
              <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex justify-between items-start sm:items-center z-20 pointer-events-none">
                
                <div 
                  className="text-white pointer-events-auto max-w-[70%] bg-zinc-900/90 backdrop-blur-md border border-zinc-800 px-5 py-3 rounded-2xl shadow-xl"
                  onClick={(e) => e.stopPropagation()} 
                >
                  <h3 className="text-lg sm:text-xl font-bold">{selectedProject.title}</h3>
                  <span className="text-cromo text-[10px] sm:text-xs font-bold tracking-widest uppercase">{selectedProject.client}</span>
                </div>
                
                <div 
                  className="flex items-center gap-3 pointer-events-auto"
                  onClick={(e) => e.stopPropagation()} 
                >
                  <div className="hidden sm:flex items-center gap-2 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-full p-1 shadow-xl">
                    <button onClick={handleZoomOut} className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-zinc-800" title="Afastar">
                      <ZoomOut size={20} />
                    </button>
                    <span className="text-xs font-bold text-zinc-500 min-w-[3ch] text-center">{scale * 100}%</span>
                    <button onClick={handleZoomIn} className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-zinc-800" title="Aproximar">
                      <ZoomIn size={20} />
                    </button>
                  </div>
                  
                  <button 
                    onClick={closeGallery}
                    className="w-12 h-12 flex items-center justify-center bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-full text-zinc-400 hover:text-white hover:border-cromo hover:bg-zinc-800 transition-all shadow-xl"
                    title="Fechar"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <motion.div
                  drag={scale > 1} 
                  dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
                  animate={scale === 1 ? { scale: 1, x: 0, y: 0 } : { scale }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onDragStart={() => { isDragging.current = true; }}
                  onDragEnd={() => { setTimeout(() => { isDragging.current = false; }, 150); }}
                  onClick={(e) => {
                    if (scale > 1) e.stopPropagation();
                  }}
                  className={`relative w-[90vw] max-w-5xl h-[70vh] sm:h-[80vh] ${scale > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'}`}
                >
                  <Image 
                    src={activeImages[currentIndex]} 
                    alt={`${selectedProject.title} - Imagem ${currentIndex + 1}`}
                    fill
                    className="object-contain pointer-events-none" 
                    quality={100}
                  />
                </motion.div>
              </div>

              {activeImages.length > 1 && (
                <>
                  <button 
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-zinc-900/80 border border-zinc-700 rounded-full text-white hover:bg-cromo hover:text-black hover:border-cromo transition-all z-20 shadow-xl"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-zinc-900/80 border border-zinc-700 rounded-full text-white hover:bg-cromo hover:text-black hover:border-cromo transition-all z-20 shadow-xl"
                  >
                    <ChevronRight size={24} />
                  </button>

                  <div 
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-zinc-900 border border-zinc-800 px-6 py-2 rounded-full text-xs font-bold tracking-widest text-zinc-400 z-20 shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="text-white">{currentIndex + 1}</span> / {activeImages.length}
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}