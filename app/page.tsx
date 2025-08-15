import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const blogPosts = [
  {
    title: "Essential Gear for Alpine Adventures on a Budget",
    excerpt:
      "Discover the must-have equipment that won't break the bank, from tested budget alternatives to smart buying strategies.",
    image: "/alpine-gear-mountain-backdrop.png",
    date: "March 15, 2024",
    category: "Gear",
    slug: "essential-gear-alpine-adventures-budget",
  },
  {
    title: "7 Hidden Alpine Towns Perfect for Budget Travelers",
    excerpt:
      "Explore charming mountain villages where you can experience authentic alpine culture without the premium prices.",
    image: "/pristine-wilderness-landscape.png",
    date: "March 12, 2024",
    category: "Destinations",
    slug: "hidden-alpine-towns-budget-travelers",
  },
  {
    title: "Winter Camping: A Complete Beginner's Guide",
    excerpt:
      "Master the art of cold-weather camping with our comprehensive guide to gear, techniques, and safety tips.",
    image: "/winter-camping-tent-snow.png",
    date: "March 8, 2024",
    category: "Skills",
    slug: "winter-camping-beginners-guide",
  },
  {
    title: "Trail Running in the Alps: Best Routes for Every Level",
    excerpt:
      "From gentle valley paths to challenging mountain trails, discover the best alpine running routes across Europe.",
    image: "/trail-running-forest-path.png",
    date: "March 5, 2024",
    category: "Running",
    slug: "trail-running-alps-best-routes",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="px-6 py-32 bg-[#f0eee7]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-primary mb-6 tracking-wide uppercase text-sm font-medium">The Wanderbase</div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-foreground">
            Your journey starts here
          </h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
            Discover the most stunning alpine destinations without breaking the bank. Expert guides, proven routes, and
            insider tips for the budget-conscious adventurer.
          </p>
          <a
            href="https://outdoorblueprint.gumroad.com/l/ob_jotr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get started with our alpine adventure guide (opens in new tab)"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12 py-4">
              Get Started
            </Button>
          </a>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Latest Adventures</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stories, tips, and insights from the trail to inspire your next outdoor adventure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="group cursor-pointer">
                <Link href={`/blog/${post.slug}`} aria-label={`Read article: ${post.title}`}>
                  <div className="relative overflow-hidden bg-card h-80">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-white/80">{post.category}</span>
                        <span className="text-sm text-white/60">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                      <p className="text-white/90 text-sm leading-relaxed">{post.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Start Your Alpine Adventure Today</h2>
          <p className="text-xl mb-12 text-primary-foreground/90 max-w-2xl mx-auto">
            Get instant access to our comprehensive alpine guide and start planning your budget-friendly adventure.
          </p>
          <a
            href="https://outdoorblueprint.gumroad.com/l/ob_jotr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get alpine adventure guide now (opens in new tab)"
          >
            <Button variant="secondary" size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-12 py-4">
              Get Guide Now
            </Button>
          </a>
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
                    aria-label="Get alpine adventure guide (opens in new tab)"
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
