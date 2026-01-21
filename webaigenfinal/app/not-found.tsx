import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-zinc-600">
        The page you’re looking for doesn’t exist.
      </p>

      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex rounded-md border px-4 py-2 text-sm hover:bg-zinc-50"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}
