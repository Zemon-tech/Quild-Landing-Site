"use client"

import { Waitlist } from '@clerk/nextjs'

const redirectUrl =
  process.env.NEXT_PUBLIC_WAITLIST_REDIRECT_URL || '/thank-you'

export function CustomWaitlist() {
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden relative z-10 px-4">
      {/* Waitlist Badge */}
      <div className="mb-8">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm">
          <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
          Waitlist
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 text-center">
        Coming soon!
      </h1>

      {/* Waitlist Content */}
      <div className="w-full max-w-md mx-auto">
        <Waitlist afterJoinWaitlistUrl={redirectUrl} />
      </div>
    </div>
  )
}
