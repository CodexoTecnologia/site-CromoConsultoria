import type { Metadata } from "next";
import Hero from "@/components/sections/shared/Hero";
import ContactForm from "@/components/sections/shared/ContactForm";
import QuemSomos from "@/components/sections/sobre/QuemSomos";
import Identidade from "@/components/sections/sobre/Identidade";
import Cultura from "@/components/sections/sobre/Cultura";
import RecursosMej from "@/components/sections/sobre/RecursosEMej";

export const metadata: Metadata = {
  title: "Consultoria em Engenharia da UTFPR, Curitiba",
  description: "Conheça a Empresa Júnior de Engenharia da UTFPR Curitiba. Conectamos rigor acadêmico ao mercado com soluções em mecânica e mecatrônica.",
  
  keywords: ["Engenharia", "Empresa Júnior", "UTFPR", "Curitiba", "Mecânica", "Mecatrônica"],

  alternates: {
    canonical: "/sobre",
  }
};

export default function SobreNosPage() {
  return (
    <main className="min-h-screen bg-zinc-950 relative w-full">
      
      <Hero
        imageSrc="/assets/images/home/equipe-home.png"
        imageAlt="Equipe Cromo Consultoria"
        label="Empresa Júnior"
        title="Sobre"
        titleHighlight="Nós"
        description="A Cromo Consultoria é uma empresa júnior vinculada à Universidade Tecnológica Federal do Paraná (UTFPR), campus Curitiba."
        imagePosition="object-[center_30%]"
      />

      <QuemSomos />
      
      <Identidade />
      
      <Cultura />
      
      <RecursosMej />

      <section id="contato" className="relative z-10 border-t border-zinc-900" aria-label="Formulário de Contato">
        <ContactForm />
      </section>
      
    </main>
  );
}