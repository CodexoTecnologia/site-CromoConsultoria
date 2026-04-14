import Link from "next/link";

const blogPosts = [
  { title: "O futuro da Mecatrônica na Indústria 4.0", category: "Tendências", date: "15 Abr, 2026" },
  { title: "Como proteger sua invenção com patentes", category: "Propriedade Intelectual", date: "10 Abr, 2026" },
  { title: "Otimização de processos: Guia para gestores", category: "Eficiência", date: "02 Abr, 2026" },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <Link href="/conteudos" className="text-zinc-500 hover:text-cromo text-xs font-bold uppercase tracking-widest mb-12 inline-block transition-colors">← Voltar</Link>
        
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Blog <span className="text-cromo">Cromo</span></h1>
          <p className="text-zinc-400 max-w-xl">Artigos produzidos por especialistas para manter você atualizado.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <article key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-colors flex flex-col">
              <div className="aspect-video bg-zinc-800 w-full" /> {/* Placeholder para Imagem */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold text-cromo uppercase tracking-widest bg-cromo/10 px-2 py-1 rounded">{post.category}</span>
                  <span className="text-[10px] text-zinc-500 font-mono">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-4 leading-tight">{post.title}</h2>
                <button className="mt-auto text-zinc-300 text-xs font-bold uppercase tracking-widest hover:text-cromo transition-colors text-left">Ler artigo completo +</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}