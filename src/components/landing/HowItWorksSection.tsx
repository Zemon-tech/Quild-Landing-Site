'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { 
  UserPlus, 
  BookOpen, 
  Users, 
  Trophy, 
  Sparkles,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Onboard',
    description: 'Create your profile, set up your skills, and get ready to build.',
    icon: UserPlus,
    color: 'from-blue-500 to-cyan-500',
    details: [
      'Quick profile setup',
      'Skill assessment',
      'Learning preferences',
      'College details'
    ]
  },
  {
    step: '02',
    title: 'Develop Skills',
    description: 'Use The Forge to learn and The Crucible to practice with 500+ challenges.',
    icon: BookOpen,
    color: 'from-purple-500 to-pink-500',
    details: [
      'Curated learning paths',
      'Interactive challenges',
      'AI-powered assistance',
      'Progress tracking'
    ]
  },
  {
    step: '03',
    title: 'Engage and Compete',
    description: 'Join The Arena to participate in competitions and connect with the community.',
    icon: Users,
    color: 'from-orange-500 to-red-500',
    details: [
      'Coding competitions',
      'Community challenges',
      'Peer collaboration',
      'Mentorship opportunities'
    ]
  },
  {
    step: '04',
    title: 'Showcase and Shine',
    description: 'Build your portfolio, showcase your projects, and get noticed by employers.',
    icon: Trophy,
    color: 'from-green-500 to-emerald-500',
    details: [
      'Portfolio building',
      'Project showcase',
      'Employer connections',
      'Career opportunities'
    ]
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Getting Started
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How It
            <span className="gradient-text"> Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your journey to becoming a confident, job-ready developer in four simple steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2 z-0" />
          
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                {/* Step Circle */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>

                {/* Step Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Step Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center justify-center text-xs text-muted-foreground">
                        <CheckCircle className="w-3 h-3 text-primary mr-2" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 z-20">
                    <ArrowRight className="w-6 h-6 text-primary/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <Sparkles className="w-5 h-5 mr-2" />
            Ready to start your journey?
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            Join thousands of students who are already building their future with Zemon
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300">
              Get Started for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-border rounded-lg font-semibold hover:bg-muted transition-colors duration-300">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm">
            <div className="text-2xl font-bold text-primary mb-2">5 Minutes</div>
            <div className="text-sm text-muted-foreground">Setup Time</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm">
            <div className="text-2xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Free to Start</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm">
            <div className="text-2xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 