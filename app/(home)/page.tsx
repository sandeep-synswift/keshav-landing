import Hero from "./components/Hero";
import About from "./components/About";
import ImmigrationServices from "./components/ImmigrationServices";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ServingAreas from "./components/ServingAreas";
import CTA from "./components/CTA";
import LegalDisclaimer from "./components/LegalDisclaimer";
import FloatingButtons from "./components/FloatingButtons";
import ContactModal from "./components/ContactModal";
import PrivacyDisclaimerModal from "./components/PrivacyDisclaimerModal";

export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PrivacyDisclaimerModal />
      <Hero />
      <About />
      <ImmigrationServices />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ServingAreas />
      {/* <CTA /> */}
      <LegalDisclaimer />
      <FloatingButtons />
      <ContactModal />
    </main>
  );
}