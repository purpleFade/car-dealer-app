import Link from 'next/link';

interface NextButtonProps {
  isDisabled: boolean;
  makeId: string | null;
  year: number | null;
}

const NextButton: React.FC<NextButtonProps> = ({ isDisabled, makeId, year }) => {
  const enabledClass = `text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br 
  focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 
  dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`;

  const disabledClass = `text-white bg-gray-300 cursor-not-allowed shadow-none 
  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`;

  return (
    <>
      {isDisabled ? (
        <button disabled className={disabledClass}>
          Next
        </button>
      ) : (
        <Link href={`/result/${makeId}/${year}`} className={enabledClass}>
          Next
        </Link>
      )}
    </>
  );
};

export default NextButton;
