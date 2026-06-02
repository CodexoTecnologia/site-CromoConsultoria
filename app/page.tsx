// src/app/page.tsx
import { Metadata } from "next";
import Hero from "@/components/sections/home/Hero";
import About from "@/components/sections/home/About";
import SocialProof from "@/components/sections/home/SocialProof";
import SimplifiedService from "@/components/sections/home/SimplifiedService";
import ContactForm from "@/components/sections/shared/ContactForm";
import Feedback from "@/components/sections/home/Feedback";
import Benefits from "@/components/sections/home/Benefits";
import Cases from "@/components/sections/home/Cases";
import Blog from "@/components/sections/home/Blog";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

export const metadata: Metadata = {
  title: "Engenharia Mecânica e Mecatrônica em Curitiba",
  description: "Desenvolvemos projetos personalizados com qualidade, inovação e custo acessível. A ponte entre a pesquisa de ponta da UTFPR e a indústria.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <Hero />
      <About />
      <Benefits />
      <SocialProof />
      <SimplifiedService />
      <Cases />
      <Feedback />
      <Blog />
      <ContactForm 
        headingLine1="TIRE SEU PROJETO"
        headingLine2="DO PAPEL COM A CROMO!"
        subtitle="Fale com nossos engenheiros e dê o primeiro passo para transformar sua ideia em realidade." 
      />

    </>
  );
}