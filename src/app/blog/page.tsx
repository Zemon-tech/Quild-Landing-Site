import Navigation from '@/components/landing/Navigation';

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background pt-32">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Coming soon! We&apos;re working on bringing you the latest insights, tutorials, and updates from the Zemon team.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 