import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">About Wanderbase</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We believe that incredible outdoor adventures shouldn't be reserved for those with unlimited budgets.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Wanderbase was born from a simple belief: everyone deserves to experience the transformative power of
                  the outdoors, regardless of their budget. We're here to prove that you don't need expensive gear or
                  luxury accommodations to have life-changing adventures.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through carefully researched guides, tested routes, and insider knowledge, we help budget-conscious
                  adventurers discover Europe's most stunning alpine destinations without breaking the bank.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/alpine-mountain-vista.png"
                  alt="Stunning alpine mountain vista showcasing the natural beauty accessible to budget travelers"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative">
                <img
                  src="/budget-alpine-guide-cover.png"
                  alt="Cover of our comprehensive budget alpine adventure guide"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our comprehensive guides combine practical information with inspiring storytelling. From detailed cost
                  breakdowns to hidden gem accommodations, we provide everything you need to plan your perfect alpine
                  adventure.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    Detailed budget breakdowns and cost-saving tips
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    Tested routes and accommodation recommendations
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    Insider knowledge from local experts
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    Practical gear advice and budget alternatives
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold mb-6">Ready to Start Your Adventure?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of budget-conscious adventurers who have discovered the Alps without breaking the bank.
            </p>
            <a
              href="https://outdoorblueprint.gumroad.com/l/ob_jotr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get our alpine adventure guide (opens in new tab)"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12 py-4">
                Get Our Guide
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  <a href="/blog" className="hover:text-background transition-colors">
                    Adventure Blog
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-background transition-colors">
                    About Us
                  </a>
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
