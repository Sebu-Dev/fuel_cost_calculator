import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import type { FuelCostCalculator } from '../../types/types';

interface FuelInputFieldProps {
  labelKey: keyof FuelCostCalculator;
  value: number | null;
  setValue: (value: number | 0) => void;
  isDisplayLabelText?: boolean;
}

const FuelInputField: React.FC<FuelInputFieldProps> = ({
  labelKey,
  value,
  setValue,
  isDisplayLabelText = true
}) => {
  const { translations } = useLanguage();

  return (
    <>
      {isDisplayLabelText && (
        <label className="mb-2 text-neutral-300">
          {translations.FUELCOSTCALCULATOR[labelKey as keyof FuelCostCalculator]}
        </label>
      )}
      <input
        type="number"
        value={value || ''}
        onChange={(e) => setValue(e.target.value ? Number(e.target.value) : 0)}
        className="bg-neutral-900 text-neutral-300 rounded-lg p-2 mb-4 w-full"
        placeholder={translations.FUELCOSTCALCULATOR[labelKey]}
      />
    </>
  );
};

export default FuelInputField;
