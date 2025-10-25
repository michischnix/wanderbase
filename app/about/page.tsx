import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="px-6 bg-[#f0eee7] py-28 pt-32 pb-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-foreground shadow-none lg:text-6xl">
            About Wanderbase
          </h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto shadow-none">
            We believe that incredible outdoor adventures shouldn't be reserved for those with unlimited budgets.
          </p>
        </div>
      </section>

      <section className="px-6 bg-background py-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-foreground">
            <div className="mb-16 mr-0">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 mr-0">
                Wanderbase was born from a simple belief: everyone deserves to experience the transformative power of
                the outdoors, regardless of their budget. We're here to prove that you don't need expensive gear or
                luxury accommodations to have life-changing adventures.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through carefully researched guides, tested routes, and insider knowledge, we help budget-conscious
                adventurers discover Europe's most stunning alpine destinations without breaking the bank.
              </p>
            </div>

            <div className="mb-16">
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

          <div className="text-center mt-16 pt-16 pb-6 bg-popover">
            <h3 className="text-3xl font-bold mb-6">Ready to Start Your Adventure?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of budget-conscious adventurers who have discovered the Alps without breaking the bank.
            </p>
            <Link href="/guides" aria-label="Explore our hiking guides">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12 py-4">
                Explore our Guides
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
