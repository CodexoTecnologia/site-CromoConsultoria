import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";
import {
  ArrowUpRight,
  Briefcase,
  Building2,
  CheckCheck,
  Flame,
  GraduationCap,
  Handshake,
  UserRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nós | Cromo Consultoria",
  description:
    "Conheça a história da Cromo Consultoria, nossos valores e como o Movimento Empresa Júnior fortalece nosso impacto.",
};

const valores = [
  {
    icone: Flame,
    titulo: "Sangue nos olhos",
    descricao: "Senso crítico para analisar, decidir e agir com autonomia para melhorar continuamente.",
  },
  {
    icone: Handshake,
    titulo: "Inteligência coletiva",
    descricao: "Comunicação clara, empatia e troca de conhecimento para acelerar resultados em equipe.",
  },
  {
    icone: UserRound,
    titulo: "Autonomia e protagonismo",
    descricao: "Cada membro assume a liderança do próprio capítulo com responsabilidade e visão de crescimento.",
  },
  {
    icone: CheckCheck,
    titulo: "Foco em solução",
    descricao: "Entregas objetivas para desenvolver cliente interno e externo com valor real.",
  },
];

const recursos = [
  {
    icone: GraduationCap,
    titulo: "Capacitação dos membros",
    descricao: "Cursos, mentorias e eventos para ampliar vivência empresarial e desenvolvimento profissional.",
  },
  {
    icone: Building2,
    titulo: "Estruturação da empresa",
    descricao: "Investimento em ferramentas e ambiente de trabalho para elevar performance e qualidade das entregas.",
  },
];

type PlaceholderProps = {
  label: string;
  className?: string;
};

function PlaceholderFoto({ label, className = "" }: PlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-dashed border-zinc-600 bg-zinc-900/80 ${className}`}
      aria-label={label}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,199,0,0.18),_transparent_55%)]"
      />
      <div className="relative flex h-full min-h-[180px] items-center justify-center p-6 text-center">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-cromo">Placeholder de Foto</p>
          <p className="mt-2 text-sm text-zinc-300">{label}</p>
        </div>
      </div>
    </div>
  );
}

type CardValorProps = {
  titulo: string;
  descricao: string;
  icone: ComponentType<{ className?: string }>;
};

function CardValor({ titulo, descricao, icone: Icone }: CardValorProps) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900/75 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cromo/80">
      <Icone className="h-9 w-9 text-cromo" />
      <h3 className="mt-4 text-2xl font-black uppercase leading-tight text-zinc-100">{titulo}</h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-300">{descricao}</p>
    </article>
  );
}

export default function SobrePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100 pt-28 sm:pt-32 pb-20 sm:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-96 w-[900px] -translate-x-1/2 rounded-full bg-cromo/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-cromo/10 blur-[110px]"
      />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <header className="space-y-5">
            <p className="text-cromo text-xs sm:text-sm font-bold uppercase tracking-[0.24em]">
              Sobre Nós
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              Projetamos sonhos para conectar <span className="text-cromo">universidade e mercado</span>
            </h1>
            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-300">
              Empresa Júnior da UTFPR focada em transformar desafios técnicos em inovação aplicada.
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-[11px] sm:text-xs uppercase tracking-[0.14em] font-bold text-zinc-300">
              <span className="rounded-full border border-zinc-700 bg-zinc-900/70 px-4 py-2">Empresa Júnior UTFPR</span>
              <span className="rounded-full border border-zinc-700 bg-zinc-900/70 px-4 py-2">Manifesto Ágil</span>
              <span className="rounded-full border border-zinc-700 bg-zinc-900/70 px-4 py-2">Impacto Social</span>
            </div>

            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 rounded-full bg-cromo px-5 py-2.5 text-xs sm:text-sm font-black uppercase tracking-[0.16em] text-zinc-950 transition-colors hover:bg-cromo-hover"
            >
              Ver serviços
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </header>

          <figure className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-3 sm:p-4">
            <PlaceholderFoto label="Foto principal da equipe Cromo ou laboratório" className="min-h-[280px] sm:min-h-[360px]" />
            <figcaption className="px-2 pt-4 text-xs text-zinc-400">Substituir quando as fotos oficiais forem enviadas.</figcaption>
          </figure>
        </div>
      </section>

      <section className="container mx-auto mt-16 sm:mt-20 px-4 sm:px-6 lg:px-8">
        <article className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 lg:p-10">
          <h2 className="text-2xl sm:text-3xl font-black text-white">O que é a Cromo</h2>
          <div className="mt-5 space-y-4 text-zinc-300 leading-relaxed text-sm sm:text-base max-w-4xl">
            <p>
              A Cromo existe para reduzir o distanciamento tecnológico entre comunidade e universidade com engenharia aplicada.
            </p>
            <p>
              Atuamos com princípios ágeis para responder rápido, validar melhor e construir soluções com aderência ao mundo real.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
              <p className="text-cromo text-[10px] font-black tracking-[0.2em] uppercase">Propósito</p>
              <p className="mt-2 text-sm text-zinc-200">Projetar sonhos com impacto real.</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
              <p className="text-cromo text-[10px] font-black tracking-[0.2em] uppercase">Método</p>
              <p className="mt-2 text-sm text-zinc-200">Estratégia + validação + execução.</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
              <p className="text-cromo text-[10px] font-black tracking-[0.2em] uppercase">Resultado</p>
              <p className="mt-2 text-sm text-zinc-200">Clientes e membros em evolução contínua.</p>
            </div>
          </div>
        </article>
      </section>

      <section className="container mx-auto mt-16 sm:mt-20 px-4 sm:px-6 lg:px-8" aria-labelledby="valores-title">
        <div className="mb-6 sm:mb-8">
          <p className="text-cromo text-xs sm:text-sm font-bold uppercase tracking-[0.24em]">Nossa Cultura</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_1.08fr_1fr] lg:items-start">
          <div className="order-2 lg:order-1 space-y-4">
            <CardValor {...valores[0]} />
            <CardValor {...valores[1]} />
          </div>

          <div className="order-1 lg:order-2 rounded-3xl border border-zinc-700 bg-zinc-900 p-5 sm:p-6">
            <h2 id="valores-title" className="text-4xl sm:text-5xl font-black leading-none text-white">
              Nossos
              <span className="block text-cromo mt-1">Valores</span>
            </h2>
            <div className="mt-4 h-1 w-28 bg-cromo" />
            <PlaceholderFoto label="Foto que represente cultura e inovação" className="mt-5 min-h-[250px]" />
          </div>

          <div className="order-3 space-y-4">
            <CardValor {...valores[2]} />
            <CardValor {...valores[3]} />
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-16 sm:mt-20 px-4 sm:px-6 lg:px-8" aria-labelledby="mej-title">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 lg:p-10">
          <p className="text-cromo text-xs sm:text-sm font-bold uppercase tracking-[0.24em]">Movimento Empresa Júnior</p>
          <h2 id="mej-title" className="mt-3 text-3xl sm:text-4xl font-black text-white">
            Formação na prática, com impacto real
          </h2>
          <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-zinc-300">
            No Movimento Empresa Júnior, toda a receita é reinvestida para fortalecer o desenvolvimento de pessoas e a evolução da
            empresa. Esse modelo nos permite aprender com desafios reais, elevar nosso padrão de entrega e ampliar o impacto da Cromo.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Onde são aplicados os nossos recursos</h3>
              <div className="mt-4 space-y-4">
                {recursos.map((recurso) => {
                  const IconeRecurso = recurso.icone;

                  return (
                    <article key={recurso.titulo} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 sm:p-6">
                      <div className="flex items-center gap-3">
                        <IconeRecurso className="h-6 w-6 text-cromo" />
                        <h4 className="text-base sm:text-lg font-bold text-cromo">{recurso.titulo}</h4>
                      </div>
                      <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed">{recurso.descricao}</p>
                    </article>
                  );
                })}
              </div>
            </div>

            <aside className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/60 p-4 sm:p-5">
              <PlaceholderFoto label="Foto principal dos membros em atividade" className="min-h-[360px]" />

              <div className="pointer-events-none absolute left-8 top-8 hidden sm:flex h-24 w-24 items-center justify-center rounded-full border border-zinc-600 bg-zinc-900/95 px-3 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-300">
                Foto
                <br />
                UTFPR
              </div>

              <div className="pointer-events-none absolute left-10 top-40 hidden sm:flex h-24 w-24 items-center justify-center rounded-full border border-zinc-600 bg-zinc-900/95 px-3 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-300">
                Foto
                <br />
                Escritório
              </div>

              <div className="pointer-events-none absolute left-8 bottom-8 hidden sm:flex h-24 w-24 items-center justify-center rounded-full border border-zinc-600 bg-zinc-900/95 px-3 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-300">
                Logo
                <br />
                Cromo
              </div>
            </aside>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-cromo/30 bg-cromo/10 p-5">
            <p className="text-sm sm:text-base text-zinc-200">
              Quer conhecer nossas frentes técnicas e como aplicamos essa cultura nos projetos?
            </p>
            <Link
              href="/servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cromo px-5 py-2.5 text-xs sm:text-sm font-black uppercase tracking-[0.16em] text-zinc-950 transition-colors hover:bg-cromo-hover"
            >
              Ver Serviços
              <Briefcase className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
