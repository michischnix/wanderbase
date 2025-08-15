import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const adventures = [
  {
    title: "Budget Alps Basecamp Guide: 7 Affordable Towns in Germany & Austria",
    category: "Mountain Adventures",
    description:
      "Discover 7 charming alpine towns where you can base yourself for incredible hiking adventures without the premium prices. Complete with accommodation, food costs, and trail access.",
    image: "/budget-alpine-guide-cover.png",
    href: "/guide/budget-alps-basecamp",
    featured: true,
    price: "$15",
  },
  {
    title: "Wild Camping Essentials",
    category: "Camping",
    description:
      "Master the art of legal wild camping with our comprehensive location guide and essential gear checklist.",
    image: "/desert-camping-starry-night.png",
    href: "/guide/wild-camping",
    price: "$8",
  },
  {
    title: "Budget Trekking Routes",
    category: "Trekking",
    description:
      "Discover 15 incredible multi-day treks that won't break the bank. Complete with logistics and cost breakdowns.",
    image: "/misty-forest-dramatic-lighting.png",
    href: "/guide/budget-trekking",
    price: "$15",
  },
  {
    title: "Gear on a Budget",
    category: "Equipment",
    description:
      "Essential vs. nice-to-have gear guide. Save hundreds with our tested budget alternatives and buying strategies.",
    image: "/rock-climbing-cliff.png",
    href: "/guide/budget-gear",
    price: "$10",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
            Budget Adventures Await
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Discover Europe's most stunning alpine destinations without breaking the bank. Expert guides, proven routes,
            and insider tips for the budget-conscious adventurer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/guide/budget-alps-basecamp">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Get Started - $15
              </Button>
            </Link>
            <Link href="/guide/budget-alps-basecamp">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                View Guide Preview
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Adventure Guides</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Budget-friendly guides to help you explore Europe's most beautiful trails without breaking the bank.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {adventures.map((adventure, index) => (
              <div key={index} className={`group cursor-pointer ${adventure.featured ? "md:row-span-2" : ""}`}>
                <Link href={adventure.href}>
                  <div className="relative overflow-hidden bg-card h-80">
                    <img
                      src={adventure.image || "/placeholder.svg"}
                      alt={adventure.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-white/80">{adventure.category}</span>
                        <span className="text-lg font-bold text-primary">{adventure.price}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{adventure.title}</h3>
                      <p className="text-white/90 text-sm leading-relaxed">{adventure.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Alpine Adventure Today</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Get instant access to our most popular guide and start planning your budget-friendly alpine adventure.
          </p>
          <Link href="/guide/budget-alps-basecamp">
            <Button variant="secondary" size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8">
              Buy Now - $15
            </Button>
          </Link>
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
