"use client";

import { useState } from "react";
import EbookCard from "@/components/sections/ebooks/EbookCard";
import DownloadModal from "@/components/sections/ebooks/DownloadModal";
import { ebooksData, type Ebook } from "@/content/ebooks";

export default function EbooksCatalog() {
  const [selectedEbook, setSelectedEbook] = useState<Ebook | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {ebooksData.map((ebook, i) => (
          <EbookCard 
            key={i} 
            ebook={ebook} 
            onDownloadClick={setSelectedEbook} 
          />
        ))}
      </div>
      
      <DownloadModal 
        ebook={selectedEbook} 
        isOpen={!!selectedEbook} 
        onClose={() => setSelectedEbook(null)} 
      />
    </>
  );
}