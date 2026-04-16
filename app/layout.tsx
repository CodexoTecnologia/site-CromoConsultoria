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

export const metadata: Metadata = {
  title: "Cromo Consultoria | Inovação e Patentes",
  description: "Transformamos ideias em produtos reais com engenharia, estratégia e segurança.",
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