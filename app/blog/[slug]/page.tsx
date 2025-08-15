import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { BlogCard } from "@/components/blog-card"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"

// Mock blog post data - in a real app this would come from a CMS or database
const getBlogPost = (slug: string) => {
  const posts = {
    "essential-alpine-gear": {
      title: "Essential Gear for Alpine Adventures",
      excerpt: "Discover the must-have equipment for high-altitude hiking and mountaineering expeditions.",
      category: "Gear Guide",
      date: "December 15, 2024",
      readTime: "8 min read",
      author: {
        name: "Sarah Chen",
        bio: "Mountain guide and outdoor gear specialist with 15+ years of alpine experience.",
        avatar: "/author-sarah-chen.png",
      },
      image: "/alpine-gear-mountain-backdrop.png",
      content: `
        <p>When venturing into alpine environments, having the right gear can mean the difference between a successful adventure and a dangerous situation. After years of guiding in the mountains, I've compiled this essential gear list for anyone planning high-altitude expeditions.</p>

        <h2>Base Layer System</h2>
        <p>Your base layer is your first line of defense against the elements. Choose moisture-wicking materials like merino wool or synthetic fabrics that keep you dry and comfortable throughout your adventure.</p>

        <h3>Key Features to Look For:</h3>
        <ul>
          <li>Moisture-wicking properties</li>
          <li>Odor resistance</li>
          <li>Comfortable fit that allows for layering</li>
          <li>Durability for extended use</li>
        </ul>

        <h2>Insulation Layer</h2>
        <p>Your insulation layer provides warmth when temperatures drop. Down jackets offer excellent warmth-to-weight ratio, while synthetic insulation performs better in wet conditions.</p>

        <h2>Shell Layer</h2>
        <p>A quality shell jacket protects you from wind, rain, and snow. Look for breathable, waterproof materials with features like pit zips for ventilation and a helmet-compatible hood.</p>

        <h2>Footwear</h2>
        <p>Alpine boots should provide support, warmth, and traction. Consider the terrain you'll encounter and choose boots with appropriate crampon compatibility if needed.</p>

        <h2>Navigation and Safety</h2>
        <p>Never venture into alpine terrain without proper navigation tools and safety equipment. A GPS device, map, compass, and avalanche safety gear (if applicable) are non-negotiable items.</p>

        <h3>Essential Safety Items:</h3>
        <ul>
          <li>First aid kit</li>
          <li>Emergency shelter</li>
          <li>Headlamp with extra batteries</li>
          <li>Multi-tool or knife</li>
          <li>Fire starting materials</li>
        </ul>

        <p>Remember, the best gear is the gear you know how to use. Take time to familiarize yourself with all your equipment before heading into the mountains. Practice setting up your shelter, using your navigation tools, and accessing your safety gear quickly.</p>

        <p>Alpine adventures offer some of the most rewarding experiences in the outdoors, but they demand respect and preparation. Invest in quality gear, learn proper techniques, and always prioritize safety over summit goals.</p>
      `,
    },
  }

  return posts[slug as keyof typeof posts] || null
}

const relatedPosts = [
  {
    title: "Winter Camping Safety",
    excerpt: "Essential safety tips for cold weather camping and winter survival.",
    category: "Safety",
    date: "Dec 8, 2024",
    image: "/winter-camping-tent-snow.png",
    slug: "winter-camping-safety",
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
    title: "Rock Climbing for Beginners",
    excerpt: "Your complete guide to getting started with outdoor rock climbing.",
    category: "Climbing",
    date: "Nov 28, 2024",
    image: "/beginner-rock-climbing.png",
    slug: "rock-climbing-beginners",
  },
]

interface BlogDetailPageProps {
  params: {
    slug: string
  }
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-6 -ml-4">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Category and Meta */}
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <div className="flex items-center gap-4 text-muted-foreground text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">{post.title}</h1>

          {/* Excerpt */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{post.excerpt}</p>

          {/* Author and Share */}
          <div className="flex items-center justify-between mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-4">
              <img
                src={post.author.avatar || "/placeholder.svg?height=48&width=48"}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-foreground">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">{post.author.bio}</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] rounded-lg overflow-hidden">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:mb-4 prose-ul:mb-4 prose-li:mb-1"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Related Posts */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Related Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost, index) => (
              <BlogCard
                key={index}
                title={relatedPost.title}
                excerpt={relatedPost.excerpt}
                category={relatedPost.category}
                date={relatedPost.date}
                image={relatedPost.image}
                slug={relatedPost.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Get the latest outdoor guides and adventure stories delivered to your inbox.
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
                  <Link href="/guides" className="hover:text-background transition-colors">
                    Digital Guides
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-background transition-colors">
                    Adventure Blog
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="hover:text-background transition-colors">
                    Expert Tips
                  </Link>
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
