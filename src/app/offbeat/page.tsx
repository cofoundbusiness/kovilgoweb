import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SectionHeading } from '@/components/ui/section-heading';
import { OFFBEAT_SPOTS } from '@/data/travel-data';
import {
  Compass,
  Sparkles,
  MapPin,
  Trees,
  Hammer,
  Castle,
  Bell,
  ArrowRight,
} from 'lucide-react';

export const metadata = {
  title: 'KovilGo OFFBEAT — Underrated Travel Discovery',
  description:
    'Discover lesser-known destinations, hidden shrines, rural artisan trails, and experiences beyond mainstream tourism across India.',
};

const CATEGORIES = [
  {
    title: 'Hidden Shrines',
    description: 'Ancient sanctums nestled in quiet rural groves away from long commercial queues.',
    icon: Compass,
    count: '14+ Curated Spots',
  },
  {
    title: 'Sacred Groves',
    description: 'Biodiverse community-protected forests with terracotta guardian statues.',
    icon: Trees,
    count: '8+ Forest Preserves',
  },
  {
    title: 'Artisan Trails',
    description: 'Living workshops where generational masters practice lost-wax casting and handmade tiles.',
    icon: Hammer,
    count: '12+ Craft Clusters',
  },
  {
    title: 'Architectural Marvels',
    description: 'Underrated stepwells, rock-cut caverns, and sandstone gorges rarely featured on standard packages.',
    icon: Castle,
    count: '10+ Heritage Sites',
  },
];

export default function OffbeatPage() {

  return (
    <div className="flex flex-col w-full">
      {/* =========================================================================
          OFFBEAT HERO
          Bold, modern, adventurous dark-toned hero
         ========================================================================= */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-3.5 py-1 text-xs font-black tracking-wider text-brand-black uppercase shadow-xs mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              KovilGo Signature Discovery
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Skip the tourist traps. <br />
              <span className="text-brand-yellow">Discover the underrated.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-neutral-300 leading-relaxed font-medium">
              KovilGo OFFBEAT is our dedicated travel discovery engine. We map forgotten heritage
              sanctuaries, living artisan hamlets, and serene natural trails that tour buses drive
              right past.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button href="#discovery-spots" variant="primary" size="xl" className="gap-2">
                <Compass className="h-5 w-5" />
                Explore Curated Spots
              </Button>
              <Button
                href="/plan-your-journey"
                variant="outline"
                size="xl"
                className="border-neutral-700 text-white hover:bg-neutral-800 hover:text-brand-yellow"
              >
                Plan an Offbeat Journey
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE DISCOVERY CONCEPT & CATEGORIES
         ========================================================================= */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-brand-ivory">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="The OFFBEAT Way"
            title="How We Classify Underrated Experiences"
            subtitle="Every OFFBEAT location satisfies three core criteria: authentic cultural roots, peaceful contemplation, and respectful community preservation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="rounded-2xl bg-brand-white p-7 border border-brand-grey/80 shadow-xs hover:border-brand-yellow transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-12 w-12 rounded-xl bg-brand-yellow/15 flex items-center justify-center text-brand-black mb-5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-brand-black mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-brand-black/70 leading-relaxed mb-4">
                      {cat.description}
                    </p>
                  </div>
                  <span className="text-xs font-black tracking-wider text-brand-black uppercase pt-3 border-t border-brand-grey/50">
                    {cat.count}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CURATED OFFBEAT SPOTS (VISUAL CARDS)
         ========================================================================= */}
      <section id="discovery-spots" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-brand-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Curated Field Notes"
            title="Featured Underrated Experiences"
            subtitle="Glimpse a few of the places waiting beyond the usual highway corridors."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {OFFBEAT_SPOTS.map((spot) => (
              <div
                key={spot.id}
                className="group rounded-3xl bg-brand-cloud border border-brand-grey overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-brand-yellow flex flex-col sm:flex-row"
              >
                <div className="relative h-60 sm:h-auto sm:w-2/5 overflow-hidden">
                  <Image
                    src={spot.image}
                    alt={spot.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="dark" size="sm">
                      {spot.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 sm:w-3/5 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="flex items-center gap-1.5 text-xs font-bold text-brand-black/60 uppercase tracking-wider mb-1">
                      <MapPin className="h-3.5 w-3.5 text-brand-yellow" />
                      {spot.location}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-brand-black leading-snug">
                      {spot.name}
                    </h3>
                    <p className="mt-2 text-xs text-brand-black/75 leading-relaxed">
                      {spot.shortDescription}
                    </p>
                  </div>

                  <div className="rounded-xl bg-brand-white p-3 border border-brand-grey/60 text-xs">
                    <span className="font-bold text-brand-black block mb-0.5">
                      Why it is underrated:
                    </span>
                    <span className="text-brand-black/70">{spot.whyUnderrated}</span>
                  </div>

                  <div className="pt-2 text-xs font-semibold text-brand-black/80 flex items-center justify-between border-t border-brand-grey/50">
                    <span className="italic text-brand-black/60 truncate max-w-[65%]">Tip: {spot.travelTip}</span>
                    <Link
                      href={`/offbeat/${spot.slug}`}
                      className="text-xs font-bold text-brand-black hover:text-brand-yellow-hover inline-flex items-center gap-1 shrink-0"
                    >
                      <span>Explore</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY EXPLORE UNDERRATED PLACES (PHILOSOPHY)
         ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-ivory border-t border-brand-grey/60">
        <div className="mx-auto max-w-5xl text-center space-y-8">
          <Badge variant="subtle">Travel Mindset</Badge>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-brand-black leading-tight max-w-3xl mx-auto">
            Why We Champion Places Away From The Crowds
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left pt-6">
            <div className="bg-brand-white p-6 rounded-2xl border border-brand-grey/80 shadow-xs">
              <span className="font-display text-2xl font-bold text-brand-yellow">01.</span>
              <h3 className="font-display text-lg font-bold text-brand-black mt-2 mb-2">
                Mindful Contemplation
              </h3>
              <p className="text-xs text-brand-black/70 leading-relaxed">
                Temples and monuments were designed as spaces of peaceful reflection, not noisy
                selfie scrums. We help you experience them in dignified silence.
              </p>
            </div>

            <div className="bg-brand-white p-6 rounded-2xl border border-brand-grey/80 shadow-xs">
              <span className="font-display text-2xl font-bold text-brand-yellow">02.</span>
              <h3 className="font-display text-lg font-bold text-brand-black mt-2 mb-2">
                Direct Artisan Support
              </h3>
              <p className="text-xs text-brand-black/70 leading-relaxed">
                By visiting generational bronze casters, terracotta sculptors, and weavers in their
                home villages, your travel directly sustains endangered indigenous crafts.
              </p>
            </div>

            <div className="bg-brand-white p-6 rounded-2xl border border-brand-grey/80 shadow-xs">
              <span className="font-display text-2xl font-bold text-brand-yellow">03.</span>
              <h3 className="font-display text-lg font-bold text-brand-black mt-2 mb-2">
                Unrushed Discovery
              </h3>
              <p className="text-xs text-brand-black/70 leading-relaxed">
                Travel at your own rhythm without arbitrary 15-minute tour bus whistles. Linger by
                riverbanks and discuss architectural lore with local elders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          COMING SOON: AUDIO GUIDES & GPS TRAIL PASS
         ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-cloud border-t border-brand-grey">
        <div className="mx-auto max-w-4xl rounded-3xl bg-brand-white border-2 border-dashed border-brand-grey p-8 sm:p-12 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow/20 text-brand-black">
            <Bell className="h-6 w-6" />
          </div>
          <span className="text-xs font-black tracking-widest text-brand-yellow-hover uppercase">
            Product Roadmap 2026
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-black mt-2">
            KovilGo OFFBEAT Audio Companion (Coming Soon)
          </h3>
          <p className="mt-3 text-sm text-brand-black/70 max-w-xl mx-auto leading-relaxed">
            We are recording authentic folklore, architectural breakdowns, and heritage narrations
            with historians. When fully operational, you will be able to unlock offline GPS audio
            guides right from your smartphone.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="outline" size="sm">
              Register for Early Access Notifications
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL OFFBEAT CTA
         ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-black text-brand-white text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Have a specific hidden region in mind?
          </h2>
          <p className="text-base text-neutral-300">
            Tell our concierge team. We design bespoke, private itineraries tailored around your
            passions for architecture, craft, or tranquil landscapes.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/plan-your-journey" variant="primary" size="xl">
              Plan an Offbeat Trip
            </Button>
            <Button href="/destinations" variant="outline" size="xl" className="border-neutral-700 text-white hover:bg-neutral-800 hover:text-brand-yellow">
              View All Destinations
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
