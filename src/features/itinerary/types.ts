export interface ItineraryDay {
  dayNumber: number;
  title: string;
  morningPlan: string;
  afternoonPlan?: string;
  eveningPlan: string;
  darshanSlots?: string[];
  overnightStayLocation: string;
}
