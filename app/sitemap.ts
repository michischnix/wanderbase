import type { MetadataRoute } from "next"

const BASE_URL = "https://wanderbase.com"

const blogSlugs = [
  { slug: "alpine-adventures-intro", lastModified: "2024-04-02" },
  { slug: "hidden-costs", lastModified: "2024-03-15" },
  { slug: "free-trails", lastModified: "2024-12-05" },
  { slug: "transport-vs-car", lastModified: "2024-12-10" },
  { slug: "budget-friendly-alpine-adventures", lastModified: "2024-12-10" },
  { slug: "budget-backpacker-tips", lastModified: "2024-03-30" },
  { slug: "budget-backpacking-europe", lastModified: "2024-03-18" },
  { slug: "budget-gear-guide", lastModified: "2024-03-22" },
  { slug: "car-camping-guide", lastModified: "2025-01-18" },
  { slug: "free-outdoor-activities", lastModified: "2024-03-20" },
  { slug: "hiking-with-dogs", lastModified: "2025-01-20" },
  { slug: "plan-memorable-alpine-adventure", lastModified: "2024-12-10" },
  { slug: "seasonal-budget-adventures", lastModified: "2024-03-28" },
  { slug: "snowshoeing-guide", lastModified: "2025-01-28" },
  { slug: "backcountry-skiing", lastModified: "2025-01-22" },
  { slug: "bikepacking-guide", lastModified: "2025-01-25" },
  { slug: "wild-camping-guide", lastModified: "2025-01-15" },
  { slug: "weekend-adventures-under-50", lastModified: "2024-03-25" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/guides`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/legal-notice`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ]

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map(({ slug, lastModified }) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(lastModified),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
}
