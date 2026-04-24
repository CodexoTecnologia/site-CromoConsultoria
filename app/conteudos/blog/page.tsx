import Image from "next/image";
import { Metadata } from "next";
import BlogList from "@/components/sections/blog/BlogList";
import ContactForm from "@/components/sections/shared/ContactForm";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre engenharia mecânica, mecatrônica, patentes e inovação. Conteúdo produzido por especialistas da Cromo Consultoria.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-zinc-950">

      {/* HERO */}
      <section className="relative w-full h-[55vh] min-h-[380px] max-h-[560px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2000"
          alt="Blog Cromo Consultoria"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 sm:px-6 pb-14">
          <span className="text-cromo font-bold text-[10px] uppercase tracking-[0.3em] inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-cromo" /> Conhecimento & Inovação
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
            Blog{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">
              Cromo
            </span>
          </h1>
          <p className="text-zinc-300 text-base md:text-lg max-w-2xl">
            Artigos produzidos por especialistas para manter você atualizado sobre engenharia, inovação e propriedade intelectual.
          </p>
        </div>
      </section>

      {/* LISTA COM BUSCA */}
      <BlogList />

      {/* CONTATO */}
      <ContactForm />

    </main>
  );
}
