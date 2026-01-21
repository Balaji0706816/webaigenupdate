import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </main>
  );
}
