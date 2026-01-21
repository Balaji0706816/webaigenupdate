"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="max-w-xl">
      <h2 className="text-lg font-semibold">Something went wrong</h2>
      <p className="mt-2 text-sm text-zinc-600">Try again. If it persists, check server logs.</p>
      <button
        className="mt-4 rounded-md border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-50"
        onClick={() => reset()}
      >
        Retry
      </button>
    </div>
  );
}
