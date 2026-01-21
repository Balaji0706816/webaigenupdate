import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function CTA() {
  return (
    <div className="mt-16 border-t border-zinc-200 bg-zinc-950">
      <Container className="py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-white">Ready to ship?</h3>
            <p className="mt-2 text-sm text-zinc-300">
              Tell us what you’re building—we’ll propose a plan, timeline, and build path.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
          >
            Contact us
          </Link>
        </div>
      </Container>
    </div>
  );
}
