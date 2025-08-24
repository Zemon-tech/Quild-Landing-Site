import type { Metadata } from 'next';
import AboutSection from '@/components/landing/AboutPage';
import Navigation from '@/components/landing/Navigation';

export const metadata: Metadata = {
  title: "About Quild - Learn Programming with Real Projects & Coding Competitions",
  description: "Discover how Quild, a product of ZemonTech, is revolutionizing programming education for college students. Learn about our mission to democratize tech education and build the future workforce.",
  keywords: [
    "about Quild", "Quild programming platform", "programming education", 
    "coding for students", "ZemonTech", "programming community", 
    "coding competitions", "real-world projects", "programming courses"
  ],
  openGraph: {
    title: "About Quild - Learn Programming with Real Projects & Coding Competitions",
    description: "Discover how Quild, a product of ZemonTech, is revolutionizing programming education for college students. Learn about our mission to democratize tech education and build the future workforce.",
    url: 'https://quild.in/about',
  },
  twitter: {
    title: "About Quild - Learn Programming with Real Projects & Coding Competitions",
    description: "Discover how Quild, a product of ZemonTech, is revolutionizing programming education for college students.",
  },
  alternates: {
    canonical: 'https://quild.in/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <AboutSection />
    </>
  );
} 