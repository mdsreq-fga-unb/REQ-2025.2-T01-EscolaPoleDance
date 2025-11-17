import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutSection from './section/AboutSection';
import DifferencesSection from "./section/DifferencesSection";
import GaleriaSection from "./section/GaleriaSection";


export default function AboutPage() {
    return (
        <>
            <Navbar />
            <AboutSection />
            <DifferencesSection />
            <GaleriaSection />
            <Footer />
        </>
    );
}