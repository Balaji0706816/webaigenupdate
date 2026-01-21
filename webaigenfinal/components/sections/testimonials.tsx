import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";

const quotes = [
  { quote: "They shipped a clean site fast and helped automate our intake process.", name: "Operations Lead", org: "Local Services Co." },
  { quote: "Our chatbot reduced support time and increased qualified leads.", name: "Founder", org: "E-commerce Brand" },
  { quote: "Professional, responsive, and the codebase is easy to maintain.", name: "CTO", org: "B2B Startup" },
];

export default function Testimonials() {
  return (
    <Container className="py-12">
      <h2 className="text-2xl font-semibold tracking-tight">Trusted by teams</h2>
      <p className="mt-2 text-zinc-600">Results-focused work with a clean delivery process.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {quotes.map((q) => (
          <Card key={q.quote} className="p-6">
            <p className="text-sm text-zinc-700">“{q.quote}”</p>
            <div className="mt-4">
              <p className="text-sm font-semibold">{q.name}</p>
              <p className="text-xs text-zinc-600">{q.org}</p>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}
