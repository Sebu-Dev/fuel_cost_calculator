import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

import { CarPool } from './CarPool';
import Distance from './Distance';
import FuelEfficiency from './FuelEfficiency';
import FuelPrice from './FuelPrice';
import Carpool from './IsCarpool';

type Trip = {
  driverDistance: number;
  driverTrips: number | 1;
  groupTrip?: {
    passengerDistance: number | 0;
    passengerTrips: number | 0;
  };
};
const FuelCostCalculator = () => {
  const { translations } = useLanguage();
  const [carpooling, setCarpooling] = useState(false);
  const [fuelEfficiency, setFuelEfficiency] = useState<number>(0);
  const [fuelPrice, setFuelPrice] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [driverTrips, setDriverTrips] = useState(1);
  const [driverDistance, setDriverDistance] = useState(0);
  const [passengerTrips, setPassengerTrips] = useState(1);
  const [passengerDistance, setPassengerDistance] = useState(0);

  const calculateCost = (trip: Trip) => {
    let cost;
    if (trip) {
      let distance = trip.driverDistance;
      let tripAmmount = trip.driverTrips;
      if (distance && fuelEfficiency && fuelPrice) {
        cost = ((distance * tripAmmount) / 100) * fuelEfficiency * fuelPrice;
        if (trip.groupTrip) {
          distance = trip.groupTrip.passengerDistance;
          tripAmmount = trip.groupTrip.passengerTrips;
          cost += ((distance * tripAmmount) / 100) * fuelEfficiency * fuelPrice;
        }
      }
      if (cost) {
        setResult(cost);
      }
    }
  };
  const callCalculateCost = () => {
    let trip: Trip;
    if (carpooling) {
      trip = {
        driverDistance,
        driverTrips,
        groupTrip: {
          passengerDistance,
          passengerTrips
        }
      };
    } else {
      trip = {
        driverDistance,
        driverTrips
      };
    }
    calculateCost(trip);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="border-b flex-grow border-neutral-900 pb-8">
      <h2 className="my-20 text-center text-4xl">{translations.FUELCOSTCALCULATOR.headline}</h2>
      <Carpool carpooling={carpooling} setCarpooling={setCarpooling} />
      {carpooling && (
        <div className=" mb-6">
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
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Input Fields */}
        {!carpooling && <Distance distance={driverDistance} setDistance={setDriverDistance} />}
        <FuelEfficiency fuelEfficiency={fuelEfficiency} setFuelEfficiency={setFuelEfficiency} />
        <FuelPrice fuelPrice={fuelPrice} setFuelPrice={setFuelPrice} />
      </div>
      {/* Calculate Button */}
      <div className="flex justify-center my-8">
        <button
          onClick={carpooling ? callCalculateCost : callCalculateCost}
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
