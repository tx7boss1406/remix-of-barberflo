import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import LossSimulatorSection from "@/components/landing/LossSimulatorSection";
import BeliefBreakSection from "@/components/landing/BeliefBreakSection";
import SolutionSection from "@/components/landing/SolutionSection";
import VideoSection from "@/components/landing/VideoSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import FutureVisionSection from "@/components/landing/FutureVisionSection";
import ComparisonSection from "@/components/landing/ComparisonSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import UrgencySection from "@/components/landing/UrgencySection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";
import FloatingWhatsApp from "@/components/landing/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <LossSimulatorSection />
      <BeliefBreakSection />
      <SolutionSection />
      <VideoSection />
      <GuaranteeSection />
      <HowItWorksSection />
      <BenefitsSection />
      <FutureVisionSection />
      <ComparisonSection />
      <TestimonialsSection />
      <PricingSection />
      <UrgencySection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
