"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();

    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    window.addEventListener("resize", checkMobile, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      name: "Serviços",
      href: "/servicos",
      subLinks: [
        {
          name: "Desenvolvimento de Produto",
          href: "/servicos/desenvolvimentodeproduto",
        },
        {
          name: "Estudo de Viabilidade",
          href: "/servicos/estudodeviabilidade",
        },
        {
          name: "Formulação de Patentes",
          href: "/servicos/formulacaodepatentes",
        },
        {
          name: "Otimização de Processo",
          href: "/servicos/otimizacaodeprocesso",
        },
        {
          name: "Prototipagem e Validação",
          href: "/servicos/prototipagemevalidacao",
        },
      ],
    },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Portfólio", href: "/portfolio" },
    {
      name: "Conteúdos",
      // NOTA: Removido o href aqui de propósito, pois é apenas um dropdown
      subLinks: [
        { name: "Blog", href: "/conteudos/blog" },
        { name: "E-books", href: "/conteudos/ebooks" },
      ],
    },
    { name: "FAQ", href: "/faq" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileSubmenu(null);
  };

  const navbarVariants = {
    initial: {
      width: isMobile ? "95%" : "95%",
      maxWidth: "1200px",
      y: 0,
      backgroundColor: "rgba(24, 24, 27, 0.2)",
      backdropFilter: "blur(8px)",
      borderColor: "rgba(255, 255, 255, 0.05)",
    },
    scrolled: {
      width: isMobile ? "95%" : "100%",
      maxWidth: isMobile ? "1200px" : "1100px",
      y: isMobile ? 0 : -10,
      backgroundColor: "rgba(24, 24, 27, 0.85)",
      backdropFilter: "blur(12px)",
      borderColor: "rgba(255, 255, 255, 0.1)",
    },
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-3 sm:pt-4 md:pt-6 px-3 sm:px-4">
        <motion.div
          initial="initial"
          animate={isScrolled ? "scrolled" : "initial"}
          variants={navbarVariants}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-between border rounded-xl md:rounded-2xl overflow-visible shadow-lg w-full"
        >
          <div className="relative z-20 flex items-center justify-between w-full px-4 sm:px-6 md:px-8 py-3 md:py-4">
            <Link
              href="/"
              className="relative flex items-center transition-opacity hover:opacity-80"
            >
              <Image
                src="/assets/logo/logo-cromo.png"
                alt="Cromo Consultoria"
                width={140}
                height={40}
                priority
                className="object-contain w-auto h-6 sm:h-8"
              />
            </Link>

            <nav className="hidden md:block">
              <ul className="flex items-center gap-4 lg:gap-8">
                {navLinks.map((link) => (
                  <li key={link.name} className="relative group">
                    {link.subLinks ? (
                      <>
                        {/* TRATATIVA DESKTOP: Verifica se tem href */}
                        {link.href ? (
                          <Link
                            href={link.href}
                            className="flex items-center gap-1 text-[10px] sm:text-xs uppercase tracking-[0.1em] font-bold text-zinc-300 group-hover:text-white transition-all py-2 relative cursor-pointer"
                          >
                            {link.name}
                            <ChevronDown
                              size={14}
                              className="group-hover:rotate-180 transition-transform duration-300"
                            />
                            <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-cromo transition-all group-hover:w-full" />
                          </Link>
                        ) : (
                          <span className="flex items-center gap-1 text-[10px] sm:text-xs uppercase tracking-[0.1em] font-bold text-zinc-300 group-hover:text-white transition-all py-2 relative cursor-pointer">
                            {link.name}
                            <ChevronDown
                              size={14}
                              className="group-hover:rotate-180 transition-transform duration-300"
                            />
                            <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-cromo transition-all group-hover:w-full" />
                          </span>
                        )}

                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                          <div className="w-64 bg-zinc-900 border border-zinc-700/50 rounded-xl shadow-xl overflow-hidden flex flex-col p-2">
                            {link.subLinks.map((sublink) => (
                              <Link
                                key={sublink.name}
                                href={sublink.href}
                                className="px-4 py-3 text-xs font-semibold text-zinc-300 hover:text-black hover:bg-cromo rounded-lg transition-all"
                              >
                                {sublink.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      // ITEM SEM DROPDOWN
                      <Link
                        href={link.href!}
                        className="text-[10px] sm:text-xs uppercase tracking-[0.1em] font-bold text-zinc-300 hover:text-white transition-all relative group py-2 flex"
                      >
                        {link.name}
                        <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-cromo transition-all group-hover:w-full" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
              <Link href="#contact" className="hidden sm:block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 md:py-2.5 flex items-center gap-2 border border-cromo bg-transparent hover:bg-cromo text-cromo hover:text-zinc-900 font-bold text-[9px] md:text-[10px] tracking-[0.2em] uppercase rounded-full transition-all shadow-lg hover:shadow-cromo/20"
                >
                  Contato
                </motion.button>
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isMobileMenuOpen}
                className="md:hidden text-zinc-300 p-2 hover:bg-zinc-800 hover:text-cromo rounded-lg transition-colors"
              >  
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[98] bg-zinc-950/80 backdrop-blur-md"
              onClick={closeMobileMenu}
            />

            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[80px] left-3 right-3 z-[99] md:hidden max-h-[80vh] overflow-y-auto no-scrollbar"
            >
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
                <nav className="p-2">
                  <ul className="flex flex-col">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b border-zinc-800/50 last:border-0"
                      >
                        {link.subLinks ? (
                          <div className="flex flex-col">
                            <div className="w-full flex items-center justify-between px-2 py-2 rounded-xl transition-all hover:bg-zinc-800">
                              
                              {/* TRATATIVA MOBILE: Verifica se tem href */}
                              {link.href ? (
                                <Link
                                  href={link.href}
                                  onClick={closeMobileMenu}
                                  className="flex-1 px-2 py-2 text-xs uppercase tracking-[0.2em] font-bold text-zinc-300 hover:text-white"
                                >
                                  {link.name}
                                </Link>
                              ) : (
                                <span className="flex-1 px-2 py-2 text-xs uppercase tracking-[0.2em] font-bold text-zinc-300">
                                  {link.name}
                                </span>
                              )}

                              <button
                                onClick={() =>
                                  setOpenMobileSubmenu(
                                    openMobileSubmenu === link.name
                                      ? null
                                      : link.name,
                                  )
                                }
                                className="p-3 text-zinc-400 hover:text-cromo bg-zinc-800/50 rounded-lg ml-2"
                              >
                                <ChevronDown
                                  size={16}
                                  className={`transition-transform duration-300 ${openMobileSubmenu === link.name ? "rotate-180 text-cromo" : ""}`}
                                />
                              </button>
                            </div>

                            <AnimatePresence>
                              {openMobileSubmenu === link.name && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden bg-zinc-950/50 rounded-lg mx-2 mb-2"
                                >
                                  <ul className="flex flex-col py-2 px-3 border-l-2 border-cromo/30 ml-2">
                                    {link.subLinks.map((sublink) => (
                                      <li key={sublink.name}>
                                        <Link
                                          href={sublink.href}
                                          onClick={closeMobileMenu}
                                          className="block px-3 py-3 text-[10px] font-bold text-zinc-400 hover:text-cromo transition-colors"
                                        >
                                          {sublink.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          // ITEM NORMAL (MOBILE)
                          <Link
                            href={link.href!}
                            onClick={closeMobileMenu}
                            className="block px-4 py-4 text-xs uppercase tracking-[0.2em] font-bold text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-xl transition-all"
                          >
                            {link.name}
                          </Link>
                        )}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="p-2 mt-2">
                    <Link href="#contato" onClick={closeMobileMenu}>
                      <button className="w-full py-4 bg-cromo text-zinc-900 font-black text-xs tracking-[0.2em] uppercase rounded-xl shadow-lg shadow-cromo/20 hover:bg-cromo-hover transition-all">
                        Fale Conosco
                      </button>
                    </Link>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}