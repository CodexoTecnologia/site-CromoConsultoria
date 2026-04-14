// src/app/page.tsx
import Hero from "@/components/sections/home/Hero";
import About from "@/components/sections/home/About";
import SocialProof from "@/components/sections/home/SocialProof";
import SimplifiedService from "@/components/sections/home/SimplifiedService";
import ContactForm from "@/components/sections/shared/ContactForm";
import Feedback from "@/components/sections/home/Feedback";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SocialProof />
      <SimplifiedService />
      <Feedback />
      <ContactForm />
    </>
  );
}