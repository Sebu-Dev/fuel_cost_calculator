export interface Contact {
  address: string;
  phoneNo: string;
  emailPrivate: string;
  emailWorking: string;
}

export interface FuelCostCalculator {
  HEADLINE: string;
  DISTANCE: string;
  FUELEFFICIENCY: string;
  FUELPRICE: string;
  BUTTONCALCULATE: string;
  DETERMINEDFUELCOST: string;
  CARPOOL_FORMATION: string;
}

export type LanguageKey = 'en' | 'de';

export interface Language {
  CONTACT: Contact;
  FUELCOSTCALCULATOR: FuelCostCalculator;
  GET_IN_TOUCH_HEADLINE: string;
  CARPOOL: {
    DRIVER: {
      TITLE: string;
      DISTANCELABLE: string;
      TRIPSPLACEHOLDER: string;
      DISTANCEPLACEHOLDER: string;
    };
    PASSENGER: {
      TITLE: string;
      DISTANCELABLE: string;
      TRIPSPLACEHOLDER: string;
      DISTANCEPLACEHOLDER: string;
    };
  };
}
