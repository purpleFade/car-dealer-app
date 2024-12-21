import { Vehicle } from '@/types/vehicle';
import { useState } from 'react';

const fetchVehicles = async (): Promise<Vehicle[]> => {
  const response = await fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json");
  const data = await response.json();

  return data;
} 

export default function Home() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect

  return (
    <div className="">

    </div>
  );
}
