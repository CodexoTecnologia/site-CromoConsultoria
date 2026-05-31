import { Metadata } from "next";
import Hero from "@/components/sections/shared/Hero";
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

      <Hero
        imageSrc="/assets/images/blog/hero-blog.png"
        imageAlt="Blog Cromo Consultoria"
        label="Conhecimento & Inovação"
        title="Blog"
        titleHighlight="Cromo"
        description="Artigos produzidos por especialistas para manter você atualizado sobre engenharia, inovação e propriedade intelectual."
      />

      {/* LISTA COM BUSCA */}
      <BlogList />

      {/* CONTATO */}
      <ContactForm />

    </main>
  );
}
