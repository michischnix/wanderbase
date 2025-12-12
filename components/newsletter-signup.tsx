"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useRef } from "react"

export function NewsletterSignup() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const element = bgRef.current
        const rect = element.getBoundingClientRect()
        const scrolled = window.scrollY
        const elementTop = rect.top + scrolled
        const windowHeight = window.innerHeight

        // Only apply parallax when element is in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          const parallaxSpeed = 0.3
          const offset = (scrolled - elementTop + windowHeight) * parallaxSpeed
          element.style.transform = `translateY(${offset}px)`
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative w-full py-40 md:py-48 px-6 overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 -top-20 -bottom-20 z-0 will-change-transform">
        <Image
          src="/images/wanderbase-background-dec25-2.jpeg"
          alt="Misty mountain landscape with evergreen trees"
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-transparent shadow-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="backdrop-blur-sm p-8 md:p-12 shadow-2xl border border-white/10 rounded-lg bg-popover opacity-100 shadow">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-balance text-foreground">
            Adventure starts in your inbox
          </h2>

          {/* Subtext */}
          <p className="text-lg mb-8 text-center leading-relaxed text-pretty text-foreground">
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
          <p className="text-sm text-center mt-6 text-foreground">
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
