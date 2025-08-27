"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, Pause, Video, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Feature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  video?: string;
  highlights: string[];
  stats: string;
  color: string;
  category: 'forge' | 'crucible' | 'arena';
  type: 'image' | 'video';
}

interface InteractiveFeaturesModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: 'forge' | 'crucible' | 'arena';
}

const features: Feature[] = [
  {
    id: 'forge-1',
    title: 'AI-Powered Learning Paths',
    subtitle: 'Personalized Recommendations',
    description: 'Our AI analyzes your progress and learning style to recommend the perfect resources. Get personalized learning paths that adapt to your pace and goals.',
    image: '/images/forge.png',
    highlights: [
      'Smart content recommendations',
      'Adaptive difficulty adjustment',
      'Progress-based suggestions',
      'Learning style optimization'
    ],
    stats: '100+ Resources',
    color: 'from-blue-500 to-cyan-500',
    category: 'forge',
    type: 'image'
  },
  {
    id: 'forge-2',
    title: 'College Curriculum Integration',
    subtitle: 'Academic Alignment',
    description: 'All learning resources are carefully aligned with college computer science curricula. Supplement your formal education with practical, real-world applications.',
    image: '/images/forge.png',
    highlights: [
      'CS curriculum alignment',
      'Academic credit support',
      'Professor collaboration',
      'Course integration tools'
    ],
    stats: '50+ Universities',
    color: 'from-blue-500 to-cyan-500',
    category: 'forge',
    type: 'image'
  },
  {
    id: 'forge-3',
    title: 'Resource Management System',
    subtitle: 'Organized Learning',
    description: 'Bookmark, organize, and track your learning resources. Create custom collections, set learning goals, and monitor your progress across all topics.',
    image: '/images/forge.png',
    highlights: [
      'Smart bookmarking',
      'Custom collections',
      'Learning goals tracking',
      'Progress analytics'
    ],
    stats: 'Unlimited Bookmarks',
    color: 'from-blue-500 to-cyan-500',
    category: 'forge',
    type: 'image'
  },
  {
    id: 'crucible-1',
    title: '500+ Real-World Problems',
    subtitle: 'Interview Preparation',
    description: 'Practice with problems that mirror real technical interviews. From algorithms to system design, build the skills that employers actually want.',
    image: '/images/crusible.png',
    video: '/videos/crucible-demo.mp4',
    highlights: [
      'Algorithm challenges',
      'System design problems',
      'Frontend/backend tasks',
      'Data science exercises'
    ],
    stats: '500+ Challenges',
    color: 'from-purple-500 to-pink-500',
    category: 'crucible',
    type: 'video'
  },
  {
    id: 'crucible-2',
    title: 'AI-Powered Hints & Solutions',
    subtitle: 'Never Get Stuck',
    description: 'Get intelligent hints when you\'re stuck, detailed solution analysis, and personalized feedback. Our AI is like having a coding mentor available 24/7.',
    image: '/images/crusible.png',
    highlights: [
      'Smart hint system',
      'Solution analysis',
      'Code optimization tips',
      'Learning explanations'
    ],
    stats: '24/7 AI Support',
    color: 'from-purple-500 to-pink-500',
    category: 'crucible',
    type: 'image'
  },
  {
    id: 'crucible-3',
    title: 'Portfolio Building',
    subtitle: 'Showcase Your Skills',
    description: 'Build an impressive portfolio of solutions that showcases your problem-solving abilities. Each solved problem becomes a testament to your skills.',
    image: '/images/crusible.png',
    highlights: [
      'Solution showcase',
      'Code quality metrics',
      'Problem difficulty badges',
      'Portfolio export'
    ],
    stats: 'Portfolio Ready',
    color: 'from-purple-500 to-pink-500',
    category: 'crucible',
    type: 'image'
  },
  {
    id: 'arena-1',
    title: '10K+ Active Students',
    subtitle: 'Vibrant Community',
    description: 'Join a thriving community of developers from around the world. Connect with peers, mentors, and industry professionals who share your passion.',
    image: '/images/arena.png',
    highlights: [
      'Global community',
      'Peer networking',
      'Mentor connections',
      'Industry professionals'
    ],
    stats: '10K+ Students',
    color: 'from-orange-500 to-red-500',
    category: 'arena',
    type: 'image'
  },
  {
    id: 'arena-2',
    title: 'Weekly Competitions',
    subtitle: 'Test Your Skills',
    description: 'Participate in weekly coding competitions, hackathons, and project showcases. Compete with peers, win prizes, and build your reputation.',
    image: '/images/arena.png',
    highlights: [
      'Weekly challenges',
      'Hackathon events',
      'Prize competitions',
      'Leaderboards'
    ],
    stats: '52+ Events/Year',
    color: 'from-orange-500 to-red-500',
    category: 'arena',
    type: 'image'
  },
  {
    id: 'arena-3',
    title: 'Real-Time Collaboration',
    subtitle: 'Learn Together',
    description: 'Collaborate in real-time with other developers. Share solutions, discuss approaches, and learn from each other\'s perspectives.',
    image: '/images/arena.png',
    highlights: [
      'Live chat channels',
      'Code sharing',
      'Pair programming',
      'Group projects'
    ],
    stats: 'Real-Time Chat',
    color: 'from-orange-500 to-red-500',
    category: 'arena',
    type: 'image'
  }
];

export default function InteractiveFeaturesModal({ 
  isOpen, 
  onClose, 
  initialCategory = 'forge' 
}: InteractiveFeaturesModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [filteredFeatures, setFilteredFeatures] = useState<Feature[]>([]);

  useEffect(() => {
    if (isOpen) {
      const filtered = features.filter(feature => feature.category === initialCategory);
      setFilteredFeatures(filtered);
      setCurrentIndex(0);
    }
  }, [isOpen, initialCategory]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredFeatures.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredFeatures.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredFeatures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredFeatures.length) % filteredFeatures.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  if (!isOpen) return null;

  const currentFeature = filteredFeatures[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="relative w-full max-w-7xl max-h-[90vh] bg-background rounded-3xl shadow-2xl overflow-hidden border border-border/20"
          style={{ 
            borderWidth: '1px',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border/10 bg-gradient-to-r from-background to-muted/5">
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="capitalize border-primary/20 bg-primary/10 text-primary">
                {initialCategory}
              </Badge>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Feature Showcase
              </h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-muted/50 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row h-[calc(90vh-120px)]">
            {/* Left Section - Carousel */}
            <div className="flex-[1.2] p-6 flex flex-col justify-center">
              <div 
                className="relative bg-muted/5 rounded-2xl overflow-hidden border border-border/10 flex-grow"
                style={{
                  borderWidth: '1px',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)'
                }}
              >
                {/* Media Display */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {currentFeature?.type === 'video' && currentFeature.video ? (
                    <video
                      src={currentFeature.video}
                      className="w-auto h-auto max-w-full max-h-full object-cover rounded-2xl"
                      style={{ objectPosition: 'center center' }}
                      autoPlay
                      muted
                      loop
                      playsInline
                      onError={() => {
                        console.warn('Video failed to load:', currentFeature.video);
                      }}
                    />
                  ) : (
                    <Image
                      src={currentFeature?.image || '/images/forge.png'}
                      alt={currentFeature?.title || 'Feature Image'}
                      width={1600}
                      height={900}
                      className="w-auto h-auto max-w-full max-h-full object-cover rounded-2xl"
                      style={{ objectPosition: 'center center' }}
                      priority
                      onError={() => {
                        console.warn('Image failed to load:', currentFeature?.image);
                      }}
                    />
                  )}
                  
                  {/* Media Type Indicator */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {currentFeature?.type === 'video' ? (
                        <Video className="w-3 h-3 mr-1" />
                      ) : (
                        <ImageIcon className="w-3 h-3 mr-1" />
                      )}
                      {currentFeature?.type === 'video' ? 'Video' : 'Image'}
                    </Badge>
                  </div>
                </div>

                {/* Enhanced Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {filteredFeatures.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-500 ease-out",
                        index === currentIndex
                          ? "bg-primary w-8 shadow-lg shadow-primary/25"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-125"
                      )}
                    />
                  ))}
                </div>
              </div>
              
              {/* Carousel Controls moved outside and below the media container */}
              <div className="flex items-center justify-center gap-3 mt-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="h-10 w-10 rounded-full bg-background/90 backdrop-blur-sm border-border/20 hover:bg-background hover:scale-105 transition-all duration-200"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleAutoPlay}
                  className="h-10 w-10 rounded-full bg-background/90 backdrop-blur-sm border-border/20 hover:bg-background hover:scale-105 transition-all duration-200"
                >
                  {isAutoPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5" />
                  )}
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="h-10 w-10 rounded-full bg-background/90 backdrop-blur-sm border-border/20 hover:bg-background hover:scale-105 transition-all duration-200"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Right Section - Content */}
            <div className="flex-1 p-6 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature?.id}
                  initial={{ opacity: 0, x: 30, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -30, scale: 0.98 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.4, 0.0, 0.2, 1],
                    staggerChildren: 0.1
                  }}
                  className="space-y-8"
                >
                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Badge variant="secondary" className="text-xs bg-muted/50 border-border/20">
                      {currentFeature?.subtitle}
                    </Badge>
                    <h3 className="text-4xl font-bold leading-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                      {currentFeature?.title}
                    </h3>
                  </motion.div>

                  <motion.p 
                    className="text-lg text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {currentFeature?.description}
                  </motion.p>

                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                      KEY FEATURES
                    </h4>
                    <ul className="space-y-3">
                      {currentFeature?.highlights.map((highlight, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-center text-sm"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mr-4 flex-shrink-0 shadow-sm shadow-primary/25" />
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="pt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Badge variant="outline" className="text-lg px-6 py-3 bg-muted/30 border-border/20 text-foreground font-medium">
                      {currentFeature?.stats}
                    </Badge>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}