import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'offbeat' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  href?: string;
  external?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      href,
      external,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 select-none rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50';

    const variants = {
      primary: 'bg-brand-yellow text-brand-black hover:bg-brand-yellow-hover shadow-sm hover:shadow',
      dark: 'bg-brand-black text-brand-white hover:bg-brand-black-muted shadow-sm',
      offbeat: 'bg-brand-black text-brand-yellow border-2 border-brand-yellow hover:bg-brand-yellow hover:text-brand-black shadow-sm',
      secondary: 'bg-brand-grey text-brand-black hover:bg-neutral-300',
      outline: 'border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-white',
      ghost: 'text-brand-black hover:bg-brand-black/5',
    };

    const sizes = {
      sm: 'h-9 px-3.5 text-xs',
      md: 'h-11 px-5 text-sm',
      lg: 'h-13 px-7 text-base py-3',
      xl: 'h-14 px-8 text-lg py-3.5 font-display',
    };

    const combinedClass = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClass}
          >
            {children}
          </a>
        );
      }

      return (
        <Link href={href} className={combinedClass}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClass}
        {...props}
      >
        {isLoading && (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
