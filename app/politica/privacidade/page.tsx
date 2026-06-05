import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Entenda como a Cromo Consultoria coleta, armazena e protege seus dados pessoais em conformidade com a LGPD. Saiba seus direitos e como entrar em contato.",
  
  keywords: ["Política de Privacidade", "Engenharia", "Empresa Júnior", "UTFPR", "Curitiba", "LGPD", "Privacidade"],

  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/politica/privacidade",
  }
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 bg-zinc-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
        
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-cromo" />
            <span className="text-cromo font-bold tracking-widest text-[10px] uppercase">
              Legal
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            Política de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cromo to-yellow-600">Privacidade</span>
          </h1>
          <p className="text-zinc-400 mt-4 text-sm">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
        </div>

        <div className="prose prose-invert prose-zinc max-w-none prose-headings:font-bold prose-headings:text-white prose-a:text-cromo prose-a:no-underline hover:prose-a:underline">
          
          <h2 className="text-xl md:text-2xl mt-8 mb-4 text-white">1. Introdução</h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
            A Cromo Consultoria respeita a sua privacidade e está comprometida em proteger os seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos e compartilhamos informações quando você visita nosso site ou utiliza nossos serviços, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
          </p>

          <h2 className="text-xl md:text-2xl mt-8 mb-4 text-white">2. Dados que Coletamos</h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-4">
            Coletamos diferentes tipos de informações para melhorar nossos serviços:
          </p>
          <ul className="list-disc pl-6 text-zinc-400 text-sm md:text-base space-y-2 mb-6 marker:text-cromo">
            <li><strong>Dados de Contato:</strong> Nome, e-mail e número de telefone fornecidos voluntariamente através dos nossos formulários.</li>
            <li><strong>Dados de Navegação (Cookies):</strong> Endereço IP, tipo de navegador, páginas visitadas e tempo gasto no site, coletados de forma anônima através de ferramentas analíticas.</li>
          </ul>

          <h2 className="text-xl md:text-2xl mt-8 mb-4 text-white">3. Como Usamos seus Dados</h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-4">
            Utilizamos suas informações para os seguintes propósitos:
          </p>
          <ul className="list-disc pl-6 text-zinc-400 text-sm md:text-base space-y-2 mb-6 marker:text-cromo">
            <li>Responder a orçamentos e dúvidas enviadas pelo formulário de contato.</li>
            <li>Melhorar a experiência do usuário em nosso site.</li>
            <li>Realizar campanhas de marketing direcionadas (apenas com o seu consentimento explícito).</li>
          </ul>

          <h2 className="text-xl md:text-2xl mt-8 mb-4 text-white">4. Cookies e Rastreamento</h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
            Utilizamos cookies para analisar o tráfego e personalizar o conteúdo. Você pode aceitar ou recusar o uso de cookies não essenciais através do banner de consentimento exibido ao acessar nosso site. Gerenciamos essas preferências através do Google Tag Manager para garantir a conformidade com suas escolhas.
          </p>

          <h2 className="text-xl md:text-2xl mt-8 mb-4 text-white">5. Seus Direitos (LGPD)</h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-4">
            De acordo com a LGPD, você tem o direito de:
          </p>
          <ul className="list-disc pl-6 text-zinc-400 text-sm md:text-base space-y-2 mb-6 marker:text-cromo">
            <li>Confirmar a existência de tratamento dos seus dados.</li>
            <li>Acessar os dados que possuímos sobre você.</li>
            <li>Solicitar a correção de dados incompletos ou desatualizados.</li>
            <li>Solicitar a exclusão dos seus dados pessoais dos nossos sistemas.</li>
          </ul>

          <h2 className="text-xl md:text-2xl mt-8 mb-4 text-white">6. Contato</h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
            Se você tiver qualquer dúvida sobre esta Política de Privacidade ou desejar exercer seus direitos, entre em contato conosco através do e-mail: <a href="mailto:contato@cromoconsultoria.com.br" className="text-cromo hover:underline">contato@cromoconsultoria.com.br</a>.
          </p>
          
        </div>
      </div>
    </div>
  );
}