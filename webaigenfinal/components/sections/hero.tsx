import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";

export default function Hero() {
  return (
    <Container className="py-14">
      <p className="text-xs font-semibold tracking-wider text-zinc-600">
        AI + WEB SERVICES FOR BUSINESSES
      </p>

      <div className="mt-4 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Build faster with modern websites and practical{" "}
            <span className="text-zinc-900">AI automation</span>
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-600">
            We help teams launch high-converting sites, integrate AI assistants, and automate workflows—without complexity.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="primary">Book a call</ButtonLink>
            <ButtonLink href="/services" variant="outline">See services</ButtonLink>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Card className="p-4">
              <p className="text-xs font-semibold text-zinc-600">Fast</p>
              <p className="mt-1 text-sm font-medium">Next.js + Vercel</p>
            </Card>
            <Card className="p-4">
              <p className="text-xs font-semibold text-zinc-600">Secure</p>
              <p className="mt-1 text-sm font-medium">Best practices</p>
            </Card>
            <Card className="p-4">
              <p className="text-xs font-semibold text-zinc-600">Scalable</p>
              <p className="mt-1 text-sm font-medium">Clean architecture</p>
            </Card>
          </div>
        </div>

        <Card className="p-6">
          <p className="text-sm font-semibold">From prototype to production</p>
          <p className="mt-1 text-sm text-zinc-600">
            Full stack: data, models, APIs and product layers.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 p-4">
              <p className="text-xs font-semibold text-zinc-600">Model domains</p>
              <p className="mt-1 text-sm font-semibold">NLP • CV • Tabular</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge>Python</Badge>
                <Badge>PyTorch</Badge>
                <Badge>TF</Badge>
              </div>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4">
              <p className="text-xs font-semibold text-zinc-600">Product layer</p>
              <p className="mt-1 text-sm font-semibold">APIs & interfaces</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge>Next.js</Badge>
                <Badge>Node</Badge>
                <Badge>Cloud</Badge>
              </div>
            </div>
          </div>

          <ul className="mt-5 space-y-2 text-sm text-zinc-700">
            <li className="flex gap-2">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-zinc-400" />
              Recommendation & personalisation engines
            </li>
            <li className="flex gap-2">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-zinc-400" />
              Risk scoring & forecasting pipelines
            </li>
            <li className="flex gap-2">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-zinc-400" />
              LLM-powered chatbots & internal copilots
            </li>
          </ul>

          <div className="mt-6 text-right">
            <Link href="/services" className="text-sm font-medium text-zinc-900 hover:underline">
              Explore capabilities →
            </Link>
          </div>
        </Card>
      </div>
    </Container>
  );
}
