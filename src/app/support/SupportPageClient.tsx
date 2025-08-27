'use client';
import Navigation from '@/components/landing/Navigation';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Sparkles, 
  MessageCircle,
  Mail,
  Phone,
  Clock,
  Search,
  BookOpen,
  Code,
  Trophy,
  Users,
  Settings,
  ExternalLink
} from 'lucide-react';

const supportChannels = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team",
    availability: "24/7",
    responseTime: "Instant",
    action: "Start Chat"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message",
    availability: "24/7",
    responseTime: "Within 24 hours",
    action: "Send Email"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our team",
    availability: "Mon-Fri, 9AM-6PM EST",
    responseTime: "Immediate",
    action: "Call Us"
  }
];

const helpCategories = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Learn the basics of using Quild and set up your account.",
    articles: [
      "How to create your first account",
      "Setting up your learning profile",
      "Understanding the dashboard",
      "Your first learning path"
    ]
  },
  {
    icon: Code,
    title: "The Forge",
    description: "Everything about learning resources and skill development.",
    articles: [
      "Finding the right learning resources",
      "How to bookmark and save content",
      "Tracking your learning progress",
      "Using AI-powered recommendations"
    ]
  },
  {
    icon: Trophy,
    title: "The Crucible",
    description: "Master problem-solving and coding challenges.",
    articles: [
      "Understanding problem difficulty levels",
      "How to submit your solutions",
      "Using AI hints effectively",
      "Analyzing your solution performance"
    ]
  },
  {
    icon: Users,
    title: "The Arena",
    description: "Community features and competitions.",
    articles: [
      "Joining community channels",
      "Participating in competitions",
      "Building your portfolio",
      "Connecting with other developers"
    ]
  },
  {
    icon: Settings,
    title: "Account & Settings",
    description: "Manage your account and preferences.",
    articles: [
      "Updating your profile information",
      "Managing your privacy settings",
      "Subscription and billing",
      "Account security best practices"
    ]
  },
  {
    icon: MessageCircle,
    title: "Support & Contact",
    description: "Get help when you need it.",
    articles: [
      "Contacting our support team",
      "Reporting bugs and issues",
      "Feature requests and feedback",
      "Live chat and email support"
    ]
  }
];

const popularArticles = [
  {
    title: "How to get started with your first coding challenge",
    category: "Getting Started",
    readTime: "5 min read"
  },
  {
    title: "Understanding AI-powered hints in The Crucible",
    category: "The Crucible",
    readTime: "8 min read"
  },
  {
    title: "Building your portfolio in The Arena",
    category: "The Arena",
    readTime: "6 min read"
  },
  {
    title: "Optimizing your learning path",
    category: "The Forge",
    readTime: "4 min read"
  }
];

export default function SupportPageClient() {
  return (
    <>
      <Navigation />
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
                Support Center
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                We&apos;re Here to
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Help</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                Need assistance? Our support team is ready to help you succeed. Find answers quickly or get personalized help.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input 
                    placeholder="Search for help articles and solutions..."
                    className="pl-10 pr-4 py-3 text-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Help</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the best way to reach our support team based on your needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="bg-card rounded-xl p-8 border border-border/50 hover:shadow-lg transition-shadow text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <channel.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{channel.title}</h3>
                  <p className="text-muted-foreground mb-4">{channel.description}</p>
                  <div className="space-y-2 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center justify-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {channel.availability}
                    </div>
                    <div>Response: {channel.responseTime}</div>
                  </div>
                  <Button className="w-full gap-2">
                    {channel.action}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Help Categories</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Find help articles and solutions organized by topic.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {helpCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="bg-card rounded-xl p-8 border border-border/50 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-6">
                    <category.icon className="w-8 h-8 text-primary mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex} className="text-sm">
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          {article}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Articles</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Most viewed and helpful articles from our community.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {popularArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border/50 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                  <Button variant="ghost" size="sm" className="gap-2 p-0 h-auto">
                    Read Article
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Can&apos;t find what you&apos;re looking for? Send us a message and we&apos;ll get back to you as soon as possible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card rounded-xl p-8 border border-border/50"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Brief description of your issue" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    placeholder="Please describe your issue in detail..."
                    rows={6}
                    className="flex w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2">
                  <Mail className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}


