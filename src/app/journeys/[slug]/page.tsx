import { notFound } from 'next/navigation';
import Image from 'next/image';
import { JOURNEYS } from '@/data/travel-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Clock,
  Route,
  Sparkles,
  Bed,
  CheckCircle2,
  ArrowRight,
  Info,
} from 'lucide-react';

interface JourneyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return JOURNEYS.map((j) => ({
    slug: j.slug,
  }));
}

export async function generateMetadata({ params }: JourneyPageProps) {
  const { slug } = await params;
  const journey = JOURNEYS.find((j) => j.slug === slug);

  if (!journey) {
    return {
      title: 'Journey Not Found',
    };
  }

  return {
    title: `${journey.title} — KovilGo Curated Journey`,
    description: journey.subtitle,
  };
}

export default async function JourneyDetailPage({ params }: JourneyPageProps) {
  const { slug } = await params;
  const journey = JOURNEYS.find((j) => j.slug === slug);

  if (!journey) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full bg-brand-ivory">
      {/* Hero Banner */}
      <section className="relative h-[60vh] sm:h-[70vh] w-full overflow-hidden bg-brand-black">
        <Image
          src={journey.coverImage}
          alt={journey.title}
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-black/40 to-transparent" />

        <div className="absolute bottom-12 inset-x-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-brand-white space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="yellow" size="md">
                {journey.style}
              </Badge>
              <Badge variant="dark" size="md" className="border border-neutral-700">
                <Clock className="h-3 w-3 mr-1 inline" />
                {journey.duration}
              </Badge>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
              {journey.title}
            </h1>

            <p className="text-base sm:text-xl text-neutral-200 max-w-3xl font-medium">
              {journey.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Itinerary Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div>
              <h2 className="font-display text-3xl font-bold text-brand-black mb-4">
                Journey Overview
              </h2>
              <p className="text-base sm:text-lg text-brand-black/80 leading-relaxed">
                {journey.overview}
              </p>
            </div>

            {/* Stops Route Flow */}
            <div className="rounded-3xl bg-brand-white p-6 sm:p-8 border border-brand-grey/80 shadow-xs space-y-4">
              <h3 className="font-display text-xl font-bold text-brand-black flex items-center gap-2">
                <Route className="h-5 w-5 text-brand-yellow" />
                Planned Route Sequence
              </h3>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {journey.routeStops.map((stop, i) => (
                  <div key={stop} className="flex items-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-xl bg-brand-cloud text-xs font-bold text-brand-black border border-brand-grey/80">
                      {stop}
                    </span>
                    {i < journey.routeStops.length - 1 && (
                      <ArrowRight className="h-3.5 w-3.5 text-brand-black/40" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Day-by-Day Detailed Itinerary */}
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold text-brand-black">
                Day-by-Day Travel Schedule
              </h2>

              <div className="space-y-6">
                {journey.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="rounded-3xl bg-brand-white p-6 sm:p-8 border border-brand-grey/80 shadow-xs space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-brand-grey/60 pb-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-brand-black bg-brand-yellow px-3 py-1 rounded-lg">
                        Day {day.day}
                      </span>
                      <span className="text-xs font-bold text-brand-black/60 flex items-center gap-1.5">
                        <Bed className="h-4 w-4 text-brand-yellow" />
                        {day.stay}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-black">
                      {day.title}
                    </h3>

                    <p className="text-sm sm:text-base text-brand-black/75 leading-relaxed">
                      {day.description}
                    </p>

                    {day.darshanOrHighlight && (
                      <div className="rounded-xl bg-brand-cloud p-3.5 border border-brand-grey/60 flex items-start gap-2.5 text-xs">
                        <Sparkles className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-brand-black">Key Experience: </span>
                          <span className="text-brand-black/75">{day.darshanOrHighlight}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking & Enquiry Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="rounded-3xl bg-brand-white p-6 sm:p-8 border border-brand-grey/80 shadow-sm space-y-6 sticky top-28">
              <h3 className="font-display text-2xl font-bold text-brand-black pb-4 border-b border-brand-grey/60">
                Plan This Journey
              </h3>

              <div className="space-y-4 text-sm">
                <div className="rounded-2xl bg-brand-cloud p-4 border border-brand-grey/60 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-black/60 block">
                    Duration & Pace
                  </span>
                  <p className="font-display text-lg font-bold text-brand-black">{journey.duration}</p>
                  <p className="text-xs text-brand-black/70">
                    Paced for unhurried exploration and restful evenings.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-black/60 block">
                    What is Included in our Curation:
                  </span>
                  <ul className="space-y-2 text-xs text-brand-black/80">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
                      <span>Private AC transport tailored for your group</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
                      <span>Vetted heritage boutique stays with breakfast</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
                      <span>Verified local temple guides and artisan encounters</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
                      <span>Dedicated concierge contact throughout the route</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Notice regarding custom estimation */}
              <div className="rounded-xl bg-brand-yellow/15 p-3 text-[11px] text-brand-black/80 flex items-start gap-2">
                <Info className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5" />
                <span>
                  Pricing is customised based on your exact travel dates, vehicle preference, and
                  group size. No rigid flat-rate lock-in.
                </span>
              </div>

              <div className="pt-2 space-y-3">
                <Button href="/plan-your-journey" variant="primary" size="lg" className="w-full gap-2">
                  <Sparkles className="h-4 w-4" />
                  Request Custom Quote
                </Button>
                <p className="text-[11px] text-center text-brand-black/50">
                  Free consultation • No obligation to book
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
