import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Download, Clock } from "lucide-react"

interface GuideCardProps {
  title: string
  description: string
  category: string
  price: string
  originalPrice?: string
  rating: number
  reviewCount: number
  downloadCount: string
  duration: string
  image: string
  slug: string
  featured?: boolean
}

export function GuideCard({
  title,
  description,
  category,
  price,
  originalPrice,
  rating,
  reviewCount,
  downloadCount,
  duration,
  image,
  slug,
  featured = false,
}: GuideCardProps) {
  return (
    <div
      className={`bg-card rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${featured ? "ring-2 ring-primary" : ""}`}
    >
      {/* Image */}
      <div className="aspect-[4/3] relative overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              Best Seller
            </span>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className="bg-black/70 text-white px-2 py-1 rounded text-sm">{category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating}</span>
            <span>({reviewCount})</span>
          </div>
          <div className="flex items-center gap-1">
            <Download className="w-4 h-4" />
            <span>{downloadCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">{price}</span>
            {originalPrice && <span className="text-lg text-muted-foreground line-through">{originalPrice}</span>}
          </div>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href={`/guides/${slug}`}>Get Guide</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
