import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import ImmigrationServices from "@/components/ImmigrationServices";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import ProfessionalAffiliations from "@/components/ProfessionalAffiliations";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyChooseUs />
      <About />
      <ImmigrationServices />
      <CTA />
      <Testimonials />
      <HowItWorks />
      <ProfessionalAffiliations />
      <FAQ />
      <ContactForm />
    </main>
  );
}
