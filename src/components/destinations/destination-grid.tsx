'use client';

import * as React from 'react';
import Image from 'next/image';
import { Destination } from '@/data/travel-data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Clock, Calendar, ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

interface DestinationGridProps {
  initialDestinations: Destination[];
}

export function DestinationGrid({ initialDestinations }: DestinationGridProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Destinations' },
    { id: 'offbeat', label: 'OFFBEAT Only' },
    { id: 'heritage', label: 'Architectural Heritage' },
    { id: 'spiritual', label: 'Sacred Temples' },
    { id: 'nature', label: 'Nature & Gorges' },
  ];

  const filtered = initialDestinations.filter((dest) => {
    const matchesSearch =
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.tagline.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (activeCategory === 'all') return true;
    if (activeCategory === 'offbeat') return dest.isOffbeat;
    return dest.category === activeCategory;
  });

  return (
    <div className="space-y-10">
      {/* Search Bar & Category Filter Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-brand-white p-4 rounded-2xl border border-brand-grey/80 shadow-xs">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-black/40" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by destination name, state, or region..."
            className="w-full pl-11 pr-4 py-3 text-sm bg-brand-cloud rounded-xl border border-transparent focus:border-brand-yellow focus:bg-white focus:outline-none transition-all placeholder:text-brand-black/40 text-brand-black font-medium"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center overflow-x-auto gap-2 pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'whitespace-nowrap px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 select-none cursor-pointer',
                  isActive
                    ? 'bg-brand-black text-brand-yellow shadow-xs'
                    : 'bg-brand-cloud text-brand-black/70 hover:bg-brand-grey/60'
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs font-bold text-brand-black/60 uppercase tracking-wider px-1">
        <span>Showing {filtered.length} Curated {filtered.length === 1 ? 'Destination' : 'Destinations'}</span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="text-brand-yellow-hover hover:underline cursor-pointer"
          >
            Clear Search
          </button>
        )}
      </div>

      {/* Grid of Destination Cards */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((dest) => (
            <Card key={dest.slug} className="group overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={dest.heroImage}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge variant="yellow" size="sm">
                      {dest.category}
                    </Badge>
                    {dest.isOffbeat && (
                      <Badge variant="dark" size="sm">
                        OFFBEAT
                      </Badge>
                    )}
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-brand-black/60 uppercase tracking-wider mb-2">
                    <MapPin className="h-3.5 w-3.5 text-brand-yellow" />
                    {dest.state} • {dest.region}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-black group-hover:text-brand-yellow-hover transition-colors leading-tight">
                    {dest.name}
                  </h3>
                  <p className="mt-2.5 text-sm text-brand-black/70 leading-relaxed line-clamp-2">
                    {dest.tagline}
                  </p>

                  <div className="mt-5 pt-4 border-t border-brand-grey/60 grid grid-cols-2 gap-2 text-xs text-brand-black/70 font-semibold">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-brand-black/50" />
                      {dest.idealDuration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-brand-black/50" />
                      {dest.bestSeason}
                    </span>
                  </div>
                </CardContent>
              </div>

              <div className="p-6 pt-0">
                <Button
                  href={`/destinations/${dest.slug}`}
                  variant="primary"
                  size="md"
                  className="w-full justify-between"
                >
                  <span>Explore Destination Guide</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center rounded-3xl bg-brand-white border border-brand-grey p-8">
          <p className="text-lg font-bold text-brand-black font-display">
            No destinations found matching your filters.
          </p>
          <p className="text-sm text-brand-black/60 mt-1 max-w-md mx-auto">
            Try adjusting your search terms or view our complete catalogue of curated trails.
          </p>
          <div className="mt-6">
            <Button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              variant="outline"
              size="md"
            >
              Reset Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
