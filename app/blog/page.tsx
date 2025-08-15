import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { BlogCard } from "@/components/blog-card"

const blogPosts = [
  {
    title: "Essential Gear for Alpine Adventures on a Budget",
    excerpt:
      "Discover the must-have equipment that won't break the bank, from tested budget alternatives to smart buying strategies.",
    category: "Gear",
    date: "March 15, 2024",
    image: "/alpine-gear-mountain-backdrop.png",
    slug: "essential-gear-alpine-adventures-budget",
  },
  {
    title: "7 Hidden Alpine Towns Perfect for Budget Travelers",
    excerpt:
      "Explore charming mountain villages where you can experience authentic alpine culture without the premium prices.",
    category: "Destinations",
    date: "March 12, 2024",
    image: "/pristine-wilderness-landscape.png",
    slug: "hidden-alpine-towns-budget-travelers",
  },
  {
    title: "Winter Camping: A Complete Beginner's Guide",
    excerpt:
      "Master the art of cold-weather camping with our comprehensive guide to gear, techniques, and safety tips.",
    category: "Skills",
    date: "March 8, 2024",
    image: "/winter-camping-tent-snow.png",
    slug: "winter-camping-beginners-guide",
  },
  {
    title: "Trail Running in the Alps: Best Routes for Every Level",
    excerpt:
      "From gentle valley paths to challenging mountain trails, discover the best alpine running routes across Europe.",
    category: "Running",
    date: "March 5, 2024",
    image: "/trail-running-forest-path.png",
    slug: "trail-running-alps-best-routes",
  },
  {
    title: "Photography in the Wild: Capturing Alpine Beauty",
    excerpt:
      "Tips for capturing stunning nature photography during your outdoor adventures without expensive equipment.",
    category: "Photography",
    date: "March 2, 2024",
    image: "/wildlife-photography-setup.png",
    slug: "wild-photography-tips",
  },
  {
    title: "Leave No Trace: Responsible Alpine Adventures",
    excerpt: "How to minimize your environmental impact while exploring Europe's most pristine mountain regions.",
    category: "Conservation",
    date: "February 28, 2024",
    image: "/pristine-wilderness-landscape.png",
    slug: "leave-no-trace-alps",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
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
