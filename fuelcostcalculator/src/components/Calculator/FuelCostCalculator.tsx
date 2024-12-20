import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useFuelState } from '../Hooks/useFuelState';
import { useTabs } from '../Hooks/UseTabs';
import { useTripState } from '../Hooks/UseTripState';
import { Card } from './Card';
import FuelInputField from './FuelInputFields';

import { calculateTripCost } from './Helper';
import InputSection from './InputSection';
import { TabContent } from './TabContent';
import { TabsComponent } from './TabsComponent';
import { TripInput } from './TripInput';

const FuelCostCalculator = () => {
  const { translations } = useLanguage();
  const [result, setResult] = useState<number>(0);
  const {
    driverTrips,
    setDriverTrips,
    driverDistance,
    setDriverDistance,
    passengerTrips,
    setPassengerTrips,
    passengerDistance,
    setPassengerDistance
  } = useTripState();
  const { fuelEfficiency, setFuelEfficiency, fuelPrice, setFuelPrice } = useFuelState();
  const { activeTab, setActiveTab } = useTabs('singleDriveTab');

  const tabs = [
    { id: 'singleDriveTab', label: translations.FUELCOSTCALCULATOR.TABS.SINGLE_DRIVE },
    { id: 'carPoolDriveTab', label: translations.FUELCOSTCALCULATOR.TABS.CARPOOL_DRIVE }
  ];

  const calculateCost = () => {
    if (!fuelEfficiency || !fuelPrice) return;
    const driverCost = calculateTripCost(driverDistance, driverTrips, fuelEfficiency, fuelPrice);
    const passengerCost = calculateTripCost(
      passengerDistance,
      passengerTrips,
      fuelEfficiency,
      fuelPrice
    );
    const result = driverCost + passengerCost;
    setResult(result);
  };

  const renderResult = () =>
    result !== null && (
      <div className="text-center mt-8">
        <p className="text-2xl font-semibold text-neutral-300">
          {translations.FUELCOSTCALCULATOR.RESULT_TEXT}
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
          <FuelInputField
            labelKey={'FUEL_EFFICIENCY_LABEL'}
            value={fuelEfficiency}
            setValue={setFuelEfficiency}
          />
          <FuelInputField labelKey={'FUEL_PRICE_LABEL'} value={fuelPrice} setValue={setFuelPrice} />
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
        <TabsComponent tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}>
          <TabContent activeTab={activeTab} content={tabContent} />
        </motion.div>
      </div>
      <div className="flex justify-center my-8">
        <motion.button
          onClick={calculateCost}
          className="px-6 py-3 bg-cyan-500 text-white rounded-full shadow-lg"
          whileHover={{ scale: 1.1, backgroundColor: '#38bdf8' }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}>
          {translations.FUELCOSTCALCULATOR.CALCULATE_BUTTON}
        </motion.button>
      </div>
      {renderResult()}
    </motion.div>
  );
};

export default FuelCostCalculator;
