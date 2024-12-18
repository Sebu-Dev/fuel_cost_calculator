import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { TripInput } from './TripInput';

interface CarPoolProps {
  driverTrips: number | 0;
  driverDistance: number | 0;
  passengerTrips: number | 0;
  passengerDistance: number | 0;
  setDriverTrips: (value: number | 0) => void;
  setDriverDistance: (value: number | 0) => void;
  setPassengerTrips: (value: number | 0) => void;
  setPassengerDistance: (value: number | 0) => void;
}

export const CarPool: React.FC<CarPoolProps> = ({
  driverDistance,
  driverTrips,
  setDriverDistance,
  setDriverTrips,
  passengerDistance,
  passengerTrips,
  setPassengerDistance,
  setPassengerTrips
}) => {
  const { translations } = useLanguage();

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-6">
      {/* Fahrer */}
      <TripInput
        title={translations.CARPOOL.DRIVER.TITLE}
        distanceLabel={translations.CARPOOL.DRIVER.DISTANCELABLE}
        tripsValue={driverTrips}
        distanceValue={driverDistance}
        onTripsChange={setDriverTrips}
        onDistanceChange={setDriverDistance}
        placeholderTrips={translations.CARPOOL.DRIVER.TRIPSPLACEHOLDER}
        placeholderDistance={translations.CARPOOL.DRIVER.DISTANCEPLACEHOLDER}
      />

      {/* Mitfahrer */}
      <TripInput
        title={translations.CARPOOL.PASSENGER.TITLE}
        distanceLabel={translations.CARPOOL.PASSENGER.DISTANCELABLE}
        tripsValue={passengerTrips}
        distanceValue={passengerDistance}
        onTripsChange={setPassengerTrips}
        onDistanceChange={setPassengerDistance}
        placeholderTrips={translations.CARPOOL.PASSENGER.TRIPSPLACEHOLDER}
        placeholderDistance={translations.CARPOOL.PASSENGER.DISTANCEPLACEHOLDER}
      />
    </div>
  );
};
