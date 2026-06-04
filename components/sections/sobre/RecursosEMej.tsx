import Link from "next/link";
import ExpandableImage from "@/components/ui/ExpandableImage";

const resourceFocus = [
  { title: "Capacitação dos membros", description: "Investimos em desenvolvimento pessoal e profissional com cursos e vivência empresarial." },
  { title: "Estruturação da empresa", description: "Priorizamos ferramentas e ambiente de trabalho para elevar performance, qualidade e consistência de entrega." },
  { title: "Inovação e processos internos", description: "Aprimoramos continuamente nossas metodologias para garantir entregas mais técnicas, ágeis e confiáveis a cada projeto." },
];

export default function RecursosMej() {
  return (
    <section id="recursos-mej" className="py-24 bg-zinc-950 relative" aria-labelledby="foco-title">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <header className="mb-10">
              <span className="text-cromo font-black text-[10px] uppercase tracking-[0.3em] block mb-4">Investimento</span>
              <h2 id="foco-title" className="subtitle text-white">Onde aplicamos nossos recursos</h2>
            </header>
            <ul className="space-y-6 list-none p-0">
              {resourceFocus.map((item, index) => {
                const number = String(index + 1).padStart(2, '0');
                return (
                  <li key={item.title} className="flex gap-6 p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/20 hover:border-cromo/30 transition-colors">
                    <span className="text-cromo font-bold text-lg pt-1" aria-hidden="true">{number}</span>
                    <div>
                      <h3 className="text-white font-bold mb-2">{item.title}</h3>
                      <p className="body-text text-zinc-500">{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <article aria-labelledby="mej-title" className="bg-zinc-900/40 rounded-[2.5rem] border border-zinc-800 p-8 md:p-12 text-center h-full flex flex-col">
            <figure className="mb-8 mx-auto w-full max-w-sm rounded-[2rem] overflow-hidden border border-zinc-800 shadow-2xl">
              <ExpandableImage
                src="/assets/images/sobre/equipe-ecoar.png"
                alt="Equipe no evento ECOAR do Movimento Empresa Júnior"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
              />
            </figure>
            <header className="mb-4">
              <span className="text-cromo font-black text-[10px] uppercase tracking-[0.3em] block mb-4">Conexão MEJ</span>
              <h2 id="mej-title" className="text-2xl font-bold text-white">Movimento Empresa Júnior</h2>
            </header>
            <p className="body-text text-zinc-400 mb-8">
              Fazemos parte do maior movimento de empreendedorismo jovem do mundo. Na Cromo, isso se traduz em projetos de alto impacto, desenvolvimento de lideranças e evolução profissional contínua.
            </p>
            
            <div className="mt-auto pt-8 border-t border-zinc-800/60">
              <span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-4">Conecte-se com a gente</span>
              <div className="flex items-center justify-center gap-4">
                
                <Link 
                  href="https://www.instagram.com/cromoconsultoria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-cromo hover:border-cromo/50 hover:-translate-y-1 transition-all shadow-inner"
                  aria-label="Instagram da Cromo Consultoria"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </Link>

                <Link 
                  href="https://br.linkedin.com/company/cromoconsultoria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-cromo hover:border-cromo/50 hover:-translate-y-1 transition-all shadow-inner"
                  aria-label="LinkedIn da Cromo Consultoria"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </Link>

                <Link 
                  href="https://web.facebook.com/CromoConsultoria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-cromo hover:border-cromo/50 hover:-translate-y-1 transition-all shadow-inner"
                  aria-label="Facebook da Cromo Consultoria"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </Link>

              </div>
            </div>
            
          </article>

        </div>
      </div>
    </section>
  );
}