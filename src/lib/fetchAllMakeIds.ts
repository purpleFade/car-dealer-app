import { fetchVehicles } from './fetchVehicles';

export const fetchAllMakeIds = async (): Promise<number[]> => {
  const vehicles = await fetchVehicles();

  return vehicles.map((vehicle) => vehicle.MakeId);
};
