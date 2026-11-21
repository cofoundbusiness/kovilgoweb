export interface CustomerProfile {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  city?: string;
  preferences?: {
    dietary: 'pure_veg' | 'jain_veg' | 'standard';
    seniorCitizenAssistance: boolean;
    languagePreference: 'ta' | 'en' | 'te' | 'kn' | 'hi';
  };
}
