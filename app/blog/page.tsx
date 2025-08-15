import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"

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
]

export default function BlogPage() {
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

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
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

      <footer className="bg-foreground text-background py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-background text-foreground flex items-center justify-center font-bold">
                  W
                </div>
                <span className="font-bold text-2xl">Wanderbase</span>
              </div>
              <p className="text-background/80 text-lg max-w-md leading-relaxed">
                Your trusted companion for outdoor adventures. Expert guides and inspiring stories to fuel your next
                expedition.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">Explore</h3>
              <ul className="space-y-3 text-background/80">
                <li>
                  <Link href="/blog" className="hover:text-background transition-colors">
                    Adventure Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-background transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <a
                    href="https://outdoorblueprint.gumroad.com/l/ob_jotr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-background transition-colors"
                  >
                    Get Guide
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
            <p>&copy; 2025 Wanderbase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
