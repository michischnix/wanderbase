import type { ReactNode } from "react"

interface ArticleContentProps {
  children: ReactNode
  hasTableOfContents?: boolean
}

export function ArticleContent({ children, hasTableOfContents = true }: ArticleContentProps) {
  return (
    <div className={hasTableOfContents ? "lg:col-span-3" : "lg:col-span-4 max-w-3xl mx-auto"}>
      <div
        className="prose prose-lg max-w-none 
          prose-headings:text-foreground prose-headings:font-bold prose-headings:scroll-mt-24
          prose-h2:text-2xl prose-h2:mt-20 prose-h2:mb-8 prose-h2:leading-tight prose-h2:border-b prose-h2:border-muted prose-h2:pb-4
          prose-h3:text-xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:leading-tight prose-h3:text-primary
          prose-h4:text-lg prose-h4:mt-10 prose-h4:mb-5 prose-h4:leading-tight prose-h4:font-semibold prose-h4:text-muted-foreground
          prose-h5:text-base prose-h5:mt-8 prose-h5:mb-4 prose-h5:leading-tight prose-h5:font-medium
          prose-h6:text-sm prose-h6:mt-6 prose-h6:mb-3 prose-h6:leading-tight prose-h6:font-semibold prose-h6:uppercase prose-h6:tracking-wide prose-h6:text-muted-foreground
          prose-p:text-foreground prose-p:text-lg prose-p:leading-relaxed prose-p:mb-8
          prose-li:text-foreground prose-li:text-lg prose-li:leading-relaxed
          prose-ul:mb-8 prose-li:mb-3
          prose-strong:text-foreground prose-strong:font-semibold
          [&_.callout]:my-8 [&_.callout]:p-6 [&_.callout]:rounded-lg [&_.callout]:border-l-4
          [&_.callout-blue]:bg-blue-50 [&_.callout-blue]:border-blue-400 [&_.callout-blue]:text-blue-900
          [&_.callout-green]:bg-green-50 [&_.callout-green]:border-green-400 [&_.callout-green]:text-green-900
          [&_.callout-yellow]:bg-yellow-50 [&_.callout-yellow]:border-yellow-400 [&_.callout-yellow]:text-yellow-900
          [&_.callout-red]:bg-red-50 [&_.callout-red]:border-red-400 [&_.callout-red]:text-red-900
          [&_blockquote]:my-12 [&_blockquote]:pl-8 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:italic [&_blockquote]:text-xl [&_blockquote]:font-medium"
      >
        {children}
      </div>
    </div>
  )
}
