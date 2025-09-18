'use client';
import Navigation from '@/components/landing/Navigation';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  BookOpen,
  Code,
  Play,
  Clock,
  Users,
  Star
} from 'lucide-react';

const tutorialCategories = [
  {
    title: "Getting Started",
    description: "Learn the basics of programming and set up your development environment.",
    tutorials: [
      { title: "Introduction to Programming", duration: "2 hours", level: "Beginner", rating: 4.8 },
      { title: "Setting Up Your Development Environment", duration: "1 hour", level: "Beginner", rating: 4.9 },
      { title: "Your First Hello World", duration: "30 min", level: "Beginner", rating: 4.7 }
    ]
  },
  {
    title: "Web Development",
    description: "Master HTML, CSS, JavaScript, and modern web frameworks.",
    tutorials: [
      { title: "HTML Fundamentals", duration: "3 hours", level: "Beginner", rating: 4.8 },
      { title: "CSS Styling and Layout", duration: "4 hours", level: "Intermediate", rating: 4.9 },
      { title: "JavaScript Basics", duration: "5 hours", level: "Beginner", rating: 4.7 },
      { title: "React for Beginners", duration: "8 hours", level: "Intermediate", rating: 4.8 }
    ]
  },
  {
    title: "Data Structures & Algorithms",
    description: "Learn fundamental computer science concepts and problem-solving techniques.",
    tutorials: [
      { title: "Arrays and Strings", duration: "3 hours", level: "Beginner", rating: 4.8 },
      { title: "Linked Lists and Trees", duration: "4 hours", level: "Intermediate", rating: 4.9 },
      { title: "Sorting and Searching", duration: "5 hours", level: "Intermediate", rating: 4.7 },
      { title: "Dynamic Programming", duration: "6 hours", level: "Advanced", rating: 4.8 }
    ]
  },
  {
    title: "Backend Development",
    description: "Build robust server-side applications and APIs.",
    tutorials: [
      { title: "Node.js Fundamentals", duration: "6 hours", level: "Intermediate", rating: 4.8 },
      { title: "Database Design", duration: "4 hours", level: "Intermediate", rating: 4.9 },
      { title: "API Development", duration: "5 hours", level: "Intermediate", rating: 4.7 },
      { title: "Authentication & Security", duration: "3 hours", level: "Advanced", rating: 4.8 }
    ]
  }
];

const featuredTutorials = [
  {
    title: "Complete Python for Beginners",
    description: "Learn Python from scratch with hands-on projects and real-world applications.",
    duration: "12 hours",
    level: "Beginner",
    rating: 4.9,
    students: "2,500+",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Full-Stack Web Development",
    description: "Build complete web applications using modern technologies and best practices.",
    duration: "20 hours",
    level: "Intermediate",
    rating: 4.8,
    students: "1,800+",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "System Design Interview Prep",
    description: "Master system design concepts and ace your technical interviews.",
    duration: "15 hours",
    level: "Advanced",
    rating: 4.9,
    students: "900+",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop"
  }
];

export default function TutorialsPageClient() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
          <Badge variant="outline" className="mb-4 px-3 py-1 text-xs">Tutorials</Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">Coming Soon</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">We&apos;re building an in-depth learning library. Check back soon or explore our features in the meantime.</p>
        </motion.div>
      </div>
    </>
  );
}








