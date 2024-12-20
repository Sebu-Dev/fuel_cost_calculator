import { useState } from 'react';

export const useFuelState = () => {
  const [fuelEfficiency, setFuelEfficiency] = useState(0);
  const [fuelPrice, setFuelPrice] = useState(0);

  return {
    fuelEfficiency,
    setFuelEfficiency,
    fuelPrice,
    setFuelPrice
  };
};
