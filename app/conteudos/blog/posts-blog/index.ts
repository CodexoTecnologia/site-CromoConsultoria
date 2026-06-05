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

import protegerPatentes from "./como-proteger-sua-invencao-com-patentes";
import otimizacaoProcessos from "./otimizacao-de-processos-guia-gestores";
import prototipagem from "./prototipagem-rapida-validacao-produto";
import estudoViabilidade from "./estudo-de-viabilidade";
import desenvolvimentoProdutos from "./desenvolvimento-de-produtos";
import engenhariaNacional from "./engenharia-reversa-nacionalizacao-pecas-reduzir-custos";

export const blogPosts: BlogPost[] = [
  protegerPatentes,
  otimizacaoProcessos,
  prototipagem,
  estudoViabilidade,
  desenvolvimentoProdutos,
  engenhariaNacional,
];
