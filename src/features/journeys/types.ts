export interface CuratedJourney {
  id: string;
  slug: string;
  title: string;
  editorialLead: string;
  circuits: string[];
  recommendedPace: 'relaxed' | 'immersive' | 'rapid';
  totalDays: number;
}
