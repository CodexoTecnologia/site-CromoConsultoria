"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Maximize2, X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpandableImageProps {
  src: string;
  alt: string;
  className?: string;
  gallery?: string[]; // NOVA PROPRIEDADE: Array de fotos para a galeria
}

export default function ExpandableImage({ src, alt, className = "", gallery }: ExpandableImageProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const isDragging = useRef(false);

  useEffect(() => setIsMounted(true), []);

  // Define as imagens ativas: se tiver galeria usa ela, senão usa só a principal
  const activeImages = gallery && gallery.length > 0 ? gallery : [src];
  const hasGallery = activeImages.length > 1;

  const closeGallery = () => {
    setIsExpanded(false);
    setScale(1);
    // Opcional: resetar o index ao fechar
    // setCurrentIndex(0); 
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
      if (!isExpanded) return;
      if (e.key === "Escape") closeGallery();
      if (hasGallery) {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isExpanded, hasGallery]);

  useEffect(() => {
    if (isExpanded) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isExpanded]);

  return (
    <>
      {/* IMAGEM NA PÁGINA */}
      <div 
        className={`relative overflow-hidden cursor-pointer group transform-gpu ${className}`}
        onClick={() => setIsExpanded(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-all duration-700 scale-[1.02] group-hover:scale-105"
        />
        
        {/* Ícone dinâmico: Mostra a quantidade se for galeria, ou a setinha de expandir se for foto única */}
        <div className={`absolute top-4 right-4 bg-cromo text-zinc-950 rounded-full z-10 opacity-100 translate-y-0 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 shadow-lg flex items-center justify-center ${hasGallery ? 'px-3 py-1.5 gap-1.5' : 'p-2'}`}>
          {hasGallery ? (
            <>
              <ImageIcon size={16} />
              <span className="text-xs font-black leading-none">{activeImages.length}</span>
            </>
          ) : (
            <Maximize2 size={18} />
          )}
        </div>
      </div>

      {/* MODAL / LIGHTBOX (Renderizado na Raiz) */}
      {isMounted && createPortal(
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { if (!isDragging.current) closeGallery(); }}
              className="fixed inset-0 z-[999999] flex items-center justify-center bg-zinc-950/95 backdrop-blur-xl"
            >
              <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex justify-between items-start sm:items-center z-20 pointer-events-none">
                <div className="text-white pointer-events-auto max-w-[70%] bg-zinc-900/90 backdrop-blur-md border border-zinc-800 px-5 py-3 rounded-2xl shadow-xl">
                  <h3 className="text-lg sm:text-xl font-bold">{alt}</h3>
                </div>
                
                <div className="flex items-center gap-3 pointer-events-auto">
                  <div className="hidden sm:flex items-center gap-2 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-full p-1 shadow-xl">
                    <button onClick={handleZoomOut} className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-zinc-800" title="Afastar">
                      <ZoomOut size={20} />
                    </button>
                    <span className="text-xs font-bold text-zinc-500 min-w-[3ch] text-center">{scale * 100}%</span>
                    <button onClick={handleZoomIn} className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-zinc-800" title="Aproximar">
                      <ZoomIn size={20} />
                    </button>
                  </div>
                  
                  <button onClick={closeGallery} className="w-12 h-12 flex items-center justify-center bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-full text-zinc-400 hover:text-white hover:border-cromo hover:bg-zinc-800 transition-all shadow-xl" title="Fechar">
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
                  onClick={(e) => { if (scale > 1) e.stopPropagation(); }}
                  className={`relative w-[90vw] max-w-5xl h-[70vh] sm:h-[80vh] ${scale > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'}`}
                >
                  {/* Troca a foto com base no index atual da galeria */}
                  <Image src={activeImages[currentIndex]} alt={`${alt} - Imagem ${currentIndex + 1}`} fill sizes="100vw" className="object-contain pointer-events-none" />
                </motion.div>
              </div>

              {/* CONTROLES DA GALERIA (Setas e Contador) */}
              {hasGallery && (
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