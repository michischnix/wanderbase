import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { BlogHero } from "@/components/blog-hero"
import { TableOfContents } from "@/components/table-of-contents"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Paws & Paths: A Beginner's Guide to Hiking with Dogs | Wanderbase",
  description:
    "Transform your hiking adventures by bringing your four-legged companion. Learn essential tips for safe, enjoyable hikes with your dog, from training to trail etiquette.",
  openGraph: {
    title: "Paws & Paths: A Beginner's Guide to Hiking with Dogs",
    description:
      "Transform your hiking adventures by bringing your four-legged companion. Learn essential tips for safe, enjoyable hikes with your dog, from training to trail etiquette.",
    images: ["/hiking-with-dog.jpg"],
  },
}

const tableOfContentsItems = [
  { id: "benefits-hiking-dogs", title: "Benefits of Hiking with Dogs", level: 2 },
  { id: "pre-hike-preparation", title: "Pre-Hike Preparation", level: 2 },
  { id: "essential-gear", title: "Essential Gear for Dog Hiking", level: 2 },
  { id: "trail-safety", title: "Trail Safety and Etiquette", level: 2 },
  { id: "reading-your-dog", title: "Reading Your Dog on the Trail", level: 2 },
  { id: "first-hike-tips", title: "Planning Your First Hike", level: 2 },
]

export default function HikingWithDogsPage() {
  const post = {
    title: "Paws & Paths: A Beginner's Guide to Hiking with Dogs",
    excerpt:
      "Transform your hiking adventures by bringing your four-legged companion. Learn essential tips for safe, enjoyable hikes with your dog, from training to trail etiquette.",
    category: "Hiking",
    date: "January 20, 2025",
    readTime: "7 min read",
    image: "/hiking-with-dog.jpg",
    tags: ["Hiking", "Dogs", "Beginner", "Safety"],
  }

  const tableOfContents = [
    { id: "benefits-hiking-dogs", title: "Benefits of Hiking with Dogs" },
    { id: "pre-hike-preparation", title: "Pre-Hike Preparation" },
    { id: "essential-gear", title: "Essential Gear for Dog Hiking" },
    { id: "trail-safety", title: "Trail Safety and Etiquette" },
    { id: "reading-your-dog", title: "Reading Your Dog on the Trail" },
    { id: "first-hike-tips", title: "Planning Your First Hike" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <BlogHero post={post} />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <TableOfContents items={tableOfContents} />

          <div className="lg:col-span-3">
            <div className="mb-12">
              <p className="leading-relaxed text-foreground first-letter:text-6xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1 font-medium text-xl">
                Few things compare to the joy of exploring nature with your canine companion by your side. Dogs make
                excellent hiking partners—they're enthusiastic, loyal, and always ready for adventure.
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
                However, hiking with dogs requires preparation, training, and awareness to ensure both you and your
                furry friend have safe, enjoyable experiences on the trail.
              </p>

              <h2 className="text-2xl my-6" id="benefits-hiking-dogs">
                Benefits of Hiking with Dogs
              </h2>

              <p>
                Hiking with your dog creates a deeper bond while providing physical and mental stimulation for both of
                you. Dogs experience the world differently than humans, and their enthusiasm for new sights, sounds, and
                smells can reinvigorate your own appreciation for nature.
              </p>

              <div className="callout callout-blue my-8 p-6 border-l-4 bg-blue-50 border-blue-400 text-blue-900">
                <strong>💡 Pro Tip:</strong> Dogs can actually improve your hiking safety by alerting you to wildlife,
                other hikers, or potential hazards before you notice them. Their superior senses make them excellent
                early warning systems.
              </div>

              <p>
                Physical and mental benefits include excellent cardiovascular exercise for both dog and owner, mental
                stimulation from new environments, strengthened bonds through shared adventures, and improved
                socialization opportunities.
              </p>

              <h2 className="text-2xl my-6" id="pre-hike-preparation">
                Pre-Hike Preparation
              </h2>

              <p>
                Successful dog hiking starts long before you hit the trail. Your dog needs to be physically fit,
                well-trained, and comfortable with basic commands. Just like human athletes, dogs need conditioning to
                build up to longer, more challenging hikes.
              </p>

              <p>
                Start with short walks and gradually increase distance. Build up paw pad toughness on various surfaces,
                ensure your dog is at a healthy weight, and get veterinary clearance for strenuous activities.
              </p>

              <div className="callout callout-yellow my-8 p-6 border-l-4 bg-yellow-50 border-yellow-400 text-yellow-900">
                <strong>📋 Planning Tip:</strong> Research trail regulations before departing. Many national parks
                prohibit dogs on trails, while others require leashes. State parks and national forests typically have
                more dog-friendly policies.
              </div>

              <p>
                Essential training commands include reliable recall ("come"), stay for rest breaks, "leave it" to
                prevent eating dangerous items, "wait" to control pace, and "heel" for narrow trail sections.
              </p>

              <h2 className="text-2xl my-6" id="essential-gear">
                Essential Gear for Dog Hiking
              </h2>

              <p>
                Proper gear ensures your dog's comfort and safety while making your hiking experience more enjoyable.
                Invest in quality items that will withstand regular outdoor use and various weather conditions.
              </p>

              <p>
                Must-have items include a sturdy 6-foot leash, comfortable harness for better control, collapsible water
                bowls, and a dog backpack to let your pet carry their own supplies. Don't forget paw protection for
                rough terrain and basic first aid supplies.
              </p>

              <div className="callout callout-green my-8 p-6 border-l-4 bg-green-50 border-green-400 text-green-900">
                <strong>💰 Money Saver:</strong> A well-fitted dog backpack allows your pet to carry their own water,
                food, and waste bags. This reduces your load while giving your dog a job to do, which many dogs find
                mentally satisfying.
              </div>

              <h2 className="text-2xl my-6" id="trail-safety">
                Trail Safety and Etiquette
              </h2>

              <p>
                Responsible dog hiking means following trail etiquette, respecting wildlife, and ensuring your dog
                doesn't negatively impact other hikers' experiences. Good trail manners keep trails open for dogs and
                create positive interactions with other outdoor enthusiasts.
              </p>

              <div className="callout callout-red my-8 p-6 border-l-4 bg-red-50 border-red-400 text-red-900">
                <strong>⚠️ Safety Warning:</strong> Never let your dog drink from stagnant water sources. Carry enough
                fresh water for both you and your dog, or use a portable water filter designed for pets to prevent
                waterborne illnesses.
              </div>

              <p>
                Trail etiquette includes keeping dogs on leash unless in designated off-leash areas, yielding
                right-of-way to other hikers, controlling your dog around others, and always packing out dog waste.
                Prevent your dog from chasing wildlife and keep them quiet to preserve the natural soundscape.
              </p>

              <h2 className="text-2xl my-6" id="reading-your-dog">
                Reading Your Dog on the Trail
              </h2>

              <p>
                Dogs can't verbally communicate when they're tired, overheated, or experiencing discomfort. Learning to
                read your dog's body language and behavior is crucial for preventing problems and ensuring their
                well-being on the trail.
              </p>

              <blockquote className="my-12 pl-8 border-l-4 border-primary italic text-xl font-medium">
                A tired dog is a happy dog, but an exhausted dog is a liability. Know the difference and always err on
                the side of caution.
              </blockquote>

              <p>
                Warning signs include excessive panting (overheating), lagging behind (fatigue), seeking shade (cooling
                down), excessive drooling (heat stress), limping (injury), and loss of enthusiasm. Take frequent water
                breaks, find shade during rest stops, and check paws regularly for cuts or wear.
              </p>

              <h2 className="text-2xl my-6" id="first-hike-tips">
                Planning Your First Hike
              </h2>

              <p>
                Your first hiking adventure with your dog should be a positive experience that builds confidence for
                both of you. Choose an easy trail, pack extra supplies, and focus on establishing good habits rather
                than covering maximum distance.
              </p>

              <p>
                Choose a short, easy trail (2-3 miles maximum), pick a dog-friendly location with water access, start
                early to avoid heat and crowds, and bring twice as much water as you think you'll need. Pack high-value
                treats for training reinforcement and have a backup plan if you need to turn around early.
              </p>

              <blockquote className="my-12 pl-8 border-l-4 border-primary italic text-xl font-medium">
                Hiking with dogs opens up a world of shared adventures and creates memories that will last a lifetime.
                The key to success is preparation, patience, and always prioritizing your dog's well-being over reaching
                any particular destination.
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
