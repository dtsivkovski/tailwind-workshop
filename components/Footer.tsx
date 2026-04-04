"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TOTAL_EXERCISES = 10;

export default function Footer() {
  const pathname = usePathname();
  const match = pathname.match(/^\/exercise\/(\d+)$/);

  if (!match) return null;

  const current = parseInt(match[1], 10);
  const hasPrev = current > 1;
  const hasNext = current < TOTAL_EXERCISES;

  return (
    <footer className="fixed bottom-0 left-0 w-full h-14 bg-white border-t border-gray-200 flex items-center justify-between px-6">
      <div className="w-24">
        {hasPrev && (
          <Link
            href={`/exercise/${current - 1}`}
            className="text-sm font-medium text-gray-600 hover:text-blue-800 transition-colors hover:underline"
          >
            ← Previous
          </Link>
        )}
      </div>

      <span className="text-sm text-gray-500">
        Exercise {current} / {TOTAL_EXERCISES}
      </span>

      <div className="w-24 flex justify-end">
        {hasNext && (
          <Link
            href={`/exercise/${current + 1}`}
            className="text-sm font-medium text-gray-600 hover:text-blue-800 transition-colors hover:underline"
          >
            Next →
          </Link>
        )}
      </div>
    </footer>
  );
}
