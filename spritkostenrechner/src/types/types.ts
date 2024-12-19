export interface Contact {
  address: string;
  phoneNo: string;
  emailPrivate: string;
  emailWorking: string;
}

export interface FuelCostCalculator {
  TITLE: string;
  DISTANCE_LABEL: string;
  FUEL_EFFICIENCY_LABEL: string;
  FUEL_EFFICIENCY_TITLE: string;
  FUEL_PRICE_LABEL: string;
  FUEL_PRICE_TITLE: string;
  CALCULATE_BUTTON: string;
  RESULT_TEXT: string;

  CARDS: {
    DRIVER_INPUT: string;
  };

  CARPOOL: {
    DRIVER: {
      TITLE: string;
      DISTANCE_LABEL: string;
      TRIPS_PLACEHOLDER: string;
      DISTANCE_PLACEHOLDER: string;
    };
    PASSENGER: {
      TITLE: string;
      DISTANCE_LABEL: string;
      TRIPS_PLACEHOLDER: string;
      DISTANCE_PLACEHOLDER: string;
    };
  };
  TABS: {
    SINGLE_DRIVE: string;
    CARPOOL_DRIVE: string;
  };
}

export type LanguageKey = 'en' | 'de';

export interface Language {
  CONTACT: Contact;
  FUELCOSTCALCULATOR: FuelCostCalculator;
  GET_IN_TOUCH_HEADLINE: string;
}
