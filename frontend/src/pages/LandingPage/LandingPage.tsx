import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ButtonWhatsapp from "@/components/ui/ButtonWhatsapp";
import HeroSection from "./sections/HeroSection";
import BenefitsSection from "./sections/BenefitsSection";
import AboutSection from "./sections/AboutSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import LocationSection from "./sections/LocationSection";
import CTASection from "./sections/CTASection";
import FAQSection from "./sections/FAQSection";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <AboutSection />
      <TestimonialsSection />
      <LocationSection />
      <CTASection />
      <FAQSection />
      <ButtonWhatsapp />
      <Footer />
    </>
  );
}







