interface YearProps {
  params: {
    makeId: string;
    year: string;
  };
}

const Year = async ({ params }: YearProps) => {
  const { makeId, year } = await params;

  return <div>
    <h1>{ makeId }</h1>
  </div>;
};

export default Year;
