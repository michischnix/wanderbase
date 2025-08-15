import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const blogPosts = [
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
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

      <Footer />
    </div>
  )
}
