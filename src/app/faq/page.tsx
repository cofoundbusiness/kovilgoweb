'use client';

import * as React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';

interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Journeys' | 'OFFBEAT' | 'Comfort';
}

const FAQS: FAQItem[] = [
  {
    category: 'General',
    question: 'What makes KovilGo different from standard tour operators?',
    answer:
      'Unlike conventional bus tour companies that pack 10 crowded monuments into a single exhausting day, KovilGo curates slow, immersive journeys. We focus on underrated destinations, authentic living traditions, verified heritage stays, and private, comfortable transportation with transparent pacing.',
  },
  {
    category: 'OFFBEAT',
    question: 'What exactly is KovilGo OFFBEAT?',
    answer:
      'KovilGo OFFBEAT is our dedicated travel discovery engine highlighting lesser-known heritage sanctums, sacred village groves, artisan workshops, and secluded natural trails that mainstream tourist buses overlook. It allows travellers to experience the cultural soul of India away from commercial queues.',
  },
  {
    category: 'Journeys',
    question: 'How does custom journey planning work?',
    answer:
      'You share your travel dates, preferred destinations, group size, and pace through our "Plan Your Journey" form. Our concierge then prepares a tailored day-by-day itinerary complete with recommended stays, private vehicle options, and curated cultural encounters. You can adjust the plan until it fits your expectations perfectly.',
  },
  {
    category: 'Comfort',
    question: 'Can you accommodate senior citizens and families with children?',
    answer:
      'Absolutely. Accessibility and pilgrim comfort are central to our philosophy. We actively identify routes with minimal staircase fatigue, arrange battery car or palanquin options where available, ensure pure-vegetarian dining options, and select hotels with elevator access.',
  },
  {
    category: 'Journeys',
    question: 'Are guides and temple priests arranged in advance?',
    answer:
      'Yes. Where authentic heritage lore or specific darshan rituals are requested, we connect travellers with vetted local historians and temple priests who explain the iconography, history, and traditions with dignity and depth.',
  },
  {
    category: 'General',
    question: 'When will live bookings and online payments be available?',
    answer:
      'We are currently in Phase 1 (Frontend & Design System). Secure payment gateway integrations via Cashfree, live booking reservations, and SMS OTP verification will go live in subsequent development phases.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const [activeCategory, setActiveCategory] = React.useState<string>('All');

  const categories = ['All', 'General', 'OFFBEAT', 'Journeys', 'Comfort'];

  const filtered = FAQS.filter(
    (faq) => activeCategory === 'All' || faq.category === activeCategory
  );

  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-brand-ivory min-h-screen">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="yellow" className="mb-1">
            Questions & Answers
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-black">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-brand-black/70 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about discovering destinations, custom journey planning,
            and the KovilGo OFFBEAT experience.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-4 py-2 rounded-xl text-xs font-bold transition-all select-none cursor-pointer',
                activeCategory === cat
                  ? 'bg-brand-black text-brand-yellow shadow-xs'
                  : 'bg-brand-white text-brand-black/70 border border-brand-grey/80 hover:bg-brand-cloud'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-4">
          {filtered.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-brand-white border border-brand-grey/80 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-display text-lg sm:text-xl font-bold text-brand-black">
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      'h-8 w-8 rounded-full bg-brand-cloud flex items-center justify-center shrink-0 transition-transform duration-300',
                      isOpen && 'rotate-180 bg-brand-yellow/20 text-brand-black'
                    )}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-brand-black/75 leading-relaxed border-t border-brand-grey/40 animate-fade-in mt-1">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Strip */}
        <div className="rounded-3xl bg-brand-white p-8 border border-brand-grey/80 text-center space-y-4">
          <h3 className="font-display text-xl font-bold text-brand-black">
            Have a question not listed here?
          </h3>
          <p className="text-xs sm:text-sm text-brand-black/70 max-w-md mx-auto">
            Our concierge team is always available to talk through specific heritage questions,
            mobility needs, or festival calendar dates.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="primary" size="md">
              Ask Our Concierge
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
