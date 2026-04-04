export default function ExerciseTwo() {
  return (
    <div className="flex min-h-screen">
      <main className="flex flex-1 flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center rounded-xl border-4 border-black py-10 px-10 gap-10">
          {/* Edit the button below with unique hover effects. Don't forget the transition class */}
          <button className="border border-blue-900 bg-blue-600 text-white px-4 py-2 rounded-md">
            Change my colors!
          </button>
          <button className="border border-pink-900 bg-pink-600 text-white px-4 py-2 rounded-md">
            Change my scaling!
          </button>
          <button className="border border-amber-900 bg-amber-600 text-white px-4 py-2 rounded-md">
            Move me around!
          </button>
          <button className="border border-green-900 bg-green-700 text-white px-4 py-2 rounded-md">
            Do whatever here idc I'm just a button
          </button>
          {/* Don't edit above */}
        </div>
      </main>
    </div>
  );
}
