import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface DistanceProps {
  distance: number;
  setDistance: (value: number) => void;
}

export const Distance: React.FC<DistanceProps> = ({ distance, setDistance }) => {
  const { translations } = useLanguage();

  return (
    <div className="w-full sm:w-1/3 lg:w-1/4">
      <div className="flex flex-col items-center bg-neutral-800 p-6 rounded-2xl shadow-lg">
        <label className="mb-2 text-neutral-300">{translations.FUELCOSTCALCULATOR.distance}</label>
        <input
          type="number"
          value={distance || ''}
          onChange={(e) => setDistance(e.target.value ? Number(e.target.value) : 0)}
          className="bg-neutral-900 text-neutral-300 rounded-lg p-2 mb-4 w-full"
          placeholder={translations.FUELCOSTCALCULATOR.distance}
        />
      </div>
    </div>
  );
};

export default Distance;
