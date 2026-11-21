import Link from 'next/link';
import { KovilGoLogo } from '@/components/ui/logo';
import { Instagram, Mail, ArrowUpRight, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-brand-white border-t border-neutral-900 pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-neutral-900">
          {/* BRAND COLUMN (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-block">
              <KovilGoLogo variant="transparent" size="lg" className="brightness-0 invert" />
            </div>

            <p className="text-xs font-black tracking-widest text-brand-yellow uppercase">
              EVERY JOURNEY, BRIGHTER.
            </p>

            <p className="text-sm leading-relaxed text-neutral-400 max-w-sm">
              KovilGo is a travel discovery and journey-planning platform curating personalised
              holidays, sacred heritage trails and underrated experiences across India.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-neutral-300 hover:bg-brand-yellow hover:text-brand-black transition-all"
                aria-label="KovilGo on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="mailto:concierge@kovilgo.com"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-neutral-300 hover:bg-brand-yellow hover:text-brand-black transition-all"
                aria-label="Email Concierge"
              >
                <Mail className="h-5 w-5" />
              </a>

              <Link
                href="/contact"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-neutral-300 hover:bg-brand-yellow hover:text-brand-black transition-all"
                aria-label="Chat with Concierge"
              >
                <MessageCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* DISCOVER COLUMN (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-sm font-bold text-white tracking-widest uppercase">
              Discover
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/offbeat"
                  className="text-neutral-400 hover:text-brand-yellow transition-colors inline-flex items-center gap-1.5"
                >
                  <span>KovilGo OFFBEAT</span>
                  <span className="text-[10px] bg-brand-yellow text-brand-black px-1.5 py-0.2 rounded font-black tracking-normal">
                    FEATURED
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-neutral-400 hover:text-brand-yellow transition-colors">
                  All Destinations
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-neutral-400 hover:text-brand-yellow transition-colors">
                  Luxury Escapes
                </Link>
              </li>
              <li>
                <Link href="/journeys" className="text-neutral-400 hover:text-brand-yellow transition-colors">
                  Signature Journeys
                </Link>
              </li>
              <li>
                <Link href="/plan-your-journey" className="text-neutral-400 hover:text-brand-yellow transition-colors">
                  Group Getaways
                </Link>
              </li>
              <li>
                <Link
                  href="/plan-your-journey"
                  className="text-neutral-400 hover:text-brand-yellow transition-colors inline-flex items-center gap-1 font-semibold"
                >
                  <span>Plan Your Journey</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-brand-yellow" />
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY COLUMN (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display text-sm font-bold text-white tracking-widest uppercase">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-brand-yellow transition-colors">
                  About KovilGo
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-brand-yellow transition-colors">
                  Contact & Concierge
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-neutral-400 hover:text-brand-yellow transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <a
                  href="/brand/guidelines/kovilgo-brand-guidelines.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-brand-yellow transition-colors inline-flex items-center gap-1"
                >
                  <span>Brand Guidelines</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* SUPPORT & LEGAL COLUMN (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-sm font-bold text-white tracking-widest uppercase">
              Support & Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-brand-yellow transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-neutral-400 hover:text-brand-yellow transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-neutral-400 hover:text-brand-yellow transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li className="pt-2 text-xs text-neutral-500 leading-relaxed">
                Dedicated personal concierge available 7 days a week for travel design and private itinerary assistance.
              </li>
            </ul>
          </div>
        </div>

        {/* FOOTER BOTTOM BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {currentYear} KovilGo. All rights reserved.</p>

          <div className="flex items-center space-x-6 text-xs text-neutral-400">
            <Link href="/privacy" className="hover:text-brand-yellow transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-brand-yellow transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-brand-yellow transition-colors">
              Support
            </Link>
          </div>

          <p className="flex items-center gap-2">
            <span className="text-neutral-500">Official Brand:</span>
            <span className="font-bold text-neutral-200 tracking-wider">EVERY JOURNEY, BRIGHTER.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
