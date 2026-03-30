import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Adventure Stories & Budget Hiking Tips | Wanderbase Blog",
  description:
    "Expert hiking tips, budget adventure guides, and trail stories for Alpine explorers. Discover free trails, gear advice, and money-saving strategies for the Alps.",
  robots: "index, follow",
  openGraph: {
    title: "Adventure Stories & Budget Hiking Tips | Wanderbase Blog",
    description:
      "Expert hiking tips, budget adventure guides, and trail stories for Alpine explorers. Discover free trails, gear advice, and money-saving strategies for the Alps.",
    url: "https://wanderbase.com/blog",
    type: "website",
    images: [{ url: "/wb-meta2.png", width: 1200, height: 630, alt: "Wanderbase Blog" }],
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
