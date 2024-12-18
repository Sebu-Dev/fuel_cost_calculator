import type { Language } from '../types/types.ts';

export const DE: Language = {
  CONTACT: {
    address: 'Ilsede, 31246',
    phoneNo: '01741604200',
    emailPrivate: 'fsebulke@gmail.com',
    emailWorking: 'Florian.Sebulke@Volkswagen.de (SE-A/32)'
  },
  FUELCOSTCALCULATOR: {
    HEADLINE: 'Kraftstoffkostenrechner',
    DISTANCE: 'Entfernung (km)',
    FUELEFFICIENCY: 'Kraftstoffverbrauch (L/100km)',
    FUELPRICE: 'Kraftstoffpreis (€/L)',
    BUTTONCALCULATE: 'Berechne',
    DETERMINEDFUELCOST: 'Ermittelte Kosten:',
    CARPOOL_FORMATION: ' Fahrgemeinschaft bilden'
  },
  GET_IN_TOUCH_HEADLINE: 'Kontakt',
  CARPOOL: {
    DRIVER: {
      TITLE: 'Wie oft warst du der Fahrer?',
      DISTANCELABLE: 'Entfernung',
      TRIPSPLACEHOLDER: '0',
      DISTANCEPLACEHOLDER: 'Entfernung eingeben (km)'
    },
    PASSENGER: {
      TITLE: 'Wie oft warst du Mitfahrer?',
      DISTANCELABLE: 'Entfernung zum Treffpunkt',
      TRIPSPLACEHOLDER: '0',
      DISTANCEPLACEHOLDER: 'Entfernung eingeben (km)'
    }
  }
};
