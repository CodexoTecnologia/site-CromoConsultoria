import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cromoconsultoria.com.br';

  //Verificar antes do deploy quais rotas realmente existem e ajustar aqui.
  const routes = [
    '', 
    '/servicos', 
    '/servicos/desenvolvimentodeproduto',
    '/servicos/estudodeviabilidade',
    '/servicos/formulacaodepatentes',
    '/servicos/otimizacaodeprocesso',
    '/servicos/prototipagemevalidacao',
    '/sobre', 
    '/portfolio', 
    '/faq', 
    '/conteudos/blog'
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    // Lógica simples: A Home tem prioridade 1. Serviços prioridade 0.9. Resto 0.8.
    priority: route === '' ? 1 : route.includes('/servicos') ? 0.9 : 0.8,
  }));
}