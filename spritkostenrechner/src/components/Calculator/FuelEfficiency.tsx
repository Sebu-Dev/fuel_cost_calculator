import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface FuelEfficiencyProps {
  isDisplayLableText?: boolean;
  fuelEfficiency: number | null;
  setFuelEfficiency: (value: number | 0) => void;
}

export const FuelEfficiency: React.FC<FuelEfficiencyProps> = ({
  fuelEfficiency,
  setFuelEfficiency,
  isDisplayLableText = true
}) => {
  const { translations } = useLanguage();

  return (
    <>
      {isDisplayLableText && (
        <label className="mb-2 text-neutral-300">
          {translations.FUELCOSTCALCULATOR.FUEL_EFFICIENCY_LABEL}
        </label>
      )}
      <input
        type="number"
        value={fuelEfficiency || ''}
        onChange={(e) => setFuelEfficiency(e.target.value ? Number(e.target.value) : 0)}
        className="bg-neutral-900 text-neutral-300 rounded-lg p-2 mb-4 w-full"
        placeholder={translations.FUELCOSTCALCULATOR.FUEL_EFFICIENCY_LABEL}
      />
    </>
  );
};

export default FuelEfficiency;
