import type { Metadata } from "next";
import { Poppins, Bebas_Neue } from "next/font/google";
import Script from "next/script";
import dynamic from "next/dynamic"; // 1. Importe o dynamic
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TextureBackground from "@/components/layout/TextureBackground";

// 2. Transforme os itens "acessórios" em carregamento assíncrono
const WhatsAppButton = dynamic(() => import("@/components/sections/shared/WhatsAppButton"));
const CookieConsent = dynamic(() => import("@/components/sections/shared/CookieConsent"));
const GlobalSpotlight = dynamic(() => import("@/components/ui/GlobalSpotlight"));

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cromoconsultoria.com.br';
const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Engenharia Mecânica e Mecatrônica em Curitiba | Cromo Consultoria",
    template: "%s | Cromo Consultoria"
  },
  description: "Transformamos desafios técnicos em produtos reais com engenharia, estratégia e segurança intelectual.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Cromo Consultoria",
    images: [
      {
        url: "/assets/images/og-image-default.png", 
        width: 1200,
        height: 628,
        alt: "Cromo Consultoria - Inovação e Patentes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/images/og-image-default.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${bebasNeue.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <head>
        {/* 1. CONSENT MODE DEFAULT — roda ANTES de tudo */}
        <script
          id="google-consent-default"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}

              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'personalization_storage': 'denied',
                'security_storage': 'granted',
                'wait_for_update': 500
              });

              gtag('set', 'url_passthrough', true);
              gtag('set', 'ads_data_redaction', true);
            `,
          }}
        />

        {/* 2. GTM — depois do default */}
        {gtmId && (
          <Script
            id="google-tag-manager"
            strategy="lazyOnload" // Carrega o GTM de forma otimizada, sem bloquear a renderização
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer', '${gtmId}');
              `,
            }}
          />
        )}
      </head>
      
      <body className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 overflow-x-hidden selection:bg-cromo selection:text-zinc-950">
        
        {/* NOSCRIPT DO GTM (Garante o funcionamento se o JS falhar/demorar) */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        <GlobalSpotlight />
        <TextureBackground />
        <Navbar />
        
        <main className="flex-grow w-full relative z-10">
          {children}
        </main>

        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}