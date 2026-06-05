import Link from "next/link";

export default function QuemSomos() {
  return (
    <section className="py-24 bg-zinc-950 relative border-b border-zinc-900" aria-labelledby="quem-somos-title">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <header className="lg:w-5/12 lg:sticky top-32">
            <h2 className="flex items-center gap-3 text-cromo font-bold tracking-[0.2em] text-[10px] uppercase mb-6" aria-hidden="true">
              <span className="w-8 h-[2px] bg-cromo" /> Quem Somos
            </h2>
            <div id="quem-somos-title" className="subtitle text-white mb-8">
              Engenharia com <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">propósito real.</span>
            </div>
            <nav aria-label="Ações Quem Somos" className="flex flex-wrap gap-4">
              <Link href="#o-que-e-cromo" className="inline-flex items-center justify-center rounded-xl bg-cromo px-6 py-3.5 text-xs font-black uppercase tracking-widest text-zinc-950 transition-all hover:bg-white hover:-translate-y-1">
                Entender a Cromo
              </Link>
              <Link href="#recursos-mej" className="inline-flex items-center justify-center rounded-xl border border-zinc-800 bg-transparent px-6 py-3.5 text-xs font-black uppercase tracking-widest text-zinc-200 transition-all hover:border-cromo hover:text-cromo">
                Empresa Júnior
              </Link>
            </nav>
          </header>

          <article className="lg:w-7/12 space-y-6 pt-2">
            <p className="body-text text-zinc-300">
              A Cromo Consultoria é uma empresa júnior vinculada à <strong>Universidade Tecnológica Federal do Paraná (UTFPR)</strong>, campus Curitiba.
            </p>
            <p className="body-text text-zinc-300 border-l-2 border-cromo/30 pl-6">
              Formada por mentes inovadoras da engenharia mecânica, mecatrônica e produção, nosso foco é extrair o máximo do rigor acadêmico e aplicá-lo para resolver problemas reais da indústria.
            </p>
            <p className="body-text text-zinc-300">
              Nosso propósito é desenvolver soluções em engenharia que atendam às necessidades imediatas do mercado, proporcionando aos nossos membros experiência prática profunda e forjando os líderes do amanhã.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}