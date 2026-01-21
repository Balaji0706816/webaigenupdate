import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    subtitle: "Best for a new website or landing page.",
    price: "From $1,500",
    bullets: ["Landing page + contact", "Basic SEO + performance", "Deployment on Vercel"],
    featured: false,
  },
  {
    name: "Growth",
    subtitle: "Website + lead capture + integrations.",
    price: "From $3,500",
    bullets: ["Multi-page site", "Forms + CRM integration", "Analytics + tracking"],
    featured: true,
  },
  {
    name: "AI + Automation",
    subtitle: "AI assistant + workflow automation.",
    price: "From $5,000",
    bullets: ["Chatbot / AI assistant", "Automation workflows", "Dashboards / reporting"],
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <Container className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Pricing</h1>
      <p className="mt-3 text-zinc-600">
        Transparent starting points. We’ll finalize scope after a short discovery call.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <Card
            key={t.name}
            className={[
              "p-6",
              t.featured ? "border-zinc-900 shadow-sm" : "border-zinc-200",
            ].join(" ")}
          >
            <p className="text-sm font-semibold">{t.name}</p>
            <p className="mt-1 text-sm text-zinc-600">{t.subtitle}</p>
            <p className="mt-4 text-2xl font-semibold tracking-tight">{t.price}</p>

            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              {t.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Button variant={t.featured ? "primary" : "outline"} className="w-full">
                Get started
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}
