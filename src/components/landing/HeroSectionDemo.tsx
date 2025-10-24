import { Space_Mono } from "next/font/google"
import { HeroSectionNew } from "./HeroSectionNew"

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export function HeroSectionDemo() {
  return (
    <div className={spaceMono.className}>
      <HeroSectionNew
        badge={{
          text: "Don't just learn, build!",
          action: {
            text: "Learn more",
            href: "#features",
          },
        }}
        title={
          <>
            <span className="block max-w-[22ch] mx-auto">
            Master the Skills That AI Can&apos;t Replace
            </span>
          </>
        }
        description="Quilld is where you&apos;ll solve the real-world problems that define a true engineer—from system design to large-scale architecture."
        actions={[
          {
            text: "Join The Family Now",
            href: "/waitlist",
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
    </div>
  )
}