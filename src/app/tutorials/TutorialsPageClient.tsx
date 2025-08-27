'use client';
import Navigation from '@/components/landing/Navigation';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  BookOpen,
  Code,
  Play,
  Clock,
  Users,
  Star
} from 'lucide-react';

const tutorialCategories = [
  {
    title: "Getting Started",
    description: "Learn the basics of programming and set up your development environment.",
    tutorials: [
      { title: "Introduction to Programming", duration: "2 hours", level: "Beginner", rating: 4.8 },
      { title: "Setting Up Your Development Environment", duration: "1 hour", level: "Beginner", rating: 4.9 },
      { title: "Your First Hello World", duration: "30 min", level: "Beginner", rating: 4.7 }
    ]
  },
  {
    title: "Web Development",
    description: "Master HTML, CSS, JavaScript, and modern web frameworks.",
    tutorials: [
      { title: "HTML Fundamentals", duration: "3 hours", level: "Beginner", rating: 4.8 },
      { title: "CSS Styling and Layout", duration: "4 hours", level: "Intermediate", rating: 4.9 },
      { title: "JavaScript Basics", duration: "5 hours", level: "Beginner", rating: 4.7 },
      { title: "React for Beginners", duration: "8 hours", level: "Intermediate", rating: 4.8 }
    ]
  },
  {
    title: "Data Structures & Algorithms",
    description: "Learn fundamental computer science concepts and problem-solving techniques.",
    tutorials: [
      { title: "Arrays and Strings", duration: "3 hours", level: "Beginner", rating: 4.8 },
      { title: "Linked Lists and Trees", duration: "4 hours", level: "Intermediate", rating: 4.9 },
      { title: "Sorting and Searching", duration: "5 hours", level: "Intermediate", rating: 4.7 },
      { title: "Dynamic Programming", duration: "6 hours", level: "Advanced", rating: 4.8 }
    ]
  },
  {
    title: "Backend Development",
    description: "Build robust server-side applications and APIs.",
    tutorials: [
      { title: "Node.js Fundamentals", duration: "6 hours", level: "Intermediate", rating: 4.8 },
      { title: "Database Design", duration: "4 hours", level: "Intermediate", rating: 4.9 },
      { title: "API Development", duration: "5 hours", level: "Intermediate", rating: 4.7 },
      { title: "Authentication & Security", duration: "3 hours", level: "Advanced", rating: 4.8 }
    ]
  }
];

const featuredTutorials = [
  {
    title: "Complete Python for Beginners",
    description: "Learn Python from scratch with hands-on projects and real-world applications.",
    duration: "12 hours",
    level: "Beginner",
    rating: 4.9,
    students: "2,500+",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Full-Stack Web Development",
    description: "Build complete web applications using modern technologies and best practices.",
    duration: "20 hours",
    level: "Intermediate",
    rating: 4.8,
    students: "1,800+",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "System Design Interview Prep",
    description: "Master system design concepts and ace your technical interviews.",
    duration: "15 hours",
    level: "Advanced",
    rating: 4.9,
    students: "900+",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop"
  }
];

export default function TutorialsPageClient() {
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
                Learn & Grow
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Master Programming with
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Expert Tutorials</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Learn from industry experts with our comprehensive tutorial library. From beginner basics to advanced concepts, we have everything you need to succeed.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Tutorials */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Tutorials</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our most popular and highly-rated tutorials to get you started.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredTutorials.map((tutorial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="bg-card rounded-xl overflow-hidden border border-border/50 hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-primary" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {tutorial.level}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        {tutorial.rating}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{tutorial.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{tutorial.description}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {tutorial.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {tutorial.students}
                      </div>
                    </div>
                    <Button className="w-full gap-2">
                      <Play className="w-4 h-4" />
                      Start Learning
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorial Categories */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Find tutorials organized by topic and skill level.
              </p>
            </motion.div>

            <div className="space-y-8">
              {tutorialCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="bg-card rounded-xl p-8 border border-border/50"
                >
                  <div className="flex items-center mb-6">
                    <Code className="w-8 h-8 text-primary mr-4" />
                    <div>
                      <h3 className="text-2xl font-semibold">{category.title}</h3>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.tutorials.map((tutorial, tutorialIndex) => (
                      <div key={tutorialIndex} className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors">
                        <div className="flex-1">
                          <h4 className="font-medium mb-1">{tutorial.title}</h4>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 mr-1" />
                            {tutorial.duration}
                            <span className="mx-2">•</span>
                            <Badge variant="outline" className="text-xs">
                              {tutorial.level}
                            </Badge>
                            <span className="mx-2">•</span>
                            <div className="flex items-center">
                              <Star className="w-3 h-3 text-yellow-500 mr-1" />
                              {tutorial.rating}
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Play className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of students who are already learning and growing with our comprehensive tutorial library.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <BookOpen className="w-5 h-5" />
                  Browse All Tutorials
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Users className="w-5 h-5" />
                  Join Study Groups
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}


