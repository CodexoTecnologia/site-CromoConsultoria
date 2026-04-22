// src/components/sections/shared/ContactForm.tsx
"use client";
import { useState, useEffect, forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';

const BrazilianMaskedInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function BrazilianMaskedInput({ value, onChange, ...props }, ref) {
    const str = String(value || '');
    let displayed = str;

    if (str.startsWith('+55')) {
      const local = str.replace(/^\+55\s*/, '').replace(/\D/g, '');
      if (local.length === 0) {
        displayed = '+55 ';
      } else if (local.length <= 2) {
        displayed = `+55 ${local}`;
      } else if (local.length <= 6) {
        displayed = `+55 ${local.slice(0, 2)} ${local.slice(2)}`;
      } else if (local.length <= 10) {
        displayed = `+55 ${local.slice(0, 2)} ${local.slice(2, 6)}-${local.slice(6)}`;
      } else {
        displayed = `+55 ${local.slice(0, 2)} ${local.slice(2, 3)} ${local.slice(3, 7)}-${local.slice(7, 11)}`;
      }
    }

    return (
      <input {...props} ref={ref} value={displayed} onChange={onChange} />
    );
  }
);

const PhoneInput = dynamic(() => import('react-phone-number-input').then(mod => mod.default), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[46px] sm:h-[50px] bg-zinc-900 border border-white/10 rounded-lg flex items-center px-4">
      <div className="w-full text-zinc-500 text-[10px]">Carregando...</div>
    </div>
  ),
});

interface ContactProps {
  headingLine1?: string;
  headingLine2?: string;
  subtitle?: string;
}

export default function Contact({
  headingLine1 = "VAMOS",
  headingLine2 = "INOVAR JUNTOS?",
  subtitle = "Pronto para transformar sua ideia em realidade com engenharia de elite? Fale com nossos consultores.",
}: ContactProps) {
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
    <section id="contato" className="relative py-16 md:py-24 bg-zinc-950 overflow-hidden border-t border-zinc-800/50">

      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cromo/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cromo/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/3" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          <div className="lg:col-span-5 space-y-6 md:space-y-8 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-cromo" />
                <span className="text-cromo font-bold tracking-widest text-[10px] uppercase">
                  Contato Cromo
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1]">
                {headingLine1}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">
                  {headingLine2}
                </span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-sm border-l-2 border-cromo pl-4 md:pl-5">
                {subtitle}
              </p>

              <div className="p-6 md:p-8 bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl space-y-4 shadow-xl relative overflow-hidden group max-w-sm">
                <div className="absolute top-0 right-0 w-24 h-24 bg-cromo/5 blur-[30px] group-hover:bg-cromo/10 transition-colors pointer-events-none" />
                <p className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">Canais Oficiais:</p>
                <div className="space-y-2 text-sm sm:text-base font-medium">
                  <p className="text-zinc-300 hover:text-cromo transition-colors cursor-pointer break-all">contato@cromoconsultoria.com.br</p>
                  <p className="text-zinc-400 font-mono">(41) 8728-8213</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 w-full max-w-2xl mx-auto lg:mx-0 lg:ml-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form
                onSubmit={handleSubmit}
                method="POST"
                className="flex flex-col space-y-4 md:space-y-6 p-6 sm:p-8 bg-zinc-900/80 border border-zinc-800 rounded-2xl md:rounded-3xl backdrop-blur-md shadow-2xl"
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
                      className="w-full bg-black/50 border border-zinc-700 p-3.5 text-xs sm:text-sm text-white outline-none focus:border-cromo transition-all rounded-xl placeholder:text-zinc-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-phone" className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1">
                      Telefone * {!isPhoneValid && <span className="text-red-500 ml-2 animate-pulse text-[10px]">{phoneValue ? 'INVÁLIDO' : 'INFORME DDD + NÚMERO'}</span>}
                    </label>
                    <div className={`codexo-phone-wrapper transition-colors rounded-xl overflow-hidden border ${!isPhoneValid ? 'border-red-500/50' : 'border-zinc-700 focus-within:border-cromo'}`}>
                      <PhoneInput
                        international
                        defaultCountry="BR"
                        limitMaxLength={true}
                        value={phoneValue}
                        onChange={(val) => {
                          setPhoneValue(val);
                          if (!isPhoneValid && val) setIsPhoneValid(true);
                        }}
                        inputComponent={BrazilianMaskedInput}
                        countrySelectProps={{ className: "bg-transparent text-white border-none outline-none pl-3" }}
                        className="w-full bg-black/50 p-3.5 text-xs sm:text-sm text-white outline-none"
                        placeholder="Número com DDD"
                      />
                      <input type="hidden" id="contact-phone" name="phone" value={phoneValue ?? ''} />
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
                    className="w-full bg-black/50 border border-zinc-700 p-3.5 text-xs sm:text-sm text-white outline-none focus:border-cromo transition-all rounded-xl placeholder:text-zinc-600"
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
                    className="w-full min-h-[120px] md:min-h-[150px] bg-black/50 border border-zinc-700 p-3.5 text-xs sm:text-sm text-white outline-none focus:border-cromo transition-all resize-none rounded-xl placeholder:text-zinc-600"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isValidating || isSubmitting}
                  aria-label="Enviar mensagem de contato"
                  className="group relative w-full h-14 sm:h-16 bg-cromo hover:bg-yellow-400 overflow-hidden transition-all rounded-xl shadow-lg shadow-cromo/20 mt-4 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-zinc-950 uppercase">
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

        </div>
      </div>
    </section>
  );
}
