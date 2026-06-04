import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Saiba como a Cromo Consultoria utiliza cookies para melhorar sua experiência, personalizar conteúdo e medir o desempenho do site. Gerencie suas preferências.",
  
  keywords: ["Política de Cookies", "Engenharia", "Empresa Júnior", "UTFPR", "Curitiba", "LGPD", "Cookies"],

  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/politica/cookies",
  }
};

export default function CookiesPolicy() {
  return (
    <div className="pt-32 pb-24 bg-zinc-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
        
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-cromo" />
            <span className="text-cromo font-bold tracking-widest text-[10px] uppercase">
              Diretrizes
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            Política de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">Cookies</span>
          </h1>
          <p className="text-zinc-400 mt-4 text-sm">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
        </div>

        <div className="prose prose-invert prose-zinc max-w-none prose-headings:font-bold prose-headings:text-white prose-a:text-cromo prose-a:no-underline hover:prose-a:underline">
          
          <h2 className="text-xl md:text-2xl mt-8 mb-4 text-white">1. O que são Cookies?</h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
            Cookies são pequenos arquivos de texto criados pelos sites que você visita e que são salvos no seu computador ou dispositivo móvel através do navegador. Eles servem para fazer o site funcionar de forma mais eficiente, além de fornecer informações estatísticas e comerciais para os proprietários do portal.
          </p>

          <h2 className="text-xl md:text-2xl mt-8 mb-4 text-white">2. Como Controlar os Cookies?</h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
            Em nosso site, nenhum cookie de rastreamento (como Google Analytics, Meta Pixel ou LinkedIn Insight Tag) é ativado antes que você dê o seu consentimento explícito clicando em &quot;Aceitar&quot; em nosso banner informativo. Você pode alterar suas preferências ou revogar seu consentimento limpando o cache do seu navegador a qualquer momento.
          </p>

          <h2 className="text-xl md:text-2xl mt-8 mb-4 text-white">3. Cookies que Utilizamos</h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-4">
            Classificamos os cookies utilizados em nosso domínio em três categorias principais:
          </p>
          <ul className="list-disc pl-6 text-zinc-400 text-sm md:text-base space-y-4 mb-6 marker:text-cromo">
            <li>
              <strong>Cookies Necessários (Sempre Ativos):</strong> São essenciais para o funcionamento básico do site, permitindo navegação segura e integridade de formulários. Não armazenam dados de identificação pessoal.
            </li>
            <li>
              <strong>Cookies de Desempenho e Estatísticas (Google Analytics):</strong> Nos ajudam a entender como os visitantes interagem com o site, coletando informações sobre as áreas visitadas, o tempo gasto e mensagens de erro. Só funcionam se você aceitar o banner.
            </li>
            <li>
              <strong>Cookies de Publicidade e Redes Sociais (LinkedIn Tag):</strong> Utilizados para rastrear a eficácia de campanhas de anúncios institucionais e exibir anúncios mais relevantes para o seu perfil profissional. Só funcionam se você aceitar o banner.
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl mt-8 mb-4 text-white">4. Atualizações desta Política</h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
            Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças nas tecnologias que utilizamos ou nas regulamentações legais. Recomendamos que você revise esta página regularmente para se manter informado.
          </p>
          
        </div>
      </div>
    </div>
  );
}