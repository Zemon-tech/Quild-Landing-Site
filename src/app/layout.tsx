import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from '@clerk/nextjs';
import { AuthRedirect } from '@/components/AuthRedirect';

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Quild - Learn Programming, Build Projects, Join Coding Competitions",
  description: "Quild is the ultimate platform for college students to learn programming, build real-world projects, participate in coding competitions, and join a vibrant community of 10,000+ developers. Start your coding journey today!",
  keywords: [
    "programming", "coding", "learn to code", "programming for students", 
    "coding projects", "coding competitions", "programming community", 
    "web development", "software development", "coding bootcamp", 
    "programming education", "coding challenges", "developer portfolio", 
    "programming skills", "coding tutorials", "programming courses",
    "Quild", "Quild programming", "Quild coding platform", "programming in India",
    "coding education India", "programming courses India", "learn coding online"
  ],
  authors: [{ name: "Quild Team", url: "https://quild.in" }],
  creator: "Quild",
  publisher: "Quild",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://quild.in'),
  alternates: {
    canonical: 'https://quild.in',
  },
  openGraph: {
    title: "Quild - Learn Programming, Build Projects, Join Coding Competitions",
    description: "Quild is the ultimate platform for college students to learn programming, build real-world projects, participate in coding competitions, and join a vibrant community of 10,000+ developers.",
    url: 'https://quild.in',
    siteName: 'Quild',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/mockup.jpeg',
        width: 1200,
        height: 630,
        alt: 'Quild - Programming Learning Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Quild - Learn Programming, Build Projects, Join Coding Competitions",
    description: "Quild is the ultimate platform for college students to learn programming, build real-world projects, participate in coding competitions, and join a vibrant community of 10,000+ developers.",
    creator: '@quild',
    images: ['/images/mockup.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  icons: {
    icon: '/favicon.ico',
  },
  category: 'education',
  classification: 'programming education platform',
  referrer: 'origin-when-cross-origin',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Quild",
              "url": "https://quild.in",
              "logo": "https://quild.in/images/mockup.jpeg",
              "description": "Quild is the ultimate platform for college students to learn programming, build real-world projects, participate in coding competitions, and join a vibrant community of 10,000+ developers.",
              "foundingDate": "2024",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "hello@quild.com"
              },
              "sameAs": [
                "https://github.com/quild",
                "https://discord.gg/quild"
              ],
              "offers": {
                "@type": "Offer",
                "category": "Programming Education",
                "description": "Learn programming with real-world projects and coding competitions"
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} ${spaceMono.variable} antialiased`}
      >
        <ClerkProvider
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AuthRedirect>
              {children}
            </AuthRedirect>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
