export const calculateTripCost = (
  distance: number,
  trips: number,
  fuelEfficiency: number,
  fuelPrice: number
): number => ((distance * trips) / 100) * fuelEfficiency * fuelPrice;
