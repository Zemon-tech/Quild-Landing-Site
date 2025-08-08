"use client"

import { HeroSectionNew } from "./HeroSectionNew"
import { Icons } from "@/components/ui/icons"
import { useAuth, SignUpButton } from '@clerk/nextjs'

export function HeroSectionDemo() {
  const { isSignedIn } = useAuth();

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
          text: isSignedIn ? "Go to App" : "Get Started for Free",
          href: isSignedIn ? "http://localhost:5173" : "#",
          variant: "default",
          isSignUpButton: !isSignedIn,
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
        light: "/mockup.png", // Path relative to the public folder
        dark: "/mockup.png",
        alt: "Zemon Platform Preview",
      }}
    />
  )
}  