interface YearProps {
  params: {
    makeId: string;
    year: string;
  }
}

const Year = ({ params }: YearProps) => {
  const { makeId, year } = await params;
  
  return <div>
    
  </div>;
};

export default Year;
