import { Container } from "@/components/ui/container";
import ContactForm from "@/components/forms/contact-form";

export default function ContactPage() {
  return (
    <Container className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-3 text-zinc-600">Tell us what you want to build. We’ll reply with next steps.</p>

      <div className="mt-10 max-w-xl">
        <ContactForm />
      </div>
    </Container>
  );
}
