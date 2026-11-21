export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[60vh] w-full flex-col items-center justify-center p-8"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-grey border-t-brand-yellow" />
      <span className="mt-4 text-sm font-medium tracking-wide text-muted-foreground uppercase">
        Loading KovilGo...
      </span>
      <span className="sr-only">Loading content, please wait</span>
    </div>
  );
}
