// src/app/page.tsx
import Hero from "@/components/sections/home/Hero";
import About from "@/components/sections/home/About";
import SocialProof from "@/components/sections/home/SocialProof";
import SimplifiedService from "@/components/sections/home/SimplifiedService";
import ContactForm from "@/components/sections/shared/ContactForm";
import Feedback from "@/components/sections/home/Feedback";
import Benefits from "@/components/sections/home/Benefits";
import Cases from "@/components/sections/home/Cases";

// Importação do Schema de SEO Local
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

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
      <ContactForm />
    </>
  );
}