export interface HotelPartner {
  id: string;
  name: string;
  category: 'heritage' | 'boutique_resort' | 'pilgrim_comfort' | 'luxury';
  city: string;
  starRating?: number;
  pureVegKitchenAvailable: boolean;
  proximityToMainTempleKm?: number;
}
