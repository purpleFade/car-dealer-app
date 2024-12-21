'use client';

import { Vehicle } from '@/types/vehicle';
import { useEffect, useState } from 'react';

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
    <div className=''>
      <h1 className=''>Vehicles</h1>
      <select>
        {vehicles.map((vehicle) => (
          <option key={vehicle.MakeId} value={vehicle.MakeId}>
            {vehicle.MakeName}
          </option>
        ))}
      </select>

      <select>
        {
          vehicles.map((vehicle) => (
            <option key={ vehicle.VehicleTypeId }
          ))
        }
      </select>
    </div>
  );
}
