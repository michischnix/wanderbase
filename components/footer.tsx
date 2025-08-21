import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 relative">
                <Image src="/wb-logo2-white.png" alt="Wanderbase Logo" fill className="object-contain" />
              </div>
              <span className="text-2xl font-black">The Wanderbase</span>
            </div>
            <p className="text-background/80 text-lg max-w-md leading-relaxed">
              Your trusted companion for outdoor adventures. Expert guides and inspiring stories to fuel your next
              expedition.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-lg">Explore</h3>
            <ul className="space-y-3 text-background/80">
              <li>
                <Link href="/blog" className="hover:text-background transition-colors">
                  Adventure Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="https://outdoorblueprint.gumroad.com/l/ob_jotr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors"
                  aria-label="Get alpine adventure guide (opens in new tab)"
                >
                  Get Guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
          <p>&copy; 2025 Wanderbase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
