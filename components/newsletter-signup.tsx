"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function NewsletterSignup() {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/design-mode/pexels-alex-foret-2156449026-34213321.jpg"
          alt="Misty mountain landscape with evergreen trees"
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-transparent shadow-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="bg-black/40 backdrop-blur-sm p-8 md:p-12 shadow-2xl border border-white/10 rounded-lg">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center text-balance">
            Adventure starts in your inbox
          </h2>

          {/* Subtext */}
          <p className="text-lg text-white/90 mb-8 text-center leading-relaxed text-pretty">
            Get smart hiking tips, destination inspiration, and gear essentials — delivered on a regular base to fuel
            your next adventure.
          </p>

          <a
            href="https://wanderbase.gumroad.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
              Get regular trail inspiration
            </Button>
          </a>

          {/* Footer Note */}
          <p className="text-sm text-white/70 text-center mt-6">
            We respect your inbox.{" "}
            <a href="/privacy" className="underline hover:text-white transition-colors">
              Privacy & Cookie Policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
