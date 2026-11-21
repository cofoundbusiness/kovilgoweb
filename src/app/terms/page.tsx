import { Badge } from '@/components/ui/badge';
import { AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service (Draft) — KovilGo',
  description: 'Review the draft Terms of Service for the KovilGo platform.',
};

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-brand-ivory min-h-screen">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="text-center space-y-4">
          <Badge variant="outline">Legal Documentation</Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-black">
            Terms of Service
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
              These Terms of Service are a draft structural framework for the KovilGo platform.
              They are subject to formal legal review and regulatory localization prior to live
              booking or commercial payment enablement.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-brand-white p-8 sm:p-12 border border-brand-grey/80 shadow-xs space-y-8 text-sm text-brand-black/80 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-brand-black">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the KovilGo website and travel discovery tools, you acknowledge
              that you have read and agree to these Terms. If you disagree with any part, please
              discontinue usage of the site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-brand-black">
              2. Nature of Services (Phase 1 Scope)
            </h2>
            <p>
              KovilGo currently operates as a travel discovery and editorial itinerary planning
              interface. Forms submitted during this phase serve as custom consultation requests and
              do not constitute confirmed legal bookings or monetary transactions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-brand-black">
              3. Intellectual Property
            </h2>
            <p>
              The KovilGo name, handwritten wordmark logo, &quot;Every Journey, Brighter&quot; tagline,
              OFFBEAT product branding, and website design are proprietary assets. Unauthorized
              reproduction, imitation, or redistribution is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-brand-black">
              4. Respect for Sacred Sites & Local Customs
            </h2>
            <p>
              Travellers utilizing our recommendations are expected to respect local temple dress
              codes, sanctum protocols, photography restrictions, and community grove guidelines.
              KovilGo promotes mindful, respectful cultural engagement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-brand-black">
              5. Governing Law & Inquiries
            </h2>
            <p>
              These draft terms are subject to the laws of India. For questions or legal feedback,
              contact{' '}
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
