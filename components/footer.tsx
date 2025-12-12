import Link from "next/link"
import Image from "next/image"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="text-background py-16 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 relative text-white">
                <Image src="/wb-logo2-white.png" alt="Wanderbase Logo" fill className="object-contain text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">The Wanderbase</span>
            </div>
            <p className="text-lg max-w-md leading-relaxed font-light shadow-none text-white">
              {"Your trusted companion for outdoor adventures — offering expert guides and inspiring stories to fuel your next journey, made for the cost-conscious explorer."}  
            </p>
            <div className="mt-6 text-4xl">
              <a
                href="https://www.instagram.com/thewanderbase/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-background/80 hover:text-background transition-colors"
                aria-label="Follow us on Instagram (opens in new tab)"
              >
                <Instagram className="text-white" size={20} />
                <span className="font-bold text-lg text-white">Follow us on Instagram</span>
              </a>
            </div>
          </div>

          <div className="shadow-none">
            <h3 className="font-semibold mb-6 text-lg text-white">Explore</h3>
            <ul className="space-y-3 text-white">
              <li>
                <Link href="/guides" className="hover:text-background transition-colors">
                  Guides
                </Link>
              </li>
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
                
              </li>
              <li>
                <Link href="/privacy" className="hover:text-background transition-colors">
                  Privacy & Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/legal-notice" className="hover:text-background transition-colors">
                  Legal Notice
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
          <p className="text-white">&copy; 2025 Wanderbase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
