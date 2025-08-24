'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {  
  Code, 
  Github, 
  MessageCircle,
  ExternalLink,
  Zap,
  Database,
  Users,
  Bot,
  Webhook
} from 'lucide-react';

const apiEndpoints = [
  {
    name: "User API",
    description: "Manage user profiles, track streaks, update settings, and handle college details.",
    icon: Users,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Crucible API",
    description: "Retrieve problems, submit solutions for analysis, and track user progress.",
    icon: Code,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Forge API",
    description: "Manage resources, handle bookmarking, perform searches, and track resource usage.",
    icon: Database,
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Arena API",
    description: "Manage community channels, handle real-time messages, and process project showcase submissions.",
    icon: Users,
    color: "from-green-500 to-teal-500"
  },
  {
    name: "AI API",
    description: "Integrate with our AI for chat assistance, problem hints, and code analysis.",
    icon: Bot,
    color: "from-indigo-500 to-blue-500"
  }
];

const developerTools = [
  {
    name: "Open Source SDKs",
            description: "Use our official open-source SDKs to easily connect your application with the Quild API. We provide everything you need to start building right away.",
    icon: Github,
    buttonText: "Explore SDKs on GitHub",
    buttonIcon: ExternalLink
  },
  {
    name: "Webhook Documentation",
    description: "Leverage webhooks to receive real-time notifications for events happening on the platform, such as solution submissions or new community announcements.",
    icon: Webhook,
    buttonText: "Read Webhook Docs",
    buttonIcon: ExternalLink
  }
];

const communityLinks = [
  {
    name: "GitHub",
    description: "Find all our open-source projects, contribute to our SDKs, and report issues.",
    icon: Github,
            href: "https://github.com/quild",
        buttonText: "Quild on GitHub"
  },
  {
    name: "Discord",
    description: "Join our official Discord server to chat in real-time with our community of builders and the Quild team.",
    icon: MessageCircle,
    href: "https://discord.gg/quild",
    buttonText: "Join our Discord"
  }
];

export default function DevelopersPage() {
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
              <Code className="w-4 h-4 mr-2" />
              Developer Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Build with
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Quild</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Integrate your applications, automate your workflows, and extend the power of the Quild ecosystem. We provide the tools and resources you need to build on top of our platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* API Access Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">API Access & Endpoints</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access a rich set of API endpoints to programmatically interact with the Quild platform. Our API allows you to manage and retrieve data across our core ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {apiEndpoints.map((endpoint, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border/50 hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${endpoint.color} flex items-center justify-center mb-4`}>
                  <endpoint.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{endpoint.name}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {endpoint.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <Button size="lg" className="gap-2">
              <ExternalLink className="w-5 h-5" />
              View API Documentation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Tools and Resources */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tools and Resources</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started quickly with our developer tools designed for seamless integration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {developerTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-card rounded-xl p-8 border border-border/50 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <tool.icon className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">{tool.name}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {tool.description}
                </p>
                <Button variant="outline" className="gap-2">
                  {tool.buttonText}
                  <tool.buttonIcon className="w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Community */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Developer Community</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with other developers building on Quild. Ask questions, share what you&apos;re building, and get support from our team and the community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {communityLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-card rounded-xl p-8 border border-border/50 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <link.icon className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">{link.name}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {link.description}
                </p>
                <Button variant="outline" className="gap-2" asChild>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.buttonText}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get your API keys and start integrating with the Quild platform today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Zap className="w-5 h-5" />
                Get API Keys
              </Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 