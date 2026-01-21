import { cn } from "@/lib/utils";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm outline-none",
        "focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200",
        props.className
      )}
    />
  );
}
