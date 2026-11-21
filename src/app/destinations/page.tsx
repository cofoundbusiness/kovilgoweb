import { DESTINATIONS } from '@/data/travel-data';
import { DestinationGrid } from '@/components/destinations/destination-grid';
import { Button } from '@/components/ui/button';
import { Sparkles, Compass } from 'lucide-react';

export const metadata = {
  title: 'Destinations — Curated Cultural & Offbeat Escapes',
  description:
    'Browse handpicked destinations across India featuring living temple architecture, artisan hamlets, and serene heritage landscapes.',
};

export default function DestinationsPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-brand-ivory min-h-screen">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/20 px-3.5 py-1 text-xs font-bold text-brand-black uppercase">
            <Compass className="h-3.5 w-3.5" />
            Curated Geographic Discovery
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-black">
            Explore Curated Destinations
          </h1>
          <p className="text-base sm:text-lg text-brand-black/70 leading-relaxed">
            Every destination in our directory has been researched for heritage depth,
            peaceful atmosphere, and unique living traditions. Find your next meaningful escape.
          </p>
        </div>

        {/* Interactive Filter Grid */}
        <DestinationGrid initialDestinations={DESTINATIONS} />

        {/* Bottom Concierge Prompt */}
        <div className="rounded-3xl bg-brand-black text-brand-white p-8 sm:p-12 text-center space-y-4 mt-16">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Looking for a specific temple or secret hamlet?
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto">
            Our local heritage concierges can map custom routes to family clan deities, remote
            monasteries, or secluded hill sanctums.
          </p>
          <div className="pt-2">
            <Button href="/plan-your-journey" variant="primary" size="lg" className="gap-2">
              <Sparkles className="h-4 w-4" />
              Request a Custom Destination Itinerary
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
