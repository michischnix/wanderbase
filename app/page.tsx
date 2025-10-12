"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"

const blogPosts = [
  {
    title: "Introduction to Budget-Friendly Alpine Adventures",
    excerpt:
      "Discover how to enjoy unforgettable alpine experiences without breaking the bank. Learn essential tips for budget-conscious adventurers.",
    image: "/budget-alpine-hikers-sunset.jpg",
    date: "Dec 10, 2024",
    category: "Budget Tips",
    slug: "budget-friendly-alpine-adventures",
  },
  {
    title: "How to Plan a Memorable Alpine Adventure Without Breaking the Bank",
    excerpt:
      "A comprehensive guide to planning your perfect alpine adventure on a budget, from setting budgets to finding activities.",
    image: "/alpine-mountain-landscape.jpg",
    date: "Dec 10, 2024",
    category: "Budget Tips",
    slug: "plan-memorable-alpine-adventure",
  },
  {
    title: "7 Hidden Costs That Destroy Your Alpine Hiking Budget (And How to Avoid Them)",
    excerpt:
      "Don't let surprise expenses ruin your Alps adventure. Discover the 7 hidden costs every budget hiker faces and proven strategies to avoid them.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-sanmane-1365425.jpg-diWFGnCJ1uivMo0MNrtCVVFlz4NFcG.jpeg",
    date: "Mar 15, 2024",
    category: "Budget Tips",
    slug: "hidden-costs",
  },
  {
    title: "Seasonal Guides on a Dime: Affordable Outdoor Adventures Year-Round",
    excerpt:
      "Discover budget-friendly outdoor adventures for every season. From spring wildflower hikes to winter snowshoeing, adventure awaits year-round without breaking the bank.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-simonmigaj-748898%20%281%29-MpjMqo6MudtcbKFkU1zZlUadrvhc6O.jpg",
    date: "Mar 28, 2024",
    category: "Budget Tips",
    slug: "seasonal-budget-adventures",
  },
  {
    title: "Public Transport vs. Car: The Ultimate Alps Budget Showdown",
    excerpt:
      "Discover whether public transport or driving saves more money for Alpine hiking. Complete cost breakdown with real examples from Germany and Austria.",
    image: "/alpine-railway-transport.jpg",
    date: "Mar 12, 2024",
    category: "Transport",
    slug: "transport-vs-car",
  },
  {
    title: "Free Alpine Hikes: 12 Stunning Trails That Cost Nothing",
    excerpt:
      "Discover 12 breathtaking Alpine hikes in Germany and Austria that are completely free. No cable cars, no parking fees—just pure mountain adventure on a zero budget.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-fmaderebner-238622.jpg-9OhMz6CFerNpjuymbhQHBeTJJovNjM.jpeg",
    date: "Mar 8, 2024",
    category: "Free Trails",
    slug: "free-trails",
  },
]

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="px-6 py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/mountains-bg.jpg"
            alt="Mountain landscape background"
            fill
            className="object-cover"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
            priority
            sizes="100vw"
          />
        </div>

        {/* Beige overlay with 50% opacity */}
        <div className="absolute inset-0" style={{ backgroundColor: "#e2dcc8", opacity: 0.5 }}></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 shadow-none">
          <h1 className="md:text-6xl leading-tight text-gray-900 drop-shadow-sm font-bold shadow-none mt-8 px-0 lg:text-5xl tracking-normal mb-8 text-4xl">
            Hike the Trails, Not Your Budget.
          </h1>
          <p className="text-xl text-gray-800 leading-relaxed max-w-2xl mx-auto drop-shadow-sm mb-8 font-medium px-0 shadow-none">
            Ditch the inflated prices and tourist traps. Get expert-vetted guides, budget hacks, and proven routes to
            stunning alpine destinations—all designed for the cost-conscious explorer.
          </p>
          <a
            href="https://wanderbase.gumroad.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get started with our alpine adventure guide (opens in new tab)"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 px-5 text-base py-4 my-0 shadow-none font-semibold"
            >
              {"Join the Community"}
            </Button>
          </a>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 shadow-none">
            <h2 className="text-4xl font-bold text-foreground mb-6 md:text-4xl">
              {"We Make Alpine Adventure Affordable."}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stories, tips, and insights from the trail to inspire your next outdoor adventure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <Link href={`/blog/${post.slug}`} aria-label={`Read article: ${post.title}`}>
                  <div className="overflow-hidden relative aspect-[4/3]">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-4 text-sm text-muted-foreground">
                      <span className="shadow-none">{post.date}</span>
                      <span>•</span>
                      <span className="font-medium shadow-none">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-bold leading-tight text-foreground mb-4 group-hover:text-primary transition-colors shadow-none">
                      {post.title}
                    </h3>
                    <Button className="bg-primary hover:bg-primary/90 w-min shadow-none">Read Article</Button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup />

      <Footer />
    </div>
  )
}
