import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="px-6 bg-[#f0eee7] py-28 pt-32 pb-12 text-background bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-foreground">Expert Hiking Guides</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Comprehensive guides to help you prepare for your next alpine adventure with confidence and safety.
          </p>
        </div>
      </section>

      <section className="px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Free Guide */}
            <div className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/winter-hiking-starter-kit.png"
                  alt="Winter Hiking Starter Kit: 5 Days to Your First Snow Adventure"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="p-8">
                <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-secondary text-foreground">
                  FREE GUIDE
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4 leading-tight">
                  Winter Hiking Starter Kit: 5 Days to Your First Snow Adventure
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  A free guide to preparing for winter trails safely and confidently. Learn essential gear, safety tips,
                  and route planning for your first winter hiking experience.
                </p>
                <ul className="space-y-2 text-muted-foreground mb-8">
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    Essential winter gear checklist
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    Safety protocols for snow conditions
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    5-day preparation timeline
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    Beginner-friendly trail recommendations
                  </li>
                </ul>
                <a
                  href="https://wanderbase.gumroad.com/l/winter-hiking-starter-kit"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download free Winter Hiking Starter Kit guide (opens in new tab)"
                >
                  <Button size="lg" className="bg-primary hover:bg-primary/90 w-full text-lg font-semibold">
                    Download Free Guide
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Paid Guide */}
            <div className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/beginners-guide-hiking-alps.jpg"
                  alt="The Beginner's Guide to Hiking in the Alps"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 text-foreground bg-secondary">
                  PREMIUM GUIDE
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4 leading-tight">
                  The Beginner's Guide to Hiking in the Alps
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Your first steps to alpine views with all the tips and confidence you need for an unforgettable
                  adventure. Complete route planning, accommodation tips, and insider knowledge.
                </p>
                <ul className="space-y-2 text-muted-foreground mb-8">
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    Detailed route maps and itineraries
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    Budget accommodation recommendations
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    Transportation and logistics planning
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    Local insider tips and hidden gems
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    Complete gear and packing lists
                  </li>
                </ul>
                <a
                  href="https://wanderbase.gumroad.com/l/beginners-guide-hiking-in-the-alps"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get The Beginner's Guide to Hiking in the Alps (opens in new tab)"
                >
                  <Button size="lg" className="bg-primary hover:bg-primary/90 w-full text-lg font-semibold">
                    Get the Complete Guide
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
