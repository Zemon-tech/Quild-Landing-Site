"use client"

import Navigation from '@/components/landing/Navigation';
import { HeroSectionDemo } from '@/components/landing/HeroSectionDemo';
import EcosystemSection from '@/components/landing/EcosystemSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import FAQSection from '@/components/landing/FAQSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <main className="min-h-screen font-space-mono">
      <Navigation />
      <HeroSectionDemo />
      <EcosystemSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
