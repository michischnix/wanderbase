"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

const blogPosts = [
  {
    title: "7 Hidden Costs That Destroy Your Alpine Hiking Budget (And How to Avoid Them)",
    category: "Budget Tips",
    date: "Mar 15, 2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-sanmane-1365425.jpg-diWFGnCJ1uivMo0MNrtCVVFlz4NFcG.jpeg",
    slug: "hidden-costs",
  },
  {
    title: "Backpacking Europe on the Cheap: Hidden Trails That Won't Break the Bank",
    category: "Budget Tips",
    date: "Mar 18, 2024",
    image: "/budget-backpacking-europe.png",
    slug: "budget-backpacking-europe",
  },
  {
    title: "Top 10 Free or Ultra-Low-Cost Outdoor Activities You Can Do Anywhere",
    category: "Budget Tips",
    date: "Mar 20, 2024",
    image: "/free-outdoor-activities.png",
    slug: "free-outdoor-activities",
  },
  {
    title: "The Ultimate Budget Gear Rundown: Affordable Essentials That Don't Skimp on Quality",
    category: "Budget Tips",
    date: "Mar 22, 2024",
    image: "/budget-gear-essentials.png",
    slug: "budget-gear-guide",
  },
  {
    title: "Weekend Wilderness Escapes from Home: Best Local Adventures Under $50",
    category: "Budget Tips",
    date: "Mar 25, 2024",
    image: "/weekend-wilderness-escapes.png",
    slug: "weekend-adventures-under-50",
  },
  {
    title: "Seasonal Guides on a Dime: Affordable Outdoor Adventures Year-Round",
    category: "Budget Tips",
    date: "Mar 28, 2024",
    image: "/seasonal-budget-adventures.png",
    slug: "seasonal-budget-adventures",
  },
  {
    title: "Insider Tips from Budget Backpackers: Before Your Next Affordable Adventure",
    category: "Budget Tips",
    date: "Mar 30, 2024",
    image: "/budget-backpacker-tips.png",
    slug: "budget-backpacker-tips",
  },
  {
    title: "Public Transport vs. Car: The Ultimate Alps Budget Showdown",
    category: "Transport",
    date: "Mar 12, 2024",
    image: "/alpine-railway-transport.jpg",
    slug: "transport-vs-car",
  },
  {
    title: "Free Alpine Hikes: 12 Stunning Trails That Cost Nothing",
    category: "Free Trails",
    date: "Mar 8, 2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-fmaderebner-238622.jpg-9OhMz6CFerNpjuymbhQHBeTJJovNjM.jpeg",
    slug: "free-trails",
  },
  {
    title: "Snowshoeing 101: Step Into Winter Adventure",
    category: "Winter Activities",
    date: "January 28, 2025",
    image: "/snowshoeing-gear.jpg",
    slug: "snowshoeing-guide",
  },
  {
    title: "Two Wheels, Endless Trails: Discover Bikepacking",
    category: "Cycling",
    date: "January 25, 2025",
    image: "/bikepacking-desert.jpg",
    slug: "bikepacking-guide",
  },
  {
    title: "Backcountry Skiing 101: Your First Steps Beyond the Resort",
    category: "Winter Activities",
    date: "January 22, 2025",
    image: "/backcountry-skiing.jpg",
    slug: "backcountry-skiing",
  },
  {
    title: "Paws & Paths: A Beginner's Guide to Hiking with Dogs",
    category: "Hiking",
    date: "January 20, 2025",
    image: "/hiking-with-dog.jpg",
    slug: "hiking-with-dogs",
  },
  {
    title: "Park, Pitch, Relax: Car Camping Made Simple",
    category: "Camping",
    date: "January 18, 2025",
    image: "/car-camping-vans.jpg",
    slug: "car-camping-guide",
  },
  {
    title: "Beyond the Campsite: Discover Wild Camping for You",
    category: "Camping",
    date: "January 15, 2025",
    image: "/wild-camping-tent.jpg",
    slug: "wild-camping-guide",
  },
]

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    const tagParam = searchParams.get("tag")
    if (tagParam) {
      setActiveTag(tagParam)
    }
  }, [searchParams])

  const allTags = Array.from(new Set(blogPosts.map((post) => post.category)))

  const sortedTags = allTags.sort((a, b) => {
    const countA = blogPosts.filter((post) => post.category === a).length
    const countB = blogPosts.filter((post) => post.category === b).length

    // If counts are equal, prioritize Camping over Winter Activities
    if (countA === countB) {
      if (a === "Camping" && b === "Winter Activities") return -1
      if (a === "Winter Activities" && b === "Camping") return 1
    }

    return countB - countA
  })

  const filteredPosts = activeTag ? blogPosts.filter((post) => post.category === activeTag) : blogPosts

  const getTagCount = (tag: string) => {
    return blogPosts.filter((post) => post.category === tag).length
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">Adventure Stories</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Expert insights, inspiring stories, and practical tips for budget-conscious outdoor adventurers.
          </p>
        </div>
      </section>

      <section className="pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTag === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              All Topics ({blogPosts.length})
            </button>
            {sortedTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTag === tag
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {tag} ({getTagCount(tag)})
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <Link href={`/blog/${post.slug}`} aria-label={`Read article: ${post.title}`}>
                  <div className="overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-4 text-sm text-muted-foreground">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="font-medium">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-bold leading-tight text-foreground mb-4 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <Button className="bg-primary hover:bg-primary/90 w-full">Read Article</Button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
