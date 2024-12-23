import type { Language } from '../types/types.ts';

export const DE: Language = {
  CONTACT: {
    address: 'Ilsede, 31246',
    phoneNo: '01741604200',
    emailPrivate: 'fsebulke@gmail.com',
    emailWorking: 'Florian.Sebulke@Volkswagen.de (SE-A/32)'
  },
  FUELCOSTCALCULATOR: {
    TITLE: 'Kraftstoff Kosten Rechner',
    DISTANCE_LABEL: 'Entfernung (km)',
    FUEL_EFFICIENCY_LABEL: 'Verbrauch (L/100km)',
    FUEL_PRICE_LABEL: 'Kraftstoffpreis (€/L)',
    CALCULATE_BUTTON: 'Berechne',
    RESULT_TEXT: 'Kosten:',

    CARDS: {
      DRIVER_INPUT: 'Fahrereingabe'
    },
    CARPOOL: {
      DRIVER: {
        TITLE: 'Wie oft bist du gefahren?',
        DISTANCE_LABEL: 'Entfernung',
        TRIPS_PLACEHOLDER: '0',
        DISTANCE_PLACEHOLDER: 'Entfernung eingeben (km)'
      },
      PASSENGER: {
        TITLE: 'Wie oft bist du zum Treffpunkt gefahren?',
        DISTANCE_LABEL: 'Entfernung zum Treffpunkt',
        TRIPS_PLACEHOLDER: '0',
        DISTANCE_PLACEHOLDER: 'Entfernung eingeben (km)'
      }
    },
    TABS: {
      SINGLE_DRIVE: 'Fahrtkosten',
      CARPOOL_DRIVE: 'Fahrtkosten mit Fahrgemeinschaft'
    },
    FUEL_EFFICIENCY_TITLE: 'Kraftstoffeffizienz',
    FUEL_PRICE_TITLE: 'Kraftstoffpreis'
  },
  GET_IN_TOUCH_HEADLINE: 'Kontakt'
};
