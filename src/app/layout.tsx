import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import AssistantWidget from "@/components/AssistantWidget";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Daniyal | Full Stack Developer & AI Agent Builder",
  description: "Full Stack Developer specializing in AI Agents, Next.js, Python, and automation. I help startups build intelligent, autonomous web applications that scale 2x faster. Currently studying Data Science at Quest University.",
  keywords: ["Full Stack Developer", "AI Agent Builder", "Next.js Developer", "Python Developer", "AI Automation", "Web Development", "Muhammad Daniyal"],
  authors: [{ name: "Muhammad Daniyal" }],
  creator: "Muhammad Daniyal",
  openGraph: {
    title: "Muhammad Daniyal | Full Stack Developer & AI Agent Builder",
    description: "Full Stack Developer specializing in AI Agents, Next.js, Python, and automation. Building intelligent web solutions.",
    type: "website",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Daniyal - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Daniyal | Full Stack Developer & AI Agent Builder",
    description: "Full Stack Developer specializing in AI Agents, Next.js, Python, and automation.",
    images: ["/images/profile.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml", sizes: "180x180" },
    ],
    shortcut: "/favicon.svg",
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.daniyalxdev.me"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <main className="min-h-screen">
          {children}
          <AssistantWidget/>
        </main>
      </body>
    </html>
  );
}
