// src/app/conteudos/ebooks/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // IMPORTANTE: Adicionado o Image do Next.js
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import dynamic from 'next/dynamic';

const PhoneInput = dynamic(() => import('react-phone-number-input').then(mod => mod.default), {
  ssr: false,
  loading: () => (
    <div className="w-full h-12 bg-black/50 border border-zinc-700 rounded-xl flex items-center px-4">
      <span className="text-zinc-500 text-xs">Carregando...</span>
    </div>
  ),
});

// Adicionada a propriedade coverImage
const ebooks = [
  { 
    title: "Gestão de Projetos", 
    type: "PDF ", 
    size: "9.3 MB",
    driveUrl: "https://drive.google.com/file/d/1DaIoWJStc7_xl37dpT0h3vxnDPhZO1Ot/view?usp=drive_link",
    coverImage: "/assets/images/EBOOK-PATENTE-pggc4eat6k1d7ywmtbdv4ejpwlxbsfwshzk850u2ec.png"
  },
  { 
    title: "Viabilidade Técnica", 
    type: "PDF ", 
    size: "5.1 MB",
    driveUrl: "https://drive.google.com/file/d/1DaIoWJStc7_xl37dpT0h3vxnDPhZO1Ot/view?usp=drive_link",
    coverImage: "/assets/images/EBOOK-PATENTE-pggc4eat6k1d7ywmtbdv4ejpwlxbsfwshzk850u2ec.png"
  },
  { 
    title: "Guia de Patentes", 
    type: "PDF ", 
    size: "4.8 MB",
    driveUrl: "https://drive.google.com/file/d/1DaIoWJStc7_xl37dpT0h3vxnDPhZO1Ot/view?usp=drive_link",
    coverImage: "/assets/images/EBOOK-PATENTE-pggc4eat6k1d7ywmtbdv4ejpwlxbsfwshzk850u2ec.png"
  }
];

export default function EbooksPage() {
  const [selectedEbook, setSelectedEbook] = useState<typeof ebooks[0] | null>(null);
  const [phoneValue, setPhoneValue] = useState<string | undefined>();
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !document.querySelector('link[href*="react-phone-number-input"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/react-phone-number-input@3.4.14/style.css';
      link.media = 'all';
      document.head.appendChild(link);
    }
  }, []);

  const closeModal = () => {
    setSelectedEbook(null);
    setPhoneValue(undefined);
    setIsPhoneValid(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!phoneValue || phoneValue.length < 10) {
      setIsPhoneValid(false);
      return;
    }
    setIsPhoneValid(true);
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      nome: formData.get("nome"),
      email: formData.get("email"),
      telefone: phoneValue,
      ebook_baixado: selectedEbook?.title,
      data_hora: new Date().toLocaleString("pt-BR")
    };

    try {
      const GOOGLE_SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwznD5-TRiXq5B0oHB-xoB0GN6pRfYjW8tNYyksqepx13gkwGET77ZYZNoCuE1qqdRniQ/exec";

      await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (selectedEbook?.driveUrl) {
        window.open(selectedEbook.driveUrl, "_blank");
      }
      
      closeModal();
    } catch (error) {
      console.error("Erro ao salvar lead:", error);
      alert("Ocorreu um erro. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950 pt-32 pb-20 relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <Link href="/conteudos" className="text-zinc-500 hover:text-cromo text-xs font-bold uppercase tracking-widest mb-12 inline-block transition-colors">
          ← Voltar
        </Link>
        
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">E<span className="text-cromo">-Books</span></h1>
          <p className="text-zinc-400 max-w-xl">Conteúdo aprofundado para download gratuito. Conhecimento técnico ao seu alcance.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ebooks.map((ebook, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl flex flex-col items-center text-center group hover:border-cromo transition-all">
              
              {/* SUBSTUIÇÃO AQUI: De div "COVER" para o componente Image */}
              <div className="relative w-32 h-44 rounded-md shadow-2xl mb-6 overflow-hidden group-hover:scale-105 transition-transform border border-zinc-700">
                 {/* Se a imagem falhar (ex: caminho errado), o Next mostra um alt descritivo. 
                     Use object-cover para a imagem preencher a div perfeitamente. */}
                 <Image 
                   src={ebook.coverImage} 
                   alt={`Capa do E-book: ${ebook.title}`}
                   fill
                   className="object-cover"
                   sizes="(max-width: 768px) 100vw, 128px"
                 />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{ebook.title}</h3>
              <p className="text-xs text-zinc-500 uppercase tracking-widest mb-8">{ebook.type} • {ebook.size}</p>
              
              <button 
                onClick={() => setSelectedEbook(ebook)}
                className="w-full bg-zinc-800 hover:bg-cromo hover:text-black py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all"
              >
                Download Gratuito
              </button>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedEbook && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[101] bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[102] w-[90%] max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-6 md:p-8"
            >
              <button onClick={closeModal} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors">
                <X size={20} />
              </button>

              <div className="mb-6">
                <span className="text-cromo text-[10px] font-bold uppercase tracking-widest">Acesso Gratuito</span>
                <h3 className="text-xl font-bold text-white mt-2 leading-tight">Preencha para acessar: <br/> <span className="text-zinc-400 text-base font-normal">{selectedEbook.title}</span></h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">Nome Completo *</label>
                  <input 
                    type="text" 
                    name="nome" 
                    required 
                    placeholder="Seu nome" 
                    className="w-full bg-black/50 border border-zinc-700 p-3 text-sm text-white outline-none focus:border-cromo transition-all rounded-xl placeholder:text-zinc-600" 
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">E-mail *</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="voce@empresa.com.br" 
                    className="w-full bg-black/50 border border-zinc-700 p-3 text-sm text-white outline-none focus:border-cromo transition-all rounded-xl placeholder:text-zinc-600" 
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">
                    WhatsApp * {!isPhoneValid && <span className="text-red-500 animate-pulse">INVÁLIDO</span>}
                  </label>
                  <div className={`transition-colors rounded-xl overflow-hidden border ${!isPhoneValid ? 'border-red-500/50' : 'border-zinc-700 focus-within:border-cromo'}`}>
                    <PhoneInput
                      international
                      defaultCountry="BR"
                      value={phoneValue}
                      onChange={(val) => {
                        setPhoneValue(val);
                        if (!isPhoneValid) setIsPhoneValid(true);
                      }}
                      countrySelectProps={{ className: "bg-transparent text-white border-none outline-none pl-3" }}
                      className="w-full bg-black/50 p-3 text-sm text-white outline-none"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full mt-6 bg-cromo text-black font-black text-xs tracking-widest uppercase py-4 rounded-xl shadow-lg shadow-cromo/20 hover:bg-yellow-400 transition-all disabled:opacity-70 flex justify-center items-center gap-2"
                >
                  {isSubmitting ? "Liberando Acesso..." : "Acessar Material Agora"}
                </button>
                <p className="text-center text-[10px] text-zinc-600 mt-4">Suas informações estão seguras conosco.</p>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}