'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
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

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "Former software engineer at Google and Stanford CS graduate. Passionate about democratizing access to quality programming education and building the next generation of developers.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
  },
  {
    name: "Sarah Rodriguez",
    role: "Lead Backend Engineer",
    bio: "Full-stack developer with 8+ years of experience building scalable systems. Previously at Amazon and Microsoft. Loves mentoring junior developers and contributing to open source.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=300&auto=format&fit=crop"
  },
  {
    name: "Michael Kim",
    role: "Head of Community",
    bio: "Community builder and former coding bootcamp instructor. Believes in the power of peer learning and has helped thousands of students transition into tech careers.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop"
  },
  {
    name: "Emily Watson",
    role: "Lead Frontend Engineer",
    bio: "UI/UX expert and React specialist. Previously at Airbnb and Figma. Dedicated to creating intuitive, accessible learning experiences that students love to use.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop"
  },
  {
    name: "David Park",
    role: "Head of AI & ML",
    bio: "PhD in Computer Science from MIT, specializing in educational technology and AI. Leads our AI-powered learning features and personalized recommendation systems.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop"
  },
  {
    name: "Lisa Thompson",
    role: "VP of Education",
    bio: "Former CS professor with 15+ years of teaching experience. Expert in curriculum design and educational psychology. Ensures our content aligns with industry standards.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop"
  }
];

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
              Zemon was founded on a simple but powerful idea: every student with a passion for technology deserves the chance to become a confident, job-ready developer. We are here to bridge the critical gap between learning theory and building real-world applications.
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
                We believe every student should have access to world-class resources, mentorship, and opportunities to build real projects. Zemon is the platform that bridges the gap between learning and doing, helping students become confident, job-ready developers.
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
              What Makes Us Different: The Zemon Approach
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

      {/* Meet the Team */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a passionate team of developers, designers, and educators dedicated to building the ultimate platform for aspiring programmers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border/50 hover:shadow-lg transition-shadow"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
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
              Join thousands of students who are already building their future with Zemon.
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