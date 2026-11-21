export interface DestinationSummary {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  coverImageUrl: string;
  region: string;
  templeCount?: number;
  isFeatured: boolean;
}

export interface DestinationDetail extends DestinationSummary {
  description: string;
  historicalSignificance?: string;
  bestTimeToVisit?: string;
  nearestAirport?: string;
  nearestRailway?: string;
  dressCodeGuidelines?: string;
}
