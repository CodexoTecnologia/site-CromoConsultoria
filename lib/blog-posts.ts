export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "futuro-da-mecatronica-industria-4-0",
    title: "O Futuro da Mecatrônica na Indústria 4.0",
    category: "Tendências",
    date: "15 Abr, 2026",
    excerpt:
      "Como a integração de sistemas mecânicos, eletrônicos e computacionais está redefinindo a manufatura moderna e criando novos paradigmas de eficiência.",
    content:
      "mecatrônica industria automação robótica sensores IoT manufatura inteligente sistemas embarcados controle processos eficiência produção",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
    readTime: "6 min",
    tags: ["mecatrônica", "indústria 4.0", "automação", "IoT", "manufatura"],
  },
  {
    slug: "como-proteger-sua-invencao-com-patentes",
    title: "Como Proteger Sua Invenção com Patentes no Brasil",
    category: "Propriedade Intelectual",
    date: "10 Abr, 2026",
    excerpt:
      "Um guia prático sobre o processo de depósito de patentes no INPI, requisitos de patenteabilidade e estratégias para proteger sua inovação.",
    content:
      "patente inpi propriedade intelectual invenção registro proteção inovação depósito documento reivindicação modelo utilidade",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200",
    readTime: "8 min",
    tags: ["patentes", "INPI", "propriedade intelectual", "inovação"],
  },
  {
    slug: "otimizacao-de-processos-guia-gestores",
    title: "Otimização de Processos: Guia Completo para Gestores",
    category: "Eficiência",
    date: "02 Abr, 2026",
    excerpt:
      "Metodologias comprovadas para mapear, analisar e melhorar processos industriais, reduzindo custos e aumentando a produtividade da sua operação.",
    content:
      "otimização processos lean six sigma kaizen mapeamento fluxo valor desperdício produtividade custos gestão operações",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200",
    readTime: "7 min",
    tags: ["otimização", "lean", "processos", "gestão", "produtividade"],
  },
  {
    slug: "prototipagem-rapida-validacao-produto",
    title: "Prototipagem Rápida: Da Ideia ao Produto Validado",
    category: "Desenvolvimento",
    date: "25 Mar, 2026",
    excerpt:
      "Como a impressão 3D, usinagem CNC e outras tecnologias de prototipagem aceleram o ciclo de desenvolvimento e reduzem riscos antes da escala industrial.",
    content:
      "prototipagem impressão 3D usinagem CNC validação produto desenvolvimento engenharia fabricação testes iteração design",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1200",
    readTime: "5 min",
    tags: ["prototipagem", "impressão 3D", "CNC", "desenvolvimento de produto"],
  },
  {
    slug: "estudo-viabilidade-tecnica-financeira",
    title: "Estudo de Viabilidade: Por Que É Essencial Antes de Investir",
    category: "Estratégia",
    date: "18 Mar, 2026",
    excerpt:
      "Entenda como um estudo de viabilidade técnica e financeira pode evitar prejuízos milionários e dar segurança ao seu investimento em novos projetos.",
    content:
      "viabilidade técnica financeira investimento risco projeto análise custo benefício retorno mercado demanda engenharia",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200",
    readTime: "6 min",
    tags: ["viabilidade", "investimento", "análise", "estratégia", "risco"],
  },
  {
    slug: "engenharia-mecanica-aplicada-startups",
    title: "Engenharia Mecânica Aplicada a Startups de Hardware",
    category: "Inovação",
    date: "10 Mar, 2026",
    excerpt:
      "O papel da engenharia mecânica no sucesso de startups de hardware: desde o design conceitual até a industrialização em escala, os desafios e as melhores práticas.",
    content:
      "startup hardware engenharia mecânica design conceitual industrialização escala DFM DFA manufatura custo produto inovação",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200",
    readTime: "9 min",
    tags: ["startup", "hardware", "engenharia mecânica", "industrialização"],
  },
];
