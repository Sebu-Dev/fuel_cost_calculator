import React, { useState } from 'react';
import Distance from './Distance';

interface DummyProps {
  distance: number | null;
  setDistance: (value: number | 0) => void;
}

export const Dummy: React.FC<DummyProps> = () => {
  const [driverTrips, setDriverTrips] = useState(0);
  const [driverDistance, setDriverDistance] = useState(0);
  const [passengerTrips, setPassengerTrips] = useState(0);
  const [passengerDistance, setPassengerDistance] = useState(0);

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-6">
      {/* Wie oft warst du der Fahrer? */}
      <div className="w-full sm:w-1/3 lg:w-1/4">
        <div className="flex flex-col items-center bg-neutral-800 p-6 rounded-2xl shadow-lg">
          <label className="mb-2 text-neutral-300">Wie oft warst du der Fahrer?</label>
          <input
            type="number"
            value={driverTrips}
            onChange={(e) => setDriverTrips(Number(e.target.value))}
            className="bg-neutral-900 text-neutral-300 rounded-lg p-2 mb-4 w-full"
            placeholder="Anzahl der Fahrten als Fahrer"
          />
        </div>
      </div>
      <Distance distance={driverDistance} setDistance={setDriverDistance} />
      {/* Wie oft warst du der Mitfahrer? */}
      <div className="w-full sm:w-1/3 lg:w-1/4">
        <div className="flex flex-col items-center bg-neutral-800 p-6 rounded-2xl shadow-lg">
          <label className="mb-2 text-neutral-300">Wie oft warst du Mitfahrer?</label>
          <input
            type="number"
            value={passengerTrips}
            onChange={(e) => setPassengerTrips(Number(e.target.value))}
            className="bg-neutral-900 text-neutral-300 rounded-lg p-2 mb-4 w-full"
            placeholder="Anzahl der Fahrten als Mitfahrer"
          />
        </div>
      </div>
      <Distance distance={passengerDistance} setDistance={setPassengerDistance} />
    </div>
  );
};
