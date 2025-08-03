"use client"

import Navigation from '@/components/landing/Navigation';
import { HeroSectionDemo } from '@/components/landing/HeroSectionDemo';
import EcosystemSection from '@/components/landing/EcosystemSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import PricingSection from '@/components/landing/PricingSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSectionDemo />
      <EcosystemSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
