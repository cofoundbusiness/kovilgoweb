import Image from 'next/image';
import { JOURNEYS } from '@/data/travel-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Route, ArrowRight, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Curated Journeys — Multi-Day Heritage & Offbeat Circuits',
  description:
    'Experience thoughtfully planned, slow-paced journeys across Southern and Central India with comfortable pacing and authentic cultural immersion.',
};

export default function JourneysPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-brand-ivory min-h-screen">
      <div className="mx-auto max-w-7xl space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="yellow" className="mb-2">
            Multi-Day Circuits
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-black">
            Curated Journeys, Tailored Pacing
          </h1>
          <p className="text-base sm:text-lg text-brand-black/70 leading-relaxed">
            Our journeys are designed around slow discovery rather than exhausting checklists.
            Enjoy private transfers, vetted heritage stays, and ample time to soak in the atmosphere.
          </p>
        </div>

        {/* Journeys List */}
        <div className="space-y-12">
          {JOURNEYS.map((journey, idx) => (
            <div
              key={journey.slug}
              className="rounded-3xl bg-brand-white border border-brand-grey/80 overflow-hidden shadow-xs hover:border-brand-yellow/60 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-auto overflow-hidden">
                <Image
                  src={journey.coverImage}
                  alt={journey.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 left-4">
                  <Badge variant="yellow" size="md">
                    {journey.style}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow">
                    {journey.duration}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="hidden lg:flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-black/60 bg-brand-cloud px-3 py-1 rounded-lg">
                      <Clock className="h-3.5 w-3.5 text-brand-yellow" />
                      {journey.duration}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-black/50">
                      Circuit #{idx + 1}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-black leading-snug">
                    {journey.title}
                  </h2>

                  <p className="text-sm sm:text-base text-brand-black/75 leading-relaxed">
                    {journey.subtitle}
                  </p>

                  {/* Route Stops */}
                  <div className="pt-2">
                    <span className="text-xs font-bold text-brand-black/60 uppercase tracking-widest block mb-2">
                      Key Destinations on this Route:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {journey.routeStops.map((stop) => (
                        <span
                          key={stop}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-brand-cloud text-xs font-bold text-brand-black border border-brand-grey/60"
                        >
                          <Route className="h-3 w-3 text-brand-yellow" />
                          {stop}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights Bullet points */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-brand-black/60 uppercase tracking-widest block">
                      Journey Highlights:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-brand-black/80 font-medium">
                      {journey.highlights.slice(0, 4).map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow mt-1.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-grey/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-brand-black/60 font-medium text-center sm:text-left">
                    Customisable dates, group size, and vehicle preferences.
                  </span>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <Button href={`/journeys/${journey.slug}`} variant="primary" size="md" className="w-full sm:w-auto gap-2">
                      View Full Day-by-Day Itinerary
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customization Note Banner */}
        <div className="rounded-3xl bg-brand-black text-brand-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow">
              Bespoke Trip Planning
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Want to combine destinations or modify travel days?
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Every KovilGo journey is fully modular. We adapt accommodation types, travel pace,
              and special darshan arrangements to suit your party.
            </p>
          </div>
          <Button href="/plan-your-journey" variant="primary" size="xl" className="shrink-0 gap-2">
            <Sparkles className="h-5 w-5" />
            Plan a Custom Journey
          </Button>
        </div>
      </div>
    </div>
  );
}
