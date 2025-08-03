'use client';

import { motion } from 'framer-motion';
import { FaqSectionWithCategories } from '@/components/ui/faq-with-categories';
import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';

const faqItems = [
  {
    question: "How do I get started with Zemon?",
    answer: "Getting started is simple! Create your profile, choose your learning path, and dive into our curated resources. Our AI will personalize your experience based on your goals and current skill level.",
    category: "Getting Started",
  },
  {
    question: "What makes Zemon different from other learning platforms?",
    answer: "Zemon combines learning, practice, and community in one platform. The Forge for learning, The Crucible for practice, and The Arena for competition - creating a complete ecosystem for developer growth.",
    category: "Platform",
  },
  {
    question: "Are the programming challenges suitable for beginners?",
    answer: "Absolutely! We offer challenges for all skill levels, from complete beginners to advanced developers. Our AI adapts the difficulty based on your progress and learning pace.",
    category: "Learning",
  },
  {
    question: "How does the community aspect work?",
    answer: "Join The Arena to participate in coding competitions, collaborate with peers, and showcase your projects. Connect with mentors and build your professional network.",
    category: "Community",
  },
  {
    question: "Can I showcase my projects to potential employers?",
    answer: "Yes! Build an impressive portfolio through our platform and connect directly with employers. Our career services help bridge the gap between learning and professional opportunities.",
    category: "Career",
  }
];

export default function FAQSection() {
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
            Support
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Frequently Asked
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about your journey with Zemon.
          </p>
        </motion.div>

        {/* FAQ Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FaqSectionWithCategories
            title=""
            description=""
            items={faqItems}
            contactInfo={{
              title: "Still have questions?",
              description: "Our support team is here to help you succeed.",
              buttonText: "Contact Support",
              onContact: () => console.log("Contact support clicked"),
            }}
          />
        </motion.div>
      </div>
    </section>
  );
} 