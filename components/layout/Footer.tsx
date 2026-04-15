"use client";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  const socialLinks = [
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/company/cromo-consultoria" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/cromo.consultoria" },
    { name: "WhatsApp", icon: <FaWhatsapp />, url: "https://wa.me/5541999999999" }
  ];

  const navLinks = [
    { name: "Quem Somos", href: "/sobre" },
    { name: "Nossos Serviços", href: "#servicos" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Blog", href: "/conteudos/blog" },
    { name: "E-books", href: "/conteudos/ebooks" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-10 md:pb-12 px-4 sm:px-6 md:px-8 overflow-hidden">
      
      {/* Brilho suave (glow) de fundo para quebrar o preto absoluto sem usar texturas */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cromo/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cromo/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-12 sm:mb-16 md:mb-20">
          
          {/* LOGO E MISSÃO */}
          <div className="col-span-1 sm:col-span-2 space-y-5 sm:space-y-6 md:space-y-8">
            <Link href="/" className="flex items-center gap-1 group w-max">
              <span className="text-xl sm:text-2xl font-black text-white tracking-[0.15em] group-hover:text-cromo transition-colors">
                CROMO
              </span>
              <span className="w-2 h-2 rounded-full bg-cromo animate-pulse"></span>
            </Link>
            <p className="max-w-[280px] sm:max-w-sm md:max-w-md text-zinc-400 text-xs sm:text-sm leading-relaxed border-l-2 border-cromo pl-4 sm:pl-5 md:pl-6 italic">
              Transformamos desafios técnicos de engenharia em soluções inovadoras, garantindo viabilidade e propriedade intelectual para a sua indústria.
            </p>
            
            <div className="flex gap-3 sm:gap-4 pt-3 sm:pt-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visite nosso perfil no ${social.name}`}
                  className="w-11 h-11 sm:w-12 sm:h-12 border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-black hover:border-cromo hover:bg-cromo transition-all duration-300 rounded-lg text-sm sm:text-base group shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <h4 className="text-cromo font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.35em] sm:tracking-[0.4em]">
              Mapa do Site
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-zinc-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest hover:text-cromo transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-zinc-600 rounded-full group-hover:bg-cromo transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-left lg:text-right">
            <h4 className="text-cromo font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.35em] sm:tracking-[0.4em]">
              Canais Oficiais
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="text-zinc-500 text-[9px] sm:text-[10px] uppercase tracking-widest">E-mail</p>
                <a href="mailto:contato@cromoconsultoria.com.br" className="text-zinc-300 hover:text-cromo transition-colors font-bold text-xs sm:text-sm break-all lg:break-normal">
                  contato@cromoconsultoria.com.br
                </a>
              </div>
              <div>
                <p className="text-zinc-500 text-[9px] sm:text-[10px] uppercase tracking-widest">Telefone / WhatsApp</p>
                <p className="text-zinc-300 font-mono text-xs sm:text-sm">(41) 99999-9999</p>
              </div>
              <div>
                 <p className="text-zinc-500 text-[9px] sm:text-[10px] uppercase tracking-widest mt-4">Localização</p>
                 <p className="text-zinc-400 text-xs mt-1 lg:ml-auto lg:max-w-[180px]">UTFPR - Câmpus Curitiba, Paraná - Brasil</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 sm:pt-8 md:pt-10 border-t border-zinc-800 gap-4 sm:gap-5 md:gap-6">
          <div className="flex items-center gap-3 sm:gap-4">
             <p className="text-[8px] sm:text-[9px] text-zinc-500 font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-center md:text-left">
               © {new Date().getFullYear()} Cromo Consultoria. Todos os direitos reservados.
             </p>
          </div>
          <div className="text-[8px] sm:text-[9px] text-zinc-600 font-bold uppercase tracking-[0.2em]">
            Desenvolvido por Codexo
          </div>
        </div>
      </div>
    </footer>
  );
}