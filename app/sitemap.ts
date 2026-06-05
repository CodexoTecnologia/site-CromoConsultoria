import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cromoconsultoria.com.br';

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
    '/conteudos/blog',
    '/conteudos/ebooks',
    '/politica/privacidade',
    '/politica/cookies',
  ];

  return routes.map((route) => {
    // Lógica corrigida para o Google entender os números decimais perfeitamente
    let routePriority = 0.8;
    if (route === '') {
      routePriority = 1.0;
    } else if (route.includes('/servicos')) {
      routePriority = 0.9;
    }

    return {
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: routePriority,
    };
  });
}