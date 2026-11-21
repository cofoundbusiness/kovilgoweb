import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/utils/cn';

export interface LogoProps {
  variant?: 'transparent' | 'yellow-on-black' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  priority?: boolean;
  href?: string;
}

// Aspect ratio of wordmark (2048 x 758) ≈ 2.7018
// Aspect ratio of dark logo (2048 x 1024) = 2.0
const SIZE_MAP = {
  sm: { width: 114, height: 42 },
  md: { width: 141, height: 52 },
  lg: { width: 168, height: 62 },
  xl: { width: 205, height: 76 },
};

const DARK_SIZE_MAP = {
  sm: { width: 84, height: 42 },
  md: { width: 104, height: 52 },
  lg: { width: 124, height: 62 },
  xl: { width: 152, height: 76 },
};

/**
 * Official KovilGo Reusable Logo Component
 * - 'transparent': uses /brand/logos/kovilgo-wordmark-transparent.png (ideal for light backgrounds, headers)
 * - 'yellow-on-black': uses /brand/logos/kovilgo-primary-yellow-on-black.png (ideal for dark hero & promotional blocks)
 */
export function KovilGoLogo({
  variant = 'transparent',
  size = 'md',
  className,
  priority = false,
  href = '/',
}: LogoProps) {
  const isDarkVariant = variant === 'yellow-on-black';
  const dimensions = isDarkVariant ? DARK_SIZE_MAP[size] : SIZE_MAP[size];
  const src = isDarkVariant
    ? '/brand/logos/kovilgo-primary-yellow-on-black.png'
    : '/brand/logos/kovilgo-wordmark-transparent.png';

  const alt = 'KovilGo — Every Journey, Brighter';

  const imageElement = (
    <div
      className={cn(
        'relative inline-flex items-center justify-center select-none shrink-0',
        className
      )}
      style={{
        height: `${dimensions.height}px`,
        width: `${dimensions.width}px`,
        maxHeight: `${dimensions.height}px`,
        maxWidth: `${dimensions.width}px`,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={dimensions.width}
        height={dimensions.height}
        priority={priority}
        className="h-full w-full object-contain pointer-events-none"
        style={{
          aspectRatio: isDarkVariant ? '2048 / 1024' : '2048 / 758',
        }}
      />
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center shrink-0 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded-sm"
        aria-label="KovilGo Home"
      >
        {imageElement}
      </Link>
    );
  }

  return imageElement;
}

/**
 * Reusable Footer Logo
 */
export function KovilGoFooterLogo({
  size = 'lg',
  className,
  href = '/',
}: Omit<LogoProps, 'variant'>) {
  return (
    <KovilGoLogo
      variant="transparent"
      size={size}
      className={cn(
        'brightness-0 invert hover:brightness-100 hover:invert-0 transition-all',
        className
      )}
      href={href}
    />
  );
}

/**
 * Official KovilGo App Icon Brand Mark
 * Uses /brand/app-icons/kovilgo-app-icon.png
 */
export function KovilGoBrandMark({
  size = 40,
  className,
  href,
}: {
  size?: number;
  className?: string;
  href?: string;
}) {
  const imageElement = (
    <div
      className={cn('relative inline-flex items-center justify-center select-none shrink-0', className)}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <Image
        src="/brand/app-icons/kovilgo-app-icon.png"
        alt="KovilGo Mark"
        width={size}
        height={size}
        className="h-full w-full rounded-xl object-contain shadow-sm pointer-events-none"
        style={{ aspectRatio: '1 / 1' }}
      />
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow shrink-0"
        aria-label="KovilGo Home"
      >
        {imageElement}
      </Link>
    );
  }

  return imageElement;
}
