import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';
import {
  Sparkles,
  ShieldCheck,
  Crown,
  Compass,
  ArrowRight,
  Clock,
  MapPin,
  CheckCircle2,
  Users,
} from 'lucide-react';

export const metadata = {
  title: 'Luxury Escapes & Curated Travel Collections — KovilGo',
  description:
    'Private pool villas, heritage bungalows, and bespoke chauffeur-driven journeys across India’s most scenic and sacred destinations.',
};

interface LuxuryPackage {
  id: string;
  title: string;
  category: string;
  tagline: string;
  image: string;
  destinations: string;
  duration: string;
  highlights: string[];
  inclusions: string[];
}

const LUXURY_COLLECTIONS: LuxuryPackage[] = [
  {
    id: 'coastal-villas',
    title: 'Private Coastal Villas & Portuguese Estates',
    category: 'Coastal Sanctuary',
    tagline: 'Private infinity pools, secluded Goa shores, and restored 19th-century colonial manors.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    destinations: 'South Goa & Fontainhas Heritage Quarter',
    duration: '5 Days / 4 Nights',
    highlights: [
      'Private pool villas tucked inside secluded coconut groves',
      'Dedicated private chef offering bespoke Goan-Portuguese tasting menus',
      'Sunset champagne cruise along the serene Chapora or Sal river backwaters',
      'Private guided architectural walk through historic Latin Quarter mansions',
    ],
    inclusions: ['Dedicated luxury SUV & chauffeur', 'All bespoke meals', 'Private heritage historian', 'Airport VIP assistance'],
  },
  {
    id: 'heritage-havelis',
    title: 'Palaces of Teak & Royal Dynasty Trails',
    category: 'Living Heritage',
    tagline: '1000-window Chettinad merchant mansions, Chola temple sunrises, and private bronze masters.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    destinations: 'Chettinad, Thanjavur & Darasuram',
    duration: '6 Days / 5 Nights',
    highlights: [
      'Exclusive stay at palatial heritage mansions built with Burmese teak and Italian marble',
      'Private dawn walkthrough of UNESCO Brihadisvara Temple before public hours',
      'Hands-on lost-wax bronze casting masterclass in Swamimalai',
      'Artisanal dining experiences served on fresh plantain leaves with ancestral recipes',
    ],
    inclusions: ['Private luxury vehicle throughout', 'Boutique palace suite stays', 'Heritage guide specialist', 'Curated temple darshan coordination'],
  },
  {
    id: 'misty-tea-estates',
    title: 'High-Altitude Tea Estates & Pine Chalets',
    category: 'Mountain Retreat',
    tagline: 'Colonial tea planter bungalows, private fireside dinners, and crisp mountain mornings.',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80',
    destinations: 'Ooty, Coonoor & Munnar',
    duration: '5 Days / 4 Nights',
    highlights: [
      'Historic 100-year-old British tea estate bungalows with private butler service',
      'Private tea sommelier tasting of single-estate high-altitude orthodox teas',
      'Scenic first-class journey on the UNESCO Nilgiri Mountain Railway',
      'Guided nature and birding walks through private shola forest reserves',
    ],
    inclusions: ['Dedicated mountain SUV & driver', 'Fireplace cottage accommodation', 'Gourmet plantation dining', 'Curated estate activities'],
  },
  {
    id: 'backwater-serenity',
    title: 'Bespoke Kerala Lagoons & Ayurvedic Sanctuaries',
    category: 'Wellness & Nature',
    tagline: 'Private solar-powered wooden houseboats, secluded Vembanad lake villas, and authentic therapies.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    destinations: 'Munnar & Alleppey Backwaters',
    duration: '6 Days / 5 Nights',
    highlights: [
      'Exclusive private kettuvallam houseboat with dedicated onboard chef and crew',
      'Personalised Ayurvedic consultation and rejuvenating daily wellness sessions',
      'Private evening performance of classical Kathakali dance and music',
      'Silent sunset canoe rides through secluded village waterways',
    ],
    inclusions: ['Private air-conditioned transfers', 'Exclusive luxury houseboat charter', 'Ayurvedic wellness sessions', 'Full board gourmet dining'],
  },
];

export default function PackagesPage() {
  return (
    <div className="flex flex-col w-full bg-brand-ivory">
      {/* Hero Section */}
      <section className="relative min-h-[55vh] flex items-center justify-center bg-brand-black text-brand-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1800&q=80"
            alt="Luxury Escapes Background"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/75 to-transparent" />

        <div className="mx-auto max-w-5xl text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/20 border border-brand-yellow/40 px-4 py-1.5 shadow-xs">
            <Crown className="h-4 w-4 text-brand-yellow" />
            <span className="text-xs font-black tracking-widest text-brand-yellow uppercase">
              Bespoke & Luxury Travel
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Luxury Escapes, <br />
            <span className="text-brand-yellow">Exclusively Tailored.</span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Private pool villas, historic heritage estates, dedicated chauffeurs, and 24/7 personal
            concierge care. Designed for travellers who seek unmatched privacy, comfort, and authenticity.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/plan-your-journey" variant="primary" size="xl" className="gap-2.5">
              <Sparkles className="h-5 w-5" />
              Design Your Bespoke Package
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="xl"
              className="border-neutral-700 text-white hover:bg-neutral-800 hover:text-brand-yellow"
            >
              Speak with a Concierge
            </Button>
          </div>
        </div>
      </section>

      {/* Luxury Pillars */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-brand-grey/80 bg-brand-white">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-brand-ivory border border-brand-grey/60">
            <div className="h-12 w-12 rounded-xl bg-brand-yellow/20 flex items-center justify-center text-brand-black shrink-0">
              <Crown className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-display text-sm font-bold text-brand-black">Private Stays Only</h2>
              <p className="text-xs text-brand-black/70">Exclusive villas & boutique royal manors.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-brand-ivory border border-brand-grey/60">
            <div className="h-12 w-12 rounded-xl bg-brand-yellow/20 flex items-center justify-center text-brand-black shrink-0">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-display text-sm font-bold text-brand-black">Dedicated Concierge</h2>
              <p className="text-xs text-brand-black/70">Direct personal support throughout your trip.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-brand-ivory border border-brand-grey/60">
            <div className="h-12 w-12 rounded-xl bg-brand-yellow/20 flex items-center justify-center text-brand-black shrink-0">
              <Compass className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-display text-sm font-bold text-brand-black">Private Chauffeur</h2>
              <p className="text-xs text-brand-black/70">Premium luxury SUVs with vetted drivers.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-brand-ivory border border-brand-grey/60">
            <div className="h-12 w-12 rounded-xl bg-brand-yellow/20 flex items-center justify-center text-brand-black shrink-0">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-display text-sm font-bold text-brand-black">Seamless Privacy</h2>
              <p className="text-xs text-brand-black/70">No shared crowds, no rigid schedules.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Luxury Collections */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Signature Collections"
            title="Curated Luxury Packages"
            subtitle="Every luxury escape is tailored around your individual timing, culinary preferences, and travel style."
          />

          <div className="space-y-16">
            {LUXURY_COLLECTIONS.map((pkg, index) => {
              const isEven = index % 2 === 1;
              return (
                <Card
                  key={pkg.id}
                  className="overflow-hidden border border-brand-grey/80 shadow-md hover:shadow-xl transition-shadow bg-brand-white"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Visual */}
                    <div className={`lg:col-span-6 relative min-h-[320px] lg:min-h-full ${isEven ? 'lg:order-2' : ''}`}>
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 600px"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="yellow" size="md">
                          {pkg.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className={`lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between ${isEven ? 'lg:order-1' : ''}`}>
                      <div className="space-y-5">
                        <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-brand-black/60 uppercase tracking-wider">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4 text-brand-yellow" />
                            {pkg.destinations}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4 text-brand-yellow" />
                            {pkg.duration}
                          </span>
                        </div>

                        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-black leading-tight">
                          {pkg.title}
                        </h3>

                        <p className="text-sm sm:text-base text-brand-black/75 leading-relaxed">
                          {pkg.tagline}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-2 pt-2">
                          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-black/60 block">
                            Key Experience Highlights:
                          </span>
                          <ul className="space-y-2">
                            {pkg.highlights.map((h, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-black/80">
                                <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Inclusions */}
                        <div className="pt-4 border-t border-brand-grey/60">
                          <div className="flex flex-wrap gap-2">
                            {pkg.inclusions.map((inc, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center px-2.5 py-1 rounded-md bg-brand-ivory text-xs font-semibold text-brand-black/80 border border-brand-grey/70"
                              >
                                {inc}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action */}
                      <div className="pt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        <Button
                          href="/plan-your-journey"
                          variant="primary"
                          size="lg"
                          className="w-full sm:w-auto gap-2"
                        >
                          <Sparkles className="h-4 w-4" />
                          Inquire for Custom Dates
                        </Button>
                        <Button
                          href="/contact"
                          variant="outline"
                          size="lg"
                          className="w-full sm:w-auto"
                        >
                          Request Private Brochure
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Tailoring Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-black text-brand-white">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <Badge variant="yellow">Private Client Concierge</Badge>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Seeking a completely bespoke private itinerary?
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Whether it is an intimate family milestone, an anniversary in the Nilgiri hills, or a
            multi-generational sacred circuit with elderly-friendly mobility, our private travel
            planners will craft every hour with meticulous discretion.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/plan-your-journey" variant="primary" size="xl" className="w-full sm:w-auto gap-2">
              <Sparkles className="h-5 w-5" />
              Customize Your Private Journey
            </Button>
            <Button href="/contact" variant="outline" size="xl" className="w-full sm:w-auto border-neutral-700 text-white hover:bg-neutral-800 hover:text-brand-yellow">
              Consult Concierge Directly
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
