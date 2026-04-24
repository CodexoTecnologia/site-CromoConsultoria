// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/sections/shared/WhatsAppButton"; 

const geistSans = Geist({ 
  variable: "--font-geist-sans", 
  subsets: ["latin"] 
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cromoconsultoria.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Engenharia Mecânica e Mecatrônica em Curitiba | Cromo Consultoria",
    template: "%s | Cromo Consultoria"},
  description: "Transformamos ideias em produtos reais com engenharia, estratégia e segurança.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Cromo Consultoria | Engenharia Mecânica e Mecatrônica em Curitiba",
    description: "Transformamos ideias em produtos reais com engenharia, estratégia e segurança.",
    siteName: "Cromo Consultoria",
    images: [
      {
        // O caminho da imagem que vai aparecer no WhatsApp/LinkedIn
        url: "/assets/images/og-image-default.png", 
        width: 1200,
        height: 628,
        alt: "Cromo Consultoria - Inovação e Patentes",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Cromo Consultoria | Engenharia Mecânica e Mecatrônica em Curitiba",
    description: "Transformamos ideias em produtos reais com engenharia, estratégia e segurança.",
    images: ["/assets/images/og-image-default.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} antialiased scroll-smooth`}>
      <body className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 overflow-x-hidden">
        
        <Navbar />
        <main className="flex-grow w-full">
          {children}
        </main>

        <Footer />

        <WhatsAppButton />
      </body>
    </html>
  );
}