'use client';
import Navigation from '@/components/landing/Navigation';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export default function TutorialsPageClient() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
          <Badge variant="outline" className="mb-4 px-3 py-1 text-xs">Tutorials</Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">Coming Soon</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">We&apos;re building an in-depth learning library. Check back soon or explore our features in the meantime.</p>
        </motion.div>
      </div>
    </>
  );
}








