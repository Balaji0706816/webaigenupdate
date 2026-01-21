"use client";

import { Card } from "@/components/card";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { Button } from "@/components/button";

export default function OnboardingForm() {
  return (
    <Card className="p-6">
      <h3 className="text-base font-semibold">Project details</h3>
      <p className="mt-1 text-sm text-zinc-600">Quick intake to scope your build.</p>

      <form className="mt-5 space-y-4">
        <div>
          <label className="text-sm font-medium">Company</label>
          <Input name="company" placeholder="Company name" className="mt-2" />
        </div>
        <div>
          <label className="text-sm font-medium">Goal</label>
          <Textarea name="goal" placeholder="What outcome do you want?" rows={4} className="mt-2" />
        </div>
        <Button type="button" variant="outline">Save (coming soon)</Button>
      </form>
    </Card>
  );
}
