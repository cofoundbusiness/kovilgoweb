import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { OFFBEAT_SPOTS } from '@/data/travel-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Calendar,
  Clock,
  Sparkles,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Compass,
} from 'lucide-react';

interface OffbeatSlugPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return OFFBEAT_SPOTS.map((spot) => ({
    slug: spot.slug,
  }));
}

export async function generateMetadata({ params }: OffbeatSlugPageProps) {
  const { slug } = await params;
  const spot = OFFBEAT_SPOTS.find((s) => s.slug === slug);

  if (!spot) {
    return {
      title: 'Offbeat Spot Not Found — KovilGo',
    };
  }

  return {
    title: `${spot.name} — KovilGo OFFBEAT`,
    description: spot.shortDescription,
  };
}

export default async function OffbeatDetailPage({ params }: OffbeatSlugPageProps) {
  const { slug } = await params;
  const spot = OFFBEAT_SPOTS.find((s) => s.slug === slug);

  if (!spot) {
    notFound();
  }

  const relatedSpots = OFFBEAT_SPOTS.filter((s) => s.slug !== spot.slug).slice(0, 3);

  return (
    <div className="flex flex-col w-full bg-brand-ivory">
      {/* Hero Banner */}
      <section className="relative h-[60vh] sm:h-[70vh] w-full overflow-hidden bg-brand-black">
        <Image
          src={spot.image}
          alt={spot.name}
          fill
          priority
          className="object-cover opacity-85"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-black/45 to-transparent" />

        <div className="absolute bottom-10 inset-x-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-brand-white space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="yellow" size="md">
                KovilGo OFFBEAT
              </Badge>
              <Badge variant="dark" size="md">
                {spot.category}
              </Badge>
              <span className="text-xs uppercase font-bold text-neutral-300 ml-2 tracking-widest flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-brand-yellow" />
                {spot.location}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
              {spot.name}
            </h1>

            <p className="text-lg sm:text-xl text-neutral-200 max-w-3xl font-medium leading-relaxed">
              {spot.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Why It Is Underrated */}
            <div className="rounded-3xl bg-brand-black text-brand-white p-8 sm:p-10 border border-neutral-800 shadow-xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-yellow/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 space-y-3">
                <span className="text-xs font-black tracking-widest text-brand-yellow uppercase flex items-center gap-2">
                  <Compass className="h-4 w-4" />
                  Why Most Travellers Miss This
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  The Story Behind the Solitude
                </h2>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed pt-2">
                  {spot.whyUnderrated}
                </p>
              </div>
            </div>

            {/* Curated Highlights */}
            {spot.highlights && spot.highlights.length > 0 && (
              <div className="rounded-3xl bg-brand-white p-8 border border-brand-grey/80 shadow-xs space-y-6">
                <h3 className="font-display text-2xl font-bold text-brand-black flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-brand-yellow" />
                  Key Experiences & Field Discoveries
                </h3>
                <ul className="grid grid-cols-1 gap-4">
                  {spot.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-brand-black/80">
                      <CheckCircle2 className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Local Travel Tip & Etiquette */}
            <div className="rounded-2xl bg-brand-yellow/15 border border-brand-yellow/40 p-6 space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-brand-black flex items-center gap-1.5">
                <ShieldAlert className="h-4 w-4" />
                Insider Field Tip & Local Etiquette
              </span>
              <p className="text-sm text-brand-black/80 leading-relaxed font-medium">
                {spot.travelTip}
              </p>
            </div>
          </div>

          {/* Quick Info Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="rounded-3xl bg-brand-white p-6 sm:p-8 border border-brand-grey/80 shadow-sm space-y-6 sticky top-28">
              <h3 className="font-display text-xl font-bold text-brand-black pb-4 border-b border-brand-grey/60">
                Experience Essentials
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs uppercase font-bold text-brand-black/50 tracking-wider flex items-center gap-1 mb-1">
                    <Clock className="h-3.5 w-3.5" /> Recommended Duration
                  </span>
                  <p className="font-bold text-brand-black text-base">{spot.idealDuration || '1 to 2 Days'}</p>
                </div>

                <div>
                  <span className="text-xs uppercase font-bold text-brand-black/50 tracking-wider flex items-center gap-1 mb-1">
                    <Calendar className="h-3.5 w-3.5" /> Best Season to Visit
                  </span>
                  <p className="font-bold text-brand-black text-base">{spot.bestSeason || 'October to March'}</p>
                </div>

                <div>
                  <span className="text-xs uppercase font-bold text-brand-black/50 tracking-wider flex items-center gap-1 mb-1">
                    <MapPin className="h-3.5 w-3.5" /> State & Region
                  </span>
                  <p className="font-bold text-brand-black text-base">{spot.location}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-grey/60 space-y-3">
                <Button href="/plan-your-journey" variant="primary" size="lg" className="w-full gap-2">
                  <Sparkles className="h-4 w-4" />
                  Plan Journey Here
                </Button>
                <p className="text-[11px] text-center text-brand-black/60 leading-tight">
                  Chauffeur-driven transport, boutique rural stays, and local guide arrangements curated by KovilGo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Offbeat Discoveries */}
        {relatedSpots.length > 0 && (
          <div className="mt-20 pt-16 border-t border-brand-grey/80">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow-hover">
                  Continue Exploring
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-black mt-1">
                  More Underrated Places
                </h2>
              </div>
              <Button href="/offbeat" variant="outline" size="sm" className="hidden sm:inline-flex gap-1.5">
                <span>All OFFBEAT Spots</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedSpots.map((rel) => (
                <div
                  key={rel.id}
                  className="group rounded-2xl bg-brand-white border border-brand-grey/80 overflow-hidden shadow-xs hover:border-brand-yellow hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={rel.image}
                        alt={rel.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 380px"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="dark" size="sm">
                          {rel.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-bold text-brand-black/60 uppercase tracking-wider flex items-center gap-1 mb-1">
                        <MapPin className="h-3 w-3 text-brand-yellow" />
                        {rel.location}
                      </span>
                      <h3 className="font-display text-lg font-bold text-brand-black group-hover:text-brand-yellow-hover transition-colors">
                        {rel.name}
                      </h3>
                      <p className="mt-2 text-xs text-brand-black/70 leading-relaxed line-clamp-2">
                        {rel.shortDescription}
                      </p>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <Link
                      href={`/offbeat/${rel.slug}`}
                      className="text-xs font-bold text-brand-black hover:text-brand-yellow-hover inline-flex items-center gap-1"
                    >
                      <span>Explore Spot</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
