'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, Sparkles } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Computer Science Student',
    university: 'MIT',
    content: 'Zemon transformed my learning experience. The AI-powered hints helped me understand complex algorithms, and the community competitions kept me motivated.',
    rating: 5,
    avatar: 'SC'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Software Engineering Student',
    university: 'Stanford',
    content: 'The project-based approach is incredible. I built a real portfolio while learning, and the Arena competitions helped me network with other developers.',
    rating: 5,
    avatar: 'MR'
  },
  {
    name: 'Priya Patel',
    role: 'Data Science Student',
    university: 'UC Berkeley',
    content: 'The Forge resources are perfectly curated. I went from beginner to confident developer in just 6 months. The AI tutor is like having a personal mentor.',
    rating: 5,
    avatar: 'PP'
  }
];

const universities = [
  'MIT', 'Stanford', 'UC Berkeley', 'Harvard', 'CMU', 'Georgia Tech',
  'UIUC', 'UT Austin', 'UCLA', 'Cornell', 'Princeton', 'Yale'
];

export default function TestimonialsSection() {
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
            Student Success
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Trusted by Students from
            <span className="gradient-text"> Top Universities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join thousands of students from leading universities who are building their future with Zemon.
          </p>
        </motion.div>

        {/* University Logos */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {universities.map((university, index) => (
              <div
                key={university}
                className="flex items-center justify-center p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-colors duration-300"
              >
                <span className="font-semibold text-sm text-muted-foreground">
                  {university}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-primary/30" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} • {testimonial.university}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid md:grid-cols-4 gap-8 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm">
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">Active Students</div>
          </div>
          <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
          <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Universities</div>
          </div>
          <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Student Rating</div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <Sparkles className="w-5 h-5 mr-2" />
            Join the community
          </div>
          <h3 className="text-2xl font-bold mb-4">
            Ready to Build Your Future?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of students and aspiring developers who are already building their future with Zemon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300">
              Sign Up Now
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-border rounded-lg font-semibold hover:bg-muted transition-colors duration-300">
              Read More Stories
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 