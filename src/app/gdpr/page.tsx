import type { Metadata } from 'next';
import GDPRPageClient from './GDPRPageClient';

export const metadata: Metadata = {
  title: "GDPR Compliance - Quild",
  description: "Learn about Quild's GDPR compliance and your data protection rights under the General Data Protection Regulation.",
  keywords: [
    "GDPR", "data protection", "EU privacy rights", 
    "Quild GDPR", "data subject rights", "privacy compliance"
  ],
  openGraph: {
    title: "GDPR Compliance - Quild",
    description: "Learn about Quild's GDPR compliance and your data protection rights.",
    url: 'https://quild.com/gdpr',
  },
  twitter: {
    title: "GDPR Compliance - Quild",
    description: "Learn about Quild's GDPR compliance and your data protection rights.",
  },
  alternates: {
    canonical: 'https://quild.com/gdpr',
  },
};

export default function GDPRPage() {
  return <GDPRPageClient />;
}
