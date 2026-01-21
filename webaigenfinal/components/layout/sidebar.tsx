import Link from "next/link";

const items = [
  { href: "/dashboard", label: "Overview" },
  { href: "/settings", label: "Settings" },
  { href: "/", label: "↩ Marketing" },
];

export default function Sidebar() {
  return (
    <aside className="hidden border-r border-zinc-200 bg-white md:block">
      <div className="px-5 py-6">
        <h2 className="text-sm font-semibold text-zinc-900">Dashboard</h2>
        <nav className="mt-4 grid gap-2">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="rounded-md px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
            >
              {it.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
