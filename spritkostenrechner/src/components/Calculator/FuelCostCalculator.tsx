import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

import Distance from './Distance';
import { Dummy } from './dummy';
import FuelEfficiency from './FuelEfficiency';
import FuelPrice from './FuelPrice';
import Carpool from './IsCarpool';

type TripData = [number, number][];

const FuelCostCalculator = () => {
  const { translations } = useLanguage();
  const [tripData, setTripData] = useState<TripData>([]);
  const [carpooling, setCarpooling] = useState(false);

  const [distance, setDistance] = useState<number>(0);
  const [fuelEfficiency, setFuelEfficiency] = useState<number>(0);
  const [fuelPrice, setFuelPrice] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const calculateCost = () => {
    if (distance && fuelEfficiency && fuelPrice) {
      const cost = (distance / 100) * fuelEfficiency * fuelPrice;
      setResult(cost);
    }
  };
  const addTrip = (start: number, end: number) => {
    setTripData((prevData) => [...prevData, [start, end]]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="border-b flex-grow border-neutral-900 pb-8">
      <h2 className="my-20 text-center text-4xl">{translations.FUELCOSTCALCULATOR.headline}</h2>

      <Carpool carpooling={carpooling} setCarpooling={setCarpooling} />
      <div className=" mb-6">
        <Dummy distance={distance} setDistance={setDistance} />
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {/* Input Fields */}
        <Distance distance={distance} setDistance={setDistance} />
        <FuelEfficiency fuelEfficiency={fuelEfficiency} setFuelEfficiency={setFuelEfficiency} />
        <FuelPrice fuelPrice={fuelPrice} setFuelPrice={setFuelPrice} />
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
