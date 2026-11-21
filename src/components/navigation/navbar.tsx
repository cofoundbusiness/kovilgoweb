'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { KovilGoLogo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';
import { cn } from '@/utils/cn';

const NAV_LINKS = [
  { title: 'Home', href: '/' },
  { title: 'OFFBEAT', href: '/offbeat', isNew: true },
  { title: 'Destinations', href: '/destinations' },
  { title: 'Journeys', href: '/journeys' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll and handle Escape key when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-brand-ivory border-b border-brand-grey/80 transition-shadow duration-200',
        isScrolled ? 'shadow-md shadow-brand-black/5' : 'shadow-xs'
      )}
    >
      <div className="mx-auto flex h-[76px] sm:h-[84px] lg:h-[92px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Wing: Official Logo (aligned left, fixed desktop boundary) */}
        <div className="flex items-center justify-start shrink-0 min-w-[120px] sm:min-w-[150px] lg:w-56">
          {/* Mobile Logo (<640px) */}
          <div className="block sm:hidden">
            <KovilGoLogo variant="transparent" size="sm" priority />
          </div>
          {/* Tablet & Desktop Logo (>=640px) */}
          <div className="hidden sm:block">
            <KovilGoLogo variant="transparent" size="md" priority />
          </div>
        </div>

        {/* Center Wing: Navigation Links (centered, responsive spacing) */}
        <nav
          className="hidden md:flex items-center justify-center flex-1 px-2 lg:px-6"
          aria-label="Main Navigation"
        >
          <div className="flex items-center gap-1 md:gap-1.5 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-2.5 py-1.5 md:px-3 md:py-2 lg:px-3.5 lg:py-2 text-xs md:text-[13px] lg:text-sm font-semibold tracking-wide transition-colors duration-150 rounded-lg whitespace-nowrap',
                    isActive
                      ? 'text-brand-black font-bold'
                      : 'text-brand-black/75 hover:text-brand-black hover:bg-brand-black/5'
                  )}
                >
                  <span className="flex items-center gap-1.5">
                    {link.title}
                    {link.isNew && (
                      <span className="rounded-full bg-brand-yellow px-1.5 py-0.5 text-[9px] font-black uppercase text-brand-black tracking-normal leading-none shrink-0 shadow-xs">
                        NEW
                      </span>
                    )}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 md:left-3 md:right-3 lg:left-3.5 lg:right-3.5 h-0.5 rounded-full bg-brand-yellow" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Right Wing: Plan Your Journey CTA & Mobile Menu Toggle (aligned right) */}
        <div className="flex items-center justify-end shrink-0 min-w-[120px] sm:min-w-[150px] lg:w-56 gap-2 sm:gap-3">
          {/* Tablet & Desktop CTA (>=640px) */}
          <div className="hidden sm:flex items-center">
            <Button
              href="/plan-your-journey"
              variant="primary"
              size="md"
              className="gap-2 shadow-xs font-bold text-xs lg:text-sm px-3.5 lg:px-4 py-2 lg:py-2.5 whitespace-nowrap shrink-0"
            >
              <Sparkles className="h-4 w-4 shrink-0 text-brand-black" />
              <span>Plan Your Journey</span>
            </Button>
          </div>

          {/* Mobile Compact CTA (<640px) */}
          <div className="flex sm:hidden items-center">
            <Button
              href="/plan-your-journey"
              variant="primary"
              size="sm"
              className="gap-1.5 font-bold text-xs px-2.5 py-1.5 h-8.5 shadow-xs whitespace-nowrap shrink-0"
            >
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-brand-black" />
              <span>Plan</span>
            </Button>
          </div>

          {/* Mobile/Tablet Menu Hamburger Button (<768px) */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-xl p-2 text-brand-black hover:bg-brand-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-x-0 top-[76px] sm:top-[84px] bottom-0 z-40 bg-brand-ivory px-6 py-8 flex flex-col justify-between overflow-y-auto md:hidden animate-fade-in border-t border-brand-grey/50 shadow-2xl"
        >
          <div className="flex flex-col space-y-2">
            <div className="pb-4 mb-2 border-b border-brand-grey/50 flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-widest text-brand-black/50">
                Navigation
              </span>
              <span className="text-xs font-semibold text-brand-black/40">
                KovilGo Curated
              </span>
            </div>
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'flex items-center justify-between py-3.5 text-lg font-bold tracking-tight rounded-xl px-4 transition-colors',
                    isActive
                      ? 'bg-brand-yellow/20 text-brand-black font-extrabold'
                      : 'text-brand-black hover:bg-brand-black/5'
                  )}
                >
                  <span className="flex items-center gap-2.5">
                    {link.title}
                    {link.isNew && (
                      <span className="rounded-full bg-brand-yellow px-2 py-0.5 text-[10px] font-black uppercase text-brand-black">
                        OFFBEAT
                      </span>
                    )}
                  </span>
                  {isActive && <span className="h-2 w-2 rounded-full bg-brand-yellow" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-8 border-t border-brand-grey/60 space-y-4">
            <Button
              href="/plan-your-journey"
              variant="primary"
              size="lg"
              className="w-full gap-2 text-base font-bold shadow-md py-3.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Sparkles className="h-5 w-5" />
              Plan Your Journey
            </Button>
            <p className="text-center text-xs text-brand-black/60 font-medium">
              Every Journey, Brighter. • KovilGo OFFBEAT
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
