import { Badge } from '@/components/ui/badge';
import { AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy (Draft) — KovilGo',
  description: 'Review the draft Privacy Policy for the KovilGo platform.',
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-brand-ivory min-h-screen">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="text-center space-y-4">
          <Badge variant="outline">Legal Documentation</Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-black">
            Privacy Policy
          </h1>
          <p className="text-xs uppercase font-bold tracking-widest text-brand-black/60">
            Last Updated: November 2026 • Phase 1 Review Version
          </p>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="rounded-2xl bg-brand-yellow/15 border border-brand-yellow/50 p-6 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" />
          <div className="text-xs text-brand-black/80 space-y-1">
            <span className="font-bold block">Draft Document for Review:</span>
            <p>
              This Privacy Policy is a draft architectural template prepared for the KovilGo web
              platform frontend. It must be formally reviewed and finalized by legal counsel prior to
              production deployment and commercial payment operations.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-brand-white p-8 sm:p-12 border border-brand-grey/80 shadow-xs space-y-8 text-sm text-brand-black/80 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-brand-black">1. Overview</h2>
            <p>
              KovilGo (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the travel discovery
              platform kovilgo.com. We respect your privacy and are committed to protecting personal
              information you share with us when exploring destinations or planning bespoke journeys.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-brand-black">
              2. Information We Collect
            </h2>
            <p>When you submit a journey planning enquiry or contact form, we may collect:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Contact details (name, email address, phone number).</li>
              <li>Trip preferences (target dates, party size, dietary needs, preferred destinations).</li>
              <li>Technical usage metrics (browser type, session duration, referral URL).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-brand-black">
              3. How We Use Your Information
            </h2>
            <p>Collected information is utilized strictly to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Prepare and share personalised journey quotations and itinerary proposals.</li>
              <li>Communicate regarding concierge questions and special accommodations.</li>
              <li>Enhance website performance, Core Web Vitals, and accessibility.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-brand-black">
              4. Data Retention & Third Parties
            </h2>
            <p>
              We do not sell, rent, or trade your personal information. In future development phases,
              data required for payment processing (Cashfree) or SMS notifications (MSG91) will be
              handled under secure, encrypted industry standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-brand-black">5. Contact Us</h2>
            <p>
              For questions regarding this draft policy or personal data privacy, email our desk at{' '}
              <a href="mailto:concierge@kovilgo.com" className="font-bold underline text-brand-black">
                concierge@kovilgo.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
