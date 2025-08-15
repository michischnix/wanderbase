"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function BudgetAlpsBasecampGuide() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Digital PDF Guide</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
                  Budget Alps Basecamp Guide: 7 Affordable Towns in Germany & Austria
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Discover 7 charming alpine towns where you can base yourself for incredible hiking adventures without
                  the premium prices. Complete with accommodation, food costs, and trail access.
                </p>
                <div className="flex items-center gap-6 mb-8">
                  <div className="text-3xl font-bold text-primary">$15</div>
                  <div className="text-sm text-muted-foreground">
                    <div>47-page PDF • Instant download</div>
                    <div>Updated December 2024</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-lg px-8"
                    onClick={() => window.open("https://gumroad.com/l/budget-alps-basecamp-guide", "_blank")}
                  >
                    Download PDF - $15
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                    Preview Sample Pages
                  </Button>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>📄 High-quality PDF format • 📱 Works on all devices • ⚡ Instant download after purchase</p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/budget-alpine-guide-cover.png"
                  alt="Budget Alps Basecamp Guide Cover"
                  className="w-full max-w-md mx-auto shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What's Inside */}
        <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">What's Inside This 47-Page PDF Guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">7 Budget-Friendly Alpine Towns</h3>
                    <p className="text-muted-foreground text-sm">
                      Detailed profiles of Garmisch-Partenkirchen, Berchtesgaden, Hallstatt, Bad Ischl, Mittenwald,
                      Oberammergau, and Ramsau.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Accommodation Cost Breakdown</h3>
                    <p className="text-muted-foreground text-sm">
                      Budget hostels, guesthouses, and camping options with exact prices and booking strategies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Trail Access & Transportation</h3>
                    <p className="text-muted-foreground text-sm">
                      Public transport routes, hiking trail access points, and money-saving transport passes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Food & Dining on a Budget</h3>
                    <p className="text-muted-foreground text-sm">
                      Local markets, affordable restaurants, and grocery shopping tips for each town.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Best Hiking Trails from Each Base</h3>
                    <p className="text-muted-foreground text-sm">
                      Day hikes, multi-day treks, and difficulty ratings accessible from each town.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    6
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Seasonal Cost Variations</h3>
                    <p className="text-muted-foreground text-sm">
                      When to visit for the best prices and weather conditions throughout the year.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    7
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Money-Saving Tips & Hacks</h3>
                    <p className="text-muted-foreground text-sm">
                      Insider secrets to cut costs on everything from gear rentals to mountain hut bookings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    8
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Interactive Maps & Resources</h3>
                    <p className="text-muted-foreground text-sm">
                      Downloadable maps, budget tracking sheets, and packing checklists.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">What Adventurers Are Saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-card p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <img src="/author-sarah-chen.png" alt="Sarah M." className="w-12 h-12 object-cover mr-4" />
                  <div>
                    <div className="font-semibold">Sarah M.</div>
                    <div className="text-sm text-muted-foreground">Solo Traveler</div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "This guide saved me over €300 on my 2-week Alps trip! The accommodation recommendations in Hallstatt
                  were perfect - authentic and affordable."
                </p>
              </div>
              <div className="bg-card p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <img src="/author-marcus-alpine.png" alt="Marcus K." className="w-12 h-12 object-cover mr-4" />
                  <div>
                    <div className="font-semibold">Marcus K.</div>
                    <div className="text-sm text-muted-foreground">Adventure Couple</div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Finally, a guide that understands budget constraints! The trail access information for
                  Garmisch-Partenkirchen was spot-on."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Download Your Alpine Adventure Guide</h2>
            <p className="text-xl mb-12 text-primary-foreground/90">
              Join thousands of budget-conscious adventurers who've discovered the Alps without the premium prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-lg px-8"
                onClick={() => window.open("https://gumroad.com/l/budget-alps-basecamp-guide", "_blank")}
              >
                Download PDF Now - $15
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 bg-transparent"
              >
                30-Day Money Back Guarantee
              </Button>
            </div>
            <div className="mt-6 text-sm text-primary-foreground/80">
              <p>Secure payment via Gumroad • Instant PDF delivery • Compatible with all devices</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
