import type { Metadata } from 'next';
import CommunityPageClient from './CommunityPageClient';

export const metadata: Metadata = {
  title: "Quild Community - Connect with 10,000+ Developers Worldwide",
  description: "Join Quild's vibrant community of 10,000+ developers from 50+ countries. Participate in coding competitions, attend events, and collaborate on projects with fellow programmers.",
  keywords: [
    "Quild community", "programming community", "developer community", 
    "coding competitions", "programming events", "developer network", 
    "coding challenges", "programming meetups", "developer collaboration"
  ],
  openGraph: {
    title: "Quild Community - Connect with 10,000+ Developers Worldwide",
    description: "Join Quild's vibrant community of 10,000+ developers from 50+ countries. Participate in coding competitions, attend events, and collaborate on projects.",
    url: 'https://quild.com/community',
  },
  twitter: {
    title: "Quild Community - Connect with 10,000+ Developers Worldwide",
    description: "Join Quild's vibrant community of 10,000+ developers from 50+ countries.",
  },
  alternates: {
    canonical: 'https://quild.com/community',
  },
};

export default function CommunityPage() {
  return <CommunityPageClient />;
}