import * as React from 'react';
import { cn } from '@/utils/cn';
import { Badge } from './badge';

export interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: 'default' | 'yellow' | 'offbeat' | 'dark' | 'outline' | 'subtle';
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  isDark?: boolean;
}

export function SectionHeading({
  badge,
  badgeVariant = 'subtle',
  title,
  subtitle,
  align = 'center',
  className,
  isDark = false,
}: SectionHeadingProps) {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={cn('flex flex-col max-w-3xl mb-12', alignment[align], align === 'center' && 'mx-auto', className)}>
      {badge && (
        <Badge variant={badgeVariant} className="mb-3.5">
          {badge}
        </Badge>
      )}
      <h2
        className={cn(
          'font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]',
          isDark ? 'text-brand-white' : 'text-brand-black'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg leading-relaxed max-w-2xl',
            isDark ? 'text-brand-white/70' : 'text-brand-black/70'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
