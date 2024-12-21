import { Suspense } from 'react';
import { Loading } from '@/components/Loading/Loading';
import Results from '@/components/Results/Results';

interface PageProps {
  params: Promise<{
    makeId: string;
    year: string;
  }>;
}
const Page = async ({ params }: PageProps) => {
  const { makeId, year } = await params;

  return (
    <Suspense fallback={<Loading />}>
      <Results makeId={makeId} year={year} />;
    </Suspense>
  );
};

export default Page;

export async function generateStaticParams() {
  return [
    { makeId: '440', year: '2020' },
    { makeId: '441', year: '2021' },
    { makeId: '442', year: '2022' },
  ];
}
