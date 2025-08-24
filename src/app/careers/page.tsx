import type { Metadata } from 'next';
import CareersPageClient from './CareersPageClient';

export const metadata: Metadata = {
  title: "Careers at Quild - Join Our Team & Build the Future of Programming Education",
  description: "Join Quild's mission to democratize programming education. We're hiring talented engineers, designers, and educators to help build the ultimate learning platform for college students.",
  keywords: [
    "Quild careers", "programming education jobs", "tech jobs", 
    "remote programming jobs", "education technology careers", 
    "Quild hiring", "programming platform jobs", "developer jobs"
  ],
  openGraph: {
    title: "Careers at Quild - Join Our Team & Build the Future of Programming Education",
    description: "Join Quild's mission to democratize programming education. We're hiring talented engineers, designers, and educators.",
    url: 'https://quild.com/careers',
  },
  twitter: {
    title: "Careers at Quild - Join Our Team & Build the Future of Programming Education",
    description: "Join Quild's mission to democratize programming education. We're hiring talented engineers, designers, and educators.",
  },
  alternates: {
    canonical: 'https://quild.com/careers',
  },
};

export default function CareersPage() {
  return <CareersPageClient />;
} 