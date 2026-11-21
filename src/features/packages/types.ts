export interface TravelPackage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  destinationId: string;
  durationDays: number;
  durationNights: number;
  basePriceInr: number;
  inclusions: string[];
  exclusions: string[];
  isPublished: boolean;
}
