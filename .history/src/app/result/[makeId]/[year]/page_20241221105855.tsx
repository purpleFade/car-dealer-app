interface YearProps {
  params: {
    makeId: string;
    year: string;
  };
}

const Year = async ({ params }: YearProps) => {
  const { makeId, year } = await params;

  return <div>
    <h1>Year</h1>
    <p>Make ID: {makeId}</p>
    <p>Year
  </div>;
};

export default Year;
