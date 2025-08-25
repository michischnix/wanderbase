import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface BlogHeroProps {
  title?: string
  excerpt?: string
  date?: string
  category?: string
  image?: string
  imageAlt?: string
  readTime?: string
  post?: {
    title: string
    excerpt: string
    date: string
    category: string
    image: string
    readTime?: string
  }
}

export function BlogHero({ title, excerpt, date, category, image, imageAlt, readTime, post }: BlogHeroProps) {
  const blogTitle = post?.title || title || ""
  const blogExcerpt = post?.excerpt || excerpt || ""
  const blogDate = post?.date || date || ""
  const blogCategory = post?.category || category || ""
  const blogImage = post?.image || image || "/placeholder.svg"
  const blogReadTime = post?.readTime || readTime

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 px-6 pb-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-8 -ml-4">
            <Link href="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm text-muted-foreground font-medium">{blogDate}</span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">{blogCategory}</span>
            {blogReadTime && (
              <>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground font-medium">{blogReadTime}</span>
              </>
            )}
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-8 leading-tight max-w-3xl md:text-5xl">{blogTitle}</h1>

          {/* Excerpt */}
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12">{blogExcerpt}</p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mb-4 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[18/10] overflow-hidden">
            <img
              src={blogImage || "/placeholder.svg"}
              alt={imageAlt || `${blogTitle} - Adventure scene`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  )
}
