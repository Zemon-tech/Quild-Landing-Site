import type { Metadata } from 'next';
import SupportPageClient from './SupportPageClient';

export const metadata: Metadata = {
  title: "Quild Support Center - Get Help & Technical Support",
  description: "Get help with Quild programming platform. Find answers to common questions, contact our support team, and access comprehensive help resources for learning programming.",
  keywords: [
    "Quild support", "programming help", "technical support", 
    "coding platform help", "programming education support", 
    "Quild help center", "programming tutorials", "coding assistance"
  ],
  openGraph: {
    title: "Quild Support Center - Get Help & Technical Support",
    description: "Get help with Quild programming platform. Find answers to common questions, contact our support team, and access comprehensive help resources.",
    url: 'https://quild.com/support',
  },
  twitter: {
    title: "Quild Support Center - Get Help & Technical Support",
    description: "Get help with Quild programming platform. Find answers to common questions and contact our support team.",
  },
  alternates: {
    canonical: 'https://quild.com/support',
  },
};

export default function SupportPage() {
  return <SupportPageClient />;
} 