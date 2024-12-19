import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from './Card';
import FuelEfficiency from './FuelEfficiency';
import FuelPrice from './FuelPrice';
import InputSection from './InputSection';
import { TripInput } from './TripInput';

type Trip = {
  driverDistance: number;
  driverTrips: number;
  groupTrip?: {
    passengerDistance: number;
    passengerTrips: number;
  };
};

const Tabs = ({ tabs, activeTab, setActiveTab }: any) => (
  <div className="flex justify-center gap-6 mb-6 p-2 rounded-lg shadow-lg flex-wrap max-w-full overflow-hidden">
    {tabs.map((tab: any) => (
      <motion.button
        key={tab.id}
        className={`px-6 py-3 text-lg font-semibold transition-all ${
          activeTab === tab.id
            ? 'bg-cyan-600 text-white'
            : 'bg-neutral-700 text-neutral-400 hover:bg-neutral-600 hover:text-white'
        } rounded-md focus:outline-none`}
        onClick={() => setActiveTab(tab.id)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300 }}>
        {tab.label}
      </motion.button>
    ))}
  </div>
);

const FuelCostCalculator = () => {
  const { translations } = useLanguage();
  const [fuelEfficiency, setFuelEfficiency] = useState<number>(0);
  const [fuelPrice, setFuelPrice] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [driverTrips, setDriverTrips] = useState(0);
  const [driverDistance, setDriverDistance] = useState(0);
  const [passengerTrips, setPassengerTrips] = useState(0);
  const [passengerDistance, setPassengerDistance] = useState(0);
  const [activeTab, setActiveTab] = useState('singleDriveTab');

  const tabs = [
    { id: 'singleDriveTab', label: translations.FUELCOSTCALCULATOR.TABS.SINGLE_DRIVE },
    { id: 'carPoolDriveTab', label: translations.FUELCOSTCALCULATOR.TABS.CARPOOL_DRIVE }
  ];

  const calculateCost = () => {
    const calculateTripCost = (distance: number, trips: number) =>
      ((distance * trips) / 100) * fuelEfficiency * fuelPrice;

    if (!fuelEfficiency || !fuelPrice) return;

    const cost =
      calculateTripCost(driverDistance, driverTrips) +
      (activeTab === 'singleDriveTab' ? calculateTripCost(passengerDistance, passengerTrips) : 0);

    setResult(cost > 0 ? cost : 0);
  };

  const renderResult = () =>
    result !== null && (
      <div className="text-center mt-8">
        <p className="text-2xl font-semibold text-neutral-300">
          {translations.FUELCOSTCALCULATOR.RESULT_TEXT}{' '}
          <span className="text-cyan-400">{result.toFixed(2)} €</span>
        </p>
      </div>
    );

  const tabContent = {
    singleDriveTab: (
      <div className="mt-6 p-2 bg-neutral-800 rounded-2xl shadow-lg flex flex-col m-2 max-w-xl mx-auto">
        <Card title={translations.FUELCOSTCALCULATOR.CARDS.DRIVER_INPUT}>
          <TripInput
            title={translations.FUELCOSTCALCULATOR.CARPOOL.DRIVER.TITLE}
            distanceLabel={translations.FUELCOSTCALCULATOR.CARPOOL.DRIVER.DISTANCE_LABEL}
            tripsValue={driverTrips}
            distanceValue={driverDistance}
            onTripsChange={setDriverTrips}
            onDistanceChange={setDriverDistance}
            placeholderTrips="0"
            placeholderDistance={translations.FUELCOSTCALCULATOR.DISTANCE_LABEL}
          />
          <FuelEfficiency fuelEfficiency={fuelEfficiency} setFuelEfficiency={setFuelEfficiency} />
          <FuelPrice fuelPrice={fuelPrice} setFuelPrice={setFuelPrice} />
        </Card>
      </div>
    ),
    carPoolDriveTab: (
      <div>
        <InputSection
          driverTrips={driverTrips}
          driverDistance={driverDistance}
          passengerTrips={passengerTrips}
          passengerDistance={passengerDistance}
          setDriverTrips={setDriverTrips}
          setDriverDistance={setDriverDistance}
          setPassengerTrips={setPassengerTrips}
          setPassengerDistance={setPassengerDistance}
          fuelEfficiency={fuelEfficiency}
          setFuelEfficiency={setFuelEfficiency}
          fuelPrice={fuelPrice}
          setFuelPrice={setFuelPrice}
        />
      </div>
    )
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="border-b flex-grow border-neutral-900 pb-8 ">
      <h1 className="text-center text-4xl mb-10 flex-wrap max-w-full overflow-hidden">
        {translations.FUELCOSTCALCULATOR.TITLE}
      </h1>
      <div className="flex flex-col justify-center w-full ">
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        {tabContent[activeTab]}
      </div>
      <div className="flex justify-center my-8">
        <button
          onClick={calculateCost}
          className="px-6 py-3 bg-cyan-500 text-white rounded-full shadow-lg hover:bg-cyan-600 transition-all">
          {translations.FUELCOSTCALCULATOR.CALCULATE_BUTTON}
        </button>
      </div>
      {renderResult()}
    </motion.div>
  );
};

export default FuelCostCalculator;
