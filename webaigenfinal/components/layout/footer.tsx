import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 bg-white">
      <Container className="py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-semibold">WebAI Gen</p>
            <p className="mt-1 text-sm text-zinc-600">AI + Web services for businesses.</p>
            <p className="mt-6 text-xs text-zinc-500">© {new Date().getFullYear()} WebAI Gen LLC. All rights reserved.</p>
          </div>

          <div className="flex gap-10">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-zinc-600">Links</p>
              <div className="grid gap-2 text-sm">
                <Link className="text-zinc-700 hover:text-zinc-900" href="/services">Services</Link>
                <Link className="text-zinc-700 hover:text-zinc-900" href="/pricing">Pricing</Link>
                <Link className="text-zinc-700 hover:text-zinc-900" href="/contact">Contact</Link>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold text-zinc-600">Legal</p>
              <div className="grid gap-2 text-sm">
                <Link className="text-zinc-700 hover:text-zinc-900" href="/privacy">Privacy</Link>
                <Link className="text-zinc-700 hover:text-zinc-900" href="/terms">Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
