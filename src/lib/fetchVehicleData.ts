import { VehicleModel } from '@/types/vehicle';

export const fetchVehicleData = async (
  makeId: string,
  year: string,
): Promise<VehicleModel[]> => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_ALL_QUERY_VEHICLES +
      `/makeId/${makeId}/modelyear/${year}?format=json`,
  );

  if (!response.ok) {
    console.warn(
      `Non-200 response for makeId=${makeId}, year=${year}: ${response.status}`,
    );
    return [];
  }

  const data = await response.json();
  return data.Results ?? [];
};
