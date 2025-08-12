'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, Zap, Users,CheckCircle } from 'lucide-react';
import InteractiveFeaturesModal from './InteractiveFeaturesModal';

const ecosystemData = [
  {
    name: 'The Forge',
    description: 'Master programming with 100+ curated resources from beginner to expert',
    icon: BookOpen,
    features: ['100+ Learning Resources', 'AI-Powered Recommendations', 'College Curriculum Aligned', 'Progress Tracking'],
    benefits: ['Structured Learning Paths', 'High-Quality Content', 'Personalized Experience', 'Skill Development'],
    category: 'forge'
  },
  {
    name: 'The Crucible',
    description: 'Solve 500+ real-world problems with AI assistance',
    icon: Zap,
    features: ['500+ Programming Challenges', 'AI-Powered Hints', 'Interview Preparation', 'Portfolio Building'],
    benefits: ['Problem-Solving Skills', 'Technical Interview Prep', 'Real-World Experience', 'Code Portfolio'],
    category: 'crucible'
  },
  {
    name: 'The Arena',
    description: 'Compete with 10K+ students and build your network',
    icon: Users,
    features: ['10K+ Active Students', 'Weekly Competitions', 'Real-Time Chat', 'Project Showcase'],
    benefits: ['Community Connection', 'Competition Experience', 'Professional Network', 'Mentorship Access'],
    category: 'arena'
  }
];

export default function EcosystemSection() {
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
              Three Pillars of Success
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              The Quild <span className="gradient-text">Ecosystem</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Three powerful components working together to transform you from a learner to a job-ready developer.
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
                      Master programming with 100+ curated resources from beginner to expert
                    </h2>
                    <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                      Access articles, videos, courses, and tools aligned with your college curriculum. AI-powered recommendations ensure you learn exactly what you need.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                        What You Get
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
                      <Button 
                        variant="default" 
                        className="text-primary-foreground"
                        onClick={() => openModal('forge')}
                      >
                        Explore Features
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
                      Solve 500+ real-world problems with AI assistance
                    </h2>
                    <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                      Practice with problems that mirror real technical interviews. Get AI-powered hints when stuck and build a portfolio that impresses employers.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                        What You Get
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
                      <Button 
                        variant="default" 
                        className="text-primary-foreground"
                        onClick={() => openModal('crucible')}
                      >
                        Explore Features
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
                      Compete with 10K+ students and build your network
                    </h2>
                    <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                      Join weekly competitions, showcase your projects, and connect with mentors. Build the professional network that launches your career.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                        What You Get
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
                      <Button 
                        variant="default" 
                        className="text-primary-foreground"
                        onClick={() => openModal('arena')}
                      >
                        Explore Features
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
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