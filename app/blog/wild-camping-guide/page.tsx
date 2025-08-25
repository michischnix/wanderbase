import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { BlogHero } from "@/components/blog-hero"
import { TableOfContents } from "@/components/table-of-contents"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Beyond the Campsite: Discover Wild Camping for You | Wanderbase",
  description:
    "Escape the crowds and discover the freedom of wild camping. Learn essential skills, gear recommendations, and safety tips for your first backcountry adventure.",
  openGraph: {
    title: "Beyond the Campsite: Discover Wild Camping for You",
    description:
      "Escape the crowds and discover the freedom of wild camping. Learn essential skills, gear recommendations, and safety tips for your first backcountry adventure.",
    images: ["/wild-camping-tent.jpg"],
  },
}

export default function WildCampingGuidePage() {
  const post = {
    title: "Beyond the Campsite: Discover Wild Camping for You",
    excerpt:
      "Escape the crowds and discover the freedom of wild camping. Learn essential skills, gear recommendations, and safety tips for your first backcountry adventure.",
    category: "Camping",
    date: "January 15, 2025",
    readTime: "7 min read",
    image: "/wild-camping-tent.jpg",
    tags: ["Camping", "Wilderness", "Beginner Guide"],
  }

  const tableOfContents = [
    { id: "what-is-wild-camping", title: "What is Wild Camping?" },
    { id: "essential-gear", title: "Essential Gear for Wild Camping" },
    { id: "choosing-location", title: "Choosing the Perfect Location" },
    { id: "safety-considerations", title: "Safety Considerations" },
    { id: "leave-no-trace", title: "Leave No Trace Principles" },
    { id: "getting-started", title: "Getting Started: Your First Trip" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <BlogHero post={post} />

      <div className="max-w-6xl mx-auto px-6 pt-8 pb-4">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <TableOfContents items={tableOfContents} />

          <div className="lg:col-span-3">
            <div className="mb-12">
              <p className="leading-relaxed text-foreground first-letter:text-6xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1 font-medium text-xl">
                There's something magical about waking up to nothing but the sounds of nature, with no neighbors, no
                facilities, and no rules except those you set for yourself. Wild camping offers the ultimate outdoor
                freedom, but it requires preparation, respect for the environment, and a willingness to be truly
                self-sufficient.
              </p>
            </div>

            <div
              className="prose prose-lg max-w-none 
              prose-headings:text-foreground prose-headings:font-bold prose-headings:scroll-mt-24
              prose-h2:text-2xl prose-h2:mt-20 prose-h2:mb-8 prose-h2:leading-tight prose-h2:border-b prose-h2:border-muted prose-h2:pb-4
              prose-h3:text-xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:leading-tight prose-h3:text-primary
              prose-p:text-foreground prose-p:text-lg prose-p:leading-relaxed prose-p:mb-8
              prose-li:text-foreground prose-li:text-lg prose-li:leading-relaxed
              prose-ul:mb-8 prose-li:mb-3
              prose-strong:text-foreground prose-strong:font-semibold"
            >
              <p>
                After years of exploring remote wilderness areas, the freedom of wild camping continues to offer some of
                the most rewarding outdoor experiences. But success requires understanding both the practical skills and
                the ethical responsibilities that come with this privilege.
              </p>

              <h2 className="text-2xl my-6" id="what-is-wild-camping">
                What is Wild Camping?
              </h2>

              <p>
                Wild camping, also known as free camping or boondocking, is the practice of camping in natural areas
                without designated facilities. Unlike traditional campgrounds, wild camping means no bathrooms, no water
                hookups, no electrical connections, and often no cell service. It's just you, your gear, and the
                wilderness.
              </p>

              <p>
                The appeal goes beyond just saving money on campground fees. Wild camping offers solitude that's
                increasingly rare in our connected world, the chance to develop genuine self-reliance skills, and access
                to pristine locations that developed campgrounds simply can't match.
              </p>

              <div className="callout callout-blue my-8 p-6 border-l-4 bg-blue-50 border-blue-400 text-blue-900">
                <strong>💡 Pro Tip:</strong> Start with car camping in dispersed areas before attempting backpacking
                wild camps. This allows you to bring more gear and have an easier exit strategy while you learn the
                basics of self-sufficient camping.
              </div>

              <h2 className="text-2xl my-6" id="essential-gear">
                Essential Gear for Wild Camping
              </h2>

              <p>
                Wild camping requires complete self-sufficiency, which means your gear list will be more extensive than
                traditional camping. Every item must earn its place in your pack, balancing necessity with weight and
                space constraints.
              </p>

              <p>
                Your shelter system forms the foundation of wild camping success. A four-season tent or robust
                three-season tent provides essential protection, while a quality sleeping bag rated for expected
                temperatures ensures comfortable rest. An insulated sleeping pad with an R-value of 4 or higher becomes
                critical for cold conditions, providing both comfort and crucial insulation from ground temperature.
              </p>

              <p>
                Water management requires careful planning since natural sources may be unreliable or contaminated. A
                reliable filtration system or purification tablets, combined with collapsible water containers holding
                at least 2-3 liters, ensures you can safely hydrate throughout your trip. Your cooking system should
                include a portable stove with adequate fuel, lightweight cookware, and non-perishable food for your
                entire trip plus one extra day.
              </p>

              <div className="callout callout-green my-8 p-6 border-l-4 bg-green-50 border-green-400 text-green-900">
                <strong>💰 Money Saver:</strong> Wild camping can save significant money on accommodation costs. A $200
                investment in basic gear can provide hundreds of nights of free camping over the years, making it one of
                the most cost-effective ways to explore the outdoors.
              </div>

              <h2 className="text-2xl my-6" id="choosing-location">
                Choosing the Perfect Location
              </h2>

              <p>
                Location selection determines both the legality and safety of your wild camping experience. Research is
                essential before heading out, as regulations vary significantly by location and land ownership.
              </p>

              <p>
                National Forests generally allow dispersed camping for up to 14 days, while Bureau of Land Management
                areas often permit free camping with similar time limits. National Parks usually require designated
                backcountry permits, and state park policies vary widely. Private land always requires explicit
                permission from landowners.
              </p>

              <div className="callout callout-yellow my-8 p-6 border-l-4 bg-yellow-50 border-yellow-400 text-yellow-900">
                <strong>📋 Planning Tip:</strong> Use apps like FreeRoam, Campendium, or iOverlander to find legal wild
                camping spots. Always verify current regulations, as rules can change seasonally or due to fire
                restrictions.
              </div>

              <h2 className="my-6 text-2xl" id="safety-considerations">
                Safety Considerations
              </h2>

              <p>
                Wild camping inherently involves more risk than developed campgrounds. Proper preparation and awareness
                can mitigate most dangers, but you must be prepared for emergencies when help may be hours or days away.
              </p>

              <div className="callout callout-red my-8 p-6 border-l-4 bg-red-50 border-red-400 text-red-900">
                <strong>⚠️ Warning:</strong> Always inform someone of your planned route and expected return. Carry
                emergency communication devices like a satellite messenger or personal locator beacon for remote areas
                where cell service is unavailable.
              </div>

              <p>
                Your emergency kit should include wilderness-specific first aid supplies, emergency shelter like a space
                blanket or bivy, waterproof fire starting materials, a multi-tool or knife, headlamp with extra
                batteries, emergency whistle, and basic repair materials including duct tape and tent patches.
              </p>

              <h2 className="text-2xl my-6" id="leave-no-trace">
                Leave No Trace Principles
              </h2>

              <p>
                Wild camping puts you in pristine environments that require extra care to preserve. Following Leave No
                Trace principles isn't just ethical—it's essential for keeping these areas open for future wild campers.
              </p>

              <p>
                Camp on durable surfaces like rock, gravel, or established sites to minimize impact. Keep campsites
                small and avoid altering the natural environment. Dispose of waste properly by packing out all trash and
                burying human waste 6-8 inches deep, at least 200 feet from water sources.
              </p>

              <blockquote className="my-12 pl-8 border-l-4 border-primary italic text-xl font-medium">
                "Take only pictures, leave only footprints" becomes even more critical when you're camping in untouched
                wilderness areas where your impact could affect the experience of future visitors.
              </blockquote>

              <h2 className="text-2xl my-6" id="getting-started">
                Getting Started: Your First Trip
              </h2>

              <p>
                Your first wild camping experience should be relatively close to civilization while you learn the ropes.
                Choose a location with cell service or within a few miles of a road, and plan for just one or two nights
                to build confidence gradually.
              </p>

              <p>
                Before departing, research your chosen location thoroughly and verify camping regulations. Check weather
                forecasts and fire restrictions, test all gear at home, plan your menu with extra food, download offline
                maps to your phone, and inform someone of your plans with an expected return time.
              </p>

              <p>
                Wild camping opens up a world of adventure that traditional campgrounds simply can't match. The
                solitude, the connection with nature, and the self-reliance skills you'll develop make every challenge
                worthwhile. Start small, learn continuously, and always prioritize safety and environmental stewardship.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
