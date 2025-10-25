import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { BlogHero } from "@/components/blog-hero"
import { Footer } from "@/components/footer"
import { GuidesTeaser } from "@/components/guides-teaser"

export const metadata: Metadata = {
  title: "Two Wheels, Endless Trails: Discover Bikepacking | Wanderbase",
  description:
    "Combine cycling and camping for the ultimate adventure. Learn essential bikepacking skills, gear selection, and route planning for your first multi-day cycling expedition.",
  openGraph: {
    title: "Two Wheels, Endless Trails: Discover Bikepacking",
    description:
      "Combine cycling and camping for the ultimate adventure. Learn essential bikepacking skills, gear selection, and route planning for your first multi-day cycling expedition.",
    images: ["/bikepacking-desert.jpg"],
  },
}

export default function BikepackingGuidePage() {
  const post = {
    title: "Two Wheels, Endless Trails: Discover Bikepacking",
    excerpt:
      "Combine cycling and camping for the ultimate adventure. Learn essential bikepacking skills, gear selection, and route planning for your first multi-day cycling expedition.",
    category: "Cycling",
    date: "January 25, 2025",
    readTime: "9 min read",
    image: "/bikepacking-desert.jpg",
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <BlogHero post={post} />

      <div className="max-w-[750px] mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="leading-relaxed text-foreground first-letter:text-6xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1 font-medium text-xl">
            Bikepacking represents the perfect fusion of cycling and camping, offering a unique way to explore remote
            areas while carrying everything you need for multi-day adventures. Unlike traditional bicycle touring with
            panniers, bikepacking emphasizes lightweight, minimalist gear that allows access to singletrack trails and
            rough terrain that would challenge conventional touring setups.
          </p>
        </div>

        <article className="text-foreground text-lg leading-relaxed space-y-8">
          <p>
            After years of exploring remote wilderness by bike, bikepacking continues to offer the most rewarding way to
            combine the efficiency of cycling with the intimacy of backcountry camping. The key is understanding how
            this approach differs from traditional touring and adapting your mindset accordingly.
          </p>

          <h2 className="text-2xl font-bold mt-16 mb-6" id="what-is-bikepacking">
            What is Bikepacking?
          </h2>

          <p>
            Bikepacking combines the self-sufficiency of backpacking with the efficiency and range of cycling. Instead
            of carrying gear in traditional panniers, bikepackers use frame bags, seat packs, and handlebar rolls that
            keep weight centered and allow the bike to handle more like an unloaded mountain bike.
          </p>

          <p>
            The appeal goes beyond just covering more ground than hiking. Bikepacking opens up terrain that's
            inaccessible to car camping but too far for day hiking. You can cover 30-50 miles per day while carrying
            everything needed for comfortable camping, accessing remote locations that few people ever see.
          </p>

          <div className="callout callout-blue my-8 p-6 border-l-4 bg-blue-50 border-blue-400 text-blue-900">
            <strong>💡 Pro Tip:</strong> The biggest difference from bicycle touring isn't just the bags—it's the
            mindset. Bikepacking prioritizes access to wild places over daily mileage, emphasizing the journey over the
            destination.
          </div>

          <h2 className="text-2xl font-bold mt-16 mb-6" id="bike-setup">
            Bike Setup and Modifications
          </h2>

          <p>
            Almost any bike can be adapted for bikepacking, but some designs work better than others. Mountain bikes,
            gravel bikes, and cyclocross bikes are ideal, while road bikes can work for less technical routes. The key
            is matching your bike to your intended terrain and riding style.
          </p>

          <p>
            Your bike needs wide tire clearance (35mm minimum, 40mm+ preferred), multiple mounting points for bags and
            accessories, and stable geometry that handles well when loaded. Reliable components become crucial in remote
            areas where bike shops are nonexistent.
          </p>

          <div className="callout callout-yellow my-8 p-6 border-l-4 bg-yellow-50 border-yellow-400 text-yellow-900">
            <strong>📋 Setup Tip:</strong> Test your loaded bike setup on local trails before committing to a multi-day
            trip. Weight distribution significantly affects handling, and you may need to adjust bag placement or
            contents based on how the bike feels.
          </div>

          <p>
            Essential modifications include lower gearing for climbing with a loaded bike, tubeless tire setup with
            sealant for puncture resistance, reliable lighting for early and late riding, and frame protection from bag
            rub and trail debris. Additional bottle cage mounts increase water capacity for longer stretches between
            resupply points.
          </p>

          <h2 className="text-2xl font-bold mt-16 mb-6" id="packing-systems">
            Packing Systems and Gear
          </h2>

          <p>
            Bikepacking bags are designed to keep weight low and centered while maintaining bike handling
            characteristics. The three main bag types—frame bag, seat pack, and handlebar roll—each serve specific
            purposes and work together as a complete system.
          </p>

          <p>
            Your frame bag carries heavy items like tools, food, and water, keeping the center of gravity low. The seat
            pack holds your sleeping system and clothing, while the handlebar roll accommodates bulky but light items
            like your sleeping pad. A top tube bag provides easy access to snacks and frequently needed items.
          </p>

          <div className="callout callout-green my-8 p-6 border-l-4 bg-green-50 border-green-400 text-green-900">
            <strong>💰 Budget Approach:</strong> Start with a basic frame bag and seat pack before investing in a
            complete system. Many successful bikepackers begin with dry bags and voile straps, upgrading to
            purpose-built bags as they gain experience and understand their specific needs.
          </div>

          <h2 className="text-2xl font-bold mt-16 mb-6" id="route-planning">
            Route Planning Essentials
          </h2>

          <p>
            Successful bikepacking trips require careful route planning that considers terrain difficulty, water
            availability, resupply opportunities, and camping options. Unlike road touring, bikepacking routes often
            involve remote areas with limited services and challenging terrain.
          </p>

          <p>
            Route selection should balance challenge with beauty, offering memorable experiences while staying within
            your skill and fitness level. Consider terrain difficulty, daily mileage appropriate for loaded riding,
            water sources and purification needs, and legal camping options along the route.
          </p>

          <blockquote className="my-12 pl-8 border-l-4 border-primary italic text-xl font-medium">
            The best bikepacking routes aren't necessarily the most difficult—they're the ones that match your abilities
            while revealing landscapes and experiences you couldn't access any other way.
          </blockquote>

          <h2 className="text-2xl font-bold mt-16 mb-6" id="camping-considerations">
            Camping and Resupply
          </h2>

          <p>
            Bikepacking often involves wild camping in remote areas, requiring Leave No Trace principles and
            self-sufficiency skills. Planning resupply points and understanding local camping regulations are crucial
            for successful multi-day trips.
          </p>

          <div className="callout callout-red my-8 p-6 border-l-4 bg-red-50 border-red-400 text-red-900">
            <strong>⚠️ Camping Ethics:</strong> Always research local camping regulations before your trip. Some areas
            prohibit camping entirely, while others have specific rules about distances from trails and water sources.
            Respect private property and obtain permission when required.
          </div>

          <p>
            Your camping strategy might include established campgrounds for amenities and security, dispersed camping on
            public lands following regulations, or stealth camping when legal options aren't available. Hiker/biker
            sites at state parks often provide affordable accommodation, while the Warm Showers network offers hosted
            accommodation from fellow cyclists.
          </p>

          <h2 className="text-2xl font-bold mt-16 mb-6" id="first-trip-tips">
            Planning Your First Trip
          </h2>

          <p>
            Your first bikepacking adventure should be conservative and close to home, allowing you to test your gear,
            refine your systems, and build confidence before attempting more ambitious trips. Focus on learning rather
            than covering maximum distance.
          </p>

          <p>
            Choose a 2-3 day trip within 2 hours of home, selecting familiar terrain or well-documented routes. Plan
            conservative daily distances of 20-40 miles, include bailout options and resupply opportunities, and test
            all gear on overnight trips before departing.
          </p>

          <p>
            Bikepacking offers a unique perspective on adventure travel, combining the efficiency of cycling with the
            intimacy of camping. The ability to cover significant distances while carrying everything you need opens up
            incredible opportunities for exploration and self-discovery that no other form of travel can match.
          </p>
        </article>
      </div>

      <GuidesTeaser />

      <Footer />
    </div>
  )
}
