import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sparkles, MessageSquare, Compass, ShieldCheck, HeartHandshake } from 'lucide-react';

export function FinalCta() {
  return (
    <section className="relative w-full py-28 sm:py-36 lg:py-44 overflow-hidden bg-brand-black text-brand-white">
      {/* Cinematic Full-Bleed Destination Background Photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=85"
          alt="Scenic Indian Mountain Highway"
          fill
          className="object-cover object-center filter brightness-[0.75] contrast-[1.05]"
          sizes="100vw"
        />
        {/* Deep, layered dark gradients for guaranteed high-contrast legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-brand-black/85" />
        <div className="absolute inset-0 bg-radial-at-c from-brand-yellow/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        {/* Subtle Brand Tag */}
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/20 border border-brand-yellow/40 px-4 py-1.5 shadow-lg">
          <Sparkles className="h-4 w-4 text-brand-yellow" />
          <span className="text-xs font-black tracking-widest text-brand-yellow uppercase">
            Personalised Journeys & Curated Trails
          </span>
        </div>

        {/* Large Confident Headline */}
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.08] drop-shadow-2xl">
          Your next unforgettable <br className="hidden sm:inline" />
          <span className="text-brand-yellow">journey starts here.</span>
        </h2>

        {/* Well-Spaced Supporting Copy */}
        <p className="text-base sm:text-xl text-neutral-200 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-md">
          Tell us what you dream of exploring. From the destination and accommodation to the
          smallest travel details, our team will help shape a journey around you.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto">
          <Button
            href="/plan-your-journey"
            variant="primary"
            size="xl"
            className="gap-2.5 font-bold shadow-2xl hover:shadow-brand-yellow/30 text-base sm:text-lg px-8 py-4"
          >
            <Compass className="h-5 w-5" />
            <span>Plan Your Journey</span>
          </Button>

          <Button
            href="/contact"
            variant="outline"
            size="xl"
            className="border-white/35 text-white bg-black/40 backdrop-blur-md hover:bg-white hover:text-brand-black hover:border-white transition-all font-semibold text-base sm:text-lg px-8 py-4 gap-2"
          >
            <MessageSquare className="h-5 w-5" />
            <span>Speak with Our Travel Team</span>
          </Button>
        </div>

        {/* Reassurance Micro-Badges */}
        <div className="pt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold text-neutral-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-brand-yellow" />
            <span>Verified Boutique Properties</span>
          </div>
          <div className="flex items-center gap-2">
            <HeartHandshake className="h-4 w-4 text-brand-yellow" />
            <span>100% Personalised Itineraries</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-brand-yellow" />
            <span>Dedicated Travel Concierge</span>
          </div>
        </div>
      </div>
    </section>
  );
}
