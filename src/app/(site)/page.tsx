import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DESTINATIONS, JOURNEYS } from '@/data/travel-data';
import { HomeHeroCarousel } from '@/components/home/hero-carousel';
import { OffbeatDiscovery } from '@/components/home/offbeat-discovery';
import { FinalCta } from '@/components/home/final-cta';

const WHY_KOVILGO = [
  {
    number: '01',
    title: 'Beyond The Ordinary',
    description:
      'We champion underrated gems and offbeat circuits where you can truly connect with history without the suffocating crowds.',
  },
  {
    number: '02',
    title: 'Flexible Trip Planning',
    description:
      'Whether you prefer relaxed weekend retreats or multi-day temple trails, we adapt every itinerary around your travel pace.',
  },
  {
    number: '03',
    title: 'Thoughtfully Curated',
    description:
      'Handpicked stays, verified heritage guides, and pure-vegetarian comfort choices vetted for senior citizens and young families alike.',
  },
  {
    number: '04',
    title: 'Personalised Journeys',
    description:
      'No rigid tourist bus routines. Enjoy private comfortable vehicles, dedicated concierge guidance, and tailored recommendations.',
  },
];

export default function HomePage() {
  const featuredDestinations = DESTINATIONS.slice(0, 4);
  const dest0 = featuredDestinations[0] ?? DESTINATIONS[0];
  const sideDestinations = featuredDestinations.slice(1, 3);
  const dest3 = featuredDestinations[3] ?? DESTINATIONS[3] ?? dest0;

  const featuredJourney = JOURNEYS[0] ?? null;
  const secondaryJourney = JOURNEYS[1] ?? null;

  const journeyTeasers = [
    ...(secondaryJourney
      ? [
          {
            title: secondaryJourney.title,
            meta: `${secondaryJourney.duration} • ${secondaryJourney.style}`,
            ctaText: 'View Circuit',
            href: `/journeys/${secondaryJourney.slug}`,
          },
        ]
      : []),
    {
      title: 'Custom Multi-Day Heritage Circuits',
      meta: 'Bespoke Itinerary Planning',
      ctaText: 'Plan Your Journey',
      href: '/plan-journey',
    },
    {
      title: 'Browse All Curated Travel Circuits',
      meta: 'Complete Journey Catalog',
      ctaText: 'Explore All Journeys',
      href: '/journeys',
    },
  ].slice(0, 3);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* =========================================================================
          HERO CAROUSEL SECTION
          9-Slide dynamic destination and product showcase with 4s autoplay
         ========================================================================= */}
      <HomeHeroCarousel />

      {/* Trust & Distinctions Bar */}
      <div className="bg-brand-white border-b border-brand-grey/80 py-5 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm font-bold text-brand-black/80">
          <div className="flex items-center gap-2.5 justify-center sm:justify-start">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow shrink-0" />
            <span>Underrated Destinations</span>
          </div>
          <div className="flex items-center gap-2.5 justify-center sm:justify-start">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow shrink-0" />
            <span>Flexible Custom Planning</span>
          </div>
          <div className="flex items-center gap-2.5 justify-center sm:justify-start">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow shrink-0" />
            <span>Thoughtful Curation</span>
          </div>
          <div className="flex items-center gap-2.5 justify-center sm:justify-start">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow shrink-0" />
            <span>Personalised Journeys</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION C: KOVILGO OFFBEAT DISCOVERY
          Editorial-style destination discovery with ambient lighting & filters
         ========================================================================= */}
      <OffbeatDiscovery />

      {/* =========================================================================
          SECTION D: DESTINATION DISCOVERY — Asymmetric Editorial Layout
         ========================================================================= */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-brand-black text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="w-12 h-1 bg-brand-yellow mb-4" />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Handpicked Destinations
            </h2>
            <p className="mt-3 text-base sm:text-lg text-white/70">
              Every destination is thoroughly researched for cultural depth, architectural beauty, and tranquil accessibility.
            </p>
          </div>

          {dest0 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {/* Large Feature Card: Spans 2 cols, image background with text overlay */}
              <Link
                href={`/destinations/${dest0.slug}`}
                className="group relative block rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-brand-yellow/50 transition-colors lg:col-span-2 min-h-[420px] sm:min-h-[460px]"
              >
                <Image
                  src={dest0.heroImage}
                  alt={dest0.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                    <MapPin className="h-3.5 w-3.5 text-brand-yellow shrink-0" />
                    <span>
                      {dest0.state} • {dest0.region}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-brand-yellow transition-colors">
                    {dest0.name}
                  </h3>
                  <p className="mt-2 text-sm text-white/80 line-clamp-2 max-w-xl">
                    {dest0.tagline}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-yellow mt-4 group-hover:underline">
                    <span>Explore Destination</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>

              {/* Two Stacked Smaller Cards: Horizontal layout (image left, text right) */}
              <div className="lg:col-span-1 flex flex-col gap-6 justify-between">
                {sideDestinations.map((dest) => (
                  <Link
                    key={dest.slug}
                    href={`/destinations/${dest.slug}`}
                    className="group flex flex-col sm:flex-row rounded-2xl overflow-hidden border border-white/10 hover:border-brand-yellow/50 transition-colors bg-brand-black-muted flex-1"
                  >
                    <div className="relative w-full sm:w-44 h-48 sm:h-auto shrink-0 overflow-hidden">
                      <Image
                        src={dest.heroImage}
                        alt={dest.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 640px) 100vw, 200px"
                      />
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-white/70 uppercase tracking-wider mb-1.5">
                          <MapPin className="h-3.5 w-3.5 text-brand-yellow shrink-0" />
                          <span>{dest.state}</span>
                        </div>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-brand-yellow transition-colors leading-snug">
                          {dest.name}
                        </h3>
                        <p className="mt-1.5 text-xs text-white/70 line-clamp-2">
                          {dest.tagline}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-yellow mt-3 group-hover:underline">
                        <span>Explore Guide</span>
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Row Below: One wide horizontal card spanning full width with text overlay */}
          {dest3 && (
            <div className="mt-6">
              <Link
                href={`/destinations/${dest3.slug}`}
                className="group relative block rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-brand-yellow/50 transition-colors h-[280px] sm:h-[300px]"
              >
                <Image
                  src={dest3.heroImage}
                  alt={dest3.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/95 via-black/75 sm:via-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 top-0 p-6 sm:p-10 flex flex-col justify-end max-w-2xl">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                    <MapPin className="h-3.5 w-3.5 text-brand-yellow shrink-0" />
                    <span>
                      {dest3.state} • {dest3.region}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-brand-yellow transition-colors">
                    {dest3.name}
                  </h3>
                  <p className="mt-2 text-sm text-white/80 line-clamp-2">
                    {dest3.tagline}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-yellow mt-4 group-hover:underline">
                    <span>Explore Destination</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>
          )}

          <div className="mt-14 text-center">
            <Button href="/destinations" variant="primary" size="lg" className="gap-2">
              Browse All Curated Destinations
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION E: JOURNEY SPOTLIGHT — Editorial travel collection
         ========================================================================= */}
      {featuredJourney && (
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-brand-ivory border-t border-brand-grey/50">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl mb-10 sm:mb-12">
              <div className="w-12 h-1 bg-brand-yellow mb-4" />
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-black tracking-tight">
                Curated Journeys
              </h2>
              <p className="mt-3 text-base sm:text-lg text-brand-black/70">
                Thoughtfully sequenced multi-day routes across sacred temples, artisan villages, and coastal sanctuaries.
              </p>
            </div>

            {/* Full-width Cinematic Card */}
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] min-h-[380px] rounded-2xl sm:rounded-3xl overflow-hidden group shadow-lg">
              <Image
                src={featuredJourney.coverImage}
                alt={featuredJourney.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent sm:bg-gradient-to-tr sm:from-black/90 sm:via-black/40 sm:to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 max-w-2xl">
                <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-yellow mb-2">
                  {featuredJourney.duration} • {featuredJourney.style}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {featuredJourney.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 mt-2.5">
                  Route: {featuredJourney.routeStops.join(' → ')}
                </p>
                <div className="mt-5">
                  <Link
                    href={`/journeys/${featuredJourney.slug}`}
                    className="inline-flex items-center gap-2 text-brand-yellow hover:text-brand-yellow-hover text-sm sm:text-base font-semibold group/link transition-colors"
                  >
                    <span>View Itinerary</span>
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Teaser Links Row */}
            <div className="mt-10 pt-8 border-t border-brand-grey/80 grid grid-cols-1 md:grid-cols-3 gap-6">
              {journeyTeasers.map((teaser) => (
                <Link
                  key={teaser.title}
                  href={teaser.href}
                  className="group flex flex-col justify-between p-5 rounded-2xl hover:bg-black/5 transition-colors"
                >
                  <div>
                    <span className="text-xs uppercase tracking-wider text-brand-black/50 font-semibold block">
                      {teaser.meta}
                    </span>
                    <h4 className="font-display text-lg sm:text-xl font-bold text-brand-black group-hover:text-brand-yellow-hover mt-1.5 transition-colors">
                      {teaser.title}
                    </h4>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-brand-black group-hover:text-brand-yellow-hover">
                    <span>{teaser.ctaText}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          SECTION F: WHY KOVILGO — Distinctive Split Layout & Manifesto
         ========================================================================= */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-brand-black text-white border-t border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left side (40% / lg:col-span-5) */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="w-12 h-1 bg-brand-yellow mb-4" />
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                What makes KovilGo different
              </h2>
              <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed max-w-md">
                We blend cultural depth with contemporary ease, designed for mindful travellers, couples, and multi-generational families.
              </p>
            </div>

            {/* Right side (60% / lg:col-span-7): Numbered manifesto list */}
            <div className="lg:col-span-7 divide-y divide-white/10">
              {WHY_KOVILGO.map((item) => (
                <div key={item.number} className="py-8 first:pt-0 last:pb-0 flex items-start gap-6 sm:gap-8">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-brand-yellow shrink-0">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-base text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION G: PREMIUM FINAL JOURNEY CTA
          Cinematic full-width closing experience
         ========================================================================= */}
      <FinalCta />
    </div>
  );
}
