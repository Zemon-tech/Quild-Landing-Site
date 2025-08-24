'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  Target, 
  Users, 
  Code, 
  Trophy, 
  BookOpen,
  Heart,
  Zap
} from 'lucide-react';

// Team section removed as requested

const principles = [
  {
    icon: Code,
    title: "Project-Based Learning",
    description: "We focus on learning through building with real-world applications."
  },
  {
    icon: Zap,
    title: "AI-Powered Assistance",
    description: "We provide personalized, intelligent assistance to help you overcome challenges and learn faster."
  },
  {
    icon: Users,
    title: "Supportive Community",
    description: "We cultivate an active and supportive community that fosters mentorship, collaboration, and networking."
  },
  {
    icon: Trophy,
    title: "Portfolio-Driven Success",
    description: "We provide the tools to not just learn, but to build a portfolio that showcases your verified skills to employers."
  },
  {
    icon: BookOpen,
    title: "Comprehensive Skill Tracking",
    description: "Our platform allows you to track your development across every skill, problem, and project."
  },
  {
    icon: Heart,
    title: "College Curriculum Integration",
    description: "We align with college curriculums to supplement and enhance formal education."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              About Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              We&apos;re Built for the
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Builder Within You</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Quild is a product of ZemonTech, a technology company dedicated to empowering the next generation of developers. We believe every student with a passion for technology deserves the chance to become a confident, job-ready developer. We are here to bridge the critical gap between learning theory and building real-world applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-card rounded-2xl p-8 border border-border/50"
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to empower the next generation of builders through real-world projects, coding competitions, and a vibrant community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 border border-border/50"
            >
              <div className="flex items-center mb-6">
                <Sparkles className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe every student should have access to world-class resources, mentorship, and opportunities to build real projects. Quild is the platform that bridges the gap between learning and doing, helping students become confident, job-ready developers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Makes Us Different: The Quild Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are more than just a learning platform; we are a complete ecosystem designed for growth and opportunity. Our approach is founded on these core principles:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border/50 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <principle.icon className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-lg font-semibold">{principle.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We envision a world where every aspiring developer has the tools, resources, and community support to turn their passion into a successful career in technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-card rounded-2xl p-8 border border-border/50"
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-bold">Democratizing Tech Education</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We aim to break down barriers to quality programming education, making world-class learning resources accessible to students regardless of their background or location.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 border border-border/50"
            >
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-bold">Building the Future Workforce</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our goal is to prepare the next generation of developers with the practical skills, real-world experience, and professional network needed to thrive in the rapidly evolving tech industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already building their future with Quild.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href={process.env.NEXT_PUBLIC_MAIN_APP_URL || 'http://localhost:5173'}>
                  Get Started for Free
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/pricing">
                  View Our Plans
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 