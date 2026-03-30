import { Navigation } from "@/components/navigation"
import { BlogHero } from "@/components/blog-hero"
import { BlogFAQ } from "@/components/blog-faq"
import { Footer } from "@/components/footer"
import { GuidesTeaser } from "@/components/guides-teaser"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "The Ultimate Budget Gear Rundown: Affordable Essentials That Don't Skimp on Quality",
  description:
    "Discover budget outdoor gear that delivers professional performance without the premium price. Complete buying guide with specific recommendations and where to find the best deals.",
  robots: "index, follow",
  canonical: "https://wanderbase.com/blog/budget-gear-guide",
  openGraph: {
    title: "The Ultimate Budget Gear Rundown: Affordable Essentials That Don't Skimp on Quality",
    description:
      "Discover budget outdoor gear that delivers professional performance without the premium price. Complete buying guide with specific recommendations and where to find the best deals.",
    url: "https://wanderbase.com/blog/budget-gear-guide",
    type: "article",
    images: [
      {
        url: "/budget-gear-essentials.png",
        width: 1200,
        height: 630,
        alt: "Affordable outdoor gear laid out showing budget backpack, boots, and essentials",
      },
    ],
  },
}

export default function BudgetGearGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Ultimate Budget Gear Rundown: Affordable Essentials That Don't Skimp on Quality",
    datePublished: "2024-03-22",
    dateModified: "2024-03-22",
    author: { "@type": "Person", name: "Wanderbase Editorial Team" },
    publisher: {
      "@type": "Organization",
      name: "Wanderbase",
      logo: { "@type": "ImageObject", url: "https://wanderbase.com/wb-logo2.png" },
    },
    image: "https://wanderbase.com/budget-gear-essentials.png",
    description: "Budget outdoor gear that delivers professional performance without the premium price — with specific product recommendations.",
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />

      <BlogHero post={post} />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <article className="mx-auto" style={{ maxWidth: "750px" }}>

          {/* GEO Capsule */}
          <div className="mb-10 p-5 bg-primary/8 border border-primary/25 rounded-lg">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Quick Answer</p>
            <p className="text-base leading-relaxed text-foreground">
              A complete budget hiking kit costs under €200: Decathlon daypack (€25), Quechua boots (€45), Forclaz rain
              jacket (€35), sleeping bag + pad (€70), and a compact stove (€20). These items deliver 90% of premium
              performance at 30% of the cost. Buy at end-of-season clearance for 50–70% off.
            </p>
          </div>

          {/* Author & date */}
          <div className="mb-10 flex items-center gap-3 text-sm text-muted-foreground border-b pb-6">
            <span>By <strong className="text-foreground">Wanderbase Editorial Team</strong></span>
            <span>·</span>
            <span>March 22, 2024</span>
            <span>·</span>
            <span className="text-primary font-medium">Last updated: March 2024</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-12 leading-tight" style={{ color: "#1E1E1E" }}>
            The Ultimate Budget Gear Rundown: Affordable Essentials That Don't Skimp on Quality
          </h1>

          <p className="mb-8 leading-relaxed" style={{ fontSize: "18px", lineHeight: "1.6", color: "#1E1E1E" }}>
            The outdoor industry wants you to believe that quality requires premium prices. But after testing hundreds
            of budget alternatives against expensive gear, I've discovered that smart shopping can deliver 90% of the
            performance for 30% of the cost.
          </p>

          <p className="mb-8 leading-relaxed" style={{ fontSize: "18px", lineHeight: "1.6", color: "#1E1E1E" }}>
            Whether you're a seasoned adventurer or a beginner looking to get into outdoor activities, it's important to
            understand that you don't have to break the bank to get quality gear. This guide will help you navigate the
            world of budget outdoor gear and find the best deals without compromising on performance.
          </p>

          <h2 className="text-3xl font-bold mt-16 mb-6 leading-tight" style={{ color: "#1E1E1E" }}>
            How Do You Shop for Budget Outdoor Gear Without Sacrificing Performance?
          </h2>

          <p className="mb-8 leading-relaxed" style={{ fontSize: "18px", lineHeight: "1.6", color: "#1E1E1E" }}>
            Budget gear shopping isn't about buying the cheapest option—it's about identifying which features matter
            most for your specific activities and finding products that deliver those features without unnecessary
            premium additions.
          </p>

          <p className="mb-8 leading-relaxed" style={{ fontSize: "18px", lineHeight: "1.6", color: "#1E1E1E" }}>
            The key insight: most outdoor activities require basic functionality, not cutting-edge technology. A €40
            rain jacket that keeps you dry performs the same essential function as a €200 jacket with advanced
            breathability features you might never notice.
          </p>

          <h2 className="text-3xl font-bold mt-16 mb-6 leading-tight" style={{ color: "#1E1E1E" }}>
            What Are the Best Budget Daypacks Under €40?
          </h2>

          <p className="mb-8 leading-relaxed" style={{ fontSize: "18px", lineHeight: "1.6", color: "#1E1E1E" }}>
            At €25, the Decathlon Quechua NH100 20L daypack offers surprising durability and comfort. The simple design
            eliminates failure points, and the basic features cover 90% of day hiking needs. Military surplus stores
            offer 35L assault packs for €30-40, built for abuse with bombproof reliability.
          </p>

          <p className="mb-8 leading-relaxed" style={{ fontSize: "18px", lineHeight: "1.6", color: "#1E1E1E" }}>
            What to look for: padded shoulder straps, chest strap, water bottle pockets, and durable zippers. Avoid
            packs with excessive features you won't use—they add cost and weight without benefit. Consider premium packs
            (€80-150) only if you hike regularly with heavy loads or need specialized features like hydration
            compatibility.
          </p>

          <h2 className="text-3xl font-bold mt-16 mb-6 leading-tight" style={{ color: "#1E1E1E" }}>
            Which Hiking Boots Offer the Best Value Under €60?
          </h2>

          <p className="mb-8 leading-relaxed" style={{ fontSize: "18px", lineHeight: "1.6", color: "#1E1E1E" }}>
            The Decathlon Quechua MH100 boots at €45 provide excellent ankle support and waterproofing for casual
            hiking. The synthetic materials dry quickly and require minimal break-in time. Military surplus boots from
            brands like Altama or Belleville (€40-70) offer exceptional durability at fraction of retail cost.
          </p>

          <p className="mb-8 leading-relaxed" style={{ fontSize: "18px", lineHeight: "1.6", color: "#1E1E1E" }}>
            For trail runners, Merrell Trail Glove shoes (€50-70 on sale) work excellently for day hiking and develop
            foot strength over time. New Balance trail running shoes from previous seasons frequently drop to €40-60 and
            provide excellent traction and comfort. Never compromise on fit to save money—poorly fitting boots cause
            blisters, injuries, and ultimately cost more.
          </p>

          <h2 className="text-3xl font-bold mt-16 mb-6 leading-tight" style={{ color: "#1E1E1E" }}>
            What Budget Rain Gear Actually Keeps You Dry?
          </h2>

          <p className="mb-8 leading-relaxed" style={{ fontSize: "18px", lineHeight: "1.6", color: "#1E1E1E" }}>
            At €35, the Decathlon Forclaz MT100 jacket provides reliable waterproofing and basic breathability. The
            simple design eliminates complex features that often fail first. Military surplus ponchos (€15-25) offer
            maximum coverage and ventilation, doubling as ground sheets and pack covers.
          </p>

          <p className="mb-8 leading-relaxed" style={{ fontSize: "18px", lineHeight: "1.6", color: "#1E1E1E" }}>
            Most hikers rarely need dedicated rain pants. A €20 pair of lightweight rain pants from Decathlon handles
            occasional downpours, while regular hiking pants dry quickly in most conditions. Test rain gear with a
            garden hose before your first trip to reveal any manufacturing defects.
          </p>

          <h2 className="text-3xl font-bold mt-16 mb-6 leading-tight" style={{ color: "#1E1E1E" }}>
            How Can You Build a Complete Camping Kit for Under €130?
          </h2>

          <p className="mb-8 leading-relaxed" style={{ fontSize: "18px", lineHeight: "1.6", color: "#1E1E1E" }}>
            The Decathlon Quechua S10 sleeping bag at €25 handles temperatures down to 10°C and packs reasonably small,
            perfect for summer camping. The Klymit Static V inflatable pad (€40-50) provides excellent insulation and
            comfort while packing incredibly small.
          </p>

          <p className="mb-8 leading-relaxed" style={{ fontSize: "18px", lineHeight: "1.6", color: "#1E1E1E" }}>
            Decathlon 2 Seconds tents (€30-40) set up instantly and provide reliable weather protection—heavy for
            backpacking but perfect for car camping. A complete budget camping kit costs around €130: tent (€40) +
            sleeping bag (€25) + sleeping pad (€45) + stove (€20).
          </p>

          <h2 className="text-3xl font-bold mt-16 mb-6 leading-tight" style={{ color: "#1E1E1E" }}>
            Where Can You Find the Best Deals on Outdoor Gear Year-Round?
          </h2>

          <p className="mb-8 leading-relaxed" style={{ fontSize: "18px", lineHeight: "1.6", color: "#1E1E1E" }}>
            Decathlon consistently offers the best value for basic outdoor gear. Military surplus stores provide genuine
            military gear with exceptional durability at budget prices—look for items marked "genuine issue." Brand
            outlet stores offer 40-60% discounts on previous season gear with identical functionality.
          </p>

          <p className="mb-8 leading-relaxed" style={{ fontSize: "18px", lineHeight: "1.6", color: "#1E1E1E" }}>
            Buy winter gear in spring and summer gear in fall for 50-70% discounts as retailers clear seasonal
            inventory. Use price tracking apps like Honey or CamelCamelCamel to receive alerts when items reach your
            target price. Black Friday and end-of-season clearances offer the deepest discounts—plan major gear
            purchases around these events.
          </p>

          <p className="mb-8 leading-relaxed" style={{ fontSize: "18px", lineHeight: "1.6", color: "#1E1E1E" }}>
            Once you have your gear sorted, see our{" "}
            <Link href="/blog/budget-backpacking-europe" className="text-primary underline underline-offset-4">
              guide to budget backpacking in Europe
            </Link>{" "}
            or learn how to{" "}
            <Link href="/blog/budget-backpacker-tips" className="text-primary underline underline-offset-4">
              travel smarter with insider tips from experienced backpackers
            </Link>
            .
          </p>
        </article>

        <BlogFAQ faqs={faqs} blogTitle={post.title} />
      </div>

      <GuidesTeaser />

      <Footer />
    </div>
  )
}
