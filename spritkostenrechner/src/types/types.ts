export interface Contact {
  address: string;
  phoneNo: string;
  emailPrivate: string;
  emailWorking: string;
}
export interface FuelCostCalculator {
  headline: string;
  distance: string;
  fuelEfficiency: string;
  fuelPrice: string;
  buttonCalculate: string;
  estimatedFuelCost: string;
}

export type LanguageKey = 'en' | 'de';

export interface Language {
  CONTACT: Contact;
  FUELCOSTCALCULATOR: FuelCostCalculator;
  GET_IN_TOUCH_HEADLINE: string;
}
