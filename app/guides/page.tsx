import { Navigation } from "@/components/navigation"
import { GuideCard } from "@/components/guide-card"
import { Button } from "@/components/ui/button"
import { Star, Users, Download, Shield } from "lucide-react"

const guides = [
  {
    title: "Complete Alpine Hiking Guide",
    description:
      "Master high-altitude hiking with expert techniques, safety protocols, and gear recommendations for mountain adventures.",
    category: "Hiking",
    price: "$29",
    originalPrice: "$39",
    rating: 4.9,
    reviewCount: 127,
    downloadCount: "2.1k",
    duration: "3-4 hours",
    image: "/alpine-hiking-guide-cover.png",
    slug: "alpine-hiking",
    featured: true,
  },
  {
    title: "Rock Climbing Fundamentals",
    description:
      "Learn essential climbing techniques, safety systems, and route reading skills for outdoor rock climbing.",
    category: "Climbing",
    price: "$24",
    rating: 4.8,
    reviewCount: 89,
    downloadCount: "1.5k",
    duration: "2-3 hours",
    image: "/rock-climbing-guide-cover.png",
    slug: "rock-climbing",
  },
  {
    title: "Wilderness Photography Mastery",
    description:
      "Capture stunning outdoor photography with composition techniques, lighting tips, and equipment guides.",
    category: "Photography",
    price: "$19",
    rating: 4.7,
    reviewCount: 156,
    downloadCount: "3.2k",
    duration: "2 hours",
    image: "/photography-guide-cover.png",
    slug: "wilderness-photography",
  },
  {
    title: "Backcountry Camping Essentials",
    description: "Everything you need to know for safe and comfortable camping in remote wilderness areas.",
    category: "Camping",
    price: "$22",
    rating: 4.9,
    reviewCount: 203,
    downloadCount: "2.8k",
    duration: "2.5 hours",
    image: "/camping-guide-cover.png",
    slug: "backcountry-camping",
  },
  {
    title: "Winter Survival Skills",
    description: "Critical survival techniques for cold weather emergencies and winter outdoor activities.",
    category: "Survival",
    price: "$27",
    rating: 4.8,
    reviewCount: 94,
    downloadCount: "1.3k",
    duration: "3 hours",
    image: "/winter-survival-guide-cover.png",
    slug: "winter-survival",
  },
  {
    title: "Trail Navigation & GPS",
    description: "Master backcountry navigation using traditional and modern techniques for safe wilderness travel.",
    category: "Navigation",
    price: "$21",
    rating: 4.6,
    reviewCount: 78,
    downloadCount: "1.1k",
    duration: "2 hours",
    image: "/navigation-guide-cover.png",
    slug: "trail-navigation",
  },
]

const features = [
  {
    icon: Download,
    title: "Instant Download",
    description: "Get immediate access to your guides after purchase",
  },
  {
    icon: Users,
    title: "Expert Authors",
    description: "Created by certified outdoor professionals",
  },
  {
    icon: Shield,
    title: "30-Day Guarantee",
    description: "Full refund if you're not completely satisfied",
  },
  {
    icon: Star,
    title: "Lifetime Updates",
    description: "Free updates and new content additions",
  },
]

const testimonials = [
  {
    name: "Mike Rodriguez",
    role: "Adventure Photographer",
    content:
      "The photography guide transformed my outdoor shots. The techniques are practical and the results speak for themselves.",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "Hiking Enthusiast",
    content:
      "The alpine hiking guide gave me the confidence to tackle more challenging peaks. Excellent safety information.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Climbing Instructor",
    content: "I recommend these guides to all my students. Comprehensive, well-structured, and expertly written.",
    rating: 5,
  },
]

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Expert Digital Guides
              <br />
              <span className="text-primary">for Every Adventure</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Comprehensive, downloadable guides created by outdoor professionals. Learn essential skills, stay safe,
              and make the most of your adventures.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>10,000+ adventurers</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>4.8 average rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                <span>Instant access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <GuideCard
                key={index}
                title={guide.title}
                description={guide.description}
                category={guide.category}
                price={guide.price}
                originalPrice={guide.originalPrice}
                rating={guide.rating}
                reviewCount={guide.reviewCount}
                downloadCount={guide.downloadCount}
                duration={guide.duration}
                image={guide.image}
                slug={guide.slug}
                featured={guide.featured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our Guides?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional-grade content designed to elevate your outdoor skills and confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Adventurers Say</h2>
            <p className="text-xl text-muted-foreground">Join thousands of satisfied customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Next Adventure Today</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Get instant access to expert guides and transform your outdoor experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8">
              Browse All Guides
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              View Bundle Deals
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
