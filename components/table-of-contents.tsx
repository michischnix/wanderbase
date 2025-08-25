"use client"

import { useEffect, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface TocItem {
  id: string
  title: string
  level: number
}

interface TableOfContentsProps {
  items: TocItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const tocLinks = document.querySelectorAll(".toc-link")
    const headings = document.querySelectorAll("h2[id], h3[id], h4[id], h5[id], h6[id]")

    function updateActiveSection() {
      let current = ""
      const scrollPosition = window.scrollY + 120

      headings.forEach((heading) => {
        const headingTop = (heading as HTMLElement).offsetTop
        if (scrollPosition >= headingTop) {
          current = heading.id
        }
      })

      tocLinks.forEach((link) => {
        const linkElement = link as HTMLElement
        if (linkElement.dataset.target === current) {
          linkElement.style.fontWeight = "bold"
        } else {
          linkElement.style.fontWeight = "normal"
        }
      })
    }

    let ticking = false
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateActiveSection)
        ticking = true
        setTimeout(() => {
          ticking = false
        }, 10)
      }
    }

    window.addEventListener("scroll", requestTick)
    updateActiveSection()

    return () => window.removeEventListener("scroll", requestTick)
  }, [])

  if (items.length === 0) return null

  return (
    <div className="lg:col-span-1">
      <div className="sticky top-24">
        <div className="bg-muted/30 rounded-lg p-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full text-lg font-bold text-foreground mb-4 lg:cursor-default lg:pointer-events-none"
          >
            <span>Table of Contents</span>
            <span className="lg:hidden">{isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</span>
          </button>

          <nav
            className={`space-y-2 mx-[-30px] my-3.5 py-2.5 transition-all duration-200 ${
              isOpen ? "block" : "hidden lg:block"
            }`}
            id="table-of-contents"
          >
            {items.map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                className={`block hover:text-primary transition-colors font-normal text-left toc-link mx-0 text-base ${
                  item.level === 2
                    ? "font-medium text-foreground"
                    : item.level === 3
                      ? "ml-4 text-muted-foreground"
                      : item.level === 4
                        ? "ml-6 text-muted-foreground text-xs"
                        : "ml-8 text-muted-foreground text-xs"
                }`}
                data-target={item.id}
                onClick={() => setIsOpen(false)} // Close dropdown when link is clicked on mobile
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
