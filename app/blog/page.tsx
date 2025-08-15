import { Navigation } from "@/components/navigation"
import { BlogCard } from "@/components/blog-card"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "Essential Gear for Alpine Adventures",
    excerpt: "Discover the must-have equipment for high-altitude hiking and mountaineering expeditions.",
    category: "Gear Guide",
    date: "Dec 15, 2024",
    image: "/alpine-gear-mountain-backdrop.png",
    slug: "essential-alpine-gear",
    featured: true,
  },
  {
    title: "Photography in the Wild",
    excerpt: "Tips for capturing stunning nature photography during your outdoor adventures.",
    category: "Photography",
    date: "Dec 12, 2024",
    image: "/wildlife-photography-setup.png",
    slug: "wild-photography-tips",
  },
  {
    title: "Leave No Trace Principles",
    excerpt: "How to minimize your environmental impact while exploring the great outdoors.",
    category: "Conservation",
    date: "Dec 10, 2024",
    image: "/pristine-wilderness-landscape.png",
    slug: "leave-no-trace",
  },
  {
    title: "Winter Camping Safety",
    excerpt: "Essential safety tips for cold weather camping and winter survival.",
    category: "Safety",
    date: "Dec 8, 2024",
    image: "/winter-camping-tent-snow.png",
    slug: "winter-camping-safety",
  },
  {
    title: "Trail Running Fundamentals",
    excerpt: "Get started with trail running and explore nature at your own pace.",
    category: "Running",
    date: "Dec 5, 2024",
    image: "/trail-running-forest-path.png",
    slug: "trail-running-basics",
  },
  {
    title: "Backcountry Navigation",
    excerpt: "Master the art of navigation using map, compass, and GPS technology.",
    category: "Skills",
    date: "Dec 3, 2024",
    image: "/navigation-tools-map-compass.png",
    slug: "backcountry-navigation",
  },
  {
    title: "Sustainable Adventure Travel",
    excerpt: "How to plan eco-friendly adventures that support local communities.",
    category: "Travel",
    date: "Nov 30, 2024",
    image: "/eco-friendly-camping.png",
    slug: "sustainable-adventure-travel",
  },
  {
    title: "Rock Climbing for Beginners",
    excerpt: "Your complete guide to getting started with outdoor rock climbing.",
    category: "Climbing",
    date: "Nov 28, 2024",
    image: "/beginner-rock-climbing.png",
    slug: "rock-climbing-beginners",
  },
]

const categories = [
  "All",
  "Gear Guide",
  "Photography",
  "Safety",
  "Skills",
  "Travel",
  "Climbing",
  "Conservation",
  "Running",
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Adventure Stories & Guides</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Expert insights, inspiring stories, and practical tips from the outdoor adventure community.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "bg-primary hover:bg-primary/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                date={post.date}
                image={post.image}
                slug={post.slug}
              />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              Load More Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Never Miss an Adventure</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Get weekly outdoor tips, gear reviews, and inspiring stories delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground bg-white border-0 focus:ring-2 focus:ring-primary-foreground/20"
            />
            <Button variant="secondary" size="lg" className="bg-secondary hover:bg-secondary/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">W</span>
                </div>
                <span className="font-bold text-xl">Wanderbase</span>
              </div>
              <p className="text-background/80 mb-4 max-w-md">
                Your trusted companion for outdoor adventures. Expert guides, proven techniques, and inspiring stories
                to fuel your next expedition.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-background/80">
                <li>
                  <a href="/guides" className="hover:text-background transition-colors">
                    Digital Guides
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-background transition-colors">
                    Adventure Blog
                  </a>
                </li>
                <li>
                  <a href="/guides" className="hover:text-background transition-colors">
                    Expert Tips
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-background/80">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2025 Wanderbase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
