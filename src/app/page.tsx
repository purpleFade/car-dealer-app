'use client';

import NextButton from '@/components/NextButton/NextButton';
import { fetchVehicles } from '@/lib/fetchVehicles';
import { Vehicle } from '@/types/vehicle';
import { useEffect, useState } from 'react';

const years = Array.from({ length: 2024 - 2015 + 1 }, (_, i) => 2015 + i);

export default function Home() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [year, setYear] = useState<number>(0);
  const [makeId, setMakeId] = useState<string>('');

  useEffect(() => {
    fetchVehicles().then((vehicles) => setVehicles(vehicles));
  }, []);

  const button = <NextButton isDisabled={!makeId || !year} makeId={makeId} year={year} />;

  const handleMakeIdChange = (name: string) => {
    setMakeId(name);
  };

  const handleYearChange = (year: number) => {
    setYear(year);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <h1 className="text-2xl font-bold">Vehicles</h1>

      <select
        value={makeId}
        onChange={(e) => handleMakeIdChange(e.target.value)}
        className="block text-black w-1/2 p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-purple-500 focus:border-purple-500"
      >
        <option value="" disabled>
          Select a Name
        </option>

        {vehicles.map((vehicle) => (
          <option key={vehicle.MakeId} value={vehicle.MakeId} className="text-purple-800">
            {vehicle.MakeName}
          </option>
        ))}
      </select>

      <select
        value={year}
        onChange={(e) => handleYearChange(+e.target.value)}
        className="block text-black w-1/2 p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-purple-500 focus:border-purple-500"
      >
        <option value="" disabled>
          Select a Year
        </option>

        {years.map((year) => (
          <option key={year} value={year} className="text-purple-800">
            {year}
          </option>
        ))}
      </select>

      {button}
    </div>
  );
}
