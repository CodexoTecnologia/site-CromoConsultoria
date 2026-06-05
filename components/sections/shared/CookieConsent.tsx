"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  // Atualiza o Consent Mode de verdade + avisa o GTM
  const updateConsent = (status: "granted" | "denied") => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;

    window.gtag("consent", "update", {
      ad_storage: status,
      analytics_storage: status,
      ad_user_data: status,
      ad_personalization: status,
      personalization_storage: status,
      // security_storage permanece 'granted' (definido no default, não se mexe)
    });

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "cookie_consent_update" });
  };

  useEffect(() => {
    const consent = localStorage.getItem("cromo-cookie-consent");
    if (!consent) {
      setIsVisible(true);
    } else {
      // Replay: re-aplica a escolha salva em toda visita
      updateConsent(consent as "granted" | "denied");
    }
  }, []);

  const handleConsent = (status: "granted" | "denied") => {
    localStorage.setItem("cromo-cookie-consent", status);
    setIsVisible(false);
    updateConsent(status);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto md:max-w-[420px] z-[9999]"
        >
          <div className="bg-zinc-900/95 backdrop-blur-md border border-zinc-700 p-5 md:p-6 rounded-2xl shadow-2xl flex flex-col gap-4">
            <div className="space-y-2">
              <h3 className="text-white font-bold text-sm tracking-widest uppercase">
                Privacidade & Cookies
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Utilizamos cookies e tecnologias semelhantes (como GTM e LinkedIn Tag) para analisar o tráfego, personalizar conteúdo e melhorar sua experiência. Ao continuar, você concorda com nossa{" "}
                <Link href="/politica/privacidade" className="text-cromo hover:underline underline-offset-2 transition-all">
                  Política de Privacidade
                </Link>{" "}
                e nossa{" "}
                <Link href="/politica/cookies" className="text-cromo hover:underline underline-offset-2 transition-all">
                  Política de Cookies
                </Link>.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full">
              <button
                onClick={() => handleConsent("denied")}
                className="flex-1 py-2.5 px-4 rounded-xl border border-zinc-700 text-zinc-300 text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors"
              >
                Recusar
              </button>
              <button
                onClick={() => handleConsent("granted")}
                className="flex-1 py-2.5 px-4 rounded-xl bg-cromo text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors shadow-[0_0_15px_rgba(255,199,0,0.15)]"
              >
                Aceitar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}