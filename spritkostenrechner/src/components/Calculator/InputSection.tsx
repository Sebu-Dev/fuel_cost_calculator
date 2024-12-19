import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from './Card';
import { CarPool } from './CarPool';
import FuelEfficiency from './FuelEfficiency';
import FuelPrice from './FuelPrice';

type InputSectionProps = {
  driverTrips: number;
  driverDistance: number;
  passengerTrips: number;
  passengerDistance: number;
  setDriverTrips: (value: number) => void;
  setDriverDistance: (value: number) => void;
  setPassengerTrips: (value: number) => void;
  setPassengerDistance: (value: number) => void;
  fuelEfficiency: number;
  setFuelEfficiency: (value: number) => void;
  fuelPrice: number;
  setFuelPrice: (value: number) => void;
};

// InputSection-Komponente
export const InputSection: React.FC<InputSectionProps> = ({
  driverTrips,
  driverDistance,
  passengerTrips,
  passengerDistance,
  setDriverTrips,
  setDriverDistance,
  setPassengerTrips,
  setPassengerDistance,
  fuelEfficiency,
  setFuelEfficiency,
  fuelPrice,
  setFuelPrice
}) => {
  const { translations } = useLanguage();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 mb-6   max-w-4xl mx-auto">
      <div className="lg:col-span-2 sm:col-span-2">
        <Card title={translations.FUELCOSTCALCULATOR.CARDS.DRIVER_INPUT}>
          <CarPool
            driverTrips={driverTrips}
            driverDistance={driverDistance}
            passengerTrips={passengerTrips}
            passengerDistance={passengerDistance}
            setDriverTrips={setDriverTrips}
            setDriverDistance={setDriverDistance}
            setPassengerTrips={setPassengerTrips}
            setPassengerDistance={setPassengerDistance}
          />
        </Card>
      </div>
      <div className="sm:col-span-1 lg:col-span-1 flex flex-col  ">
        <Card title={translations.FUELCOSTCALCULATOR.FUEL_EFFICIENCY_TITLE}>
          <FuelEfficiency
            fuelEfficiency={fuelEfficiency}
            setFuelEfficiency={setFuelEfficiency}
            isDisplayLableText={false}
          />
        </Card>
      </div>
      <div className="sm:col-span-1 lg:col-span-1 flex flex-col   ">
        <Card title={translations.FUELCOSTCALCULATOR.FUEL_PRICE_TITLE}>
          <FuelPrice fuelPrice={fuelPrice} setFuelPrice={setFuelPrice} isDisplayLableText={false} />
        </Card>
      </div>
    </div>
  );
};

export default InputSection;
