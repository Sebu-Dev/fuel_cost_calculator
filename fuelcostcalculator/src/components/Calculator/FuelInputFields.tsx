import { useLanguage } from '../../context/LanguageContext';
import type { FuelCostCalculator } from '../../types/types';

type LabelKey = {
  [key in keyof FuelCostCalculator]: FuelCostCalculator[key] extends string ? key : never;
}[keyof FuelCostCalculator];

interface FuelInputFieldProps {
  labelKey: LabelKey;
  value: number | null;
  setValue: (value: number | 0) => void;
  isDisplayLabelText?: boolean;
}

const FuelInputField = ({
  labelKey,
  value,
  setValue,
  isDisplayLabelText = true
}: FuelInputFieldProps) => {
  const { translations } = useLanguage();

  return (
    <>
      {isDisplayLabelText && (
        <label className="mb-2 text-neutral-300">{translations.FUELCOSTCALCULATOR[labelKey]}</label>
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
