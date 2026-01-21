import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

const nav = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-zinc-50/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-zinc-900 text-white">
            W
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold">WebAI Gen</p>
            <p className="text-xs text-zinc-600">AI + Web services for businesses.</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-zinc-700 hover:text-zinc-900"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink href="/dashboard" variant="outline" className="hidden sm:inline-flex">
            Dashboard
          </ButtonLink>
          <ButtonLink href="/contact" variant="primary">
            Book a call
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
