"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 relative">
              <Image
                src="/images/wb-logo2.png"
                alt="Wanderbase Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span className="font-black text-2xl tracking-tighter text-foreground">The Wanderbase</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 px-0">
            <Link
              href="/guides"
              className="hover:text-primary transition-colors font-medium shadow-none px-3.5 text-base text-foreground"
            >
              Guides
            </Link>
            <Link
              href="/blog"
              className="hover:text-primary transition-colors font-medium shadow-none px-3.5 text-base text-foreground"
            >
              Adventure Blog
            </Link>
            <Link
              href="/about"
              className="hover:text-primary transition-colors font-medium shadow-none px-3.5 text-base text-foreground"
            >
              About Us
            </Link>
            <Button asChild className="bg-primary hover:bg-primary/90 font-semibold shadow-none text-base">
              <Link href="/guides">Explore our Guides</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link href="/guides" className="text-foreground hover:text-primary transition-colors">
                Guides
              </Link>
              <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Button asChild className="bg-primary hover:bg-primary/90 w-fit">
                <Link href="/guides">Explore our Guides</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
