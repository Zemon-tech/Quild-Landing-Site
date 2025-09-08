import type { Metadata } from 'next';
import PrivacyPageClient from './PrivacyPageClient';

export const metadata: Metadata = {
  title: "Privacy Policy - Quild",
  description: "Learn how Quild protects your privacy and handles your personal data. Our comprehensive privacy policy covers data collection, usage, and your rights.",
  keywords: [
    "privacy policy", "data protection", "Quild privacy", 
    "personal data", "user privacy", "data security"
  ],
  openGraph: {
    title: "Privacy Policy - Quild",
    description: "Learn how Quild protects your privacy and handles your personal data.",
    url: 'https://quild.com/privacy',
  },
  twitter: {
    title: "Privacy Policy - Quild",
    description: "Learn how Quild protects your privacy and handles your personal data.",
  },
  alternates: {
    canonical: 'https://quild.com/privacy',
  },
};

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}



