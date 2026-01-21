import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";

const items = [
  { title: "Websites & Landing Pages", desc: "Fast Next.js builds with SEO, analytics, and conversion-focused UX." },
  { title: "AI Assistants & Chatbots", desc: "Answer FAQs, capture leads, and support customers with smart routing." },
  { title: "Automations & Integrations", desc: "Connect CRM, email, calendars, payments, and internal tools." },
];

export default function ServicesPage() {
  return (
    <Container className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Everything you need to launch and scale</h1>
      <p className="mt-3 max-w-2xl text-zinc-600">
        Practical solutions that improve operations and generate revenue—built with clean code and reliable delivery.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <Card key={it.title} className="p-6">
            <h3 className="text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-zinc-600">{it.desc}</p>
          </Card>
        ))}
      </div>
    </Container>
  );
}
