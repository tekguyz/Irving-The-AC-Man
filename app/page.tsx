import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import WhyIrving from "@/components/WhyIrving";
import BrandsSection from "@/components/BrandsSection";
import ReviewsSection from "@/components/ReviewsSection";
import ServiceArea from "@/components/ServiceArea";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesSection />
      <WhyIrving />
      <BrandsSection />
      <ReviewsSection />
      <ServiceArea />
      <ContactSection />
      <Footer />
    </main>
  );
}
