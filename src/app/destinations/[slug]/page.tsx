import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { DESTINATIONS } from '@/data/travel-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  MapPin,
  Calendar,
  Clock,
  Plane,
  Sparkles,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface DestinationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DESTINATIONS.map((dest) => ({
    slug: dest.slug,
  }));
}

export async function generateMetadata({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = DESTINATIONS.find((d) => d.slug === slug);

  if (!destination) {
    return {
      title: 'Destination Not Found',
    };
  }

  return {
    title: `${destination.name} — KovilGo Travel Guide`,
    description: destination.tagline,
  };
}

export default async function DestinationDetailPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = DESTINATIONS.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  const relatedDestinations = DESTINATIONS.filter((d) => d.slug !== destination.slug).slice(0, 2);

  return (
    <div className="flex flex-col w-full bg-brand-ivory">
      {/* Hero Banner */}
      <section className="relative h-[65vh] sm:h-[75vh] w-full overflow-hidden bg-brand-black">
        <Image
          src={destination.heroImage}
          alt={destination.name}
          fill
          priority
          className="object-cover opacity-85"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-black/40 to-transparent" />

        <div className="absolute bottom-12 inset-x-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-brand-white space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="yellow" size="md">
                {destination.category}
              </Badge>
              {destination.isOffbeat && (
                <Badge variant="dark" size="md" className="border border-brand-yellow/40">
                  KovilGo OFFBEAT
                </Badge>
              )}
              <span className="text-xs uppercase font-bold text-neutral-300 ml-2 tracking-widest flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-brand-yellow" />
                {destination.state} • {destination.region}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
              {destination.name}
            </h1>

            <p className="text-lg sm:text-xl text-neutral-200 max-w-3xl font-medium">
              {destination.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div>
              <h2 className="font-display text-3xl font-bold text-brand-black mb-4">
                About this Destination
              </h2>
              <p className="text-base sm:text-lg text-brand-black/80 leading-relaxed">
                {destination.overview}
              </p>
            </div>

            {/* Highlights */}
            <div className="rounded-3xl bg-brand-white p-8 border border-brand-grey/80 shadow-xs space-y-6">
              <h3 className="font-display text-2xl font-bold text-brand-black flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand-yellow" />
                Curated Highlights & Experiences
              </h3>
              <ul className="grid grid-cols-1 gap-4">
                {destination.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-brand-black/80">
                    <CheckCircle2 className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Local Culture & Etiquette Tip */}
            <div className="rounded-2xl bg-brand-yellow/15 border border-brand-yellow/40 p-6 space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-brand-black flex items-center gap-1.5">
                <ShieldAlert className="h-4 w-4" />
                Mindful Travel & Local Etiquette
              </span>
              <p className="text-sm text-brand-black/80 leading-relaxed font-medium">
                {destination.localCultureTip}
              </p>
            </div>
          </div>

          {/* Quick Info Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="rounded-3xl bg-brand-white p-6 sm:p-8 border border-brand-grey/80 shadow-sm space-y-6 sticky top-28">
              <h3 className="font-display text-xl font-bold text-brand-black pb-4 border-b border-brand-grey/60">
                Trip Essentials
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs uppercase font-bold text-brand-black/50 tracking-wider flex items-center gap-1 mb-1">
                    <Clock className="h-3.5 w-3.5" /> Ideal Duration
                  </span>
                  <p className="font-bold text-brand-black text-base">{destination.idealDuration}</p>
                </div>

                <div>
                  <span className="text-xs uppercase font-bold text-brand-black/50 tracking-wider flex items-center gap-1 mb-1">
                    <Calendar className="h-3.5 w-3.5" /> Best Season to Visit
                  </span>
                  <p className="font-bold text-brand-black text-base">{destination.bestSeason}</p>
                </div>

                <div>
                  <span className="text-xs uppercase font-bold text-brand-black/50 tracking-wider flex items-center gap-1 mb-1">
                    <Plane className="h-3.5 w-3.5" /> Nearest Transport Hub
                  </span>
                  <p className="font-bold text-brand-black text-base">{destination.nearestHub}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-grey/60 space-y-3">
                <Button href="/plan-your-journey" variant="primary" size="lg" className="w-full gap-2">
                  <Sparkles className="h-4 w-4" />
                  Plan a Journey Here
                </Button>
                <p className="text-[11px] text-center text-brand-black/60 leading-tight">
                  Custom routes, private transport & boutique stays curated around your dates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Destinations */}
        {relatedDestinations.length > 0 && (
          <div className="mt-20 pt-16 border-t border-brand-grey/80">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-black mb-8">
              Other Inspiring Places
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedDestinations.map((rel) => (
                <Card key={rel.slug} className="group overflow-hidden flex flex-col justify-between">
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative h-48 sm:h-auto sm:w-2/5 overflow-hidden">
                      <Image
                        src={rel.heroImage}
                        alt={rel.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </div>
                    <CardContent className="p-6 sm:w-3/5 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold text-brand-black/60 uppercase tracking-wider block mb-1">
                          {rel.state}
                        </span>
                        <h3 className="font-display text-xl font-bold text-brand-black group-hover:text-brand-yellow-hover transition-colors">
                          {rel.name}
                        </h3>
                        <p className="mt-2 text-xs text-brand-black/70 leading-relaxed line-clamp-2">
                          {rel.tagline}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-brand-grey/60">
                        <Link
                          href={`/destinations/${rel.slug}`}
                          className="text-xs font-bold text-brand-black hover:text-brand-yellow-hover inline-flex items-center gap-1"
                        >
                          View Guide <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
