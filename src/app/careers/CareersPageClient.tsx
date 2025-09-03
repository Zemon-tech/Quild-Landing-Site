'use client';
import Navigation from '@/components/landing/Navigation';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  Users,
  Code,
  Heart,
  MapPin,
  Clock,
  ExternalLink,
  CheckCircle,
  Star,
  Briefcase,
  GraduationCap,
  Lightbulb
} from 'lucide-react';

const openPositions = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    experience: "5+ years",
    description: "Build the core platform that helps students learn programming through interactive challenges and AI-powered guidance.",
    requirements: [
      "5+ years of full-stack development experience",
      "Expertise in React, Node.js, and TypeScript",
      "Experience with AI/ML integration",
      "Strong problem-solving and communication skills"
    ]
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote / San Francisco",
    type: "Full-time",
    experience: "3+ years",
    description: "Design intuitive and engaging user experiences that make learning programming accessible and fun for students.",
    requirements: [
      "3+ years of product design experience",
      "Strong portfolio showcasing UX/UI design",
      "Experience with Figma and design systems",
      "Understanding of educational technology"
    ]
  },
  {
    title: "Content Creator & Educator",
    department: "Education",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    description: "Create high-quality programming tutorials, challenges, and educational content that helps students succeed.",
    requirements: [
      "2+ years of teaching or content creation experience",
      "Strong programming background",
      "Excellent written and verbal communication",
      "Experience with video production preferred"
    ]
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    experience: "4+ years",
    description: "Scale our infrastructure to support thousands of students learning and competing simultaneously.",
    requirements: [
      "4+ years of DevOps/Infrastructure experience",
      "Expertise in AWS, Docker, and Kubernetes",
      "Experience with CI/CD pipelines",
      "Strong monitoring and security practices"
    ]
  }
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision coverage for you and your family."
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Annual learning budget and time off for conferences, courses, and skill development."
  },
  {
    icon: MapPin,
    title: "Flexible Work",
    description: "Work from anywhere with flexible hours and unlimited PTO."
  },
  {
    icon: Star,
    title: "Equity & Growth",
    description: "Competitive equity package and opportunities for rapid career growth."
  },
  {
    icon: Users,
    title: "Team & Culture",
    description: "Join a diverse, inclusive team that values collaboration and innovation."
  },
  {
    icon: Lightbulb,
    title: "Impact",
    description: "Make a real difference in democratizing programming education worldwide."
  }
];

const values = [
  {
    title: "Student-First",
    description: "Everything we do is designed to help students succeed in their programming journey."
  },
  {
    title: "Innovation",
    description: "We embrace new technologies and creative solutions to solve complex problems."
  },
  {
    title: "Collaboration",
    description: "We believe the best solutions come from diverse teams working together."
  },
  {
    title: "Growth",
    description: "We're committed to continuous learning and improvement, both personally and professionally."
  }
];

export default function CareersPageClient() {
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
                Join Our Team
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Build the Future of
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Programming Education</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Join our mission to democratize programming education. We&apos;re building the ultimate learning platform that helps students master coding through interactive challenges, AI-powered guidance, and community support.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Quild?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Be part of a team that&apos;s transforming how students learn programming.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="bg-card rounded-xl p-8 border border-border/50 hover:shadow-lg transition-shadow text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="bg-card rounded-xl p-8 border border-border/50"
                >
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join our growing team and help us build the future of programming education.
              </p>
            </motion.div>

            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="bg-card rounded-xl p-8 border border-border/50 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <Badge variant="secondary">{position.department}</Badge>
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {position.experience}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{position.description}</p>
                    </div>
                    <Button className="gap-2 md:ml-6">
                      Apply Now
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
                Don&apos;t See Your Role?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We&apos;re always looking for talented individuals who share our passion for education and technology. Send us your resume and let&apos;s talk!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Code className="w-5 h-5" />
                  Send Your Resume
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Users className="w-5 h-5" />
                  Learn About Our Culture
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
