export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-orange-50 via-white to-teal-100">
      <main className="flex w-[100vw] flex-1 flex-col px-6 py-20 sm:px-10 lg:px-32 xl:px-40">
        <h1 className="text-4xl font-bold text-teal-800">Welcome to the Tailwind Workshop!</h1>
        <ol className="mt-4 gap-4 px-4">
          <li className="text-lg text-gray-700">
            <a href="/exercise/1" className="text-blue-800 hover:underline">
              Exercise 1 - Colors
            </a>
          </li>
          <li className="text-lg text-gray-700">
            <a href="/exercise/2" className="text-blue-800 hover:underline">
              Exercise 2 - Hover Effect
            </a>
          </li>
        </ol>
      </main>
    </div>
  );
}
