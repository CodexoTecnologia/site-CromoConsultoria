"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Search, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

export default function BlogList() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return blogPosts;
    return blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.content.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        post.excerpt.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section className="py-16 md:py-24 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Barra de pesquisa */}
        <div className="max-w-xl mx-auto mb-14">
          <div className="relative group">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-cromo transition-colors pointer-events-none"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por título, tema ou palavra-chave..."
              className="w-full bg-zinc-900 border border-zinc-800 focus:border-cromo rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-300 transition-colors text-xs font-bold uppercase tracking-widest"
              >
                ✕
              </button>
            )}
          </div>
          {query && (
            <p className="text-zinc-600 text-xs mt-2 ml-1">
              {filtered.length === 0
                ? "Nenhum resultado encontrado."
                : `${filtered.length} artigo${filtered.length > 1 ? "s" : ""} encontrado${filtered.length > 1 ? "s" : ""}`}
            </p>
          )}
        </div>

        {/* Grade de posts */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filtered.map((post) => (
              <article
                key={post.slug}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg flex flex-col"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-bold text-cromo uppercase tracking-widest bg-zinc-950/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-cromo/20">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] text-zinc-500 font-mono">{post.date}</span>
                    <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                    <span className="text-[10px] text-zinc-500 flex items-center gap-1">
                      <Clock size={10} />
                      {post.readTime} de leitura
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-white mb-3 leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-bold uppercase tracking-wider text-zinc-600 bg-zinc-800 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-zinc-600 text-sm">Nenhum artigo encontrado para &quot;{query}&quot;.</p>
            <button
              onClick={() => setQuery("")}
              className="mt-4 text-cromo text-xs font-bold uppercase tracking-widest hover:underline"
            >
              Limpar busca
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
