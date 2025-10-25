import Image from "next/image"
import { Button } from "@/components/ui/button"

export function GuidesTeaser() {
  return (
    <section className="py-24 px-6 bg-[#f0eee7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6 md:text-5xl">Expert Hiking Guides</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get comprehensive guides to prepare for your alpine adventures with confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Free Guide Teaser */}
          <div className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src="/winter-hiking-starter-kit.png"
                alt="Winter Hiking Starter Kit"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8">
              <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-secondary text-foreground">
                FREE GUIDE
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">Winter Hiking Starter Kit</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A free guide to preparing for winter trails safely and confidently. Perfect for beginners taking their
                first steps into winter hiking.
              </p>
              <a
                href="https://wanderbase.gumroad.com/l/winter-hiking-starter-kit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-primary hover:bg-primary/90 w-full font-semibold">Get Free Guide</Button>
              </a>
            </div>
          </div>

          {/* Paid Guide Teaser */}
          <div className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src="/beginners-guide-hiking-alps.jpg"
                alt="The Beginner's Guide to Hiking in the Alps"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8">
              <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 text-foreground bg-secondary">
                PREMIUM GUIDE
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                The Beginner's Guide to Hiking in the Alps
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Your complete resource for alpine adventures with detailed routes, budget tips, and insider knowledge
                for unforgettable experiences.
              </p>
              <a
                href="https://wanderbase.gumroad.com/l/beginners-guide-hiking-in-the-alps"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-primary hover:bg-primary/90 w-full font-semibold">View Guide</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
