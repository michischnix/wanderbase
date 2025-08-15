import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface BlogHeroProps {
  post: {
    title: string
    excerpt: string
    date: string
    readTime: string
    image: string
    category: string
  }
}

export function BlogHero({ post }: BlogHeroProps) {
  const { title, excerpt, date, readTime, image, category } = post

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 px-6 pb-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-8 -ml-4">
            <Link href="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm text-muted-foreground font-medium">{date}</span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">{category}</span>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-8 leading-tight max-w-3xl md:text-5xl">{title}</h1>

          {/* Excerpt */}
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12">{excerpt}</p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[18/10] overflow-hidden">
            <img
              src={image || "/placeholder.svg"}
              alt={`${title} - Alpine hiking adventure scene`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  )
}
