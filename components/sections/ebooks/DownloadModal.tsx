"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom"; // <-- O SEGREDO AQUI
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import dynamic from 'next/dynamic';
import type { Ebook } from "@/content/ebooks";

const PhoneInput = dynamic(() => import('react-phone-number-input').then(mod => mod.default), {
  ssr: false,
  loading: () => (
    <div className="w-full h-12 bg-black/50 border border-zinc-700 rounded-xl flex items-center px-4">
      <span className="text-zinc-500 text-xs">Carregando...</span>
    </div>
  ),
});

interface DownloadModalProps {
  ebook: Ebook | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ ebook, isOpen, onClose }: DownloadModalProps) {
  const [mounted, setMounted] = useState(false); // Evita erro de SSR no Next.js
  const [phoneValue, setPhoneValue] = useState<string | undefined>();
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setMounted(true); // Confirma que o componente montou no navegador
    
    if (typeof window !== 'undefined' && !document.querySelector('link[href*="react-phone-number-input"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/react-phone-number-input@3.4.14/style.css';
      link.media = 'all';
      document.head.appendChild(link);
    }
  }, []);

  const handleClose = () => {
    setPhoneValue(undefined);
    setIsPhoneValid(true);
    onClose();
  };

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ebook) return;
    
    // Validação do telefone
    if (!phoneValue || phoneValue.length < 13 || phoneValue.length > 15) {
      setIsPhoneValid(false);
      return;
    }
    
    setIsSubmitting(true);

    // Criamos o formData para enviar para nossa API centralizada
    const formData = new FormData(e.currentTarget);
    formData.append("telefone", phoneValue);
    formData.append("ebook_baixado", ebook.title);

    try {
      // Chama nossa API interna que agora gerencia o envio para o Sheets correto
      const response = await fetch('/api/contato', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).dataLayer?.push({ event: 'ebook_form_submit', ebook_title: ebook.title });
        if (ebook.driveUrl) {
          window.open(ebook.driveUrl, "_blank");
        }
        handleClose();
      } else {
        alert("Ocorreu um erro ao processar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao salvar lead:", error);
      alert("Erro de conexão. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Se não estiver no navegador ainda, não renderiza o portal
  if (!mounted) return null;

  // Renderiza o modal direto no <body> do site, passando por cima de tudo
  return createPortal(
    <AnimatePresence>
      {isOpen && ebook && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] bg-zinc-950/90 backdrop-blur-md"
            onClick={handleClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] w-[90%] max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] p-6 md:p-8 overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-cromo/10 blur-[50px] pointer-events-none" />

            <button 
              onClick={handleClose} 
              className="absolute top-2 right-2 text-zinc-500 hover:text-white hover:bg-zinc-800 p-4 rounded-full transition-all z-[60] cursor-pointer touch-manipulation"
              aria-label="Fechar"
            >
              <X size={24} />
            </button>

            <div className="mb-6 relative z-10">
              <span className="text-cromo text-[10px] font-bold uppercase tracking-widest">Acesso Gratuito</span>
              <h3 className="text-xl font-bold text-white mt-2 leading-tight">Preencha para acessar: <br/> <span className="text-zinc-400 text-base font-medium">{ebook.title}</span></h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">Nome Completo *</label>
                <input 
                  type="text" 
                  name="nome" 
                  required 
                  placeholder="Seu nome" 
                  className="w-full bg-zinc-950 border border-zinc-800 p-3.5 text-sm text-white outline-none focus:border-cromo transition-all rounded-xl placeholder:text-zinc-600" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">E-mail Corporativo *</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="voce@empresa.com.br" 
                  className="w-full bg-zinc-950 border border-zinc-800 p-3.5 text-sm text-white outline-none focus:border-cromo transition-all rounded-xl placeholder:text-zinc-600" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1 flex items-center justify-between">
                  <span>WhatsApp *</span>
                  {!isPhoneValid && <span className="text-red-500 animate-pulse bg-red-500/10 px-2 py-0.5 rounded">INVÁLIDO</span>}
                </label>
                <div className={`transition-colors rounded-xl overflow-hidden border ${!isPhoneValid ? 'border-red-500/50 bg-red-500/5' : 'border-zinc-800 focus-within:border-cromo bg-zinc-950'}`}>
                  <PhoneInput
                    international
                    defaultCountry="BR"
                    limitMaxLength={true}
                    value={phoneValue}
                    onChange={(val) => {
                      setPhoneValue(val);
                      if (!isPhoneValid) setIsPhoneValid(true);
                    }}
                    countrySelectProps={{ className: "bg-transparent text-white border-none outline-none pl-3" }}
                    className="w-full p-3.5 text-sm text-white outline-none"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full mt-8 bg-cromo text-zinc-950 font-black text-xs tracking-widest uppercase py-4 rounded-xl shadow-[0_0_20px_rgba(255,199,0,0.15)] hover:bg-white hover:shadow-[0_0_30px_rgba(255,199,0,0.3)] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {isSubmitting ? "Liberando Acesso..." : "Acessar Material Agora"}
              </button>
              <p className="text-center text-[10px] text-zinc-600 mt-4 font-medium">Suas informações estão seguras conosco.</p>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body // <-- E AQUELA MÁGICA FINAL ACONTECE AQUI
  );
}