"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-border transition-colors duration-200 ${
        isScrolled ? "bg-background/95" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">W</span>
            </div>
            <span className="text-xl text-foreground font-bold">Wanderbase</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="https://outdoorblueprint.gumroad.com/l/ob_jotr" target="_blank" rel="noopener noreferrer">
                Get Guide
              </a>
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
              <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Button asChild className="bg-primary hover:bg-primary/90 w-fit">
                <a href="https://outdoorblueprint.gumroad.com/l/ob_jotr" target="_blank" rel="noopener noreferrer">
                  Get Guide
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
