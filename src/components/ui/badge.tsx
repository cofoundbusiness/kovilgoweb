import * as React from 'react';
import { cn } from '@/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'yellow' | 'offbeat' | 'dark' | 'outline' | 'subtle';
  size?: 'sm' | 'md';
}

export function Badge({
  className,
  variant = 'default',
  size = 'md',
  children,
  ...props
}: BadgeProps) {
  const base =
    'inline-flex items-center font-bold tracking-wider uppercase transition-colors select-none rounded-full';

  const variants = {
    default: 'bg-brand-cloud text-brand-black border border-brand-grey',
    yellow: 'bg-brand-yellow text-brand-black shadow-xs',
    offbeat: 'bg-brand-black text-brand-yellow border border-brand-yellow/30 shadow-xs',
    dark: 'bg-brand-black text-brand-white',
    outline: 'border border-brand-black/20 text-brand-black',
    subtle: 'bg-brand-yellow/15 text-brand-black',
  };

  const sizes = {
    sm: 'px-2.5 py-0.5 text-[10px]',
    md: 'px-3.5 py-1 text-xs',
  };

  return (
    <div className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </div>
  );
}
