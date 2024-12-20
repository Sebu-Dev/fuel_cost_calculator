import { useState } from 'react';

export const useTripState = () => {
  const [driverTrips, setDriverTrips] = useState(0);
  const [driverDistance, setDriverDistance] = useState(0);
  const [passengerTrips, setPassengerTrips] = useState(0);
  const [passengerDistance, setPassengerDistance] = useState(0);

  return {
    driverTrips,
    setDriverTrips,
    driverDistance,
    setDriverDistance,
    passengerTrips,
    setPassengerTrips,
    passengerDistance,
    setPassengerDistance
  };
};
