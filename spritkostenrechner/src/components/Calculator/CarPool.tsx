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
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-6 gap-x-12">
        {/* Fahrer */}
        <TripInput
          title={translations.FUELCOSTCALCULATOR.CARPOOL.DRIVER.TITLE}
          distanceLabel={translations.FUELCOSTCALCULATOR.CARPOOL.DRIVER.DISTANCE_LABEL}
          tripsValue={driverTrips}
          distanceValue={driverDistance}
          onTripsChange={setDriverTrips}
          onDistanceChange={setDriverDistance}
          placeholderTrips={translations.FUELCOSTCALCULATOR.CARPOOL.DRIVER.TRIPS_PLACEHOLDER}
          placeholderDistance={translations.FUELCOSTCALCULATOR.CARPOOL.DRIVER.DISTANCE_PLACEHOLDER}
        />
        {/* Mitfahrer */}
        <TripInput
          title={translations.FUELCOSTCALCULATOR.CARPOOL.PASSENGER.TITLE}
          distanceLabel={translations.FUELCOSTCALCULATOR.CARPOOL.PASSENGER.DISTANCE_LABEL}
          tripsValue={passengerTrips}
          distanceValue={passengerDistance}
          onTripsChange={setPassengerTrips}
          onDistanceChange={setPassengerDistance}
          placeholderTrips={translations.FUELCOSTCALCULATOR.CARPOOL.PASSENGER.TRIPS_PLACEHOLDER}
          placeholderDistance={
            translations.FUELCOSTCALCULATOR.CARPOOL.PASSENGER.DISTANCE_PLACEHOLDER
          }
        />
      </div>
    </div>
  );
};
