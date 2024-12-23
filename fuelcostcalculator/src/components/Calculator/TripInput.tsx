import React from 'react';

interface TripInputProps {
  title: string;
  distanceLabel: string;
  tripsValue: number;
  distanceValue: number;
  onTripsChange: (value: number) => void;
  onDistanceChange: (value: number) => void;
  placeholderTrips: string;
  placeholderDistance: string;
}

export const TripInput: React.FC<TripInputProps> = ({
  title,
  distanceLabel,
  tripsValue,
  distanceValue,
  onTripsChange,
  onDistanceChange,
  placeholderTrips,
  placeholderDistance
}) => {
  return (
    <>
      <div className="flex-col flex">
        <div className="">
          <label className="mb-2 text-neutral-300">{title}</label>
          <input
            type="number"
            value={tripsValue || ''}
            onChange={(e) => onTripsChange(Number(e.target.value))}
            className="bg-neutral-900 text-neutral-300 rounded-lg p-2 mb-4 w-full"
            placeholder={placeholderTrips}
          />
        </div>
        <div className="">
          {/*           <Checkbox />
           */}
          <label className="mb-2 text-neutral-300">{distanceLabel}</label>
          <input
            type="number"
            value={distanceValue || ''}
            onChange={(e) => onDistanceChange(Number(e.target.value))}
            className="bg-neutral-900 text-neutral-300 rounded-lg p-2 mb-4 w-full"
            placeholder={placeholderDistance}
          />
        </div>
      </div>
    </>
  );
};
