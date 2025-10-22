import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy & Cookie Policy | The Wanderbase",
  description:
    "Learn how The Wanderbase collects, uses, and protects your personal information and how we use cookies.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/" className="text-primary hover:underline text-sm">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy & Cookie Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: October 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Welcome to The Wanderbase. We respect your privacy and are committed to protecting your personal data.
              This policy explains what data we collect, how we use it, and your rights under data protection laws such
              as the EU General Data Protection Regulation (GDPR).
            </p>
            <p className="text-foreground/80 leading-relaxed">
              This policy applies to visitors of our website and subscribers to our newsletter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Who We Are</h2>
            <p className="text-foreground/80 leading-relaxed mb-2">
              <strong>Data Controller:</strong> The Wanderbase
            </p>
            <p className="text-foreground/80 leading-relaxed mb-2">
              <strong>Contact Email:</strong> thewanderbase@gmail.com
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Website:</strong> www.thewanderbase.com
            </p>
            <p className="text-foreground/80 leading-relaxed">
              If you have questions or concerns about how we handle your personal data, contact us using the email
              above. You also have the right to lodge a complaint with your local data protection authority.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Data We Collect</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We may collect the following personal data when you use our website or subscribe to our content:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>
                <strong>Identity Data:</strong> First name, last name, or username (if provided).
              </li>
              <li>
                <strong>Contact Data:</strong> Email address.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type and version, operating system, time zone, and
                device type.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact with our website (pages visited, links
                clicked, time spent).
              </li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              We do not intentionally collect data from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. How We Use Your Data</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We process your data only where lawful and necessary. The table below outlines our purposes and legal
              bases:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground border-b border-border">
                      Purpose
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground border-b border-border">
                      Data Type
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground border-b border-border">
                      Legal Basis
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 text-sm text-foreground/80 border-b border-border">
                      Send you newsletters and updates
                    </td>
                    <td className="px-4 py-3 text-sm text-foreground/80 border-b border-border">Contact Data</td>
                    <td className="px-4 py-3 text-sm text-foreground/80 border-b border-border">Consent</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-foreground/80 border-b border-border">
                      Improve website performance and user experience
                    </td>
                    <td className="px-4 py-3 text-sm text-foreground/80 border-b border-border">
                      Technical and Usage Data
                    </td>
                    <td className="px-4 py-3 text-sm text-foreground/80 border-b border-border">Legitimate interest</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-foreground/80 border-b border-border">
                      Communicate with you about content or features
                    </td>
                    <td className="px-4 py-3 text-sm text-foreground/80 border-b border-border">Contact Data</td>
                    <td className="px-4 py-3 text-sm text-foreground/80 border-b border-border">Consent</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-foreground/80">Comply with legal obligations</td>
                    <td className="px-4 py-3 text-sm text-foreground/80">All data as required</td>
                    <td className="px-4 py-3 text-sm text-foreground/80">Legal obligation</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-foreground/80 leading-relaxed mt-4">
              You can withdraw consent at any time by unsubscribing or contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Newsletter Subscriptions</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              When you sign up for our newsletter, we collect your email address to send you hiking tips, travel
              inspiration, and related updates.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We use Gumroad to manage subscriptions. Your email and subscription data are processed under{" "}
              <a
                href="https://gumroad.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Gumroad&apos;s Privacy Policy
              </a>
              .
            </p>
            <p className="text-foreground/80 leading-relaxed">
              You can unsubscribe at any time via the link in any of our emails.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Analytics and Cookies</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We use analytics tools to understand and improve how visitors use our site. These services may use cookies
              or similar technologies.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Google Analytics (Google LLC)</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Collects anonymized visitor data such as page views, traffic sources, and session duration.</li>
                <li>Data may be transferred outside the EEA under Standard Contractual Clauses.</li>
                <li>
                  More info:{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Vercel Analytics (Vercel Inc.)</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Provides aggregate performance and usage metrics (e.g., load times, traffic volumes).</li>
                <li>Vercel may process limited technical data in the U.S.</li>
                <li>
                  More info:{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Vercel Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Cookies</h3>
              <p className="text-foreground/80 leading-relaxed">
                We use necessary cookies for core functionality and optional cookies for analytics. You can manage or
                disable cookies in your browser settings.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Data Sharing and Transfers</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">We do not sell or rent your data.</p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We may share limited information with trusted service providers such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Gumroad (email delivery)</li>
              <li>Google Analytics and Vercel (analytics)</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              Where these providers are located outside the EEA, we rely on approved safeguards like Standard
              Contractual Clauses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Data Retention</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We retain personal data only as long as needed for the purpose it was collected.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>
                <strong>Newsletter data:</strong> deleted within 30 days after unsubscribing.
              </li>
              <li>
                <strong>Analytics data:</strong> retained in aggregate, anonymized form only.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Your Rights</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Under GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Access your personal data</li>
              <li>Correct or update inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Withdraw consent at any time</li>
              <li>Request data portability</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              To exercise these rights, contact{" "}
              <a href="mailto:privacy@thewanderbase.com" className="text-primary hover:underline">
                privacy@thewanderbase.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Automated Decision-Making</h2>
            <p className="text-foreground/80 leading-relaxed">
              We do not use your data for automated decision-making or profiling.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Changes to This Policy</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may update this policy periodically. The latest version will always be available on this page, with the
              &quot;Last updated&quot; date shown above.
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
