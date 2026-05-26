// lib/site.ts

export const site = {
  name: "Cromo Consultoria",
  shortName: "Cromo",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.cromoconsultoria.com.br",
  locale: "pt_BR",
  description:
    "Transformamos desafios técnicos em produtos reais com engenharia, estratégia e segurança intelectual.",
  defaultOgImage: "/assets/images/og-image-default.png",

  contact: {
    email: "contato@cromoconsultoria.com.br",
    phone: {
      display: "(41) 8728-8213",
      e164: "+5541987288213", // formato internacional limpo
      whatsappLink: "https://wa.me/554187288213",
      whatsappMessage: "Olá, gostaria de saber mais sobre a Cromo Consultoria!",
    },
  },

  address: {
    street: "R. Dep. Heitor Alencar Furtado, 4900 - Bloco L, andar 2",
    neighborhood: "Campina do Siqueira",
    city: "Curitiba",
    region: "PR",
    postalCode: "81020-490",
    country: "BR",
    geo: { latitude: -25.4433568, longitude: -49.3533819 },
  },

  social: {
    linkedin: "https://www.linkedin.com/company/cromoconsultoria/",
    instagram: "https://www.instagram.com/cromoconsultoria/",
    facebook: "https://www.facebook.com/CromoConsultoria",
  },

  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const,
    opens: "07:00",
    closes: "17:00",
  },

  agency: {
    name: "Codexo",
    url: "https://codexo.com.br",
  },
} as const;

export type Site = typeof site;