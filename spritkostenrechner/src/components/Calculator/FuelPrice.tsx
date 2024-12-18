import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface FuelPriceProps {
  fuelPrice: number | null;
  setFuelPrice: (value: number | 0) => void;
}

export const FuelPrice: React.FC<FuelPriceProps> = ({ fuelPrice, setFuelPrice }) => {
  const { translations } = useLanguage();
  return (
    <div className="w-full sm:w-1/3 lg:w-1/4">
      <div className="flex flex-col items-center bg-neutral-800 p-6 rounded-2xl shadow-lg">
        <label className="mb-2 text-neutral-300">{translations.FUELCOSTCALCULATOR.FUELPRICE}</label>{' '}
        <input
          type="number"
          value={fuelPrice || ''}
          onChange={(e) => setFuelPrice(e.target.value ? Number(e.target.value) : 0)}
          className="bg-neutral-900 text-neutral-300 rounded-lg p-2 mb-4 w-full"
          placeholder={translations.FUELCOSTCALCULATOR.FUELPRICE}
        />
      </div>
    </div>
  );
};

export default FuelPrice;
