"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        aria-label="Close"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />
      <div className="absolute left-1/2 top-1/2 w-[92vw] max-w-lg -translate-x-1/2 -translate-y-1/2">
        <div className={cn("rounded-xl border border-zinc-200 bg-white p-5 shadow-lg")}>
          {title ? <h3 className="text-base font-semibold">{title}</h3> : null}
          <div className="mt-3">{children}</div>
        </div>
      </div>
    </div>
  );
}
