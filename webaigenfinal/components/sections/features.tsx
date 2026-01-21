import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";

const cards = [
  { title: "High-performance websites", desc: "SEO-ready, accessible, and built for conversion." },
  { title: "AI assistants & chatbots", desc: "Answer questions, capture leads, and support customers 24/7." },
  { title: "Workflow automations", desc: "Connect tools like email, CRM, and calendars to save time." },
];

export default function Features() {
  return (
    <Container className="py-12">
      <h2 className="text-2xl font-semibold tracking-tight">What we build</h2>
      <p className="mt-2 text-zinc-600">
        Modern, maintainable systems that are easy to extend as your business grows.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <Card key={c.title} className="p-6">
            <h3 className="text-base font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-zinc-600">{c.desc}</p>
          </Card>
        ))}
      </div>
    </Container>
  );
}
