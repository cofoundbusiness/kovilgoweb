export interface VehicleOption {
  id: string;
  category: 'sedan' | 'suv_premium' | 'innova_crysta' | 'tempo_traveller' | 'luxury_coach';
  capacitySeats: number;
  luggageCapacityBags: number;
  hasAirConditioning: boolean;
  ratePerKmInr: number;
}
