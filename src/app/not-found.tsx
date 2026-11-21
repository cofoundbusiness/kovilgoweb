import { Button } from '@/components/ui/button';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-center p-6 text-center bg-brand-ivory">
      <div className="mx-auto max-w-md space-y-4">
        <span className="font-display text-7xl sm:text-8xl font-black tracking-widest text-brand-yellow block">
          404
        </span>
        <h1 className="font-display text-3xl font-extrabold text-brand-black">
          Destination Not Found
        </h1>
        <p className="text-sm text-brand-black/70 leading-relaxed max-w-sm mx-auto">
          The trail or route you are seeking does not exist or has been relocated. Let us help you find the way back.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary" size="md" className="gap-2">
            <Compass className="h-4 w-4" />
            Return Home
          </Button>
          <Button href="/destinations" variant="outline" size="md">
            Explore Destinations
          </Button>
        </div>
      </div>
    </div>
  );
}
