import { Vehicle } from '@/types/vehicle';

export const fetchVehicles = async (): Promise<Vehicle[]> => {
  const url = process.env.NEXT_PUBLIC_ALL_VEHICLES!;

  const response = await fetch(url + '?format=json');

  if (!response.ok) {
    console.warn(`Non-200 response: ${response.status}`);
    return [];
  }

  const data = await response.json();
  return data.Results ?? [];
};
