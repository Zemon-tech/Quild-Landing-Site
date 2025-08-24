import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: "Contact Quild - Get Support, Ask Questions & Partner With Us",
  description: "Contact Quild for technical support, partnership inquiries, or general questions. Our team is here to help you succeed with your programming journey. Get in touch today!",
  keywords: [
    "contact Quild", "Quild support", "programming platform support", 
    "coding education contact", "technical support", "Quild help", 
    "programming questions", "Quild partnership"
  ],
  openGraph: {
    title: "Contact Quild - Get Support, Ask Questions & Partner With Us",
    description: "Contact Quild for technical support, partnership inquiries, or general questions. Our team is here to help you succeed.",
    url: 'https://quild.in/contact',
  },
  twitter: {
    title: "Contact Quild - Get Support, Ask Questions & Partner With Us",
    description: "Contact Quild for technical support, partnership inquiries, or general questions.",
  },
  alternates: {
    canonical: 'https://quild.in/contact',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
} 