import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { GuideCard } from "@/components/guide-card"
import Link from "next/link"
import { ArrowLeft, Star, Download, Clock, Users, CheckCircle, Play } from "lucide-react"

// Mock guide data - in a real app this would come from a CMS or database
const getGuide = (slug: string) => {
  const guides = {
    "alpine-hiking": {
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
      author: {
        name: "Marcus Alpine",
        bio: "Certified mountain guide with 20+ years of alpine experience",
        avatar: "/author-marcus-alpine.png",
      },
      features: [
        "High-altitude acclimatization techniques",
        "Weather assessment and route planning",
        "Emergency procedures and rescue protocols",
        "Gear selection and maintenance",
        "Navigation in alpine environments",
        "Risk management strategies",
      ],
      chapters: [
        { title: "Introduction to Alpine Hiking", duration: "15 min" },
        { title: "Physical Preparation", duration: "25 min" },
        { title: "Essential Gear Guide", duration: "30 min" },
        { title: "Route Planning & Weather", duration: "35 min" },
        { title: "Safety & Emergency Procedures", duration: "40 min" },
        { title: "Advanced Techniques", duration: "45 min" },
      ],
    },
    "rock-climbing": {
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
      author: {
        name: "Sarah Rockwell",
        bio: "Professional climbing instructor and route developer",
        avatar: "/author-sarah-rockwell.png",
      },
      features: [
        "Basic to intermediate climbing techniques",
        "Safety systems and equipment use",
        "Route reading and movement skills",
        "Belaying and rappelling techniques",
        "Outdoor climbing ethics",
        "Common mistakes and how to avoid them",
      ],
      chapters: [
        { title: "Climbing Basics", duration: "20 min" },
        { title: "Safety Systems", duration: "25 min" },
        { title: "Movement Techniques", duration: "30 min" },
        { title: "Route Reading", duration: "20 min" },
        { title: "Advanced Skills", duration: "25 min" },
      ],
    },
  }

  return guides[slug as keyof typeof guides] || null
}

const relatedGuides = [
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

interface GuideDetailPageProps {
  params: {
    slug: string
  }
}

export default function GuideDetailPage({ params }: GuideDetailPageProps) {
  const guide = getGuide(params.slug)

  if (!guide) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Guide Not Found</h1>
            <p className="text-muted-foreground mb-8">The guide you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/guides">Back to Guides</Link>
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
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-6 -ml-4">
            <Link href="/guides" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Guides
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {guide.category}
                </span>
                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{guide.rating}</span>
                    <span>({guide.reviewCount} reviews)</span>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">{guide.title}</h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{guide.description}</p>

              {/* Stats */}
              <div className="flex items-center gap-6 mb-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  <span>{guide.downloadCount} downloads</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{guide.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>All skill levels</span>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 mb-8 p-4 bg-muted/30 rounded-lg">
                <img
                  src={guide.author.avatar || "/placeholder.svg?height=48&width=48"}
                  alt={guide.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{guide.author.name}</p>
                  <p className="text-sm text-muted-foreground">{guide.author.bio}</p>
                </div>
              </div>

              {/* What You'll Learn */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">What You'll Learn</h3>
                <div className="grid grid-cols-1 gap-3">
                  {guide.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Purchase Card */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-card rounded-lg shadow-lg p-6 border">
                <div className="aspect-video rounded-lg overflow-hidden mb-6 relative">
                  <img
                    src={guide.image || "/placeholder.svg"}
                    alt={guide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                      <Play className="w-5 h-5 mr-2" />
                      Preview Guide
                    </Button>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-3xl font-bold text-primary">{guide.price}</span>
                    {guide.originalPrice && (
                      <span className="text-xl text-muted-foreground line-through">{guide.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">One-time purchase • Lifetime access</p>
                </div>

                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 mb-4">
                  Get Instant Access
                </Button>

                <div className="text-center text-sm text-muted-foreground mb-4">
                  <p>30-day money-back guarantee</p>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-foreground mb-3">Guide Contents</h4>
                  <div className="space-y-2">
                    {guide.chapters.map((chapter, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span className="text-foreground">{chapter.title}</span>
                        <span className="text-muted-foreground">{chapter.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedGuides.map((relatedGuide, index) => (
              <GuideCard
                key={index}
                title={relatedGuide.title}
                description={relatedGuide.description}
                category={relatedGuide.category}
                price={relatedGuide.price}
                rating={relatedGuide.rating}
                reviewCount={relatedGuide.reviewCount}
                downloadCount={relatedGuide.downloadCount}
                duration={relatedGuide.duration}
                image={relatedGuide.image}
                slug={relatedGuide.slug}
              />
            ))}
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
