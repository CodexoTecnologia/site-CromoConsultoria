import { Metadata } from "next";
import Hero from "@/components/sections/shared/Hero";
import ContactForm from "@/components/sections/shared/ContactForm";
import EbooksCatalog from "@/components/sections/ebooks/EbooksCatalog";

export const metadata: Metadata = {
  // O template do RootLayout vai colocar o " | Cromo Consultoria" no final
  title: "E-books Gratuitos de Engenharia Mecânica", 
  description: "Baixe e-books técnicos gratuitos sobre engenharia, viabilidade e proteção de inovação. Conhecimento aprofundado direto da Cromo Consultoria.",
  keywords: [
    "E-books Engenharia", 
    "Download Gratuito", 
    "Estudo de Viabilidade", 
    "Inovação", 
    "Patentes"
  ],
  alternates: {
    canonical: "/conteudos/ebooks",
  },
};

export default function EbooksPage() {
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
        {/* Aqui entra o Client Component que criamos no Passo 2 */}
        <EbooksCatalog />
      </section>
      
      <section id="contato" className="relative z-10 border-t border-zinc-900">
        <ContactForm />
      </section>
    </main>
  );
}