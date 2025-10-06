import Navbar from '../components/layout/Navbar';
import HeroSection from '@/components/layout/HeroSection';
import BenefitsSection from '@/components/layout/BenefitsSection';
import AboutSection from '@/components/layout/AboutSection';
import TestimonialsSection from '@/components/layout/TestimonialsSection';
import CTASection from '@/components/layout/CTASection';
import FAQSection from '@/components/layout/FAQSection';
import Footer from '@/components/layout/Footer';
import LocationSection from '@/components/layout/LocationSection';

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
      <Footer />
    </>
  )
}