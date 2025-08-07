'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { FeatureSteps } from '@/components/ui/feature-section';
import { 
  Sparkles,
} from 'lucide-react';

const journeyFeatures = [
  {
    step: 'Step 1',
    title: 'Create Your Profile',
    content: 'Set up your developer profile, choose your learning path, and connect with the community. Our AI will personalize your experience based on your goals and current skill level.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop'
  },
  {
    step: 'Step 2',
    title: 'Learn & Practice',
    content: 'Dive into The Forge for curated learning resources and The Crucible for hands-on practice with 500+ programming challenges. Track your progress with detailed analytics.',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069&auto=format&fit=crop'
  },
  {
    step: 'Step 3',
    title: 'Compete & Connect',
    content: 'Join The Arena to participate in coding competitions, collaborate with peers, and showcase your skills. Build your reputation in the developer community.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop'
  },
  {
    step: 'Step 4',
    title: 'Launch Your Career',
    content: 'Build an impressive portfolio, connect with employers, and land your dream job. Our platform bridges the gap between learning and professional success.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop'
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
            Your path to becoming a confident, job-ready developer in four transformative steps.
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