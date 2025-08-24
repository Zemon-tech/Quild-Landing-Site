'use client';
import Navigation from '@/components/landing/Navigation';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  Users,
  MessageCircle,
  Globe,
  Calendar,
  Trophy,
  ExternalLink,
  Clock
} from 'lucide-react';

const communityFeatures = [
  {
    icon: Users,
    title: "Connect with Developers",
    description: "Join thousands of developers from around the world. Share knowledge, collaborate on projects, and build lasting connections."
  },
  {
    icon: MessageCircle,
    title: "Real-time Discussions",
    description: "Participate in live discussions, ask questions, and get instant feedback from the community."
  },
  {
    icon: Trophy,
    title: "Competitions & Challenges",
    description: "Test your skills in weekly coding competitions and climb the leaderboards."
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Connect with developers from different countries and learn from diverse perspectives."
  }
];

const upcomingEvents = [
  {
    title: "Weekly Coding Challenge",
    date: "Every Sunday",
    time: "2:00 PM EST",
    type: "Competition",
    participants: "500+"
  },
  {
    title: "Tech Talk: AI in Education",
    date: "March 15, 2024",
    time: "7:00 PM EST",
    type: "Webinar",
    participants: "200+"
  },
  {
    title: "Hackathon: Build for Good",
    date: "March 22-24, 2024",
    time: "48 hours",
    type: "Hackathon",
    participants: "1000+"
  },
  {
    title: "Mentorship Session",
    date: "Every Wednesday",
    time: "6:00 PM EST",
    type: "Mentorship",
    participants: "50+"
  }
];

const communityStats = [
  { label: "Active Members", value: "10,000+" },
  { label: "Countries", value: "50+" },
  { label: "Projects Shared", value: "5,000+" },
  { label: "Events Hosted", value: "200+" }
];

export default function CommunityPageClient() {
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
                Join Our Community
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Connect with
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Developers</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Join thousands of developers from around the world. Share knowledge, collaborate on projects, and build the future of programming education together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {communityStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Our Community?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover what makes our community special and how you can benefit from being part of it.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {communityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="bg-card rounded-xl p-8 border border-border/50 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-6">
                    <feature.icon className="w-8 h-8 text-primary mr-4" />
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join our exciting events and connect with fellow developers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border/50 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {event.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{event.participants}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4 w-full gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Join Event
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Community */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Join?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Become part of our growing community and start connecting with developers from around the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Users className="w-5 h-5" />
                  Join Community
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Discord Server
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
