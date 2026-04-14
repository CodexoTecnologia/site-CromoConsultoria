"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface CarouselProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

export default function Carousel<T>({ data, renderItem }: CarouselProps<T>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex gap-6 touch-pan-y">
          {data.map((item, index) => (
            <div 
              key={index} 
              className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>


      <button
        onClick={scrollPrev}
        aria-label="Anterior"
        className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#111111] border border-zinc-800 rounded-full flex items-center justify-center text-white hover:text-cromo hover:border-cromo transition-all shadow-xl z-10 opacity-0 md:group-hover:opacity-100 disabled:opacity-0"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={scrollNext}
        aria-label="Próximo"
        className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#111111] border border-zinc-800 rounded-full flex items-center justify-center text-white hover:text-cromo hover:border-cromo transition-all shadow-xl z-10 opacity-0 md:group-hover:opacity-100 disabled:opacity-0"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}