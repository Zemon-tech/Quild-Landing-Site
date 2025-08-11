'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Brain, 
  Users, 
  Code, 
  Target, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Zap,
  Trophy,
  Lightbulb,
  Rocket,
  Shield,
  Globe
} from 'lucide-react';
import {
  MinimalCard,
  MinimalCardImage,
  MinimalCardTitle,
  MinimalCardDescription,
  MinimalCardContent,
  MinimalCardFooter,
} from '@/components/ui/minimal-card';
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid';

const coreFeatures = [
  {
    title: "The Forge",
    subtitle: "Learn & Build",
    description: "Access curated learning resources to build your programming skills from the ground up.",
    image: "/images/forge.png",
    color: "from-blue-500 to-cyan-500",
    highlights: [
      "Curated learning resources",
      "Multiple difficulty levels", 
      "Resource bookmarking",
      "Progress tracking"
    ],
    stats: "100+ Resources"
  },
  {
    title: "The Crucible", 
    subtitle: "Test & Solve",
    description: "Test your skills with 500+ challenging problems designed to push your limits.",
    image: "/images/crusible.png",
    color: "from-purple-500 to-pink-500",
    highlights: [
      "500+ programming challenges",
      "AI-powered hints",
      "Solution analysis",
      "Progress tracking"
    ],
    stats: "500+ Challenges"
  },
  {
    title: "The Arena",
    subtitle: "Compete & Connect", 
    description: "Compete with peers in coding competitions and climb the leaderboard.",
    image: "/images/arena.png",
    color: "from-orange-500 to-red-500",
    highlights: [
      "Weekly competitions",
      "Real-time leaderboards",
      "Community channels",
      "Project showcase"
    ],
    stats: "10K+ Students"
  }
];

const innovationFeatures = [
  {
    name: "AI-Powered Learning",
    description: "Personalized assistance and intelligent hints to guide your learning journey.",
    Icon: Brain,
    href: "/about",
    cta: "Learn more",
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3"
  },
  {
    name: "Real-time Collaboration",
    description: "Connect with peers, share solutions, and learn together in real-time.",
    Icon: Users,
    href: "/about", 
    cta: "Explore",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
  },
  {
    name: "Advanced Analytics",
    description: "Track your progress with detailed insights and performance metrics.",
    Icon: Target,
    href: "/developers",
    cta: "Discover",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
  },
  {
    name: "Enterprise Security",
    description: "Built with enterprise-grade security and privacy protection.",
    Icon: Shield,
    href: "/developers",
    cta: "Learn more",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2"
  },
  {
    name: "Global Community",
    description: "Join thousands of developers from around the world.",
    Icon: Globe,
    href: "/about",
    cta: "Join now",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
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
            Core Ecosystem
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Three Pillars of
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our ecosystem transforms how you learn, practice, and grow as a developer.
          </p>
        </motion.div>

        {/* Core Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {coreFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <MinimalCard className="h-full group hover:scale-[1.02] transition-all duration-500">
                <MinimalCardImage 
                  src={feature.image} 
                  alt={`${feature.title} preview`}
                  className="mb-4"
                />
                <MinimalCardContent>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {feature.stats}
                    </Badge>
                  </div>
                  
                  <MinimalCardTitle className="text-2xl font-bold mb-2">
                    {feature.title}
                  </MinimalCardTitle>
                  <Badge variant="outline" className="mb-4 text-xs">
                    {feature.subtitle}
                  </Badge>
                  <MinimalCardDescription className="text-base leading-relaxed mb-6">
                    {feature.description}
                  </MinimalCardDescription>
                </MinimalCardContent>
                
                <MinimalCardFooter>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Explore {feature.title}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </MinimalCardFooter>
              </MinimalCard>
            </motion.div>
          ))}
        </div>

        {/* Innovation Features */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Powered by <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Innovation</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced features that make learning more effective and engaging
            </p>
          </div>
          
          <BentoGrid className="lg:grid-rows-3">
            {innovationFeatures.map((innovationFeature) => (
              <BentoCard key={innovationFeature.name} {...innovationFeature} />
            ))}
          </BentoGrid>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              Programming Challenges
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              10K+
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              Active Students
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              100+
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              Learning Resources
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              AI Support
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}