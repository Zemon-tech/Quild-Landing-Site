'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, Zap, Users,CheckCircle } from 'lucide-react';

const ecosystemData = [
  {
    name: 'The Forge',
    description: 'Access curated learning resources to build your programming skills from the ground up',
    icon: BookOpen,
    features: ['Curated learning resources', 'Multiple resource types', 'Difficulty levels', 'Resource bookmarking'],
    benefits: ['Structured learning paths', 'Access to high-quality content', 'Personalized recommendations']
  },
  {
    name: 'The Crucible',
    description: 'Test your skills with challenging problems designed to push your limits',
    icon: Zap,
    features: ['500+ programming challenges', 'Multiple difficulty levels', 'AI-powered assistance', 'Solution analysis'],
    benefits: ['Improve problem-solving skills', 'Build a portfolio', 'Get AI-powered guidance', 'Prepare for interviews']
  },
  {
    name: 'The Arena',
    description: 'Compete with peers in coding competitions and climb the leaderboard',
    icon: Users,
    features: ['Real-time chat channels', 'Weekly coding challenges', 'Project showcase competitions', 'Leaderboards'],
    benefits: ['Connect with developers', 'Participate in competitions', 'Showcase projects', 'Build professional network']
  }
];

export default function EcosystemSection() {
  return (
    <section className="py-20 px-4 bg-background">
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
            Ecosystem
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The Zemon <span className="gradient-text">Ecosystem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the three pillars of Zemon's ecosystem designed to help you learn, practice, and showcase your programming skills.
          </p>
        </motion.div>

        {/* The Forge */}
        <motion.div
          className="w-full py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
              <div className="bg-card/30 backdrop-blur-sm rounded-xl w-full aspect-video h-full flex-1 overflow-hidden relative group border border-border/50 hover:bg-card/50 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex gap-4 pl-0 lg:pl-20 flex-col flex-1">
                <div>
                  <Badge variant="outline" className="border-primary/20 bg-primary/10 text-primary hover:bg-primary/20">
                    The Forge
                  </Badge>
                </div>
                <div className="flex gap-2 flex-col">
                  <h2 className="text-xl md:text-3xl tracking-tighter lg:max-w-xl font-regular text-left">
                    Access curated learning resources to build your programming skills from the ground up
                  </h2>
                  <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                    The Forge provides structured learning paths with high-quality content and personalized recommendations to help you master programming concepts.
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {ecosystemData[0].features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Button variant="default" className="text-primary-foreground">
                      Explore The Forge
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Crucible */}
        <motion.div
          className="w-full py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto">
            <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
              <div className="flex gap-4 pr-0 lg:pr-20 flex-col flex-1">
                <div>
                  <Badge variant="outline" className="border-primary/20 bg-primary/10 text-primary hover:bg-primary/20">
                    The Crucible
                  </Badge>
                </div>
                <div className="flex gap-2 flex-col">
                  <h2 className="text-xl md:text-3xl tracking-tighter lg:max-w-xl font-regular text-left">
                    Test your skills with challenging problems designed to push your limits
                  </h2>
                  <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                    The Crucible offers over 500 programming challenges with AI-powered assistance to improve your problem-solving skills and prepare you for technical interviews.
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {ecosystemData[1].features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Button variant="default" className="text-primary-foreground">
                      Enter The Crucible
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-card/30 backdrop-blur-sm rounded-xl w-full aspect-video h-full flex-1 overflow-hidden relative group border border-border/50 hover:bg-card/50 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap className="w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Arena */}
        <motion.div
          className="w-full py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
              <div className="bg-card/30 backdrop-blur-sm rounded-xl w-full aspect-video h-full flex-1 overflow-hidden relative group border border-border/50 hover:bg-card/50 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex gap-4 pl-0 lg:pl-20 flex-col flex-1">
                <div>
                  <Badge variant="outline" className="border-primary/20 bg-primary/10 text-primary hover:bg-primary/20">
                    The Arena
                  </Badge>
                </div>
                <div className="flex gap-2 flex-col">
                  <h2 className="text-xl md:text-3xl tracking-tighter lg:max-w-xl font-regular text-left">
                    Compete with peers in coding competitions and climb the leaderboard
                  </h2>
                  <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                    The Arena connects you with other developers through real-time chat channels, weekly coding challenges, and project showcase competitions.
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {ecosystemData[2].features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Button variant="default" className="text-primary-foreground">
                      Join The Arena
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            Ready to start your journey with Zemon's ecosystem?
          </div>
          <div className="flex justify-center">
            <Button size="lg" variant="default" className="text-primary-foreground px-8 py-6">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}