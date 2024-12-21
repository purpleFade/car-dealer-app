import { Vehicle } from '@/types/vehicle';

export const fetchVehicles = async (): Promise<Vehicle[]> => {
  const response = await fetch(
    'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json',
  );

  if (!response.ok) {
    throw new Error('Failed to fetch vehicle data!');
  }

  const data = await response.json();

  return data.Results || [];
};
