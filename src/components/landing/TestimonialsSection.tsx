'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Logos3 } from '@/components/blocks/logos3';
import { TestimonialsColumn } from '@/components/blocks/testimonials-columns-1';
import { Sparkles, Users } from 'lucide-react';

const testimonials = [
  {
    text: "Zemon transformed my learning journey. The combination of challenges and community support helped me land my dream job at a top tech company.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=300&auto=format&fit=crop",
    name: "Sarah Chen",
    role: "Software Engineer at Google"
  },
  {
    text: "The Arena competitions pushed me to think differently. I've grown more in 6 months here than in 2 years of self-study.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    name: "Alex Rodriguez",
    role: "Full Stack Developer"
  },
  {
    text: "The personalized learning paths and AI assistance made complex concepts click for me. Highly recommend for any student.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop",
    name: "Emily Watson",
    role: "Computer Science Student"
  },
  {
    text: "From beginner to confident developer in just 8 months. The community here is incredible and the challenges are perfectly paced.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop",
    name: "David Kim",
    role: "Frontend Developer"
  },
  {
    text: "The portfolio building feature helped me showcase my projects effectively. I got multiple job offers within weeks of completing the program.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
    name: "Maria Garcia",
    role: "React Developer"
  },
  {
    text: "Best investment in my career. The mentorship and real-world projects gave me the confidence to tackle any coding challenge.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    name: "James Wilson",
    role: "Backend Engineer"
  }
];

const universityLogos = [
  {
    id: "usict",
    description: "USICT",
    image: "https://collegekampus.com/wp-content/uploads/2022/11/USICT-LOGO-1024x949.jpg",
    className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
  },
  {
    id: "mait",
    description: "MAIT",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAKUtZM6W1rldWrpgDg9pzzy8WlTU6pqt80w&s",
    className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
  },
  {
    id: "msit",
    description: "MSIT",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnRpUaq25XwIEqqmdcZkm_5QBEyxuETL_dHA&s",
    className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
  },
  {
    id: "dtu",
    description: "DTU",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b5/DTU%2C_Delhi_official_logo.png",
    className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
  },
  {
    id: "usar",
    description: "USAR",
    image: "https://media.licdn.com/dms/image/v2/C560BAQHSWGRkECn5vQ/company-logo_200_200/company-logo_200_200/0/1641913664285?e=2147483647&v=beta&t=WHFkGh0MuN19X_x7T0VpzzVe4Vi2zpIbhjFICCvXBvM",
    className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
  },
  {
    id: "gtbit",
    description: "GTBIT",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCwBAKy4PqgGlp7pZFiIwqKmO0sJ3lz_WLog&s",
    className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
  },
  {
    id: "adgitm",
    description: "ADGITM",
    image: "https://images.shiksha.com/mediadata/images/1674199807phpl6t19N.jpeg",
    className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
  },
  {
    id: "dtc",
    description: "DTC",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuCzttQYAYJ-Q6Pw0_gNCrsOk_k0Ss4e69BQ&s",
    className: "h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300",
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
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
            Success Stories
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Trusted by Students
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of students from top universities who have transformed their careers with Zemon.
          </p>
        </motion.div>

        {/* Universities Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          
          <Logos3 
            heading=""
            logos={universityLogos}
          />
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Student Success</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              What Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Students Say</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from students who have transformed their careers with Zemon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="h-[600px] overflow-hidden">
              <TestimonialsColumn 
                testimonials={testimonials}
                duration={20}
                className="h-full"
              />
            </div>
            <div className="h-[600px] overflow-hidden">
              <TestimonialsColumn 
                testimonials={testimonials.slice().reverse()}
                duration={25}
                className="h-full"
              />
            </div>
            <div className="h-[600px] overflow-hidden">
              <TestimonialsColumn 
                testimonials={testimonials}
                duration={30}
                className="h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 