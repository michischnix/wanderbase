import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { CookieBanner } from "@/components/cookie-banner"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Wanderbase - Outdoor Adventure Guides",
  description:
    "The Wanderbase: Your trusted guide to outdoor adventures. Find expert guides and inspiring stories to fuel your next expedition.",
  generator: "v0.app",
  robots: "index, follow",
  icons: {
    icon: "/wb-favicon3.png",
  },
  openGraph: {
    title: "Wanderbase - Outdoor Adventure Guides",
    description:
      "The Wanderbase: Your trusted guide to outdoor adventures. Find expert guides and inspiring stories to fuel your next expedition.",
    images: [
      {
        url: "/wb-meta2.png",
        width: 1200,
        height: 630,
        alt: "Wanderbase - Outdoor Adventure Guides",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wanderbase - Outdoor Adventure Guides",
    description:
      "The Wanderbase: Your trusted guide to outdoor adventures. Find expert guides and inspiring stories to fuel your next expedition.",
    images: ["/wb-meta2.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased text-background`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preload" href="/mountains-bg.jpg" as="image" />
        <link rel="preload" href="/wb-logo2.png" as="image" />
        <link rel="preload" href="/wb-logo2-white.png" as="image" />
      </head>
      <body className="font-sans">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
