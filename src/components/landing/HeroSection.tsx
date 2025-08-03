'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Code, Users, Trophy } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] pt-24 flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 floating-particles" />
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 text-primary/20 animate-float"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Code size={40} />
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-20 text-accent/20 animate-float-delayed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Users size={40} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-20 text-primary/20 animate-float-more-delayed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Trophy size={40} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-10 text-accent/20 animate-float"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Sparkles size={40} />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <Badge className="mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Built for the Builder Within You
          </Badge>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Built for the Builder
          <br />
          <span className="text-foreground">Within You</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          The ultimate platform for college students to learn, build, and showcase their programming skills through real-world projects, coding competitions, and a vibrant community.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" className="text-lg px-8 py-6">
            Get Started for Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Explore Features
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Programming Challenges</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">10K+</div>
            <div className="text-sm text-muted-foreground">Active Students</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">100+</div>
            <div className="text-sm text-muted-foreground">Learning Resources</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

// Badge component for the sparkles badge
function Badge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 ${className}`}>
      {children}
    </div>
  );
}