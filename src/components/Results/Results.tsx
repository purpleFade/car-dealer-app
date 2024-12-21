import React, { Suspense } from 'react';
import VehicleList from '../VehicleList/VehicleList';
import { Loading } from '../Loading/Loading';

interface ResultsProps {
  makeId: string;
  year: string;
}

const Results = ({ makeId, year }: ResultsProps) => {
  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Vehicle Models for Make ID: {makeId} and Year: {year}
      </h1>

      <Suspense fallback={<Loading />}>
        <VehicleList makeId={makeId} year={year} />
      </Suspense>
    </div>
  );
};

export default Results;
