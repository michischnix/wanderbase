import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Legal Notice (Impressum) | The Wanderbase",
  description: "Legal information and imprint for The Wanderbase website.",
}

export default function LegalNoticePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/" className="text-primary hover:underline text-sm">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Legal Notice / Imprint (Impressum)</h1>
        <p className="text-muted-foreground mb-8">
          Information according to Art. 3, para. 1, lit. s of the Swiss Federal Act on Unfair Competition (UCA)
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Publisher Details</h2>
            <div className="space-y-2 text-foreground/80">
              <p>
                <strong>Website Operator / Legal Entity:</strong> Michael Schneider
              </p>
              <p>
                <strong>Legal Form:</strong> Sole Proprietorship
              </p>
              <p>
                <strong>Address for Service:</strong>
                <br />
                Montanastrasse 7
                <br />
                6052 Hergiswil
                <br />
                Switzerland
              </p>
              <p>
                <strong>Mandatory Contact Email:</strong>{" "}
                <a href="mailto:contact@thewanderbase.com" className="text-primary hover:underline">
                  thewanderbase@gmail.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Commercial & Tax Status</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">UID / VAT Status</h3>
              <p className="text-foreground/80 leading-relaxed">
                The website operator is not subject to VAT (Mehrwertsteuer) liability in Switzerland. Therefore, no
                Swiss UID (VAT identification number) is required, and VAT is not charged on transactions.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">External Sales Disclaimer (Gumroad)</h3>
              <p className="text-foreground/80 leading-relaxed">
                All payments, fulfillment, and contracts for products are handled by our external partner, Gumroad, Inc.
                The contractual partner for the purchase is the website operator (Michael Schneider), but the transaction occurs on the external platform Gumroad.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-4">
                For more information about Gumroad&apos;s services, please visit{" "}
                <a
                  href="https://gumroad.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  gumroad.com
                </a>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Liability for Content</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              As a service provider, we are responsible for our own content on these pages in accordance with Swiss law.
              However, we are not obligated to monitor transmitted or stored third-party information or to investigate
              circumstances that indicate illegal activity.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Obligations to remove or block the use of information under general legislation remain unaffected.
              However, liability in this regard is only possible from the time of knowledge of a specific infringement.
              Upon becoming aware of such violations, we will remove this content immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Liability for External Links</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Our website contains links to external third-party websites over whose content we have no control.
              Therefore, we cannot assume any liability for this external content. The respective provider or operator
              of the pages is always responsible for the content of the linked pages.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              The linked pages were checked for possible legal violations at the time of linking. Illegal content was
              not recognizable at the time of linking. However, permanent monitoring of the content of the linked pages
              is not reasonable without concrete evidence of an infringement. Upon becoming aware of legal violations,
              we will remove such links immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Copyright</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The content and works created by the site operators on these pages are subject to Swiss copyright law. The
              reproduction, editing, distribution, and any kind of use outside the limits of copyright require the
              written consent of the respective author or creator.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the
              content on this site was not created by the operator, the copyrights of third parties are respected. In
              particular, third-party content is marked as such.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon
              becoming aware of legal violations, we will remove such content immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Privacy Policy</h2>
            <p className="text-foreground/80 leading-relaxed">
              For information about how we collect, use, and protect your personal data in compliance with the Swiss
              Federal Act on Data Protection (FADP), please refer to our separate{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Image Credits</h2>
            <p className="text-foreground/80 leading-relaxed">
              Images used on this website are either owned by The Wanderbase, licensed from stock photo providers, or
              used with permission. Specific image credits are available upon request.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/" className="text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
