import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Not Found</h2>
        <p className="mb-4">Could not find requested resource</p>
        <Link href="/" className="font-bold text-purple-800 text-2xl">
          Return Home
        </Link>
      </div>
    </div>
  );
}
