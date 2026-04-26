export interface ContentSection {
  type: "heading" | "paragraph" | "list" | "quote";
  text?: string;
  items?: string[];
}

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
  author: string;
  sections: ContentSection[];
}

import futuroMecatronica from "./futuro-da-mecatronica-industria-4-0";
import protegerPatentes from "./como-proteger-sua-invencao-com-patentes";
import otimizacaoProcessos from "./otimizacao-de-processos-guia-gestores";
import prototipagem from "./prototipagem-rapida-validacao-produto";
import estudoViabilidade from "./estudo-viabilidade-tecnica-financeira";
import engineeringStartups from "./engenharia-mecanica-aplicada-startups";

export const blogPosts: BlogPost[] = [
  futuroMecatronica,
  protegerPatentes,
  otimizacaoProcessos,
  prototipagem,
  estudoViabilidade,
  engineeringStartups,
];
