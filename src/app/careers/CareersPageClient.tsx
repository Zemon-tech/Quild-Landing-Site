'use client';
import Navigation from '@/components/landing/Navigation';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  Users, 
  Heart,
  Zap,
  Globe,
  BookOpen,
  Trophy
} from 'lucide-react';

const openPositions = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Join our team to build the next generation of learning experiences. You'll work on React, TypeScript, and modern web technologies.",
    requirements: [
      "5+ years of experience with React/TypeScript",
      "Experience with modern web technologies",
      "Passion for education and learning",
      "Strong communication skills"
    ]
  },
  {
    title: "Backend Engineer",
    department: "Engineering", 
    location: "Remote",
    type: "Full-time",
    description: "Build scalable APIs and services that power our learning platform. Work with Node.js, Python, and cloud technologies.",
    requirements: [
      "3+ years of backend development experience",
      "Experience with Node.js or Python",
      "Knowledge of database design",
      "Experience with cloud platforms"
    ]
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote", 
    type: "Full-time",
    description: "Create beautiful, intuitive user experiences that help students learn and grow. Work on user research, wireframes, and prototypes.",
    requirements: [
      "3+ years of product design experience",
      "Strong portfolio showcasing UX/UI work",
      "Experience with Figma and design systems",
      "Passion for education technology"
    ]
  },
  {
    title: "Community Manager",
    department: "Community",
    location: "Remote",
    type: "Full-time", 
    description: "Build and nurture our community of learners and developers. Organize events, manage social media, and create engaging content.",
    requirements: [
      "2+ years of community management experience",
      "Excellent communication skills",
      "Experience with social media platforms",
      "Passion for developer communities"
    ]
  }
];

const benefits = [
  {
    icon: Globe,
    title: "Remote First",
    description: "Work from anywhere in the world with our distributed team."
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs."
  },
  {
    icon: BookOpen,
    title: "Learning Budget",
    description: "Annual budget for courses, conferences, and professional development."
  },
  {
    icon: Trophy,
    title: "Competitive Salary",
    description: "Competitive compensation with equity options."
  },
  {
    icon: Users,
    title: "Great Team",
    description: "Work with passionate people who care about education."
  },
  {
    icon: Zap,
    title: "Flexible Hours",
    description: "Flexible working hours to fit your lifestyle."
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
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Learning</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Join our mission to democratize access to quality programming education. We&apos;re building the ultimate platform for college students to learn, build, and showcase their skills.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work at Quild?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We believe in creating an environment where you can do your best work and grow your career.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border/50 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
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
                Join our team and help us build the future of programming education.
              </p>
            </motion.div>

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="bg-card rounded-xl p-8 border border-border/50 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{position.department}</Badge>
                        <Badge variant="outline">{position.location}</Badge>
                        <Badge variant="outline">{position.type}</Badge>
                      </div>
                    </div>
                    <Button className="mt-4 md:mt-0">
                      Apply Now
                    </Button>
                  </div>
                  <p className="text-muted-foreground mb-6">{position.description}</p>
                  <div>
                    <h4 className="font-semibold mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {req}
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
                Don&apos;t See the Right Role?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We&apos;re always looking for talented people to join our team. Send us your resume and we&apos;ll keep you in mind for future opportunities.
              </p>
              <Button size="lg">
                Send Your Resume
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}


