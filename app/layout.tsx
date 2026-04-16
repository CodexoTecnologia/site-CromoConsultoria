import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/sections/shared/WhatsAppButton";

const geistSans = Geist({ 
  variable: "--font-geist-sans", 
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Cromo Consultoria | Inovação e Patentes",
  description: "Transformamos ideias em produtos reais com estratégia e segurança.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} antialiased scroll-smooth`}>
      <body className="flex flex-col min-h-screen bg-white text-zinc-900">
        
        {/* HEADER / NAVBAR */}
        <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
          < Navbar />
        </header>

        <main className="flex-grow">
          {children}
        </main>

          < Footer />

          <WhatsAppButton />
      </body>
    </html>
  );
}