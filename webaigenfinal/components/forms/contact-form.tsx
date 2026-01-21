"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [msg, setMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMsg("");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      message: String(form.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed");

      setStatus("sent");
      (e.currentTarget as HTMLFormElement).reset();
      setMsg("Thanks — we received your message.");
    } catch {
      setStatus("error");
      setMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <Card className="p-6">
      <h3 className="text-base font-semibold">Send a message</h3>
      <p className="mt-1 text-sm text-zinc-600">We’ll reply within 1–2 business days.</p>

      <form onSubmit={onSubmit} className="mt-5 space-y-4">
        <div>
          <label className="text-sm font-medium">Name</label>
          <Input name="name" placeholder="Your name" required className="mt-2" />
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <Input type="email" name="email" placeholder="you@company.com" required className="mt-2" />
        </div>

        <div>
          <label className="text-sm font-medium">Message</label>
          <Textarea name="message" placeholder="What are you looking to build?" required rows={5} className="mt-2" />
        </div>

        <div className="flex items-center gap-3">
          <Button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send"}
          </Button>
          <p className="text-xs text-zinc-500">By sending, you agree to be contacted about your request.</p>
        </div>

        {msg ? (
          <p className={status === "sent" ? "text-sm text-emerald-600" : "text-sm text-rose-600"}>{msg}</p>
        ) : null}
      </form>
    </Card>
  );
}
