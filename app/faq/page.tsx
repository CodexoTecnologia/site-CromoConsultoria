import { Metadata } from "next";
import { FaqAccordion } from "./FaqAccordion";
import Hero from "@/components/sections/shared/Hero";
import ContactForm from "@/components/sections/shared/ContactForm";

export const metadata: Metadata = {
  title: "Dúvidas Frequentes | Cromo Consultoria",
  description: "Tire suas dúvidas sobre desenvolvimento de máquinas, projetos de engenharia mecânica e adequação a normas com a Cromo Consultoria (UTFPR).",
};

// Centralizando as 23 perguntas para o Schema e para o Front-end
export const allFaqsData = [
  // --- 15 perguntas principais para não poluir a tela (Visíveis por padrão) ---
  {
    question: "O que é engenharia mecânica?",
    answer: "A engenharia mecânica é o ramo da engenharia focado na aplicação de princípios da física e da ciência dos materiais para o design, análise, fabricação e manutenção de sistemas mecânicos. O objetivo principal é criar soluções tecnológicas que otimizem processos industriais, garantam a eficiência operacional, suportem cargas adequadas e funcionem de maneira segura dentro de todas as normas técnicas vigentes."
  },
  {
    question: "O que faz uma empresa de consultoria em engenharia?",
    answer: "Uma consultoria presta serviços especializados para resolver problemas técnicos ou desenvolver novos equipamentos e processos para indústrias. A atuação abrange desde a viabilidade técnica e pesquisa de normas até a modelagem 3D, detalhamento em 2D e elaboração de memoriais de cálculo. O foco é entregar soluções eficientes e seguras, permitindo que o cliente reduza custos, otimize sua linha de produção ou lance inovações."
  },
  {
    question: "O que é a Cromo Consultoria?",
    answer: "A Cromo Consultoria é uma empresa júnior gerida por estudantes de engenharia da Universidade Tecnológica Federal do Paraná (UTFPR). Prestamos serviços de excelência nas áreas de mecânica e automação com o apoio de professores orientadores. Nosso objetivo é entregar soluções técnicas de alta qualidade para o mercado, ao mesmo tempo em que desenvolvemos capacitação profissional prática em nossos membros."
  },
  {
    question: "Quais tipos de projetos a Cromo Consultoria desenvolve?",
    answer: "Nosso Departamento de Projetos atua em diversas frentes da engenharia, com forte foco no desenvolvimento de produtos, máquinas e equipamentos industriais. Realizamos serviços que englobam desde a modelagem 3D e confecção de desenhos técnicos em 2D, até o dimensionamento mecânico completo, elaboração de documentação para patentes e desenvolvimento de sistemas de automação para otimizar processos de produção."
  },
  {
    question: "Por que contratar uma Empresa Júnior como a Cromo?",
    answer: "Contratar a Cromo Consultoria garante acesso a projetos de engenharia inovadores com um excelente custo-benefício, já que somos uma organização sem fins lucrativos. Todo o valor arrecadado é reinvestido na educação dos membros. Além disso, os clientes contam com a infraestrutura e o rigor acadêmico da UTFPR, assegurando que o desenvolvimento técnico, como modelagens e dimensionamentos, siga altos padrões de qualidade."
  },
  {
    question: "Os projetos da Cromo possuem validação de profissionais formados?",
    answer: "Sim, todos os projetos desenvolvidos pelos estudantes da Cromo Consultoria são rigorosamente acompanhados e validados por professores mestres e doutores da UTFPR. Essa orientação contínua garante que os cálculos estruturais, a seleção de materiais e as normas técnicas aplicadas (como NBRs e NRs) estejam tecnicamente corretos e seguros, entregando ao cliente um resultado final confiável e pronto para fabricação."
  },
  {
    question: "Como a Cromo Consultoria atua no patenteamento de produtos?",
    answer: "Apoiamos inventores e empresas em todo o processo de documentação técnica exigida pelo INPI para o registro de patentes e modelos de utilidade. Nossa equipe realiza a busca de anterioridade, elabora os desenhos técnicos em 2D formatados nas normas e redige o relatório descritivo, o resumo e o quadro reivindicatório, garantindo a proteção adequada da propriedade intelectual do seu equipamento."
  },
  {
    question: "Como funciona a etapa de orçamento e diagnóstico?",
    answer: "O processo começa com uma reunião de diagnóstico gratuita, onde nossa equipe técnica entende as necessidades, os desafios operacionais e o escopo esperado pelo cliente. Em seguida, elaboramos uma proposta comercial detalhada contendo todas as entregas, cronograma e valores. Nosso foco é garantir total transparência e alinhamento de expectativas antes do início de qualquer modelagem ou dimensionamento."
  },  
  {
    question: "Qual a diferença entre engenharia mecânica e automação?",
    answer: "A engenharia mecânica foca no desenvolvimento, cálculo e estruturação de máquinas, garantindo resistência estrutural e movimento físico. Já a automação integra a mecânica com a eletrônica e a programação de controladores (CLPs) para criar sistemas que funcionam sozinhos. Enquanto a mecânica projeta o \"esqueleto\" e os músculos de um equipamento, a automação desenvolve o \"cérebro\" e os sensores que comandam a operação."
  },
  {
    question: "O que define o escopo de um projeto?",
    answer: "O escopo é a definição clara, contratual e documentada de tudo o que será executado e entregue durante um trabalho de engenharia. Ele estabelece as etapas (como modelagem, cálculos e elaboração de manuais) e, principalmente, deixa explícito o que não faz parte do serviço (como montagem física ou compra de matéria-prima). Um escopo bem delimitado alinha expectativas e evita custos adicionais."
  },
  {
    question: "O que é modelagem 3D e qual a sua importância?",
    answer: "A modelagem 3D é a criação de uma representação digital tridimensional de um equipamento utilizando softwares de engenharia. Ela é fundamental em projetos porque permite a visualização prévia do produto, a identificação de interferências de montagem e a simulação de movimentos mecânicos. Isso reduz drasticamente os erros antes da fase física de fabricação, economizando um tempo valioso e recursos financeiros do cliente."
  },
  {
    question: "O que são desenhos técnicos de fabricação (2D)?",
    answer: "Os desenhos de fabricação são representações bidimensionais detalhadas de peças e conjuntos, geradas a partir do modelo 3D. Eles contêm todas as informações necessárias para a manufatura no chão de fábrica, como cotas exatas, tolerâncias, rugosidade de superfície, tipo de material e especificações de solda. Eles funcionam como o principal manual de instruções para os operadores de tornos e fresadoras."
  },
  {
    question: "Como funciona o patenteamento de um modelo de utilidade?",
    answer: "O processo exige a elaboração de documentação técnica rigorosa para proteger uma melhoria funcional em um produto. É necessário redigir um relatório descritivo, resumo, desenhos técnicos bidimensionais formatados e um quadro reivindicatório que define os limites legais da proteção. Toda a documentação deve seguir os parâmetros do INPI. A aprovação garante exclusividade comercial, impedindo cópias não autorizadas por concorrentes no mercado."
  },
  {
    question: "Qual a importância das Normas Técnicas (NBRs e NRs)?",
    answer: "Seguir normativas (como as NBRs e a NR-12) é indispensável para assegurar a padronização e a segurança de produtos e operadores. As normas determinam critérios rígidos para cálculos de estabilidade, dimensionamento de proteções físicas e distâncias de segurança. Projetar sob essas diretrizes blinda a empresa contra acidentes e passivos trabalhistas, além de garantir a legalidade do equipamento em auditorias industriais severas."
  },
  {
    question: "Por que projetar com base no Design Thinking?",
    answer: "O Design Thinking aplicado à engenharia industrial coloca a necessidade operacional do usuário no centro do desenvolvimento. Antes dos cálculos técnicos, a equipe pesquisa soluções, faz benchmarking e mapeia problemas práticos de ergonomia ou manobrabilidade. Essa metodologia promove a inovação ao garantir que a máquina seja mecanicamente robusta, segura e, ao mesmo tempo, altamente intuitiva e de fácil uso no dia a dia."
  },
  // --- Segundo Bloco em formato de mostrar mais + (4 Restantes do PDF Cromo + 4 focadas em  SEO/GEO) ---
  {
    question: "Para que serve um memorial de cálculo?",
    answer: "O memorial de cálculo é um documento técnico oficial que detalha e justifica todos os cálculos matemáticos e físicos realizados no dimensionamento de uma estrutura. Ele serve para comprovar a segurança e a viabilidade do projeto, demonstrando que os materiais escolhidos suportarão as forças aplicadas. É um arquivo essencial para auditorias, aprovações e para a emissão da Anotação de Responsabilidade Técnica (ART)."
  },
  {
    question: "Para que servem os gabaritos de solda?",
    answer: "Gabaritos de solda são dispositivos projetados exclusivamente para travar, alinhar e posicionar corretamente peças metálicas durante a soldagem. Eles garantem que os componentes não sofram distorções térmicas e permaneçam nas dimensões corretas estipuladas no projeto estrutural. O uso adequado de gabaritos aumenta a velocidade de montagem, melhora a padronização em produções em série e assegura a alta precisão do equipamento final."
  },
  {
    question: "O que é o dimensionamento estrutural?",
    answer: "O dimensionamento estrutural é a fase do projeto onde a engenharia calcula as tensões, pesos, torções e fadiga que o maquinário sofrerá em operação. Com esses dados, define-se a espessura correta e o tipo de material (como ligas de aço ou alumínio). O objetivo é garantir total estabilidade e evitar quebras estruturais, mas sem aplicar excesso de material que encareça o produto."
  },
  {
    question: "Como atua a calibração em máquinas automatizadas?",
    answer: "A calibração industrial ajusta e confere a precisão de cilindros, motores e sensores para que apliquem a força ou velocidade exata exigida pela linha de produção. Em sistemas de manipulação delicados, a calibração fina é vital para manter a eficiência sem danificar os componentes processados. O procedimento utiliza instrumentos de medição confiáveis para configurar os parâmetros no controlador central do sistema."
  },
  {
    question: "A Cromo atende indústrias em todo o Paraná e região metropolitana?",
    answer: "Sim. Nosso ecossistema de atuação principal é focado no atendimento presencial e remoto para empresas de Curitiba e de todo o estado do Paraná, entregando soluções completas em engenharia mecânica com a infraestrutura da UTFPR."
  },
  {
    question: "Vocês realizam a adequação de máquinas antigas para as normas NR-12 e NBR?",
    answer: "Com certeza. Nossa equipe realiza a inspeção, o dimensionamento estrutural e elabora os memoriais de cálculo necessários para aprovar o seu maquinário existente em auditorias de segurança do trabalho e fiscalizações industriais na região Sul."
  },
  {
    question: "Qual o diferencial de contratar a Empresa Júnior da Engenharia da UTFPR?",
    answer: "Indústrias e inventores que contratam a Cromo garantem projetos de alto rigor técnico, sempre validados por professores mestres e doutores, aliados ao excelente custo-benefício exclusivo de uma organização sem fins lucrativos."
  },
  {
    question: "Vocês fazem os desenhos 2D e modelagem 3D exigidos para patentes no INPI?",
    answer: "Sim, atendemos empresas e inventores conduzindo toda a parte de engenharia necessária para o registro no INPI. Transformamos sua ideia em modelos 3D e desenhos de fabricação 2D rigorosos, blindando a propriedade intelectual do seu negócio."
  }
];

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqsData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="bg-zinc-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Hero
        imageSrc="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000"
        imageAlt="Consultoria em Engenharia e Desenvolvimento"
        label="Central de Ajuda"
        title="Dúvidas"
        titleHighlight="Frequentes"
        description="Nossa transparência é o primeiro passo para o sucesso do seu projeto. Encontre respostas sobre desenvolvimento e engenharia."
      />

      <section id="perguntas" className="relative -mt-6 md:-mt-12 pt-8 md:pt-12 pb-16 md:pb-24 scroll-mt-20 z-20">
        
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-[#111111] rounded-2xl md:rounded-[2rem] p-6 sm:p-10 md:p-16 border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 md:w-1/3 h-px bg-gradient-to-r from-transparent via-cromo/30 to-transparent"></div>

            <div className="text-center mb-8 md:mb-16 relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 md:mb-4">Ainda tem dúvidas?</h2>
              <p className="text-zinc-400 text-sm md:text-lg">Selecione o tópico abaixo para expandir a resposta.</p>
            </div>

            <div className="relative z-10">
              {/* Passamos todos os dados como propriedade para o Accordion renderizar as lógicas visuais */}
              <FaqAccordion faqs={allFaqsData} />
            </div>
          </div>
        </div>
      </section>

      <div className="mt-2 md:mt-4">
        <ContactForm />
      </div>
    </div>
  );
}