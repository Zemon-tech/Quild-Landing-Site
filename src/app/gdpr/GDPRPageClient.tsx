'use client';
import Navigation from '@/components/landing/Navigation';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Download, 
  Trash2, 
  Edit,
  Eye,
  Lock,
  Mail,
  Calendar,
  CheckCircle,
  AlertCircle,
  Users
} from 'lucide-react';

const gdprRights = [
  {
    icon: Eye,
    title: "Right of Access",
    description: "You have the right to obtain confirmation of whether we process your personal data and access to that data.",
    action: "Request Data Access"
  },
  {
    icon: Edit,
    title: "Right to Rectification",
    description: "You can request correction of inaccurate or incomplete personal data we hold about you.",
    action: "Request Data Correction"
  },
  {
    icon: Trash2,
    title: "Right to Erasure",
    description: "You can request deletion of your personal data under certain circumstances (right to be forgotten).",
    action: "Request Data Deletion"
  },
  {
    icon: Lock,
    title: "Right to Restrict Processing",
    description: "You can request that we limit how we use your personal data in certain situations.",
    action: "Request Processing Restriction"
  },
  {
    icon: Download,
    title: "Right to Data Portability",
    description: "You can request a copy of your data in a structured, machine-readable format.",
    action: "Request Data Export"
  },
  {
    icon: AlertCircle,
    title: "Right to Object",
    description: "You can object to processing of your personal data for certain purposes.",
    action: "Submit Objection"
  }
];

const legalBasis = [
  {
    basis: "Consent",
    description: "You have given clear consent for us to process your personal data for specific purposes.",
    examples: ["Marketing communications", "Optional analytics", "Community features"]
  },
  {
    basis: "Contract Performance",
    description: "Processing is necessary for the performance of a contract with you.",
    examples: ["Account management", "Learning progress tracking", "Platform functionality"]
  },
  {
    basis: "Legitimate Interests",
    description: "Processing is necessary for our legitimate interests, balanced against your rights.",
    examples: ["Security monitoring", "Service improvement", "Fraud prevention"]
  },
  {
    basis: "Legal Obligation",
    description: "Processing is necessary to comply with legal obligations.",
    examples: ["Tax reporting", "Regulatory compliance", "Legal requests"]
  }
];

const dataTransfers = [
  {
    country: "United States",
    provider: "AWS (Amazon Web Services)",
    purpose: "Cloud hosting and data storage",
    safeguards: "Standard Contractual Clauses (SCCs)"
  },
  {
    country: "United States",
    provider: "Clerk",
    purpose: "Authentication services",
    safeguards: "Standard Contractual Clauses (SCCs)"
  },
  {
    country: "United States",
    provider: "SendGrid",
    purpose: "Email delivery services",
    safeguards: "Standard Contractual Clauses (SCCs)"
  }
];

const dataBreachInfo = {
  notification: "We will notify you and relevant authorities within 72 hours of becoming aware of a data breach that poses a high risk to your rights and freedoms.",
  measures: [
    "Immediate containment and assessment",
    "Notification to supervisory authority within 72 hours",
    "Notification to affected individuals without undue delay",
    "Documentation of the breach and response measures",
    "Implementation of additional security measures"
  ]
};

export default function GDPRPageClient() {
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
                GDPR Compliance
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                GDPR
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Compliance</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Quild is committed to protecting your privacy and ensuring full compliance with the General Data Protection Regulation (GDPR) for all EU residents.
              </p>
              <div className="flex items-center justify-center mt-6 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                Last updated: January 15, 2025
              </div>
            </motion.div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Data Protection Rights</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Under GDPR, you have specific rights regarding your personal data. Here&apos;s how you can exercise them.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gdprRights.map((right, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border/50 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <right.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{right.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{right.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    {right.action}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Basis */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Legal Basis for Processing</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We process your personal data based on specific legal grounds under GDPR.
              </p>
            </motion.div>

            <div className="space-y-6">
              {legalBasis.map((basis, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border/50"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold">{basis.basis}</h3>
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  </div>
                  <p className="text-muted-foreground mb-4">{basis.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {basis.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Transfers */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">International Data Transfers</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                When we transfer your data outside the EEA, we ensure adequate protection through appropriate safeguards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card rounded-xl p-8 border border-border/50"
            >
              <div className="space-y-6">
                {dataTransfers.map((transfer, index) => (
                  <div key={index} className="border-b border-border/50 pb-6 last:border-b-0 last:pb-0">
                    <div className="grid md:grid-cols-4 gap-4">
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground">Country</h4>
                        <p className="font-medium">{transfer.country}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground">Provider</h4>
                        <p className="font-medium">{transfer.provider}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground">Purpose</h4>
                        <p className="font-medium">{transfer.purpose}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground">Safeguards</h4>
                        <p className="font-medium">{transfer.safeguards}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Data Breach */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Data Breach Response</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                In the unlikely event of a data breach, we have comprehensive procedures in place to protect your rights.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-card rounded-xl p-8 border border-border/50"
              >
                <div className="flex items-center mb-4">
                  <AlertCircle className="w-6 h-6 text-orange-500 mr-3" />
                  <h3 className="text-xl font-semibold">Notification Timeline</h3>
                </div>
                <p className="text-muted-foreground">{dataBreachInfo.notification}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-card rounded-xl p-8 border border-border/50"
              >
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-green-500 mr-3" />
                  <h3 className="text-xl font-semibold">Response Measures</h3>
                </div>
                <ul className="space-y-2">
                  {dataBreachInfo.measures.map((measure, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {measure}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Exercise Your Rights
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                To exercise any of your GDPR rights or if you have questions about our data processing, please contact our Data Protection Officer.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Mail className="w-5 h-5" />
                  <span>dpo@quild.com</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Users className="w-5 h-5" />
                  <span>Data Protection Officer</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
