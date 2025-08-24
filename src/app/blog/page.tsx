import type { Metadata } from 'next';
import Navigation from '@/components/landing/Navigation';

export const metadata: Metadata = {
  title: "Quild Blog - Programming Tutorials, Tips & Industry Insights",
  description: "Stay updated with the latest programming tutorials, coding tips, industry insights, and Quild platform updates. Learn from expert developers and improve your coding skills.",
  keywords: [
    "programming blog", "coding tutorials", "programming tips", 
    "coding insights", "programming education blog", "Quild blog", 
    "coding tutorials", "programming news", "developer blog"
  ],
  openGraph: {
    title: "Quild Blog - Programming Tutorials, Tips & Industry Insights",
    description: "Stay updated with the latest programming tutorials, coding tips, industry insights, and Quild platform updates.",
    url: 'https://quild.in/blog',
  },
  twitter: {
    title: "Quild Blog - Programming Tutorials, Tips & Industry Insights",
    description: "Stay updated with the latest programming tutorials, coding tips, and industry insights.",
  },
  alternates: {
    canonical: 'https://quild.in/blog',
  },
};

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background pt-32">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Coming soon! We&apos;re working on bringing you the latest insights, tutorials, and updates from the Quild team.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 