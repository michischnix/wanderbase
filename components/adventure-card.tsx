import Link from "next/link"

interface AdventureCardProps {
  title: string
  category: string
  image: string
  href: string
  featured?: boolean
}

export function AdventureCard({ title, category, image, href, featured = false }: AdventureCardProps) {
  return (
    <Link href={href} className="group block">
      <div
        className={`relative overflow-hidden bg-card shadow-sm hover:shadow-lg transition-all duration-300 ${
          featured ? "md:row-span-2" : ""
        }`}
      >
        <div className={`aspect-square ${featured ? "md:aspect-[4/5]" : ""} relative overflow-hidden`}>
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-sm font-medium text-white/80 mb-2">{category}</p>
            <h3 className={`font-bold leading-tight ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}>{title}</h3>
          </div>

          {/* Featured badge */}
          {featured && (
            <div className="absolute top-4 right-4">
              <span className="bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">Featured</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
