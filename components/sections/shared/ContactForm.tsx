// src/components/sections/shared/ContactForm.tsx
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';

const PhoneInput = dynamic(() => import('react-phone-number-input').then(mod => mod.default), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[46px] sm:h-[50px] bg-zinc-900 border border-white/10 rounded-lg flex items-center px-4">
      <div className="w-full text-zinc-500 text-[10px]">Carregando...</div>
    </div>
  ),
});

export default function Contact() {
  const [phoneValue, setPhoneValue] = useState<string | undefined>();
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isValidating, setIsValidating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  useEffect(() => {
    if (typeof window !== 'undefined' && !document.querySelector('link[href*="react-phone-number-input"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/react-phone-number-input@3.4.14/style.css';
      link.media = 'print'; 
      link.onload = () => { link.media = 'all' };
      document.head.appendChild(link);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsValidating(true);

    if (!phoneValue || phoneValue.trim() === '') {
      setIsPhoneValid(false);
      setIsValidating(false);
      return;
    }

    let valid = false;

    try {
      const { isValidPhoneNumber } = await import('react-phone-number-input');
       
      valid = isValidPhoneNumber(phoneValue);

      if (valid && phoneValue.startsWith('+55')) {
        const apenasNumeros = phoneValue.replace(/\D/g, '');
        if (apenasNumeros.length !== 12 && apenasNumeros.length !== 13) {
          valid = false;
        }
      }
    } catch (error) {
      console.error("Erro ao validar telefone", error);
      valid = true;
    }

    setIsPhoneValid(valid);
    setIsValidating(false);

    if (!valid) {
      return;
    }

    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xnnberyp', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
        setPhoneValue(undefined);
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 bg-[#111111] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFC700]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 relative z-10">
        
        <div className="space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#FFC700] font-bold text-[10px] sm:text-xs md:text-sm tracking-[0.4em] uppercase">
              Contato Cromo
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mt-3 sm:mt-4">
              VAMOS<br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC700] to-yellow-600">
                INOVAR JUNTOS?
              </span>
            </h2>
          </motion.div>
          
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
            <p className="text-zinc-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md border-l-2 border-[#FFC700] pl-4 sm:pl-5">
              Pronto para transformar sua ideia em realidade com engenharia de elite? Fale com nossos consultores.
            </p>
            
            <div className="p-6 sm:p-8 bg-zinc-900/80 border border-zinc-800 rounded-2xl space-y-4 shadow-xl relative overflow-hidden group backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFC700]/10 blur-[40px] group-hover:bg-[#FFC700]/20 transition-colors" />
              <p className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">Canais Oficiais:</p>
              <div className="space-y-2 text-sm sm:text-base md:text-lg font-medium">
                <p className="text-white hover:text-[#FFC700] transition-colors cursor-pointer break-all">contato@cromoconsultoria.com.br</p>
                <p className="text-zinc-400 font-mono">(41) 8728-8213</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-full"
        >
          <form 
            onSubmit={handleSubmit}
            method="POST"
            className="flex flex-col h-full space-y-4 md:space-y-6 p-6 sm:p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl md:rounded-3xl backdrop-blur-md shadow-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">Nome *</label>
                <input 
                  type="text" 
                  id="contact-name"
                  name="name" 
                  placeholder="Seu nome" 
                  required 
                  className="w-full bg-black/50 border border-zinc-700 p-3.5 text-xs sm:text-sm text-white outline-none focus:border-[#FFC700] transition-all rounded-xl placeholder:text-zinc-600" 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-phone" className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">
                  Telefone * {!isPhoneValid && <span className="text-red-500 ml-2 animate-pulse text-[10px]"> {phoneValue ? 'INVÁLIDO' : 'OBRIGATÓRIO'}</span>}
                </label>
                <div className={`codexo-phone-wrapper transition-colors rounded-xl overflow-hidden border ${!isPhoneValid ? 'border-red-500/50' : 'border-zinc-700 focus-within:border-[#FFC700]'}`}>
                  <PhoneInput
                    international
                    defaultCountry="BR"
                    limitMaxLength={true} 
                    value={phoneValue}
                    onChange={(val) => {
                      setPhoneValue(val);
                      if (!isPhoneValid && val) setIsPhoneValid(true);
                    }}
                    countrySelectProps={{ className: "bg-transparent text-white border-none outline-none pl-3" }}
                    className="w-full bg-black/50 p-3.5 text-xs sm:text-sm text-white outline-none"
                    placeholder="Número de telefone"
                  />
                  <input type="hidden" id="contact-phone" name="phone" value={phoneValue} />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-email" className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">E-mail</label>
              <input 
                type="email"
                id="contact-email"
                name="email" 
                placeholder="exemplo@empresa.com.br" 
                className="w-full bg-black/50 border border-zinc-700 p-3.5 text-xs sm:text-sm text-white outline-none focus:border-[#FFC700] transition-all rounded-xl placeholder:text-zinc-600" 
              />
            </div>
            
            <div className="space-y-2 flex-grow">
              <label htmlFor="contact-message" className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">
                Descrição do Projeto *
              </label>
              <textarea 
                id="contact-message"
                name="message" 
                placeholder="Descreva seu desafio técnico..." 
                required 
                className="w-full h-full min-h-[120px] md:min-h-[150px] bg-black/50 border border-zinc-700 p-3.5 text-xs sm:text-sm text-white outline-none focus:border-[#FFC700] transition-all resize-none rounded-xl placeholder:text-zinc-600" 
              />
            </div>

            <button 
              type="submit"
              disabled={isValidating || isSubmitting}
              aria-label="Enviar mensagem de contato"
              className="group relative w-full h-14 sm:h-16 bg-[#FFC700] hover:bg-yellow-400 overflow-hidden transition-all rounded-xl shadow-lg shadow-[#FFC700]/20 mt-6 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <div className="relative z-10 flex items-center justify-center gap-3">
                <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-black uppercase">
                  {isValidating ? 'Validando...' : isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </span>
                {!isValidating && !isSubmitting && (
                  <div className="w-2 h-2 bg-black rounded-full animate-pulse opacity-50" />
                )}
              </div>
            </button>

            {submitStatus !== 'idle' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`p-4 rounded-xl border ${
                  submitStatus === 'success' 
                    ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                    : 'bg-red-500/10 border-red-500/30 text-red-400'
                }`}
              >
                <p className="text-xs font-bold text-center">
                  {submitStatus === 'success' 
                    ? 'Mensagem enviada com sucesso! Nossa equipe entrará em contato.' 
                    : 'Erro ao enviar mensagem. Tente novamente ou chame no WhatsApp.'}
                </p>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}