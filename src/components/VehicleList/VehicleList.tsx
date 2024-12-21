import { fetchVehicleData } from '@/lib/fetchVehicleData';

interface VehicleListProps {
  makeId: string;
  year: string;
}

const VehicleList = async ({ makeId, year }: VehicleListProps) => {
  try {
    const data = await fetchVehicleData(makeId, year);
    if (!data) {
      throw new Error('Failed to fetch vehicle data!');
    }

    return (
      <ul className="space-y-2">
        {data.map((model) => (
          <li key={model.Model_ID} className="p-4 rounded shadow-md">
            <h2 className="font-medium">
              {model.Make_Name} - {model.Model_Name}
            </h2>
          </li>
        ))}
      </ul>
    );
  } catch (error) {
    return (
      <div>Error: {error instanceof Error ? error.message : 'There are no items!'}</div>
    );
  }
};

export default VehicleList;
