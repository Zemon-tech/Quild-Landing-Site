'use client';

import { motion } from 'framer-motion';
import { FaqSectionWithCategories } from '@/components/ui/faq-with-categories';
import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';

const faqItems = [
  {
    question: "What problem does Quild actually solve?",
    answer:
      "Students don't need another giant course dump. Quild unifies learning (The Forge), practice (The Crucible), and community + showcase (The Arena) with AI guidance so you can learn, do, and get noticed—end to end.",
    category: "Platform",
  },
  {
    question: "How do I get started?",
    answer:
      "Create your profile, pick a learning path, and start in minutes. New to coding? Begin with beginner resources in The Forge, then practice in The Crucible with AI hints and feedback.",
    category: "Getting Started",
  },
  {
    question: "Can I showcase projects and reach employers?",
    answer:
      "Yes. Build a public portfolio, submit projects to Arena showcases, climb leaderboards, and share your progress. Many students use Quild to demonstrate real skills and get career opportunities.",
    category: "Career",
  },
  {
    question: "How does the AI help me learn faster?",
    answer:
      "AI gives contextual hints, code analysis, solution feedback, and personalized resource recommendations. It adapts to your progress—like having a mentor 24/7 across Forge, Crucible, and Arena.",
    category: "Platform",
  },
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
            Everything you need to know about your journey with Quild. Quick answers to get you started.
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
              description: "Our support team is here to help you succeed. Get in touch and we'll respond within 24 hours.",
              buttonText: "Contact Support",
              onContact: () => window.location.href = "/support",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
} 