"use client";

import { useState } from "react";
import Hero from "@/components/sections/shared/Hero";
import EbookCard from "@/components/sections/ebooks/EbookCard";
import DownloadModal from "@/components/sections/ebooks/DownloadModal";
import { ebooksData, type Ebook } from "@/content/ebooks";
import ContactForm from "@/components/sections/shared/ContactForm";

export default function EbooksPage() {
  const [selectedEbook, setSelectedEbook] = useState<Ebook | null>(null);

  return (
    <main className="min-h-screen bg-zinc-950 relative z-10 w-full">
      <Hero
        imageSrc="/assets/images/ebooks/hero-ebooks.png"
        imageAlt="E-Books Cromo Consultoria"
        label="Conteúdo Gratuito"
        title="Baixe Nossos"
        titleHighlight="E-Books"
        description="Conteúdo aprofundado para download gratuito. Conhecimento técnico ao seu alcance."
      />

      <section className="container mx-auto px-4 sm:px-6 relative z-10 pt-16 md:pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ebooksData.map((ebook, i) => (
            <EbookCard 
              key={i} 
              ebook={ebook} 
              onDownloadClick={setSelectedEbook} 
            />
          ))}
        </div>
      </section>
      
      {/* SEÇÃO DE CONTATO ADICIONADA AQUI */}
      <section id="contato" className="relative z-10">
        <ContactForm />
      </section>
      
      <DownloadModal 
        ebook={selectedEbook} 
        isOpen={!!selectedEbook} 
        onClose={() => setSelectedEbook(null)} 
      />
    </main>
  );
}