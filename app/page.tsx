"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

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
    image: "/alpine-sunset-dramatic-peaks.jpg",
    date: "Mar 15, 2024",
    category: "Budget Tips",
    slug: "hidden-costs",
  },
  {
    title: "Seasonal Guides on a Dime: Affordable Outdoor Adventures Year-Round",
    excerpt:
      "Discover budget-friendly outdoor adventures for every season. From spring wildflower hikes to winter snowshoeing, adventure awaits year-round without breaking the bank.",
    image: "/alpine-autumn-trees-mountains.jpg",
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
    image: "/summer-alpine-meadow-trail.jpg",
    date: "Mar 8, 2024",
    category: "Free Trails",
    slug: "free-trails",
  },
]

export default function HomePage() {
  const [blurAmount, setBlurAmount] = useState(10)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const duration = 10000 // 10 seconds
    const delay = 3000 // 3 second delay
    let animationFrameId: number

    const startAnimation = () => {
      const startTime = Date.now()
      const startBlur = 10
      const endBlur = 0

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Smooth easing function for natural blur transition
        const easeOutCubic = 1 - Math.pow(1 - progress, 3)
        const currentBlur = startBlur - (startBlur - endBlur) * easeOutCubic

        setBlurAmount(currentBlur)

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate)
        }
      }

      animate()
    }

    // Wait for page to be fully loaded, then add delay
    if (document.readyState === "complete") {
      setTimeout(startAnimation, delay)
    } else {
      window.addEventListener("load", () => {
        setTimeout(startAnimation, delay)
      })
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY
        const parallaxSpeed = 0.5
        heroRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="px-6 py-32 relative overflow-hidden">
        <div ref={heroRef} className="absolute inset-0 will-change-transform">
          <Image
            src="/images/wanderbase-background-dec25.jpeg"
            alt="Mountain landscape background"
            fill
            className="object-cover"
            style={{ filter: `blur(${blurAmount}px)` }}
            priority
            fetchPriority="high"
            quality={90}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/15 z-10 py-0 my-0 shadow-none"></div>

        <div className="max-w-4xl text-center relative z-20 shadow-none mx-auto my-0 px-0">
          <h1 className="md:text-6xl leading-tight drop-shadow-sm font-bold shadow-none mb-8 text-4xl leading-8 mr-[0] ml-[0] text-white lg:text-6xl tracking-tight px-[0] py-[0] mt-36">
            {"Hike the Trails, Not Your Budget."}
          </h1>
          <p className="text-xl leading-relaxed max-w-2xl mx-auto drop-shadow-sm mb-8 font-medium px-0 shadow-none text-white">
            Ditch the inflated prices and tourist traps. Get expert-vetted guides, budget hacks, and proven routes to
            stunning alpine destinations—all designed for the cost-conscious explorer.
          </p>
          <Link href="/guides" aria-label="Explore our hiking guides">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 px-5 text-base py-4 my-0 font-semibold shadow-md"
            >
              Explore our Guides
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#f0eee7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6 md:text-5xl">Our Expert Hiking Guides</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dive into our comprehensive, curated hiking guides designed to provide you with the essential knowledge
              needed to master the mountains.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Free Guide Teaser */}
            <div className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/winter-hiking-starter-kit.png"
                  alt="Winter Hiking Starter Kit"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-secondary text-foreground">
                  FREE GUIDE
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">Winter Hiking Starter Kit</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A free guide to preparing for winter trails safely and confidently. Perfect for beginners taking their
                  first steps into winter hiking.
                </p>
                <Link href="/guides">
                  <Button className="bg-primary hover:bg-primary/90 w-full font-semibold">View Guide</Button>
                </Link>
              </div>
            </div>

            {/* Paid Guide Teaser */}
            <div className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/beginners-guide-hiking-alps.jpg"
                  alt="The Beginner's Guide to Hiking in the Alps"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 text-foreground bg-secondary">
                  PREMIUM GUIDE
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                  The Beginner's Guide to Hiking in the Alps
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Your complete package for alpine adventures with detailed routes, budget tips, and insider knowledge
                  for unforgettable experiences.
                </p>
                <Link href="/guides">
                  <Button className="bg-primary hover:bg-primary/90 w-full font-semibold">View Guide</Button>
                </Link>
              </div>
            </div>
          </div>
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
