import { Suspense } from 'react';
import { Loading } from '@/components/Loading/Loading';
import Results from '@/components/Results/Results';
import { fetchAllMakeIds } from '@/lib/fetchAllMakeIds';

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
  let makeIds: number[] = [];
  try {
    makeIds = await fetchAllMakeIds();
  } catch (e) {
    console.error('Failed to fetch all make IDs:', e);
    return [];
  }

  const years = Array.from({ length: 2024 - 2015 + 1 }, (_, i) => 2015 + i);

  return makeIds.flatMap((makeId) =>
    years.map((year) => ({
      makeId: makeId.toString(),
      year: year.toString(),
    })),
  );
}
