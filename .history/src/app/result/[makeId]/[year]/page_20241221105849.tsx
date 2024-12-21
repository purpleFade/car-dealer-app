interface YearProps {
  params: {
    makeId: string;
    year: string;
  };
}

const Year = async ({ params }: YearProps) => {
  const { makeId, year } = await params;

  return <div></div>;
};

export default Year;
