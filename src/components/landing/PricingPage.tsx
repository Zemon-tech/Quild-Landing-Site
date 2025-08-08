'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Users} from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    description: "Best for getting started and exploring the Zemon ecosystem.",
    features: [
      "Access to The Forge",
      "Solve public Crucible problems", 
      "Join public Arena events",
      "Community support"
    ],
    buttonText: "Get Started for Free",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    name: "Pro",
    price: "$9/mo",
    description: "Best for dedicated learners who want to accelerate their growth.",
    features: [
      "All Starter features",
      "Unlimited problem attempts",
      "Private Arena competitions",
      "AI-powered hints for when you're stuck",
      "Priority support"
    ],
    buttonText: "Go Pro & Unleash Your Potential",
    buttonVariant: "default" as const,
    popular: true
  },
  {
    name: "Campus",
    price: "Contact Us",
    description: "Best for universities and educational institutions.",
    features: [
      "All Pro features",
      "Custom integrations",
      "A dedicated Admin dashboard",
      "Full onboarding & training for your institution"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    popular: false
  }
];

const faqs = [
  {
    question: "What is The Forge?",
    answer: "The Forge is our learning and skill development hub where you can access curated learning resources like articles, videos, courses, and more to build your programming skills."
  },
  {
    question: "What kind of problems are in The Crucible?",
    answer: "The Crucible contains over 500 programming challenges across categories like algorithms, system design, web development, data science, and more, with multiple difficulty levels."
  },
  {
    question: "What happens in The Arena?",
    answer: "The Arena is where you compete with peers in coding competitions, participate in hackathons, and climb the leaderboards. It's the heart of our community engagement."
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade your plan at any time from your account settings to access more features."
  },
  {
    question: "What are the benefits of AI-powered hints?",
    answer: "Our AI assistance provides intelligent hints for problems, code analysis, and solution feedback to help you improve your problem-solving skills when you get stuck."
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Pricing Plans
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Find Your Forge.
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Fuel Your Future.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose the plan that&apos;s right for your journey. Whether you&apos;re just starting out or ready to go pro, Zemon has a path for you. All our plans are designed to help you learn, build, and showcase your skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className={`relative rounded-2xl border-2 p-8 ${
                  plan.popular 
                    ? 'border-primary bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg' 
                    : 'border-border bg-card'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="default" className="px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-2">
                    {plan.price}
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
                    Core Features
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant={plan.buttonVariant} 
                  className="w-full"
                  size="lg"
                  asChild
                >
                  <a href="http://localhost:5173">
                    {plan.buttonText}
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold">Empower Your Entire Campus</h2>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Are you a university or coding bootcamp? The <strong>Campus Plan</strong> is designed for you. Benefit from all Pro features, plus get custom integrations, an administrative dashboard to track student progress, and dedicated onboarding and training.
            </p>
            <Button size="lg" asChild>
              <a href="http://localhost:5173">
                Contact Sales to Learn More
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border/50"
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 