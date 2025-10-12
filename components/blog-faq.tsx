"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string
}

interface BlogFAQProps {
  faqs: FAQItem[]
  blogTitle: string
}

export function BlogFAQ({ faqs, blogTitle }: BlogFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Generate structured data for Google
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      {/* Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="my-20 py-16 px-6 bg-muted/30 rounded-3xl border-2 border-primary/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Everything you need to know about {blogTitle.toLowerCase()}</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-background border-2 border-primary/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left transition-colors hover:bg-muted/50"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-lg text-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 mt-1",
                      openIndex === index && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
