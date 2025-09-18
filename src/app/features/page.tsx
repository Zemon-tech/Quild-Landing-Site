import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/landing/Navigation';
import Footer from '@/components/landing/Footer';

export const metadata: Metadata = {
  title: 'Features – Quild',
  description:
    'Explore Quild features: curated learning (Forge), structured practice (Crucible), community & showcase (Arena), plus AI assistance and realtime collaboration.',
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen font-space-mono">
      <Navigation />
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
        </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">All Features</h1>
          <p className="mt-4 text-muted-foreground text-lg">
            Quild unifies learning, practice, and community with AI guidance so you can learn, build, and get noticed.
          </p>
        </header>

        <section className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Core Ecosystem</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium">The Forge – Learning</h3>
                <ul className="list-disc pl-6 text-sm leading-7 text-muted-foreground">
                  <li>Curated learning resources across articles, videos, books, courses, tools, repos, docs</li>
                  <li>Beginner → Advanced difficulty levels with search, filtering, tags, ratings</li>
                  <li>Bookmarks, organization, and progress awareness</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium">The Crucible – Practice</h3>
                <ul className="list-disc pl-6 text-sm leading-7 text-muted-foreground">
                  <li>500+ programming challenges across multiple difficulty levels</li>
                  <li>Categories: algorithms, frontend, backend, system design, data science, DevOps, and more</li>
                  <li>AI hints, solution analysis & feedback, progress tracking, community tips</li>
                  <li>Drafts, research notes, diagrams, learning objectives, prerequisites, edge cases</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium">The Arena – Community & Showcase</h3>
                <ul className="list-disc pl-6 text-sm leading-7 text-muted-foreground">
                  <li>Weekly challenges, hackathons, leaderboards, announcements</li>
                  <li>Project showcases with upvotes and feedback</li>
                  <li>Realtime chat channels with roles, permissions, and moderation</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">AI Assistance</h2>
            <ul className="list-disc pl-6 text-sm leading-7 text-muted-foreground">
              <li>Contextual hints for problems and code analysis with feedback</li>
              <li>Personalized learning recommendations and solution optimization suggestions</li>
              <li>Available across Forge, Crucible, and Arena experiences</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">User Capabilities</h2>
            <ul className="list-disc pl-6 text-sm leading-7 text-muted-foreground">
              <li>Zemon streak tracking and progress statistics</li>
              <li>Public profiles, portfolio building, and career signaling</li>
              <li>Mentor and peer feedback, community rankings, achievements</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Technical & Platform</h2>
            <ul className="list-disc pl-6 text-sm leading-7 text-muted-foreground">
              <li>Realtime via WebSocket/Socket.IO; MongoDB Change Streams → live updates</li>
              <li>TipTap rich text editor with code blocks, images, markdown, version history</li>
              <li>Responsive design, animations (Framer Motion), performance optimizations</li>
              <li>Caching and rate limiting (e.g., Redis), environment-based deployment configs</li>
              <li>Admin & moderation tools: roles, bans, approvals, announcements</li>
            </ul>
          </div>

          <div className="pt-6 border-t">
            <p className="text-sm text-muted-foreground">
              Want to see it in action?{' '}
              <Link href="/" className="text-primary underline underline-offset-4">Return to the home page</Link> or{' '}
              <a href={process.env.NEXT_PUBLIC_MAIN_APP_URL || 'http://localhost:5173'} className="text-primary underline underline-offset-4">open the app</a>.
            </p>
          </div>
        </section>
      </div>
      </section>
      <Footer />
    </main>
  );
}


