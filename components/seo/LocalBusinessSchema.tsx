import React from 'react';

export default function LocalBusinessSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Cromo Consultoria',
    image: 'https://www.cromoconsultoria.com.br/assets/logo/logo-cromo.png', // Alterar em produção quanto tiver o link correto
    '@id': 'https://www.cromoconsultoria.com.br',
    url: 'https://www.cromoconsultoria.com.br',
    telephone: '+5541987288213',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'R. Dep. Heitor Alencar Furtado, 4900 - Bloco L, andar 2 - Campina do Siqueira',
      addressLocality: 'Curitiba',
      addressRegion: 'PR',
      postalCode: '81020-490',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -25.4433568,
      longitude: -49.3533819,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '07:00',
      closes: '17:00',
    },
    sameAs: [
      'https://www.facebook.com/CromoConsultoria',
      'https://www.instagram.com/cromoconsultoria/',
      'https://www.linkedin.com/company/cromoconsultoria/'
    ],
    description: 'Consultoria especializada em engenharia mecânica e mecatrônica em Curitiba. Transformamos desafios técnicos em produtos inovadores e processos otimizados com o rigor acadêmico da UTFPR e visão de mercado.',
    priceRange: '$',
    areaServed: 'Curitiba',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}