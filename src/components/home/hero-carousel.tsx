'use client';

import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ArrowRight,
  Sparkles,
  Compass,
} from 'lucide-react';
import { cn } from '@/utils/cn';

export interface CarouselSlide {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  ctaText: string;
  href: string;
  badge: string;
  image: string;
}

const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: 'goa',
    number: '01',
    title: 'Goa Escapes',
    subtitle: 'Beaches, resorts, nightlife and curated stays.',
    ctaText: 'Explore Goa',
    href: '/destinations/goa',
    badge: 'Coastal & Heritage',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2000&q=85',
  },
  {
    id: 'ooty',
    number: '02',
    title: 'Ooty & Coonoor',
    subtitle: 'Hills, tea estates and beautiful mountain stays.',
    ctaText: 'Explore the Hills',
    href: '/destinations/ooty',
    badge: 'Nilgiri Mountains',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=2000&q=85',
  },
  {
    id: 'kerala',
    number: '03',
    title: 'Kerala Getaways',
    subtitle: 'Munnar, backwaters, nature and premium stays.',
    ctaText: 'Explore Kerala',
    href: '/destinations/kerala',
    badge: "God's Own Country",
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2000&q=85',
  },
  {
    id: 'kodaikanal',
    number: '04',
    title: 'Kodaikanal Retreats',
    subtitle: 'Peaceful landscapes, cottages and relaxing holidays.',
    ctaText: 'Discover Kodaikanal',
    href: '/destinations/kodaikanal',
    badge: 'Palani Hills',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85',
  },
  {
    id: 'sacred',
    number: '05',
    title: 'Sacred Journeys',
    subtitle: 'Temple circuits, heritage and spiritual experiences.',
    ctaText: 'Explore Journeys',
    href: '/journeys',
    badge: 'Spiritual Circuits',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=2000&q=85',
  },
  {
    id: 'offbeat',
    number: '06',
    title: 'KovilGo OFFBEAT',
    subtitle: 'Hidden destinations, villages and lesser-known experiences.',
    ctaText: 'Discover OFFBEAT',
    href: '/offbeat',
    badge: 'Signature Concept',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=2000&q=85',
  },
  {
    id: 'luxury',
    number: '07',
    title: 'Luxury Escapes',
    subtitle: 'Premium resorts, villas and exclusive experiences.',
    ctaText: 'Explore Luxury',
    href: '/packages',
    badge: 'Bespoke Collection',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2000&q=85',
  },
  {
    id: 'group',
    number: '08',
    title: 'Group Getaways',
    subtitle: 'Holidays for friends, families and groups.',
    ctaText: 'Plan a Group Trip',
    href: '/plan-your-journey',
    badge: 'Friends & Family',
    image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=2000&q=85',
  },
  {
    id: 'custom',
    number: '09',
    title: 'Your Journey, Your Way',
    subtitle: 'Build a personalised holiday with your own preferences.',
    ctaText: 'Plan Your Journey',
    href: '/plan-your-journey',
    badge: '100% Personalised',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=85',
  },
];

const AUTOPLAY_DURATION = 4000;

export function HomeHeroCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  const [isDocumentHidden, setIsDocumentHidden] = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(false);

  const touchStartX = React.useRef<number | null>(null);
  const touchEndX = React.useRef<number | null>(null);

  // Check prefers-reduced-motion
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Pause when document is hidden
  React.useEffect(() => {
    const handleVisibilityChange = () => {
      setIsDocumentHidden(document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const goToSlide = React.useCallback((index: number) => {
    setCurrentIndex((index + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  }, []);

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  }, []);

  const prevSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  }, []);

  // Autoplay timer
  React.useEffect(() => {
    const shouldAutoplay = isPlaying && !isHovered && !isFocused && !isDocumentHidden;
    if (!shouldAutoplay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_DURATION);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, isFocused, isDocumentHidden, nextSlide, currentIndex]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.targetTouches[0]) {
      touchStartX.current = e.targetTouches[0].clientX;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.targetTouches[0]) {
      touchEndX.current = e.targetTouches[0].clientX;
    }
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    }
  };

  const currentSlide: CarouselSlide = CAROUSEL_SLIDES[currentIndex] ?? CAROUSEL_SLIDES[0]!;

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="KovilGo Curated Destinations & Experiences"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={() => setIsFocused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full overflow-hidden bg-brand-black select-none outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
    >
      {/* Immersive Viewport */}
      <div className="relative w-full min-h-[580px] sm:min-h-[650px] h-[78vh] sm:h-[82vh] lg:h-[85vh] xl:h-[88vh] max-h-[920px] overflow-hidden">
        {/* Destination Background Photography with Subtle Ken Burns Zoom & Crossfade */}
        {CAROUSEL_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              aria-hidden={!isActive}
              className={cn(
                'absolute inset-0 transition-opacity duration-1000 ease-in-out will-change-transform',
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              )}
            >
              <div
                className={cn(
                  'relative w-full h-full will-change-transform',
                  !reducedMotion && 'transition-transform duration-[4000ms] ease-out',
                  !reducedMotion && isActive ? 'scale-105' : 'scale-100'
                )}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover object-center filter brightness-[0.88]"
                  sizes="100vw"
                />
              </div>

              {/* Layered Cinematic Dark Scrims for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/95 via-brand-black/45 to-brand-black/15" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/40 to-transparent" />
            </div>
          );
        })}

        {/* Hero Content Overlay */}
        <div className="relative z-20 h-full mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 flex flex-col justify-between pt-6 sm:pt-8 pb-10 sm:pb-14">
          {/* Top Bar: Left Category Pill */}
          <div className="flex items-center justify-start w-full">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/45 backdrop-blur-md border border-white/15 px-3.5 sm:px-4 py-1.5 shadow-xl">
              <Sparkles className="h-3.5 w-3.5 text-brand-yellow shrink-0" />
              <span className="text-xs font-black tracking-widest text-brand-yellow uppercase">
                {currentSlide.badge}
              </span>
            </div>
          </div>

          {/* Center-Left Hero Copy & CTAs */}
          <div
            key={currentSlide.id}
            className={cn(
              'max-w-3xl text-left space-y-6 sm:space-y-7 pt-4 pb-2 sm:pb-4',
              !reducedMotion && 'animate-slide-up'
            )}
          >
            <div className="space-y-3 sm:space-y-4">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-yellow uppercase flex items-center gap-2">
                <Compass className="h-4 w-4 shrink-0" />
                KovilGo Curated Experience
              </span>

              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.04] drop-shadow-2xl">
                {currentSlide.title}
              </h1>

              <p className="font-display text-lg sm:text-xl md:text-2xl font-medium text-white/95 leading-relaxed max-w-2xl drop-shadow-md">
                {currentSlide.subtitle}
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                href={currentSlide.href}
                variant="primary"
                size="xl"
                className="gap-2.5 shadow-2xl hover:shadow-brand-yellow/30 font-bold text-base sm:text-lg px-8 py-4"
              >
                <span>{currentSlide.ctaText}</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                href="/plan-your-journey"
                variant="outline"
                size="xl"
                className="border-white/35 text-white bg-black/35 backdrop-blur-md hover:bg-white hover:text-brand-black hover:border-white transition-all font-semibold text-base sm:text-lg px-8 py-4"
              >
                Plan Custom Journey
              </Button>
            </div>
          </div>

          {/* Bottom Timeline & Navigation Area (Centered, ~40-60px padding) */}
          <div className="w-full space-y-3 sm:space-y-4 select-none pt-4">
            {/* Slide Counter: Positioned near bottom-left, above the timeline */}
            <div className="flex items-center justify-between">
              <div className="font-mono text-xs sm:text-sm tracking-wider text-white/50 select-none">
                <span className="text-brand-yellow font-bold text-sm sm:text-base">{currentSlide.number}</span>
                <span className="text-white/30 mx-1">/</span>
                <span>09</span>
                <span className="hidden sm:inline-block ml-3 font-sans text-xs uppercase tracking-widest text-white/40 font-medium">
                  &bull; {currentSlide.title}
                </span>
              </div>
            </div>

            {/* Horizontal Timeline Bar with 9 dots and Play/Pause Toggle */}
            <div className="relative flex items-center gap-4 sm:gap-6">
              {/* Timeline Track */}
              <div
                role="tablist"
                aria-label="Carousel slide timeline"
                className="relative flex-1 h-8 flex items-center mx-1"
              >
                {/* Thin, white/20 line spanning across */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-white/20 rounded-full" />

                {/* Brand-yellow progress line segment before active dot */}
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-brand-yellow rounded-full transition-all duration-500 ease-out shadow-[0_0_8px_rgba(253,185,19,0.5)]"
                  style={{
                    width: `${(currentIndex / (CAROUSEL_SLIDES.length - 1)) * 100}%`,
                  }}
                />

                {/* 9 Dots sitting on the line */}
                {CAROUSEL_SLIDES.map((slide, i) => {
                  const isSelected = i === currentIndex;
                  const percent = (i / (CAROUSEL_SLIDES.length - 1)) * 100;

                  return (
                    <button
                      key={slide.id}
                      role="tab"
                      type="button"
                      onClick={() => goToSlide(i)}
                      aria-selected={isSelected}
                      aria-label={`Slide ${i + 1} of 9: ${slide.title}`}
                      title={`${slide.number} - ${slide.title}`}
                      style={{ left: `${percent}%` }}
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 p-2.5 sm:p-3 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded-full group cursor-pointer z-10"
                    >
                      <span
                        className={cn(
                          'rounded-full transition-all duration-300 ease-out',
                          isSelected
                            ? 'w-3 h-3 bg-brand-yellow ring-4 ring-brand-yellow/30 shadow-[0_0_12px_rgba(253,185,19,0.8)] scale-110'
                            : 'w-2 h-2 bg-white/40 group-hover:bg-white/80 group-hover:scale-125'
                        )}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Pause / Play Toggle: near the timeline (right end) */}
              <button
                type="button"
                onClick={() => setIsPlaying((p) => !p)}
                className="shrink-0 h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-black/45 hover:bg-brand-yellow text-white/70 hover:text-brand-black border border-white/15 hover:border-brand-yellow backdrop-blur-md flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow group cursor-pointer"
                aria-label={isPlaying ? 'Pause automatic slide rotation' : 'Resume automatic slide rotation'}
                title={isPlaying ? 'Pause rotation' : 'Resume rotation'}
              >
                {isPlaying ? (
                  <Pause className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
                ) : (
                  <Play className="h-3.5 w-3.5 fill-current ml-0.5 transition-transform group-hover:scale-110" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Left Circular Arrow Button */}
        <div className="absolute inset-y-0 left-2 sm:left-6 flex items-center z-30 pointer-events-none">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="pointer-events-auto h-11 w-11 sm:h-14 sm:w-14 rounded-full bg-black/35 hover:bg-brand-yellow text-white hover:text-brand-black border border-white/15 hover:border-brand-yellow backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow group cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:-translate-x-0.5" />
          </button>
        </div>

        {/* Right Circular Arrow Button */}
        <div className="absolute inset-y-0 right-2 sm:right-6 flex items-center z-30 pointer-events-none">
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="pointer-events-auto h-11 w-11 sm:h-14 sm:w-14 rounded-full bg-black/35 hover:bg-brand-yellow text-white hover:text-brand-black border border-white/15 hover:border-brand-yellow backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow group cursor-pointer"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
