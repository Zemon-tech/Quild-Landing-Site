'use client';
import Navigation from '@/components/landing/Navigation';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Eye, 
  Lock, 
  Database,
  UserCheck,
  Mail,
  Calendar
} from 'lucide-react';

const privacySections = [
  {
    icon: Database,
    title: "Information We Collect",
    content: [
      "Account information (name, email, profile details)",
      "Learning progress and performance data",
      "Code submissions and project work",
      "Communication data (support requests, community interactions)",
      "Usage analytics and platform interaction data",
      "Device and browser information for technical support"
    ]
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: [
      "Provide and improve our educational platform",
      "Personalize your learning experience",
      "Track your progress and achievements",
      "Enable community features and competitions",
      "Provide customer support and technical assistance",
      "Send important updates about the platform",
      "Analyze usage patterns to improve our services"
    ]
  },
  {
    icon: Lock,
    title: "Data Security",
    content: [
      "Industry-standard encryption for data transmission and storage",
      "Regular security audits and vulnerability assessments",
      "Access controls and authentication measures",
      "Secure backup and disaster recovery procedures",
      "Employee training on data protection best practices",
      "Incident response procedures for any security breaches"
    ]
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    content: [
      "Access your personal data and learning records",
      "Correct or update your information",
      "Request deletion of your account and data",
      "Export your learning progress and achievements",
      "Opt-out of marketing communications",
      "Withdraw consent for data processing",
      "File complaints with supervisory authorities"
    ]
  }
];

const dataRetention = [
  {
    category: "Account Information",
    retention: "Until account deletion or 3 years of inactivity"
  },
  {
    category: "Learning Progress",
    retention: "Until account deletion or 3 years of inactivity"
  },
  {
    category: "Code Submissions",
    retention: "Until account deletion or 3 years of inactivity"
  },
  {
    category: "Support Communications",
    retention: "3 years from last interaction"
  },
  {
    category: "Analytics Data",
    retention: "2 years, then anonymized"
  }
];

const thirdPartyServices = [
  {
    name: "Authentication",
    provider: "Clerk",
    purpose: "Secure user authentication and account management"
  },
  {
    name: "Analytics",
    provider: "Google Analytics",
    purpose: "Website usage analysis and improvement"
  },
  {
    name: "Email Services",
    provider: "SendGrid",
    purpose: "Transactional and marketing communications"
  },
  {
    name: "Cloud Storage",
    provider: "AWS",
    purpose: "Secure data storage and backup"
  }
];

export default function PrivacyPageClient() {
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
                <Shield className="w-4 h-4 mr-2" />
                Privacy & Security
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Privacy
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Policy</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you use Quild.
              </p>
              <div className="flex items-center justify-center mt-6 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                Last updated: January 15, 2025
              </div>
            </motion.div>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-16">
              {privacySections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-8 border border-border/50"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Retention */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Data Retention</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We retain your data only as long as necessary to provide our services and comply with legal obligations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card rounded-xl p-8 border border-border/50"
            >
              <div className="space-y-4">
                {dataRetention.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-border/50 last:border-b-0">
                    <span className="font-medium">{item.category}</span>
                    <span className="text-muted-foreground text-sm">{item.retention}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Third Party Services */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Third-Party Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We use trusted third-party services to provide and improve our platform.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {thirdPartyServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border/50"
                >
                  <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Provider:</strong> {service.provider}
                  </p>
                  <p className="text-sm text-muted-foreground">{service.purpose}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                If you have any questions about this privacy policy or how we handle your data, please don&apos;t hesitate to contact us.
              </p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5" />
                <span>privacy@quild.com</span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
