import type { Metadata } from "next";
import { Poppins, Bebas_Neue } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/sections/shared/WhatsAppButton";
import TextureBackground from "@/components/layout/TextureBackground";
import CookieConsent from "@/components/sections/shared/CookieConsent";
import GlobalSpotlight from "@/components/ui/GlobalSpotlight";

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
        {/* ==========================================
            ESPAÇO RESERVADO PARA OS PIXELS (FASE 3)
            Deixaremos os IDs em branco para a Cromo preencher
            ========================================== */}
        
        {/* Google Analytics / GTM */}
        {/* <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} /> */}
        
        {/* Meta Pixel Code */}
        {/* <Script id="meta-pixel" strategy="afterInteractive">...</Script> */}
        
        {/* LinkedIn Insight Tag */}
        {/* <Script id="linkedin-tag" strategy="afterInteractive">...</Script> */}
      </head>
      
      <body className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 overflow-x-hidden selection:bg-cromo selection:text-zinc-950">
        
        {/* A MÁGICA ESTÁ AQUI: dangerouslySetInnerHTML e afterInteractive */}
        <Script 
          id="google-consent-default" 
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'personalization_storage': 'denied',
                'security_storage': 'granted' 
              });
            `
          }}
        />

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