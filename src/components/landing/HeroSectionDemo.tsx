"use client"

import { HeroSectionNew } from "./HeroSectionNew"

export function HeroSectionDemo() {
  return (
    <HeroSectionNew
      badge={{
        text: "Don't just learn, build!",
        action: {
          text: "Learn more",
          href: "#features",
        },
      }}
      title="Built for the Builder Within You"
      description="Start your developer journey with Quild and become a job-ready developer by learning, building, and competing with a community of over 10,000 students."
      actions={[
        {
          text: "Get Started for Free",
          href: "#",
          variant: "default",
          isSignUpButton: true,
        },
        {
          text: "Explore Features",
          href: "#features",
          variant: "outline",
        },
      ]}
      image={{
        light: "/images/mockup.jpeg", // Path relative to the public folder
        dark: "/images/mockup.jpeg",
        alt: "Quild Platform Preview",
      }}
    />
  )
}  