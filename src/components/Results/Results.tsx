'use client';

import { useRouter } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';
import VehicleList from '../VehicleList/VehicleList';
import { Loading } from '../Loading/Loading';

interface ResultsProps {
  makeId: string;
  year: string;
}

interface VehicleModel {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

const fetchVehicleData = async (
  makeId: string,
  year: string,
): Promise<VehicleModel[]> => {
  const response = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch vehicle data!');
  }

  const data = await response.json();
  return data.Results || [];
};

const Results = ({ makeId, year }: ResultsProps) => {
  const [vehicles, setVehicles] = useState<VehicleModel[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const loadVehicleData = async () => {
      try {
        const data = await fetchVehicleData(makeId, year);
        setVehicles(data);
      } catch (error) {
        console.error(error);
        setErrorMessage('There are no vehicle models for this year!');
      }
    };

    loadVehicleData();
  }, [makeId, year]);

  const makeName = vehicles.find((model) => model.Make_ID === Number(makeId));

  return (
    <div className='p-6 min-h-screen'>
      <button
        className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
        onClick={() => router.back()}
      >
        <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
          Go back
        </span>
      </button>
      <h1 className='text-2xl font-bold mb-4'>
        Vehicle Models for Make ID: {makeId} and Year: {year}
      </h1>

      <Suspense fallback={ <Loading /> }>
        <VehicleList makeId={makeId} year={year} />
      </Suspense>
    </div>
  );
};

export default Results;
