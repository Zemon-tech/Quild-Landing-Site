"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import { Glow } from "@/components/ui/glow";
import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { SignUpButton } from '@clerk/nextjs';

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "default" | "outline" | "glow";
  isSignUpButton?: boolean;
}

interface HeroProps {
  badge?: {
    text: string;
    action: {
      text: string;
      href: string;
    };
  };
  title: React.ReactNode;
  description: string;
  actions: HeroAction[];
  image: {
    light: string;
    dark: string;
    alt: string;
  };
}

export function HeroSectionNew({
  badge,
  title,
  description,
  actions,
  image,
}: HeroProps) {
  const { resolvedTheme } = useTheme();
  const imageSrc = resolvedTheme === "dark" ? image.dark : image.light;

  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "pt-8 pb-0 sm:pt-16 md:pt-20 px-4",
        "fade-bottom overflow-hidden"
      )}
    >
      <div className="mx-auto flex max-w-container flex-col gap-8 pt-12 sm:gap-16">
        <div className="flex flex-col items-center gap-4 text-center sm:gap-8">
          {/* Badge */}
          {badge && (
            <Badge variant="outline" className="animate-appear gap-2">
              <span className="text-muted-foreground">{badge.text}</span>
              <a href={badge.action.href} className="flex items-center gap-1">
                {badge.action.text}
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
          )}

          {/* Title */}
          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text font-sans text-3xl sm:text-5xl md:text-6xl font-semibold leading-[1.15] tracking-tight md:tracking-[-0.02em] text-transparent drop-shadow-2xl">
            {title}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl relative z-10 max-w-[800px] animate-appear font-normal text-muted-foreground opacity-0 delay-100 leading-relaxed">
            {description}
          </p>

          {/* Actions */}
          <div className="relative z-10 flex animate-appear justify-center gap-3 md:gap-4 opacity-0 delay-300">
            <div className="relative z-10 flex animate-appear justify-center gap-3 md:gap-4 opacity-0 delay-300">
              {actions.map((action, index) => (
                action.isSignUpButton ? (
                  <SignUpButton key={index} mode="modal">
                    <Button variant={action.variant} size="sm" className="flex items-center gap-2 md:h-11 md:px-8 md:text-base">
                      {action.icon}
                      {action.text}
                    </Button>
                  </SignUpButton>
                ) : (
                  <Button key={index} variant={action.variant} size="sm" asChild className="md:h-11 md:px-8 md:text-base">
                    <a href={action.href} className="flex items-center gap-2">
                      {action.icon}
                      {action.text}
                    </a>
                  </Button>
                )
              ))}
            </div>
          </div>

          {/* Image with Glow */}
          <div className="relative pt-8">
            <MockupFrame
              className="animate-appear opacity-0 delay-700"
              size="small"
            >
              <Mockup type="responsive">
                <Image
                  src={imageSrc}
                  alt={image.alt}
                  width={1248}
                  height={765}
                  priority
                />
              </Mockup>
            </MockupFrame>
            <Glow
              variant="top"
              className="animate-appear-zoom opacity-0 delay-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
}