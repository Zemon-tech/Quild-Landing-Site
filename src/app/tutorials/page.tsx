import type { Metadata } from 'next';
import TutorialsPageClient from './TutorialsPageClient';

export const metadata: Metadata = {
  title: "Quild Programming Tutorials - Learn Coding from Beginner to Advanced",
  description: "Master programming with Quild's comprehensive tutorial library. Learn Python, JavaScript, web development, data structures, algorithms, and more with expert-led tutorials.",
  keywords: [
    "programming tutorials", "coding tutorials", "learn to code", 
    "programming courses", "coding lessons", "programming education", 
    "Quild tutorials", "programming for beginners", "coding bootcamp"
  ],
  openGraph: {
    title: "Quild Programming Tutorials - Learn Coding from Beginner to Advanced",
    description: "Master programming with Quild's comprehensive tutorial library. Learn Python, JavaScript, web development, data structures, algorithms, and more.",
    url: 'https://quild.com/tutorials',
  },
  twitter: {
    title: "Quild Programming Tutorials - Learn Coding from Beginner to Advanced",
    description: "Master programming with Quild's comprehensive tutorial library. Learn Python, JavaScript, web development, and more.",
  },
  alternates: {
    canonical: 'https://quild.com/tutorials',
  },
};

export default function TutorialsPage() {
  return <TutorialsPageClient />;
} 