import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zemon - Built for the Builder Within You",
  description: "The ultimate platform for college students to learn, build, and showcase their programming skills through real-world projects, coding competitions, and a vibrant community.",
  keywords: ["programming", "learning", "coding", "students", "education", "projects", "competitions", "community"],
  authors: [{ name: "Zemon Team" }],
  creator: "Zemon",
  publisher: "Zemon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zemon.com'),
  openGraph: {
    title: "Zemon - Built for the Builder Within You",
    description: "The ultimate platform for college students to learn, build, and showcase their programming skills through real-world projects, coding competitions, and a vibrant community.",
    url: 'https://zemon.com',
    siteName: 'Zemon',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Zemon - Built for the Builder Within You",
    description: "The ultimate platform for college students to learn, build, and showcase their programming skills through real-world projects, coding competitions, and a vibrant community.",
    creator: '@zemon',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
