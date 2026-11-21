import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'About KovilGo — Every Journey, Brighter.',
  description:
    'Learn about our philosophy, our mission to champion underrated destinations, and how KovilGo is reimagining heritage travel.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-brand-ivory">
      {/* Editorial Hero */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-brand-grey/60">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <Badge variant="yellow" className="mb-2">
            Our Philosophy
          </Badge>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-brand-black leading-tight">
            We believe travel should illuminate, <br className="hidden sm:inline" />
            <span className="text-brand-yellow-hover">not exhaust.</span>
          </h1>
          <p className="text-lg sm:text-xl text-brand-black/75 max-w-2xl mx-auto leading-relaxed">
            KovilGo was created from a simple realization: the true magic of Indian heritage and
            spiritual landscapes is rarely found in crowded tourist hubs. It resides in the quiet
            valleys, sacred groves, and ancient stone corridors just beyond the highway.
          </p>
        </div>
      </section>

      {/* Brand Storytelling */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-black/60">
                The KovilGo Story
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-black leading-tight">
                Born out of respect for living traditions.
              </h2>
              <p className="text-base text-brand-black/75 leading-relaxed">
                For decades, spiritual and cultural travel in India has been divided between two
                extremes: rigid, hurried bus tour packages on one end, and completely unguided,
                stressful self-planning on the other.
              </p>
              <p className="text-base text-brand-black/75 leading-relaxed">
                We set out to create a third way: curated journeys designed with modern ease,
                comfortable pacing, transparent recommendations, and genuine reverence for local
                communities.
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-4/3 border border-brand-grey">
              <Image
                src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
                alt="Chettinad Architecture"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
          </div>

          {/* The OFFBEAT Movement */}
          <div className="rounded-3xl bg-brand-black text-brand-white p-8 sm:p-14 border border-neutral-800 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl space-y-4">
              <Badge variant="yellow">Our Main Product</Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                The OFFBEAT Mission
              </h2>
              <p className="text-base text-neutral-300 leading-relaxed">
                Every year, hundreds of thousands visit the same three famous monuments while
                extraordinary UNESCO-calibre temples and artisan villages ten miles away sit empty.
              </p>
              <p className="text-base text-neutral-300 leading-relaxed">
                KovilGo OFFBEAT exists to redirect attention to these underrated destinations. By
                doing so, we help distribute tourism revenue directly to rural craftspeople and
                offer our travelers deeply tranquil encounters with art and history.
              </p>
              <div className="pt-2">
                <Button href="/offbeat" variant="offbeat" size="lg" className="gap-2">
                  Explore OFFBEAT <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Core Brand Values */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <Badge variant="subtle">Principles</Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-black mt-2">
                What Guides Every Journey We Plan
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-brand-white p-7 rounded-2xl border border-brand-grey/80 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-yellow/20 flex items-center justify-center text-brand-black font-bold">
                  1
                </div>
                <h3 className="font-display text-lg font-bold text-brand-black">
                  Slow, Mindful Pacing
                </h3>
                <p className="text-xs text-brand-black/70 leading-relaxed">
                  We refuse to rush you through five temples before lunch. We build itineraries with
                  space to reflect, wander village lanes, and rest.
                </p>
              </div>

              <div className="bg-brand-white p-7 rounded-2xl border border-brand-grey/80 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-yellow/20 flex items-center justify-center text-brand-black font-bold">
                  2
                </div>
                <h3 className="font-display text-lg font-bold text-brand-black">
                  Authentic Community Care
                </h3>
                <p className="text-xs text-brand-black/70 leading-relaxed">
                  We collaborate with heritage homestays, local auto drivers, and family-owned
                  restaurants so travel benefits the hosts as much as the guests.
                </p>
              </div>

              <div className="bg-brand-white p-7 rounded-2xl border border-brand-grey/80 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-lg bg-brand-yellow/20 flex items-center justify-center text-brand-black font-bold">
                  3
                </div>
                <h3 className="font-display text-lg font-bold text-brand-black">
                  Accessible Comfort for All Ages
                </h3>
                <p className="text-xs text-brand-black/70 leading-relaxed">
                  Whether travelling with toddler grandchildren or 80-year-old grandparents, our
                  vetted routes prioritize clean amenities and wheelchair/mobility comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-white border-t border-brand-grey/80 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-black">
            Experience KovilGo for Yourself
          </h2>
          <p className="text-base text-brand-black/70">
            Every Journey, Brighter. Discover what lies beyond the usual paths.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/plan-your-journey" variant="primary" size="lg">
              Start Planning
            </Button>
            <Button href="/destinations" variant="outline" size="lg">
              Browse Destinations
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
