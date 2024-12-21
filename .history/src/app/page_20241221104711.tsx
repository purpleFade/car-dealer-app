'use client';

import { Vehicle } from '@/types/vehicle';
import { useEffect, useState } from 'react';

const years = Array.from({ length: 2024 - 2015 + 1 }, (_, i) => 2015 + i);

const fetchVehicles = async (): Promise<Vehicle[]> => {
  const response = await fetch(
    'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json',
  );
  const data = await response.json();

  return data.Results;
};

export default function Home() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    fetchVehicles().then((vehicles) => setVehicles(vehicles));
  });

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold mb-5'>Vehicles</h1>
      <select className="block text-black w-1/2 p-2 mb-4 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-purple-500 focus:border-purple-500">
        {vehicles.map((vehicle) => (
          <label>
            <p> Choose </p>
            <option key={vehicle.MakeId} value={vehicle.MakeId} className="text-purple-800">
              {vehicle.MakeName}
            </option>
          </label>
        ))}
      </select>

      <select className="block text-black w-1/2 p-2 mb-4 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-purple-500 focus:border-purple-500">
        {years.map((year) => (
          <option key={year} value={year} className="text-purple-800">
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}
