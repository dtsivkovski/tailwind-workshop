export default function ExerciseOne() {
  return (
    <div className="flex min-h-screen">
      <main className="flex flex-1 flex-col items-center justify-center gap-4">
        <div className="grid h-32 w-80 grid-cols-3 place-items-center rounded-xl border-4 border-black">
          {/* Edit background colors below: */}
          <div className="h-20 w-20 rounded-full border-2 border-black" />
          <div className="h-20 w-20 rounded-full border-2 border-black" />
          <div className="h-20 w-20 rounded-full border-2 border-black" />
          {/* Don't edit below */}
        </div>

        <div className="flex w-80 flex-col items-center justify-center gap-2 rounded-xl border-4 border-black py-4">
          {/* Edit text color below: */}
          <p className="text-center">The Daniel jumped over the quick Dylan.</p>
          <p className="text-center">The Daniel jumped over the quick Dylan.</p>
          <p className="text-center">The Daniel jumped over the quick Dylan.</p>
          {/* Don't edit below */}
        </div>

        <div className="grid h-32 w-80 grid-cols-3 place-items-center rounded-xl border-4 border-black">
          {/* Edit background colors below: */}
          <div className="h-20 w-20 border-2 border-black" />
          <div className="h-20 w-20 border-2 border-black" />
          <div className="h-20 w-20 border-2 border-black" />
          {/* Don't edit below */}
        </div>
      </main>
    </div>
  );
}
