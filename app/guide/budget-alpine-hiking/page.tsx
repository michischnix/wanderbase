import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle, Download, Star, Users, Clock, MapPin } from "lucide-react"
import Link from "next/link"

const features = [
  "47-page comprehensive guide with detailed maps",
  "15+ budget-friendly alpine routes across Europe",
  "Wild camping spots with legal information",
  "Complete gear checklist with budget alternatives",
  "Transportation tips to save 50%+ on travel costs",
  "Emergency procedures and safety protocols",
  "Seasonal planning and weather considerations",
  "Local regulations and permit requirements",
]

const testimonials = [
  {
    name: "Sarah M.",
    location: "Berlin, Germany",
    text: "This guide saved me over €800 on my Alps trip! The wild camping spots were incredible and completely legal.",
    rating: 5,
  },
  {
    name: "Marco T.",
    location: "Milan, Italy",
    text: "Finally, a hiking guide that doesn't assume you have unlimited budget. Practical, detailed, and honest.",
    rating: 5,
  },
  {
    name: "Emma K.",
    location: "Amsterdam, Netherlands",
    text: "Used this for my solo hiking trip through Switzerland. Felt safe and prepared the entire time.",
    rating: 5,
  },
]

export default function BudgetAlpineHikingGuide() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 text-sm font-medium">#1 Budget Hiking Guide</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">(127 reviews)</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Budget Alpine Hiking Guide
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The complete guide to affordable alpine adventures across Europe. Discover stunning trails, legal wild
                camping spots, and budget gear recommendations that have helped over 1,200 hikers save thousands on
                their mountain adventures.
              </p>

              <div className="flex items-center gap-6 mb-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>1,200+ hikers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>47 pages</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>15+ routes</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  <Download className="w-5 h-5 mr-2" />
                  Get Instant Access - $12
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  Preview Sample Pages
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-4">
                ✓ Instant download • ✓ 30-day money-back guarantee • ✓ Lifetime updates
              </p>
            </div>

            <div className="relative">
              <img
                src="/alpine-hiking-guide-cover.png"
                alt="Budget Alpine Hiking Guide Cover"
                className="w-full max-w-md mx-auto shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 font-bold text-lg shadow-lg">
                Only $12
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What's Inside This Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-red-600">The Problem</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li>• Mountain huts cost €40-80+ per night</li>
                <li>• Guided treks start at €200+ per day</li>
                <li>• Generic guidebooks ignore budget options</li>
                <li>• Hidden costs add up to thousands</li>
                <li>• Information overload from countless websites</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">The Solution</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li>• Legal wild camping spots (save €40+ per night)</li>
                <li>• Self-guided routes with detailed instructions</li>
                <li>• Budget gear alternatives that actually work</li>
                <li>• Transportation hacks to save 50%+</li>
                <li>• Everything in one comprehensive guide</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Hikers Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background p-6 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Budget Alpine Adventure Today</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join 1,200+ hikers who've saved thousands using our proven strategies. Download instantly and start planning
            your next adventure.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 mb-4">
            <Download className="w-5 h-5 mr-2" />
            Get Instant Access - $12
          </Button>
          <p className="text-sm text-primary-foreground/80">
            30-day money-back guarantee • Instant download • Lifetime updates
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">W</span>
                </div>
                <span className="font-bold text-xl">Wanderbase</span>
              </div>
              <p className="text-background/80 mb-4 max-w-md">
                Making outdoor adventures accessible and affordable for everyone. Expert guides for budget-conscious
                explorers.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Guides</h4>
              <ul className="space-y-2 text-background/80">
                <li>
                  <Link href="/guide/budget-alpine-hiking" className="hover:text-background transition-colors">
                    Alpine Hiking
                  </Link>
                </li>
                <li>
                  <Link href="/guide/wild-camping" className="hover:text-background transition-colors">
                    Wild Camping
                  </Link>
                </li>
                <li>
                  <Link href="/guide/budget-gear" className="hover:text-background transition-colors">
                    Budget Gear
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-background/80">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Refunds
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
