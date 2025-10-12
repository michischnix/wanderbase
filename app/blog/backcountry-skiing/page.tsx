import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { BlogHero } from "@/components/blog-hero"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Backcountry Skiing 101: Your First Steps Beyond the Resort | Wanderbase",
  description:
    "Discover the freedom of backcountry skiing with our comprehensive beginner's guide. Learn essential skills, safety protocols, and gear recommendations for your first off-piste adventures.",
  openGraph: {
    title: "Backcountry Skiing 101: Your First Steps Beyond the Resort",
    description:
      "Discover the freedom of backcountry skiing with our comprehensive beginner's guide. Learn essential skills, safety protocols, and gear recommendations for your first off-piste adventures.",
    images: ["/backcountry-skiing.jpg"],
  },
}

const post = {
  title: "Backcountry Skiing 101: Your First Steps Beyond the Resort",
  excerpt:
    "Discover the freedom of backcountry skiing with our comprehensive beginner's guide. Learn essential skills, safety protocols, and gear recommendations for your first off-piste adventures.",
  category: "Winter Sports",
  date: "January 22, 2025",
  readTime: "9 min read",
  image: "/backcountry-skiing.jpg",
  tags: ["Winter Sports", "Skiing", "Safety", "Beginner"],
}

export default function BackcountrySkiingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <BlogHero post={post} />

      <div className="max-w-[750px] mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="leading-relaxed text-foreground first-letter:text-6xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1 font-medium text-xl">
            Backcountry skiing represents the ultimate expression of freedom on snow—earning your turns through human
            power, exploring untouched terrain, and experiencing the mountains in their purest form.
          </p>
        </div>

        <article className="text-foreground text-lg leading-relaxed space-y-8">
          <p>
            However, this freedom comes with significant responsibility and risk that requires proper education,
            preparation, and respect for the mountain environment.
          </p>

          <h2 className="text-2xl my-6" id="what-is-backcountry">
            What is Backcountry Skiing?
          </h2>

          <p>
            Backcountry skiing, also known as ski touring or ski mountaineering, involves skiing in uncontrolled,
            unpatrolled terrain outside of ski resort boundaries. Unlike resort skiing, you must earn every descent by
            climbing uphill using specialized equipment, and you're responsible for your own safety and rescue.
          </p>

          <div className="callout callout-red my-8 p-6 border-l-4 bg-red-50 border-red-400 text-red-900">
            <strong>⚠️ Critical Safety Warning:</strong> Backcountry skiing involves serious risks including avalanches,
            cliff bands, tree wells, and weather exposure. Proper education and training are not optional—they are
            essential for survival. Never venture into the backcountry without proper avalanche education.
          </div>

          <p>
            Key differences from resort skiing include no groomed runs or marked boundaries, no ski patrol or immediate
            rescue services, avalanche risk assessment requirements, physical fitness demands for uphill travel, and the
            need for self-rescue skills and equipment.
          </p>

          <h2 className="text-2xl my-6" id="essential-skills">
            Essential Skills and Prerequisites
          </h2>

          <p>
            Before considering backcountry skiing, you need a solid foundation of resort skiing skills, physical
            fitness, and mountain awareness. Backcountry skiing amplifies every challenge—poor technique, inadequate
            fitness, or lack of mountain sense can quickly become dangerous.
          </p>

          <div className="callout callout-blue my-8 p-6 border-l-4 bg-blue-50 border-blue-400 text-blue-900">
            <strong>💡 Pro Tip:</strong> Practice skiing with a heavy backpack at the resort before heading into the
            backcountry. The extra weight significantly affects your balance and technique, especially when fatigued.
          </div>

          <p>
            Prerequisites include advanced intermediate to expert resort skiing ability, comfort in all snow conditions,
            ability to ski steep terrain, strong parallel turns and edge control, and experience skiing in variable
            visibility. Physical fitness requirements include cardiovascular endurance, leg strength, core stability,
            and mental resilience.
          </p>

          <h2 className="text-2xl my-6" id="safety-education">
            Avalanche Safety Education
          </h2>

          <p>
            Avalanche education is the cornerstone of backcountry skiing safety. This isn't optional knowledge—it's
            literally life-or-death information that every backcountry skier must understand and practice regularly.
          </p>

          <blockquote className="my-12 pl-8 border-l-4 border-primary italic text-xl font-medium">
            The mountains don't care about your experience level, your gear, or your plans. They only respond to your
            decisions and your respect for their power.
          </blockquote>

          <div className="callout callout-yellow my-8 p-6 border-l-4 bg-yellow-50 border-yellow-400 text-yellow-900">
            <strong>📋 Education Tip:</strong> Take your avalanche course from a reputable organization like the
            American Avalanche Association or Canadian Avalanche Association. Online courses can supplement but never
            replace hands-on field training.
          </div>

          <p>
            Required education levels include Level 1 (Avalanche Rescue) for basic companion rescue, Level 2 (Avalanche
            Hazard Evaluation) for trip planning, Level 3 (Advanced Avalanche) for professional-level risk management,
            and ongoing education through regular refresher courses.
          </p>

          <h2 className="text-2xl my-6" id="essential-gear">
            Essential Backcountry Gear
          </h2>

          <p>
            Backcountry skiing requires specialized equipment for both uphill travel and safety. While the initial
            investment is significant, quality gear is essential for performance, comfort, and survival in the
            backcountry environment.
          </p>

          <p>
            The avalanche safety "Holy Trinity" includes an avalanche transceiver (digital beacon), probe (collapsible
            pole), and shovel (metal blade). Touring equipment includes lighter touring skis, bindings that allow heel
            lift, touring boots with walk mode, climbing skins for uphill traction, and ski crampons for icy conditions.
          </p>

          <div className="callout callout-green my-8 p-6 border-l-4 bg-green-50 border-green-400 text-green-900">
            <strong>💰 Investment Perspective:</strong> Quality backcountry gear is expensive but essential. Consider it
            life insurance rather than sporting equipment. Buy once, cry once—cheap safety gear can fail when you need
            it most.
          </div>

          <h2 className="text-2xl my-6" id="planning-first-tour">
            Planning Your First Tour
          </h2>

          <p>
            Your first backcountry ski tour should be conservative, well-planned, and ideally guided by an experienced
            mentor or professional guide. The goal is to gain experience in a controlled environment while building
            confidence and skills.
          </p>

          <p>
            Choose low-angle terrain (less than 30 degrees), areas with minimal avalanche exposure, tours with easy
            access and escape routes, and start with short distances. Plan for stable weather conditions and go with
            experienced partners or hire a guide.
          </p>

          <h2 className="text-2xl my-6" id="building-experience">
            Building Experience Safely
          </h2>

          <p>
            Backcountry skiing expertise develops over years of experience, continuous learning, and gradual progression
            to more challenging terrain. There are no shortcuts to mountain wisdom—it must be earned through time,
            practice, and sometimes difficult lessons.
          </p>

          <blockquote className="my-12 pl-8 border-l-4 border-primary italic text-xl font-medium">
            Remember that the mountains will always be there, but you need to be alive to enjoy them. Conservative
            decision-making, continuous learning, and respect for the mountain environment are the hallmarks of
            successful backcountry skiers.
          </blockquote>
        </article>
      </div>

      <Footer />
    </div>
  )
}
