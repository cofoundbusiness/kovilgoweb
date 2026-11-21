export interface OffbeatExperience {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  destinationId: string;
  category: 'hidden_temple' | 'sacred_grove' | 'cultural_ritual' | 'artisan_village' | 'scenic_trail';
  accessDifficulty: 'easy' | 'moderate' | 'challenging';
  durationHours: number;
}
