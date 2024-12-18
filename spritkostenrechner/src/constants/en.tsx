import type { Language } from '../types/types';

export const EN: Language = {
  CONTACT: {
    address: 'Ilsede, 31246',
    phoneNo: '01741604200',
    emailPrivate: 'fsebulke@gmail.com',
    emailWorking: 'Florian.Sebulke@Volkswagen.de (SE-A/32)'
  },
  FUELCOSTCALCULATOR: {
    HEADLINE: 'Fuel Cost Calculator',
    DISTANCE: 'Distance (km)',
    FUELEFFICIENCY: 'Fuel Efficiency (L/100km)',
    FUELPRICE: 'Fuel Price (€/L)',
    BUTTONCALCULATE: 'Calculate',
    DETERMINEDFUELCOST: 'Determined Fuel Cost:',
    CARPOOL_FORMATION: 'Form a carpool'
  },
  GET_IN_TOUCH_HEADLINE: 'Get in Touch',
  CARPOOL: {
    DRIVER: {
      TITLE: 'How often were you the driver?',
      DISTANCELABLE: 'Distance',
      TRIPSPLACEHOLDER: '0',
      DISTANCEPLACEHOLDER: 'Enter distance in km'
    },
    PASSENGER: {
      TITLE: 'How often were you the passenger?',
      DISTANCELABLE: 'Distance to meeting point',
      TRIPSPLACEHOLDER: '0',
      DISTANCEPLACEHOLDER: 'Enter distance in km'
    }
  }
};
