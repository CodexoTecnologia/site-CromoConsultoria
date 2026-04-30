import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Clock, ArrowLeft, Tag } from "lucide-react";
import { blogPosts, ContentSection } from "@/app/conteudos/blog/posts-blog";
import ContactForm from "@/components/sections/shared/ContactForm";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

function ArticleSection({ section }: { section: ContentSection }) {
  switch (section.type) {
    case "heading":
      return (
        <h2 className="text-2xl font-bold text-white mt-10 mb-4 leading-snug">
          {section.text}
        </h2>
      );
    case "paragraph":
      return (
        <p className="text-zinc-400 leading-relaxed mb-5 text-base">
          {section.text}
        </p>
      );
    case "list":
      return (
        <ul className="mb-6 space-y-3">
          {section.items?.map((item, i) => (
            <li key={i} className="flex gap-3 text-zinc-400 text-base leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cromo shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-8 border-l-4 border-cromo pl-6 py-1">
          <p className="text-zinc-300 italic text-lg leading-relaxed">
            &ldquo;{section.text}&rdquo;
          </p>
        </blockquote>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-zinc-950">

      {/* HERO */}
      <section className="relative w-full h-[55vh] min-h-[380px] max-h-[540px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/60 to-transparent" />


        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 sm:px-6 pb-12">
          <span className="text-cromo font-bold text-[10px] uppercase tracking-[0.3em] inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-cromo" /> {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight max-w-3xl mb-5">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
            <span className="font-medium text-zinc-300">{post.author}</span>
            <span className="w-1 h-1 bg-zinc-600 rounded-full" />
            <span>{post.date}</span>
            <span className="w-1 h-1 bg-zinc-600 rounded-full" />
            <span className="flex items-center gap-1.5">
              <Clock size={13} /> {post.readTime} de leitura
            </span>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl py-16">

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10 pb-10 border-b border-zinc-800">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-500 bg-zinc-800/60 border border-zinc-700 px-3 py-1 rounded-full"
            >
              <Tag size={9} /> {tag}
            </span>
          ))}
        </div>

        {/* Resumo destacado */}
        <p className="text-zinc-300 text-lg leading-relaxed mb-10 font-medium">
          {post.excerpt}
        </p>

        {/* Seções do artigo */}
        <article>
          {post.sections.map((section, index) => (
            <ArticleSection key={index} section={section} />
          ))}
        </article>

        {/* Rodapé do artigo */}
        <div className="mt-16 pt-10 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-xs text-zinc-600 uppercase tracking-widest font-bold mb-1">Autor</p>
            <p className="text-zinc-300 font-medium">{post.author}</p>
            <p className="text-zinc-600 text-sm">{post.date}</p>
          </div>
          <Link
            href="/conteudos/blog"
            className="inline-flex items-center gap-2 text-cromo hover:text-yellow-400 transition-colors text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft size={14} />
            Ver todos os artigos
          </Link>
        </div>
      </div>

      {/* Mais artigos */}
      <section className="bg-zinc-900/50 border-t border-zinc-800 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-white mb-8 text-center">
            Continue lendo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {blogPosts
              .filter((p) => p.slug !== slug)
              .slice(0, 3)
              .map((related) => (
                <Link
                  key={related.slug}
                  href={`/conteudos/blog/${related.slug}`}
                  className="group bg-zinc-900 border border-zinc-800 hover:border-cromo/40 rounded-xl overflow-hidden transition-colors flex flex-col"
                >
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                    <span className="absolute top-2 left-2 text-[9px] font-bold text-cromo uppercase tracking-widest bg-zinc-950/80 backdrop-blur-sm px-2 py-0.5 rounded border border-cromo/20">
                      {related.category}
                    </span>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-sm font-bold text-white group-hover:text-cromo transition-colors leading-snug mb-2">
                      {related.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-auto pt-3">
                      <span className="text-[9px] text-zinc-600 font-mono">{related.date}</span>
                      <span className="w-0.5 h-0.5 bg-zinc-700 rounded-full" />
                      <span className="text-[9px] text-zinc-600 flex items-center gap-1">
                        <Clock size={9} /> {related.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <ContactForm />

    </main>
  );
}
