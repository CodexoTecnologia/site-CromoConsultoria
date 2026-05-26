// components/sections/home/Blog.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/app/conteudos/blog/posts-blog";

export default function Blog() {
  // Pega os 3 primeiros posts (assumindo que a ordem do array é da mais recente pra mais antiga)
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section
      id="blog"
      className="py-16 md:py-20 lg:py-24 bg-zinc-950 relative border-b border-zinc-800/50 overflow-hidden"
    >
      {/* Luz ambiente roxa sutil */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cromo-purple/10 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Cabeçalho */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-cromo" />
              <span className="text-cromo font-bold tracking-widest text-[10px] uppercase">
                Conhecimento & Inovação
              </span>
            </div>

            <h2 className="subtitle text-white">
              Direto do nosso{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">
                Blog
              </span>
            </h2>

            <p className="body-text text-zinc-400 mt-3 max-w-lg">
              Artigos produzidos por especialistas sobre engenharia, inovação e
              propriedade intelectual.
            </p>
          </div>

          <Link
            href="/conteudos/blog"
            className="shrink-0 bg-cromo text-black font-black text-[10px] sm:text-xs tracking-widest uppercase px-6 py-3 sm:px-8 sm:py-4 rounded-xl shadow-lg shadow-cromo/20 hover:bg-yellow-400 transition-all flex items-center justify-center w-max focus:outline-none focus:ring-2 focus:ring-white"
          >
            Todos os artigos
          </Link>
        </header>

        {/* Grid de posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={`/conteudos/blog/${post.slug}`}
                aria-label={`Ler artigo: ${post.title}`}
                className="block h-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-cromo-purple/50 hover:shadow-[0_0_25px_rgba(90,35,109,0.3)] transition-all duration-300 flex flex-col group focus:outline-none focus:ring-2 focus:ring-cromo"
              >
                {/* Imagem */}
                <div className="relative w-full aspect-video bg-zinc-800 overflow-hidden border-b border-zinc-800">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent pointer-events-none" />

                  {/* Categoria */}
                  <span className="absolute top-3 left-3 text-[9px] font-bold text-cromo uppercase tracking-widest bg-zinc-950/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-cromo/20">
                    {post.category}
                  </span>
                </div>

                {/* Conteúdo */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta info */}
                  <div className="flex items-center gap-3 mb-3 text-[10px] text-zinc-500">
                    <span className="font-mono">{post.date}</span>
                    <span className="w-1 h-1 bg-zinc-700 rounded-full" aria-hidden="true" />
                    <span className="flex items-center gap-1">
                      <Clock size={10} aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-3 leading-snug group-hover:text-cromo transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="body-text text-zinc-400 text-sm mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* CTA "Ler mais" */}
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-cromo transition-colors mt-auto">
                    Ler artigo
                    <ArrowRight
                      className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}