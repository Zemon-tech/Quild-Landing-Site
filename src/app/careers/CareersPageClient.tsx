'use client';
import Navigation from '@/components/landing/Navigation';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  Users,
  Code,
  Heart,
  MapPin,
  Clock,
  ExternalLink,
  CheckCircle,
  Star,
  Briefcase,
  GraduationCap,
  Lightbulb
} from 'lucide-react';

const openPositions = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    experience: "5+ years",
    description: "Build the core platform that helps students learn programming through interactive challenges and AI-powered guidance.",
    requirements: [
      "5+ years of full-stack development experience",
      "Expertise in React, Node.js, and TypeScript",
      "Experience with AI/ML integration",
      "Strong problem-solving and communication skills"
    ]
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote / San Francisco",
    type: "Full-time",
    experience: "3+ years",
    description: "Design intuitive and engaging user experiences that make learning programming accessible and fun for students.",
    requirements: [
      "3+ years of product design experience",
      "Strong portfolio showcasing UX/UI design",
      "Experience with Figma and design systems",
      "Understanding of educational technology"
    ]
  },
  {
    title: "Content Creator & Educator",
    department: "Education",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    description: "Create high-quality programming tutorials, challenges, and educational content that helps students succeed.",
    requirements: [
      "2+ years of teaching or content creation experience",
      "Strong programming background",
      "Excellent written and verbal communication",
      "Experience with video production preferred"
    ]
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    experience: "4+ years",
    description: "Scale our infrastructure to support thousands of students learning and competing simultaneously.",
    requirements: [
      "4+ years of DevOps/Infrastructure experience",
      "Expertise in AWS, Docker, and Kubernetes",
      "Experience with CI/CD pipelines",
      "Strong monitoring and security practices"
    ]
  }
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision coverage for you and your family."
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Annual learning budget and time off for conferences, courses, and skill development."
  },
  {
    icon: MapPin,
    title: "Flexible Work",
    description: "Work from anywhere with flexible hours and unlimited PTO."
  },
  {
    icon: Star,
    title: "Equity & Growth",
    description: "Competitive equity package and opportunities for rapid career growth."
  },
  {
    icon: Users,
    title: "Team & Culture",
    description: "Join a diverse, inclusive team that values collaboration and innovation."
  },
  {
    icon: Lightbulb,
    title: "Impact",
    description: "Make a real difference in democratizing programming education worldwide."
  }
];

const values = [
  {
    title: "Student-First",
    description: "Everything we do is designed to help students succeed in their programming journey."
  },
  {
    title: "Innovation",
    description: "We embrace new technologies and creative solutions to solve complex problems."
  },
  {
    title: "Collaboration",
    description: "We believe the best solutions come from diverse teams working together."
  },
  {
    title: "Growth",
    description: "We're committed to continuous learning and improvement, both personally and professionally."
  }
];

export default function CareersPageClient() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
          <Badge variant="outline" className="mb-4 px-3 py-1 text-xs">Careers</Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">Coming Soon</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">We&apos;re crafting opportunities for builders. Check back soon or explore our features in the meantime.</p>
        </motion.div>
      </div>
    </>
  );
}
