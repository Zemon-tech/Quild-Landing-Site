import type { Metadata } from 'next';
import PricingSection from '@/components/landing/PricingPage';
import Navigation from '@/components/landing/Navigation';

export const metadata: Metadata = {
  title: "Quild Pricing - Free & Premium Programming Learning Plans",
  description: "Choose the perfect Quild plan for your programming journey. Start free with basic features or upgrade to premium for advanced projects, competitions, and exclusive content. Compare plans and pricing.",
  keywords: [
    "Quild pricing", "programming courses pricing", "coding bootcamp cost", 
    "programming education plans", "coding platform subscription", 
    "free programming courses", "premium coding education", "Quild plans"
  ],
  openGraph: {
    title: "Quild Pricing - Free & Premium Programming Learning Plans",
    description: "Choose the perfect Quild plan for your programming journey. Start free with basic features or upgrade to premium for advanced projects, competitions, and exclusive content.",
    url: 'https://quild.com/pricing',
  },
  twitter: {
    title: "Quild Pricing - Free & Premium Programming Learning Plans",
    description: "Choose the perfect Quild plan for your programming journey. Start free or upgrade to premium.",
  },
  alternates: {
    canonical: 'https://quild.com/pricing',
  },
};

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <PricingSection />
    </>
  );
} 