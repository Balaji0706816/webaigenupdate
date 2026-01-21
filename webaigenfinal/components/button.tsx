import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

type Variant = "primary" | "outline" | "ghost";

export function Button({
  className,
  variant = "primary",
  asChild,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  asChild?: boolean;
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";
  const variants: Record<Variant, string> = {
    primary: "bg-zinc-900 text-white hover:bg-zinc-800",
    outline: "border border-zinc-300 bg-white hover:bg-zinc-50",
    ghost: "hover:bg-zinc-100",
  };

  if (asChild) {
    // For <Link> usage
    return (
      <span className={cn(base, variants[variant], className)} {...props}>
        {children}
      </span>
    );
  }

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2";
  const variants: Record<Variant, string> = {
    primary: "bg-zinc-900 text-white hover:bg-zinc-800",
    outline: "border border-zinc-300 bg-white hover:bg-zinc-50",
    ghost: "hover:bg-zinc-100",
  };
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
