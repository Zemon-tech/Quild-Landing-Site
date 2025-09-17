'use client';

import { motion } from 'framer-motion';

import { Badge } from '@/components/ui/badge';
import { FeatureSteps } from '@/components/ui/feature-section';
import { Sparkles } from 'lucide-react';

const journeyFeatures = [
  {
    step: 'Step 1',
    title: 'Create Your Profile',
    content: 'Set up your developer profile in 2 minutes. Choose your learning path, add your college details, and let our AI personalize your experience based on your goals.',
    image: '/images/create_profile.png' // Updated path
  },
  {
    step: 'Step 2',
    title: 'Learn & Practice',
    content: 'Access 100+ curated resources in The Forge and solve 500+ real-world problems in The Crucible. Get AI-powered hints and track your progress with detailed analytics.',
    image: '/images/learn&practice.png' // Updated path
  },
  {
    step: 'Step 3',
    title: 'Compete & Connect',
    content: 'Join The Arena with 10K+ students. Participate in weekly competitions, showcase your projects, and connect with mentors who can launch your career.',
    image: '/images/compete&connect.png' // Updated path
  },
  {
    step: 'Step 4',
    title: 'Launch Your Career',
    content: 'Build an impressive portfolio, connect with employers, and land your dream job. Our platform bridges the gap between learning and professional success.',
    image: '/images/launch_carrer.png' // Updated path
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Your Journey
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            How It
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your path to becoming a confident, job-ready developer in four simple steps. Start today, succeed tomorrow.
          </p>
        </motion.div>

        {/* Feature Steps Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FeatureSteps
            features={journeyFeatures}
            title="Your Journey to Success"
            autoPlayInterval={4000}
          />
        </motion.div>
      </div>
    </section>
  );
}