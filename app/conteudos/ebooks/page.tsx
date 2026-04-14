import Link from "next/link";

const ebooks = [
  { title: "Manual da Patente Perfeita", type: "PDF / Guia", size: "4.2 MB" },
  { title: "Checklist: Viabilidade de Novos Produtos", type: "Planilha", size: "1.5 MB" },
  { title: "Engenharia Reversa na Prática", type: "E-book", size: "8.7 MB" },
];

export default function EbooksPage() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <Link href="/conteudos" className="text-zinc-500 hover:text-cromo text-xs font-bold uppercase tracking-widest mb-12 inline-block transition-colors">← Voltar</Link>
        
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Materiais <span className="text-cromo">Educativos</span></h1>
          <p className="text-zinc-400 max-w-xl">Conteúdo aprofundado para download gratuito. Conhecimento técnico ao seu alcance.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ebooks.map((ebook, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl flex flex-col items-center text-center group hover:border-cromo transition-all">
              <div className="w-24 h-32 bg-zinc-800 rounded shadow-2xl mb-6 flex items-center justify-center text-zinc-700 font-black group-hover:scale-105 transition-transform border border-zinc-700">COVER</div>
              <h3 className="text-lg font-bold text-white mb-2">{ebook.title}</h3>
              <p className="text-xs text-zinc-500 uppercase tracking-widest mb-8">{ebook.type} • {ebook.size}</p>
              <button className="w-full bg-zinc-800 hover:bg-cromo hover:text-black py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all">Download Gratuito</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}