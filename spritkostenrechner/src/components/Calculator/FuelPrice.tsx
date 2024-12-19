import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface FuelPriceProps {
  fuelPrice: number;
  setFuelPrice: (value: number) => void;
  isDisplayLableText?: boolean;
}

export const FuelPrice: React.FC<FuelPriceProps> = ({
  fuelPrice,
  setFuelPrice,
  isDisplayLableText = true
}) => {
  const { translations } = useLanguage();
  return (
    <div className="flex flex-col ">
      {isDisplayLableText && (
        <label className="mb-2 text-neutral-300">
          {translations.FUELCOSTCALCULATOR.FUEL_PRICE_LABEL}
        </label>
      )}
      <input
        type="number"
        value={fuelPrice || ''}
        onChange={(e) => setFuelPrice(e.target.value ? Number(e.target.value) : 0)}
        className="bg-neutral-900 text-neutral-300 rounded-lg p-2 mb-2 w-full"
        placeholder={translations.FUELCOSTCALCULATOR.FUEL_PRICE_LABEL}
      />
    </div>
  );
};

export default FuelPrice;
