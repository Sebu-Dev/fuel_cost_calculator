import type { Language } from '../types/types';

export const EN: Language = {
  CONTACT: {
    address: 'Ilsede, 31246',
    phoneNo: '01741604200',
    emailPrivate: 'fsebulke@gmail.com',
    emailWorking: 'Florian.Sebulke@Volkswagen.de (SE-A/32)'
  },
  FUELCOSTCALCULATOR: {
    TITLE: 'Fuel Cost Calculator',
    DISTANCE_LABEL: 'Distance (km)',
    FUEL_EFFICIENCY_LABEL: 'Fuel Efficiency (L/100km)',
    FUEL_PRICE_LABEL: 'Fuel Price (€/L)',
    CALCULATE_BUTTON: 'Calculate',
    RESULT_TEXT: 'Cost:',

    CARDS: {
      DRIVER_INPUT: 'Driver input'
    },
    CARPOOL: {
      DRIVER: {
        TITLE: 'Driver frequency?',
        DISTANCE_LABEL: 'Distance',
        TRIPS_PLACEHOLDER: '0',
        DISTANCE_PLACEHOLDER: 'Enter distance in km'
      },
      PASSENGER: {
        TITLE: 'Passenger frequency?',
        DISTANCE_LABEL: 'Distance to meeting point',
        TRIPS_PLACEHOLDER: '0',
        DISTANCE_PLACEHOLDER: 'Enter distance in km'
      }
    },
    TABS: {
      SINGLE_DRIVE: 'Single ',
      CARPOOL_DRIVE: 'Carpool '
    },
    FUEL_EFFICIENCY_TITLE: 'Fuel efficiency',
    FUEL_PRICE_TITLE: 'Fuel price'
  },
  GET_IN_TOUCH_HEADLINE: 'Get in Touch'
};
