import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <Head>
        <title>Active Recall App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold mb-6">
        <span className="text-blue-600">Welcome to Active learn!</span>
        </h1>

        <h2 className="mb-6 text-lg text-blue-600">
          The effective study tool to enhance your memory and learning.
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/signup" className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
            Sign up
          </Link>
          <Link href="/login" className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10">
            Login
          </Link>
        </div>
      </main>
    </div>
  );
}
