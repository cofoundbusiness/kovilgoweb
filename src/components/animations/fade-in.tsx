import * as React from 'react';
import { cn } from '@/utils/cn';

interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  delayMs?: number;
}

export function FadeIn({ className, delayMs = 0, style, children, ...props }: FadeInProps) {
  return (
    <div
      className={cn('animate-fade-in motion-reduce:animate-none', className)}
      style={{
        animationDelay: `${delayMs}ms`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
