interface VehicleModel {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export const fetchVehicleData = async (
  makeId: string,
  year: string
): Promise<VehicleModel[]> => {
  const response = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch vehicle data!');
  }

  const data = await response.json();
  return data.Results || [];
};
