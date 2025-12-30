import Hero from "./components/Hero";
import About from "./components/About";
import OurAttorneys from "./components/OurAttorneys";
import ImmigrationServices from "./components/ImmigrationServices";
import ApprovalRates from "./components/ApprovalRates";
import HowItWorks from "./components/HowItWorks";
import SuccessStories from "./components/SuccessStories";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
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
      <OurAttorneys />
      <ImmigrationServices />
      <ApprovalRates />
      <HowItWorks />
      <SuccessStories />
      <Testimonials />
      <CTA />
      <FAQ />
      {/* <WhyChooseUs /> */}
      {/* <ServingAreas /> */}
      {/* <CTA /> */}
      {/* <LegalDisclaimer />
      <FloatingButtons />
      <ContactModal /> */}
    </main>
  );
}