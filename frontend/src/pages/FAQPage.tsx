import Navbar from '..//components/layout/Navbar';
import FAQSection from './LandingPage/sections/FAQSection';
import Footer from '../components/layout/Footer';
import PublicLayout from '@/components/layout/PublicLayout';



export default function FAQPage() {
    return (
        <>
            <Navbar />
            <FAQSection />
            <PublicLayout />
            <Footer />
        </>
    );
}