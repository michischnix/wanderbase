interface ArticleContentProps {
  content: string
  hasTableOfContents: boolean
}

function enhanceContentWithCallouts(content: string): string {
  let enhancedContent = content

  enhancedContent = enhancedContent.replace(
    /<p>The solution is surprisingly simple\.(.*?)<\/p>/g,
    '<div class="callout callout-blue"><strong>💡 Pro Tip:</strong> The solution is surprisingly simple.$1</div>',
  )

  enhancedContent = enhancedContent.replace(
    /<p>Mountain rescue operations can cost upwards of €10,000(.*?)<\/p>/g,
    '<div class="callout callout-red"><strong>⚠️ Warning:</strong> Mountain rescue operations can cost upwards of €10,000$1</div>',
  )

  enhancedContent = enhancedContent.replace(
    /<p>Smart hikers adapt their eating strategy accordingly\.(.*?)<\/p>/g,
    '<div class="callout callout-green"><strong>💰 Money Saver:</strong> Smart hikers adapt their eating strategy accordingly.$1</div>',
  )

  enhancedContent = enhancedContent.replace(
    /<p>Maintain a 20% contingency fund specifically for weather-related expenses\.(.*?)<\/p>/g,
    '<div class="callout callout-yellow"><strong>📋 Planning Tip:</strong> Maintain a 20% contingency fund specifically for weather-related expenses.$1</div>',
  )

  enhancedContent = enhancedContent.replace(
    /<p>The Alps reward prepared hikers with unforgettable experiences—and punish the unprepared with expensive surprises\.<\/p>/g,
    "<blockquote>The Alps reward prepared hikers with unforgettable experiences—and punish the unprepared with expensive surprises.</blockquote>",
  )

  return enhancedContent
}

export function ArticleContent({ content, hasTableOfContents }: ArticleContentProps) {
  const firstParagraph = content.split("</p>")[0].replace("<p>", "")
  const remainingContent = content.split("</p>").slice(1).join("</p>")

  return (
    <div className={hasTableOfContents ? "lg:col-span-3" : "lg:col-span-4 max-w-3xl mx-auto"}>
      {/* Drop cap for first paragraph */}
      <div className="mb-12">
        <p className="leading-relaxed text-foreground first-letter:text-6xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1 font-medium text-xl">
          {firstParagraph}
        </p>
      </div>

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
        dangerouslySetInnerHTML={{
          __html: enhanceContentWithCallouts(remainingContent),
        }}
      />
    </div>
  )
}
