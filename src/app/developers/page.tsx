import type { Metadata } from 'next';
import DevelopersSection from '@/components/landing/DevelopersPage';
import Navigation from '@/components/landing/Navigation';

export const metadata: Metadata = {
  title: "Quild Developer Platform - API, SDKs & Integration Tools",
  description: "Build with Quild! Access our comprehensive API, SDKs, and developer tools. Integrate Quild's programming education platform into your applications and join our developer community.",
  keywords: [
    "Quild API", "Quild developer platform", "programming platform API", 
    "coding education SDK", "developer tools", "programming integration", 
    "Quild SDK", "developer documentation", "API documentation"
  ],
  openGraph: {
    title: "Quild Developer Platform - API, SDKs & Integration Tools",
    description: "Build with Quild! Access our comprehensive API, SDKs, and developer tools. Integrate Quild's programming education platform into your applications.",
    url: 'https://quild.in/developers',
  },
  twitter: {
    title: "Quild Developer Platform - API, SDKs & Integration Tools",
    description: "Build with Quild! Access our comprehensive API, SDKs, and developer tools.",
  },
  alternates: {
    canonical: 'https://quild.in/developers',
  },
};

export default function DevelopersPage() {
  return (
    <>
      <Navigation />
      <DevelopersSection />
    </>
  );
} 