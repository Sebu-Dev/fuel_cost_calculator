import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Dummy } from '../Calculator/dummy';

const FuelCostCalculator = () => {
  const { translations } = useLanguage();
  const [distance, setDistance] = useState(0);
  const [fuelEfficiency, setFuelEfficiency] = useState(0);
  const [fuelPrice, setFuelPrice] = useState(0);
  const [result, setResult] = useState<number | null>(null);

  const calculateCost = () => {
    if (distance && fuelEfficiency && fuelPrice) {
      const cost = (distance / 100) * fuelEfficiency * fuelPrice;
      setResult(cost);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} // Startet mit Transparenz
      animate={{ opacity: 1 }} // Wird vollständig sichtbar
      transition={{ duration: 1 }} // Dauer der Animation
      className="border-b flex-grow border-neutral-900 pb-8">
      <h2 className="my-20 text-center text-4xl">{translations.FUELCOSTCALCULATOR.headline}</h2>

      <div className="flex flex-wrap justify-center gap-6">
        <Dummy />
        {/* Input Fields */}
        <div className="w-full sm:w-1/3 lg:w-1/4">
          <div className="flex flex-col items-center bg-neutral-800 p-6 rounded-2xl shadow-lg">
            <label className="mb-2 text-neutral-300">
              {translations.FUELCOSTCALCULATOR.distance}
            </label>
            <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              className="bg-neutral-900 text-neutral-300 rounded-lg p-2 mb-4 w-full"
              placeholder="Enter distance"
            />
          </div>
        </div>

        <div className="w-full sm:w-1/3 lg:w-1/4">
          <div className="flex flex-col items-center bg-neutral-800 p-6 rounded-2xl shadow-lg">
            <label className="mb-2 text-neutral-300">
              {translations.FUELCOSTCALCULATOR.fuelEfficiency}
            </label>
            <input
              type="number"
              value={fuelEfficiency}
              onChange={(e) => setFuelEfficiency(Number(e.target.value))}
              className="bg-neutral-900 text-neutral-300 rounded-lg p-2 mb-4 w-full"
              placeholder="Enter fuel efficiency"
            />
          </div>
        </div>

        <div className="w-full sm:w-1/3 lg:w-1/4">
          <div className="flex flex-col items-center bg-neutral-800 p-6 rounded-2xl shadow-lg">
            <label className="mb-2 text-neutral-300">
              {translations.FUELCOSTCALCULATOR.fuelPrice}
            </label>
            <input
              type="number"
              value={fuelPrice}
              onChange={(e) => setFuelPrice(Number(e.target.value))}
              className="bg-neutral-900 text-neutral-300 rounded-lg p-2 mb-4 w-full"
              placeholder="Enter fuel price"
            />
          </div>
        </div>
      </div>

      {/* Calculate Button */}
      <div className="flex justify-center my-8">
        <button
          onClick={calculateCost}
          className="px-6 py-3 bg-cyan-500 text-white rounded-full shadow-lg hover:bg-cyan-600 transition-all">
          {translations.FUELCOSTCALCULATOR.buttonCalculate}
        </button>
      </div>

      {/* Result */}
      {result !== null && (
        <div className="text-center mt-8">
          <p className="text-2xl font-semibold text-neutral-300">
            {translations.FUELCOSTCALCULATOR.estimatedFuelCost}
            <span className="text-cyan-400">{result.toFixed(2)} €</span>
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default FuelCostCalculator;
