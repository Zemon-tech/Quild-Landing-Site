'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Sparkles, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for getting started with Zemon',
    features: [
      'Access to The Forge',
      'Solve public Crucible problems',
      'Join public Arena events',
      'Community support',
      'Basic progress tracking',
      'Limited AI assistance'
    ],
    popular: false,
    cta: 'Get Started Free',
    color: 'from-gray-500 to-gray-600'
  },
  {
    name: 'Pro',
    price: '$9',
    period: '/mo',
    description: 'Most popular choice for serious learners',
    features: [
      'All Starter features',
      'Unlimited problem attempts',
      'Private Arena competitions',
      'AI-powered hints',
      'Priority support',
      'Advanced analytics',
      'Custom learning paths',
      'Project showcase priority'
    ],
    popular: true,
    cta: 'Start Pro Trial',
    color: 'from-primary to-accent'
  },
  {
    name: 'Campus',
    price: 'Contact Us',
    description: 'Enterprise solution for colleges and universities',
    features: [
      'All Pro features',
      'Custom integrations',
      'Admin dashboard',
      'Onboarding & training',
      'Dedicated support',
      'Custom branding',
      'Advanced reporting',
      'API access'
    ],
    popular: false,
    cta: 'Contact Sales',
    color: 'from-purple-500 to-pink-500'
  }
];

export default function PricingSection() {
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
            Pricing Plans
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Choose Your
            <span className="gradient-text"> Path</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Start free and upgrade as you grow. All plans include access to our core ecosystem.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`h-full group hover:shadow-xl transition-all duration-300 border-0 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20' 
                  : 'bg-card/50 backdrop-blur-sm'
              }`}>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="mt-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && (
                        <span className="text-lg text-muted-foreground ml-1">{plan.period}</span>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90' 
                        : 'bg-primary hover:bg-primary/90'
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Can I upgrade or downgrade my plan?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, you can change your plan at any time. Changes take effect immediately.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Is there a free trial for Pro?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, we offer a 7-day free trial for the Pro plan with full access to all features.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
                <p className="text-sm text-muted-foreground">
                  We accept all major credit cards, PayPal, and bank transfers for Campus plans.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Can I cancel anytime?</h4>
                <p className="text-sm text-muted-foreground">
                  Absolutely. You can cancel your subscription at any time with no cancellation fees.
                </p>
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
            <Sparkles className="w-5 h-5 mr-2" />
            Still have questions?
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            Our team is here to help you choose the right plan for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Contact Support
            </Button>
            <Button size="lg" className="text-lg px-8 py-6">
              Start Free Trial
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 