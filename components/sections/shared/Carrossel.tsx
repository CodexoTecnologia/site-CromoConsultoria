"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface CarouselProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

export default function Carousel<T>({ data, renderItem }: CarouselProps<T>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="relative group">
      
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex gap-4 md:gap-6 touch-pan-y pl-2 py-2">
          {data.map((item, index) => (
            <div 
              key={index} 
              className="flex-[0_0_88%] min-w-0 sm:flex-[0_0_90%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        aria-label="Anterior"
        className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-full items-center justify-center text-white hover:text-cromo hover:border-cromo transition-all shadow-xl z-10 opacity-0 group-hover:opacity-100"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={scrollNext}
        aria-label="Próximo"
        className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-full items-center justify-center text-white hover:text-cromo hover:border-cromo transition-all shadow-xl z-10 opacity-0 group-hover:opacity-100"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="flex justify-center items-center gap-2 mt-6 md:mt-10">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            aria-label={`Ir para o slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === selectedIndex 
                ? "w-6 bg-cromo" 
                : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
            }`}
          />
        ))}
      </div>

    </div>
  );
}