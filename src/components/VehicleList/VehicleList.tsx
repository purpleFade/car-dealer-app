import { fetchVehicleData } from '@/lib/fetchVehicleData';

interface VehicleListProps {
  makeId: string;
  year: string;
}

const VehicleList = async ({ makeId, year }: VehicleListProps) => {
  const data = await fetchVehicleData(makeId, year);

  if (!data || data.length === 0) {
    return (
      <p>
        No data found for make ID {makeId} and year {year}
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((model) => (
        <li key={model.Model_ID} className="p-4 rounded shadow-md">
          <h2 className="font-medium">
            {model.Make_Name} - {model.Model_Name}
          </h2>
        </li>
      ))}
    </ul>
  );
};

export default VehicleList;
