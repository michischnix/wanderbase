import Link from "next/link"

interface BlogCardProps {
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  slug: string
  featured?: boolean
}

export function BlogCard({ title, excerpt, category, date, image, slug, featured = false }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="relative overflow-hidden bg-card shadow-sm hover:shadow-lg transition-all duration-300 h-full">
        <div className="aspect-[4/3] relative overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">{category}</span>
              <span className="text-white/80 text-sm">{date}</span>
            </div>
            <h3 className="font-bold leading-tight mb-2 text-xl">{title}</h3>
            <p className="text-white/90 text-sm leading-relaxed line-clamp-2">{excerpt}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}
