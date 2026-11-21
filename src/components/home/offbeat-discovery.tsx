'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { OFFBEAT_SPOTS, OffbeatSpot } from '@/data/travel-data';
import {
  Sparkles,
  MapPin,
  ArrowRight,
  Compass,
  SlidersHorizontal,
} from 'lucide-react';
import { cn } from '@/utils/cn';

const FILTER_CATEGORIES = [
  'All',
  'Hidden Nature',
  'Offbeat Hills',
  'Secret Shores',
  'Village Stories',
  'Forgotten Heritage',
  'Wild Escapes',
] as const;

type FilterCategory = (typeof FILTER_CATEGORIES)[number];

export function OffbeatDiscovery() {
  const [activeCategory, setActiveCategory] = React.useState<FilterCategory>('All');

  const filteredSpots = React.useMemo(() => {
    if (activeCategory === 'All') {
      return OFFBEAT_SPOTS;
    }
    return OFFBEAT_SPOTS.filter((spot) => spot.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="bg-brand-black text-brand-white py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle Restrained Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header: Editorial & Atmospheric */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/20 border border-brand-yellow/40 px-3.5 py-1 text-xs font-black tracking-widest text-brand-yellow uppercase shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-brand-yellow" />
              <span>The places most travellers never find</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              Discover the places <br className="hidden sm:inline" />
              <span className="text-brand-yellow">beyond the ordinary.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              From forgotten heritage and untouched landscapes to quiet villages and hidden
              natural wonders, discover destinations worth travelling for.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            <Button
              href="/offbeat"
              variant="primary"
              size="lg"
              className="gap-2.5 font-bold shadow-xl hover:shadow-brand-yellow/25"
            >
              <Compass className="h-4 w-4" />
              <span>Explore KovilGo OFFBEAT</span>
            </Button>
          </div>
        </div>

        {/* Category Pill Navigation */}
        <div className="mb-10 pb-2 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-400 mr-2 shrink-0">
            <SlidersHorizontal className="h-3.5 w-3.5 text-brand-yellow" />
            <span className="uppercase tracking-wider">Filter:</span>
          </div>
          {FILTER_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow',
                  isActive
                    ? 'bg-brand-yellow text-brand-black font-bold shadow-lg shadow-brand-yellow/20'
                    : 'bg-neutral-900 text-neutral-300 border border-neutral-800 hover:border-neutral-700 hover:text-white'
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Scalable Destination Discovery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredSpots.map((spot: OffbeatSpot) => (
            <Link
              key={spot.id}
              href={`/offbeat/${spot.slug}`}
              className="group rounded-3xl bg-neutral-900/90 border border-neutral-800/90 hover:border-brand-yellow/60 transition-all duration-400 overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
            >
              {/* Card Media */}
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
                  <Image
                    src={spot.image}
                    alt={spot.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                  />
                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <Badge variant="dark" size="sm" className="bg-black/70 backdrop-blur-md border border-white/15 text-neutral-200">
                      {spot.category}
                    </Badge>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  <span className="text-xs font-bold text-brand-yellow flex items-center gap-1.5 uppercase tracking-wider">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    <span>{spot.location}</span>
                  </span>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-brand-yellow transition-colors leading-snug">
                    {spot.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-2">
                    {spot.shortDescription}
                  </p>

                  {/* Why Underrated Micro-Callout */}
                  <div className="mt-4 pt-3 border-t border-neutral-800/80">
                    <span className="text-[11px] font-semibold text-neutral-400 block line-clamp-2 leading-relaxed">
                      <strong className="text-brand-yellow font-bold mr-1">Why Underrated:</strong>
                      {spot.whyUnderrated}
                    </span>
                  </div>
                </div>
              </div>

              {/* Discovery Action Link */}
              <div className="px-6 pb-6 pt-0">
                <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs font-bold text-neutral-300 group-hover:text-brand-yellow transition-colors">
                  <span>Explore Experience</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Discovery Link */}
        <div className="mt-14 sm:mt-16 text-center">
          <Link
            href="/offbeat"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-brand-yellow hover:text-white transition-colors py-2 px-4 rounded-xl border border-brand-yellow/30 hover:border-brand-yellow bg-brand-yellow/5 hover:bg-brand-yellow/10"
          >
            <span>Discover all {OFFBEAT_SPOTS.length} curated OFFBEAT destinations</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
