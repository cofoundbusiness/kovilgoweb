import { describe, it, expect } from 'vitest';
import { DESTINATIONS, JOURNEYS, OFFBEAT_SPOTS } from '@/data/travel-data';

describe('Travel Data Integrity', () => {
  it('contains all 8 curated destinations including new carousel destinations', () => {
    const slugs = DESTINATIONS.map((d) => d.slug);
    expect(slugs).toContain('goa');
    expect(slugs).toContain('ooty');
    expect(slugs).toContain('kerala');
    expect(slugs).toContain('kodaikanal');
    expect(slugs).toContain('chettinad');
    expect(slugs).toContain('hampi-anegundi');
    expect(slugs).toContain('darasuram-kumbakonam');
    expect(slugs).toContain('lepakshi-gandikota');
    expect(DESTINATIONS.length).toBe(8);
  });

  it('validates that every destination has required fields and highlights', () => {
    DESTINATIONS.forEach((dest) => {
      expect(dest.slug).toBeTruthy();
      expect(dest.name).toBeTruthy();
      expect(dest.tagline).toBeTruthy();
      expect(dest.overview).toBeTruthy();
      expect(dest.heroImage).toMatch(/^https:\/\//);
      expect(dest.highlights.length).toBeGreaterThanOrEqual(3);
      expect(dest.idealDuration).toBeTruthy();
      expect(dest.bestSeason).toBeTruthy();
    });
  });

  it('validates journeys data integrity', () => {
    expect(JOURNEYS.length).toBeGreaterThan(0);
    JOURNEYS.forEach((j) => {
      expect(j.slug).toBeTruthy();
      expect(j.title).toBeTruthy();
      expect(j.itinerary.length).toBeGreaterThan(0);
    });
  });

  it('validates offbeat spots data integrity', () => {
    expect(OFFBEAT_SPOTS.length).toBe(8);
    OFFBEAT_SPOTS.forEach((spot) => {
      expect(spot.id).toBeTruthy();
      expect(spot.slug).toBeTruthy();
      expect(spot.name).toBeTruthy();
      expect(spot.category).toBeTruthy();
      expect(spot.whyUnderrated).toBeTruthy();
      expect(spot.image).toMatch(/^https:\/\//);
      expect(spot.travelTip).toBeTruthy();
    });
  });
});
