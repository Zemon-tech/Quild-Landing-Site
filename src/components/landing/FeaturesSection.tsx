'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ElectricBorder from '@/components/ElectricBorder';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {  
  Brain, 
  Users,
  Target, 
  Sparkles,
  ArrowRight,
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
import InteractiveFeaturesModal from './InteractiveFeaturesModal';

const coreFeatures: {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  color: string;
  highlights: string[];
  stats: string;
  category: 'forge' | 'crucible' | 'arena';
}[] = [
  {
    title: "The Forge",
    subtitle: "Learn & Build",
    description: "Access 100+ curated resources from articles to courses, all aligned with your college curriculum. AI-powered recommendations ensure you learn exactly what you need.",
    image: "/images/forge.png",
    color: "from-blue-500 to-cyan-500",
    highlights: [
      "100+ Learning Resources",
      "AI-Powered Recommendations", 
      "College Curriculum Aligned",
      "Progress Tracking"
    ],
    stats: "100+ Resources",
    category: 'forge'
  },
  {
    title: "The Crucible", 
    subtitle: "Test & Solve",
    description: "Master 500+ real-world problems with AI assistance. Build interview-ready skills and create a portfolio that impresses employers.",
    image: "/images/crusible.png",
    color: "from-purple-500 to-pink-500",
    highlights: [
      "500+ Programming Challenges",
      "AI-Powered Hints",
      "Interview Preparation",
      "Portfolio Building"
    ],
    stats: "500+ Challenges",
    category: 'crucible'
  },
  {
    title: "The Arena",
    subtitle: "Compete & Connect", 
    description: "Join 10K+ students in weekly competitions. Showcase your projects, connect with mentors, and build the network that launches your career.",
    image: "/images/arena.png",
    color: "from-orange-500 to-red-500",
    highlights: [
      "10K+ Active Students",
      "Weekly Competitions",
      "Real-Time Chat",
      "Project Showcase"
    ],
    stats: "10K+ Students",
    category: 'arena'
  }
];

const innovationFeatures = [
  {
    name: "AI-Powered Learning",
    description: "Get personalized assistance and intelligent hints that adapt to your learning style and progress.",
    Icon: Brain,
    href: "/about",
    cta: "Learn more",
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3"
  },
  {
    name: "Real-time Collaboration",
    description: "Connect with peers instantly, share solutions, and learn together in real-time chat channels.",
    Icon: Users,
    href: "/about", 
    cta: "Explore",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
  },
  {
    name: "Advanced Analytics",
    description: "Track your progress with detailed insights, skill development metrics, and performance analytics.",
    Icon: Target,
    href: "#features",
    cta: "Discover",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
  },
  {
    name: "Enterprise Security",
    description: "Built with enterprise-grade security, privacy protection, and role-based access control.",
    Icon: Shield,
    href: "#features",
    cta: "Learn more",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2"
  },
  {
    name: "Global Community",
    description: "Join thousands of developers from around the world in a supportive, collaborative environment.",
    Icon: Globe,
    href: "/about",
    cta: "Join now",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"
  },
];

export default function FeaturesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'forge' | 'crucible' | 'arena'>('forge');

  const openModal = (category: 'forge' | 'crucible' | 'arena') => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight font-inter">
              Three Pillars of
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-mono">
              Our ecosystem transforms how you learn, practice, and grow as a developer. Everything you need to become job-ready.
            </p>
          </motion.div>

          {/* Core Features Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            {coreFeatures.map((feature, index) => {
              // Define colors for each pillar
              const getElectricColor = (category: string) => {
                switch (category) {
                  case 'forge': return '#3B82F6'; // Blue for The Forge
                  case 'crucible': return '#A855F7'; // Purple for The Crucible  
                  case 'arena': return '#F97316'; // Orange for The Arena
                  default: return '#5227FF';
                }
              };

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <ElectricBorder
                    color={getElectricColor(feature.category)}
                    speed={1.2}
                    chaos={0.8}
                    thickness={2}
                    className="h-full"
                    style={{}}
                  >
                    <MinimalCard className="h-full group hover:scale-[1.02] transition-all duration-500 border-0">
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
                        
                        <MinimalCardTitle className="text-2xl font-bold mb-2 font-inter">
                          {feature.title}
                        </MinimalCardTitle>
                        <Badge variant="outline" className="mb-4 text-xs">
                          {feature.subtitle}
                        </Badge>
                        <MinimalCardDescription className="text-base leading-relaxed mb-6 font-mono text-muted-foreground">
                          {feature.description}
                        </MinimalCardDescription>
                      </MinimalCardContent>
                      
                      <MinimalCardFooter>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                          onClick={() => openModal(feature.category)}
                        >
                          Explore {feature.title}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </MinimalCardFooter>
                    </MinimalCard>
                  </ElectricBorder>
                </motion.div>
              );
            })}
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-inter">
                Powered by <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Innovation</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto font-space-mono">
                Advanced features that make learning more effective, engaging, and personalized
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
              <div className="text-sm text-muted-foreground font-medium font-space-mono">
                Programming Challenges
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <div className="text-sm text-muted-foreground font-medium font-space-mono">
                Active Students
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                100+
              </div>
              <div className="text-sm text-muted-foreground font-medium font-space-mono">
                Learning Resources
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-sm text-muted-foreground font-medium font-space-mono">
                AI Support
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Features Modal */}
      <InteractiveFeaturesModal
        isOpen={isModalOpen}
        onClose={closeModal}
        initialCategory={selectedCategory}
      />
    </>
  );
}