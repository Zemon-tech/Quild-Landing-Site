"use client"

import { HeroSectionNew } from "./HeroSectionNew"
import { Icons } from "@/components/ui/icons"

export function HeroSectionDemo() {
  return (
    <HeroSectionNew
      badge={{
        text: "Built for the Builder Within You",
        action: {
          text: "Learn more",
          href: "#features",
        },
      }}
      title="Built for the Builder Within You"
      description="The ultimate platform for college students to learn, build, and showcase their programming skills through real-world projects, coding competitions, and a vibrant community."
      actions={[
        {
          text: "Get Started for Free",
          href: "/signup",
          variant: "default",
        },
        {
          text: "Explore Features",
          href: "#features",
          variant: "outline",
        },
        {
          text: "GitHub",
          href: "https://github.com/zemon",
          variant: "glow",
          icon: <Icons.gitHub className="h-5 w-5" />,
        },
      ]}
      image={{
        light: "/mockup.jpeg", // Local image from public folder
        dark: "/mockup.jpeg",  // Same image for both themes
        alt: "Zemon Platform Dashboard Preview",
      }}
    />
  )
}  