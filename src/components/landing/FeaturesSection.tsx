'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Brain, 
  Users, 
  Code, 
  Target, 
  Sparkles,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const features = [
  {
    title: 'From Learning to Doing',
    description: 'Zemon bridges the gap between learning and doing, helping you become a confident, job-ready developer through real-world projects.',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500',
    benefits: [
      'Project-based learning approach',
      'Real-world application focus',
      'Portfolio building opportunities',
      'Industry-aligned curriculum'
    ]
  },
  {
    title: 'Your Personal AI Tutor',
    description: 'Get unstuck with AI-powered hints, code analysis, and personalized learning recommendations.',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    benefits: [
      'Intelligent problem hints',
      'Code analysis and feedback',
      'Personalized recommendations',
      'Learning path optimization'
    ]
  },
  {
    title: 'Compete, Collaborate, and Grow',
    description: 'Join a thriving community of builders. Participate in coding competitions, showcase your projects, and connect with peers and mentors.',
    icon: Users,
    color: 'from-orange-500 to-red-500',
    benefits: [
      'Active community engagement',
      'Coding competitions',
      'Peer mentorship opportunities',
      'Professional networking'
    ]
  }
];

const additionalFeatures = [
  {
    icon: Code,
    title: '500+ Challenges',
    description: 'Comprehensive problem library'
  },
  {
    icon: Target,
    title: 'Skill Tracking',
    description: 'Monitor your progress'
  },
  {
    icon: Sparkles,
    title: 'AI Assistance',
    description: 'Smart learning support'
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
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
            Why Choose Zemon
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Features that
            <span className="gradient-text"> Transform</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how Zemon's innovative features help you learn, build, and grow as a developer.
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {additionalFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="flex items-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Programming Challenges</div>
          </div>
          <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm">
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">Active Students</div>
          </div>
          <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Learning Resources</div>
          </div>
          <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">AI Support</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <Sparkles className="w-5 h-5 mr-2" />
            Ready to experience the future of learning?
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            Join thousands of students who are already building their future with Zemon
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300">
              Start Learning Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-border rounded-lg font-semibold hover:bg-muted transition-colors duration-300">
              Watch Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 